import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SupportLink, r as SUPPORT_LABEL } from "./SupportLink-CbB80iuK.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as Check } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/list-property-DntHYNWI.js
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	"Verified badge students can trust",
	"Direct WhatsApp and email leads",
	"Campus-targeted exposure",
	"You keep pricing and availability control"
];
function ListPropertyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "For landlords & agents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-6xl",
						children: "List property. Reach students ready to move."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Put hostels, bedsitters, and rentals in front of students actively searching near campus. Create a landlord account, get verified, then publish listings yourself."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "solid-card p-7 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-medium",
							children: "What you get"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-4 text-sm text-secondary-foreground",
							children: benefits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-highlight" }),
									" ",
									item
								]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/landlord/register",
									className: "cta-shine inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow",
									children: "Create a landlord account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
									message: "Hi UniHub, I have a question about listing my property",
									className: "inline-flex min-h-12 items-center rounded-full border border-border bg-accent px-6 text-sm font-semibold",
									children: SUPPORT_LABEL === "WhatsApp support" ? "Ask on WhatsApp" : "Email us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/landlord",
									className: "inline-flex min-h-12 items-center rounded-full px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
									children: "Already registered? Sign in"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "solid-card p-7 sm:p-8",
					delay: 100,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "How onboarding works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-6 space-y-5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-highlight",
								children: "01"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-foreground",
								children: "Share location, room types, and pricing."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-highlight",
								children: "02"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-foreground",
								children: "We verify property details and contacts."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-highlight",
								children: "03"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-foreground",
								children: "Once approved, add listings from your dashboard. They go live after review."
							})] })
						]
					})]
				})]
			})]
		})
	}) });
}
//#endregion
export { ListPropertyPage as component };
