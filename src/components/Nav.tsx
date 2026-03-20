import { useState } from "react";
import { NavLink } from "react-router-dom";
import { QrCode, Menu, X } from "lucide-react";
import QRCodeModal from "./QRCodeModal.tsx";

export default function Nav() {
  const [showQR, setShowQR] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="site-nav">
        <div className="container nav-container">
          <NavLink to="/" className="nav-logo" onClick={closeMenu}>
            South Nashville Greenways
          </NavLink>
          <button
            className="hamburger-btn"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links${isOpen ? " nav-open" : ""}`}>
            <li>
              <NavLink to="/events" onClick={closeMenu}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <button
              className="qr-btn"
              onClick={() => { setShowQR(true); closeMenu(); }}
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
