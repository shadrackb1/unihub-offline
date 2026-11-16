import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as CircleX, J as CircleCheckBig, P as Image, Q as ArrowRight, U as ClipboardList, j as LoaderCircle, o as TriangleAlert, t as Zap, y as Plus } from "../_libs/lucide-react.mjs";
import { a as isAdLive, i as formatKes, s as listLandlordListings, t as AD_PLANS, u as requestAd } from "./services-BxKA9otU.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { t as auth } from "./firebase-BUHXILn-.mjs";
import { n as useApprovedLandlord, t as LandlordShell } from "./LandlordShell-BKD34LJR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.ads-DYWkNYeU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ListingOption({ listing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-start gap-3 rounded-xl border p-4 transition-colors cursor-pointer border-border bg-card hover:border-foreground/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "radio",
			name: "listingId",
			value: listing.id,
			className: "mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-ring"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium truncate max-w-[20rem]",
				children: listing.title ?? "Untitled listing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 text-sm text-muted-foreground",
				children: [listing.category && listing.location ? `${listing.category} · ${listing.location}` : listing.location ?? listing.category ?? "No details", listing.campus ? ` · Near ${listing.campus}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm font-medium",
				children: [formatKes(listing.price ?? 0), "/month"]
			})
		] })]
	});
}
var LandlordAdsPage = () => {
	const { isApproved, status: profileStatus } = useApprovedLandlord();
	const [listings, setListings] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)("select-listing");
	const [selectedListingId, setSelectedListingId] = (0, import_react.useState)(null);
	const [selectedPlanId, setSelectedPlanId] = (0, import_react.useState)(null);
	const [actionInFlight, setActionInFlight] = (0, import_react.useState)(null);
	const [actionMsg, setActionMsg] = (0, import_react.useState)(null);
	const loadListings = async () => {
		if (!auth.currentUser) return;
		try {
			const mine = await listLandlordListings(auth.currentUser.uid);
			setListings(mine);
		} catch (e) {
			console.error("Failed to load listings:", e);
			setError(e instanceof Error ? e.message : "Could not load your listings.");
		} finally {
			setIsLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadListings();
	}, []);
	(0, import_react.useEffect)(() => {
		if (view !== "select-listing") setActionMsg(null);
	}, [view]);
	const selectedListing = listings.find((l) => l.id === selectedListingId);
	const plansForListing = selectedListingId ? AD_PLANS : [];
	const activeBoosts = listings.filter(isAdLive);
	const requested = listings.filter((l) => l.adStatus === "requested");
	const handleRequestAd = async () => {
		if (!selectedListingId || !selectedPlanId) return;
		setActionInFlight(selectedListingId);
		setActionMsg(null);
		try {
			await requestAd(selectedListingId, selectedPlanId);
			await loadListings();
			setActionMsg({
				kind: "success",
				text: "Boost request sent. We will confirm payment details on WhatsApp."
			});
			setSelectedListingId(null);
			setSelectedPlanId(null);
			setView("select-listing");
		} catch (e) {
			console.error("Ad request failed:", e);
			setActionMsg({
				kind: "error",
				text: e instanceof Error ? e.message : "Could not request the boost. Try again."
			});
		} finally {
			setActionInFlight(null);
		}
	};
	if (!isApproved && profileStatus !== "pending") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-background p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "solid-card p-6 max-w-sm text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6 text-destructive" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Portal access restricted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						"Your account is ",
						profileStatus,
						". You will be able to use the portal once your status changes."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/landlord",
					className: "mt-5 cta-shine block w-full rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow",
					children: "Back to portal home"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LandlordShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-medium",
				children: "Ad boosts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Boost a published listing so it appears first when students browse."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setSelectedListingId(null);
					setSelectedPlanId(null);
					setView("select-listing");
				},
				className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "New boost"]
			})]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
		}),
		actionMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mb-5 flex items-start gap-3 rounded-xl p-4 text-sm transition-opacity", actionMsg.kind === "success" ? "border-border bg-accent text-secondary-foreground" : "border-destructive/30 bg-destructive/10 text-destructive"),
			role: actionMsg.kind === "error" ? "alert" : "status",
			children: [actionMsg.kind === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-status" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: actionMsg.text })]
		}),
		view === "select-listing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Choose a listing to boost"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Only published listings can be boosted."
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 text-muted-foreground animate-spin" })
			}) : listings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col items-center gap-3 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No listings yet. Create one first, then come back to boost it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/landlord/listings/new",
						className: "cta-shine inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), "Create a listing"]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: listings.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingOption, { listing }, listing.id))
			}),
			selectedListingId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-between border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						"Selected:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: listings.find((l) => l.id === selectedListingId)?.title ?? "this listing"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setSelectedListingId(null);
						setView("select-plan");
					},
					className: "cta-shine inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
					children: ["Choose a plan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		] }),
		view === "select-plan" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Choose a plan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Boosts run for the chosen period and stop automatically."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setView("select-listing"),
					className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
					children: "Change listing"
				})]
			}),
			selectedListing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 rounded-xl border border-border bg-card/60 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Boosting"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 font-medium",
						children: selectedListing.title ?? "Untitled listing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: [selectedListing.category && selectedListing.location ? `${selectedListing.category} · ${selectedListing.location}` : selectedListing.location ?? selectedListing.category ?? "No details", selectedListing.campus ? ` · Near ${selectedListing.campus}` : ""]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: plansForListing.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: actionInFlight !== null,
					onClick: () => setSelectedPlanId(plan.id),
					className: cn("relative flex flex-col gap-3 rounded-xl border p-5 text-left transition-colors", selectedPlanId === plan.id ? "border-foreground bg-foreground/5 text-background" : "border-border bg-card hover:border-foreground/50"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: plan.label
							}), selectedPlanId === plan.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-highlight",
								children: "Selected"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-display font-medium",
							children: formatKes(plan.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [plan.days, " days · no hidden fees"]
						})
					]
				}, plan.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-between border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						"Total:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: selectedPlanId ? formatKes(AD_PLANS.find((p) => p.id === selectedPlanId)?.price ?? 0) : "—"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setView("select-listing"),
						className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Back"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !selectedPlanId || actionInFlight !== null,
						onClick: handleRequestAd,
						className: cn("cta-shine inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50", !selectedPlanId || actionInFlight !== null ? "" : "hover:bg-primary/90"),
						children: actionInFlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Sending request…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Request boost", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" })] })
					})]
				})]
			})
		] }),
		(activeBoosts.length > 0 || requested.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Your boosts"
				}),
				requested.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border border-border bg-card/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "h-4 w-4" }),
							"Waiting for confirmation (",
							requested.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border",
						children: requested.map((listing) => {
							const plan = AD_PLANS.find((p) => p.id === listing.adPlan);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium truncate max-w-sm",
										children: listing.title ?? "Untitled listing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: plan ? `${plan.label}` : "Unknown plan"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: formatKes(plan?.price ?? 0)
									})]
								})
							}, listing.id);
						})
					})]
				}),
				activeBoosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border border-border bg-card/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }),
							"Active boosts (",
							activeBoosts.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border",
						children: activeBoosts.map((listing) => {
							const plan = AD_PLANS.find((p) => p.id === listing.adPlan);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium truncate max-w-sm",
										children: listing.title ?? "Untitled listing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: listing.adExpiresAt ? `Ends ${new Date(String(listing.adExpiresAt)).toLocaleDateString("en-KE")}` : "No end date"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: formatKes(plan?.price ?? 0)
									})]
								})
							}, listing.id);
						})
					})]
				})
			]
		}),
		listings.length === 0 && !isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-col items-center gap-3 py-12 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 items-center justify-center rounded-full bg-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No listings yet."
			})]
		})
	] });
};
var SplitComponent = LandlordAdsPage;
//#endregion
export { SplitComponent as component };
