import React from 'react'
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';

const Anivision = () => {

  return (
    <div className="block-container glassmorphism w-50 h-50 items-center justify-center">
      Anivision
      <Outlet />
    </div>
  )
}

export default Anivision