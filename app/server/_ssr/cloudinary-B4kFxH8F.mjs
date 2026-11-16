import { t as __exportAll } from "./rolldown-runtime-BBjsoOtd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cloudinary-B4kFxH8F.js
var cloudinary_exports = /* @__PURE__ */ __exportAll({
	CLOUDINARY_API_URL: () => CLOUDINARY_API_URL,
	CLOUDINARY_CLOUD_NAME: () => CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_UPLOAD_PRESET: () => CLOUDINARY_UPLOAD_PRESET,
	uploadToCloudinary: () => uploadToCloudinary
});
var CLOUDINARY_CLOUD_NAME = {
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
}["VITE_CLOUDINARY_CLOUD_NAME"];
var CLOUDINARY_UPLOAD_PRESET = {
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
}["VITE_CLOUDINARY_UPLOAD_PRESET"];
var CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
async function uploadToCloudinary(file) {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
	const response = await fetch(CLOUDINARY_API_URL, {
		method: "POST",
		body: formData
	});
	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.error?.message || "Upload failed");
	}
	return (await response.json()).secure_url;
}
//#endregion
export { uploadToCloudinary as n, cloudinary_exports as t };
