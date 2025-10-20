import { useState } from "react";

// Beispiel: Du kannst dein eigenes SVG verwenden
import CopyIcon from "/Media/images/Email.svg"; 

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "98172640+Melvin2611@users.noreply.github.com"; // Hier deine E-Mail eintragen

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ position: "relative", display: "inline-block", cursor: "pointer" }}>
      {/* SVG als Button */}
      <img
        src={CopyIcon}
        alt="Copy Email"
        onClick={handleCopy}
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#6a1b9a",
          borderRadius: "12px",
          transition: "transform 0.3s ease, boxShadow 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      />

      {/* Pop-up Nachricht */}
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "0.3rem 0.6rem",
            borderRadius: "4px",
            fontSize: "0.85rem",
            opacity: 0.9,
            pointerEvents: "none",
            transition: "opacity 0.3s ease",
          }}
        >
          E-Mail copied
        </span>
      )}
    </div>
  );
}
