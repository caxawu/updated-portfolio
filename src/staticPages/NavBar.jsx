import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

      let navigateTo = useNavigate();
    return (
        <div className="nav-bar">
            <div className="logo" onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
                Xinai (Cathy) Wu
            </div>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="/portfolio">case studies</NavLink></li>
                    <li><NavLink to="/other-works">other works</NavLink></li>
                    <li><NavLink to="/art/3d-modelling">studio & digital art</NavLink></li>
                </ul>
            </div>
        </div>
        

    );
  }
  
  
  export default NavBar;