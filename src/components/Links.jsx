import { NavLink } from "react-router-dom"
import React from 'react';
import linkedin from '../assets/icons/linkedin.svg';
import icon from '../assets/icons/mongodb.svg';

const Links = ({ setFocusState }) => {

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
    <div className="link-list">

        <a href="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            id="resume"
            // onClick={trackLinkClick.bind(this, 'Contact Links', 'Resume Click', 'Sticky Contact Buttons')}
          >
            <img src={icon} alt="Resume icon" loading="eager" />
            <span id="text">resume</span>
          </a>

          <a href="https://www.linkedin.com/in/xinai-cathy-wu"
            target="_blank"
            rel="noreferrer"
            id="linkedin"
            // onClick={trackLinkClick.bind(this, 'Contact Links', 'LinkedIn Click', 'Sticky Contact Buttons')}
          >
            <img src={icon} alt="LinkedIn icon" loading="eager" />
            <span id="text">linkedin</span>
          </a>

          <a href="mailto:xinai.cathy.wu@gmail.com"
            target="_blank"
            rel="noreferrer"
            id="mail"
            // onClick={trackLinkClick.bind(this, 'Contact Links', 'Mail Click', 'Sticky Contact Buttons')}
          >
            <img src={icon} alt="Mail icon" loading="eager" />
            <span id="text">mail</span>
          </a>

    </div>
  )
}

export default Links