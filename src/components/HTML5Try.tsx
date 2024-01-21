import { useEffect } from 'react'

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from "html5-qrcode";
// import { Html5QrcodeError } from "html5-qrcode/esm/core";

const HTML5Try = () => {
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
      qrbox: { width: 300, height: 300 },
      disableFlip: false,
    };

    // If you want to prefer front camera
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback, undefined);
  }, []);

  return (
    <div className="flex justify-center items-center w-[500px] h-[500px] bg-red-600 scale-50">
      <div id="reader" className="w-[600px] mx-auto [transform:rotateY(180deg)]"></div>
    </div>
  )
}

export default HTML5Try