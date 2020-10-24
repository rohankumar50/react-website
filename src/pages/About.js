import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/undraw_Taking_notes_re_bnaf.svg';

const About = () => {
	return (
		<section className="header" id="header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-6 col-sm-6 position-relative d-flex flex-column mt-5">
								<h1>I help business to unlock the power of voice</h1>
								<h4>So they can focus on closing deals and delight customers.</h4>
								<div className="mt-5 mb-5">
									<NavLink to="/contact" className="btn-get-started">
										Contact us
									</NavLink>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 position-relative header-image">
								<img src={image} className="img-fluid animate" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
