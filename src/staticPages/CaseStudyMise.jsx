import { useNavigate } from "react-router-dom";
import { trackEvent } from './Analytics';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import miseHeader from '../assets/images/projects/mise/miseHeader.png';

import ToTopButton from './ToTopButton';
import Footer from './Footer';

// ?demo=1 tells the Mise app to auto-sign-in to its demo account so the
// embedded preview skips the login screen.
const MISE_DEMO_URL = 'https://caxawu-mise.netlify.app/?demo=1';

const CaseStudyMise = (props) => {

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="mise-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/projects')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" />
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Mise
                    </div>
                    <div className="headline">
                        A social cooking notebook for tracking a dish across iterations &mdash; logging what you changed, how it turned out, and what to try next time.
                        <div className="spacing-075" />
                        A personal project designed and built with Claude Code.
                    </div>
                </div>
                <div className="header-img" id="align-center">
                    <FadeInImage src={miseHeader} alt="Mise app screens" loading="eager" />
                </div>
            </div>

            {/* lightweight meta */}
            <div className="mise-meta">
                <ul className="list">
                    <li className="bold">TYPE</li>
                    <li>Personal project</li>
                </ul>
                <ul className="list">
                    <li className="bold">ROLE</li>
                    <li>Design &amp; development</li>
                </ul>
                <ul className="list">
                    <li className="bold">BUILT WITH</li>
                    <li>React, Claude Code</li>
                </ul>
                <ul className="list">
                    <li className="bold">YEAR</li>
                    <li>2026</li>
                </ul>
            </div>

            <div className="divider-container">
                <hr className="line" />
                <span className="label">Try it out</span>
                <hr className="line" />
            </div>

            {/* live embed in a phone frame */}
            <div className="phone-embed">
                <div className="phone-frame">
                    <div className="phone-screen">
                        <div className="phone-notch" />
                        <div className="phone-statusbar" />
                        <iframe
                            src={MISE_DEMO_URL}
                            title="Mise live demo"
                            loading="lazy"
                            allow="clipboard-write"
                        />
                    </div>
                </div>
                <div className="phone-caption">
                    This is the live app running in a phone-sized window.
                    <div className="spacing-2" />
                    If you&rsquo;re asked to sign in, use the demo account:
                    <div className="demo-creds">
                        <span><b>Email</b> test@mise.app</span>
                        <span><b>Password</b> testaccount</span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CaseStudyMise;
