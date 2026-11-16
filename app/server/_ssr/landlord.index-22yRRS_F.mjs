import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Clock, Q as ArrowRight, T as Megaphone, U as ClipboardList, Z as Building2, d as ShieldCheck, j as LoaderCircle, o as TriangleAlert, q as CircleCheck, y as Plus } from "../_libs/lucide-react.mjs";
import { a as isAdLive, s as listLandlordListings } from "./services-BxKA9otU.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { a as useLandlord } from "./LandlordContext-CmC5R_Ek.mjs";
import { n as useApprovedLandlord, t as LandlordShell } from "./LandlordShell-BKD34LJR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.index-22yRRS_F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ label, value, hint, icon: Icon, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("flex h-8 w-8 items-center justify-center rounded-lg", tone),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-display text-3xl font-medium tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: hint
			})
		]
	});
}
var LandlordDashboard = () => {
	const { profile } = useLandlord();
	const { uid, isApproved, profileState } = useApprovedLandlord();
	const [listings, setListings] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const load = (0, import_react.useCallback)(async () => {
		if (!uid) return;
		setLoadError("");
		try {
			setListings(await listLandlordListings(uid));
		} catch (error) {
			console.error("Failed to load dashboard:", error);
			setListings([]);
			setLoadError("We could not load your dashboard data. Check your connection and try again.");
		}
	}, [uid]);
	(0, import_react.useEffect)(() => {
		if (profileState === "loading") return;
		load();
	}, [load, profileState]);
	const stats = (0, import_react.useMemo)(() => {
		const rows = listings ?? [];
		return {
			total: rows.length,
			live: rows.filter((l) => l.status === "published").length,
			pending: rows.filter((l) => l.status === "pending").length,
			boosted: rows.filter((l) => isAdLive(l)).length
		};
	}, [listings]);
	const recent = (0, import_react.useMemo)(() => (listings ?? []).slice().sort((a, b) => (b.createdAt instanceof Date ? b.createdAt.getTime() : 0) - (a.createdAt instanceof Date ? a.createdAt.getTime() : 0)).slice(0, 3), [listings]);
	const firstName = (profile?.fullName ?? "").trim().split(" ")[0] || "there";
	const loading = listings === null && !loadError;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-2xl font-medium",
				children: ["Welcome back, ", firstName]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: isApproved ? "Your account is approved. Keep your listings fresh so students can find them." : "Your account is awaiting approval."
			})] }),
			!isApproved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex-1",
						children: "Approval usually takes about 24 hours. Only approved accounts can publish listings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/landlord/pending",
						className: "rounded-full border border-amber-600/40 px-3 py-1.5 text-xs font-semibold",
						children: "View status"
					})
				]
			}),
			loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex-1",
						children: loadError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setListings(null);
							load();
						},
						className: "rounded-full border border-destructive/40 px-3 py-1.5 text-xs font-semibold",
						children: "Try again"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Listings",
						value: stats.total,
						hint: "Everything you have submitted",
						icon: ClipboardList,
						tone: "bg-accent text-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live",
						value: stats.live,
						hint: "Visible to students right now",
						icon: CircleCheck,
						tone: "bg-emerald-500/10 text-emerald-600"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "In review",
						value: stats.pending,
						hint: "Waiting for admin approval",
						icon: Clock,
						tone: "bg-amber-500/10 text-amber-600"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Boosted",
						value: stats.boosted,
						hint: "Paid placements currently running",
						icon: Megaphone,
						tone: "bg-indigo-500/10 text-indigo-600"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-medium",
								children: "Recent listings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/landlord/listings",
								className: "inline-flex items-center gap-1 text-sm font-medium text-highlight hover:underline",
								children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						}),
						loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center py-12",
							role: "status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Loading listings"
							})]
						}),
						!loading && recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-10 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
									className: "mx-auto h-8 w-8 text-muted-foreground/60",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: "No listings yet."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/landlord/listings/new",
									className: "mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add your first listing"]
								})
							]
						}),
						!loading && recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-border",
							children: recent.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: listing.title ?? "Untitled listing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted-foreground",
										children: [listing.campus, listing.location].filter(Boolean).join(" · ") || "Location not set"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium", listing.status === "published" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700" : listing.status === "hidden" ? "border-border bg-accent text-muted-foreground" : "border-amber-500/30 bg-amber-500/10 text-amber-700"),
									children: listing.status === "published" ? "Live" : listing.status === "hidden" ? "Hidden" : "In review"
								})]
							}, listing.id))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium",
						children: "Quick actions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/landlord/listings/new",
								className: "flex items-center gap-3 rounded-xl border border-border p-3 text-sm font-medium transition-colors hover:bg-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-highlight" }),
									"Add a new listing",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-auto h-3.5 w-3.5 text-muted-foreground" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/landlord/ads/new",
								className: "flex items-center gap-3 rounded-xl border border-border p-3 text-sm font-medium transition-colors hover:bg-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4 text-highlight" }),
									"Boost a listing",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-auto h-3.5 w-3.5 text-muted-foreground" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/landlord/listings",
								className: "flex items-center gap-3 rounded-xl border border-border p-3 text-sm font-medium transition-colors hover:bg-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4 text-highlight" }),
									"Manage my listings",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-auto h-3.5 w-3.5 text-muted-foreground" })
								]
							})
						]
					})]
				})]
			})
		]
	}) });
};
var SplitComponent = LandlordDashboard;
//#endregion
export { SplitComponent as component };
