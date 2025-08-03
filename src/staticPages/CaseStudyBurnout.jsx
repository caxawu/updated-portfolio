import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import ToTopButton from './ToTopButton';
import Footer from './Footer';

import mobileHeader from '../assets/images/caseStudies/burnout/burnoutTopBackground.png';
import clinicianBurnout from '../assets/images/caseStudies/burnout/clinicianBurnout.png';

const trackLinkClick = (category, action, label) => {
    console.log('GA event:', category, ':', action, ':', label);
    ReactGA.event({
        category,
        action,
        label,
    });
};

const CaseStudyBurnout = (props) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
    }, []);

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="burnout-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" /> 
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Clinician Burnout
                    </div>
                    <div className="headline">
                        A facilitation guide designed to help hospital administrators at Dartmouth-Hitchcock Medical Center run 
                        collaborative sessions with clinicians to ensure they have a voice in departmental changes aimed at reducing feelings of burnout.
                    </div>
                    <a className="white-button"
                        href="https://drive.google.com/file/d/19Fan3qfljtUrDG37EbjOYMStpVL_XohO/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        onClick={trackLinkClick.bind(this, 'Portfolio/Burnout', 'Facilitator Guide Click', 'Portfolio Links')}
                    >See the facilitation guide
                    </a>
                </div>
                <div className="mobile-header-img" id='mobile'>
                    <FadeInImage src={mobileHeader} alt="grace period header" loading="eager" />
                </div>
            </div>
            <div className='secondary-container'>
                <ul className="secondary-info" id='horizontal'>
                    <ul className="list">
                        <li className="bold">TYPE</li>
                        <li>Dartmouth-Hitchcock Medical Center</li>
                    </ul>
                    <ul className="list">
                        <li className="bold">ROLE</li>
                        <li>Service designer</li>
                    </ul>
                    <ul className="list">
                        <li className="bold">TIME</li>
                        <li>20 weeks</li>
                    </ul>
                </ul>
            </div>
            <img id="burnout-img" src={clinicianBurnout} alt="Clinician burnout case study" />
            <div className='spacing-3'/>
            <div className='spacing-3'/>
            <Footer/>
        </div>

    );
};

export default CaseStudyBurnout;
