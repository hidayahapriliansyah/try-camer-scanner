import { useEffect, useState } from 'react'

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from "html5-qrcode";
// import { Html5QrcodeError } from "html5-qrcode/esm/core";

const HTML5Try = () => {
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const toggleFacingMode = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === 'user' ? 'environment' : 'user'
    );
  };
  // const html5QrCode = new Html5Qrcode(
  //   "reader"
  // );
  // const qrCodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
  //   /* handle success */
  //   console.log(decodedResult, decodedText)
  // };
  // const config: Html5QrcodeCameraScanConfig = {
  //   fps: 10,
  //   qrbox: { width: 250, height: 250 },
  // };

  // // If you want to prefer front camera
  // html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback, undefined);
  useEffect(() => {
    console.log('hallo')
    const html5QrCode = new Html5Qrcode(
      "reader"
    );
    const qrCodeSuccessCallback: QrcodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
      /* handle success */
      console.log(decodedResult, decodedText)
    };
    // const qrCodeErrorCallback: QrcodeErrorCallback = (
    //   errorMessage: string,
    //   error: Html5QrcodeError,
    // ) => {
    //   console.log(errorMessage, error);
    // }
    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
      qrbox: { width: 200, height: 200 },
      disableFlip: false,
    };

    // If you want to prefer front camera
    console.log('facing mode =>>', facingMode);
    html5QrCode.start({ facingMode }, config, qrCodeSuccessCallback, undefined);
  }, [facingMode]);

  return (
    <div>
      <div className="flex justify-center items-center mx-auto md:my-8 lg:my-16 p-1 bg-red-700 md:scale-125 lg:scale-150">
        <div id="reader" className="block w-[300px] mx-auto [transform:rotateY(180deg)]"></div>
      </div>
      <button onClick={toggleFacingMode} className="mt-4 p-2 bg-blue-100">
        Toggle Camera ({facingMode === 'user' ? 'Front' : 'Back'})
      </button>
    </div>
  )
}

export default HTML5Try