import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import burnout from '../assets/images/caseStudies/burnout.png'

const trackLinkClick = (category, action, label) => {
  console.log('GA event:', category, ':', action, ':', label);
  ReactGA.event({
    category,
    action,
    label,
 });
};


const CaseStudies = (props) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  }, []);

  return (
    <div className="content">
        <br/>
        <div className='portfolio-superscript'>
            Currently at
        </div>
        <div className="portfolio-title text-title">
            <div className='highlight-pink'>
                Capital One
            </div>
        </div>
        <div className="portfolio-row">
            <div className="card">
                <a href="/portfolio/clinician-burnout" rel="noreferrer" onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Burnout Click', 'Portfolio Card Nav')} >
                    <img src={burnout} alt="CD grace period" loading="eager" />
                    <div className="description">
                        <div className='bold spacing-05'>CD grace period</div>
                        Giving customers the ability to self-service during their CD grace period.
                        <div className="tags">
                            <ul className="left">
                                <li>UI/UX Design</li>
                            </ul>
                            <ul className="right">
                                <li>Capital One</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href="/portfolio/clinician-burnout" rel="noreferrer" onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Burnout Click', 'Portfolio Card Nav')} >
                    <img src={burnout} alt="CD grace period" loading="eager" />
                    <div className="description">
                        <div className='bold spacing-05'>Savings goals</div>
                        Helping customer build their financial health with concrete goals to work towards.
                        <div className="tags">
                            <ul className="left">
                                <li>UI/UX Design</li>
                            </ul>
                            <ul className="right">
                                <li>Capital One</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href="/portfolio/clinician-burnout" rel="noreferrer" onClick={trackLinkClick.bind(this, 'Portfolio/Web', 'Burnout Click', 'Portfolio Card Nav')} >
                    <img src={burnout} alt="Clinician burnout" loading="eager" />
                    <div className="description">
                        <div className='bold spacing-05'>Clinician burnout</div>
                        Alleviating clinician burnout at the Dartmouth-Hitchcock Medical Center.
                        <div className="tags">
                            <ul className="left">
                                <li>UX Research</li>
                                <li>UI/UX Design</li>
                            </ul>
                            <ul className="right">
                                <li>Human-Centered Design<br />Capstone Project</li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
};

export default CaseStudies;
