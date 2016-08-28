import React from 'react';
import { render } from 'react-dom';
import Main from './view/main';
import Login from './view/login';
import A1 from './view/A1';
import A2 from './view/A2';
import A3 from './view/A3';
import A4 from './view/A4';
import A5 from './view/A5';

import { Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router';


render(
	<Router history={browserHistory}> 
		<Route path="/" component={Main}>
			<IndexRedirect to="A1" />
			<Route path="A1" component={A1} />
			<Route path="A2" component={A2} />
			<Route path="A3" component={A3} />
			<Route path="A4" component={A4} />
			<Route path="A5" component={A5} />
		</Route>
	</Router>,
	document.getElementById('app')
);