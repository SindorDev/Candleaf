import hero from "../../assets/images/hero-title.png"
const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg-image.png')] bg-cover bg-center flex items-center justify-center bg-no-repeat w-full min-h-[780px]">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-center h-full">
        <div className="px-[100px] py-[63px] text-center flex gap-5 items-center justify-center flex-col  bg-[#f7f8fa]/80 rounded-sm backdrop-blur-xl">
          <img src={hero} alt="The nature candle" />
          <p className="text-[#1d252c] w-full max-w-[537px] text-lg font-normal text leading-relaxed text-center">
          All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
          </p>
          <button className="text-white text-xl font-medium text bg-green-500 py-2 px-[44px]">
          Discovery our collection
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero