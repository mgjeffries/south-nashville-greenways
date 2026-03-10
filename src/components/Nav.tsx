import { useState } from "react";
import { NavLink } from "react-router-dom";
import { QrCode } from "lucide-react";
import QRCodeModal from "./QRCodeModal.tsx";

export default function Nav() {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <nav className="site-nav">
        <div className="container nav-container">
          <NavLink to="/" className="nav-logo">
            South Nashville Greenways
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <button
              className="qr-btn"
              onClick={() => setShowQR(true)}
              aria-label="Show QR Code"
            >
              <QrCode size={20} />
            </button>
          </ul>
        </div>
      </nav>
      {showQR && (
        <QRCodeModal
          url={window.location.href}
          onClose={() => setShowQR(false)}
        />
      )}
    </>
  );
}
