import { useEffect } from 'react';

const CameraDetection = () => {
  useEffect(() => {
    // Panggil fungsi untuk mendeteksi kamera
    detectCameras();
  }, []);

  const detectCameras = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cameras = devices.filter((device) => device.kind === 'videoinput');

      console.log('Jumlah kamera yang terdeteksi:', cameras.length);

      // Jika Anda ingin menampilkan informasi lebih lanjut tentang setiap kamera
      cameras.forEach((camera, index) => {
        console.log(`Kamera ${index + 1}: ${camera.label}`);
      });
    } catch (error) {
      console.error('Error dalam mendeteksi kamera:', error);
    }
  };

  return <div>Detection in console log</div>;
};

export default CameraDetection;