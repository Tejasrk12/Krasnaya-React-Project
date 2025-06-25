import React from 'react';
import Copyright from '../components/copyright';
import SocialLink from '../components/social-link'

export default function Footer() {
  return (
    <>
    <div className="copyright-container">
      <div className="col-md-7 p-0">
        <div className="copyright-left text-center">
          <Copyright/>
        </div>
      </div>
      <div className="col-md-5 p-0">
        <div className="copyright-right">
          <SocialLink/>
        </div>
      </div>
    </div>
    </>
  )
}
