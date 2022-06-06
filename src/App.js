import { Canvas } from "@react-three/fiber";
import Plane from "./components/plane";

function App() {
  return (
    <Canvas dpr={Math.max(window.devicePixelRatio, 1)}>
      <Plane />
    </Canvas>
  );
}

export default App;
