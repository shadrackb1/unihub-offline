import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-c_x5jlKU.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Shared shell for the privacy and terms pages: a readable measure, numbered
* sections and a consistent footer note, so neither page reads like a
* placeholder paragraph.
*/
function LegalPage({ title, updated, summary, sections, related }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Legal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground",
						children: ["Last updated ", updated]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-foreground/90",
						children: summary
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 border-t border-border",
					children: sections.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "border-b border-border py-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "flex items-baseline gap-3 font-display text-xl font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "instrument shrink-0 tabular-nums",
								children: String(index + 1).padStart(2, "0")
							}), section.heading]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: section.body
						})]
					}, section.heading))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-8 rounded-2xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Something here unclear, or a request about your data?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex min-h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground",
							children: "Contact UniHub"
						}), related ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: related.to,
							className: "inline-flex min-h-10 items-center rounded-full border border-border bg-accent px-5 text-sm font-semibold",
							children: related.label
						}) : null]
					})]
				})
			]
		})
	}) });
}
/** Bulleted list that matches the legal pages' body copy. */
function LegalList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "mt-2 size-1 shrink-0 rounded-full bg-highlight"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, index))
	});
}
//#endregion
export { LegalPage as n, LegalList as t };
