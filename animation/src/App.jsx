import {Canvas} from "@react-three/fiber"
import Experience from "./component/Experience"

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Canvas>
        <Experience />
      </Canvas>
      </div>
  )
}

export default App
