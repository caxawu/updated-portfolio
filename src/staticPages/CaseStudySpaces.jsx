import { useNavigate } from "react-router-dom";
import { trackEvent } from './Analytics';

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import FadeInImage from './FadeInImage';

import mobileHeader from '../assets/images/caseStudies/spaces/spacesTopBackground.png';
import relativityOrig from '../assets/images/caseStudies/spaces/relativityOrig.png';
import relativityComp from '../assets/images/caseStudies/spaces/relativityComp.png';
import puzzle1 from '../assets/images/caseStudies/spaces/puzzle1.png';
import puzzle2 from '../assets/images/caseStudies/spaces/puzzle2.png';
import puzzle3 from '../assets/images/caseStudies/spaces/puzzle3.png';
import puzzle4 from '../assets/images/caseStudies/spaces/puzzle4.png';
import puzzle5 from '../assets/images/caseStudies/spaces/puzzle5.png';
import loop1 from '../assets/images/caseStudies/spaces/loop1.png';
import loop2 from '../assets/images/caseStudies/spaces/loop2.png';
import loop3 from '../assets/images/caseStudies/spaces/loop3.png';
import loop4 from '../assets/images/caseStudies/spaces/loop4.png';
import loop5 from '../assets/images/caseStudies/spaces/loop5.png';
import final1 from '../assets/images/caseStudies/spaces/final1.png';
import final2 from '../assets/images/caseStudies/spaces/final2.png';

import ToTopButton from './ToTopButton';
import Footer from './Footer';


const CaseStudySpaces = (props) => {

    const navigateTo = useNavigate();

    return (
        <div className="content-case-study">
            <ToTopButton />
            <div id="spaces-top-background" className="top-card">
                <div className="back-button" onClick={() => navigateTo('/static/case-studies')} style={{ cursor: 'pointer' }}>
                    <ChevronLeftIcon className="chevron" /> 
                    <div className='back-text'>back</div>
                </div>
                <div className="text">
                    <div className="title">
                        Spaces
                    </div>
                    <div className="headline">
                        Spaces is a VR perspective puzzle game based on M.C. Escher’s drawing <i>Relativity</i>. Players navigate this impossible
                        space to match their perspective to the perspective shown in a series of photographs.
                    </div>
                    <a id="spaces-button"
                        className="white-button"
                        href="https://drive.google.com/file/d/1V3baQxHDy1BNthDxZu1wgLeL0Z_KNnFy/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        onClick={() => trackEvent('Portfolio/Spaces', 'Spaces apk Click', 'Portfolio Links')}
                    >Download for Oculus Quest
                    </a>
                </div>
                <div className="mobile-header-img" id='mobile'>
                    <FadeInImage src={mobileHeader} alt="grace period header" loading="eager" />
                </div>
            </div>

            {/* Summary section */}
            <div className='summary'>
                <div>
                    <div className="summary-section">
                        <div className="section-title bold">THE CHALLENGE</div>
                        <div id="spaces-color" className="text-callout">
                            How might we leverage VR’s unique platform to let players experience something impossible in the real world?
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">CONTEXT</div>
                        <div className="text-block">
                            For my Digital Arts capstone, we were given free rein to create anything within the realm of digital arts over the
                            course of 10 weeks. My teammate and I chose to work in virtual reality—a platform we were both passionate about and 
                            had prior experience in. We challenged ourselves to create something that could only exist in VR and was fundamentally 
                            reliant on the medium’s immersive and interactive capabilities.
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="section-title bold">GAMEPLAY</div>
                        <div className="text-block">
                            Spaces is a VR perspective puzzle game set in an impossible space. We recreated M.C. Escher’s <i>Relativity</i> drawing 
                            in 3D and layered in a perspective puzzle game to add interaction and engagement, encouraging players to explore the space.
                            <div className="spacing-075" />
                            Players begin with a series of photographs, each taken from a different location within the space. Their goal is to find the exact 
                            vantage point where each photo was taken. When they do, a picture frame appears, inviting them to insert the photo. The image then
                            transforms, allowing the player to reach into the photograph and pull out a cube as it transforms from a flat 2D image into a tangible 
                            3D object. Placing this cube on a pedestal in the middle of the room unlocks the next photograph, moving them one step closer to activating 
                            the portal that leads to the next level.
                        </div>
                    </div>
                </div>

                <div className='secondary-container' id='desktop'>
                    <ul className="secondary-info">
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Digital Arts Capstone</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>10 weeks</li>
                        </ul>
                    </ul>
                </div>
                <div className='secondary-container' id='mobile'>
                    <ul className="secondary-info" id='horizontal'>
                        <ul className="list">
                            <li className="bold">TYPE</li>
                            <li>Digital Arts Capstone</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">ROLE</li>
                            <li>Designer</li>
                        </ul>
                        <ul className="list">
                            <li className="bold">TIME</li>
                            <li>10 weeks</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <iframe 
                src="https://www.youtube.com/embed/wwxOYKauS6U"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Spaces Walkthrough"
                onClick={() => trackEvent('Portfolio/Spaces', 'Spaces video play', 'Portfolio Links')}
            />

            <div className="divider-container">
                <hr class="line" />
                <span class="label">The details</span>
                <hr class="line" />
            </div>
            <div className="centered">
                <div className="arrow-case-study centered">
                    <ChevronDownIcon className="h-6 w-6 text-black" />
                </div>
            </div>

            {/* detail section */}
            <div className="detail-section">
                <div id="spaces-deco" />
                <div className="section-title text-secondary">role</div>
                <div className="text-block">
                    In a team of two, my partner and I created this experience from concept to implementation. We worked together during conceptual stage 
                    to define the experience, then  then divided responsibilities: I focused on design and supported development while she did the opposite.
                    <div className="spacing-075" />
                    The design included:
                    <ul>
                        <li>3D modeling the room based off M.C. Escher’s drawing</li>
                        <li>Modeling & animating the flower vines that grow as players complete puzzles to add delight and signify game progress</li>
                        <li>Lighting the space to create a serene and polished environment</li>
                    </ul>
                </div>
            </div>
            <div className="detail-section">
                <div id="spaces-deco" />
                <div className="section-title text-secondary">ideation</div>
                <div className="text-block">
                    Within our 10-week timeframe, the first three weeks we spent on rapid experimentation. We tested ideas ranging from 2D
                    animation to interactive VR storytelling. One early concept explored a narrative-driven escape room: players would uncover
                    clues in an old hut and piece together the life of its former inhabitant.
                    <div className="spacing-075" />
                    While designing puzzles for players to solve, we stumbled upon M.C. Escher’s art—known for its clever use of perspective
                    and space. His drawing <i>Relativity</i> particularly resonated with us as a compelling parallel to VR's ability to
                    challenge perception. It inspired us to create a puzzle where players had to walk on the ceiling to notice an upside-down clue in a painting.
                    <div className="spacing-075" />
                    After a few more puzzles we began to realize that while this concept was interesting, it didn’t capture what made VR special. Taking a 
                    step back, we saw that the one perspective shift was easily the most compelling mechanic we had and one that only worked because of VR’s 
                    unique spatial abilities.
                </div>
                <div id="spaces-color" className="text-callout">
                    We asked ourselves: what if we focused entirely on this idea of perspective? Rather than it being a supporting mechanic, what if we made this the entire experience?
                </div>
                <div className="text-block">
                    This reframe pivoted us away from perspective tricks in an escape room and towards a full-fledged experiment of space and perspective.
                    As we brought Escher’s drawing to life in 3D, it started to feel closer aligned with our goal. By creating an experience that allows 
                    players to inhabit and interact with impossible spaces, we were creating something truly unique to the medium.
                </div>
                <div id="spaces-color" className="text-callout">
                    Bringing Escher’s drawing to life would allow players to physically move about an impossible space and experience the perspective shifts that <i>Relativity</i> captures.
                </div>
                <div className="img-row">
                    <div className="img-single">
                        <img src={relativityOrig} alt="Original Relativity drawing" loading="eager" />
                        <div className="caption">M.C. Escher’s drawing <span className="text-reg">Relativity</span>.</div>
                    </div>
                    <div className="img-single">
                        <img src={relativityComp} alt="Relativity 3D recreation" loading="eager" />
                        <div className="caption">Our recreation of <span className="text-reg">Relativity</span> in 3D.</div>
                    </div>
                </div>
            </div>

            <div className="detail-section">
                <div id="spaces-deco" />
                <div className="section-title text-secondary">design</div>
                <div className="text-block">
                    Just bringing Escher’s drawing to life didn't feel like enough. It was cool to marvel at the space, but standing in
                    an impossible space with VR controllers in hand made you want to <i>do</i> something. Simplicity here was key. We didn’t want
                    to take away from the central theme of perspective and observing an impossible space. So, we layered in a perspective
                    puzzle game to create engagement and encourage players to explore.
                    <div className="spacing-075" />
                    The gameplay consisted of giving players photographs taken from different locations within the space. Their task was the
                    navigate the environment and identify the exact vantage point each photo was taken. When they found the correct location,
                    a picture frame would appear where the player could insert the photo. Once they did, the player could move on to the next photograph.
                </div>
                <div className="full-caption">
                    <div className="img-row-w-caption">
                        <div className="img-single">
                            <img src={puzzle1} alt="Puzzle 1" loading="eager" />
                        </div>
                        <div className="img-single">
                            <img src={puzzle2} alt="Puzzle 2" loading="eager" />
                        </div>
                        <div className="img-single">
                            <img src={puzzle3} alt="Puzzle 3" loading="eager" />
                        </div>
                        <div className="img-single">
                            <img src={puzzle4} alt="Puzzle 4" loading="eager" />
                        </div>
                        <div className="img-single">
                            <img src={puzzle5} alt="Puzzle 5" loading="eager" />
                        </div>
                    </div>
                    <div className="caption">The five puzzles to solve—photos taken from different perspectives in the space.</div>
                </div>
                <div className="text-block">
                    To add another moment of delight, we wanted the process of finishing a puzzle to play on spatial manipulation as well. Once the player 
                    places the photo into the frame, the photo morphs into an image of a cube. The player would then reach in, grab the image, and pull it 
                    out into a three dimensional cube. With this 3D object now in hand, they could match the pattern with one of five pedestal in the center 
                    of the space, and unlock the next photo.
                </div>
                <div className="img-row" >
                    <div className="img-single">
                        <img src={loop1} alt="gameplay loop 1" loading="eager" />
                        <div className="caption" id='spaces-caption'>Finding the puzzle solution.</div>
                    </div>
                    <div className="img-single">
                        <img src={loop2} alt="gameplay loop 2" loading="eager" />
                        <div className="caption" id='spaces-caption'>Placing the photo in the frame.</div>
                    </div>
                    <div className="img-single">
                        <img src={loop3} alt="gameplay loop 3" loading="eager" />
                        <div className="caption" id='spaces-caption'>Reaching into the 2D image.</div>
                    </div>
                    <div className="img-single">
                        <img src={loop4} alt="gameplay loop 4" loading="eager" />
                        <div className="caption" id='spaces-caption'>Pulling out a 3D cube.</div>
                    </div>
                    <div className="img-single">
                        <img src={loop5} alt="gameplay loop 5" loading="eager" />
                        <div className="caption" id='spaces-caption'>Placing the cube on the podium to trigger the next puzzle.</div>
                    </div>
                </div>
                <div className="text-block">
                    Completing each of the five puzzles contributed towards a larger goal of opening a portal to the next level.
                    To signify progress, each time a cube was placed on a pedestal, flower vines would grow, slowing forming the frame of the portal.
                </div>
                <div className="img-row">
                    <div className="img-single">
                        <img src={final1} alt="finished puzzles" loading="eager" />
                        <div className="caption">The completed portal frame after finishing all 5 puzzles.</div>
                    </div>
                    <div className="img-single">
                        <img src={final2} alt="Portal appearing" loading="eager" />
                        <div className="caption">The portal appearing for the next stage.</div>
                    </div>
                </div>
                <div className="text-block">
                    Lighting and sound design added polish to the experience. We used soft, ambient lighting alongside atmospheric audio to make
                    the environment not just spatially interesting, but aesthetically pleasing look at. In creating a peaceful and meditative
                    atmosphere, players are encouraged to intentionally observe their surroundings.
                </div>
                <div id="spaces-color" className="text-callout">
                    We leaned into VR's ability to create presence. The result was an experience that challenged players to see the world differently—an idea at 
                    the heart of both Escher’s work and the affordances of virtual reality.
                </div>
            </div>
            <div className="detail-section">
                <div id="spaces-deco" />
                <div className="section-title text-secondary">takeaways</div>
                <div className="text-block">
                    My partner and I set out to create a VR experience that used the medium in a meaningful and intentional way. It 
                    pushed us to make every interaction feel tactile and grounded so we could establish a sense of physical presence. While 
                    difficult, it led to some of the most compelling moments: jumping from wall to ceiling, pulling a 3D cube out of 
                    a 2D picture, watching flower vines grow to signify progress—elements that felt far more interesting and visually 
                    satisfying than traditional UI panels and pointing a laser to click through menus.
                    <div className="spacing-075" />
                    This project pushed my 3D modeling skills. I spent hours staring at Escher’s drawing, 
                    trying to understand the impossible space and how to construct it from a single reference image. From there, I lived in 
                    Maya—aligning edges, adjusting scale, and welding vertices to bring the room to life.
                    I wanted to deepen my understanding of lighting as well. To make the space feel polished and atmospheric, I experimented
                    with point lights, spot lights, directional lights, and particle systems in a series of endless test renders to get the feeling 
                    right. I came away with a much stronger understanding and appreciation of how important lighting can be.
                    <div className="spacing-075" />
                    What stood out the most was how difficult simplicity was. Learning when to stop and strip things back was a challenge but ultimately helped focus our purpose and kept us true to our goal. 
                </div>
            </div>
        <Footer/>
        </div>

    );
};

export default CaseStudySpaces;
