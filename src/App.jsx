import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';
import './App.css'
import About from './staticPages/about';
import StaticPortfolio from './staticPages/StaticPortfolio';
import { InteractivePortfolio} from '.';

function App() {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="interactive" element={<InteractivePortfolio/>}/>
            <Route path="case-studies" element={<StaticPortfolio/>}/>
        </Routes> 
      </Router>
    </main>
  )
}

export default App
