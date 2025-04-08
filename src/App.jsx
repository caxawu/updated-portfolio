import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import './App.css'
import { InteractivePortfolio} from '.';
import About from './staticPages/About';
import StaticPortfolio from './staticPages/StaticPortfolio';
import CaseStudies from './staticPages/CaseStudies';
import MiniProjects from './staticPages/MiniProjects';


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
          </Route>
        </Routes> 
      </Router>
    </main>
  )
}

export default App
