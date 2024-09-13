import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './routes/home/Menu'
import Details from './routes/details/Details'

function App() {

  return (
    <div className='w-full  mx-auto'>
      
    <Routes>
      <Route path='/' element={<Menu/>}/>
      <Route path='/product/:id' element={<Details/>}/>
    </Routes>
    </div>
  )
}

export default App
