import React from "react";
import QRGenerator from "./components/QRGenerator";
import "./styles/App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          QR Code Generator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Create and share QR codes instantly from any URL.
        </motion.p>
      </header>

      {/* Main Content */}
      <main>
        <motion.section
          className="info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>What is a QR Code?</h2>
          <p>
            A QR code (Quick Response code) is a type of barcode that stores
            information, such as a website link. When someone scans it using
            their smartphone camera or a QR scanner app, they are redirected
            directly to that link or content.
          </p>
        </motion.section>

        <motion.section
          className="instructions"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>How to Use</h2>
          <ol>
            <li>Enter a valid URL (e.g., https://example.com).</li>
            <li>Click on <strong>Generate QR</strong>.</li>
            <li>Download the QR code image.</li>
            <li>
              Share the QR code with others — when they scan it, they’ll be
              redirected to the link.
            </li>
          </ol>
        </motion.section>

        <motion.section
          className="generator"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <QRGenerator />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} QR Code Generator | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
