import { BiCartAlt } from "react-icons/bi"; 
import { AiOutlineUser } from "react-icons/ai"; 
import avatar from '../../assets/images/icon.png'
import logo from "../../assets/icons/wordmark.svg"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='py-5'>
        <div className='flex items-center w-full max-w-[1240px] mx-auto justify-between'>
          <div className='flex items-center gap-2'>
          <img src={avatar} alt="avatar in profile" />
            <img src={logo} alt="avatar in Name" />
          </div>
            <ul className='flex items-center gap-20'>
              <li>
                <NavLink className="text-[#272727] text-base font-medium text " to="/">
                 <select name="" id="">
                  <option value="Dicovery">Dicovery</option>
                  <option value="contact">contact</option>
                  <option value="help">help</option>
                 </select>
                </NavLink>
              </li>
              
              <li>
                <NavLink className="text-[#272727] text-base font-medium text " to="/">
                  About
                </NavLink>
              </li>
              
              <li>
                <NavLink className="text-[#272727] text-base font-medium text " to="/">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <AiOutlineUser size={34} />
              <BiCartAlt size={34} />
            </div>
        </div>
    </header>
  )
}

export default Header