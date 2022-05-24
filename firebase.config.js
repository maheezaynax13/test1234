const firebaseConfig = {
	apiKey: process.env.firebaseApiKey,
	authDomain: process.env.firebaseAuthDomen,
	projectId: process.env.firebaseProjectId,
	storageBucket: process.env.firebaseStoreBucket,
	messagingSenderId: process.env.firebaseMessagingId,
	appId: process.env.firebaseAppId,
};

export default firebaseConfig;
