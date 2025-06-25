import React from "react";

export default function Copyright() {
  const copyData = {
    copyText: "© Copyright 2025 Krasnaya Corporation. Designed and Developed by",
    copyUrl: "https://www.everymedia.world/",
    copyImg: "https://krasnayacorporation.com/images/everymedia.png",
    copyTitle: "Everymedia Technologies",
  }
  return (
    <>
      <p className="white mb-0">
        {copyData.copyText}
        <a href={copyData.copyUrl} target="_blank">
          <img src={copyData.copyImg} width="90" height="8"  title={copyData.copyTitle}  alt={copyData.copyTitle} />
        </a>
      </p>
    </>
  );
}
