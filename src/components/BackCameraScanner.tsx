import { Html5Qrcode, Html5QrcodeCameraScanConfig, Html5QrcodeResult, QrcodeSuccessCallback } from 'html5-qrcode';
import { useEffect } from 'react'

const BackCameraScanner = () => {
    useEffect(() => {
        const html5QrCode = new Html5Qrcode("reader");
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
        console.log('facing mode =>> user bang');
        html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback, undefined);
      }, []);

  return (
    <div>
        <div className="flex justify-center items-center mx-auto w-fit md:my-8 lg:my-16 p-1 bg-red-700 md:scale-125 lg:scale-150">
        <div id="reader" className="block w-[300px] mx-auto"></div>
      </div>
    </div>
  )
}

export default BackCameraScanner;