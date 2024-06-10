// import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import { Home, WebMobile, Models, XR, Spaces, Anivision } from './pages';

function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="web-mobile" element={<WebMobile/>}/>
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
