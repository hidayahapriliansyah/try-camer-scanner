import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

interface CameraComponentProps { }

const CameraComponent: React.FC<CameraComponentProps> = () => {
  const webcamRef = useRef<Webcam>(null);
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const availableCameras = devices.filter(
          (device) => device.kind === 'videoinput'
        );

        setCameras(availableCameras);

        // Pilih kamera pertama secara otomatis jika ada
        if (availableCameras.length > 0) {
          setSelectedCamera(availableCameras[0].deviceId);
        }
      } catch (error) {
        console.error('Error dalam mendeteksi kamera:', error);
      }
    };

    fetchCameras();
  }, []);

  const switchCamera = (deviceId: string) => {
    setSelectedCamera(deviceId);
  };

  return (
    <div>
      <h2>Pilih Kamera:</h2>
      <select
        onChange={(e) => switchCamera(e.target.value)}
        value={selectedCamera || ''}
      >
        {cameras.map((camera) => (
          <option key={camera.deviceId} value={camera.deviceId}>
            {camera.label || `Kamera ${camera.deviceId}`}
          </option>
        ))}
      </select>

      {selectedCamera && (
        <Webcam
          audio={false}
          ref={webcamRef}
          videoConstraints={{
            deviceId: selectedCamera,
          }}
        />
      )}
    </div>
  );
};

export default CameraComponent;