import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LandlordStatusScreen } from "./LandlordStatusScreen-B7dz-ZuM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.suspended-CWwlO5ST.js
var import_jsx_runtime = require_jsx_runtime();
var LandlordSuspendedPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordStatusScreen, {
	tone: "suspended",
	title: "Publishing is paused on this account",
	body: "A suspension stops new listings and edits while we review a report or a breach of the listing rules. Your account and existing listings are kept.",
	pointsTitle: "What happens now",
	points: [
		"Support will tell you the reason and what needs to change",
		"Publishing resumes as soon as the restriction is lifted",
		"Registering another account only delays the review"
	],
	waMessage: "Hi UniHub, my landlord account is suspended and I'd like to understand why",
	waLabel: "Talk to support"
});
var SplitComponent = LandlordSuspendedPage;
//#endregion
export { SplitComponent as component };
