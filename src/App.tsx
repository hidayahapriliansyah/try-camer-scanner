import './App.css'
import Webcam from "react-webcam";
import { useEffect, useState } from "react";

function App() {
  const [choosenCamera, setChoosenCamera] = useState<'front' | 'back'>('front');
  let videoConstraints: boolean | MediaTrackConstraints = {
    facingMode: 'user',
  }

  useEffect(() => {
    if (choosenCamera === 'back') {
      videoConstraints = {
        facingMode: { exact: 'environment' },
      };
    } else {
      videoConstraints = {
        facingMode: 'user',
      };
    }
  }, [choosenCamera]);

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
      <div>
        <button
          onClick={() => {
            if (choosenCamera === 'back') {
              setChoosenCamera('front');
            } else {
              setChoosenCamera('back');
            }
          }}
        >Ganti kamera</button>
      </div>
    </>
  )
}

export default App
