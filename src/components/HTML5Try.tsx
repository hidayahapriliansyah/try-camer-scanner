import { useEffect } from 'react'

import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult } from "html5-qrcode";

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
    const html5QrCode = new Html5Qrcode(
      "reader"
    );
    const qrCodeSuccessCallback = (decodedText: string, decodedResult: Html5QrcodeResult) => {
      /* handle success */
      console.log(decodedResult, decodedText)
    };
    const config: Html5QrcodeCameraScanConfig = {
      fps: 10,
      qrbox: { width: 300, height: 300 },
      disableFlip: false,
    };

    // If you want to prefer front camera
    html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback, undefined);
  }, []);

  return (
    <div id="reader" className="w-[600px] mx-auto"></div>
  )
}

export default HTML5Try