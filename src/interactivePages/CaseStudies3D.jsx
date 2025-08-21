const CaseStudies3D = ({ currState, onScreenClick, iframeSrc }) => {

  const handleClickVariable = () => {
    onScreenClick('screen1');
  };

  return (
    <div
    style={{ width: "2580px", height: "1440px", overflow: "hidden", zIndex:"0" }} onClick={handleClickVariable}>
      <div
        style={{
          transform: "scale(1.38)",
          transformOrigin: "0 0",
          imageRendering: "crisp-edges",
          backgroundColor: "#FAFAFA",
          width: "2210px",
          height: "1200px",
          overflow: currState === "screen1" ? "auto" : "hidden",
          pointerEvents: currState === "screen1" ? "auto" : "none",
          position: "relative",
          zIndex:"0"
        }}
      >
        <div style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          left: "10px",
          zIndex:"0"
        }}>
          <iframe
            title="embed"
            width="100%"
            height="1150" // Make it taller than the visible area
            src={iframeSrc}
            style={{
              border: "none",
              position: "absolute",
              top: "-96px", // Push iframe up to crop top
              left: "-180px",
              zIndex:"0",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CaseStudies3D