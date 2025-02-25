import { Html5QrcodeScanner } from "html5-qrcode";

const onScanSuccess = () => {
  scanner.clear();
};

const onScanFailure = (error) => {
  console.error(error);
};

const scanner = new Html5QrcodeScanner("reader", {
  fts: 10,
  qrbox: { width: 250, height: 250 },
});

scanner.render(onScanSuccess, onScanFailure);

export default scanner;
