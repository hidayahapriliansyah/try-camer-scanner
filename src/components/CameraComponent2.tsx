import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent2: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webcamRef = useRef<any>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  const toggleFacingMode = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === 'user' ? 'environment' : 'user'
    );
  };

  const videoConstraints = {
    facingMode: facingMode,
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        mirrored={facingMode === 'user'}
      />
      <button onClick={toggleFacingMode}>
        Toggle Camera ({facingMode === 'user' ? 'Front' : 'Back'})
      </button>
    </div>
  );
};

export default CameraComponent2;