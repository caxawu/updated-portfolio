import NavBar from './NavBar';
import CaseStudies from './CaseStudies';
import { Outlet } from 'react-router-dom';


const StaticPortfolio = () => {

  return (
    <div>
      <NavBar />
      {/* <CaseStudies/> */}
      <Outlet />
    </div>
  );
}

export default StaticPortfolio;