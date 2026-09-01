import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import StartPageAtTop from './staticPages/StartPageAtTop';
import PageTracking from './staticPages/PageTracking';

import Home from './staticPages/Home';
import About from './staticPages/About';
import { InteractivePortfolio} from '.';
import StaticPortfolio from './staticPages/StaticPortfolio';

import Projects from './staticPages/Projects';
import CaseStudyGracePeriod from './staticPages/CaseStudyGracePeriod';
import CaseStudySavingsGoals from './staticPages/CaseStudySavingsGoals';
import CaseStudyBurnout from './staticPages/CaseStudyBurnout';
import CaseStudySpaces from './staticPages/CaseStudySpaces';
import CaseStudyAnivision from './staticPages/CaseStudyAnivision';

import MiniProjects from './staticPages/MiniProjects';
import Artwork from './staticPages/Artwork';
import { Modeling, Animation, Paintings, Drawings } from './staticPages/Artwork';


function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <PageTracking />
        <StartPageAtTop />
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="about" element={<About/>}/> */}
          <Route path="interactive" element={<InteractivePortfolio/>}/>

          <Route path="static" element={<StaticPortfolio />} >
            <Route path="about" element={<About/>}/>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/CD-grace-period" element={<CaseStudyGracePeriod />} />
            <Route path="projects/savings-goals" element={<CaseStudySavingsGoals />} />
            <Route path="projects/clinician-burnout" element={<CaseStudyBurnout />} />
            <Route path="projects/spaces" element={<CaseStudySpaces />} />
            <Route path="projects/anivision" element={<CaseStudyAnivision />} />

            <Route path="mini-projects" element={<MiniProjects />} />

            <Route path="artwork" element={<Artwork />} >
              <Route path="3d-modeling" element={<Modeling />} />
              <Route path="animation" element={<Animation />} />
              <Route path="paintings" element={<Paintings />} />
              <Route path="drawings" element={<Drawings />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes> 
      </Router>
    </main>
  )
}

export default App;
