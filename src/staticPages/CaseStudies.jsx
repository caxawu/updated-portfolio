import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useNavigate } from 'react-router-dom';

import burnout from '../assets/images/caseStudies/burnoutCover.png'
import gracePeriod from '../assets/images/caseStudies/gracePeriodCover.png'
import savingsGoals from '../assets/images/caseStudies/savingsGoalsCover.png'
import anivision from '../assets/images/caseStudies/anivisionCover.png'
import spaces from '../assets/images/caseStudies/spacesCover.png'

const trackLinkClick = (category, action, label) => {
    console.log('GA event:', category, ':', action, ':', label);
    ReactGA.event({
        category,
        action,
        label,
    });
};


const CaseStudies = (props) => {
    //   useEffect(() => {
    //     ReactGA.pageview(window.location.pathname);
    //     console.log('page=>', window.location.pathname);
    //   }, []);
    const navigateTo = useNavigate();

    return (
        <div className="content">
            <div className="portfolio-title text-title">
                <div className='highlight-pink'>
                    web/mobile
                </div>
            </div>
            <div className="portfolio-row">
                <div className="card">
                    <div className="card-tile" onClick={() => navigateTo('/static/case-studies/CD-grace-period')}>
                        <img src={gracePeriod} alt="CD grace period" loading="eager" />
                        <div className="description">
                            <div className="bold spacing-05">CD grace period</div>
                            Reducing customer call volume by 20% through improvements to the customer experience.
                            <div className="tags">
                                <ul className="left">
                                    <li>UI/UX Design</li>
                                </ul>
                                <ul className="right">
                                    <li>Capital One</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-tile" onClick={() => navigateTo('/static/case-studies/CD-grace-period')}>
                        <img src={savingsGoals} alt="Savings goals" loading="eager" />
                        <div className="description">
                            <div className='bold spacing-05'>Savings goals</div>
                            Lorem ipsum
                            <div className="tags">
                                <ul className="left">
                                    <li>UI/UX Design</li>
                                </ul>
                                <ul className="right">
                                    <li>Capital One</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-tile" onClick={() => navigateTo('/static/case-studies/CD-grace-period')}>
                        <img src={burnout} alt="Clinician burnout" loading="eager" />
                        <div className="description">
                            <div className='bold spacing-05'>Clinician burnout</div>
                            Alleviating clinician burnout at the Dartmouth-Hitchcock Medical Center.
                            <div className="tags">
                                <ul className="left">
                                    <li>Service design</li>
                                </ul>
                                <ul className="right">
                                    <li>Dartmouth-Hitchcock<br />Medical Center</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-title text-title">
                <div className='highlight-pink'>
                    VR
                </div>
            </div>
            <div className="portfolio-row">
                <div className="card">
                    <div className="card-tile" onClick={() => navigateTo('/static/case-studies/CD-grace-period')}>
                        <img src={anivision} alt="Anivision" loading="eager" />
                        <div className="description">
                            <div className='bold spacing-05'>Anivision</div>
                            Learn in a more experiential and delightful way by exploring the world through the eyes of an animal.
                            <div className="tags">
                                <ul className="left">
                                    <li>Design</li>
                                    <li>Development</li>
                                </ul>
                                <ul className="right">
                                    <li>DALI Lab</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-tile" onClick={navigateTo('/static/case-studies/CD-grace-period')}>
                        <img src={spaces} alt="Spaces" loading="eager" />
                        <div className="description">
                            <div className='bold spacing-05'>Spaces</div>
                            A VR perspective puzzle game in an impossible space based on M.C. Escher’s “Relativity” drawing.
                            <div className="tags">
                                <ul className="left">
                                    <li>Design</li>
                                </ul>
                                <ul className="right">
                                    <li>Digital Arts Capstone</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
