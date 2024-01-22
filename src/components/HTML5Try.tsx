import { useEffect, useState } from 'react'

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from "html5-qrcode";
import clsx from "clsx";
// import { Html5QrcodeError } from "html5-qrcode/esm/core";

const HTML5Try = () => {
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
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
    html5QrCode.start({ facingMode: facingMode }, config, qrCodeSuccessCallback, undefined);
  }, [facingMode]);

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-fit md:my-8 lg:my-16 p-1 bg-red-700 md:scale-125 lg:scale-150">
        <div id="reader" className={clsx('block w-[300px] mx-auto', {
          '[transform:rotateY(180deg)]': facingMode === 'user'
        })}></div>
      </div>
      <button onClick={toggleFacingMode} className="mt-4 p-2 bg-blue-100 hover:bg-blue">
        Tombol ini nyala Toggle Camera ({facingMode === 'user' ? 'Depan' : 'Belakang'})
      </button>
    </div>
  )
}

export default HTML5Try