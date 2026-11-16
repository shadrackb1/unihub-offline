import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as WHATSAPP_CONFIGURED, i as SupportLink } from "./SupportLink-CbB80iuK.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArrowLeft, C as MessageCircle, E as MapPin, Y as Check, d as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
import { t as useListings } from "./useListings-Y6jKiN43.mjs";
import { t as Route } from "./listings_._id-Cn7JnLn6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listings_._id-DC-D26IN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ListingDetailPage() {
	const { id } = Route.useParams();
	const listing = useListings().find((item) => item.id === id);
	const listingTitle = listing?.title;
	(0, import_react.useEffect)(() => {
		if (!listingTitle) return;
		const previous = document.title;
		document.title = `${listingTitle} · UniHub`;
		return () => {
			document.title = previous;
		};
	}, [listingTitle]);
	if (!listing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 py-20 text-center md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-medium sm:text-4xl",
					children: "This listing is no longer available"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-sm text-muted-foreground",
					children: "It may have been taken, or the link is out of date. Browse current verified homes near campus instead."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listings",
					className: "mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to listings"]
				})
			]
		})
	}) });
	const message = `Hi UniHub, I'm interested in "${listing.title}" (${listing.location}). Is it still available?`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/listings",
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All listings"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: listing.image,
							alt: listing.title,
							className: "aspect-[4/3] w-full object-cover",
							width: 1200,
							height: 900
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "solid-card p-7 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium",
								children: listing.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-3xl font-medium leading-tight",
								children: listing.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex items-center gap-1.5 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4",
										"aria-hidden": "true"
									}),
									" ",
									listing.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 border-y border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-2xl font-medium",
									children: [listing.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-normal text-muted-foreground",
										children: " / month"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: listing.deposit
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-5 space-y-2 text-sm text-secondary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											className: "mt-0.5 size-4 shrink-0 text-highlight",
											"aria-hidden": "true"
										}), "Details checked before this listing went live"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 size-4 shrink-0 text-highlight",
											"aria-hidden": "true"
										}), "Contact the agent directly — no account needed"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 size-4 shrink-0 text-highlight",
											"aria-hidden": "true"
										}), "Always view the property before paying a deposit"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
									message,
									className: "cta-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Ask about this place"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/listings",
									className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-accent px-6 text-sm font-semibold text-foreground",
									children: "Compare other listings"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-10 rounded-2xl border border-border bg-card p-7 sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "What to check before you commit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "Visit in person"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "Confirm the room, water, and power match the listing."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "Agree the deposit in writing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "Ask what the deposit covers and when it is refundable."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-foreground",
								children: "Report anything odd"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1",
								children: [
									"Message us ",
									WHATSAPP_CONFIGURED ? "on" : "by",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
										message: `Hi UniHub, I want to report a listing: ${listing.title}`,
										className: "text-foreground underline underline-offset-4",
										children: WHATSAPP_CONFIGURED ? "WhatsApp" : "email"
									}),
									" ",
									"and we will review it."
								]
							})] })
						]
					})]
				})
			]
		})
	}) });
}
//#endregion
export { ListingDetailPage as component };
