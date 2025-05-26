import React from 'react';

const CaseStudies3D = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('screen1');
  };

  return (
    <div style={{ width: "2580px", height: "1445px", overflow:"hidden"}} onClick={handleClickVariable}>
      <div style={{ transform: "scale(1.785)", transformOrigin: "0 0", imageRendering: "crisp-edges", backgroundColor: "black" }}>
      <iframe 
        title="embed" 
        width={1445} 
        height={800} 
        // src="https://xinaicathywu.me/portfolio"
        src="https://unrivaled-lebkuchen.netlify.app/"
        style={{       
          overflow: currState === 'screen1' ? 'auto' : 'hidden', 
          pointerEvents: currState === 'screen1' ? 'auto' : 'none'  
        }}
      />
      </div>
    </div>
  )
}

export default CaseStudies3D