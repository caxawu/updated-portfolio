import StaticNavBar from './StaticNavBar';
import { Outlet } from 'react-router-dom';


const StaticPortfolio = () => {

  return (
    <div>
      <StaticNavBar />
      <Outlet />
    </div>
  );
}

export default StaticPortfolio;