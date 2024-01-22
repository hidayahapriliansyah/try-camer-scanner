import{ useState } from 'react';
import FrontCameraScanner from './FrontCameraScanner';
import BackCameraScanner from './BackCameraScanner';

const Scanner = () => {
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const toggleFacingMode = () => {
      setFacingMode((prevFacingMode) =>
      prevFacingMode === 'user' ? 'environment' : 'user'
      );
  };

  return (
    <div>
      {
        facingMode === 'user'
        ? <FrontCameraScanner />
        : <BackCameraScanner />
      }
      <button onClick={toggleFacingMode} className="mt-4 p-2 bg-blue-100 hover:bg-blue">
        Tombol ini nyala Toggle Camera ({facingMode === 'user' ? 'Depan' : 'Belakang'})
      </button>
    </div>
  )
}

export default Scanner