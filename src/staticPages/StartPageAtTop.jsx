import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StartPageAtTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); // no animation
  }, [pathname]);

  return null;
};

export default StartPageAtTop;