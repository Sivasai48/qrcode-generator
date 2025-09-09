import React, { useState } from "react";
import axios from "axios";

const QRGenerator = () => {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    if (!url) {
      alert("Please enter a URL");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/generate", {
        url,
      });
      setQrCode(response.data.qrCode);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadQRCode = () => {
    const a = document.createElement("a");
    a.href = qrCode;
    a.download = "qrcode.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="qr-generator">
      <h2>Generate Your QR Code</h2>
      <input
        type="text"
        placeholder="Enter URL (https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR</button>

      {qrCode && (
        <div className="qr-output">
          <h3>Your QR Code:</h3>
          <img src={qrCode} alt="Generated QR" />
          <button onClick={downloadQRCode}>Download</button>
        </div>
      )}
    </div>
  );
};

export default QRGenerator;
