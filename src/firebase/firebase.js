import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBszjnI3gtW8gW21bCWWp2MOCP8UeGRWas',

	authDomain: 'quiz-app-ecaf8.firebaseapp.com',

	projectId: 'quiz-app-ecaf8',

	storageBucket: 'quiz-app-ecaf8.appspot.com',

	messagingSenderId: '12858741833',

	appId: '1:12858741833:web:2728ef6a4287e830415b98',

	measurementId: 'G-B9ZQ8WM671',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;
