import ReactGA from 'react-ga4';

ReactGA.initialize('G-MRZNP4KRS7');

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};