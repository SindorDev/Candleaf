import logo from "../../assets/images/footer.png"
const Footer = () => {
  return (
       <footer className="py-[60px] bg-[#272727]">
              <div className="w-full max-w-[1240px] mx-auto">
                <div>

                     <div className="w-full h-[1px] bg-[#e0e0e0]"></div>
                     <div className="flex items-center my-10 justify-between w-full">
                            <div className="flex items-start  gap-2 flex-col w-full max-w-[300px]">
                                   <img src={logo} alt="Logo cite"/>
                                   <p className="text-[#fff] text-base font-normal title leading-snug">Your natural candle made for your home and for your wellness.</p>
                            </div>
                            <div className="flex flex-col gap-5">
                                   <p className="text-[#56b280] text-base font-normal title leading-7">
                                   Discovery
                                   </p>
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   New season
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Most searched
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Most selled
                                   </span>
                            </div>
                            
                            <div className="flex flex-col gap-5">

                                   <p className="text-[#56b280] text-base font-normal title leading-7">
                                   About
                                   </p>
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Help
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Shipping
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Affiliate
                                   </span>
                            </div>
                            
                            <div className="flex flex-col gap-5">

                                   <p className="text-[#56b280] text-base font-normal title leading-7">
                                   Info
                                   </p>
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Contact us
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Privacy Policies
                                   </span>
                                   
                                   <span className="text-[#e1e1e1] text-base font-medium title leading-7">
                                   Terms & Conditions
                                   </span>
                            </div>
                            
                     </div>
                </div>
              </div>
       </footer>
)
}

export default Footer