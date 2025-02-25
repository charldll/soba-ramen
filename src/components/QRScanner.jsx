/* eslint-disable react/prop-types */
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";

const QRScanner = ({ onScannerClose }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 5, qrbox: { width: 250, height: 250 } },
        false,
      );

      scannerRef.current.render(
        (decodedText) => {
          window.location.href = decodedText;
          if (scannerRef.current) {
            scannerRef.current.clear();
          }
          onScannerClose();
        },
        (error) => {
          console.warn(error);
        },
      );
    }
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
        scannerRef.current = null;
      }
    };
  }, [onScannerClose]);
  return <div id="qr-reader" className="mx-auto w-full max-w-sm"></div>;
};

export default QRScanner;
