import { useDispatch, useSelector } from "react-redux"
import { RemoveCart } from "../../redux/slice/cartSlice"
import { Link } from "react-router-dom"
import { message } from "antd"

const CartProduct = ({data}: any) => {
  const dispatch = useDispatch()
  const quantity = useSelector((state: any) => state.cart.quantity)
  const handleRemove = (item: any) => {
    dispatch(RemoveCart(item))
    message.success(`${item.title} removed from cart`)
  }

  return (


    <section className="my-[100px]">
      <div className="w-full max-w-[1240px] mx-auto">
          <div>
            <h1 className=" text-center text-[#272727] text-[26px] font-medium title leading-[57.60px]">Your cart items</h1>
          <Link to="/">
          <p className=" text-center text-[#56b280] text-lg font-normal text  mt-4 underline leading-relaxed">Back to shopping</p>
          </Link>

            <div className="flex items-center mt-[60px] justify-between">
              <span className="w-[445px]">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
              <div className="w-full my-8 border-2 border-[#e6e6e6]"></div>
            {
              data.map((item: any) => (
                
                  <>
                <div key={item.id} className="flex items-center">
                  <div className="flex items-center gap-5 w-full">
                    <div className="flex items-center gap-10">
                    <img src={item.thumbnail} width={100} height={100} alt={item.title} />
                    <div className="w-[505px]">
                      <h1 className="text-[#272727] text-[26px] font-medium title leading-[57.60px]">{item.title}</h1>
                      <button onClick={() => handleRemove(item)} className=" text-[#56b280] text-lg font-normal text underline leading-relaxed">Remove</button>
                    </div>
                    </div>
                    <div className="w-[240px]">
                      <span>${item.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2 border-2 border-[#56b280] w-full max-w-[80px]">
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">+</button>
                            <span className="text-[#272727] text-xl font-medium">1</span>
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">-</button>
                          </div>
                  </div>
                  <div>
                    <span>${item.price * quantity} </span>
                  </div>
                </div>
                  <div className="w-full my-8 border-2 border-[#e6e6e6]"></div>

                  </>
              ))
              
            }
            <div className="flex items-center gap-[70px] justify-end">
            <div className="flex flex-col items-end">
            <div className="flex items-center gap-10">
                <span className="text-[#272727] text-xl font-medium text leading-relaxed">Sub-total</span>
              <span className="text-right text-[#272727] text-xl font-medium text leading-relaxed">${40 * quantity} </span>

                </div>
              <p className=" text-right text-[#9e9e9e] text-base font-normal title leading-relaxed">Tax and shipping cost will be calculated later</p>

            </div>
            <button className="bg-[#56b280] py-2 px-[44px] rounded text-white text-lg font-medium text leading-relaxed">Checkout</button>
            </div>
            </div>
      </div>
    </section>
  )
}

export default CartProduct