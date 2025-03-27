import { Html } from '@react-three/drei'
import { Bouncy } from 'ldrs/react'
import 'ldrs/react/Bouncy.css'




const Loader = () => {
  return (
    <Html>
      <div style={{ 
      width: "100vw", height: "100vh", 
      display:'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center'
      }}>

        <Bouncy
          size="45"
          speed="1.75"
          color="#91689B" 
        />

        Cleaning up room
      </div>
    </Html>
  )
}

export default Loader