import Clean from "../../components/clean/Clean"
import Company from "../../components/company/Company"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Products from "../../components/products/Products"
import Testimonials from "../../components/testimonals/Testimonials"

const Menu = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Products end={8}/>
    <Clean/>
    <Testimonials/>
    <Products end={4}/>
    <Footer/>
    <Company/>
    </>
  )
}
export default Menu