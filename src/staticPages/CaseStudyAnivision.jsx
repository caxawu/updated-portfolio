import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ReactGA from 'react-ga';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';


import ToTopButton from './ToTopButton';
import Footer from './Footer';

import anivisionHeader from '../assets/images/caseStudies/anivision/anivisionTopBackground.gif'

const trackLinkClick = (category, action, label) => {
    console.log('GA event:', category, ':', action, ':', label);
    ReactGA.event({
        category,
        action,
        label,
    });
};

const CaseStudyAnivision = (props) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
    }, []);

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="anivision-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" /> 
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Anivision
                    </div>
                    <div className="headline">
                        Anivision is a VR experience centered around the perceptual traits of animals. Players can see through the eyes of different animals 
                        and explore how their sensory perception shapes the way they navigate the world—leading to a more experiential, delightful, 
                        and immersive form of learning.
                    </div>
                    <a id="spaces-button"
                        className="white-button-dark"
                        href="https://www.meta.com/experiences/anivision/7236812916426323/"
                        rel="noreferrer"
                        target="_blank"
                        onClick={trackLinkClick.bind(this, 'Portfolio/Anivision', 'Anivision apk Click', 'Portfolio Links')}
                    >Download on the Meta store
                    </a>
                </div>
                <div className="header-img-anivision">
                    <FadeInImage src={anivisionHeader} alt="anivision header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE CHALLENGE</div>
                        <div id="anivision-color" className="text-callout">
                            What if you could see through the eyes of a snake or a honey bee? How would it deepen your understanding of how 
                            animals perceive and navigate their environments? How would this shift in perspective affect your own perception 
                            of the world?
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            Anivision is a NSF-funded project at Dartmouth’s Digital Applied Learning and Innovation (DALI) lab. Anivision’s 
                            work was based on academic research going back decades on primate and human sight. The project’s purpose is to 
                            implement data from academia in a way that makes it engaging for any audience, as well as to generate new data 
                            and insights about experiential learning with VR in accordance with the National Science Foundation’s DIFUSE 
                            grant that helps fund it.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">GAMEPLAY</div>
                        <div className="text-block">
                            Players explore and compare their perceptual experiences to that of animals with extreme adaptations—like the 
                            tarsier's night-vision eyes or the honey bee's ultraviolet sight. Users explore the Bornean rainforest as their 
                            chosen animal in a self-motivated learning experience. As they move through a series of mini-games, they unlock 
                            the full set of an animal’s perceptual traits—learning piece by piece the benefits of each adaptation.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">IMPACT</div>
                        <div className="text-block">
                            This project started as an experimental prompt to explore learning through immersion. Our view of the world is 
                            very human-centric which limits our understanding to the human experience. Animals perceive and experience the 
                            world in fundamentally different ways. Anivision transforms this concept into an engaging educational experience—
                            it’s one thing to read about an animal’s perception in a textbook and another to experience it firsthand. This 
                            perceptual shift pushes the player beyond our human-centric view of the world and fosters a deeper sense of 
                            connection, empathy, and understanding of the non-human experience.
                            <div className="spacing-075" />
                            Anivision has been part of the curriculum in biology classrooms, showcased in museums, and is available on the Meta app store.
                        </div>
                    </div>
                </div>

                <div className='secondary-container' id='desktop'>
                    <ul className="secondary-info">
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>DALI Lab</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li id='desktop'>Designer</li>
                            <li id='desktop'>Developer</li>
                            <li id='desktop'>Project Manager</li>
                            <li id='mobile'>Designer, Developer, Project Manager</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>2019-2024</li>
                        </ul>
                    </ul>
                </div>
                <div className='secondary-container' id='mobile'>
                    <ul className="secondary-info" id='horizontal'>
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>DALI Lab</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li id='desktop'>Designer</li>
                            <li id='desktop'>Developer</li>
                            <li id='desktop'>Project Manager</li>
                            <li id='mobile'>Designer, Developer, Project Manager</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>2019-2024</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <iframe 
                width="100%"
                src="https://www.youtube.com/embed/Tah1Z87AZhg?modestbranding=1&showinfo=0&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Anivision trailer"
            />

            <div className="spacing-3" />

            {/* detail section */}
            <div className="detail-section">
                <div id="anivision-deco" />
                <div className="section-title text-secondary">role</div>
                <div className="text-block">
                    I was a member of the Anivision team for 7 terms at Dartmouth College. This project gave me the opportunity to deepen 
                    my design focus while also flexing into the development and project management spaces. I heavily leaned into gameplay 
                    design, scene design, and proof-of-concept prototyping. I was also a design mentor and XR mentor, guiding designers 
                    and developers in working with Unity and XR. After graduating, I stayed on as part of the steering committee to 
                    support and advise the new team of students.
                </div>
            </div>
            <div className="detail-section">
                <div id="anivision-deco" />
                <div className="section-title text-secondary">iterations</div>
                <div className="text-block">
                    This project has taken on many lives. It started as Tarsier Goggles: solely focused on the perceptual traits of the tarsier,
                    a small primate found in the Bornean rainforest. In the earlier stages, we worked with Biology professors to ensure the 
                    scientific accuracy of the traits we were representing. Over time, it expanded to include other animals and was rebranded 
                    to Anivision. During COVID, it gained another life as a web-based VR app so it could continue being used in Dartmouth biology classrooms when 
                    access to a VR headset was difficult. 
                    <div className="spacing-075" />
                    Throughout its lifetime, the gameplay was revamped multiple times as we explored alternatives to make the app more engaging. 
                    We’ve explored different directions from focusing on scientific realism to creating empathy with climate impacts to 
                    emphasizing gamification. This included multiple rounds of storyboarding, proof-of-concept prototyping in Unity, 
                    playtesting, and even creatively using Figma to prototype an interactive storytelling game so that we could rapid-test an idea. 
                    The current version of Anivision is built upon these past learnings to align closest with the goal of education delivered 
                    in an immersive, fun, and engaging way,
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default CaseStudyAnivision;
