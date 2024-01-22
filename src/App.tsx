import './App.css'
import Scanner from './components/Scanner';
// import VanillaCamera from "./components/VanillaCamera";
// import HTML5Try from "./components/HTML5Try";
// import Html5QrcodePlugin from "./components/Html5QrcodePlugin";
// import Html5Scanner from "./components/HTML5Scanner";

function App() {
  // const onNewScanResult = (decodedText: string) => {
  //   // decodedResult: string
  //   // handle decoded results here
  //   alert('decodedText ' + decodedText);
  // };

  return (
    // <Html5Scanner />
    // <Html5QrcodePlugin
    //   fps={10}
    //   qrbox={250}
    //   disableFlip={true}
    //   qrCodeSuccessCallback={onNewScanResult}
    // />
    // <HTML5Try />
    // <VanillaCamera />
    <Scanner />
  );
}

export default App
