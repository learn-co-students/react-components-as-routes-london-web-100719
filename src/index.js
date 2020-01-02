import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SignUp from './SignUp';
import About from './About';
import Messages from './Messages';
import Login from './Login';

ReactDOM.render(

	< Router >
		< Fragment >
			< Navbar />
			<Route exact path='/' component={Home}/>
			<Route exact path="/about" component={About} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/messages' component={Messages} />
		</Fragment>
	</Router>,
	document.getElementById('root')

);
