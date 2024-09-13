import { BiCartAlt } from "react-icons/bi"; 
import { useParams } from "react-router-dom"
import { useGetProductByIdMutation, useGetProductCommentsQuery } from "../../redux/api/products-api"
import { useEffect } from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Company from "../../components/company/Company"
import { IComment, IProduct } from "../../types"
import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/slice/cartSlice";
import { message, Radio, Select, Space  } from "antd";

const Details = () => {
  const {id} = useParams<{id: string}>()
  const [getProductById, {data}] = useGetProductByIdMutation<{data: IProduct}>()
  const {data: comments} = useGetProductCommentsQuery<{data: {comments: IComment[]}}>()

  const dispatch = useDispatch()
  useEffect(() => {
    getProductById(Number(id))
  }, [id])

  const handleAddToCart = (product: IProduct) => {
    dispatch(AddToCart(product))
    message.success(`${product.title} added to cart`)
  }

  return (
    <>
    <Header/>
    <div>

      <section className="py-16">
        <div className="w-full max-w-[1240px] mx-auto">
            <div>
              {
                 data  && (
                  <div key={data.id} className="flex items-start gap-[90px] w-full">
                  <div className="flex items-center gap-5 flex-col w-full text-center">
                      <div className="w-full bg-[#F7F8FA] h-full flex items-center justify-center">
                    <img src={data.thumbnail} alt={data.title} className="w-full h-full object-contain" />
                      </div>
                    <div>

                      <h3 className="text-[#272727] text-[17px] font-medium title leading-relaxed">
                        {data.description}
                      </h3>
                      <span className="text-[#1d252c] text-xl font-medium title leading-relaxed text-green-500 mt-2 inline-block">
                      🚚 FREE SHIPPING
                      </span>
                    </div>
                  </div>
                  <div className="w-full">

                    <div>
                      <h1 className="text-[#272727] text-[26px] font-medium title leading-[57.60px]">
                        {data.title}
                      </h1>
                      <div className="flex items-start gap-[100px]  w-full ">
                        <div>
                          
                      <span className="text-[#56b280] text-[26px] font-semibold title leading-[57.60px]">
                        ${data.price}
                      </span>
                      <div>
                        
                       <span className="text-[#272727] text-lg font-normal text leading-relaxed">
                          Quantity
                        </span>
                        <div>
                          <div className="flex items-center gap-4 mt-2 border-2 px-2 justify-center border-[#56b280] w-full max-w-[80px]">
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">+</button>
                            <span className="text-[#272727] text-xl font-medium">1</span>
                            <button className="w-8 h-8 bg-[#F7F8FA] text-[#272727] text-xl font-medium flex items-center justify-center rounded">-</button>
                          </div>
                        </div>
                      </div>
                        </div>
                        <div className="flex items-start gap-5 flex-col">
                            <div className="flex items-center p-4 gap-2">
                              <Radio></Radio>
                              <span className="text-[#272727] text-base font-normal text leading-none">
                              One time purchase  
                              </span>
                            </div>            
                            <div className="flex items-start border-2 p-4 rounded flex-col border-[#e6e6e6] gap-2">
                              <div className="flex items-center gap-2">
                              <Radio></Radio>
                                <span  className="text-[#272727] text-base font-normal text leading-none">
                              Subscribe and delivery every 
                                </span>
                                <Space>
                                <Select
                                defaultValue="1 weeks"
                                style={{ width: "100%" }}
                                options={[
                                  { value: '1 weeks', label: '1 weeks' },
                                  { value: '2 weeks', label: '2 weeks' },
                                  { value: '3 weeks', label: '3 weeks' },
                                ]}
                              />
                              </Space> 
                              </div>
                              <p className="">{data.description}</p> 
                            </div>            

                              <button onClick={() => handleAddToCart(data)} className=" border-2 border-dashed border-[#56b280] hover:bg-[#56b280]  ease-in-out duration-300 text-[#56b280] hover:text-white text-base flex items-center mt-[67px]  gap-5 font-medium text leading-none py-4 w-full justify-center px-20 rounded">
                                <BiCartAlt size={20} /> + Add to cart
                              </button>         
                        </div>
                      </div>
                      <div className="flex  flex-col gap-2 my-5">
                        <h3 className="text-[#272727] text-[26px] font-medium title leading-[57.60px]">
                          Customer Reviews
                        </h3>
                        {
                          comments?.comments?.slice(0, 3).map((comment: IComment) => (
                            <div key={comment.id} className="flex gap-5 border-2 border-[#e6e6e6] p-4 rounded">
                              <h3>{comment.user.fullName}:</h3>
                              <p>{comment.body}</p>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  </div>
                )
               }
            </div>
        </div>
      </section>
    </div>
    <Footer/>
    <Company/>
    </>
  )
}

export default Details