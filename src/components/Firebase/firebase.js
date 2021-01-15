import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
	constructor() {
		app.initializeApp(config);

		//initialize auth API
		this.auth = app.auth();
		//initialize database API
		this.db = app.database();
	}

	//authentication
	//-------AUTH API-------

	//authentication methods
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	//password stuff for authenticated users
	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = (password) =>
		this.auth.currentUser.updatePassword(password);

	//database
	//-------USER API-------
	//inside ref() are the paths where the entities will be stored in the realtime db API
	user = (uid) => this.db.ref(`users/${uid}`);
	users = () => this.db.ref('users');
	//--------GOAL API------
	goal = (uid) => this.db.ref(`goals/${uid}`);
	goals = () => this.db.ref(`goals`);
}

export default Firebase;
