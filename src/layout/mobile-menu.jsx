import React from "react";
import MenuLinks from "./menu-links";

export default function MobileMenu() {
  return (
    <div id="menu-slideout" className="slideout-menu hidden-md-up">
      <div className="mobile-menu">
        <a className="close-btn">X</a>
        <ul id="mobile-menu" className="menu">
          <MenuLinks/>
        </ul>
      </div>
    </div>
  );
}
