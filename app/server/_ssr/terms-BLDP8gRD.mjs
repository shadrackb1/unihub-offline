import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as LegalPage, t as LegalList } from "./LegalPage-c_x5jlKU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-BLDP8gRD.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: "Terms of service",
		updated: "1 October 2026",
		summary: "UniHub is a directory that connects students with landlords and agents. We do not own the rooms, take rent, or hold deposits — and a verified badge is not an inspection.",
		related: {
			to: "/privacy",
			label: "Privacy policy"
		},
		sections: [
			{
				heading: "What UniHub is",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "UniHub publishes housing listings near Kenyan campuses and passes enquiries to the landlord or agent who posted them. Any tenancy you agree to is between you and that landlord; UniHub is not a party to it." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We do not collect rent or deposits, do not hold funds on anyone's behalf, and cannot guarantee that a room is still available when you call." })] })
			},
			{
				heading: "What verification means",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before a landlord can publish, we check their identity and contact details and review the listing they submit. That is what the verified badge means." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It is not a physical inspection, a title search, or a guarantee of condition. You are still responsible for viewing a room and confirming the landlord's right to let it before you pay anything." })] })
			},
			{
				heading: "If you are a student",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
					"View the property in person and meet the person letting it before paying a deposit",
					"Never send money to someone who will not show you the room or sign an agreement",
					"Treat listing details as a starting point, not a contract",
					"Report a listing that looks fake, duplicated or mispriced — we review reports and remove listings that break these terms"
				] })
			},
			{
				heading: "If you are a landlord or agent",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "When you publish on UniHub you confirm that:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"You are the owner, or are authorised to advertise the property",
						"Photos, rent, location and amenities are accurate and current",
						"You will tell us promptly when a room is taken, so students are not sent to a full property",
						"You will not ask students for a viewing fee, registration fee or any payment before a viewing",
						"You will handle student data you receive through UniHub lawfully, and only to respond to their enquiry"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Accounts are personal. Registering multiple accounts to get around a review, a rejection or a suspension breaks these terms." })
				] })
			},
			{
				heading: "Removal and suspension",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We may hide or remove a listing, or pause an account, when we find:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalList, { items: [
						"A listing that misrepresents the property, its price or its availability",
						"Evidence of a deposit or viewing-fee scam",
						"Harassment of a student, or misuse of their contact details",
						"Repeated reports we cannot resolve with the landlord"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We tell the account holder what happened and why, and publishing resumes if the issue is resolved. If you think a decision was wrong, reply to that message." })
				] })
			},
			{
				heading: "Content you post",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You keep ownership of your photos and listing text. By publishing, you allow UniHub to display them on the site and in links we share. Do not upload images you do not have the right to use." })
			},
			{
				heading: "Changes and contact",
				body: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If these terms change materially, we will update the date above and tell registered landlords by email before the change takes effect." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Questions, reports or takedown requests:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@unihub.ke",
						className: "text-foreground underline underline-offset-4",
						children: "hello@unihub.ke"
					}),
					". These terms are governed by the laws of Kenya."
				] })] })
			}
		]
	});
}
//#endregion
export { TermsPage as component };
