import {Canvas} from "@react-three/fiber"
import Experience from "./component/Experience"
import Interface from "./component/Interface"
function App() {
  return (
    <div style={{height: '100vh'}}>
      <Canvas camera={{ position: [1, -3, 2.5], fov: 50 }} 
      shadows>
        <Experience />
        <Interface />
      </Canvas>
      </div>
  )
}

export default App
