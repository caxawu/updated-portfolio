import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import './App.css'

import Home from './staticPages/Home';
import About from './staticPages/About';
import { InteractivePortfolio} from '.';
import StaticPortfolio from './staticPages/StaticPortfolio';

import CaseStudies from './staticPages/CaseStudies';
import CaseStudyGracePeriod from './staticPages/CaseStudyGracePeriod';
import CaseStudySavingsGoals from './staticPages/CaseStudySavingsGoals';
import CaseStudySpaces from './staticPages/CaseStudySpaces';
import CaseStudyAnivision from './staticPages/CaseStudyAnivision';

import MiniProjects from './staticPages/MiniProjects';
import Artwork from './staticPages/Artwork';
import { Modeling, Animation, Paintings, Drawings } from './staticPages/Artwork';


function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="interactive" element={<InteractivePortfolio/>}/>

          <Route path="static" element={<StaticPortfolio />} >
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/CD-grace-period" element={<CaseStudyGracePeriod />} />
            <Route path="case-studies/savings-goals" element={<CaseStudySavingsGoals />} />
            <Route path="case-studies/spaces" element={<CaseStudySpaces />} />
            <Route path="case-studies/anivision" element={<CaseStudyAnivision />} />

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

export default App
