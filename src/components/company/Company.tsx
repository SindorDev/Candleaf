import footerLogo from "../../assets/images/footerLogo.png"
const Company = () => {
  return (
       
       <section className="py-[26px]">
              <div className="w-full max-w-[1240px] mx-auto">
                     
       <div className="flex items-center justify-between w-full gap-2">
       <img src={footerLogo} alt="logo" />
       <p>Designed with ❤️ by uxbly</p>
     </div>
              </div>
       </section>
)
}

export default Company