import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<div className='bg'>
			<App />
		</div>
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
