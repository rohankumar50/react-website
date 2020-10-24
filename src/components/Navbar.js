import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div class="container-fluid">
			<div className="row">
				<div className="col-10 mx-auto">
					<nav className="navbar navbar-expand-lg navbar-light">
						<NavLink className="navbar-brand" to="#">
							Brand
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i className="fas fa-bars" />
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
								<li>
									<NavLink className="nav-link" activeClassName="menu-active" to="/">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="menu-active" to="/service">
										Service
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="menu-active" to="/about">
										About
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="menu-active" to="/contact">
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
