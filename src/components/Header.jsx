import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";


export const Header = () => {
 const [btnNameReact, setBtnNameReact] = useState("Login");
 console.log("header rendered")

 useEffect(()=> {
  console.log("useEffect called")
 },[])

    return (
      <div className='header'>
        <div className="logo-container">
          <img 
             className='logo'
             src= {LOGO_URL}
             alt="Logo"
           />
        </div>
        <div className="nav-items">
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
