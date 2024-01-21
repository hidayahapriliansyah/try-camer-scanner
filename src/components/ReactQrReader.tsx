// import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';

// const QrScanner: React.FC = () => {
//   const [result, setResult] = useState<string | null>(null);

//   const handleScan = (data: string | null) => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   const handleError = (error: any) => {
//     console.error(error);
//   };

//   return (
//     <div>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//       />

//       {result && <p>Hasil Pemindaian QR Code: {result}</p>}
//     </div>
//   );
// };

// export default QrScanner;