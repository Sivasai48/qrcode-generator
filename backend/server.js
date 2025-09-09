const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Generate QR Code from URL
app.post("/generate", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Create QR as DataURL (base64 image)
    const qrDataUrl = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
    });

    res.json({ success: true, qrCode: qrDataUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate QR" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
