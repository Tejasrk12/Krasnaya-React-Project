import React from "react";

export default function ArrowDown() {
  return (
    <div className="arrow">
      <div
        className="aligmentonbanner"
        id="scroll-mouse-cls"
        style={{ display: "block" }}
      >
        <a href="#who-we-are">
          <div className="mouse"></div>
          <span className="scrolls">Scroll Down</span>
        </a>
      </div>
    </div>
  );
}
