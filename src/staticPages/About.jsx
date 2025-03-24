import React, { useEffect, useState } from 'react';
// import ReactGA from 'react-ga';
// import FadeIn from 'react-fade-in';
// import Typing from 'react-typing-animation';

// import Footer from './footer';

// import frontPic1 from '../img/about/frontPic1.png';
// import frontPic2 from '../img/about/frontPic2.png';

// const About = () => {
//   const [initialPause, setInitialPause] = useState(4000);
//   const wordPause = 1500;
//   const deletePause = 250;

//   useEffect(() => {
//     console.log('page=>', window.location.pathname);
//     // ReactGA.pageview(window.location.pathname);
//   }, []);

//   const startLoop = () => {
//     setInitialPause(250);
//   };

//   return (
//     <div className="content">
//       {/* <FadeIn>
//         <div className="top-container">
//           <img src={frontPic1} alt="Profile 1" loading="eager" />
//           <div className="text">
//             <h1>
//               <Typing speed={50} startDelay={650}>
//                 <span>Hello!</span>
//                 <Typing.Delay ms={800} />
//                 &nbsp;I&apos;m Cathy.
//               </Typing>
//             </h1>
//             <h2>
//               <Typing onFinishedTyping={startLoop} loop>
//                 <Typing.Delay ms={initialPause} />
//                 <span>I&apos;m a UX designer.</span>
//                 <Typing.Delay ms={wordPause} />
//                 <Typing.Backspace count={14} />
//                 <Typing.Delay ms={deletePause} />
//                 <span>an XR enthusiast.</span>
//                 <Typing.Delay ms={wordPause} />
//                 <Typing.Backspace count={17} />
//                 <Typing.Delay ms={deletePause} />
//                 <span>a problem-solver.</span>
//                 <Typing.Delay ms={wordPause} />
//                 <Typing.Backspace count={18} />
//                 <Typing.Delay ms={deletePause} />
//                 <span>an artist.</span>
//                 <Typing.Delay ms={wordPause} />
//                 <Typing.Backspace count={16} />
//                 <Typing.Reset count={0} delay={100} />
//               </Typing>
//               &nbsp;
//             </h2>
//           </div>
//         </div>
//         <div className="bottom-container">
//           <img src={frontPic2} alt="Profile 2" loading="eager" />
//           <div className="text">
//             <div className="box">
//               <div className="title">more about me</div>
//               <div className="body">
//                 <div className="subheading">Currently learning about...</div>
//                 <ul>
//                   <li>web development (this site!)</li>
//                   <li>low-poly modelling in Maya</li>
//                   <li>hand painting textures in Substance Painter</li>
//                   <li>creating open-world games in Unity</li>
//                 </ul>
//                 <div className="subheading">Passionate about...</div>
//                 <ul>
//                   <li>em dashes</li>
//                   <li>film soundtracks</li>
//                   <li>the autumn 🍂</li>
//                   <li>cooking</li>
//                   <li>desserts</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="bio">
//               Ever since discovering experience design during my Sophomore year at Dartmouth College, I have been passionate about solving for the user experience at the heart of every problem. I am particularly fascinated by the overlap of people and technology, which led me to pursue a major in Cognitive Science focused in Human-Computer Interaction and minors in Human-Centered Design and Digital Arts.
//               <br /><br />
//               In my free time, I find myself constantly making things—whether that is testing a new dessert recipe, painting something from Pinterest that inspired me, or pursuing my latest VR endeavor. More than anything, I am driven by curiosity and a love of learning new things.
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </FadeIn> */}
//     </div>
//   );
// };

// export default About;

const About = () => {



  return (
    <div style={{ width: "2580px", height: "1445px", overflow:"hidden"}} onClick={handleClickVariable}>
      <div style={{ transform: "scale(1.785)", transformOrigin: "0 0", imageRendering: "crisp-edges", backgroundColor: "red" }}>
      <iframe 
        title="embed" 
        width={1445} 
        height={800} 
        src="https://xinaicathywu.me/portfolio"
        style={{       
          overflow: currState === 'screen1' ? 'auto' : 'hidden', 
          pointerEvents: currState === 'screen1' ? 'auto' : 'none'  
        }}
      />
      </div>
    </div>
  )
}

export default About