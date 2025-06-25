import React from 'react';

export default function WhatWeDo() {
  const infoWhatWeDo = {
    id: "what-we-do",
    title: "What We Do",
    paragraphs: [
        "At Krasnaya Corporation, we’re storytellers who live and breathe cinema. Our core lies in producing high-quality films that stand out for their authenticity, creativity, and emotional depth. Every story we touch is carefully crafted with a blend of passion, precision, and vision.",
        "We don’t just follow trends, we aim to set them. As both producers and distributors, we’re committed to championing stories that matter and bringing them to the audiences they deserve.",
        "What sets us apart? It’s our unwavering dedication to storytelling, the kind that stays with you long after the credits roll.",
    ],
    backgroundClasses: "section what-we-do ",
    imageUrl: "https://krasnayacorporation.com/images/what-we-do.jpg",
  };
  return (
    <>
    <div className={`${infoWhatWeDo.backgroundClasses} pt-11 pb-11`} id={infoWhatWeDo.id}>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="text-center-xs">
                        <h2 className="section-title white title-desktop-view mb-2">{infoWhatWeDo.title}</h2>
                        {infoWhatWeDo.paragraphs.map((d,i)=>(
                            <p key={i} className="white">{d}</p>
                        ))}
                    </div>
                </div>
                <div className="col-sm-6">
                    <h2 className="section-title white text-center title-mobile-view mb-2">{infoWhatWeDo.title}</h2>
                    <div className="text-center">
                        <img src= {infoWhatWeDo.imageUrl} alt={infoWhatWeDo.title} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


