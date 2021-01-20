import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Firebase, { FirebaseContext } from './components/Firebase';
import StickyFooter from './components/App/Footer';

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<App />
		<StickyFooter />
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
