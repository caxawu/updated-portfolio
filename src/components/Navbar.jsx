import { NavLink } from "react-router-dom"
import React from 'react';

const Navbar = ({ setFocusState }) => {

const handleClick = (type) => {
    console.log("img");
    if (type == "home") {
        setFocusState('home');
    } else if (type === "webMobile") {
        console.log("img");
        setFocusState('web-mobile');
    } else if (type == "XR") {
        setFocusState('shelf');
    }
};


  return (
    <header className="header">
        <NavLink 
        to="/web-mobile" 
        onClick={() => handleClick("home")}
        className={"w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"}>
            <p className="blue-gradient_text">XCW</p>
        </NavLink>

        <nav className="blex text-lg gap-7 font-medium">
            <NavLink style={{ padding: '2rem' }}
            to="/web-mobile" 
            onClick={() => handleClick("webMobile")}
            className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Web/Mobile
            </NavLink>
            
            <NavLink 
                to="/XR" 
                onClick={() => handleClick("XR")}
                className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                XR
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar