import clean from "../../assets/images/mockups.png"
const Clean = () => {
  return (
       <section className="bg-[#F7F8FA] py-[133px]">
              <div className="w-full max-w-[1240px] mx-auto">
                     <div className="flex items-center justify-between">
                            <div>
                            <h1 className="text-[#1d252c] text-[40px] font-medium title leading-[46.60px]">Clean and <br /> fragrant soy wax</h1>
                            <p className="text-[#56b280] text-base title mt-2 leading-snug">Made for your home and for your wellness</p>
                            <div className="mt-[38px]">

                            <div className="flex items-center mt-4">

                              <div className="flex items-center w-3.5 h-3.5 justify-center border-[1px] border-[##000000] rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56b280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                                <span className="ml-2 text-[#1d252c] text-base text">Eco-sustainable:All recyclable materials, 0% CO2 emissions</span>
                            </div>
                            
                            <div className="flex items-center mt-4">

                              <div className="flex items-center w-3.5 h-3.5 justify-center border-[1px] border-[##000000] rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56b280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                                <span className="ml-2 text-[#1d252c] text-base text">Hyphoallergenic: 100% natural, human friendly ingredients </span>
                            </div>
                            
                            <div className="flex items-center mt-4">

                              <div className="flex items-center w-3.5 h-3.5 justify-center border-[1px] border-[##000000] rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56b280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                                <span className="ml-2 text-[#1d252c] text-base text">Handmade: All candles are craftly made with love.</span>
                            </div>
                            
                            <div className="flex items-center mt-4">

                              <div className="flex items-center w-3.5 h-3.5 justify-center border-[1px] border-[##000000] rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#56b280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                                <span className="ml-2 text-[#1d252c] text-base text">Long burning: No more waste. Created for last long.</span>
                            </div>
                            </div>
                            <button className="text-white my-[76px] bg-[#56b280] text-xl font-medium text px-[44px] py-2 rounded-lg">Learn more</button>
                            </div>
                            <div className="shadow-2xl rounded-lg">
                                   <img src={clean} alt="clean" />
                            </div>
                     </div>
              </div>
       </section>
  )
}

export default Clean