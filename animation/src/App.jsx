import {Canvas} from "@react-three/fiber"
import Experience from "./component/Experience"

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Canvas camera={{ position: [1, -3, 2.5], fov: 50 }} 
      shadows>
        <Experience />
      </Canvas>
      </div>
  )
}

export default App
