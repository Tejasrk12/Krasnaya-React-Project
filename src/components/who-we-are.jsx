import React from "react";
import WhoWeImg from '../assets/images/who-we-are.jpg'

export default function WhoWeAre() {
  const infoSection = {
    id: "who-we-are",
    title: "Who We Are",
    imageUrl: WhoWeImg,
    paragraphs: [
        "Established in 2019, we are a forward-thinking production and distribution house built on the belief that great stories deserve a powerful platform. Krasnaya was born out of a passion for cinema and a commitment to bringing fresh, meaningful narratives to life.",
        "At our core is the desire to produce and distribute films that inspire, move, and connect with audiences on a deeper level. Whether it’s an indie gem or a bold new voice in filmmaking, we’re here to champion it.",
        "Our vision is simple: to tell stories that are both impactful and unforgettable. We aim to bring fresh perspectives to the screen and highlight voices that need to be heard.",
        "Our goal is to continue pushing boundaries, shaping narratives that resonate, and expanding our footprint across theatres, television, and digital platforms. At Krasnaya, cinema is more than entertainment, it's an emotion.",
    ] ,
    backgroundClasses: "who-we-are section-bg-5 section-cover",
  };
  return(
    <>
    <div className={`section ${infoSection.backgroundClasses}  pt-11 pb-11`} id={infoSection.id}>
        <div className="container">
            
            <div className="row ">
                <div className="col-sm-6">
                    <h2 className="section-title text-center title-mobile-view mb-2">{infoSection.title}</h2>
                    <div className="text-center">
                        <img src={infoSection.imageUrl} alt={infoSection.title} className="img-fluid" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="text-center-xs">
                        <h2 className="section-title mb-2 title-desktop-view">{infoSection.title}</h2>
                        {infoSection.paragraphs.map((d,i) => {
                            return <p key={i}>{d}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}