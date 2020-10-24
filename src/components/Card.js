import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {
	return (
		<div className="col-md-4 gy-4">
			<div className="card">
				<div className="view overlay">
					<img
						className="card-img-top"
						src="https://source.unsplash.com/random/1600x1200"
						alt="Card image cap"
					/>
					<a href="#!">
						<div className="mask rgba-white-slight" />
					</a>
				</div>

				<div className="card-body">
					<h4 className="card-title">Card title</h4>

					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>

					<NavLink to="#" class="btn btn-primary">
						Button
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Card;
