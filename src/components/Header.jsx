import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
 const [btnNameReact, setBtnNameReact] = useState("Login");

 const onlineStatus = useOnlineStatus();

    return (
      <div className='flex justify-between bg-yellow-100 shadow-lg'>
        <div className="logo-container">
          <img 
             className='w-56 h-50 p-4 rounded-lg pl-8'
             src= {LOGO_URL}
             alt="Logo"
           />
        </div>
        <div className="flex items-center py-10 px-10 space-x-4">
          <ul className="flex py-10 px-10 space-x-4">
            <li>
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
           <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
           <Link to="/grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
          <button 
             className="login" 
             onClick={()=> {
              btnNameReact === "Login" 
              ? setBtnNameReact("Logout") 
              : setBtnNameReact("Login");
          }}>
              {btnNameReact}
          </button>
          </ul>
        </div>
      </div>
    );
  };
