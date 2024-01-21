// import React, { useEffect } from 'react';
// import Html5Qrcode from 'html5-qrcode';

// const Html5Scanner: React.FC = () => {
//   useEffect(() => {
//     const qrCodeScanner = new Html5Qrcode('qr-reader');

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
//     const onScanSuccess = (decodedText: string, decodedResult: any) => {
//       console.log(`Scan result: ${decodedText}`);
//       // Lakukan sesuatu dengan hasil pemindaian
//     };

//     const onScanError = (errorMessage: string) => {
//       console.error(`Error scanning QR code: ${errorMessage}`);
//     };

//     qrCodeScanner.start(
//       'qr-reader',
//       { fps: 10, qrbox: 250 },
//       onScanSuccess,
//       onScanError
//     );

//     // Bersihkan pemindai ketika komponen di-unmount
//     return () => {
//       qrCodeScanner.clear();
//     };
//   }, []); // Jalankan hanya sekali saat komponen dimount

//   return <div id="qr-reader"></div>;
// };

// export default Html5Scanner;
