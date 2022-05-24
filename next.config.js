/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

module.exports = {
	env: {
		publicURL: process.env.PUBLIC_URL,
		apiAuthURL: process.env.API_AUTH_URL,
		apiOrderURL: process.env.API_ORDER_SERVICE,
		apiURL: process.env.API_URL,
		apiProductURL: process.env.API_PRODUCT_URL,
		apiCustomerURL: process.env.API_CUSTOMER_SERVICE,
		apiPaymentURL: process.env.API_PAYMENT_SERVICE,
		apiCmsURL: process.env.API_CMS_SERVICE,
		nodeEnv: process.env.NODE_ENV,
		dateTimeFormat: 'd mmm, yyyy - hh:MM TT',

		bKashNumber: process.env.BKASH_NUMBER,
		supportNumber: process.env.SUPPORT_NUMBER,
		supportEmail: process.env.SUPPORT_EMAIL,

		sellerCaveURL: process.env.SELLER_CAVE_URL,

		facebookURL: process.env.FACEBOOK_URL,
		twitterURL: process.env.TWITTER_URL,
		linkedinURL: process.env.LINKEDIN_URL,
		instagramURL: process.env.INSTAGRAM_URL,
		youtubeURL: process.env.YOUTUBE_URL,

		bkashScriptURL: process.env.BKASH_SCRIPT_URL,


		firebaseApiKey: process.env.FIREBASE_API_KEY,
		firebaseAuthDomen: process.env.FIREBASE_AUTH_DOMEN,
		firebaseProjectId:process.env.FIREBASE_PROJECT_ID,
		firebaseStoreBucket:process.env.FIREBASE_STORE_BUCKET,
		firebaseMessagingId:process.env.FIREBASE_MESSAGING_ID,
		firebaseAppId:process.env.FIREBASE_APP_ID
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		// ignoreBuildErrors: true,
	},
	// productionBrowserSourceMaps: true,
};
