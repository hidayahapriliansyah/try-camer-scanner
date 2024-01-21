import './App.css'
import Webcam from "react-webcam";

function App() {
  // const [count, setCount] = useState(0)
  const videoConstraints: boolean | MediaTrackConstraints = {
    facingMode: 'user',
  }

  return (
    <>
      <div>
        <p className="text-red-700">Hello bang</p>
      </div>
      <div className="flex justify-center items-center">
        <Webcam
          videoConstraints={videoConstraints}
          mirrored
        />
      </div>
    </>
  )
}

export default App
