import StaticNavBar from './StaticNavBar';
import CaseStudies from './CaseStudies';
import { Outlet } from 'react-router-dom';


const StaticPortfolio = () => {

  return (
    <div>
      <StaticNavBar />
      {/* <CaseStudies/> */}
      <Outlet />
    </div>
  );
}

export default StaticPortfolio;