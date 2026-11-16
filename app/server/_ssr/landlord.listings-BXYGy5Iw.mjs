import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as MapPin, R as Eye, T as Megaphone, Z as Building2, d as ShieldCheck, j as LoaderCircle, o as TriangleAlert, q as CircleCheck, s as Trash2, v as RefreshCw, y as Plus, z as EyeOff } from "../_libs/lucide-react.mjs";
import { a as isAdLive, i as formatKes, m as updateListingStatus, r as deleteListing, s as listLandlordListings } from "./services-BxKA9otU.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { n as useApprovedLandlord, t as LandlordShell } from "./LandlordShell-BKD34LJR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.listings-BXYGy5Iw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_LABEL = {
	pending: "Pending review",
	published: "Live",
	hidden: "Hidden",
	rejected: "Rejected",
	draft: "Draft"
};
function StatusBadge({ status }) {
	const key = status ?? "pending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium", key === "published" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700" : key === "rejected" ? "border-destructive/30 bg-destructive/10 text-destructive" : key === "hidden" ? "border-border bg-accent text-muted-foreground" : "border-amber-500/30 bg-amber-500/10 text-amber-700"),
		children: STATUS_LABEL[key] ?? key
	});
}
var LandlordListingsPage = () => {
	const { uid, isApproved, profileState, profileMessage } = useApprovedLandlord();
	const navigate = useNavigate();
	const [listings, setListings] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [confirmId, setConfirmId] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(async () => {
		if (!uid) return;
		setLoadError("");
		try {
			const rows = await listLandlordListings(uid);
			setListings(rows);
		} catch (error) {
			console.error("Failed to load listings:", error);
			setListings([]);
			setLoadError("We could not load your listings. Check your connection and try again.");
		}
	}, [uid]);
	(0, import_react.useEffect)(() => {
		if (profileState === "loading") return;
		load();
	}, [load, profileState]);
	const runAction = async (id, action, successMessage) => {
		setBusyId(id);
		setFeedback(null);
		try {
			await action();
			setFeedback({
				kind: "success",
				message: successMessage
			});
		} catch (error) {
			console.error("Listing action failed:", error);
			setFeedback({
				kind: "error",
				message: error instanceof Error ? error.message : "That action did not go through. Please try again."
			});
		} finally {
			setBusyId(null);
			setConfirmId(null);
		}
	};
	const handleToggleVisibility = (listing) => {
		const nextStatus = listing.status === "hidden" ? "published" : "hidden";
		runAction(listing.id, async () => {
			await updateListingStatus(listing.id, nextStatus);
			setListings((prev) => (prev ?? []).map((l) => l.id === listing.id ? {
				...l,
				status: nextStatus
			} : l));
		}, nextStatus === "hidden" ? "Listing hidden from search." : "Listing published again.");
	};
	const handleDelete = (listing) => {
		runAction(listing.id, async () => {
			await deleteListing(listing.id);
			setListings((prev) => (prev ?? []).filter((l) => l.id !== listing.id));
		}, `“${listing.title ?? "Listing"}” was deleted.`);
	};
	const loading = listings === null && !loadError;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-medium",
					children: "Listings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Everything you have submitted to UniHub, and what students currently see."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void load(),
						disabled: loading,
						className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("h-4 w-4", loading && "animate-spin") }), "Refresh"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/landlord/listings/new",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "New listing"]
					})]
				})]
			}),
			feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				"aria-live": "polite",
				className: cn("flex items-start gap-3 rounded-xl border p-4 text-sm", feedback.kind === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800" : "border-destructive/30 bg-destructive/10 text-destructive"),
				children: [
					feedback.kind === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feedback.message }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFeedback(null),
						className: "ml-auto text-xs underline underline-offset-4 opacity-70 hover:opacity-100",
						children: "Dismiss"
					})
				]
			}),
			!isApproved && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-highlight" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your account is still under review, so listings cannot go live yet. They publish once an admin approves your account." })]
			}),
			loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loadError }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setListings(null);
							load();
						},
						className: "rounded-full border border-destructive/40 px-4 py-1.5 text-xs font-semibold",
						children: "Try again"
					}),
					profileState === "unavailable" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs opacity-80",
						children: profileMessage
					})
				]
			}),
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center rounded-2xl border border-border bg-card py-20",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Loading your listings"
				})]
			}),
			!loading && listings && listings.length === 0 && !loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
						className: "mx-auto h-10 w-10 text-muted-foreground/60",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-lg font-medium",
						children: "No listings yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
						children: "Add your first property. It goes to review, then students can find it near campus."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/landlord/listings/new",
						className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Add a listing"]
					})
				]
			}),
			!loading && listings && listings.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: listings.map((listing) => {
					const busy = busyId === listing.id;
					const boosting = isAdLive(listing);
					const awaitingBoost = listing.adStatus === "requested";
					const cover = listing.images?.[0];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-2xl border border-border bg-card p-4 sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-24 w-full shrink-0 overflow-hidden rounded-xl border border-border bg-accent sm:w-32",
								children: cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cover,
									alt: "",
									className: "h-full w-full object-cover",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full items-center justify-center text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "font-display text-lg font-medium",
												children: listing.title ?? "Untitled listing"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: listing.status }),
											boosting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-700",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-3 w-3" }), " Boosted"]
											}),
											awaitingBoost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-700",
												children: "Boost in review"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground",
										children: [
											listing.campus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground",
												children: listing.campus
											}),
											listing.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
													" ",
													listing.location
												]
											}),
											typeof listing.price === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												formatKes(listing.price),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "/ month"
												})
											] })
										]
									}),
									listing.status === "rejected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-destructive",
										children: "This listing was rejected. Update the details and resubmit, or contact support."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => void navigate({
													to: "/landlord/ads/new",
													search: { listingId: listing.id }
												}),
												disabled: busy || awaitingBoost,
												className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-accent disabled:opacity-50",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-3.5 w-3.5" }), boosting ? "Extend boost" : awaitingBoost ? "Boost requested" : "Boost"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleToggleVisibility(listing),
												disabled: busy || listing.status === "pending" || listing.status === "rejected",
												className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:bg-accent disabled:opacity-50",
												children: [listing.status === "hidden" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3.5 w-3.5" }), listing.status === "hidden" ? "Publish" : "Hide"]
											}),
											confirmId === listing.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/5 px-3 py-1.5 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-destructive",
														children: "Delete permanently?"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleDelete(listing),
														disabled: busy,
														className: "font-semibold text-destructive underline underline-offset-2 disabled:opacity-50",
														children: "Yes, delete"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setConfirmId(null),
														disabled: busy,
														className: "text-muted-foreground underline underline-offset-2",
														children: "Cancel"
													})
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setConfirmId(listing.id),
												disabled: busy,
												className: "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/10 disabled:opacity-50",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), "Delete"]
											}),
											busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
												className: "h-4 w-4 animate-spin text-muted-foreground",
												"aria-label": "Working"
											})
										]
									})
								]
							})]
						})
					}, listing.id);
				})
			})
		]
	}) });
};
var SplitComponent = LandlordListingsPage;
//#endregion
export { SplitComponent as component };
