import React from 'react'

export default function Projects() {
  const projectData = [
    {
        role: "As Producers",
        paragraph: "Produced Logout, a bold exploration of identity in the digital world.",
        imageUrl: "https://krasnayacorporation.com/images/projects/project-1.jpg",
        trailerUrl: "./logout",
        reverseLayout: false,
    },
    {
        role: "As Distributors",
        paragraph: "Revived Vicky Donor, bringing its charm to a new generation of audiences.",
        imageUrl: "https://krasnayacorporation.com/images/projects/project-2.jpg",
        trailerUrl: "./vicky-donor",
        reverseLayout: true,
    }
  ]
  return (
    <>
    {projectData.map((project,i)=>(
    <div key={i} className={`section projects-img-wrap section-cover ${project.role.toLowerCase().includes('distributor') ? 'distributors' : ''}`}>
        <div className="container-fluid">
            <div className="row">
                {/* Conditionally Reverse Layout Start  */}
                {!project.reverseLayout ? (
                    <>
                    <div className="col-md-8 p-0">
                        <div className="popup-video">
                            <a className="md-trigger">
                                <img src={project.imageUrl} alt={project.role} />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 pl-9 pr-9">
                        <div className="text-center-xs">
                            <h2 className="section-title fz-56 mb-4">{project.role}</h2>
                            <p>{project.paragraph}</p>
                            <div className="film-button mt-2">
                                <a href={project.trailerUrl}> <i className="ion-android-arrow-forward"></i> Watch The Trailer</a>
                            </div>
                        </div>
                    </div>
                    </>
                ):(
                    <>
                    <div className="col-md-4 pl-9 pr-9">
                        <div className="text-center-xs">
                            <h2 className="section-title fz-56 mb-4">{project.role}</h2>
                            <p>{project.paragraph}</p>
                            <div className="film-button mt-2">
                                <a href={project.trailerUrl} target="_self"> <i className="ion-android-arrow-forward"></i> Watch The Trailer</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 p-0">
                        <div className="popup-video">
                            <a className="md-trigger" >
                                <img src={project.imageUrl} alt={project.role} />
                            </a>
                        </div>
                    </div>
                    </>
                )}
                {/* Conditionally Reverse Layout End */}
            </div>
        </div>
    </div>
    ))}
    </>
  )
}