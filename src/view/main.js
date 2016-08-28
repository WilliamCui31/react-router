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
					<Link to="/A" activeClassName="active">A</Link>
					<Link to="/B" activeClassName="active">B</Link>
					<Link to="/C" activeClassName="active">C</Link>
					<Link to="/D" activeClassName="active">D</Link>
					<Link to="/E" activeClassName="active">E</Link>
				</div>
				<div id="sidebar">
					<Link to="/A1" activeClassName="active">A1</Link>
					<Link to="/A2" activeClassName="active">A2</Link>
					<Link to="/A3" activeClassName="active">A3</Link>
					<Link to="/A4" activeClassName="active">A4</Link>
					<Link to="/A5" activeClassName="active">A5</Link>
				</div>
				<div id="page">
					{this.props.children}
				</div>
			</div>
		)
	}
}