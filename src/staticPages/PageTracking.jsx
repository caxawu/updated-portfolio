// for analytics
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const PageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // send a pageview event every time the URL changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default PageTracking;
