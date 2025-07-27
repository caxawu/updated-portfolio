import React from 'react';


const Resume3D = ({currState, onScreenClick, setCurrState}) => {

  const handleClickVariable = () => {
    onScreenClick('resume');
  };

  return (
    <div style={{ width: "1760px", height: "2280px", position: "relative", overflow: 'hidden', backgroundColor: "white" }} onClick={handleClickVariable}>
        <div style={{ transform: "scale(2.2) translateY(260px)", height: "980px", overflow: 'hidden', imageRendering: "crisp-edges", position: "absolute" }}>
          <iframe
            title="embed"
            width={1755}
            height={1050}
            src="https://drive.google.com/file/d/11bBEf4DXBEegXaYLejCiFg3O86Q9wAJ2/preview"
            style={{
              overflow: currState === 'resume' ? 'auto' : 'hidden',
              pointerEvents: currState === 'resume' ? 'auto' : 'none',
            }}
          />
        </div>
    </div>
  )
}

export default Resume3D