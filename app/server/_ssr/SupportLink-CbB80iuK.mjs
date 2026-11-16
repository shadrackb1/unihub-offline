import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SupportLink-CbB80iuK.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Single source of truth for UniHub contact details.
*
* The WhatsApp number used to be hardcoded (as a placeholder) in half a
* dozen files. Everything now derives from these values; override the number
* per environment with VITE_WHATSAPP_NUMBER (digits only, country code first).
*
* If no number is configured, the site must not pretend otherwise: a
* `254700000000`-style placeholder looks like a real contact but reaches
* nobody. In that state every support action falls back to email and the
* number is never printed.
*/
var PLACEHOLDER_NUMBER = "254700000000";
/** The team inbox, used whenever WhatsApp is unavailable. */
var SUPPORT_EMAIL = "hello@unihub.ke";
function normalize(input) {
	const digits = input.replace(/[^0-9]/g, "");
	if (digits.length === 10 && digits.startsWith("0")) return `254${digits.slice(1)}`;
	if (digits.length === 9) return `254${digits}`;
	return digits;
}
var RAW_NUMBER = normalize({
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
}["VITE_WHATSAPP_NUMBER"] || "");
/** True once a real support number is set for this deployment. */
var WHATSAPP_CONFIGURED = RAW_NUMBER.length >= 11 && RAW_NUMBER !== PLACEHOLDER_NUMBER;
/** Digits-only international number, e.g. 254712345678. Empty when unset. */
var WHATSAPP_NUMBER = WHATSAPP_CONFIGURED ? RAW_NUMBER : "";
/** Human display form, e.g. +254 712 345 678. Null when unconfigured. */
function formatWhatsAppNumber() {
	const n = WHATSAPP_NUMBER;
	if (!n) return null;
	if (n.length === 12 && n.startsWith("254")) return `+${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9)}`;
	return `+${n}`;
}
/** WhatsApp deep link when configured, otherwise an email draft. */
function waLink(message) {
	if (WHATSAPP_CONFIGURED) return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
	return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("UniHub support")}&body=${encodeURIComponent(message)}`;
}
/** True when `waLink` produced a wa.me link rather than the email fallback. */
function isWhatsAppLink(href) {
	return href.startsWith("https://wa.me/");
}
/** Label for a support action, e.g. "WhatsApp support" or "Email support". */
var SUPPORT_LABEL = WHATSAPP_CONFIGURED ? "WhatsApp support" : "Email support";
/** Default support action used across marketing chrome and account screens. */
var SUPPORT_ACTION = {
	href: waLink("Hi UniHub, I'd like help finding verified student housing"),
	external: WHATSAPP_CONFIGURED,
	label: SUPPORT_LABEL
};
SUPPORT_ACTION.href;
/**
* Support action that works with or without WhatsApp configured.
*
* Falls back to an email draft when VITE_WHATSAPP_NUMBER is unset, so the
* link is never a dead wa.me URL pointing at a placeholder number. Only
* genuinely external links get target/rel.
*/
function SupportLink({ message, className, children, ...rest }) {
	const href = waLink(message);
	const external = isWhatsAppLink(href);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		"aria-label": rest["aria-label"],
		...external ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
}
//#endregion
export { WHATSAPP_CONFIGURED as a, SupportLink as i, SUPPORT_EMAIL as n, formatWhatsAppNumber as o, SUPPORT_LABEL as r, waLink as s, SUPPORT_ACTION as t };
