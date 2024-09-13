import { Link } from "react-router-dom"
import { useGetProductsQuery } from "../../redux/api/products-api"
import { IProduct } from "../../types"
const Products = ({end}: {end: number}) => {
  const {data} = useGetProductsQuery()


  return (
       <section className="my-[90px]">
            <div className="text-center w-full max-w-[1240px] mx-auto ">
              <h1 className="text-[#0b254b] text-[40px] font-medium title leading-[57.60px]">Products</h1>
              <p className="text-[#5e6e89] text-medium title text-lg leading-7 tracking-tight">Order it for you or for your beloved ones </p>
              <div className="grid grid-cols-4  mt-[60px] gap-8">
                {
                  data?.products.slice(0, end).map((product: IProduct) => (
                    <div key={product.id} className="w-full max-w-[255px] shadow-cm rounded ">
                        <div className="w-full bg-[#F7F8FA] h-[50%]">
                          <Link to={`/product/${product.id}`} className="cursor-pointer">
                      <img src={product.thumbnail} className="w-full h-full object-contain" alt={product.title} />
                      </Link>
                        </div>
                        
                        <div className="flex flex-col px-5 py-[10px]">
                          
                      <h3 className="text-[#1c283f] text-start text-base font-medium title leadin-7">{product.title}</h3>
                      <p className="text-[#56b280] text-xl font-medium text-end text mt-2 leading-7">{product.price}$</p>
                        </div>
                    </div>
                  ))
                }
              </div>
            </div>
       </section>
  )
}

export default Products