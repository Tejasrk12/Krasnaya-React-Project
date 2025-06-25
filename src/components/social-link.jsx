import React from "react";

export default function SocialLink() {
  const SocialData = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/Krasnaya.Corp",
      iconClass: "fa-brands fa-facebook-f",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/krasnaya.corp/",
      iconClass: "fa-brands fa-instagram",
    },
    {
      name: "Twitter",
      url: "https://x.com/krasnayacorp",
      iconClass: "fa-brands fa-x-twitter",
      style: {marginRight: 0},
    },
  ];
  return (
    <>
    <div className="footer-social">
      {SocialData.map((d,i)=>(
        <a key={i} title={d.title} data-original-title={d.title} href={d.url} target="_blank" style={d.style}> <i className={d.iconClass}></i> </a>
      ))}
    </div>
    </>
  );
}
