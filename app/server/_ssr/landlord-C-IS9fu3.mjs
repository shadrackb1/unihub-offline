import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as AuthProvider, u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { i as SupportLink, o as formatWhatsAppNumber, r as SUPPORT_LABEL } from "./SupportLink-CbB80iuK.mjs";
import { S as useNavigate, g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as useLandlord, n as homeForStatus, t as LandlordProvider } from "./LandlordContext-CmC5R_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord-C-IS9fu3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PUBLIC_PREFIXES = ["/landlord/login", "/landlord/register"];
var STATUS_PAGES = [
	"/landlord/pending",
	"/landlord/rejected",
	"/landlord/suspended"
];
function LandlordRoot() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isPublic = PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordProvider, { children: isPublic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordGate, { pathname }) }) });
}
function Redirect({ to }) {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate({
			to,
			replace: true
		});
	}, [navigate, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "size-6 animate-spin text-highlight",
			"aria-label": "Loading"
		})
	});
}
function GateScreen({ title, body, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5 py-12 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-6 text-center sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-medium leading-snug",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
					message: "Hi UniHub, I need help accessing the landlord portal",
					className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-highlight hover:underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-4",
							"aria-hidden": "true"
						}),
						SUPPORT_LABEL,
						formatWhatsAppNumber() ? ` (${formatWhatsAppNumber()})` : ""
					]
				})
			]
		})
	});
}
function LandlordGate({ pathname }) {
	const { loading } = useAuth();
	const { user, profile, profileState, profileMessage, refreshProfile } = useLandlord();
	if (loading || !user || profileState === "loading") {
		if (!loading && !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redirect, { to: "/landlord/login" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-screen items-center justify-center bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
				className: "size-6 animate-spin text-highlight",
				"aria-label": "Loading your account"
			})
		});
	}
	if (profileState === "unavailable") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateScreen, {
		title: "Can't verify your profile",
		body: profileMessage,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: refreshProfile,
			className: "mb-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-glow",
			children: "Try again"
		})
	});
	if (profileState === "missing" || !profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GateScreen, {
		title: "No landlord profile found",
		body: "This account has no landlord profile yet. Register as a landlord to continue, or contact support if you believe this is a mistake.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/landlord/register",
			className: "mb-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-glow",
			children: "Register as a landlord"
		})
	});
	const isStatusPage = STATUS_PAGES.includes(pathname);
	if (profile.status !== "approved" && !isStatusPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redirect, { to: homeForStatus(profile.status) });
	if (profile.status === "approved" && isStatusPage) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redirect, { to: "/landlord" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}
//#endregion
export { LandlordRoot as component };
