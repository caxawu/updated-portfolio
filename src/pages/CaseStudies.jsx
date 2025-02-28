import React from 'react';

const CaseStudies = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('screen1');
  };

  return (
    <div style={{ width: "2560px", height: "1420px", overflow:"hidden"}} onClick={handleClickVariable}>
      <div style={{ transform: "scale(1.77)", transformOrigin: "0 0", imageRendering: "crisp-edges" }}>
      <iframe 
        title="embed" 
        width={1445} 
        height={800} 
        src="https://xinaicathywu.me/portfolio"
        style={{       
          overflow: currState === 'screen1' ? 'auto' : 'hidden', 
          pointerEvents: currState === 'screen1' ? 'auto' : 'none'  
        }}
      />
      </div>
    </div>
  )
}

export default CaseStudies