import React from 'react';
import '../../assets/css/main.css';

import { Link } from 'react-router';

export default class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div id="header">
					<Link to="/A">A</Link>
					<Link to="/B">B</Link>
					<Link to="/C">C</Link>
					<Link to="/D">D</Link>
					<Link to="/E">E</Link>
				</div>
				<div id="sidebar">
					<Link to="/A1">A1</Link>
					<Link to="/A2">A2</Link>
					<Link to="/A3">A3</Link>
					<Link to="/A4">A4</Link>
					<Link to="/A5">A5</Link>
				</div>
				<div id="page">
					{this.props.children}
				</div>
			</div>
		)
	}
}