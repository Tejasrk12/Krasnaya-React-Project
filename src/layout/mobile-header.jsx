import React from "react";
import { Link } from "react-router-dom";
import BlackLogo from '../assets/images/krasnaya-Black.png';

export default function MobileHeader() {
  return (
    <header className="header header-mobile">
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <div className="header-center">
              <Link to="/" id="logo-2">
                <img className="logo-image" src={BlackLogo} alt="Krasnaya Corporation" />
              </Link>
            </div>
          </div>
          <div className="col-xs-2">
            <div className="header-left">
              <div id="open-left">
                <i className="ion-navicon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
