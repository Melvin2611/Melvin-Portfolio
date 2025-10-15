import React from "react";

export default function SvgButton({ url, imgSrc, size = 50, alt = "SVG Button" }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
        backgroundColor: "#6a1b9a",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(106, 27, 154, 0.5)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={imgSrc}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </a>
  );
}
