import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SupportLink, r as SUPPORT_LABEL } from "./SupportLink-CbB80iuK.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, L as GraduationCap, d as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as useSiteSettings } from "./useSiteSettings-rriqBin-.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CKkwsYBZ.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		icon: ShieldCheck,
		title: "Verified first",
		copy: "We check listings and landlord contacts before they appear, so students spend less time sorting scams from real rooms."
	},
	{
		icon: GraduationCap,
		title: "Built around campuses",
		copy: "Housing sits near universities and student towns such as Juja, Kahawa, Eldoret, and Nakuru. It is not generic city inventory."
	},
	{
		icon: MessageCircle,
		title: "Direct contact",
		copy: "Browse freely, then WhatsApp or email the agent. UniHub stays out of the way when you are ready to move."
	}
];
function AboutPage() {
	const teamMembers = useSiteSettings()?.teamMembers || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Why UniHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-6xl",
							children: "Built for students. Designed for trust."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Finding a safe place near campus in Kenya should not mean endless WhatsApp groups and risky deposits. UniHub connects students with verified hostels, bedsitters, and rentals, then gets out of the way."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 md:grid-cols-3",
					children: pillars.map(({ icon: Icon, title, copy }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: index * 90,
						className: "solid-card p-7 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-12 items-center justify-center rounded-2xl border border-border bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.7,
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-8 font-display text-2xl font-medium",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: copy
							})
						]
					}, title))
				}),
				teamMembers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "The people behind it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl",
							children: "Meet the team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: teamMembers.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "solid-card flex items-center gap-4 p-6",
								children: [member.photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: member.photoUrl,
									alt: member.name,
									className: "size-16 shrink-0 rounded-2xl object-cover border border-border"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-accent font-display text-xl",
									children: member.name.charAt(0)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-medium",
									children: member.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: member.role
								})] })]
							}, `${member.name}-${index}`))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-medium",
						children: "Ready to look around?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Start with featured listings or watch the walkthrough on the homepage."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/listings",
							className: "cta-shine inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow",
							children: "Browse Listings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
							message: "Hi UniHub, I'd like to know more about how you verify listings",
							className: "inline-flex min-h-12 items-center rounded-full border border-border bg-accent px-6 text-sm font-semibold",
							children: SUPPORT_LABEL
						})]
					})]
				})
			]
		})
	}) });
}
//#endregion
export { AboutPage as component };
