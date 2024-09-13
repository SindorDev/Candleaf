import { BiCartAlt } from "react-icons/bi"; 
import { AiOutlineUser } from "react-icons/ai"; 
import avatar from '../../assets/images/icon.png'
import logo from "../../assets/icons/wordmark.svg"
import { Link, NavLink } from 'react-router-dom'
import { Select, AutoComplete, Badge } from "antd";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const [searchData, setSearchData] = useState([]);
  const quantity = useSelector((state: any) => state.cart.quantity)
  const loadData = async (searchText: string) => {
    const response = await axios(`https://dummyjson.com/products/search?q=${searchText}`);
    setSearchData(response.data.products);
  };


  return (
    <header className='py-5'>
        <div className='flex items-center w-full max-w-[1240px] mx-auto justify-between'>
          <div>
            <NavLink to="/" className="flex items-center gap-2">
              
          <img src={avatar} alt="avatar in profile" />
            <img src={logo} alt="avatar in Name" />
            </NavLink>
          </div>
          <div>
        <AutoComplete
          options={searchData.map((item: any) => ({
            value: item.title,
            label: (
              <Link to={`/product/${item.id}`}>
                {item.title}
              </Link>
            ),
          }))}
          style={{
            width: 400,
            background: "#f1f1f1",
          }}
          onSearch={(text) => text ? loadData(text) : setSearchData([])}
          placeholder="Enter Product Name"
        />
      </div>

            <ul className='flex items-center gap-20'>

              <li>
                <NavLink className="text-[#272727] text-base font-medium text " to="/">
                <Select
      defaultValue="Discovery"
      style={{ width: 120 }}
      options={[
        { value: 'Discovery', label: 'Discovery', disabled: true },
        { value: 'Helper', label: 'Helper' },
        { value: 'My Cart', label: 'My Cart' },

      ]}
    />
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
              <NavLink to="/profile">
              <AiOutlineUser size={34} />
              </NavLink>
              <NavLink to="/cartProduct">
              <Badge count={quantity}>
              <BiCartAlt size={34} />
              </Badge>
              </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header