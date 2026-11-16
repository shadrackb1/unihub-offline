import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as LandlordStatusScreen } from "./LandlordStatusScreen-B7dz-ZuM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.rejected-Cv-83Iby.js
var import_jsx_runtime = require_jsx_runtime();
var LandlordRejectedPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordStatusScreen, {
	tone: "rejected",
	title: "We couldn't approve this account",
	body: "Your account stays on file, so nothing is lost — but we can't let it publish listings until the details below are sorted out.",
	pointsTitle: "How to get approved",
	points: [
		"Message us with the document or detail that was missing",
		"Use the same account — do not register a second one",
		"Once we re-check your details, approval takes effect right away"
	],
	waMessage: "Hi UniHub, my landlord application wasn't approved and I'd like to fix it",
	waLabel: "Send the missing details"
});
var SplitComponent = LandlordRejectedPage;
//#endregion
export { SplitComponent as component };
