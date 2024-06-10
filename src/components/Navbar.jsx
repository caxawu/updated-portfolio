import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react';

const Navbar = ({ updateCameraPosition, updateCameraRotation, setFocusState }) => {

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

 useEffect(() => {
    // Call the updateCamera function when the component mounts
    // updateCameraPosition([-0.5, -8, -28]);
    // updateCameraLookAt([-0.5, -2, -36]);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts



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