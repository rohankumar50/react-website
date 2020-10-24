import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';
import About from './pages/About';

const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/about" component={About} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
};

export default App;
