import React from 'react';
import {Link} from 'react-router-dom';
import WhiteLogo from '../assets/images/krasnaya-white.png';
import BlackLogo from '../assets/images/krasnaya-Black.png';

export default function HeaderLogo() {
  return (
   <>
   <Link to="/" id="branding_logo">
        <img className="logo" src={WhiteLogo} alt="Krasnaya Corporation" title="Krasnaya Corporation" />
        <img className="logo-alt" src={BlackLogo} alt="Krasnaya Corporation" title="Krasnaya Corporation" />
    </Link>
   </>
  )
}


