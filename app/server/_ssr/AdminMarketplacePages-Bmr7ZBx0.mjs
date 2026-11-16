import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as isAdLive, c as listLandlords, d as reviewAd, f as reviewLandlord, i as formatKes, l as moderateListing, o as listAllListings, p as setFeatured, t as AD_PLANS } from "./services-BxKA9otU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminMarketplacePages-Bmr7ZBx0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var btnPrimary = "cta-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50";
var btnGhost = "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-foreground hover:bg-secondary disabled:opacity-50";
var btnDanger = "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-destructive/40 px-4 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50";
var tone = {
	approved: "bg-status text-status-foreground",
	published: "bg-status text-status-foreground",
	active: "bg-status text-status-foreground",
	pending: "bg-accent text-foreground",
	requested: "bg-accent text-foreground",
	rejected: "bg-destructive/15 text-destructive",
	suspended: "bg-destructive/15 text-destructive",
	hidden: "bg-muted text-muted-foreground",
	none: "bg-muted text-muted-foreground"
};
function StatusBadge({ status, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${tone[status] ?? tone["none"]}`,
		children: label ?? status
	});
}
function Notice({ kind = "info", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: kind === "error" ? "alert" : "status",
		className: `rounded-xl border p-4 text-sm ${kind === "error" ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-border bg-accent text-secondary-foreground"}`,
		children
	});
}
function errMsg(e) {
	const m = e instanceof Error ? e.message : String(e);
	if (m.includes("permission")) return "You don't have permission for this action. Check the Firestore security rules.";
	if (m.includes("email-already-in-use")) return "An account with this email already exists. Sign in instead.";
	if (m.includes("invalid-credential") || m.includes("wrong-password")) return "Incorrect email or password.";
	if (m.includes("weak-password")) return "Password must be at least 6 characters.";
	return m.replace(/^Firebase:\s*/, "");
}
function useLoad(fn) {
	const [data, setData] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const reload = (0, import_react.useCallback)(() => {
		setError(null);
		fn().then(setData).catch((e) => setError(errMsg(e)));
	}, [fn]);
	(0, import_react.useEffect)(reload, [reload]);
	return {
		data,
		error,
		reload
	};
}
function Header({ title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-medium tracking-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: sub
		})]
	});
}
function Tabs({ value, options, onChange, counts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-6 flex flex-wrap gap-2",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onChange(o),
			"aria-pressed": value === o,
			className: `rounded-full border px-4 py-1.5 text-sm capitalize ${value === o ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`,
			children: [
				o,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "opacity-60",
					children: [
						"(",
						counts[o] ?? 0,
						")"
					]
				})
			]
		}, o))
	});
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "flex justify-center py-16",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" })
});
var Empty = ({ text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "rounded-3xl border border-border p-10 text-center text-sm text-muted-foreground",
	children: text
});
var LANDLORD_TABS = [
	"pending",
	"approved",
	"rejected",
	"suspended"
];
function AdminLandlordsPage() {
	const { data, error, reload } = useLoad(listLandlords);
	const [tab, setTab] = (0, import_react.useState)("pending");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [actionErr, setActionErr] = (0, import_react.useState)(null);
	const act = async (l, status) => {
		let note = "";
		if (status !== "approved") {
			const n = window.prompt(`Reason for ${status === "rejected" ? "rejecting" : "suspending"} ${l.fullName} (shown to them):`);
			if (n === null) return;
			note = n;
		}
		setBusy(l.id);
		setActionErr(null);
		try {
			await reviewLandlord(l.id, status, note);
			reload();
		} catch (e) {
			setActionErr(errMsg(e));
		} finally {
			setBusy(null);
		}
	};
	const counts = Object.fromEntries(LANDLORD_TABS.map((t) => [t, data?.filter((l) => l.status === t).length ?? 0]));
	const rows = data?.filter((l) => l.status === tab) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			title: "Landlords",
			sub: "Vet new landlords and agents. Only approved accounts can publish listings."
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			kind: "error",
			children: error
		}),
		actionErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				kind: "error",
				children: actionErr
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			value: tab,
			options: LANDLORD_TABS,
			onChange: setTab,
			counts
		}),
		!data && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: `No ${tab} landlords.` }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: rows.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "glass-card rounded-3xl border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-lg font-medium",
							children: [l.fullName, l.businessName ? ` · ${l.businessName}` : ""]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								l.email,
								" · ",
								l.phone,
								l.whatsapp ? ` · WhatsApp ${l.whatsapp}` : ""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: l.status })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 text-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "ID number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: l.idNumber || "—" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Areas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: l.areas || "—" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: "Properties"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: l.propertyCount || "—" })] })
						]
					}),
					l.reviewNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: ["Note: ", l.reviewNote]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [
							l.status !== "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: busy === l.id,
								onClick: () => act(l, "approved"),
								className: "cta-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50",
								children: "Approve"
							}),
							l.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: busy === l.id,
								onClick: () => act(l, "rejected"),
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-destructive/40 px-4 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50",
								children: "Reject"
							}),
							l.status === "approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: busy === l.id,
								onClick: () => act(l, "suspended"),
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-destructive/40 px-4 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50",
								children: "Suspend"
							})
						]
					})
				]
			}, l.id))
		})
	] });
}
var LISTING_TABS = [
	"pending",
	"published",
	"rejected",
	"hidden"
];
function ListingRow({ l, children }) {
	const cover = l.images?.[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "glass-card flex flex-col gap-4 rounded-3xl border border-border p-4 sm:flex-row",
		children: [cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: cover,
			alt: "",
			className: "h-32 w-full rounded-2xl object-cover sm:w-44",
			loading: "lazy"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-full rounded-2xl bg-muted sm:w-44" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium",
						children: l.title ?? "Untitled listing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: l.status ?? "pending" }), isAdLive(l) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							status: "active",
							label: "Featured"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						l.category ?? l.type ?? "—",
						" · ",
						l.location ?? "—",
						l.campus ? ` · Near ${l.campus}` : "",
						" · by ",
						l.landlordName ?? "Unknown landlord"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm",
					children: [
						typeof l.price === "number" ? formatKes(l.price) : "—",
						"/month",
						l.deposit ? ` · Deposit ${formatKes(l.deposit)}` : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
					children: l.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children
				})
			]
		})]
	});
}
function AdminListingsPage() {
	const { data, error, reload } = useLoad(listAllListings);
	const [tab, setTab] = (0, import_react.useState)("pending");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [actionErr, setActionErr] = (0, import_react.useState)(null);
	const run = async (id, fn) => {
		setBusy(id);
		setActionErr(null);
		try {
			await fn();
			reload();
		} catch (e) {
			setActionErr(errMsg(e));
		} finally {
			setBusy(null);
		}
	};
	const reject = (l) => {
		const note = window.prompt("Reason for rejecting (shown to the landlord):");
		if (note !== null) run(l.id, () => moderateListing(l.id, "rejected", note));
	};
	const counts = Object.fromEntries(LISTING_TABS.map((t) => [t, data?.filter((l) => l.status === t).length ?? 0]));
	const rows = data?.filter((l) => l.status === tab) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			title: "Listing review",
			sub: "Approve listings before students can see them. Edited listings come back here."
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			kind: "error",
			children: error
		}),
		actionErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				kind: "error",
				children: actionErr
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			value: tab,
			options: LISTING_TABS,
			onChange: setTab,
			counts
		}),
		!data && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: `No ${tab} listings.` }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: rows.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListingRow, {
				l,
				children: [
					l.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy === l.id,
						className: "cta-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-50",
						onClick: () => run(l.id, () => moderateListing(l.id, "published")),
						children: "Publish"
					}),
					l.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy === l.id,
						className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-destructive/40 px-4 text-sm font-medium text-destructive hover:bg-destructive/10 disabled:opacity-50",
						onClick: () => reject(l),
						children: "Reject"
					}),
					l.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy === l.id,
						className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-foreground hover:bg-secondary disabled:opacity-50",
						onClick: () => run(l.id, () => moderateListing(l.id, "hidden")),
						children: "Hide"
					}),
					l.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy === l.id,
						className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-accent px-4 text-sm font-medium text-foreground hover:bg-secondary disabled:opacity-50",
						onClick: () => run(l.id, () => setFeatured(l.id, !l.featured)),
						children: l.featured ? "Unfeature" : "Feature"
					})
				]
			}, l.id))
		})
	] });
}
function AdminAdsPage() {
	const { data, error, reload } = useLoad(listAllListings);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [actionErr, setActionErr] = (0, import_react.useState)(null);
	const run = async (id, fn) => {
		setBusy(id);
		setActionErr(null);
		try {
			await fn();
			reload();
		} catch (e) {
			setActionErr(errMsg(e));
		} finally {
			setBusy(null);
		}
	};
	const requested = data?.filter((l) => l.adStatus === "requested") ?? [];
	const live = data?.filter(isAdLive) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
			title: "Ads & boosts",
			sub: "Confirm payment, then approve boost requests. Boosted listings appear first on the listings page."
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
			kind: "error",
			children: error
		}),
		actionErr && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notice, {
				kind: "error",
				children: actionErr
			})
		}),
		!data && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-4 font-display text-xl font-medium",
				children: [
					"Requests (",
					requested.length,
					")"
				]
			}), requested.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No boost requests waiting." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: requested.map((l) => {
					const plan = AD_PLANS.find((p) => p.id === l.adPlan);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListingRow, {
						l,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center text-sm text-muted-foreground",
								children: plan ? `${plan.label} · ${formatKes(plan.price)}` : "Unknown plan"
							}),
							l.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center text-xs text-destructive",
								children: "Listing not yet published"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: busy === l.id,
								className: btnPrimary,
								onClick: () => run(l.id, () => reviewAd(l, true)),
								children: "Approve boost"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								disabled: busy === l.id,
								className: btnDanger,
								onClick: () => run(l.id, () => reviewAd(l, false)),
								children: "Decline"
							})
						]
					}, l.id);
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-4 font-display text-xl font-medium",
				children: [
					"Live boosts (",
					live.length,
					")"
				]
			}), live.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { text: "No listings are boosted right now." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: live.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListingRow, {
					l,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "self-center text-sm text-muted-foreground",
						children: l.adExpiresAt instanceof Date ? `Ends ${l.adExpiresAt.toLocaleDateString()}` : "No end date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: busy === l.id,
						className: btnGhost,
						onClick: () => run(l.id, () => setFeatured(l.id, false)),
						children: "End boost"
					})]
				}, l.id))
			})] })]
		})
	] });
}
//#endregion
export { AdminLandlordsPage as n, AdminListingsPage as r, AdminAdsPage as t };
