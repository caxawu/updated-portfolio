import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

import Footer from './Footer';

import FadeInImage from './FadeInImage';
import { motion } from "framer-motion";

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
      useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
      }, []);
    const navigateTo = useNavigate();

    return (
        <div id='case-studies-spacing'>
            <div className="content">
                <div className="portfolio-title text-title">
                    <div className='highlight-pink'>
                        web/mobile
                    </div>
                </div>
                <div className="portfolio-row">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.01 }}
                        >
                        <div className="card-tile" 
                        onClick={() => {
                            navigateTo('/static/case-studies/CD-grace-period');
                            trackLinkClick.bind(this, 'Portfolio/Grace-Period', 'Grace Period Click', 'Portfolio Nav');
                        }}>
                            <img src={gracePeriod} alt="CD grace period" delay = "0.01" />
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
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                        >
                        <div className="card-tile" 
                        onClick={() => {
                            navigateTo('/static/case-studies/savings-goals');
                            trackLinkClick.bind(this, 'Portfolio/Goals', 'Goals Click', 'Portfolio Nav');
                        }}>
                            <img src={savingsGoals} alt="Savings goals" delay = "0.05" />
                            <div className="description">
                                <div className='bold spacing-05'>Savings goals</div>
                                Helping customers build financial resilience through saving for tangible goals.
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
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        >
                        <div className="card-tile" 
                        onClick={() => {
                            navigateTo('/static/case-studies/clinician-burnout');
                            trackLinkClick.bind(this, 'Portfolio/Burnout', 'Burnout Click', 'Portfolio Nav');
                        }}>
                            <img src={burnout} alt="Clinician burnout" delay = "0.1" />
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
                    </motion.div>
                </div>

                <div className='spacing-105'/>

                <div className="portfolio-title text-title">
                    <div className='highlight-pink'>
                        VR
                    </div>
                </div>
                <div className="portfolio-row">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                        >
                        <div className="card-tile" 
                        onClick={() => {
                            navigateTo('/static/case-studies/anivision');
                            trackLinkClick.bind(this, 'Portfolio/Anivision', 'Anivision Click', 'Portfolio Nav');
                        }}>
                            <img src={anivision} alt="Anivision" delay = "0.15" />
                            <div className="description">
                                <div className='bold spacing-05'>Anivision</div>
                                Learn in an experiential and delightful way by exploring the world through the eyes of an animal.
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
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        >
                        <div className="card-tile" 
                        onClick={() => {
                            navigateTo('/static/case-studies/spaces');
                            trackLinkClick.bind(this, 'Portfolio/Spaces', 'Spaces Click', 'Portfolio Nav');
                        }}>
                            <img src={spaces} alt="Spaces" delay = "0.2" />
                            <div className="description">
                                <div className='bold spacing-05'>Spaces</div>
                                A VR perspective puzzle game set in an impossible space based on M.C. Escher’s “Relativity” drawing.
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
                    </motion.div>
                </div>
                <div className='spacing-2'/>
            </div>
            <Footer />
        </div>
    );
};

export default CaseStudies;
