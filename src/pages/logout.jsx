import React from "react";
import Loader from "../components/loader";
import MobileMenu from "../layout/mobile-menu";
import Backtotop from "../components/backtotop";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function Logout() {

  return (
    <>
      {/* Loader Start */}
      <Loader />
      {/* Loader End */}

      {/* Mobile Menu Start */}
      <MobileMenu />
      {/* Mobile Menu End */}

      <div className="site">
        {/* Header Start */}
        <Header />
        {/* Header End */}

        <div id="main">
          <div className="section page-title project-page-title">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="text-center-sm">
                    <h1 className="title">Logout</h1>
                    <div className="breadcrumbs">
                      <ul>
                        <li>(Distributed by Krasnaya)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section pt-5 pb-7 img-detail-wrapper">
            <div className="container">
              <h5 className="back-btn">
                <a href="index.php#projects">Back</a>
              </h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="film-detail-video">
                    <a
                      href="https://youtu.be/GOKaA2H2PgA"
                      target="_blank"
                      className="md-trigger"
                      data-modal="modal-1"
                    >
                      <img src="images/projects/project-1.jpg" alt="Logout" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section pb-7">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <div className="film-detail-title">
                    <h3 className="section-title">Logout</h3>
                  </div>
                  <div className="film-detail-content mt-4">
                    <h5>Synopsis</h5>
                    <p>
                      Logout is an Indian cyber-thriller drama that doubles as a
                      sharp satire on our dependence on smartphones. Starring
                      Babil Khan, Rasika Dugal, Gandharv Dewan, and Nimisha
                      Nair, the film explores the dark side of digital fame and
                      the psychological toll of living online. Directed by Amit
                      Golani and written by Biswapati Sarkar, Logout is a
                      compelling narrative that pushes boundaries and holds up a
                      mirror to the world of influencers and online obsession.
                    </p>
                    <div className="mb-4"></div>
                    <h5>Awards</h5>
                    <p>
                      National Film Awards: Best Popular Film, Best Supporting
                      Actor, Best Supporting Actress Filmfare Awards: Best Male
                      Debut, Best Supporting Actor, Best Story, Best Male
                      Playback Singer Stardust, Star Screen, Producers Guild
                      Awards, and many others for Best Film, Debut, Actor,
                      Director, Comedian, Dialogue, Story, and Music{" "}
                    </p>
                  </div>
                  <div className="film-button">
                    <a href="https://youtu.be/GOKaA2H2PgA" target="_blank">
                      <i className="ion-arrow-right-c"></i> Watch Trailer
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="film-detail-info">
                    <div className="info-item">
                      <div className="info-item-inner">
                        <div className="title">Release Date</div>
                        <div className="content">18 April 2025</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-item-inner">
                        <div className="title">IMDb</div>
                        <div className="content">7.0/10</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-item-inner">
                        <div className="title">Director</div>
                        <div className="content">Amit Golani</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-item-inner">
                        <div className="title">Lead Cast</div>
                        <div className="content">
                          Babil Khan as Pratyush Dua (Pratman)
                          <br />
                          Rasika Dugal as Pratyush's Sister
                          <br />
                          Gandharv Dewan as JD, the excitable manager
                          <br />
                          Nimisha Nair as Sakshi Kishore aka SK, the obsessive
                          fan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="copyright">
          <div className="container">
            <div className="row">
              <Footer />
            </div>
          </div>
        </footer>
      </div>
      <Backtotop />
    </>
  );
}
