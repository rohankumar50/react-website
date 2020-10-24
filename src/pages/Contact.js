import React, { useState } from 'react';

const Contact = () => {
	const [ data, setdata ] = useState({
		name: '',
		email: '',
		msg: ''
	});

	const inputData = (e) => {
		const { name, value } = e.target;
		setdata((prevValue) => {
			return {
				...prevValue,
				[name]: value
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(`My name is ${data.name} email is ${data.email} my message for you is ${data.msg}`);
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-10 mx-auto">
					<h1 className="text-center">Contact Us</h1>
					<div className="row">
						<div className="col-md-6 col-10 mx-auto">
							<form onSubmit={formSubmit} className="text-center p-5" action="#!">
								<input
									type="text"
									id="defaultContactFormName"
									className="form-control mb-4"
									placeholder="Name"
									name="name"
									value={data.name}
									onChange={inputData}
								/>

								<input
									type="email"
									id="defaultContactFormEmail"
									className="form-control mb-4"
									placeholder="E-mail"
									name="email"
									value={data.email}
									onChange={inputData}
								/>

								<textarea
									className="form-control rounded-0"
									id="exampleFormControlTextarea2"
									rows="3"
									placeholder="Message"
									name="msg"
									value={data.msg}
									onChange={inputData}
								/>

								<button className="btn btn-block btn-primary mt-5" type="submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
