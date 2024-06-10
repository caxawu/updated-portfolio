import React, { useEffect } from 'react';
import {Route, BrowserRouter as Router, Routes, Outlet} from 'react-router-dom';

const WebMobile = ({  updateCameraPosition, updateCameraLookAt }) => {


  // useEffect(() => {
  //   // Call the updateCamera function when the component mounts
  //   // updateCameraPosition([-0.5, -8, -28]);
  //   // updateCameraLookAt([-0.5, -2, -36]);
  //   console.log("calling");
  // }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  return (
    <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
        Web Mobile
        <Outlet />
      </div>
  )
}

export default WebMobile