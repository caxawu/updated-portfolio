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
                    <li><NavLink to="/case-studies">case studies</NavLink></li>
                    <li><NavLink to="/other-projects">other projects</NavLink></li>
                    <li><NavLink to="/art/artwork">artwork</NavLink></li>
                </ul>
            </div>
        </div>
        

    );
  }
  
  
  export default NavBar;