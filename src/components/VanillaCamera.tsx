import React, { useRef } from 'react';

const CameraComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const capture = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    if (video) {
      canvas.width = video.videoWidth || 0;
      canvas.height = video.videoHeight || 0;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageSrc = canvas.toDataURL('image/jpeg');
        // Lakukan sesuatu dengan gambar yang diambil
        console.log(imageSrc);
      }
    }
  };

  return (
    <div className="h-[300px] aspect-square overflow-hidden">
      <video ref={videoRef} autoPlay playsInline muted />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={capture}>Capture Photo</button>
    </div>
  );
};

export default CameraComponent;