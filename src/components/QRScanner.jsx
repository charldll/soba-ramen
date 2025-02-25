/* eslint-disable react/prop-types */
import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

const QRScanner = ({ scannerRef, stopScanning, setIsScanning, isScanning }) => {
  useEffect(() => {
    if (!isScanning) {
      stopScanning();
      return;
    }

    const startScanner = async () => {
      if (scannerRef.current) {
        await stopScanning(); // Ensure previous instance is stopped before starting a new one
      }

      scannerRef.current = new Html5Qrcode("qr-reader");

      try {
        await scannerRef.current.start(
          { facingMode: "environment" }, // Use rear camera if available
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            window.location.href = decodedText;
            stopScanning();
          },
          (error) => {
            console.warn(error);
          },
        );
        setIsScanning(true);
      } catch (err) {
        console.error("Failed to start scanner", err);
      }
    };

    startScanner();

    return () => {
      stopScanning();
    };
  }, [isScanning]);

  return <div id="qr-reader" className="mx-auto w-full max-w-sm"></div>;
};

export default QRScanner;
