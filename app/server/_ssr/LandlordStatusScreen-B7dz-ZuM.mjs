import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { i as SupportLink, o as formatWhatsAppNumber } from "./SupportLink-CbB80iuK.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, H as Clock, O as LogOut, f as ShieldAlert, j as LoaderCircle, o as TriangleAlert, q as CircleCheck, v as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { a as useLandlord } from "./LandlordContext-CmC5R_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LandlordStatusScreen-B7dz-ZuM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	pending: {
		icon: Clock,
		iconClass: "border-amber-500/30 bg-amber-500/10 text-amber-600",
		label: "Awaiting review"
	},
	rejected: {
		icon: TriangleAlert,
		iconClass: "border-destructive/30 bg-destructive/10 text-destructive",
		label: "Not approved"
	},
	suspended: {
		icon: ShieldAlert,
		iconClass: "border-destructive/30 bg-destructive/10 text-destructive",
		label: "Suspended"
	}
};
/**
* Shared screen for every non-approved landlord state.
*
* Previously pending/rejected/suspended were three separate, zinc-styled
* dead ends: no sign-out (so the session kept bouncing the user back), the
* admin's review note was never shown, and the rejected page's "Try Again"
* pointed at a route that does not exist. This screen gives each state an
* honest explanation, the reviewer's note when present, a way to appeal, a
* way to re-check status, and a way to leave the session.
*/
function LandlordStatusScreen({ tone, title, body, points, pointsTitle, waMessage, waLabel }) {
	const { logout } = useAuth();
	const { profile, refreshProfile } = useLandlord();
	const navigate = useNavigate();
	const [checking, setChecking] = (0, import_react.useState)(false);
	const [checkedAt, setCheckedAt] = (0, import_react.useState)(null);
	const meta = TONE[tone];
	const Icon = meta.icon;
	const handleSignOut = async () => {
		try {
			await logout();
		} catch {}
		navigate({
			to: "/landlord/login",
			replace: true
		});
	};
	const handleCheck = () => {
		setChecking(true);
		refreshProfile();
		setCheckedAt(/* @__PURE__ */ new Date());
		window.setTimeout(() => setChecking(false), 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5 py-12 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
					children: "UniHub · Landlord portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex size-12 items-center justify-center rounded-2xl border", meta.iconClass),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
							children: meta.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-2xl font-medium leading-tight",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: body
						}),
						profile?.reviewNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-xl border border-border bg-accent/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
								children: tone === "pending" ? "The note you sent us" : "Note from our review team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm",
								children: profile.reviewNote
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: pointsTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 size-4 shrink-0 text-highlight",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
									message: waMessage,
									className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": "true"
									}), waLabel]
								}),
								tone === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleCheck,
									disabled: checking,
									className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-accent px-5 text-sm font-semibold text-foreground hover:bg-secondary disabled:opacity-60",
									children: [checking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), "Check status again"]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleSignOut,
									className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Sign out"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-center text-xs text-muted-foreground",
							children: checkedAt ? `Last checked at ${checkedAt.toLocaleTimeString("en-KE", {
								hour: "2-digit",
								minute: "2-digit"
							})}. We also message you on WhatsApp once a decision is made.` : `Support: ${formatWhatsAppNumber() ?? "hello@unihub.ke"} · We reply on working days.`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline underline-offset-4 hover:text-foreground",
						children: "Back to UniHub"
					})
				})
			]
		})
	});
}
//#endregion
export { LandlordStatusScreen as t };
