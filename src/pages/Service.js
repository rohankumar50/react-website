import React from 'react';
import Card from '../components/Card';

const Service = () => {
	return (
		<div>
			<div className="my-2">
				<h1 className="text-center">Our Services</h1>
			</div>

			<div className="container-fluid">
				<div className="col-10 mx-auto">
					<div className="row cols-md-3">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
