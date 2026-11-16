import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LandlordStatusScreen } from "./LandlordStatusScreen-B7dz-ZuM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.pending-0wAL41oS.js
var import_jsx_runtime = require_jsx_runtime();
var LandlordPendingPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordStatusScreen, {
	tone: "pending",
	title: "Your application is with our review team",
	body: "We check every landlord before their listings go live, so students only deal with verified hosts. Most applications are decided within one working day.",
	pointsTitle: "What we check",
	points: [
		"That your name and national ID match",
		"That your phone and WhatsApp numbers reach you",
		"Your business details, if you gave any",
		"Anything that looks off — we ask on WhatsApp rather than reject outright"
	],
	waMessage: "Hi UniHub, I'd like an update on my landlord application",
	waLabel: "Ask for an update"
});
var SplitComponent = LandlordPendingPage;
//#endregion
export { SplitComponent as component };
