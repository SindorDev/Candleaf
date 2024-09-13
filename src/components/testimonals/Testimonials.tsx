import stars from "../../assets/images/Stars.png"
import { useGetUsersQuery } from "../../redux/api/user-api"
import { IUser } from "../../types"

const Testimonials = () => {

  const {data} = useGetUsersQuery()

  return (
      <section className="py-[90px]">
        <div className="w-full max-w-[1240px] mx-auto"> 
            <div>
                
              <h1 className="text-[#0b254b] text-[40px] font-medium title leading-[57.60px] text-center">Testimonials</h1>
              <p  className="text-[#5e6e89] text-medium title text-lg leading-7 tracking-tight text-center">Some quotes from our happy customers</p>
              <div className="mt-[27px] mb-[62px]">
                  <div className="grid grid-cols-3 gap-8">
                  {data?.users.slice(0, 3).map((user: IUser) => (
                    <div key={user.id} className="bg-white shadow-cm rounded-lg p-4 mt-8">
                      <div className="flex flex-col justify-center w-full gap-5 text-center items-center mb-4">
                        <img src={user.image} alt={user.firstName} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <div className="flex justify-center my-5">
                             <img src={stars} alt="Stars" />
                            </div>
                            <p className="text-[#1c283f] text-[22px] my-2 font-medium title leading-7 min-h-[60px]">{user.university}</p>
                          <h3 className="text-[#7b7f87] text-lg font-normal title">{user.firstName}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Testimonials