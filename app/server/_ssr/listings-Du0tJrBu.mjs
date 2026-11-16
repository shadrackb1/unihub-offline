import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as MapPin, Q as ArrowRight, Y as Check, d as ShieldCheck, m as Search, n as X } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
import { t as useListings } from "./useListings-Y6jKiN43.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listings-Du0tJrBu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ListingGrid({ listings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: listings.map((listing, index) => {
			const card = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: index % 3 * 80,
				className: "listing-card group h-full overflow-hidden rounded-2xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: listing.image,
							alt: listing.title,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium",
							children: listing.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-status px-3 py-1.5 text-xs font-semibold text-status-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-status-dot" }), " Available"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
									" ",
									listing.location
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "verified-stamp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-3.5",
									"aria-hidden": "true"
								}), " Vetted"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 min-h-14 font-display text-xl font-medium leading-snug",
							children: listing.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-end justify-between border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl font-medium",
								children: [listing.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: " / month"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: listing.deposit
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							})]
						})
					]
				})]
			});
			return listing.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/listings/$id",
				params: { id: listing.id },
				"aria-label": `View details for ${listing.title}`,
				className: "block h-full",
				children: card
			}, `${listing.id}-${listing.title}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full",
				children: card
			}, listing.title);
		})
	});
}
var filters = [
	"All",
	"Hostel",
	"Bedsitter",
	"Single room",
	"Studio",
	"Shared apartment"
];
function ListingsPage() {
	const listings = useListings();
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return listings.filter((listing) => {
			if (!(category === "All" || listing.category === category)) return false;
			if (!q) return true;
			const haystack = `${listing.title} ${listing.location} ${listing.category} ${listing.price} ${listing.deposit}`.toLowerCase();
			return q.split(/\s+/).every((token) => haystack.includes(token));
		});
	}, [
		listings,
		query,
		category
	]);
	const activeFilters = category !== "All" || query.trim().length > 0;
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
							children: "Verified inventory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-6xl",
							children: "Listings near campus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Sample verified homes students shortlist first. Open any home to ask about it — no account required to browse."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center",
					delay: 80,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-12 flex-1 items-center gap-3 rounded-full border border-border bg-accent/60 px-4 focus-within:ring-2 focus-within:ring-ring",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "size-4 shrink-0 text-muted-foreground",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "listing-search",
								className: "sr-only",
								children: "Search listings"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "listing-search",
								type: "search",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Try: JKUAT, bedsitter under 10k…",
								className: "min-h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
							}),
							query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setQuery(""),
								"aria-label": "Clear search",
								className: "rounded-full p-1 text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: filters.map((filter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCategory(filter),
							"aria-pressed": category === filter,
							className: category === filter ? "rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground" : "campus-chip !min-h-0 !py-2 text-xs",
							children: filter
						}, filter))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground",
					"aria-live": "polite",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						visible.length,
						" ",
						visible.length === 1 ? "home" : "homes",
						category !== "All" ? ` in ${category}` : "",
						query.trim() ? ` matching “${query.trim()}”` : ""
					] }), activeFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setQuery("");
							setCategory("All");
						},
						className: "text-xs font-medium underline underline-offset-4 hover:text-foreground",
						children: "Clear filters"
					})]
				}),
				visible.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingGrid, { listings: visible }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-medium",
							children: "No listings match that yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
							children: "Try a campus town like Juja or Kahawa, a room type, or clear the filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setQuery("");
									setCategory("All");
								},
								className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent",
								children: "Clear filters"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
								children: "Ask us for options"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "solid-card mt-12 flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-medium",
						children: "Need a room this semester?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Tell us your campus and budget. We will point you to verified options."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm text-secondary-foreground",
						children: [
							"Vetted landlords",
							"WhatsApp first",
							"Clear monthly pricing"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-highlight" }),
								" ",
								item
							]
						}, item))
					})]
				})
			]
		})
	}) });
}
//#endregion
export { ListingsPage as component };
