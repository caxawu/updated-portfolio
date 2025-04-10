import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import './App.css'
import { InteractivePortfolio} from '.';
import About from './staticPages/About';
import StaticPortfolio from './staticPages/StaticPortfolio';
import CaseStudies from './staticPages/CaseStudies';
import MiniProjects from './staticPages/MiniProjects';
import Artwork from './staticPages/Artwork';
import { Modeling, Animation, Paintings, Drawings } from './staticPages/Artwork';


function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="interactive" element={<InteractivePortfolio/>}/>
          <Route path="static" element={<StaticPortfolio />}>
            <Route path="case-studies" element={<CaseStudies />} />
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
