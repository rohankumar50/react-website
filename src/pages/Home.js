import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/undraw_product_iteration_kjok.svg';

const Home = () => {
	return (
		<section className="header" id="header">
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<div className="col-md-6 col-sm-6 position-relative d-flex flex-column mt-5">
								<h1>
									Grow your business with <strong className="brand-name">Rohan Kumar</strong>
								</h1>
								<h4>A young talanted web developer</h4>
								<div className="mt-5 mb-5">
									<NavLink to="/service" className="btn-get-started">
										Get Started
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

export default Home;
