import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import './App.css'
import { Home, CaseStudies, OtherProjects, Models, XR, Spaces, Anivision } from './interactivePages';
import  About  from './staticPages/About.jsx';

function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="case-studies" element={<CaseStudies/>}/>
            <Route path="other-projects" element={<OtherProjects/>}/>
            <Route path="3d-modeling" element={<Models />} />
            <Route path="XR" element={<XR />}>
              <Route path="spaces" element={<Spaces />} />
              <Route path="anivision" element={<Anivision />} />
            </Route>
          </Route>
        </Routes> 
      </Router>
    </main>
  )
}

export default App
