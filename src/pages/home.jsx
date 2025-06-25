import React from 'react';
import Loader from '../components/loader';
import MobileMenu from '../layout/mobile-menu';
import ArrowDown from '../components/arrow-down';
import Backtotop from '../components/backtotop';
import Slider from '../components/slider';
import Projects from '../components/projects';
import WhoWeAre from '../components/who-we-are';
import WhatWeDo from '../components/what-we-do';
import SectionTitle from '../components/section-title';
import Paragraph from '../components/paragraph';
import Header from '../layout/header';
import Footer from '../layout/footer';
import ContactForm from '../components/contact-form';

export default function Home() {
  return (
    <>
        {/* Loader Start */}
        <Loader/>
        {/* Loader End */}
		
        {/* Mobile Menu Start */}
        <MobileMenu/>
        {/* Mobile Menu End */}

		<div className="site">
            {/* Header Start */}
            <Header/>
            {/* Header End */}
			
			<div id="main">
				<div className="section" id="home">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 p-0">
								<div id="rev_slider" className="rev_slider fullscreenbanner">
									<Slider/>
                                    {/* Arrow toggler Start */}
                                    <ArrowDown/>
                                    {/* Arrow toggler End*/}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Who We Are Section Start */}
				<WhoWeAre/>
				{/* Who We Are Section End */}

				{/* What We Do Section Start */}
				<WhatWeDo/>
				{/* What We Do Section End */}

			
				{/* Projects Start*/}
				<div className="section projects pt-8 pb-4" id="projects">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="text-center">
									<SectionTitle title="Projects"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Projects  */}
					<Projects/>
				{/* Projects  */}
				{/* Projects End */}

			</div>
			<div className="section pt-12 mb-10" id="contact-us">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<SectionTitle className="text-center" title={"Contact Us"}/>
							<Paragraph className="mb-5 text-center" paragraph={"Got a question or want to get in touch? Drop us a message, we'd love to hear from you!"}/>
							{/*<h3 className="section-title bottom-line mb-5">Where stories find their voice and visions come alive.</h3> */}
							<ContactForm/>
						</div>
					</div>
				</div>
			</div>
			<footer className="copyright" >
				<div className="container">
					<div className="row">
						<Footer/>
					</div>
				</div>
			</footer>
		</div>
		<Backtotop/>
    </>
  )
}
