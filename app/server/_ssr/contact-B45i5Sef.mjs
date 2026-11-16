import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as WHATSAPP_CONFIGURED, i as SupportLink, n as SUPPORT_EMAIL } from "./SupportLink-CbB80iuK.mjs";
import { C as MessageCircle, D as Mail, E as MapPin, H as Clock } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B45i5Sef.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-6xl",
						children: "Talk to UniHub."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Questions about a listing, verification, or listing your property? Message us directly. No account required."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "solid-card flex flex-col p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-5 text-highlight",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-medium",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Listing questions, verification, partnerships, and data requests."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SUPPORT_EMAIL}`,
								className: "mt-auto inline-flex min-h-12 w-fit items-center self-start rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow",
								children: SUPPORT_EMAIL
							})
						]
					}),
					WHATSAPP_CONFIGURED ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "solid-card flex flex-col p-7",
						delay: 80,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-5 text-highlight",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-medium",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Fastest for listing questions and campus recommendations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
								message: "Hi UniHub, I'd like help finding verified student housing",
								className: "mt-auto inline-flex min-h-12 w-fit items-center rounded-full border border-border bg-accent px-5 text-sm font-semibold",
								children: "Open WhatsApp"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "solid-card flex flex-col p-7",
						delay: 80,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
								className: "size-5 text-highlight",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-medium",
								children: "Response times"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "We read email on working days and usually reply within one business day. Listings reported as misleading are reviewed first."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "solid-card flex flex-col p-7",
						delay: 140,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "size-5 text-highlight",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-medium",
								children: "Coverage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "Student towns across Kenya: Nairobi, Juja, Thika, Kahawa, Eldoret, Nakuru, and more."
							})
						]
					})
				]
			})]
		})
	}) });
}
//#endregion
export { ContactPage as component };
