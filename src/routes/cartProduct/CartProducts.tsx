import { useSelector } from "react-redux"
import CartProduct from "../../components/cartProduct/CartProduct"
import Company from "../../components/company/Company"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

const CartProducts = () => {

  const data = useSelector((state: any) => state.cart.products)



  return (
       <>
       <Header/>
       <CartProduct data={data}/>
       <Footer/>
       <Company/>
       </>
  )
}

export default CartProducts