import React from "react";
import HeaderLogo from "../components/header-logo";
import MenuLinks from "./menu-links";

export default function DesktopHeader() {
    const PageName = [
      {
        page:"Home"
      },
      {
        page:"Other"
      }
    ]
  return (
    <>
    {PageName.map((d,i)=>(
    <header key={i} id="header" className={`header header-desktop header-1 ${d.page.toLowerCase().includes('home') ? 'header-overlay' : 'other-pages'}`} >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-0">
            <div className="header-left">
              <HeaderLogo/>
            </div>
          </div>
          <div className="col-md-9 p-0">
            <div className="header-right">
              <nav id="menu" className="menu menu-primary">
                <ul>
                  <MenuLinks/>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    ))}
    </>
  );
}
