import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

// import escherDrawing from '../img/portfolio/spaces/escherDrawing.png';
// import puzzles from '../img/portfolio/spaces/puzzles.png';
// import puzzles2 from '../img/portfolio/spaces/puzzles2.png';
// import arch from '../img/portfolio/spaces/arch.png';

const trackLinkClick = (category, action, label) => {
    console.log('GA event:', category, ':', action, ':', label);
    ReactGA.event({
        category,
        action,
        label,
    });
};

const CaseStudySpaces = (props) => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
        console.log('page=>', window.location.pathname);
    }, []);

    return (
        <div className="content">
            <div id="spaces-top-background" className="top-card">
                <div id="text-white" className="text">
                    <div className="title">
                        Spaces
                    </div>
                    <div className="role">
                        Designer
                    </div>
                    <div className="headline">
                        Spaces is a VR perspective puzzle game based on M.C. Escher’s “Relativity” drawing. Players navigate this impossible
                        space to match their perspective to the perspective shown in a series of pictures.
                    </div>
                    <a id="spaces-button"
                        className="white-button"
                        href="https://drive.google.com/file/d/1V3baQxHDy1BNthDxZu1wgLeL0Z_KNnFy/view?usp=sharing"
                        rel="noreferrer"
                        target="_blank"
                        onClick={trackLinkClick.bind(this, 'Portfolio/Spaces', 'Spaces apk Click', 'Portfolio Links')}
                    >apk for Oculus Quest
                    </a>
                </div>
            </div>
            <ul className="secondary-info">
                <ul className="list">
                    <li id="title">TEAM</li>
                    <li>Jasmine Mai</li>
                </ul>
                <ul className="list">
                    <li id="title">TYPE</li>
                    <li>Digital Arts<br />Capstone Project</li>
                </ul>
                <ul className="list">
                    <li id="title">TIME</li>
                    <li>10 weeks</li>
                </ul>
                <ul className="list">
                    <li id="title">TOOLS</li>
                    <li>Maya</li>
                    <li>Unity</li>
                </ul>
            </ul>
            <a id="spaces-button"
                className="jump-button"
                href="#anchor"
                rel="noreferrer"
                onClick={trackLinkClick.bind(this, 'Portfolio/Spaces', 'Spaces Jump Click', 'Portfolio Jump to Prototype')}
            >Jump to prototype
            </a>
            <div className="detail-section">
                <div id="spaces-color" className="section-title">ROLE</div>
                <div className="text-block">
                    <b>3D Modelling:</b> I creacted the 3D model of the room based off of M.C. Escher’s drawing. I also modelled elements such as the flower
                    vines and lantern that appear as players progress through the puzzles.
                    <br /><br />
                    <b>Animation:</b> I animated the flower vines to “grow” as players completed puzzles in order to add delight and signify progression in the game.
                    <br /><br />
                    <b>Lighting:</b> I added colored point lights and light shafts to the room to create to a serene calm environment that made the experience feel polished and complete.
                </div>
            </div>

            <div className="detail-section">
                <div id="spaces-color" className="section-title">CHALLENGE</div>
                <div id="spaces-text" className="text-callout">
                    How might we create something in VR that takes full advantage of the technology in a way that allows a player to experience something
                    they would not be able to in the real world?
                </div>
                <div className="text-block">
                    For our capstone project in the Digital Arts Minor, we was given free reign to create anything within the realm of digital arts in 10 weeks.
                    My partner and I spent the first few weeks brainstorming project ideas that ranged from 2D animations to interactive immersive VR storytelling.
                    Since we were both interested and had experience in creating VR apps. we decided to challenge ourselves to take full advantage of VR’s capabilities and make something unique.
                </div>
            </div>

            <div className="detail-section">
                <div id="spaces-color" className="section-title">IDEATION</div>
                <div className="text-block">
                    Our initial idea was to weave storytelling into an escape room experience. Players would find clues in an old hut and discover the life of the
                    person who used to live there. These clues would hint at how this desolate wasteland you find yourself in came to be. While planning puzzles for
                    players to find in this hut, my partner and I stumbled upon M.C. Escher’s “Relativity” drawing. We were inspired by this drawing to incorporate a
                    perspective shift into a puzzle where a players had to walk on the ceiling to realize a painting on a wall contained an upside-down clue.
                </div>
                {/* <img src={escherDrawing} alt="Relativity by M.C. Escher" width="65%" /> */}
                <div className="text-block">
                    After designing a few more puzzles we realized that most of what we had were just a VR version of a real escape room. We wanted to lean into the affordances
                    of VR and our idea wasn’t accomplishing that goal. We found that this play on perspective that we had stumbled upon was easily the most compelling component.
                    <br /><br />
                    After some more brainstorming of how we could incorporate more perspective shifts into our app and hitting dead ends, we realized—what if we stripped everything
                    else away and only focused on this idea of perspective? What if we just brought Escher’s drawing to life instead? This way, we can leverage VR technology to allow
                    players to experience something that would be otherwise impossible in the real world.
                </div>
                <div id="spaces-text" className="text-callout">
                    Bringing Escher’s drawing to life would allow players to physically move about an impossible space and experience the perspective changes that “Relativity” captures.
                </div>
            </div>

            <div className="detail-section">
                <div id="spaces-color" className="section-title">GAMEPLAY</div>
                <div className="text-block">
                    To add another layer of engagement, we wanted to encourage players to navigate about the space rather than simply observe it. So, we created simple perspective puzzles
                    where players are given a series of photographs, taken from various locations in the room. Their goal is to find where in the room those photos were taken.
                </div>
                {/* <img src={puzzles} alt="The five puzzles" width="100%" /> */}
                <div className="text-block">
                    When the player has located where a photo was taken, an picture frame appears near them. Once they place the photo in the frame, the picture is replaced with a 2D cube.
                    The player can then reach into the frame to pull out the 2D cube which materializes into a 3D object. Holding this cube, the player navigates back to the center where
                    they place it on an empty podium. This action triggers a flower vine to grow and the next photo to appear.
                    players to experience something that would be otherwise impossible in the real world.
                </div>
                {/* <img src={puzzles2} alt="A puzzle walkthrough" width="100%" /> */}
                <div className="text-block">
                    Bringing Escher’s drawing to life would allow players to physically move about an impossible space and experience the perspective changes that “Relativity” captures.
                </div>
                {/* <img src={arch} alt="Puzzle solution" width="55%" /> */}
                <div className="text-block">
                    After completeing all five puzzles, a portal appears between the flower vines. Going through this portal brings the player to another interesting space with more puzzles (coming soon!)
                </div>
            </div>

            <div id="anchor" className="detail-section">
                <div id="spaces-color" className="section-title">WALKTHROUGH</div>
                <iframe width="100%"
                    height="850"
                    src="https://www.youtube.com/embed/wwxOYKauS6U"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Spaces Walkthrough"
                />
            </div>

            <div className="detail-section">
                <div id="spaces-color" className="section-title">TAKEAWAYS</div>
                <div className="text-block">
                    My partner and I set out to create a VR experience that used the technology in a worthwhile and meaningful way. We didn’t want VR to feel gimmicky or that we were building
                    something in VRfor the sake of building something in VR. It was definitely difficult for us to brainstorm with the affordances of this technology and what we could leverage
                    it to do that would not be possible in the real world.
                    <br /><br />
                    This project really pushed me in my 3D modelling abilities having to construct the impossible space based off a single image. I spent countless hours starting at Escher’s drawing,
                    aligning edges,and welding vertices. I also pushed myself to understand lighting as I wanted the space to feel as visually polished as possible. Through an assorted collection of
                    point lights, spot lights,particle systems, directional lights and many many renders, I gained a better understanding and appreciation for how important and difficult lighting is.
                    <br /><br />
                    I learned that making something that seems simple is in fact very difficult, but I was able to learn so much along the way. It was definitely not a straightforward path to get to
                    our final product, but I am proud of the work we’ve accomplished in just 10 short weeks from ideation all the way to implementation.
                </div>
            </div>

        </div>

    );
};

export default CaseStudySpaces;
