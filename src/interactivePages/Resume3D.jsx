const Resume3D = ({currState, onScreenClick, setCurrState}) => {

  const handleClickVariable = () => {
    onScreenClick('resume');
  };

  return (
    <div style={{ width: "1757px", height: "2280px", position: "relative", overflow: 'hidden', backgroundColor: "white" }} onClick={handleClickVariable}>
        <div style={{ transform: "scale(2.2) translateY(260px)", height: "995px", overflow: 'hidden', imageRendering: "crisp-edges", position: "absolute" }}>
          <iframe
            title="embed"
            width={1755}
            height={1060}
            src="https://drive.google.com/file/d/1QrguuLcPji_Gzct9vDH1xB88gLLFilBv/preview"
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