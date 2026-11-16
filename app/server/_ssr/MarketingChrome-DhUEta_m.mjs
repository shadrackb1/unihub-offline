import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { a as WHATSAPP_CONFIGURED, i as SupportLink, n as SUPPORT_EMAIL, t as SUPPORT_ACTION } from "./SupportLink-CbB80iuK.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, D as Mail, K as CircleUserRound, k as LogIn, n as X, w as Menu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MarketingChrome-DhUEta_m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LogoMark = ({ className }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex shrink-0 ${className ?? ""}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 64",
			className: "h-full w-full",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "64",
					height: "64",
					rx: "14",
					className: "fill-card"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 28.5L32 12l20 16.5",
					stroke: "currentColor",
					strokeWidth: "2.75",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16.5 26.5V46.5c0 1.1.9 2 2 2h27c1.1 0 2-.9 2-2V26.5",
					stroke: "currentColor",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 31.5v8.2c0 4.2 3.2 6.8 8 6.8s8-2.6 8-6.8v-8.2",
					stroke: "currentColor",
					strokeWidth: "2.75",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "46",
					cy: "20",
					r: "4.25",
					className: "fill-card",
					stroke: "#6EE7B7",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M44.2 20l1.3 1.35 2.4-2.7",
					stroke: "#6EE7B7",
					strokeWidth: "1.6",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			]
		})
	});
};
var Logo = ({ className = "", showTagline = true }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `group flex items-center gap-3 rounded-xl ${className}`,
		"aria-label": "UniHub home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: "size-10 text-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-xl font-medium leading-none tracking-normal",
				children: ["Uni", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Hub"
				})]
			}), showTagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "instrument hidden text-[0.58rem] opacity-80 sm:block",
				children: "Campus housing · Kenya"
			}) : null]
		})]
	});
};
var NAV_LINKS = [
	{
		label: "Journey",
		to: "/"
	},
	{
		label: "Listings",
		to: "/listings"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	},
	{
		label: "List property",
		to: "/list-property"
	},
	{
		label: "Landlord Portal",
		to: "/landlord"
	}
];
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { showTagline: true });
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user } = useAuth();
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#main",
		className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
		children: "Skip to content"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/65 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8",
			"aria-label": "Main navigation",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "nav-link",
						children: link.label
					}, link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: "inline-flex items-center gap-2 min-h-10 rounded-full bg-primary/10 px-4 text-sm font-medium text-primary hover:bg-primary/20 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {
								className: "size-4",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin" })]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/listings",
							className: "hidden min-h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex",
							children: "Browse Listings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-4",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-4",
								"aria-hidden": "true"
							})
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background/95 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6",
				children: [
					NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "min-h-12 rounded-2xl px-3 py-3 text-sm font-medium text-foreground hover:bg-accent",
						onClick: () => setOpen(false),
						children: link.label
					}, link.label)),
					user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "mt-3 inline-flex items-center justify-center gap-2 min-h-12 rounded-full bg-primary/10 px-5 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Admin"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/listings",
						className: "mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow",
						onClick: () => setOpen(false),
						children: "Browse Listings"
					})
				]
			})
		}) : null]
	})] });
}
function FooterColumn({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-3",
		children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			children: label
		}) }, label))
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "contact",
		className: "border-t border-border bg-panel",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-14 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: "Verified student housing near Kenyan campuses. Browse freely, then talk directly to the people listing it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
							message: "Hi UniHub, I'd like help finding verified student housing",
							className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-highlight",
							"aria-label": `Contact UniHub support: ${SUPPORT_ACTION.label}`,
							children: [WHATSAPP_CONFIGURED ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "size-4",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4",
								"aria-hidden": "true"
							}), SUPPORT_ACTION.label]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Product",
						links: [
							["Listings", "/listings"],
							["Hostels", "/listings"],
							["Map", "/#locations"],
							["Residences", "/#residences"],
							["Landlord Portal", "/landlord"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Company",
						links: [
							["About", "/about"],
							["Contact", "/contact"],
							["Become a partner", "/list-property"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterColumn, {
						title: "Legal",
						links: [
							["Privacy", "/privacy"],
							["Terms", "/terms"],
							["Your consent", "/consent"],
							["Email us", "/contact"]
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 UniHub · Student housing in Kenya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "text-muted-foreground hover:text-foreground transition-colors",
						title: "Admin Portal",
						"aria-label": "Admin Portal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUserRound, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${SUPPORT_EMAIL}`,
						className: "flex items-center gap-2 transition-colors hover:text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-3.5",
								"aria-hidden": "true"
							}),
							" ",
							SUPPORT_EMAIL
						]
					})]
				})]
			})]
		})
	});
}
function MarketingShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-frame min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "pt-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SiteFooter as n, SiteHeader as r, MarketingShell as t };
