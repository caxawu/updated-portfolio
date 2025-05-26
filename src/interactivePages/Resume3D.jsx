import React from 'react';


const Resume3D = ({currState, onScreenClick, setCurrState}) => {

  const handleClickVariable = () => {
    onScreenClick('resume');
  };

  return (
    <div style={{width: "1760px", height: "2280px", fontSize: "14px", overflow:"hidden", backgroundColor: "white"}} onClick={handleClickVariable}>
      <div style={{ transform: "scale(1.19)", transformOrigin: "0 0", imageRendering: "crisp-edges" }}>
        <iframe 
          title="embed" 
          width={1480} 
          height={2800} 
          src="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/preview" 
          style={{       
            overflow: currState === 'resume' ? 'auto' : 'hidden', 
            pointerEvents: currState === 'resume' ? 'auto' : 'none'  
          }}
          // sandbox="allow-scripts allow-same-origin"
          
        />
      </div>
    </div>
  )
}

export default Resume3D