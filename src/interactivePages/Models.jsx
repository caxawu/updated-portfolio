import React from 'react'
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';

const Models = () => {
  return (
    <div className="block-container glassmorphism w-50 h-50 items-center justify-center">
    3D models
    <Outlet />
  </div>
  )
}

export default Models