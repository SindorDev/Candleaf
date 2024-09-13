import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './routes/home/Menu'
import Details from './routes/details/Details'
import Login from './routes/auth/login/Login'
import Register from './routes/auth/register/Register'
import CartProducts from './routes/cartProduct/CartProducts'
import Profile from './routes/profile/Profile'
import { useSelector } from 'react-redux'

function App() {
  const {token} = useSelector((state: any) => state.auth)

  return (
    <div className='w-full  mx-auto'>
      
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/product/:id' element={<Details/>}/>
      <Route path='/auth' element={token ? <Navigate to="/"/> : <Outlet/>}>
        <Route index path='' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
      <Route path='/cartProduct' element={<CartProducts/>}/>
      <Route path='/profile' element={token ? <Profile/> : <Navigate to="/auth"/>}/>
    </Routes>
    </div>
  )
}

export default App
