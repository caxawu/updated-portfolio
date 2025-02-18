import { NavLink } from "react-router-dom"
import React from 'react';

const Navbar = ({ setFocusState }) => {

const handleClick = (type) => {
    console.log("img");
    if (type == "home") {
        setFocusState('home');
    } else if (type === "caseStudies") {
        console.log("img");
        setFocusState('case-studies');
    } else if (type == "XR") {
        setFocusState('shelf');
    }
};


  return (
    <header className="header">
        {/* <div className='test'>
          test
        </div> */}
        <NavLink 
        to="/" 
        onClick={() => handleClick("home")}
        className="name-nav">
            Xinai (Cathy) Wu
        </NavLink>

        {/* <nav className="blex text-lg gap-7 font-medium">
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
        </nav> */}
    </header>
  )
}

export default Navbar