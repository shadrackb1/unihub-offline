import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { a as WHATSAPP_CONFIGURED, i as SupportLink, n as SUPPORT_EMAIL, r as SUPPORT_LABEL } from "./SupportLink-CbB80iuK.mjs";
import { S as useNavigate, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, D as Mail, M as LayoutDashboard, O as LogOut, T as Megaphone, U as ClipboardList, Z as Building2, n as X, w as Menu, y as Plus } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { a as useLandlord } from "./LandlordContext-CmC5R_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LandlordShell-BKD34LJR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function toMarketplaceProfile(p) {
	if (!p) return null;
	return {
		id: p.userId,
		fullName: p.fullName,
		businessName: p.businessName ?? "",
		email: p.email,
		phone: p.phone,
		whatsapp: p.whatsappNumber,
		idNumber: "",
		areas: p.targetCampuses.join(", "),
		propertyCount: p.estimatedProperties,
		status: p.status,
		reviewNote: p.reviewNote ?? ""
	};
}
/**
* Approved-landlord hook for the landlord portal.
*
* LandlordContext exposes the landlord-service shape
* (userId, whatsappNumber, targetCampuses, estimatedProperties…).
* The marketplace services expect their own LandlordProfile shape
* (id, whatsapp, idNumber, areas, propertyCount…).
*
* This hook bridges the two without touching either provider or service.
* Pages that read from or write to the marketplace collection use this hook
* so they always hand a marketplace-shaped profile to the service layer.
*/
function useApprovedLandlord() {
	const { user, profile, profileState, profileMessage } = useLandlord();
	return {
		profile: (0, import_react.useMemo)(() => toMarketplaceProfile(profile), [profile]),
		isApproved: profile?.status === "approved",
		status: profile?.status ?? "pending",
		uid: user?.id ?? "",
		profileState,
		profileMessage
	};
}
var NAV = [
	{
		to: "/landlord",
		label: "Dashboard",
		icon: LayoutDashboard,
		end: true
	},
	{
		to: "/landlord/listings",
		label: "Listings",
		icon: ClipboardList
	},
	{
		to: "/landlord/ads",
		label: "Ad boosts",
		icon: Megaphone
	}
];
function LandlordShell({ children }) {
	const { logout } = useAuth();
	const { profile } = useLandlord();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "") || "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const handleLogout = async () => {
		try {
			await logout();
		} catch {}
		navigate({
			to: "/landlord/login",
			replace: true
		});
	};
	const activeFor = (item) => {
		if ("end" in item && item.end) return pathname === item.to;
		return pathname.startsWith(item.to);
	};
	const displayName = profile?.fullName ?? "Landlord";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur-md md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/landlord",
					className: "flex items-center gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-highlight" }), "Landlord portal"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/landlord/listings/new",
						className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), "New listing"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: cn("fixed inset-y-0 left-0 z-30 flex h-full w-64 flex-col border-r border-border bg-card md:relative md:translate-x-0 transition-transform duration-200", open ? "translate-x-0" : "-translate-x-full md:translate-x-0"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-16 items-center justify-between border-b border-border px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/landlord",
							className: "flex items-center gap-2 text-sm font-display font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-highlight" }), "Landlord portal"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close menu",
							onClick: () => setOpen(false),
							className: "rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-1 flex-col gap-1 p-3",
						children: NAV.map((item) => {
							const active = activeFor(item);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => setOpen(false),
								className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors", active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card/60 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: displayName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: profile?.status === "approved" ? "Approved landlord" : profile?.status ? String(profile.status) : "Not yet approved"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleLogout,
								className: "mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sign out"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
								message: "Hi UniHub, I need help in the landlord portal",
								className: "mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
								"aria-label": `${SUPPORT_LABEL} — ${WHATSAPP_CONFIGURED ? "opens WhatsApp" : SUPPORT_EMAIL}`,
								children: [WHATSAPP_CONFIGURED ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), SUPPORT_LABEL]
							})
						]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-20 bg-background/60 md:hidden",
				onClick: () => setOpen(false),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pb-10 pt-16 md:pt-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6",
					children
				})
			})
		]
	});
}
//#endregion
export { useApprovedLandlord as n, LandlordShell as t };
