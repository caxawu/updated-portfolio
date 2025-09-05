const OtherProjects3D = ({currState, onScreenClick }) => {

  const handleClickVariable = () => {
    onScreenClick('screen2');
  };

  return (
    <div style={{width: "1780px", height: "2358px", overflow:"hidden", backgroundColor: "black", zIndex:"0"}} onClick={handleClickVariable}>
      <div
        style={{
          transform: "scale(2.1)",
          transformOrigin: "20% 0",
          imageRendering: "crisp-edges",
          backgroundColor: "black",
          width: "1480px",
          height: "2800px",
          overflow: currState === "screen2" ? "auto" : "hidden",
          pointerEvents: currState === "screen2" ? "auto" : "none",
          position: "relative",
          zIndex:"1"
        }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          left: "85px"
        }}>
          <iframe
            title="embed"
            width="1000px"
            height="1350px" // Make it taller than the visible area
            src="https://unrivaled-lebkuchen.netlify.app/static/mini-projects"
            style={{
              border: "none",
              position: "absolute",
              top: "-185px", // Push iframe up to crop top
              left: 0
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OtherProjects3D