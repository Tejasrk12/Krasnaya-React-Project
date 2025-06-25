import React from 'react';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

export default function Header() {
  return (
    <>
    {/* Desktop Header Start  */}
    <DesktopHeader/>
    {/* Desktop Header End */}

    {/* Mobile Header Start  */}
    <MobileHeader/>
    {/* Mobile Header End */}
    </>
  )
}

