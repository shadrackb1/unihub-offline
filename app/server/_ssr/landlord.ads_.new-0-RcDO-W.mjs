import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as waLink } from "./SupportLink-CbB80iuK.mjs";
import { C as useSearch, S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArrowLeft, C as MessageCircle, Q as ArrowRight, T as Megaphone, j as LoaderCircle, o as TriangleAlert, q as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as formatKes, s as listLandlordListings, t as AD_PLANS, u as requestAd } from "./services-BxKA9otU.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { n as useApprovedLandlord, t as LandlordShell } from "./LandlordShell-BKD34LJR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.ads_.new-0-RcDO-W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAID_PLANS = AD_PLANS.filter((plan) => plan.price > 0);
var LandlordNewAdsPage = () => {
	const { uid, profileState } = useApprovedLandlord();
	const navigate = useNavigate();
	const { listingId: preselectedId } = useSearch({ from: "/landlord/ads_/new" });
	const [listings, setListings] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)("");
	const [selectedListing, setSelectedListing] = (0, import_react.useState)(preselectedId ?? "");
	const [planId, setPlanId] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)(1);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const load = (0, import_react.useCallback)(async () => {
		if (!uid) return;
		setLoadError("");
		try {
			setListings(await listLandlordListings(uid));
		} catch (error) {
			console.error("Failed to load listings for boost:", error);
			setListings([]);
			setLoadError("We could not load your listings. Check your connection and try again.");
		}
	}, [uid]);
	(0, import_react.useEffect)(() => {
		if (profileState === "loading") return;
		load();
	}, [load, profileState]);
	const boostable = (0, import_react.useMemo)(() => (listings ?? []).filter((l) => l.status === "published" || l.status === "hidden"), [listings]);
	const chosenListing = boostable.find((l) => l.id === selectedListing);
	const chosenPlan = PAID_PLANS.find((p) => p.id === planId);
	const goToStepTwo = () => {
		const next = {};
		if (!selectedListing) next["listing"] = "Choose the property you want to boost.";
		if (!planId) next["plan"] = "Choose how long the boost should run.";
		setErrors(next);
		if (Object.keys(next).length === 0) {
			setStep(2);
			setSubmitError("");
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (step === 1) {
			goToStepTwo();
			return;
		}
		if (!selectedListing || !planId) {
			setStep(1);
			return;
		}
		setIsSubmitting(true);
		setSubmitError("");
		try {
			await requestAd(selectedListing, planId);
			setSubmitted(true);
		} catch (error) {
			console.error("Failed to request boost:", error);
			setSubmitError(error instanceof Error ? error.message : "We could not submit your boost request. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto h-10 w-10 text-emerald-600",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-xl font-medium text-emerald-900",
				children: "Boost requested"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-emerald-800",
				children: [
					"We've recorded your request for ",
					chosenListing?.title ?? "your listing",
					" on the",
					" ",
					chosenPlan?.label ?? "selected",
					" plan. Our team confirms payment and activates it — usually within a few hours on working days."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waLink("Hi UniHub, I just requested a listing boost and want to complete payment"),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Arrange payment"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/landlord/ads",
					className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent",
					children: "Back to boosts"
				})]
			})
		]
	}) });
	const loading = listings === null && !loadError;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/landlord/ads",
					className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to boosts"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-2xl font-medium",
					children: "Boost a listing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Boosted listings appear above standard results on campus searches. Requests are reviewed and activated by our team."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "flex items-center gap-3 text-sm",
				"aria-label": "Boost steps",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 font-medium", step === 1 ? "text-foreground" : "text-muted-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex h-6 w-6 items-center justify-center rounded-full border text-xs", step === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border"),
							children: "1"
						}), "Choose listing & plan"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "h-px flex-1 bg-border",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 font-medium", step === 2 ? "text-foreground" : "text-muted-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex h-6 w-6 items-center justify-center rounded-full border text-xs", step === 2 ? "border-primary bg-primary text-primary-foreground" : "border-border"),
							children: "2"
						}), "Confirm"]
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
			loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center rounded-2xl border border-border bg-card py-16",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Loading your listings"
				})]
			}),
			!loading && boostable.length === 0 && !loadError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-dashed border-border bg-card px-6 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
						className: "mx-auto h-9 w-9 text-muted-foreground/60",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-lg font-medium",
						children: "Nothing to boost yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-sm text-sm text-muted-foreground",
						children: "You can boost a listing once it is live. Publish a listing first, then come back."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/landlord/listings",
						className: "mt-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-accent",
						children: "Go to my listings"
					})
				]
			}),
			!loading && boostable.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-6",
				noValidate: true,
				children: [step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-2 text-sm font-medium",
							children: "Property to boost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: boostable.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: cn("flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-colors", selectedListing === listing.id ? "border-primary bg-accent" : "border-border hover:bg-accent/60"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "listing",
									value: listing.id,
									checked: selectedListing === listing.id,
									onChange: () => {
										setSelectedListing(listing.id);
										setErrors((prev) => ({
											...prev,
											listing: ""
										}));
									},
									className: "h-4 w-4"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm font-medium",
										children: listing.title ?? "Untitled listing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-xs text-muted-foreground",
										children: [listing.campus, listing.location].filter(Boolean).join(" · ") || "Location not set"
									})]
								})]
							}, listing.id))
						}),
						errors["listing"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-destructive",
							children: errors["listing"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-2 text-sm font-medium",
							children: "Boost length"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 sm:grid-cols-3",
							children: PAID_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: cn("cursor-pointer rounded-xl border p-3 text-center transition-colors", planId === plan.id ? "border-primary bg-accent" : "border-border hover:bg-accent/60"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "plan",
										value: plan.id,
										checked: planId === plan.id,
										onChange: () => {
											setPlanId(plan.id);
											setErrors((prev) => ({
												...prev,
												plan: ""
											}));
										},
										className: "sr-only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-semibold",
										children: plan.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs text-muted-foreground",
										children: [plan.days, " days"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block font-display text-lg font-medium",
										children: formatKes(plan.price)
									})
								]
							}, plan.id))
						}),
						errors["plan"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-destructive",
							children: errors["plan"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/landlord/ads",
							className: "text-sm text-muted-foreground hover:text-foreground",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: goToStepTwo,
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
							children: ["Review request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				] }), step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 rounded-xl border border-border bg-background p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Listing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right font-medium",
									children: chosenListing?.title ?? "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Plan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right font-medium",
									children: chosenPlan ? `${chosenPlan.label} · ${chosenPlan.days} days` : "—"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "Price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right font-display text-lg font-medium",
									children: chosenPlan ? formatKes(chosenPlan.price) : "—"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl border border-border bg-accent/50 p-4 text-sm text-muted-foreground",
						children: "Submitting records the request. Our team sends M-Pesa or bank details on WhatsApp and activates the boost after payment is confirmed. Nothing is charged automatically."
					}),
					submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0" }),
							" ",
							submitError
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep(1),
							className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
							children: [isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4" }), isSubmitting ? "Submitting…" : "Submit boost request"]
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void navigate({ to: "/landlord/ads" }),
				className: "text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground",
				children: "I'll choose a listing later"
			})
		]
	}) });
};
/**
* Optional `listingId` deep-link: the listings page sends landlords here with
* the property they chose to boost. Declaring it on the route keeps the value
* in the typed search contract instead of reading `window.location`, which
* broke client-side navigation and page refresh.
*/
var SplitComponent = LandlordNewAdsPage;
//#endregion
export { SplitComponent as component };
