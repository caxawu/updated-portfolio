const CaseStudies3D = ({ currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('screen1');
  };

  return (
    <div style={{ width: "2580px", height: "1445px", overflow: "hidden" }} onClick={handleClickVariable}>
      <div
        style={{
          transform: "scale(1.785)",
          transformOrigin: "0 0",
          imageRendering: "crisp-edges",
          backgroundColor: "black",
          width: "1445px",
          height: "800px",
          overflow: currState === "screen1" ? "auto" : "hidden",
          pointerEvents: currState === "screen1" ? "auto" : "none",
          position: "relative",
        }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative"
        }}>
          <iframe
            title="embed"
            width="100%"
            height="900" // Make it taller than the visible area
            src="https://unrivaled-lebkuchen.netlify.app/static/case-studies"
            style={{
              border: "none",
              position: "absolute",
              top: "-100px", // 👈 Push iframe up to crop top
              left: 0
            }}
          />
        </div>
      </div>
    </div>
    //     <div style={{ width: "2580px", height: "1445px", overflow: "hidden" }} onClick={handleClickVariable}>
    //   <div style={{
    //       transform: "scale(1.785)",
    //       transformOrigin: "0 0",
    //       imageRendering: "crisp-edges",
    //       backgroundColor: "#FAFAFA",
    //       width: "1445px",
    //       height: "800px",
    //       overflow: "hidden",
    //       pointerEvents: currState === "screen1" ? "auto" : "none",
    //       position: "relative",
    //       display: "flex",
    //       flexDirection: "column", 
    //       justifyContent: "flex-end",
    //     }}>
    //     <div style={{
    //       width: "100%",
    //       height: "88%",
    //       backgroundColor: "#FAFAFA",
    //       overflow: "hidden",
    //       position: "relative",
    //     }}>
    //       <iframe
    //         title="embed"
    //         width="100%"
    //         height="650"
    //          scrolling="no"
    //          sandbox="allow-scripts allow-same-origin"
    //         src="https://unrivaled-lebkuchen.netlify.app/static/case-studies"
    //         style={{
    //           border: "none",
    //           position: "absolute",
    //           overflow: "hidden",
    //           top: "-120px", // Push iframe up to crop top
    //           left: 0
    //         }}/>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CaseStudies3D