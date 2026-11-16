import { o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import { t as getAuth } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { n as getFirestore, r as initializeFirestore, t as memoryLocalCache } from "../_libs/@firebase/firestore+[...].mjs";
import { t as getStorage } from "../_libs/firebase__storage.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/firebase-BUHXILn-.js
var firebase_applet_config_default = {
	projectId: "gen-lang-client-0809545608",
	appId: "1:257111054437:web:e5df883e66ee37e9f38e8c",
	apiKey: "AIzaSyCAVhhKDyQ3EC4WaTdr8cbyQnTPsMk_MnI",
	authDomain: "gen-lang-client-0809545608.firebaseapp.com",
	firestoreDatabaseId: "ai-studio-a016ea2f-487f-4d1e-b81f-81460a11c36a",
	storageBucket: "gen-lang-client-0809545608.firebasestorage.app",
	messagingSenderId: "257111054437",
	measurementId: ""
};
var env = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_ADMIN_EMAILS": "your-admin-email@example.com,admin@unihub.dev",
	"VITE_APP_URL": "http://localhost:8080",
	"VITE_FIREBASE_API_KEY": "AIzaSyConZk9rE3THKivisE8C3nqwEaPfr5RaOY",
	"VITE_FIREBASE_APP_ID": "1:967118340428:web:e37e76fd96985d83aa4fe9",
	"VITE_FIREBASE_AUTH_DOMAIN": "efk-battles.firebaseapp.com",
	"VITE_FIREBASE_MESSAGING_SENDER_ID": "967118340428",
	"VITE_FIREBASE_PROJECT_ID": "efk-battles",
	"VITE_FIREBASE_STORAGE_BUCKET": "efk-battles.firebasestorage.app",
	"VITE_WHATSAPP_MESSAGE": "Hi%20UniHub%2C%20I%27d%20like%20help%20finding%20verified%20student%20housing",
	"VITE_WHATSAPP_NUMBER": "254700000000"
};
var fallback = firebase_applet_config_default;
var firebaseConfig = {
	apiKey: env["VITE_FIREBASE_API_KEY"] || fallback["apiKey"],
	authDomain: env["VITE_FIREBASE_AUTH_DOMAIN"] || fallback["authDomain"],
	projectId: env["VITE_FIREBASE_PROJECT_ID"] || fallback["projectId"],
	storageBucket: env["VITE_FIREBASE_STORAGE_BUCKET"] || fallback["storageBucket"],
	messagingSenderId: env["VITE_FIREBASE_MESSAGING_SENDER_ID"] || fallback["messagingSenderId"],
	appId: env["VITE_FIREBASE_APP_ID"] || fallback["appId"]
};
var app = getApps()[0] ?? initializeApp(firebaseConfig);
var auth = getAuth(app);
getStorage(app);
var databaseId = env["VITE_FIREBASE_FIRESTORE_DATABASE_ID"] || fallback["firestoreDatabaseId"] || void 0;
function createDb() {
	try {
		return initializeFirestore(app, {
			experimentalForceLongPolling: true,
			localCache: memoryLocalCache()
		}, databaseId);
	} catch {
		return databaseId ? getFirestore(app, databaseId) : getFirestore(app);
	}
}
createDb();
//#endregion
export { auth as t };
