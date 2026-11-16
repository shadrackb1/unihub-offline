import { o as __toESM } from "../_runtime.mjs";
import { $n as createLogger, $t as getDatabaseFieldIndexName, A as sessionSchema, An as literal, Bn as xor, C as runWithEndpointContext, Cn as boolean, D as serializeCookie, Dn as array, E as toResponse, En as any, Fn as record, Ft as runtimeSchemaCheckFor, Gn as appendQueryParams, Gt as ATTR_DB_COLLECTION_NAME, In as strictObject, It as schemaCheckFor, Jn as APIError, Jt as ATTR_HTTP_ROUTE, Kt as ATTR_HOOK_TYPE, Ln as string, Lt as SchemaMismatchError, M as jwtVerify, Mn as number, Nn as object, Nt as invalidateSchemaChecks, O as filterOutputFields, On as boolean$1, Pn as optional, Qn as defineErrorCodes, Qt as getAuthTablesWithResolvedIndexes, Rn as union, Rt as diffSchema, S as getCurrentAuthEndpointContext, Sn as createRandomStringGenerator, St as JWTExpired, T as createRouter$1, Tn as _enum, Ut as createWithSpan, Vt as whereOperators, Wt as ATTR_CONTEXT, Xn as kAPIErrorHeaderSymbol, Xt as safeJSONParse, Yn as BetterAuthError, Yt as ATTR_OPERATION_ID, Zn as BASE_ERROR_CODES, Zt as getAuthTables, _ as runWithAdapter, _n as utf8ToBytes, a as additionalAuthorizationParamsSchema, b as hasRequestState, c as createRateLimitKey, cr as isProduction, d as deprecate, dn as bytesToHex, en as getDatabaseIndexStringLength, er as logger, f as createAuthEndpoint, g as queueAfterTransactionHook, h as getCurrentAdapter, i as verifyProviderIdToken, in as encodeDeterministicId, ir as env, jn as looseObject, k as userSchema, kn as email, l as findInvalidTrustedProxies, lr as isTest, m as isAPIError, mt as encode, n as socialProviders, nn as initGetModelName, nr as getBetterAuthVersion, o as mergeScopes, p as createAuthMiddleware, qn as normalizePathname, qt as ATTR_HTTP_RESPONSE_STATUS_CODE, r as supportsIdTokenSignIn, rn as initGetFieldName, s as isLoopbackHost, sr as isDevelopment, t as SocialProviderListEnum, tn as getPortableDatabaseIdentifierKey, tr as shouldPublishLog, u as getIP, v as runWithTransaction, w as tryGetCurrentAuthEndpointContext, wn as string$1, x as runWithRequestState, xn as generateId, y as defineRequestState, yn as base64Url, zn as unknown, zt as formatSchemaFinding } from "../_libs/@better-auth/core+[...].mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as defu, t as createDefu } from "../_libs/defu.mjs";
import { a as getOrigin, c as isRequestLike, d as wildcardMatch, i as getHost, l as resolveBaseURL, o as getProtocol, r as getBaseURL, s as isDynamicBaseURLConfig } from "./AuthContext-RxT3sJ-M.mjs";
import { E as useRouter, Z as redirect, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as Download, n as X } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as __reExport, t as __exportAll } from "./rolldown-runtime-BBjsoOtd.mjs";
import { r as requireAdmin, t as guardedLoader } from "./requireAdmin-Dzm4cN2o.mjs";
import { n as routeOptions } from "./AdminDashboard-DIPvU8jU.mjs";
import { n as routeOptions$1 } from "./AdminAgentsPage-DbxFc5hh.mjs";
import { n as routeOptions$2 } from "./AdminCategoriesPage-DZhJ6LE1.mjs";
import { n as routeOptions$3 } from "./AdminCMSPage-CWeCqvKu.mjs";
import { a as isDeclarationItemId, i as isConsentPurposeId, n as DECLARATION_ITEMS, o as purposeWording, r as REQUIRED_DECLARATION_ITEM_IDS, s as purposesFromDeclarationItems, t as CONSENT_PURPOSES } from "./consentPurposes-BEDGknoK.mjs";
import { n as routeOptions$4 } from "./AdminHostelsPage-Q_4GSLIa.mjs";
import { c as sql, i as getPostgresSchema, n as getKyselyDatabaseType, o as toIntrospectedTables, r as getMssqlSchema, s as toPhysicalSchema, t as createKyselyAdapter } from "../_libs/@better-auth/kysely-adapter+[...].mjs";
import { t as useOnlineRefresh } from "./useOnlineRefresh-C70pS0qr.mjs";
import { t as Route$58 } from "./listings_._id-Cn7JnLn6.mjs";
import { n as routeOptions$5 } from "./AdminPropertiesPage-DO_1GmCS.mjs";
import { n as routeOptions$6 } from "./AdminPropertyForm-Bku9QK0V.mjs";
import { n as routeOptions$7 } from "./AdminSettingsPage-BiMV0axX.mjs";
import { n as routeOptions$8 } from "./AdminUniversitiesPage-C_000IFg.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as hkdf, t as sha256 } from "../_libs/noble__hashes.mjs";
import { a as jwtDecrypt, i as SignJWT, n as calculateJwkThumbprint, r as EncryptJWT, t as decodeProtectedHeader } from "../_libs/jose.mjs";
import { i as verifyPassword, n as binary, r as hashPassword, t as createHMAC } from "../_libs/better-auth__utils.mjs";
import { n as createHash, t as createTelemetry } from "../_libs/@better-auth/telemetry+[...].mjs";
import { a as utf8ToBytes$1, i as managedNonce, n as bytesToHex$1, r as hexToBytes, t as xchacha20poly1305 } from "../_libs/noble__ciphers.mjs";
import { t as PrismaLibSqlAdapterFactory } from "../_libs/@prisma/adapter-libsql+[...].mjs";
import { t as dist_exports } from "../_libs/better-auth__prisma-adapter.mjs";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as path$1 from "node:path";
import path from "node:path";
import * as runtime from "@prisma/client/runtime/client";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DRnaqIZ1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Emh0aXVp.css";
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	try {
		const lovableEvents = window.__lovableEvents;
		if (lovableEvents?.captureException) lovableEvents.captureException(error, context);
		const lovableReportRuntimeError = window.__lovableReportRuntimeError;
		if (lovableReportRuntimeError) lovableReportRuntimeError({
			error,
			context
		});
	} catch (e) {
		console.error("Error reporting failed:", e);
		console.error("Original error:", error);
		console.error("Context:", context);
	}
}
var SW_UPDATE_KEY = "unihub:sw-version";
var PENDING_RELOAD_KEY = "unihub:sw-pending-reload";
var KNOWN_BADGE = "unihub:sw-update-banner";
/**
* Registers `/sw.js` in production builds and keeps the shell fresh:
*  - when a NEW service worker activates (a new deployment was published),
*    schedule a one-time silent reload on the user's NEXT visit so the newly
*    cached shell takes over without interrupting what they are doing;
*
* Rendered from the root so exactly one instance covers every route.
*/
function PwaBridge() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (!("serviceWorker" in navigator)) return;
		let unregisterBanner = null;
		try {
			if (window.localStorage.getItem(PENDING_RELOAD_KEY) === "1" && window.sessionStorage.getItem(PENDING_RELOAD_KEY) !== "1") {
				window.sessionStorage.setItem(PENDING_RELOAD_KEY, "1");
				window.localStorage.removeItem(PENDING_RELOAD_KEY);
				window.location.reload();
				return;
			}
		} catch {}
		navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((registration) => {
			const onActivateMessage = (event) => {
				if (event.data?.type !== "SW_ACTIVATE") return;
				const version = event.data.version;
				let previous = null;
				try {
					previous = window.localStorage.getItem(SW_UPDATE_KEY);
					if (previous && version && previous !== version && window.localStorage.getItem(KNOWN_BADGE) !== version) {
						window.localStorage.setItem(KNOWN_BADGE, version);
						window.localStorage.setItem(PENDING_RELOAD_KEY, "1");
					}
					window.localStorage.setItem(SW_UPDATE_KEY, version ?? "unknown");
				} catch {}
			};
			navigator.serviceWorker.addEventListener("message", onActivateMessage);
			unregisterBanner = () => navigator.serviceWorker.removeEventListener("message", onActivateMessage);
		}).catch(() => {});
		return () => {
			unregisterBanner?.();
		};
	}, []);
	return null;
}
var DISMISS_KEY = "unihub:install-dismissed";
/**
* Floating "Install UniHub" pill shown when the browser fires
* `beforeinstallprompt`. Makes the app download-able/installable on Android
* and desktop Chrome/Edge; iOS users can still add to home screen manually.
*/
function InstallAppButton() {
	const [installEvent, setInstallEvent] = (0, import_react.useState)(null);
	const [dismissed, setDismissed] = (0, import_react.useState)(true);
	const [installed, setInstalled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
		const onPrompt = (event) => {
			event.preventDefault();
			setInstallEvent(event);
		};
		const onInstalled = () => {
			setInstalled(true);
			setInstallEvent(null);
		};
		window.addEventListener("beforeinstallprompt", onPrompt);
		window.addEventListener("appinstalled", onInstalled);
		return () => {
			window.removeEventListener("beforeinstallprompt", onPrompt);
			window.removeEventListener("appinstalled", onInstalled);
		};
	}, []);
	if (!installEvent || dismissed || installed) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-1/2 z-[60] -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 rounded-full bg-foreground/95 px-4 py-2 text-background shadow-xl backdrop-blur",
			role: "region",
			"aria-label": "Install app",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: async () => {
					try {
						await installEvent.prompt();
						if ((await installEvent.userChoice).outcome === "accepted") setInstalled(true);
						setInstallEvent(null);
					} catch {
						setInstallEvent(null);
					}
				},
				className: "flex items-center gap-1.5 text-sm font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Install UniHub app"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Dismiss install prompt",
				onClick: () => {
					setDismissed(true);
					try {
						window.localStorage.setItem(DISMISS_KEY, "1");
					} catch {}
				},
				className: "text-background/60 hover:text-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})]
		})
	});
}
function NotFoundComponent() {
	(0, import_react.useEffect)(() => {
		document.title = "Page not found · UniHub";
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-16 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl",
				children: "That page isn’t here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground",
				children: "The link may be out of date, or the listing behind it has been taken. Everything below is live and reachable."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/listings",
						className: "inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90",
						children: "Browse listings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "inline-flex min-h-11 items-center rounded-full border border-border bg-accent px-5 text-sm font-semibold text-foreground",
						children: "Contact the team"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
						children: "Home"
					})
				]
			})
		]
	}) });
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset?.();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$57 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ title: "UniHub · Verified student housing in Kenya" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "theme-color",
				content: "#0A0A0A"
			},
			{
				name: "author",
				content: "UniHub"
			},
			{
				property: "og:site_name",
				content: "UniHub"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/pwa/apple-touch-icon.png",
				sizes: "180x180"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
/**
* Applies the theme saved in the site builder.
*
* Nothing is touched until an administrator has actually saved settings
* (`updatedAt` is null otherwise), so a fresh install keeps the design system
* exactly as written in styles.css rather than the CMS defaults.
*/
function CmsTheme() {
	const onlineTick = useOnlineRefresh();
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./useSiteSettings-rriqBin-.mjs").then((n) => n.r).then((n) => n.r).then(async (m) => {
			try {
				const settings = await m.fetchSiteSettings();
				const theme = settings?.theme;
				if (!live || !settings?.updatedAt || !theme) return;
				const root = document.documentElement;
				if (theme.primaryColor) root.style.setProperty("--primary", theme.primaryColor);
				if (theme.backgroundColor) root.style.setProperty("--background", theme.backgroundColor);
				if (theme.surfaceColor) root.style.setProperty("--card", theme.surfaceColor);
				if (theme.borderRadius) root.style.setProperty("--radius", theme.borderRadius);
				if (theme.fontFamily) root.style.setProperty("--font-sans", `"${theme.fontFamily}", sans-serif`);
			} catch {}
		}).catch(() => {});
		return () => {
			live = false;
		};
	}, [onlineTick]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$57.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmsTheme, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PwaBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallAppButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		]
	});
}
var $$splitComponentImporter$34 = () => import("./routes-D95IsrQW.mjs");
var Route$56 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "UniHub · Verified Student Housing in Kenya" },
			{
				name: "description",
				content: "Browse verified hostels, bedsitters, and rentals near Kenyan university campuses. No account required. Contact landlords directly."
			},
			{
				property: "og:title",
				content: "UniHub · Find your perfect home."
			},
			{
				property: "og:description",
				content: "Safe, verified student housing near campus with transparent pricing and direct agent contact."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
[
	{
		code: "UoN",
		name: "Nairobi"
	},
	{
		code: "JKUAT",
		name: "Juja"
	},
	{
		code: "KU",
		name: "Kahawa"
	},
	{
		code: "MU",
		name: "Kesses"
	},
	{
		code: "EGU",
		name: "Njoro"
	},
	{
		code: "SU",
		name: "Madaraka"
	}
].map((campus) => campus.name);
var $$splitComponentImporter$33 = () => import("./about-CKkwsYBZ.mjs");
var Route$55 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About · UniHub" }, {
		name: "description",
		content: "UniHub makes student housing search simple, safe, and transparent across Kenya."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$33, "component")
});
var $$splitComponentImporter$32 = () => import("./admin-CW34SJqQ.mjs");
var Route$54 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
/**
* The hash-routed prototype that used to live here is superseded by the real
* routes. It was still reachable at /app and rendered a second, older product
* UI (different logo, nav and layout), which is a credibility problem for
* anyone who bookmarked it. Send those visitors to the live listings instead.
*/
var Route$53 = createFileRoute("/app")({ beforeLoad: () => {
	throw redirect({ to: "/listings" });
} });
var $$splitComponentImporter$31 = () => import("./consent-ChVNgEki.mjs");
var Route$52 = createFileRoute("/consent")({
	head: () => ({ meta: [{ title: "Your consent · UniHub" }, {
		name: "description",
		content: "Give, review and withdraw your consent for the personal data UniHub holds about your landlord or agent account."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./contact-B45i5Sef.mjs");
var Route$51 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact · UniHub" }, {
		name: "description",
		content: "Reach the UniHub team about a listing, verification, or listing your property in Kenya."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
/**
* Hostels are browsed on the listings page now. The old redirect into the
* hash-routed legacy app could land on a blank screen, so stale links and
* bookmarks land somewhere useful instead.
*/
var Route$50 = createFileRoute("/hostels")({ beforeLoad: () => {
	throw redirect({ to: "/listings" });
} });
var $$splitComponentImporter$29 = () => import("./landlord-C-IS9fu3.mjs");
var Route$49 = createFileRoute("/landlord")({
	head: () => ({ meta: [{ title: "UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./list-property-DntHYNWI.mjs");
var Route$48 = createFileRoute("/list-property")({
	head: () => ({ meta: [{ title: "List your property · UniHub" }, {
		name: "description",
		content: "List hostels, bedsitters, and rentals on UniHub and reach students searching near campus."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./listings-Du0tJrBu.mjs");
var Route$47 = createFileRoute("/listings")({
	head: () => ({ meta: [{ title: "Listings · UniHub" }, {
		name: "description",
		content: "Browse verified hostels, bedsitters, and rentals near Kenyan university campuses."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./privacy-C_LOc7xa.mjs");
var Route$46 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy · UniHub" }, {
		name: "description",
		content: "What UniHub collects from students and landlords, why, who can see it, and how to have it removed."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./terms-BLDP8gRD.mjs");
var Route$45 = createFileRoute("/terms")({
	head: () => ({ meta: [{ title: "Terms · UniHub" }, {
		name: "description",
		content: "How UniHub works: what verification covers, what students and landlords each agree to, and how listings are removed."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./admin-F25Ux30m.mjs");
var Route$44 = createFileRoute("/admin/")({
	head: () => ({ meta: [{ title: "Dashboard · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions.loader, {
		stats: {
			properties: 0,
			hostels: 0,
			universities: 0,
			agents: 0,
			categories: 0
		},
		recentProperties: [],
		recentHostels: []
	}),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./ads-C1Vqjftx.mjs");
var Route$43 = createFileRoute("/admin/ads")({
	head: () => ({ meta: [{ title: "Ads & boosts — UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./agents-CfpBlbdd.mjs");
var Route$42 = createFileRoute("/admin/agents")({
	head: () => ({ meta: [{ title: "Agents · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$1.loader, { agents: [] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./categories-BLICefqs.mjs");
var Route$41 = createFileRoute("/admin/categories")({
	head: () => ({ meta: [{ title: "Categories · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$2.loader, { categories: [] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./cms-Cy5xBTQ0.mjs");
var Route$40 = createFileRoute("/admin/cms")({
	loader: () => guardedLoader(routeOptions$3.loader, {
		settings: null,
		error: null
	}),
	head: () => ({ meta: [{ title: "Site builder — UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./hostels-CU7QNO3v.mjs");
var Route$39 = createFileRoute("/admin/hostels")({
	head: () => ({ meta: [{ title: "Hostels · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$4.loader, {
		hostels: [],
		universities: []
	}),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./landlords-ZBsFSDZA.mjs");
var Route$38 = createFileRoute("/admin/landlords")({
	head: () => ({ meta: [{ title: "Landlords — UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./listings-DMde2cm2.mjs");
var Route$37 = createFileRoute("/admin/listings")({
	head: () => ({ meta: [{ title: "Listing review — UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./login-cCKDimAV.mjs");
var Route$36 = createFileRoute("/admin/login")({
	head: () => ({ meta: [{ title: "Sign in · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./properties-wL7rGiyy.mjs");
var Route$35 = createFileRoute("/admin/properties")({
	head: () => ({ meta: [{ title: "Properties · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$5.loader, { properties: [] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./settings-COLFGfvv.mjs");
var Route$34 = createFileRoute("/admin/settings")({
	head: () => ({ meta: [{ title: "Settings · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$7.loader, { settings: null }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./universities-BDScIQRN.mjs");
var Route$33 = createFileRoute("/admin/universities")({
	head: () => ({ meta: [{ title: "Universities · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(routeOptions$8.loader, { universities: [] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var generateRandomString = createRandomStringGenerator("a-z", "0-9", "A-Z", "-_");
async function signJWT(payload, secret, expiresIn = 3600) {
	return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
	try {
		return (await jwtVerify(token, new TextEncoder().encode(secret))).payload;
	} catch {
		return null;
	}
}
var info = new Uint8Array([
	66,
	101,
	116,
	116,
	101,
	114,
	65,
	117,
	116,
	104,
	46,
	106,
	115,
	32,
	71,
	101,
	110,
	101,
	114,
	97,
	116,
	101,
	100,
	32,
	69,
	110,
	99,
	114,
	121,
	112,
	116,
	105,
	111,
	110,
	32,
	75,
	101,
	121
]);
var now = () => Date.now() / 1e3 | 0;
var alg = "dir";
var enc = "A256CBC-HS512";
function deriveEncryptionSecret(secret, salt) {
	return hkdf(sha256, new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
}
function getCurrentSecret(secret) {
	if (typeof secret === "string") return secret;
	const value = secret.keys.get(secret.currentVersion);
	if (!value) throw new Error(`Secret version ${secret.currentVersion} not found in keys`);
	return value;
}
function getAllSecrets(secret) {
	if (typeof secret === "string") return [{
		version: 0,
		value: secret
	}];
	const result = [];
	for (const [version, value] of secret.keys) result.push({
		version,
		value
	});
	if (secret.legacySecret && !result.some((s) => s.value === secret.legacySecret)) result.push({
		version: -1,
		value: secret.legacySecret
	});
	return result;
}
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
	const encryptionSecret = deriveEncryptionSecret(getCurrentSecret(secret), salt);
	const thumbprint = await calculateJwkThumbprint({
		kty: "oct",
		k: encode(encryptionSecret)
	}, "sha256");
	return await new EncryptJWT(payload).setProtectedHeader({
		alg,
		enc,
		kid: thumbprint
	}).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
var jwtDecryptOpts = {
	clockTolerance: 15,
	keyManagementAlgorithms: [alg],
	contentEncryptionAlgorithms: [enc, "A256GCM"]
};
async function symmetricDecodeJWT(token, secret, salt) {
	if (!token) return null;
	let hasKid = false;
	try {
		hasKid = decodeProtectedHeader(token).kid !== void 0;
	} catch {
		return null;
	}
	try {
		const secrets = getAllSecrets(secret);
		const { payload } = await jwtDecrypt(token, async (protectedHeader) => {
			const kid = protectedHeader.kid;
			if (kid !== void 0) {
				for (const s of secrets) {
					const encryptionSecret = deriveEncryptionSecret(s.value, salt);
					if (kid === await calculateJwkThumbprint({
						kty: "oct",
						k: encode(encryptionSecret)
					}, "sha256")) return encryptionSecret;
				}
				throw new Error("no matching decryption secret");
			}
			if (secrets.length === 1) return deriveEncryptionSecret(secrets[0].value, salt);
			return deriveEncryptionSecret(secrets[0].value, salt);
		}, jwtDecryptOpts);
		return payload;
	} catch {
		if (hasKid) return null;
		const secrets = getAllSecrets(secret);
		if (secrets.length <= 1) return null;
		for (let i = 1; i < secrets.length; i++) try {
			const s = secrets[i];
			const { payload } = await jwtDecrypt(token, deriveEncryptionSecret(s.value, salt), jwtDecryptOpts);
			return payload;
		} catch {
			continue;
		}
		return null;
	}
}
/**
* `@better-auth/utils/password` uses the "node" export condition in package.json
* to automatically pick the right implementation:
*   - Node.js / Bun / Deno → `node:crypto scrypt` (libuv thread pool, non-blocking)
*   - Unsupported runtimes → `@noble/hashes scrypt` (pure JS fallback)
*/
var hashPassword$1 = hashPassword;
var verifyPassword$1$1 = async ({ hash, password }) => {
	return verifyPassword(hash, password);
};
var ENVELOPE_PREFIX = "$ba$";
function parseEnvelope(data) {
	if (!data.startsWith(ENVELOPE_PREFIX)) return null;
	const firstSep = 4;
	const secondSep = data.indexOf("$", firstSep);
	if (secondSep === -1) return null;
	const version = parseInt(data.slice(firstSep, secondSep), 10);
	if (!Number.isInteger(version) || version < 0) return null;
	return {
		version,
		ciphertext: data.slice(secondSep + 1)
	};
}
function formatEnvelope(version, ciphertext) {
	return `${ENVELOPE_PREFIX}${version}$${ciphertext}`;
}
async function rawEncrypt(secret, data) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = utf8ToBytes$1(data);
	return bytesToHex$1(managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
}
async function rawDecrypt(secret, hex) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = hexToBytes(hex);
	const chacha = managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes));
	return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
}
var symmetricEncrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawEncrypt(key, data);
	const secret = key.keys.get(key.currentVersion);
	if (!secret) throw new Error(`Secret version ${key.currentVersion} not found in keys`);
	const ciphertext = await rawEncrypt(secret, data);
	return formatEnvelope(key.currentVersion, ciphertext);
};
var symmetricDecrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawDecrypt(key, data);
	const envelope = parseEnvelope(data);
	if (envelope) {
		const secret = key.keys.get(envelope.version);
		if (!secret) throw new Error(`Secret version ${envelope.version} not found in keys (key may have been retired)`);
		return rawDecrypt(secret, envelope.ciphertext);
	}
	if (key.legacySecret) return rawDecrypt(key.legacySecret, data);
	throw new Error("Cannot decrypt legacy bare-hex payload: no legacy secret available. Set BETTER_AUTH_SECRET for backwards compatibility.");
};
function hasServerSessionStore(options) {
	return !!options.database || !!options.secondaryStorage;
}
function hasServerAccountStore(options) {
	return !!options.database;
}
function shouldBindAccountCookieToSessionUser(options) {
	return hasServerAccountStore(options);
}
var cache = /* @__PURE__ */ new WeakMap();
function getFields(options, modelName, mode) {
	const cacheKey = `${modelName}:${mode}`;
	if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
	const tableCache = cache.get(options);
	if (tableCache.has(cacheKey)) return tableCache.get(cacheKey);
	const coreSchema = mode === "output" ? getAuthTables(options)[modelName]?.fields ?? {} : {};
	const additionalFields = modelName === "user" || modelName === "session" || modelName === "account" ? options[modelName]?.additionalFields : void 0;
	let schema = {
		...coreSchema,
		...additionalFields ?? {}
	};
	for (const plugin of options.plugins || []) if (plugin.schema && plugin.schema[modelName]) schema = {
		...schema,
		...plugin.schema[modelName].fields
	};
	tableCache.set(cacheKey, schema);
	return schema;
}
function parseUserOutput(options, user) {
	return filterOutputFields(user, getFields(options, "user", "output"));
}
/**
* Builds a synthetic user object that matches the shape of a real user
* returned from the database. This ensures enumeration protection works
* correctly by making synthetic and real user responses indistinguishable.
*
* The function iterates over the user output schema and:
* - Includes all fields that should be returned (returned !== false)
* - Uses provided values when available
* - Sets optional fields to null when no value is provided
* - Applies default values where defined
* - Always includes the 'id' field (not part of schema but always present)
*/
function buildSyntheticUserOutput(options, data) {
	const schema = getFields(options, "user", "output");
	const result = {};
	for (const key in schema) {
		const fieldAttr = schema[key];
		if (fieldAttr.returned === false) continue;
		if (key in data && data[key] !== void 0) result[key] = data[key];
		else if (fieldAttr.defaultValue !== void 0) result[key] = typeof fieldAttr.defaultValue === "function" ? fieldAttr.defaultValue() : fieldAttr.defaultValue;
		else if (!fieldAttr.required) result[key] = null;
	}
	if ("id" in data) result.id = data.id;
	return result;
}
function parseSessionOutput(options, session) {
	return filterOutputFields(session, getFields(options, "session", "output"));
}
function parseAccountOutput(options, account) {
	const { accessToken: _accessToken, refreshToken: _refreshToken, idToken: _idToken, accessTokenExpiresAt: _accessTokenExpiresAt, refreshTokenExpiresAt: _refreshTokenExpiresAt, password: _password, ...rest } = filterOutputFields(account, getFields(options, "account", "output"));
	return rest;
}
function parseInputData(data, schema) {
	const action = schema.action || "create";
	const fields = schema.fields;
	const parsedData = Object.create(null);
	for (const key in fields) {
		if (key in data) {
			if (fields[key].input === false) {
				if (fields[key].defaultValue !== void 0) {
					if (action !== "update") {
						parsedData[key] = fields[key].defaultValue;
						continue;
					}
				}
				if (data[key]) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.FIELD_NOT_ALLOWED,
					message: `${key} is not allowed to be set`
				});
				continue;
			}
			if (fields[key].validator?.input && data[key] !== void 0) {
				const result = fields[key].validator.input["~standard"].validate(data[key]);
				if (result instanceof Promise) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.ASYNC_VALIDATION_NOT_SUPPORTED);
				if ("issues" in result && result.issues) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.VALIDATION_ERROR,
					message: result.issues[0]?.message || "Validation Error"
				});
				parsedData[key] = result.value;
				continue;
			}
			if (fields[key].transform?.input && data[key] !== void 0) {
				parsedData[key] = fields[key].transform?.input(data[key]);
				continue;
			}
			parsedData[key] = data[key];
			continue;
		}
		if (fields[key].defaultValue !== void 0 && action === "create") {
			if (typeof fields[key].defaultValue === "function") {
				parsedData[key] = fields[key].defaultValue();
				continue;
			}
			parsedData[key] = fields[key].defaultValue;
			continue;
		}
		if (fields[key].required && action === "create") throw APIError.from("BAD_REQUEST", {
			...BASE_ERROR_CODES.MISSING_FIELD,
			message: `${key} is required`
		});
	}
	return parsedData;
}
function parseUserInput(options, user = {}, action) {
	return parseInputData(user, {
		fields: getFields(options, "user", "input"),
		action
	});
}
function parseAdditionalUserInputFromProviderProfile(options, profile = {}, action) {
	const schema = getFields(options, "user", "input");
	const allowedProfileFields = Object.create(null);
	for (const key of Object.keys(profile)) {
		if (schema[key]?.input === false) continue;
		allowedProfileFields[key] = profile[key];
	}
	return parseInputData(allowedProfileFields, {
		fields: schema,
		action
	});
}
function parseSessionInput(options, session, action) {
	return parseInputData(session, {
		fields: getFields(options, "session", "input"),
		action
	});
}
function getSessionDefaultFields(options) {
	const fields = getFields(options, "session", "input");
	const defaults = {};
	for (const key in fields) if (fields[key].defaultValue !== void 0) defaults[key] = typeof fields[key].defaultValue === "function" ? fields[key].defaultValue() : fields[key].defaultValue;
	return defaults;
}
function mergeSchema(schema, newSchema) {
	if (!newSchema) return schema;
	for (const table in newSchema) {
		const newModelName = newSchema[table]?.modelName;
		if (newModelName) schema[table].modelName = newModelName;
		for (const field in schema[table].fields) {
			const newField = newSchema[table]?.fields?.[field];
			if (!newField) continue;
			schema[table].fields[field].fieldName = newField;
		}
	}
	return schema;
}
var getDate = (span, unit = "ms") => {
	return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
function isPromise(obj) {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var SEC = 1e3;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
	const match = REGEX.exec(value);
	if (!match || match[4] && match[1]) throw new TypeError(`Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`);
	const n = parseFloat(match[2]);
	const unit = match[3].toLowerCase();
	let result;
	switch (unit) {
		case "years":
		case "year":
		case "yrs":
		case "yr":
		case "y":
			result = n * YEAR;
			break;
		case "months":
		case "month":
		case "mo":
			result = n * MONTH;
			break;
		case "weeks":
		case "week":
		case "w":
			result = n * WEEK;
			break;
		case "days":
		case "day":
		case "d":
			result = n * DAY;
			break;
		case "hours":
		case "hour":
		case "hrs":
		case "hr":
		case "h":
			result = n * HOUR;
			break;
		case "minutes":
		case "minute":
		case "mins":
		case "min":
		case "m":
			result = n * MIN;
			break;
		case "seconds":
		case "second":
		case "secs":
		case "sec":
		case "s":
			result = n * SEC;
			break;
		default: throw new TypeError(`Unknown time unit: "${unit}"`);
	}
	if (match[1] === "-" || match[4] === "ago") return -result;
	return result;
}
/**
* Parse a time string and return the value in seconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in seconds (rounded)
* @throws TypeError if the string format is invalid
*
* @example
* sec("1d")          // 86400
* sec("2 hours")     // 7200
* sec("-30s")        // -30
* sec("2 hours ago") // -7200
*/
function sec(value) {
	return Math.round(parse(value) / 1e3);
}
var cookieCachePayloadSchema = looseObject({
	session: sessionSchema.loose(),
	user: userSchema.loose(),
	updatedAt: number(),
	version: string().optional()
});
var compactCookieCacheSchema = object({
	session: record(string(), unknown()),
	expiresAt: number(),
	signature: string()
});
function parseCookieCachePayload(value) {
	const parsed = safeJSONParse(value);
	if (parsed === null) return null;
	const result = cookieCachePayloadSchema.safeParse(parsed);
	if (result.success) return result.data;
	logger.warn("Cookie cache payload failed schema validation", { issues: result.error.issues.map(({ code, path }) => ({
		code,
		path
	})) });
	return null;
}
function parseCompactCookieCache(value) {
	const result = compactCookieCacheSchema.safeParse(value);
	return result.success ? result.data : null;
}
function tryDecode(str) {
	if (str.indexOf("%") === -1) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var SECURE_COOKIE_PREFIX = "__Secure-";
/**
* Split a comma-joined `Set-Cookie` header string into individual cookies.
*/
function splitSetCookieHeader(setCookie) {
	if (!setCookie) return [];
	const result = [];
	let start = 0;
	let i = 0;
	while (i < setCookie.length) {
		if (setCookie[i] === ",") {
			let j = i + 1;
			while (j < setCookie.length && setCookie[j] === " ") j++;
			while (j < setCookie.length && setCookie[j] !== "=" && setCookie[j] !== ";" && setCookie[j] !== ",") j++;
			if (j < setCookie.length && setCookie[j] === "=") {
				const part = setCookie.slice(start, i).trim();
				if (part) result.push(part);
				start = i + 1;
				while (start < setCookie.length && setCookie[start] === " ") start++;
				i = start;
				continue;
			}
		}
		i++;
	}
	const last = setCookie.slice(start).trim();
	if (last) result.push(last);
	return result;
}
/**
* Cookie-name token char set per RFC 7230 §3.2.6.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6
*/
var cookieNameRegex = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E\x5F\x60\x61-\x7A\x7C\x7E]+$/;
/**
* Cookie-value char set per RFC 6265 §4.1.1, plus space and comma.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
* @see https://github.com/golang/go/issues/7243
*/
var cookieValueRegex = /^[\x20\x21\x23-\x3A\x3C-\x5B\x5D-\x7E]*$/;
/**
* Strip surrounding double-quotes per RFC 6265 §4.1.1 quoted-string form.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
*/
function unquoteCookieValue(value) {
	if (value.length < 2 || !value.startsWith("\"") || !value.endsWith("\"")) return value;
	return value.slice(1, -1);
}
/**
* Trim leading/trailing OWS (space / horizontal tab) per RFC 7230 §3.2.3.
* Narrower than `String.prototype.trim()`, which strips CR/LF and other
* whitespace and would let CTLs escape `cookieValueRegex`.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.3
*/
function trimOWS(s) {
	let start = 0;
	let end = s.length;
	while (start < end) {
		const c = s.charCodeAt(start);
		if (c !== 32 && c !== 9) break;
		start++;
	}
	while (end > start) {
		const c = s.charCodeAt(end - 1);
		if (c !== 32 && c !== 9) break;
		end--;
	}
	return start === 0 && end === s.length ? s : s.slice(start, end);
}
/**
* Tolerates `;` separators without the SP that RFC 6265 §4.2.1 mandates,
* since proxies and runtimes commonly strip it. Silently drops entries
* whose name violates RFC 7230 token or whose value violates RFC 6265
* cookie-octet (plus space and comma). Strips optional surrounding
* double-quotes per RFC 6265 §4.1.1.
*/
function parseCookies(cookie) {
	const cookieMap = /* @__PURE__ */ new Map();
	if (cookie.length < 2) return cookieMap;
	for (const chunk of cookie.split(";")) {
		const eq = chunk.indexOf("=");
		if (eq === -1) continue;
		const key = trimOWS(chunk.slice(0, eq));
		const val = unquoteCookieValue(trimOWS(chunk.slice(eq + 1)));
		if (cookieNameRegex.test(key) && cookieValueRegex.test(val)) cookieMap.set(key, tryDecode(val));
	}
	return cookieMap;
}
/**
* Per-cookie byte ceiling.
* Safari's ~4093 floor is the lowest among browsers.
* Kept a little under it for attributes added after sizing.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-6.1
* @see https://github.com/dotnet/aspnetcore/blob/aa5493528640932601bb82ef3295e4d8ca7e11c5/src/Shared/ChunkingCookieManager/ChunkingCookieManager.cs#L40
*/
var MAX_COOKIE_SIZE = 4050;
/**
* Max chunks per cookie.
* A larger value does not belong in a cookie.
*/
var MAX_COOKIE_CHUNKS = 100;
/**
* Largest value that keeps the serialized cookie within {@link MAX_COOKIE_SIZE},
* measured with the real `serializeCookie` writer so it stays in sync with the
* wire. Non-positive when the name and attributes alone overflow.
*/
function getMaxCookieValueSize(name, options) {
	return MAX_COOKIE_SIZE - serializeCookie(name, "", { ...options }).length;
}
function parseCookieChunkIndex(cookieName, name) {
	const prefix = `${cookieName}.`;
	if (!name.startsWith(prefix)) return null;
	const suffix = name.slice(prefix.length);
	const index = Number(suffix);
	if (!Number.isSafeInteger(index) || index < 0 || String(index) !== suffix) return null;
	return index;
}
/**
* Read all existing chunks from cookies
*/
function readExistingChunks(cookieName, ctx) {
	const chunks = {};
	const cookies = parseCookies(ctx.headers?.get("cookie") || "");
	for (const [name, value] of cookies) {
		if (name !== cookieName && parseCookieChunkIndex(cookieName, name) === null) continue;
		chunks[name] = value;
	}
	return chunks;
}
/**
* Split a cookie value into chunks if needed
*/
function chunkCookie(storeName, cookie, chunks, logger) {
	const chunkSize = getMaxCookieValueSize(`${cookie.name}.99`, cookie.attributes);
	const chunkCount = chunkSize > 0 ? Math.ceil(cookie.value.length / chunkSize) : Infinity;
	if (chunkCount <= 1) {
		chunks[cookie.name] = cookie.value;
		return [cookie];
	}
	if (chunkCount > MAX_COOKIE_CHUNKS) {
		logger.warn(`${storeName} cookie is too large to store even after chunking, so the cookie cache was skipped. Reduce the cached data size or avoid storing this data in cookies.`);
		return [];
	}
	const cookies = [];
	for (let i = 0; i < chunkCount; i++) {
		const name = `${cookie.name}.${i}`;
		const start = i * chunkSize;
		const value = cookie.value.substring(start, start + chunkSize);
		cookies.push({
			...cookie,
			name,
			value
		});
		chunks[name] = value;
	}
	logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
		message: `${storeName} cookie exceeds the ${MAX_COOKIE_SIZE} byte limit and was split into ${chunkCount} chunks.`,
		valueSize: cookie.value.length,
		chunkCount,
		chunkSizes: cookies.map((c) => c.value.length)
	});
	return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/
function getCleanCookies(chunks, cookieOptions) {
	const cleanedChunks = {};
	for (const name in chunks) cleanedChunks[name] = {
		name,
		value: "",
		attributes: {
			...cookieOptions,
			maxAge: 0
		}
	};
	return cleanedChunks;
}
/**
* Store that splits a cookie into numbered chunks when its serialized form
* would exceed the per-cookie byte limit, expiring stale chunks as needed.
*
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/
var storeFactory = (storeName) => (cookieName, cookieOptions, ctx) => {
	const chunks = readExistingChunks(cookieName, ctx);
	const logger = ctx.context.logger;
	const expireExistingChunks = () => {
		const expired = getCleanCookies(chunks, cookieOptions);
		for (const name in chunks) delete chunks[name];
		return expired;
	};
	return {
		chunk(value, options) {
			const cookies = expireExistingChunks();
			const chunked = chunkCookie(storeName, {
				name: cookieName,
				value,
				attributes: {
					...cookieOptions,
					...options
				}
			}, chunks, logger);
			for (const chunk of chunked) cookies[chunk.name] = chunk;
			return Object.values(cookies);
		},
		clean() {
			return Object.values(expireExistingChunks());
		},
		setCookies(cookies) {
			for (const cookie of cookies) ctx.setCookie(cookie.name, cookie.value, cookie.attributes);
		}
	};
};
var createSessionStore = storeFactory("Session");
var createAccountStore = storeFactory("Account");
function getChunkedCookie(ctx, cookieName) {
	const value = ctx.getCookie(cookieName);
	if (value) return value;
	const chunks = [];
	const cookieHeader = ctx.headers?.get("cookie");
	if (!cookieHeader) return null;
	for (const [name, val] of parseCookies(cookieHeader)) {
		const index = parseCookieChunkIndex(cookieName, name);
		if (index === null) continue;
		chunks.push({
			index,
			value: val
		});
	}
	if (chunks.length > 0) {
		chunks.sort((a, b) => a.index - b.index);
		return chunks.map((c) => c.value).join("");
	}
	return null;
}
async function setAccountCookie(c, accountData) {
	const accountDataCookie = c.context.authCookies.accountData;
	const options = {
		maxAge: 300,
		...accountDataCookie.attributes
	};
	const data = await symmetricEncodeJWT(accountData, c.context.secretConfig, "better-auth-account", options.maxAge);
	const accountStore = createAccountStore(accountDataCookie.name, options, c);
	accountStore.setCookies(accountStore.chunk(data, options));
}
async function getAccountCookie(c) {
	const accountCookie = getChunkedCookie(c, c.context.authCookies.accountData.name);
	if (accountCookie) {
		const accountData = safeJSONParse(await symmetricDecodeJWT(accountCookie, c.context.secretConfig, "better-auth-account"));
		if (accountData) return accountData;
	}
	return null;
}
var getSessionQuerySchema = optional(object({
	/**
	* If cookie cache is enabled, it will disable the cache
	* and fetch the session from the database
	*/
	disableCookieCache: boolean().meta({ description: "Disable cookie cache and fetch session from database" }).optional(),
	disableRefresh: boolean().meta({ description: "Disable session refresh. Useful for checking session status, without updating the session" }).optional()
}));
function createCookieGetter(options) {
	const baseURLString = typeof options.baseURL === "string" ? options.baseURL : void 0;
	const dynamicProtocol = typeof options.baseURL === "object" && options.baseURL !== null ? options.baseURL.protocol : void 0;
	const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : dynamicProtocol === "https" ? true : dynamicProtocol === "http" ? false : baseURLString ? baseURLString.startsWith("https://") : isProduction) ? SECURE_COOKIE_PREFIX : "";
	const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
	const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (baseURLString ? new URL(baseURLString).hostname : void 0) : void 0;
	if (crossSubdomainEnabled && !domain && !isDynamicBaseURLConfig(options.baseURL)) throw new BetterAuthError("baseURL is required when crossSubdomainCookies are enabled.");
	function createCookie(cookieName, overrideAttributes = {}) {
		const prefix = options.advanced?.cookiePrefix || "better-auth";
		const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
		const attributes = options.advanced?.cookies?.[cookieName]?.attributes ?? {};
		return {
			name: `${secureCookiePrefix}${name}`,
			attributes: {
				secure: !!secureCookiePrefix,
				sameSite: "lax",
				path: "/",
				httpOnly: true,
				...crossSubdomainEnabled ? { domain } : {},
				...options.advanced?.defaultCookieAttributes,
				...overrideAttributes,
				...attributes
			}
		};
	}
	return createCookie;
}
function getCookies(options) {
	const createCookie = createCookieGetter(options);
	const sessionToken = createCookie("session_token", { maxAge: options.session?.expiresIn || sec("7d") });
	const sessionData = createCookie("session_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const accountData = createCookie("account_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const dontRememberToken = createCookie("dont_remember");
	return {
		sessionToken: {
			name: sessionToken.name,
			attributes: sessionToken.attributes
		},
		/**
		* This cookie is used to store the session data in the cookie
		* This is useful for when you want to cache the session in the cookie
		*/
		sessionData: {
			name: sessionData.name,
			attributes: sessionData.attributes
		},
		dontRememberToken: {
			name: dontRememberToken.name,
			attributes: dontRememberToken.attributes
		},
		accountData: {
			name: accountData.name,
			attributes: accountData.attributes
		}
	};
}
async function setCookieCache(ctx, session, dontRememberMe) {
	if (!ctx.context.options.session?.cookieCache?.enabled) return;
	const filteredSession = filterOutputFields(session.session, ctx.context.options.session?.additionalFields);
	const filteredUser = parseUserOutput(ctx.context.options, session.user);
	const versionConfig = ctx.context.options.session?.cookieCache?.version;
	let version = "1";
	if (versionConfig) {
		if (typeof versionConfig === "string") version = versionConfig;
		else if (typeof versionConfig === "function") {
			const result = versionConfig(session.session, session.user);
			version = isPromise(result) ? await result : result;
		}
	}
	const sessionData = {
		session: filteredSession,
		user: filteredUser,
		updatedAt: Date.now(),
		version
	};
	const options = {
		...ctx.context.authCookies.sessionData.attributes,
		maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.attributes.maxAge
	};
	const expiresAtDate = getDate(options.maxAge || 60, "sec").getTime();
	const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
	let data;
	if (strategy === "jwe") data = await symmetricEncodeJWT(sessionData, ctx.context.secretConfig, "better-auth-session", options.maxAge || 300);
	else if (strategy === "jwt") {
		const cookieCacheSigner = ctx.context.sessionConfig.cookieCacheSigner;
		data = cookieCacheSigner ? await cookieCacheSigner.sign(ctx, sessionData, options.maxAge || 300) : await signJWT(sessionData, ctx.context.secret, options.maxAge || 300);
	} else data = base64Url.encode(JSON.stringify({
		session: sessionData,
		expiresAt: expiresAtDate,
		signature: await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
			...sessionData,
			expiresAt: expiresAtDate
		}))
	}), { padding: false });
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
	sessionStore.setCookies(sessionStore.chunk(data, options));
	if (ctx.context.options.account?.storeAccountCookie && !hasPendingSetCookie(ctx, ctx.context.authCookies.accountData.name)) {
		const accountData = await getAccountCookie(ctx);
		if (accountData) if (!shouldBindAccountCookieToSessionUser(ctx.context.options) || accountData.userId === session.user.id) await setAccountCookie(ctx, accountData);
		else {
			expireCookie(ctx, ctx.context.authCookies.accountData);
			const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
			accountStore.setCookies(accountStore.clean());
		}
	}
}
async function decodeCookieCache(ctx, value) {
	const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
	if (strategy === "jwe") {
		const decoded = await symmetricDecodeJWT(value, ctx.context.secretConfig, "better-auth-session");
		const payload = parseCookieCachePayload(decoded);
		if (!payload) return null;
		return {
			session: payload,
			expiresAt: decoded?.exp ? decoded.exp * 1e3 : Date.now()
		};
	}
	if (strategy === "jwt") {
		const cookieCacheSigner = ctx.context.sessionConfig.cookieCacheSigner;
		if (cookieCacheSigner) {
			const verified = await cookieCacheSigner.verify(ctx, value);
			if (!verified) return null;
			return {
				session: verified.payload,
				expiresAt: verified.expiresAt
			};
		}
		const decoded = await verifyJWT(value, ctx.context.secret);
		const payload = parseCookieCachePayload(decoded);
		if (!payload) return null;
		return {
			session: payload,
			expiresAt: decoded?.exp ? decoded.exp * 1e3 : Date.now()
		};
	}
	const parsed = parseCompactCookieCache(safeJSONParse(binary.decode(base64Url.decode(value))));
	if (!parsed) return null;
	if (!await createHMAC("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify({
		...parsed.session,
		expiresAt: parsed.expiresAt
	}), parsed.signature)) return null;
	const payload = parseCookieCachePayload(parsed.session);
	return payload ? {
		session: payload,
		expiresAt: parsed.expiresAt
	} : null;
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
	const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
	dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
	const options = ctx.context.authCookies.sessionToken.attributes;
	const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
	await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
		...options,
		maxAge,
		...overrides
	});
	if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.attributes);
	await setCookieCache(ctx, session, dontRememberMe);
	ctx.context.setNewSession(session);
}
/**
* Remove any prior `Set-Cookie` entries on the current response whose cookie
* name matches `cookieName` or any chunked variant (`${cookieName}.0`, etc.).
*
* Prevents a valid cookie value from leaking on the wire when the same cookie
* is set and then expired within a single request (e.g. `/sign-in/email`
* writes credential session cookies and the 2FA after-hook expires them).
* Browsers honor the expiring entry, but anything reading the raw response
* headers — proxy/LB logs, server-side SDK consumers, observability tools —
* sees the earlier valid value and could replay it (bypassing the 2FA gate
* when the cookie cache is enabled).
*
* Scrubs both the local middleware scope's `responseHeaders` and the outer
* endpoint scope's `ctx.context.responseHeaders`, because plugin after-hooks
* run in a fresh local scope while accumulated response headers live on the
* outer one. `scoped.context` is required by {@link GenericEndpointContext}
* but unit-test mocks pass a minimal object via `as any`, so we use optional
* chaining defensively. The `Set` collapses the case where both scopes
* reference the same `Headers`.
*/
function removeSetCookieEntries(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) {
		const existing = typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "");
		if (!existing.length) continue;
		const survivors = existing.filter((entry) => !entry.startsWith(exact) && !entry.startsWith(chunk));
		if (survivors.length === existing.length) continue;
		headers.delete("set-cookie");
		for (const entry of survivors) headers.append("set-cookie", entry);
	}
}
/**
* Whether the response already has a pending `Set-Cookie` for `cookieName`
* or a chunked variant.
*/
function hasPendingSetCookie(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) if ((typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "")).some((entry) => entry.startsWith(exact) || entry.startsWith(chunk))) return true;
	return false;
}
/**
* Expires a cookie by setting `maxAge: 0` while preserving its attributes
*/
function expireCookie(ctx, cookie) {
	removeSetCookieEntries(ctx, cookie.name);
	ctx.setCookie(cookie.name, "", {
		...cookie.attributes,
		maxAge: 0
	});
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
	expireCookie(ctx, ctx.context.authCookies.sessionToken);
	expireCookie(ctx, ctx.context.authCookies.sessionData);
	if (ctx.context.options.account?.storeAccountCookie) {
		expireCookie(ctx, ctx.context.authCookies.accountData);
		const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
		const cleanCookies = accountStore.clean();
		accountStore.setCookies(cleanCookies);
	}
	if (ctx.context.oauthConfig.storeStateStrategy === "cookie") expireCookie(ctx, ctx.context.createAuthCookie("oauth_state"));
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.attributes, ctx);
	const cleanCookies = sessionStore.clean();
	sessionStore.setCookies(cleanCookies);
	if (!skipDontRememberMe) expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
}
var salt = utf8ToBytes("better-auth:oauth-encryption:v1");
function deriveSecret(secret, purpose) {
	return bytesToHex(hkdf(sha256, utf8ToBytes(secret), salt, utf8ToBytes(`better-auth:${purpose}:v1`), 32));
}
/** Derive an isolated key for one OAuth ciphertext purpose, retaining rotation versions. */
function derivePurposeKey(secret, purpose) {
	if (typeof secret === "string") return deriveSecret(secret, purpose);
	return {
		keys: new Map(Array.from(secret.keys, ([version, value]) => [version, deriveSecret(value, purpose)])),
		currentVersion: secret.currentVersion,
		...secret.legacySecret && { legacySecret: deriveSecret(secret.legacySecret, purpose) }
	};
}
var stateDataSchema = looseObject({
	callbackURL: string(),
	codeVerifier: string(),
	errorURL: string().optional(),
	newUserURL: string().optional(),
	expiresAt: number(),
	/**
	* CSRF nonce returned to the OAuth provider. When using cookie state storage,
	* this must match the callback `state` query parameter.
	*/
	oauthState: string().optional(),
	link: object({
		email: string(),
		userId: string$1()
	}).optional(),
	requestSignUp: boolean$1().optional(),
	/**
	* OIDC nonce sent as the authorization request `nonce` parameter when the
	* provider requires an ID token to be bound to this redirect flow.
	*/
	idTokenNonce: string().optional(),
	/**
	* Server-controlled values that ride the state across the provider redirect.
	* Populated only by `generateState` from `addOAuthServerContext`, never from
	* the request body, so it is safe to trust on the callback.
	*/
	serverContext: record(string(), unknown()).optional()
});
/** Verification key for database-backed OAuth and SAML relay state. */
var getAuthStateVerificationIdentifier = (state) => `auth-state:${state}`;
new Set(Object.keys(stateDataSchema.shape));
var StateError = class extends BetterAuthError {
	code;
	details;
	/**
	* The per-flow `errorCallbackURL` recovered from the parsed state, when the
	* failure happened after the state was successfully parsed (for example a
	* nonce or state-cookie mismatch). It was origin-validated at sign-in, so
	* the callback can safely redirect there instead of the default error page.
	* Absent when the state could not be parsed at all.
	*/
	errorURL;
	constructor(message, options) {
		super(message, options);
		this.code = options.code;
		this.details = options.details;
		this.errorURL = options.errorURL;
	}
};
async function generateGenericState(c, stateData, settings) {
	const state = generateRandomString(32);
	if (c.context.oauthConfig.storeStateStrategy === "cookie") {
		const payload = {
			...stateData,
			oauthState: state
		};
		const encryptedData = await symmetricEncrypt({
			key: derivePurposeKey(c.context.secretConfig, "oauth-state-cookie"),
			data: JSON.stringify(payload)
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state", { maxAge: 600 });
		c.setCookie(stateCookie.name, encryptedData, stateCookie.attributes);
		return {
			state,
			codeVerifier: stateData.codeVerifier
		};
	}
	const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state", { maxAge: 300 });
	await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
	const expiresAt = /* @__PURE__ */ new Date();
	expiresAt.setMinutes(expiresAt.getMinutes() + 10);
	if (!await c.context.internalAdapter.createVerificationValue({
		value: JSON.stringify({
			...stateData,
			oauthState: state
		}),
		identifier: getAuthStateVerificationIdentifier(state),
		expiresAt
	})) throw new StateError("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database", { code: "state_generation_error" });
	return {
		state,
		codeVerifier: stateData.codeVerifier
	};
}
async function parseGenericState(c, state, settings) {
	if (!state) throw new StateError("State not found in OAuth callback", { code: "state_not_found" });
	const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
	let parsedData;
	if (storeStateStrategy === "cookie") {
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state");
		const encryptedData = c.getCookie(stateCookie.name);
		if (!encryptedData) throw new StateError("State mismatch: auth state cookie not found", {
			code: "state_mismatch",
			details: { state }
		});
		try {
			const decryptedData = await symmetricDecrypt({
				key: derivePurposeKey(c.context.secretConfig, "oauth-state-cookie"),
				data: encryptedData
			});
			parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
		} catch (error) {
			throw new StateError("State invalid: Failed to decrypt or parse auth state", {
				code: "state_invalid",
				details: { state },
				cause: error
			});
		}
		if (!parsedData.oauthState || parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
	} else {
		const data = await c.context.internalAdapter.findVerificationValue(getAuthStateVerificationIdentifier(state));
		if (!data) throw new StateError("State mismatch: verification not found", {
			code: "state_mismatch",
			details: { state }
		});
		parsedData = stateDataSchema.parse(JSON.parse(data.value));
		if (parsedData.oauthState !== void 0 && parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state");
		const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
		if (!(settings?.skipStateCookieCheck ?? c.context.oauthConfig.skipStateCookieCheck) && (!stateCookieValue || stateCookieValue !== state)) throw new StateError("State mismatch: State not persisted correctly", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
		await c.context.internalAdapter.deleteVerificationByIdentifier(getAuthStateVerificationIdentifier(state));
	}
	if (parsedData.expiresAt < Date.now()) throw new StateError("Invalid state: request expired", {
		code: "state_mismatch",
		details: { expiresAt: parsedData.expiresAt },
		errorURL: parsedData.errorURL
	});
	return parsedData;
}
/**
* Error codes used in OAuth callback redirects (`?error=<code>`). These are
* URL-safe strings, not API error objects. Some also serve as the OAuth seam's
* machine-readable `result.error` value, which non-redirect callers (e.g.
* id-token sign-in) remap to an API error code.
*/
var OAUTH_CALLBACK_ERROR_CODES = {
	NO_CODE: "no_code",
	PROVIDER_NOT_FOUND: "oauth_provider_not_found",
	ISSUER_MISSING: "issuer_missing",
	ISSUER_MISMATCH: "issuer_mismatch",
	INVALID_CODE: "invalid_code",
	NONCE_BINDING_MISSING: "nonce_binding_missing",
	UNABLE_TO_GET_USER_INFO: "unable_to_get_user_info",
	NO_CALLBACK_URL: "no_callback_url",
	UNABLE_TO_LINK_ACCOUNT: "unable_to_link_account",
	EMAIL_DOES_NOT_MATCH: "email_does_not_match",
	ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_USER: "account_already_linked_to_different_user",
	EMAIL_NOT_FOUND: "email_not_found",
	EMAIL_NOT_VERIFIED: "email_not_verified"
};
var HANDLING_DOCS_URL = "https://www.better-auth.com/docs/concepts/oauth#handling-providers-without-email";
/**
* Redirect the user to the OAuth error page with a machine-readable `error`
* code (and optional `error_description`).
*
* Every OAuth callback path routes its failures through this helper so the
* query parameter name, the `?`/`&` separator, and URL encoding are decided in
* one place. The error page reads the `error` query parameter, so callers must
* never hand-build the redirect with a different parameter name.
*/
function redirectOnError(ctx, errorURL, error, description) {
	const params = new URLSearchParams({ error });
	if (description) params.set("error_description", description);
	const redirectURL = appendQueryParams(errorURL, params);
	throw ctx.redirect(redirectURL);
}
/**
* Build the logger message shown when an OAuth provider does not return an
* email address. Kept in one place so every rejection site points users at
* the same workaround docs.
*/
function missingEmailLogMessage(providerId, options) {
	return `${options?.source === "generic" ? `Generic OAuth provider "${providerId}"` : `Provider "${providerId}"`} did not return an email${options?.source === "id_token" ? " in the id token" : ""}. Either request the provider's email scope, or create a placeholder via \`mapProfileToUser\`. See ${HANDLING_DOCS_URL}`;
}
var { get: getRawOAuthState, set: setOAuthState } = defineRequestState(() => null);
/**
* @internal Read accumulated server context to embed during state generation.
*/
var { get: getOAuthServerContext, set: setOAuthServerContext } = defineRequestState(() => null);
/**
* Mint the OIDC `nonce` for the redirect flow, or `undefined` when the provider
* does not require ID-token nonce binding. Every redirect entrypoint (social
* sign-in, account linking, IDP-initiated bounce, and the OAuth popup) mints
* through this helper, so the value sent on the authorization URL and the value
* persisted in state are produced one way and cannot drift apart.
*/
function generateIdTokenNonce(provider) {
	return provider.requiresIdTokenNonce ? generateRandomString(32) : void 0;
}
async function generateState(c, options) {
	const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
	if (!callbackURL) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CALLBACK_URL_REQUIRED);
	const codeVerifier = options?.codeVerifier ?? generateRandomString(128);
	const pendingServerContext = await getOAuthServerContext();
	const serverContext = pendingServerContext && Object.keys(pendingServerContext).length ? pendingServerContext : void 0;
	const stateData = {
		...options?.additionalData ? options.additionalData : {},
		callbackURL,
		codeVerifier,
		errorURL: c.body?.errorCallbackURL,
		newUserURL: c.body?.newUserCallbackURL,
		link: options?.link,
		serverContext,
		expiresAt: Date.now() + 6e5,
		requestSignUp: c.body?.requestSignUp,
		idTokenNonce: options?.idTokenNonce
	};
	await setOAuthState(stateData);
	try {
		return generateGenericState(c, stateData);
	} catch (error) {
		c.context.logger.error("Failed to create verification", error);
		throw new APIError("INTERNAL_SERVER_ERROR", {
			message: "Unable to create verification",
			cause: error
		});
	}
}
async function parseState(c) {
	const state = c.query.state || c.body?.state;
	const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	let parsedData;
	try {
		parsedData = await parseGenericState(c, state);
	} catch (error) {
		c.context.logger.error("Failed to parse state", error);
		let code = "internal_server_error";
		let redirectErrorURL = errorURL;
		if (error instanceof StateError) {
			code = error.code === "state_security_mismatch" ? "state_mismatch" : error.code;
			redirectErrorURL = error.errorURL || errorURL;
		}
		redirectOnError(c, redirectErrorURL, code);
	}
	if (!parsedData.errorURL) parsedData.errorURL = errorURL;
	if (parsedData) await setOAuthState(parsedData);
	return parsedData;
}
var HIDE_METADATA = { scope: "server" };
var CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f-\u009f]/;
var RELATIVE_URL_PARSER_ORIGIN = "https://better-auth.invalid";
var ENCODED_PATH_SEPARATOR_PATTERN = /%2[fF]|%5[cC]/;
/**
* Resolves `.` and `..` segments in a path after percent-decoding so a
* path-pinned pattern cannot be bypassed with traversal: e.g.
* `myapp://host/cb/../evil` must not satisfy pattern `myapp://host/cb`.
* Returns "" for an empty or root path.
*/
var normalizePath = (path) => {
	let decoded = path;
	try {
		decoded = decodeURIComponent(path);
	} catch {}
	const segments = [];
	for (const segment of decoded.split("/")) if (segment === "..") segments.pop();
	else if (segment !== "." && segment !== "") segments.push(segment);
	return segments.length > 0 ? `/${segments.join("/")}` : "";
};
/**
* Splits a custom-scheme origin into its scheme, authority and path using
* plain string operations.
*
* `new URL()` is deliberately avoided here: its parsing of non-special schemes
* (e.g. `myapp://`, `exp://`) is not consistent across the runtimes Better Auth
* targets (Node, Bun, Deno, Cloudflare Workers), and the result of an origin
* check must not depend on which engine extracts the authority.
*
* Scheme and authority are lower-cased (matching how a URL canonicalizes its
* host); the path is percent-decoded and resolved so traversal cannot bypass
* a path-pinned pattern.
*/
var parseCustomSchemeOrigin = (value) => {
	if (CONTROL_CHARACTER_PATTERN.test(value)) return null;
	const schemeEnd = value.indexOf(":");
	if (schemeEnd <= 0) return null;
	const scheme = value.slice(0, schemeEnd).toLowerCase();
	let rest = value.slice(schemeEnd + 1);
	let authority = "";
	if (rest.startsWith("//")) {
		rest = rest.slice(2);
		const authorityEnd = rest.search(/[/?#]/);
		if (authorityEnd === -1) {
			authority = rest;
			rest = "";
		} else {
			authority = rest.slice(0, authorityEnd);
			rest = rest.slice(authorityEnd);
		}
	}
	const pathEnd = rest.search(/[?#]/);
	const path = normalizePath(pathEnd === -1 ? rest : rest.slice(0, pathEnd));
	return {
		scheme,
		authority: authority.toLowerCase(),
		path
	};
};
/**
* Validates root-relative redirects against ambiguous browser and router parsing.
*
* @see https://www.rfc-editor.org/rfc/rfc3986.html#section-4.2
* @see https://url.spec.whatwg.org/#concept-basic-url-parser
*/
var isSafeRelativeURL = (value) => {
	if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\") || CONTROL_CHARACTER_PATTERN.test(value)) return false;
	const pathEnd = value.search(/[?#]/);
	const path = pathEnd === -1 ? value : value.slice(0, pathEnd);
	if (ENCODED_PATH_SEPARATOR_PATTERN.test(path)) return false;
	try {
		return new URL(value, RELATIVE_URL_PARSER_ORIGIN).origin === RELATIVE_URL_PARSER_ORIGIN;
	} catch {
		return false;
	}
};
/**
* Matches the given url against an origin or origin pattern
* See "options.trustedOrigins" for details of supported patterns
*
* @param url The url to test
* @param pattern The origin pattern
* @param [settings] Specify supported pattern matching settings
* @returns {boolean} true if the URL matches the origin pattern, false otherwise.
*/
var matchesOriginPattern = (url, pattern, settings) => {
	if (url.startsWith("/")) return settings?.allowRelativePaths === true && isSafeRelativeURL(url);
	if (pattern.includes("*") || pattern.includes("?")) {
		if (pattern.includes("://")) return wildcardMatch(pattern)(getOrigin(url) || url);
		const host = getHost(url);
		if (!host) return false;
		return wildcardMatch(pattern)(host);
	}
	const protocol = getProtocol(url);
	if (protocol === "http:" || protocol === "https:" || !protocol) return pattern === getOrigin(url);
	const parsed = parseCustomSchemeOrigin(url);
	const parsedPattern = parseCustomSchemeOrigin(pattern);
	if (!parsed || !parsedPattern || parsed.scheme !== parsedPattern.scheme) return false;
	if (parsedPattern.authority && parsed.authority !== parsedPattern.authority) return false;
	if (!parsedPattern.path) return true;
	return parsed.path === parsedPattern.path || parsed.path.startsWith(`${parsedPattern.path}/`);
};
/**
* Checks if CSRF should be skipped for backward compatibility.
* Previously, disableOriginCheck also disabled CSRF checks.
* This maintains that behavior when disableCSRFCheck isn't explicitly set.
* Only triggers for skipOriginCheck === true, not for path arrays.
*/
function shouldSkipCSRFForBackwardCompat(ctx) {
	return ctx.context.skipOriginCheck === true && ctx.context.options.advanced?.disableCSRFCheck === void 0;
}
/**
* Checks if the origin check should be skipped for the current request.
* Handles both boolean (skip all) and array (skip specific paths) configurations.
*/
function shouldSkipOriginCheck(ctx) {
	const skipOriginCheck = ctx.context.skipOriginCheck;
	if (skipOriginCheck === true) return true;
	if (Array.isArray(skipOriginCheck) && ctx.request) try {
		const basePath = new URL(ctx.context.baseURL).pathname;
		const currentPath = normalizePathname(ctx.request.url, basePath);
		return skipOriginCheck.some((skipPath) => {
			const normalizedSkipPath = skipPath.replace(/\/+$/, "");
			return currentPath === normalizedSkipPath || currentPath.startsWith(`${normalizedSkipPath}/`);
		});
	} catch {}
	return false;
}
/**
* Logs deprecation warning for users relying on coupled behavior.
* Only logs if user explicitly set disableOriginCheck (not test environment default).
*/
var logBackwardCompatWarning = deprecate(function logBackwardCompatWarning() {}, "disableOriginCheck: true currently also disables CSRF checks. In a future version, disableOriginCheck will ONLY disable URL validation. To keep CSRF disabled, add disableCSRFCheck: true to your config.");
/**
* A middleware to validate callbackURL and origin against trustedOrigins.
* Also handles CSRF protection using Fetch Metadata for first-login scenarios.
*/
var originCheckMiddleware = createAuthMiddleware(async (ctx) => {
	if (ctx.request?.method === "GET" || ctx.request?.method === "OPTIONS" || ctx.request?.method === "HEAD" || !ctx.request) return;
	await validateOrigin(ctx);
	if (shouldSkipOriginCheck(ctx)) return;
	const { body, query } = ctx;
	const callbackURL = body?.callbackURL || query?.callbackURL;
	const redirectURL = body?.redirectTo;
	const errorCallbackURL = body?.errorCallbackURL;
	const newUserCallbackURL = body?.newUserCallbackURL;
	const validateURL = (url, label) => {
		if (!url) return;
		if (typeof url !== "string") throw APIError.fromStatus("BAD_REQUEST", { message: `Invalid ${label}: expected a string` });
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	callbackURL && validateURL(callbackURL, "callbackURL");
	redirectURL && validateURL(redirectURL, "redirectURL");
	errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
	newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
var originCheck = (getValue) => createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	if (shouldSkipOriginCheck(ctx)) return;
	const callbackURL = getValue(ctx);
	const validateURL = (url, label) => {
		if (!url) return;
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	const callbacks = Array.isArray(callbackURL) ? callbackURL : [callbackURL];
	for (const url of callbacks) validateURL(url, "callbackURL");
});
/**
* Validates origin header against trusted origins.
* @param ctx - The endpoint context
* @param forceValidate - If true, always validate origin regardless of cookies/skip flags
*/
async function validateOrigin(ctx, forceValidate = false) {
	const headers = ctx.request?.headers;
	if (!headers || !ctx.request) return;
	const origin = headers.get("origin");
	const originHeader = origin || headers.get("referer") || "";
	const useCookies = headers.has("cookie");
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) {
		ctx.context.options.advanced?.disableOriginCheck === true && logBackwardCompatWarning();
		return;
	}
	if (shouldSkipOriginCheck(ctx)) return;
	if (!(forceValidate || useCookies)) return;
	const inferredBaseURL = origin === "null" && headers.get("sec-fetch-site") === "same-origin" ? getBaseURL(void 0, ctx.context.options.basePath, ctx.request, false, ctx.context.options.advanced?.trustedProxyHeaders) : void 0;
	const originToValidate = (inferredBaseURL ? getOrigin(inferredBaseURL) : void 0) ?? originHeader;
	if (!originToValidate || originToValidate === "null") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.MISSING_OR_NULL_ORIGIN);
	const trustedOrigins = Array.isArray(ctx.context.options.trustedOrigins) ? ctx.context.trustedOrigins : [...ctx.context.trustedOrigins, ...(await ctx.context.options.trustedOrigins?.(ctx.request))?.filter((v) => Boolean(v)) || []];
	if (!trustedOrigins.some((origin) => matchesOriginPattern(originToValidate, origin))) {
		ctx.context.logger.error(`Invalid origin: ${originToValidate}`);
		ctx.context.logger.info(`If it's a valid URL, please add ${originToValidate} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
	}
}
/**
* Middleware for CSRF protection using Fetch Metadata headers.
* This prevents cross-site navigation login attacks while supporting progressive enhancement.
*/
var formCsrfMiddleware = createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	await validateFormCsrf(ctx);
});
/**
* Validates CSRF protection for first-login scenarios using Fetch Metadata headers.
* This prevents cross-site form submission attacks while supporting progressive enhancement.
*/
async function validateFormCsrf(ctx) {
	const req = ctx.request;
	if (!req) return;
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) return;
	const headers = req.headers;
	if (headers.has("cookie")) return await validateOrigin(ctx);
	const site = headers.get("Sec-Fetch-Site");
	const mode = headers.get("Sec-Fetch-Mode");
	const dest = headers.get("Sec-Fetch-Dest");
	if (Boolean(site && site.trim() || mode && mode.trim() || dest && dest.trim())) {
		if (site === "cross-site" && mode === "navigate") {
			ctx.context.logger.error("Blocked cross-site navigation login attempt (CSRF protection)", {
				secFetchSite: site,
				secFetchMode: mode,
				secFetchDest: dest
			});
			throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.CROSS_SITE_NAVIGATION_LOGIN_BLOCKED);
		}
		return await validateOrigin(ctx, true);
	}
	if (headers.get("origin") || headers.get("referer")) return await validateOrigin(ctx, true);
}
var memory = /* @__PURE__ */ new Map();
var MEMORY_STORE_MAX_ENTRIES = 1e5;
function pruneMemoryStore() {
	const now = Date.now();
	for (const [key, entry] of memory) if (now >= entry.expiresAt) memory.delete(key);
	if (memory.size <= MEMORY_STORE_MAX_ENTRIES) return;
	const overflow = memory.size - MEMORY_STORE_MAX_ENTRIES;
	let removed = 0;
	for (const key of memory.keys()) {
		memory.delete(key);
		if (++removed >= overflow) break;
	}
}
/**
* Decide an atomic rate-limit step against an in-memory `RateLimit` snapshot
* for the rolling `window` (seconds) and `max`. Shared by the memory backend
* (read-decide-write is atomic under single-threaded JS) and as the fallback
* for storages lacking an atomic primitive.
*/
function decideConsume(data, rule, now) {
	const windowInMs = rule.window * 1e3;
	if (!data) return {
		next: {
			key: "",
			count: 1,
			lastRequest: now
		},
		update: false,
		allowed: true,
		retryAfter: null
	};
	if (now - data.lastRequest >= windowInMs) return {
		next: {
			...data,
			count: 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
	if (data.count >= rule.max) return {
		next: data,
		update: true,
		allowed: false,
		retryAfter: getRetryAfter(data.lastRequest, rule.window)
	};
	return {
		next: {
			...data,
			count: data.count + 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
}
function rateLimitResponse(retryAfter) {
	return new Response(JSON.stringify({ message: "Too many requests. Please try again later." }), {
		status: 429,
		statusText: "Too Many Requests",
		headers: {
			"Content-Type": "application/json",
			"X-Retry-After": retryAfter.toString()
		}
	});
}
function getRetryAfter(lastRequest, window) {
	const now = Date.now();
	const windowInMs = window * 1e3;
	return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDatabaseStorageWrapper(ctx) {
	const model = "rateLimit";
	const db = ctx.adapter;
	let longestObservedWindow = Math.max(...getConfiguredRateLimitWindows(ctx));
	const readRow = async (key) => {
		const data = (await db.findMany({
			model,
			where: [{
				field: "key",
				value: key
			}]
		}))[0];
		if (data) data.lastRequest = Number(data.lastRequest);
		return data;
	};
	const consume = async (key, rule) => {
		if (rule.window > longestObservedWindow) longestObservedWindow = rule.window;
		const windowInMs = rule.window * 1e3;
		const data = await readRow(key);
		const now = Date.now();
		if (!data) try {
			await db.create({
				model,
				data: {
					key,
					count: 1,
					lastRequest: now
				}
			});
			return {
				allowed: true,
				retryAfter: null
			};
		} catch (error) {
			if (!await readRow(key)) throw error;
			return consume(key, rule);
		}
		if (now - data.lastRequest >= windowInMs) {
			if (await db.incrementOne({
				model,
				where: [{
					field: "key",
					value: key
				}, {
					field: "lastRequest",
					operator: "lte",
					value: data.lastRequest
				}],
				increment: {},
				set: {
					count: 1,
					lastRequest: now
				}
			})) {
				await deleteExpiredRows(now);
				return {
					allowed: true,
					retryAfter: null
				};
			}
			return consume(key, rule);
		}
		const windowStart = now - windowInMs;
		if (await db.incrementOne({
			model,
			where: [
				{
					field: "key",
					value: key
				},
				{
					field: "lastRequest",
					operator: "gt",
					value: windowStart
				},
				{
					field: "count",
					operator: "lt",
					value: rule.max
				}
			],
			increment: { count: 1 },
			set: { lastRequest: now }
		})) return {
			allowed: true,
			retryAfter: null
		};
		const fresh = await readRow(key);
		if (!fresh) return consume(key, rule);
		if (now - fresh.lastRequest >= windowInMs) return consume(key, rule);
		return {
			allowed: false,
			retryAfter: getRetryAfter(fresh.lastRequest, rule.window)
		};
	};
	const deleteExpiredRows = async (now) => {
		const cutoff = now - longestObservedWindow * 1e3;
		await ctx.runInBackgroundOrAwait(db.deleteMany({
			model,
			where: [{
				field: "lastRequest",
				operator: "lt",
				value: cutoff
			}]
		}).then(() => void 0).catch((e) => ctx.logger.error("Error pruning rate limit rows", e)));
	};
	return { consume };
}
function getConfiguredRateLimitWindows(ctx) {
	const windows = [ctx.rateLimit.window, ...getDefaultSpecialRules().map((rule) => rule.window)];
	for (const plugin of ctx.options.plugins || []) if (plugin.rateLimit) windows.push(...plugin.rateLimit.map((rule) => rule.window));
	if (ctx.rateLimit.customRules) {
		for (const customRule of Object.values(ctx.rateLimit.customRules)) if (customRule && typeof customRule !== "function") windows.push(customRule.window);
	}
	const validWindows = windows.filter((window) => Number.isFinite(window) && window > 0);
	return validWindows.length > 0 ? validWindows : [ctx.rateLimit.window];
}
function getRateLimitStorage(ctx, rateLimitSettings) {
	if (ctx.options.rateLimit?.customStorage) return ctx.options.rateLimit.customStorage;
	const storage = ctx.rateLimit.storage;
	if (storage === "secondary-storage") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		const increment = ctx.options.secondaryStorage?.increment;
		if (!increment) throw new BetterAuthError("Secondary-storage rate limiting requires SecondaryStorage.increment.");
		return { consume: async (key, rule) => {
			if (await increment(key, ttlFor(rule.window)) <= rule.max) return {
				allowed: true,
				retryAfter: null
			};
			return {
				allowed: false,
				retryAfter: rule.window
			};
		} };
	} else if (storage === "memory") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		return { async consume(key, rule) {
			pruneMemoryStore();
			const now = Date.now();
			const entry = memory.get(key);
			const decision = decideConsume(entry && now < entry.expiresAt ? entry.data : void 0, rule, now);
			if (decision.allowed) memory.set(key, {
				data: {
					...decision.next,
					key
				},
				expiresAt: now + ttlFor(rule.window) * 1e3
			});
			return {
				allowed: decision.allowed,
				retryAfter: decision.retryAfter
			};
		} };
	}
	return createDatabaseStorageWrapper(ctx);
}
var ipWarningLogged = false;
var NO_TRUSTED_IP_KEY = "no-trusted-ip";
async function resolveRateLimitConfig(req, ctx) {
	const basePath = new URL(ctx.baseURL).pathname;
	const path = normalizePathname(req.url, basePath);
	let currentWindow = ctx.rateLimit.window;
	let currentMax = ctx.rateLimit.max;
	const ip = getIP(req, ctx.options);
	if (!ip && ctx.options.advanced?.ipAddress?.disableIpTracking) return null;
	if (!ip && !ipWarningLogged) {
		ctx.logger.warn("Rate limiting could not determine a client IP and is falling back to a single shared per-path bucket. Ensure your runtime forwards a trusted client IP header, then set `advanced.ipAddress.ipAddressHeaders` or `advanced.ipAddress.trustedProxies` so the address can be resolved.");
		ipWarningLogged = true;
	}
	const key = createRateLimitKey(ip ?? NO_TRUSTED_IP_KEY, path);
	const specialRule = getDefaultSpecialRules().find((rule) => rule.pathMatcher(path));
	if (specialRule) {
		currentWindow = specialRule.window;
		currentMax = specialRule.max;
	}
	for (const plugin of ctx.options.plugins || []) if (plugin.rateLimit) {
		const matchedRule = plugin.rateLimit.find((rule) => rule.pathMatcher(path));
		if (matchedRule) {
			currentWindow = matchedRule.window;
			currentMax = matchedRule.max;
			break;
		}
	}
	if (ctx.rateLimit.customRules) {
		const _path = Object.keys(ctx.rateLimit.customRules).find((p) => {
			if (p.includes("*")) return wildcardMatch(p)(path);
			return p === path;
		});
		if (_path) {
			const customRule = ctx.rateLimit.customRules[_path];
			const resolved = typeof customRule === "function" ? await customRule(req, {
				window: currentWindow,
				max: currentMax
			}) : customRule;
			if (resolved) {
				currentWindow = resolved.window;
				currentMax = resolved.max;
			}
			if (resolved === false) return null;
		}
	}
	return {
		key,
		currentWindow,
		currentMax
	};
}
/**
* Decides the rate limit for the request in a single atomic step. The whole
* check-and-increment happens here in the request phase; there is no separate
* response-phase write-back, so concurrent requests cannot all pass a stale
* read before any increment lands.
*/
async function onRequestRateLimit(req, ctx) {
	if (!ctx.rateLimit.enabled) return;
	const config = await resolveRateLimitConfig(req, ctx);
	if (!config) return;
	const { key, currentWindow, currentMax } = config;
	const storage = getRateLimitStorage(ctx, { window: currentWindow });
	const rule = {
		window: currentWindow,
		max: currentMax
	};
	const { allowed, retryAfter } = await storage.consume(key, rule);
	if (!allowed) return rateLimitResponse(retryAfter ?? currentWindow);
}
function getDefaultSpecialRules() {
	return [{
		pathMatcher(path) {
			return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
		},
		window: 10,
		max: 3
	}, {
		pathMatcher(path) {
			return path === "/request-password-reset" || path === "/send-verification-email" || path.startsWith("/forget-password") || path === "/email-otp/send-verification-otp" || path === "/email-otp/request-password-reset";
		},
		window: 60,
		max: 3
	}];
}
/**
* State for skipping session refresh
*
* In some cases, such as when using server-side rendering (SSR) or when dealing with
* certain types of requests, it may be necessary to skip session refresh to prevent
* potential inconsistencies between the session data in the database and the session
* data stored in cookies.
*/
var { get: getShouldSkipSessionRefresh, set: setShouldSkipSessionRefresh } = defineRequestState(() => false);
var getSession = () => createAuthEndpoint("/get-session", {
	method: ["GET", "POST"],
	operationId: "getSession",
	query: getSessionQuerySchema,
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "getSession",
		description: "Get the current session",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: ["object", "null"],
				properties: {
					session: { $ref: "#/components/schemas/Session" },
					user: { $ref: "#/components/schemas/User" }
				},
				required: ["session", "user"]
			} } }
		} }
	} }
}, async (ctx) => {
	ctx.setHeader("cache-control", "no-store");
	ctx.setHeader("pragma", "no-cache");
	const deferSessionRefresh = ctx.context.options.session?.deferSessionRefresh;
	const isPostRequest = ctx.method === "POST";
	if (isPostRequest && !deferSessionRefresh) throw APIError.from("METHOD_NOT_ALLOWED", BASE_ERROR_CODES.METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED);
	try {
		const cookieCacheEnabled = ctx.context.options.session?.cookieCache?.enabled === true;
		const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
		if (!sessionCookieToken && cookieCacheEnabled) return null;
		const sessionDataCookie = getChunkedCookie(ctx, ctx.context.authCookies.sessionData.name);
		if (sessionDataCookie && !cookieCacheEnabled) {
			const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.attributes, ctx);
			sessionStore.setCookies(sessionStore.clean());
		}
		if (!sessionCookieToken) return null;
		const shouldUseCookieCache = cookieCacheEnabled && !ctx.query?.disableCookieCache;
		const sessionDataPayload = shouldUseCookieCache && sessionDataCookie ? await decodeCookieCache(ctx, sessionDataCookie) : null;
		if (shouldUseCookieCache && sessionDataCookie && !sessionDataPayload) expireCookie(ctx, ctx.context.authCookies.sessionData);
		const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
		/**
		* If session data is present in the cookie, check if it should be used or refreshed
		*/
		if (sessionDataPayload?.session) {
			const session = sessionDataPayload.session;
			let shouldExpireCookieCache = session.session.token !== sessionCookieToken;
			if (!shouldExpireCookieCache) {
				const versionConfig = ctx.context.options.session?.cookieCache?.version;
				let expectedVersion = "1";
				if (versionConfig) {
					if (typeof versionConfig === "string") expectedVersion = versionConfig;
					else if (typeof versionConfig === "function") {
						const result = versionConfig(session.session, session.user);
						expectedVersion = result instanceof Promise ? await result : result;
					}
				}
				shouldExpireCookieCache = (session.version || "1") !== expectedVersion;
			}
			if (!shouldExpireCookieCache) {
				const now = Date.now();
				const cachedSessionExpiresAt = new Date(session.session.expiresAt).getTime();
				shouldExpireCookieCache = sessionDataPayload.expiresAt < now || !Number.isFinite(cachedSessionExpiresAt) || cachedSessionExpiresAt < now;
			}
			if (shouldExpireCookieCache) expireCookie(ctx, ctx.context.authCookies.sessionData);
			else {
				const cookieRefreshCache = ctx.context.sessionConfig.cookieRefreshCache;
				if (cookieRefreshCache === false) {
					ctx.context.session = session;
					const parsedSession = parseSessionOutput(ctx.context.options, {
						...session.session,
						expiresAt: new Date(session.session.expiresAt),
						createdAt: new Date(session.session.createdAt),
						updatedAt: new Date(session.session.updatedAt)
					});
					const parsedUser = parseUserOutput(ctx.context.options, {
						...session.user,
						createdAt: new Date(session.user.createdAt),
						updatedAt: new Date(session.user.updatedAt)
					});
					return ctx.json({
						session: parsedSession,
						user: parsedUser
					});
				}
				const timeUntilExpiry = sessionDataPayload.expiresAt - Date.now();
				const updateAge = cookieRefreshCache.updateAge * 1e3;
				const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
				if (timeUntilExpiry < updateAge && !shouldSkipSessionRefresh) {
					const refreshedSession = {
						session: { ...session.session },
						user: session.user,
						updatedAt: Date.now()
					};
					await setCookieCache(ctx, refreshedSession, false);
					const sessionTokenOptions = ctx.context.authCookies.sessionToken.attributes;
					const sessionTokenMaxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
					await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
						...sessionTokenOptions,
						maxAge: sessionTokenMaxAge
					});
					const parsedRefreshedSession = parseSessionOutput(ctx.context.options, {
						...refreshedSession.session,
						expiresAt: new Date(refreshedSession.session.expiresAt),
						createdAt: new Date(refreshedSession.session.createdAt),
						updatedAt: new Date(refreshedSession.session.updatedAt)
					});
					const parsedRefreshedUser = parseUserOutput(ctx.context.options, {
						...refreshedSession.user,
						createdAt: new Date(refreshedSession.user.createdAt),
						updatedAt: new Date(refreshedSession.user.updatedAt)
					});
					ctx.context.session = {
						session: parsedRefreshedSession,
						user: parsedRefreshedUser
					};
					return ctx.json({
						session: parsedRefreshedSession,
						user: parsedRefreshedUser
					});
				}
				const parsedSession = parseSessionOutput(ctx.context.options, {
					...session.session,
					expiresAt: new Date(session.session.expiresAt),
					createdAt: new Date(session.session.createdAt),
					updatedAt: new Date(session.session.updatedAt)
				});
				const parsedUser = parseUserOutput(ctx.context.options, {
					...session.user,
					createdAt: new Date(session.user.createdAt),
					updatedAt: new Date(session.user.updatedAt)
				});
				ctx.context.session = {
					session: parsedSession,
					user: parsedUser
				};
				return ctx.json({
					session: parsedSession,
					user: parsedUser
				});
			}
		}
		const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
		ctx.context.session = session;
		if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
			deleteSessionCookie(ctx);
			if (session) {
				/**
				* if session expired clean up the session
				* Only delete on POST when deferSessionRefresh is enabled
				*/
				if (!deferSessionRefresh || isPostRequest) await ctx.context.internalAdapter.deleteSession(session.session.token);
			}
			return ctx.json(null);
		}
		/**
		* We don't need to update the session if the user doesn't want to be remembered
		* or if the session refresh is disabled
		*/
		if (dontRememberMe || ctx.query?.disableRefresh) {
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser
			});
		}
		const expiresIn = ctx.context.sessionConfig.expiresIn;
		const updateAge = ctx.context.sessionConfig.updateAge;
		const shouldBeUpdated = session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3 <= Date.now();
		const disableRefresh = ctx.query?.disableRefresh || ctx.context.options.session?.disableSessionRefresh;
		const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
		const needsRefresh = shouldBeUpdated && !disableRefresh && !shouldSkipSessionRefresh;
		/**
		* When deferSessionRefresh is enabled and this is a GET request,
		* return the session without performing writes, but include needsRefresh flag
		*/
		if (deferSessionRefresh && !isPostRequest) {
			await setCookieCache(ctx, session, !!dontRememberMe);
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser,
				needsRefresh
			});
		}
		if (needsRefresh) {
			const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
				expiresAt: getDate(ctx.context.sessionConfig.expiresIn, "sec"),
				updatedAt: /* @__PURE__ */ new Date()
			});
			if (!updatedSession) {
				/**
				* Handle case where session update fails (e.g., concurrent deletion)
				*/
				deleteSessionCookie(ctx);
				throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
			}
			const maxAge = ctx.context.sessionConfig.expiresIn;
			await setSessionCookie(ctx, {
				session: updatedSession,
				user: session.user
			}, false, { maxAge });
			const parsedUpdatedSession = parseSessionOutput(ctx.context.options, updatedSession);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedUpdatedSession,
				user: parsedUser
			});
		}
		await setCookieCache(ctx, session, !!dontRememberMe);
		const parsedSession = parseSessionOutput(ctx.context.options, session.session);
		const parsedUser = parseUserOutput(ctx.context.options, session.user);
		return ctx.json({
			session: parsedSession,
			user: parsedUser
		});
	} catch (error) {
		if (isAPIError(error)) throw error;
		ctx.context.logger.error("INTERNAL_SERVER_ERROR", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION, { cause: error });
	}
});
/**
* Whether the deployment keeps sessions in a durable server-side store
* (a database or secondary storage) rather than only in the signed cookie.
*
* Sensitive operations use this to decide whether the cookie cache is merely an
* optimization that must be bypassed for an authoritative read (`true`), or the
* only place the session lives and therefore the authority itself (`false`, for
* stateless / DB-less deployments). Pass the result as `disableCookieCache` so a
* revoked-but-cached session cannot authorize a sensitive action.
*/
var isStateful = (ctx) => hasServerSessionStore(ctx.context.options);
var getSessionFromCtx = async (ctx, config) => {
	if (ctx.context.session) return ctx.context.session;
	const session = await getSession()({
		...ctx,
		method: "GET",
		asResponse: false,
		headers: ctx.headers,
		returnHeaders: true,
		returnStatus: false,
		query: {
			...config,
			...ctx.query,
			disableCookieCache: config?.disableCookieCache || ctx.query?.disableCookieCache,
			disableRefresh: config?.disableRefresh || ctx.query?.disableRefresh
		}
	}).catch(() => {
		return null;
	});
	if (!session) {
		ctx.context.session = null;
		return null;
	}
	if (session.headers) session.headers.forEach((value, key) => {
		const lowerKey = key.toLowerCase();
		if (lowerKey === "cache-control" || lowerKey === "pragma") return;
		if (lowerKey === "set-cookie") ctx.responseHeaders.append(key, value);
		else ctx.responseHeaders.set(key, value);
	});
	ctx.context.session = session.response;
	return session.response;
};
/**
* Reads the session from the source that can authorize sensitive work.
*
* Stateful deployments must re-read the server-side session store because an
* earlier hook may have populated `ctx.context.session` from cookie cache.
* Stateless deployments keep the signed cookie as the session record.
*/
var getAuthoritativeSessionFromCtx = async (ctx) => {
	if (!isStateful(ctx)) return getSessionFromCtx(ctx);
	ctx.context.session = null;
	return getSessionFromCtx(ctx, { disableCookieCache: true });
};
/**
* The middleware forces the endpoint to require a valid session.
*/
var sessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid authoritative session.
* This should be used for sensitive operations like password changes, account deletion, etc.
*/
var sensitiveSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getAuthoritativeSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session && (ctx.request || ctx.headers)) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid session,
* as well as making sure the session is fresh before proceeding.
*
* Session freshness check will be skipped if the session config's freshAge
* is set to 0
*/
var freshSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	if (ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.SESSION_NOT_FRESH);
	}
	return { session };
});
/**
* user active sessions list
*/
var listSessions = () => createAuthEndpoint("/list-sessions", {
	method: "GET",
	operationId: "listUserSessions",
	use: [freshSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "listUserSessions",
		description: "List all active sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: { $ref: "#/components/schemas/Session" }
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		const activeSessions = (await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id, { onlyActiveSessions: true })).filter((session) => {
			return session.expiresAt > /* @__PURE__ */ new Date();
		});
		return ctx.json(activeSessions.map((session) => parseSessionOutput(ctx.context.options, session)));
	} catch (e) {
		ctx.context.logger.error(e);
		throw ctx.error("INTERNAL_SERVER_ERROR");
	}
});
/**
* revoke a single session
*/
var revokeSession = createAuthEndpoint("/revoke-session", {
	method: "POST",
	body: object({ token: string().meta({ description: "The token to revoke" }) }),
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke a single session",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: { token: {
				type: "string",
				description: "The token to revoke"
			} },
			required: ["token"]
		} } } },
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if the session was revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token;
	if ((await ctx.context.internalAdapter.findSession(token))?.session.userId === ctx.context.session.user.id) try {
		await ctx.context.internalAdapter.deleteSession(token);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
/**
* revoke all user sessions
*/
var revokeSessions = createAuthEndpoint("/revoke-sessions", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke all sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		await ctx.context.internalAdapter.deleteUserSessions(ctx.context.session.user.id);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
var revokeOtherSessions = createAuthEndpoint("/revoke-other-sessions", {
	method: "POST",
	requireHeaders: true,
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		description: "Revoke all other sessions for the user except the current one",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all other sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!session.user) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	const otherSessions = (await ctx.context.internalAdapter.listSessions(session.user.id)).filter((session) => {
		return session.expiresAt > /* @__PURE__ */ new Date();
	}).filter((session) => session.token !== ctx.context.session.session.token);
	await Promise.all(otherSessions.map((session) => ctx.context.internalAdapter.deleteSession(session.token)));
	return ctx.json({ status: true });
});
function assertValidUserInfoSource(source) {
	if (!source?.method) throw new APIError("FORBIDDEN", {
		code: "validation_source_missing",
		message: "User validation source is required"
	});
	if (source.method === "oauth" && !source.oauth?.providerId) throw new APIError("FORBIDDEN", {
		code: "validation_source_missing",
		message: "OAuth user validation source requires oauth.providerId"
	});
	if ((source.method === "sso-oidc" || source.method === "sso-saml") && !source.sso?.providerId) throw new APIError("FORBIDDEN", {
		code: "validation_source_missing",
		message: "SSO user validation source requires sso.providerId"
	});
}
/**
* Invoke the application's `user.validateUserInfo` gate and throw a `403`
* {@link APIError} if it rejects.
*
* Fails closed: if the hook throws, provisioning is rejected rather than
* silently allowed.
*/
async function assertValidUserInfo(ctx, data) {
	const validate = ctx.context.options.user?.validateUserInfo;
	if (!validate) return;
	assertValidUserInfoSource(data.source);
	let result;
	try {
		result = await validate(data, ctx);
	} catch (error) {
		ctx.context.logger.error("validateUserInfo callback threw", error);
		throw new APIError("FORBIDDEN", {
			code: "validation_failed",
			message: "User validation failed"
		});
	}
	if (result?.error) throw new APIError("FORBIDDEN", {
		code: result.error,
		message: result.errorDescription || result.error
	});
}
var defaultKeyHasher = async (identifier) => {
	const hash = await createHash("SHA-256").digest(new TextEncoder().encode(identifier));
	return base64Url.encode(new Uint8Array(hash), { padding: false });
};
async function processIdentifier(identifier, option) {
	if (!option || option === "plain") return identifier;
	if (option === "hashed") return defaultKeyHasher(identifier);
	if (typeof option === "object" && "hash" in option) return option.hash(identifier);
	return identifier;
}
function getStorageOption(identifier, config) {
	if (!config) return;
	if (typeof config === "object" && "default" in config) {
		if (config.overrides) {
			for (const [prefix, option] of Object.entries(config.overrides)) if (identifier.startsWith(prefix)) return option;
		}
		return config.default;
	}
	return config;
}
function getWithHooks(adapter, ctx) {
	const withSpan = createWithSpan(ctx.options);
	const hooksEntries = ctx.hooks;
	async function createWithHooks(data, model, customCreateFn) {
		const context = tryGetCurrentAuthEndpointContext();
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.before;
			if (toRun) {
				const result = await withSpan(`db create.before ${model}`, {
					[ATTR_HOOK_TYPE]: "create.before",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(actualData, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		let created = null;
		if (!customCreateFn || customCreateFn.executeMainFn) created = await (await getCurrentAdapter(adapter)).create({
			model,
			data: actualData,
			forceAllowId: true
		});
		if (customCreateFn?.fn) created = await customCreateFn.fn(created ?? actualData);
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db create.after ${model}`, {
					[ATTR_HOOK_TYPE]: "create.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(created, context));
			});
		}
		return created;
	}
	async function updateWithHooks(data, where, model, customUpdateFn) {
		const context = tryGetCurrentAuthEndpointContext();
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db update.before ${model}`, {
					[ATTR_HOOK_TYPE]: "update.before",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).update({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db update.after ${model}`, {
					[ATTR_HOOK_TYPE]: "update.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function updateManyWithHooks(data, where, model, customUpdateFn) {
		const context = tryGetCurrentAuthEndpointContext();
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db updateMany.before ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.before",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).updateMany({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db updateMany.after ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function deleteWithHooks(where, model, customDeleteFn) {
		const context = tryGetCurrentAuthEndpointContext();
		let entityToDelete = null;
		try {
			entityToDelete = (await (await getCurrentAdapter(adapter)).findMany({
				model,
				where,
				limit: 1
			}))[0] || null;
		} catch {}
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					["db.collection.name"]: model,
					["better_auth.context"]: source
				}, () => toRun(entityToDelete, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = (!customDeleteFn || customDeleteFn.executeMainFn) && entityToDelete ? await (await getCurrentAdapter(adapter)).delete({
			model,
			where
		}) : customDeleted;
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entityToDelete, context));
			});
		}
		return deleted;
	}
	async function deleteManyWithHooks(where, model, customDeleteFn) {
		const context = tryGetCurrentAuthEndpointContext();
		let entitiesToDelete = [];
		try {
			entitiesToDelete = await (await getCurrentAdapter(adapter)).findMany({
				model,
				where
			});
		} catch {}
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					["db.collection.name"]: model,
					["better_auth.context"]: source
				}, () => toRun(entity, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await getCurrentAdapter(adapter)).deleteMany({
			model,
			where
		}) : customDeleted;
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entity, context));
			});
		}
		return deleted;
	}
	/**
	* Wraps an atomic consume operation in the plugin `delete.before` and
	* `delete.after` hook lifecycle. The caller supplies a `consumeFn` that
	* performs the actual single-row delete-and-return (typically the
	* adapter's `consumeOne`). The first concurrent caller wins, subsequent
	* racers resolve to `null` without firing `delete.after` hooks.
	*
	* `preSnapshot` lets the caller hand in a row it already fetched so
	* `delete.before` hooks don't trigger a second read. Without it, the
	* helper falls back to a best-effort `findMany` against `hookWhere`.
	* The snapshot only feeds `delete.before`; the `consumeFn` return value
	* is the race gate.
	*
	* Returning `false` from a `delete.before` hook aborts the consume and
	* the helper resolves to `null` (no `consumeFn` call, no after hooks).
	*/
	async function consumeOneWithHooks(model, hookWhere, consumeFn, preSnapshot) {
		const context = tryGetCurrentAuthEndpointContext();
		const beforeHooks = hooksEntries.flatMap(({ source, hooks }) => {
			const fn = hooks[model]?.delete?.before;
			return fn ? [{
				source,
				fn
			}] : [];
		});
		let snapshot = preSnapshot ?? null;
		if (beforeHooks.length) {
			if (!snapshot) try {
				snapshot = (await (await getCurrentAdapter(adapter)).findMany({
					model,
					where: hookWhere,
					limit: 1
				}))[0] || null;
			} catch {}
			if (snapshot) {
				for (const { source, fn } of beforeHooks) if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					["db.collection.name"]: model,
					["better_auth.context"]: source
				}, () => fn(snapshot, context)) === false) return null;
			}
		}
		const consumed = await consumeFn();
		if (!consumed) return null;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(consumed, context));
			});
		}
		return consumed;
	}
	return {
		createWithHooks,
		updateWithHooks,
		updateManyWithHooks,
		deleteWithHooks,
		deleteManyWithHooks,
		consumeOneWithHooks
	};
}
function getTTLSeconds(expiresAt, now = Date.now()) {
	const expiresMs = typeof expiresAt === "number" ? expiresAt : expiresAt.getTime();
	return Math.max(Math.floor((expiresMs - now) / 1e3), 0);
}
var createInternalAdapter = (adapter, ctx) => {
	const logger = ctx.logger;
	const options = ctx.options;
	const secondaryStorage = options.secondaryStorage;
	const verificationConsumeLocks = /* @__PURE__ */ new Map();
	const sessionExpiration = options.session?.expiresIn || 604800;
	const databaseSessionFallbackEnabled = !!secondaryStorage && options.session?.storeSessionInDatabase === true && options.session?.preserveSessionInDatabase !== true;
	const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks, consumeOneWithHooks } = getWithHooks(adapter, ctx);
	/**
	* Ends the live session rows matched by `where` without physically deleting
	* them.
	*
	* Used for `secondaryStorage` + `preserveSessionInDatabase`, where the row is
	* kept for audit. The session-delete hooks still run (so OAuth token
	* revocation and back-channel logout fire on session end), and the preserved
	* row's `expiresAt` is set to now so every liveness check that keys off the
	* session row (introspection, `/userinfo`) treats it as ended.
	*
	* Matching is restricted to still-live rows. The preserved row outlives the
	* session, so without this a later delete call (a repeated `deleteSession`,
	* or `deleteUserSessions` sweeping a user's accumulated preserved rows) would
	* re-match it and re-fire the hooks, re-dispatching back-channel logout.
	*/
	const endPreservedSessions = (where) => {
		const liveSessions = [...where, {
			field: "expiresAt",
			value: /* @__PURE__ */ new Date(),
			operator: "gt"
		}];
		return deleteManyWithHooks(liveSessions, "session", {
			fn: async () => {
				await (await getCurrentAdapter(adapter)).updateMany({
					model: "session",
					where: liveSessions,
					update: { expiresAt: /* @__PURE__ */ new Date() }
				});
			},
			executeMainFn: false
		});
	};
	async function refreshUserSessions(user) {
		if (!secondaryStorage) return;
		const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
		if (!listRaw) return;
		const now = Date.now();
		const validSessions = (safeJSONParse(listRaw) || []).filter((s) => s.expiresAt > now);
		await Promise.all(validSessions.map(async ({ token }) => {
			const cached = await secondaryStorage.get(token);
			if (!cached) return;
			const parsed = safeJSONParse(cached);
			if (!parsed) return;
			const sessionTTL = getTTLSeconds(parsed.session.expiresAt, now);
			await secondaryStorage.set(token, JSON.stringify({
				session: parsed.session,
				user
			}), Math.floor(sessionTTL));
		}));
	}
	async function getActiveSessionReferences(userId) {
		if (!secondaryStorage) return [];
		const activeSessions = await secondaryStorage.get(`active-sessions-${userId}`);
		return activeSessions ? safeJSONParse(activeSessions) || [] : [];
	}
	async function deleteCachedUserSessions(userId, sessionReferences) {
		if (!secondaryStorage) return;
		const deletedTokens = new Set(sessionReferences.map((session) => session.token));
		for (const { token } of sessionReferences) await secondaryStorage.delete(token);
		const activeSessionsKey = `active-sessions-${userId}`;
		const currentSessionReferences = await getActiveSessionReferences(userId);
		const now = Date.now();
		const remainingSessionReferences = currentSessionReferences.filter((session) => session.expiresAt > now && !deletedTokens.has(session.token));
		remainingSessionReferences.sort((a, b) => a.expiresAt - b.expiresAt);
		const furthestExpiration = remainingSessionReferences.at(-1)?.expiresAt;
		if (furthestExpiration) {
			await secondaryStorage.set(activeSessionsKey, JSON.stringify(remainingSessionReferences), getTTLSeconds(furthestExpiration, now));
			return;
		}
		await secondaryStorage.delete(activeSessionsKey);
	}
	async function queueCachedUserSessionDeletion(userId, sessionReferences) {
		if (!secondaryStorage) return;
		const references = sessionReferences ?? await getActiveSessionReferences(userId);
		await queueAfterTransactionHook(() => deleteCachedUserSessions(userId, references), { onError(error) {
			logger.error("Failed to delete committed user sessions from secondary storage", error);
		} });
	}
	async function withVerificationConsumeLock(key, fn) {
		const previous = verificationConsumeLocks.get(key) ?? Promise.resolve();
		let release;
		const current = new Promise((resolve) => {
			release = resolve;
		});
		const next = previous.catch(() => {}).then(() => current);
		verificationConsumeLocks.set(key, next);
		await previous.catch(() => {});
		try {
			return await fn();
		} finally {
			release();
			if (verificationConsumeLocks.get(key) === next) verificationConsumeLocks.delete(key);
		}
	}
	return {
		createOAuthUser: async (user, account) => {
			return runWithTransaction(adapter, async () => {
				const createdUser = await createWithHooks({
					createdAt: /* @__PURE__ */ new Date(),
					updatedAt: /* @__PURE__ */ new Date(),
					...user,
					email: user.email?.toLowerCase()
				}, "user", void 0);
				if (!createdUser) throw new APIError("BAD_REQUEST", { message: "Failed to create user" });
				return {
					user: createdUser,
					account: await createWithHooks({
						...account,
						userId: createdUser.id,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					}, "account", void 0)
				};
			});
		},
		createUser: async (user, source) => {
			const data = {
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...user,
				email: user.email?.toLowerCase()
			};
			if (options.user?.validateUserInfo) {
				const validationSource = {
					...source,
					action: "create-user"
				};
				assertValidUserInfoSource(validationSource);
				let endpointContext;
				try {
					endpointContext = getCurrentAuthEndpointContext();
				} catch (error) {
					logger.error("Unable to run validateUserInfo: missing endpoint context", error);
					throw new APIError("FORBIDDEN", {
						code: "validation_context_missing",
						message: "User validation requires an endpoint context"
					});
				}
				await assertValidUserInfo(endpointContext, {
					user: data,
					source: validationSource
				});
			}
			return await createWithHooks(data, "user", void 0);
		},
		createAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		listSessions: async (userId, options) => {
			if (databaseSessionFallbackEnabled) return (await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "userId",
					value: userId
				}, {
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}]
			})).map((session) => parseSessionOutput(ctx.options, session));
			if (secondaryStorage) {
				const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
				if (!currentList) return [];
				const list = safeJSONParse(currentList) || [];
				const now = Date.now();
				const seenTokens = /* @__PURE__ */ new Set();
				const sessions = [];
				for (const { token, expiresAt } of list) {
					if (expiresAt <= now || seenTokens.has(token)) continue;
					seenTokens.add(token);
					const data = await secondaryStorage.get(token);
					if (!data) continue;
					try {
						const parsed = typeof data === "string" ? JSON.parse(data) : data;
						if (!parsed?.session) continue;
						sessions.push(parseSessionOutput(ctx.options, {
							...parsed.session,
							expiresAt: new Date(parsed.session.expiresAt)
						}));
					} catch {
						continue;
					}
				}
				return sessions;
			}
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "userId",
					value: userId
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []]
			});
		},
		listUsers: async (limit, offset, sortBy, where) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "user",
				limit,
				offset,
				sortBy,
				where
			});
		},
		countTotalUsers: async (where) => {
			const total = await (await getCurrentAdapter(adapter)).count({
				model: "user",
				where
			});
			if (typeof total === "string") return parseInt(total);
			return total;
		},
		deleteUser: async (userId) => {
			const sessionReferences = await getActiveSessionReferences(userId);
			if (!secondaryStorage || options.session?.storeSessionInDatabase) await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "session", void 0);
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
			if (await deleteWithHooks([{
				field: "id",
				value: userId
			}], "user", void 0) !== null) await queueCachedUserSessionDeletion(userId, sessionReferences);
		},
		createSession: async (userId, dontRememberMe, override, overrideAll, storageOptions) => {
			const headers = await (async () => {
				const ctx = tryGetCurrentAuthEndpointContext();
				return ctx?.headers || ctx?.request?.headers;
			})();
			const storeInDb = options.session?.storeSessionInDatabase;
			const deferMirror = storageOptions?.deferSecondaryStorageWrites === true && databaseSessionFallbackEnabled;
			const { id: _, ...rest } = override || {};
			let sessionId;
			if (secondaryStorage && !storeInDb) {
				const generatedId = ctx.generateId({ model: "session" });
				sessionId = generatedId !== false ? generatedId : generateId();
			}
			const defaultAdditionalFields = getSessionDefaultFields(options);
			const data = {
				...sessionId ? { id: sessionId } : {},
				ipAddress: headers ? getIP(headers, options) || "" : "",
				userAgent: headers?.get("user-agent") || "",
				...rest,
				/**
				* If the user doesn't want to be remembered
				* set the session to expire in 1 day.
				* The cookie will be set to expire at the end of the session
				*/
				expiresAt: dontRememberMe ? getDate(86400, "sec") : getDate(sessionExpiration, "sec"),
				userId,
				token: generateId(32),
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...defaultAdditionalFields,
				...overrideAll ? rest : {}
			};
			const mirrorSessionToSecondaryStorage = async (sessionData) => {
				if (!secondaryStorage) return sessionData;
				const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
				let list = [];
				const now = Date.now();
				if (currentList) {
					list = safeJSONParse(currentList) || [];
					list = list.filter((session) => session.expiresAt > now && session.token !== data.token);
				}
				const sorted = [...list, {
					token: data.token,
					expiresAt: data.expiresAt.getTime()
				}].sort((a, b) => a.expiresAt - b.expiresAt);
				const furthestSessionTTL = getTTLSeconds(sorted.at(-1)?.expiresAt ?? data.expiresAt.getTime(), now);
				if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						field: "id",
						value: userId
					}]
				});
				const sessionTTL = getTTLSeconds(data.expiresAt, now);
				if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
					session: sessionData,
					user
				}), sessionTTL);
				return sessionData;
			};
			return await createWithHooks(data, "session", secondaryStorage ? {
				fn: async (sessionData) => {
					if (!deferMirror) return mirrorSessionToSecondaryStorage(sessionData);
					await queueAfterTransactionHook(async () => {
						await mirrorSessionToSecondaryStorage(sessionData);
					}, { onError(error) {
						logger.error("Failed to mirror committed session to secondary storage", error);
					} });
					return sessionData;
				},
				executeMainFn: storeInDb
			} : void 0);
		},
		findSession: async (token) => {
			if (secondaryStorage) {
				const sessionStringified = await secondaryStorage.get(token);
				if (!sessionStringified && (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase)) return null;
				if (sessionStringified) {
					const s = safeJSONParse(sessionStringified);
					if (!s) return null;
					return {
						session: parseSessionOutput(ctx.options, {
							...s.session,
							expiresAt: new Date(s.session.expiresAt),
							createdAt: new Date(s.session.createdAt),
							updatedAt: new Date(s.session.updatedAt)
						}),
						user: parseUserOutput(ctx.options, {
							...s.user,
							createdAt: new Date(s.user.createdAt),
							updatedAt: new Date(s.user.updatedAt)
						})
					};
				}
			}
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "session",
				where: [{
					value: token,
					field: "token"
				}],
				join: { user: true }
			});
			if (!result) return null;
			const { user, ...session } = result;
			if (!user) return null;
			return {
				session: parseSessionOutput(ctx.options, session),
				user: parseUserOutput(ctx.options, user)
			};
		},
		findSessions: async (sessionTokens, options) => {
			const uniqueTokens = [...new Set(sessionTokens)];
			const sessionsByToken = /* @__PURE__ */ new Map();
			const missingTokens = [];
			if (secondaryStorage) for (const sessionToken of uniqueTokens) {
				const sessionStringified = await secondaryStorage.get(sessionToken);
				if (sessionStringified) try {
					const s = typeof sessionStringified === "string" ? JSON.parse(sessionStringified) : sessionStringified;
					if (!s) continue;
					const expiresAt = new Date(s.session.expiresAt);
					if (options?.onlyActiveSessions && expiresAt <= /* @__PURE__ */ new Date()) continue;
					const session = {
						session: {
							...s.session,
							expiresAt: new Date(s.session.expiresAt)
						},
						user: {
							...s.user,
							createdAt: new Date(s.user.createdAt),
							updatedAt: new Date(s.user.updatedAt)
						}
					};
					sessionsByToken.set(sessionToken, session);
				} catch {
					continue;
				}
				else missingTokens.push(sessionToken);
			}
			const databaseTokens = secondaryStorage ? missingTokens : uniqueTokens;
			if (databaseTokens.length > 0 && (!secondaryStorage || databaseSessionFallbackEnabled)) {
				const databaseSessions = await (await getCurrentAdapter(adapter)).findMany({
					model: "session",
					limit: databaseTokens.length,
					where: [{
						field: "token",
						value: databaseTokens,
						operator: "in"
					}, ...options?.onlyActiveSessions ? [{
						field: "expiresAt",
						value: /* @__PURE__ */ new Date(),
						operator: "gt"
					}] : []],
					join: { user: true }
				});
				for (const { user, ...session } of databaseSessions) if (user) sessionsByToken.set(session.token, {
					session,
					user
				});
			}
			return uniqueTokens.flatMap((token) => {
				const session = sessionsByToken.get(token);
				return session ? [session] : [];
			});
		},
		updateSession: async (sessionToken, session) => {
			return await updateWithHooks(session, [{
				field: "token",
				value: sessionToken
			}], "session", secondaryStorage ? {
				async fn(data) {
					const currentSession = await secondaryStorage.get(sessionToken);
					if (!currentSession) return null;
					const parsedSession = safeJSONParse(currentSession);
					if (!parsedSession) return null;
					const mergedSession = {
						...parsedSession.session,
						...data,
						expiresAt: new Date(data.expiresAt ?? parsedSession.session.expiresAt),
						createdAt: new Date(parsedSession.session.createdAt),
						updatedAt: new Date(data.updatedAt ?? parsedSession.session.updatedAt)
					};
					const updatedSession = parseSessionOutput(ctx.options, mergedSession);
					const now = Date.now();
					const expiresMs = new Date(updatedSession.expiresAt).getTime();
					const sessionTTL = getTTLSeconds(expiresMs, now);
					if (sessionTTL > 0) {
						await secondaryStorage.set(sessionToken, JSON.stringify({
							session: updatedSession,
							user: parsedSession.user
						}), sessionTTL);
						const listKey = `active-sessions-${updatedSession.userId}`;
						const listRaw = await secondaryStorage.get(listKey);
						const sorted = (listRaw ? safeJSONParse(listRaw) || [] : []).filter((s) => s.token !== sessionToken && s.expiresAt > now).concat([{
							token: sessionToken,
							expiresAt: expiresMs
						}]).sort((a, b) => a.expiresAt - b.expiresAt);
						const furthestSessionExp = sorted.at(-1)?.expiresAt;
						if (furthestSessionExp && furthestSessionExp > now) await secondaryStorage.set(listKey, JSON.stringify(sorted), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(listKey);
					}
					return updatedSession;
				},
				executeMainFn: options.session?.storeSessionInDatabase
			} : void 0);
		},
		deleteSession: async (token) => {
			if (secondaryStorage) {
				const data = await secondaryStorage.get(token);
				if (data) {
					const { session } = safeJSONParse(data) ?? {};
					if (!session) {
						logger.error("Session not found in secondary storage");
						return;
					}
					const userId = session.userId;
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					if (currentList) {
						const list = safeJSONParse(currentList) || [];
						const now = Date.now();
						const filtered = list.filter((session) => session.expiresAt > now && session.token !== token);
						const furthestSessionExp = filtered.sort((a, b) => a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
						if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(`active-sessions-${userId}`);
					} else logger.error("Active sessions list not found in secondary storage");
				}
				await secondaryStorage.delete(token);
				if (!options.session?.storeSessionInDatabase) return;
				if (ctx.options.session?.preserveSessionInDatabase) {
					await endPreservedSessions([{
						field: "token",
						value: token
					}]);
					return;
				}
			}
			await deleteWithHooks([{
				field: "token",
				value: token
			}], "session", void 0);
		},
		deleteAccounts: async (userId) => {
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
		},
		/**
		* Delete an account by its primary key.
		*
		* @param id - The account row's primary key, not its accountId.
		*/
		deleteAccount: async (id) => {
			await deleteWithHooks([{
				field: "id",
				value: id
			}], "account", void 0);
		},
		deleteUserSessions: async (userId) => {
			const sessionReferences = await getActiveSessionReferences(userId);
			if (secondaryStorage) {
				if (!options.session?.storeSessionInDatabase) {
					await queueCachedUserSessionDeletion(userId, sessionReferences);
					return;
				}
				if (ctx.options.session?.preserveSessionInDatabase) {
					if (await endPreservedSessions([{
						field: "userId",
						value: userId
					}]) !== null) await queueCachedUserSessionDeletion(userId, sessionReferences);
					return;
				}
			}
			if (await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "session", void 0) !== null) await queueCachedUserSessionDeletion(userId, sessionReferences);
		},
		deleteSessions: async (sessionTokens) => {
			if (secondaryStorage) {
				await Promise.all(sessionTokens.map((token) => secondaryStorage.delete(token)));
				if (!options.session?.storeSessionInDatabase) return;
				if (ctx.options.session?.preserveSessionInDatabase) {
					await endPreservedSessions([{
						field: "token",
						value: sessionTokens,
						operator: "in"
					}]);
					return;
				}
			}
			await deleteManyWithHooks([{
				field: "token",
				value: sessionTokens,
				operator: "in"
			}], "session", void 0);
		},
		findAccountOwnerByKey: async ({ providerId, accountId }) => {
			const accountsWithUsers = await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "providerId",
					value: providerId
				}, {
					field: "accountId",
					value: accountId
				}],
				limit: 2,
				join: { user: true }
			});
			if (accountsWithUsers.length > 1) throw new BetterAuthError(`Multiple accounts match the same accountId for provider ${JSON.stringify(providerId)}. Resolve duplicate account identities before continuing.`);
			const accountWithUser = accountsWithUsers[0];
			if (!accountWithUser) return null;
			const { user, ...account } = accountWithUser;
			return user ? {
				kind: "owned",
				user,
				account
			} : {
				kind: "orphaned",
				account
			};
		},
		findUserByEmail: async (email, options) => {
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					value: email.toLowerCase(),
					field: "email"
				}],
				join: { ...options?.includeAccounts ? { account: true } : {} }
			});
			if (!result) return null;
			const { account: accounts, ...user } = result;
			return {
				user,
				accounts: accounts ?? []
			};
		},
		findUserById: async (userId) => {
			if (!userId) return null;
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					field: "id",
					value: userId
				}]
			});
		},
		linkAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		updateUser: async (userId, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "id",
				value: userId
			}], "user", void 0);
			await queueAfterTransactionHook(() => refreshUserSessions(user), { onError(error) {
				logger.error("Failed to refresh committed user sessions in secondary storage", error);
			} });
			return user;
		},
		updateUserByEmail: async (email, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "email",
				value: email.toLowerCase()
			}], "user", void 0);
			await queueAfterTransactionHook(() => refreshUserSessions(user), { onError(error) {
				logger.error("Failed to refresh committed user sessions in secondary storage", error);
			} });
			return user;
		},
		updatePassword: async (userId, password) => {
			await updateManyWithHooks({ password }, [
				{
					field: "userId",
					value: userId
				},
				{
					field: "providerId",
					value: "credential"
				},
				{
					field: "accountId",
					value: userId
				}
			], "account", void 0);
		},
		findAccounts: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		findCredentialAccount: async (userId) => {
			return (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [
					{
						field: "userId",
						value: userId
					},
					{
						field: "providerId",
						value: "credential"
					},
					{
						field: "accountId",
						value: userId
					}
				]
			});
		},
		findAccountByKey: async ({ providerId, accountId }) => {
			const accounts = await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				limit: 2,
				where: [{
					field: "providerId",
					value: providerId
				}, {
					field: "accountId",
					value: accountId
				}]
			});
			if (accounts.length > 1) throw new BetterAuthError(`Multiple accounts match the same accountId for provider ${JSON.stringify(providerId)}. Resolve duplicate account identities before continuing.`);
			return accounts[0] ?? null;
		},
		findAccountByUserId: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		updateAccount: async (id, data) => {
			return await updateWithHooks(data, [{
				field: "id",
				value: id
			}], "account", void 0);
		},
		createVerificationValue: async (data) => {
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...data,
				identifier: storedIdentifier
			}, "verification", secondaryStorage ? {
				async fn(verificationData) {
					const ttl = getTTLSeconds(verificationData.expiresAt);
					if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(verificationData), ttl);
					return verificationData;
				},
				executeMainFn: options.verification?.storeInDatabase
			} : void 0);
		},
		findVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) return parsed;
				}
				if (storageOption && storageOption !== "plain") {
					const plainCached = await secondaryStorage.get(`verification:${identifier}`);
					if (plainCached) {
						const parsed = safeJSONParse(plainCached);
						if (parsed) return parsed;
					}
				}
				if (!options.verification?.storeInDatabase) return null;
			}
			const currentAdapter = await getCurrentAdapter(adapter);
			async function findByIdentifier(id) {
				return currentAdapter.findMany({
					model: "verification",
					where: [{
						field: "identifier",
						value: id
					}],
					sortBy: {
						field: "createdAt",
						direction: "desc"
					},
					limit: 1
				});
			}
			let verification = await findByIdentifier(storedIdentifier);
			if (!verification.length && storageOption && storageOption !== "plain") verification = await findByIdentifier(identifier);
			if (!options.verification?.disableCleanup) await deleteManyWithHooks([{
				field: "expiresAt",
				value: /* @__PURE__ */ new Date(),
				operator: "lt"
			}], "verification", void 0);
			return verification[0] || null;
		},
		deleteVerificationByIdentifier: async (identifier) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) await secondaryStorage.delete(`verification:${storedIdentifier}`);
			if (!secondaryStorage || options.verification?.storeInDatabase) await deleteWithHooks([{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
		},
		/**
		* Atomically consume a single-use verification row by `identifier` and
		* return it. The first concurrent caller receives the latest row for the
		* identifier; every other caller racing against it receives `null`.
		*
		* Race-safe replacement for the `findVerificationValue` then
		* `deleteVerificationByIdentifier` pair. Callers MUST gate any state
		* change (issue session, mint token, change password) on a non-null
		* return value, because consuming one row invalidates the whole
		* identifier and stale rows cannot be replayed.
		*
		* Rows past their `expiresAt` are treated as already invalid: the row
		* is still deleted (so it cannot be replayed later) but `null` is
		* returned. Callers do not need their own `expiresAt` gate.
		*
		* The secondary-storage-only path (`storeInDatabase: false`) consumes
		* through `getAndDelete`, which is required on `SecondaryStorage` so
		* single-use values are not read and deleted as separate operations.
		*/
		consumeVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			const identifiersToTry = storageOption && storageOption !== "plain" ? [storedIdentifier, identifier] : [storedIdentifier];
			const hydrateCachedVerification = (raw) => {
				if (!raw) return null;
				const candidate = typeof raw === "string" ? safeJSONParse(raw) : typeof raw === "object" ? raw : null;
				if (!candidate) return null;
				const expiresAt = new Date(candidate.expiresAt);
				if (!Number.isFinite(expiresAt.getTime())) return null;
				return {
					...candidate,
					expiresAt
				};
			};
			let consumed = null;
			if (secondaryStorage && !options.verification?.storeInDatabase) {
				const consumeCacheKey = async (key) => {
					return hydrateCachedVerification(await secondaryStorage.getAndDelete(key));
				};
				for (const stored of identifiersToTry) {
					const cached = await consumeCacheKey(`verification:${stored}`);
					if (!cached) continue;
					await Promise.all(identifiersToTry.filter((candidate) => candidate !== stored).map((candidate) => secondaryStorage.delete(`verification:${candidate}`)));
					consumed = cached;
					break;
				}
			} else {
				const consumeByIdentifier = async (id) => withVerificationConsumeLock(`verification:${id}`, () => runWithTransaction(adapter, async () => {
					const txAdapter = await getCurrentAdapter(adapter);
					const where = [{
						field: "identifier",
						value: id
					}];
					const latest = (await txAdapter.findMany({
						model: "verification",
						where,
						sortBy: {
							field: "createdAt",
							direction: "desc"
						},
						limit: 1
					}))[0] ?? null;
					if (!latest) return null;
					return consumeOneWithHooks("verification", [{
						field: "id",
						value: latest.id
					}], async () => {
						const row = await txAdapter.consumeOne({
							model: "verification",
							where: [{
								field: "id",
								value: latest.id
							}]
						});
						if (!row) return null;
						await txAdapter.deleteMany({
							model: "verification",
							where
						});
						return row;
					}, latest);
				}));
				for (const stored of identifiersToTry) {
					consumed = await consumeByIdentifier(stored);
					if (consumed) break;
				}
				if (consumed && secondaryStorage) await Promise.all(identifiersToTry.map((stored) => secondaryStorage.delete(`verification:${stored}`)));
			}
			if (!consumed || consumed.expiresAt < /* @__PURE__ */ new Date()) return null;
			return consumed;
		},
		/**
		* First-writer-wins create keyed by a deterministic primary key derived
		* from `identifier`. Returns `true` when this caller created the row and
		* `false` when a row for the same identifier already existed.
		*
		* The dual of `consumeVerificationValue`: where consume races to delete a
		* marker exactly once, reserve races to create a marker exactly once. Use
		* it for replay tombstones (a SAML assertion id, a JWT `jti`) where the
		* first caller wins and every later caller must observe that the marker is
		* already taken.
		*
		* The `verification.identifier` column is non-unique, so uniqueness comes
		* from a deterministic primary key (`SHA-256` of `reserve:<identifier>`,
		* encoded by `encodeDeterministicId` so the configured id strategy keeps
		* it; see its note on `generateId: "serial"`).
		* The database path is atomic: the primary key turns the INSERT into the
		* first-writer-wins gate, and a duplicate is detected portably by
		* re-reading the row rather than matching adapter-specific errors.
		* Secondary-storage-only verification cannot enforce the deterministic
		* primary-key gate, so this operation fails closed unless verification is
		* backed by the database.
		*
		* The atomic guarantee requires the configured adapter to reject a
		* duplicate primary key on insert, which every real database enforces. The
		* in-memory adapter does not enforce primary-key uniqueness, so reservation
		* is best-effort there (it is intended for development and tests).
		*/
		reserveVerificationValue: async (data) => {
			const reservationId = encodeDeterministicId(new Uint8Array(await createHash("SHA-256").digest(new TextEncoder().encode("reserve:" + data.identifier))), options);
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			if (secondaryStorage && !options.verification?.storeInDatabase) throw new BetterAuthError("reserveVerificationValue requires database-backed verification storage. Set verification.storeInDatabase to true for flows that reserve verification values.");
			try {
				await adapter.create({
					model: "verification",
					data: {
						id: reservationId,
						identifier: storedIdentifier,
						value: data.value,
						expiresAt: data.expiresAt,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					},
					forceAllowId: true
				});
			} catch (error) {
				if (await adapter.findOne({
					model: "verification",
					where: [{
						field: "id",
						value: reservationId
					}]
				})) return false;
				throw error;
			}
			if (secondaryStorage) {
				const ttl = getTTLSeconds(data.expiresAt);
				if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify({
					id: reservationId,
					identifier: storedIdentifier,
					value: data.value,
					expiresAt: data.expiresAt
				}), ttl);
			}
			return true;
		},
		updateVerificationByIdentifier: async (identifier, data) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) {
						const updated = {
							...parsed,
							...data
						};
						const expiresAt = updated.expiresAt ?? parsed.expiresAt;
						const ttl = getTTLSeconds(expiresAt instanceof Date ? expiresAt : new Date(expiresAt));
						if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(updated), ttl);
						if (!options.verification?.storeInDatabase) return updated;
					}
				}
			}
			if (!secondaryStorage || options.verification?.storeInDatabase) return await updateWithHooks(data, [{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
			return data;
		},
		refreshUserSessions
	};
};
async function runPluginInit(context) {
	let options = context.options;
	const plugins = options.plugins || [];
	const pluginTrustedOrigins = [];
	const dbHooks = [];
	for (const plugin of plugins) if (plugin.init) {
		const initPromise = plugin.init(context);
		let result;
		if (isPromise(initPromise)) result = await initPromise;
		else result = initPromise;
		if (typeof result === "object") {
			if (result.options) {
				const { databaseHooks, trustedOrigins, ...restOpts } = result.options;
				if (databaseHooks) dbHooks.push({
					source: `plugin:${plugin.id}`,
					hooks: databaseHooks
				});
				if (trustedOrigins) pluginTrustedOrigins.push(trustedOrigins);
				options = defu(options, restOpts);
			}
			if (result.context) Object.assign(context, result.context);
		}
	}
	if (pluginTrustedOrigins.length > 0) {
		const allSources = [...options.trustedOrigins ? [options.trustedOrigins] : [], ...pluginTrustedOrigins];
		const staticOrigins = allSources.filter(Array.isArray).flat();
		const dynamicOrigins = allSources.filter((s) => typeof s === "function");
		if (dynamicOrigins.length > 0) options.trustedOrigins = async (request) => {
			const resolved = await Promise.all(dynamicOrigins.map((fn) => fn(request)));
			return [...staticOrigins, ...resolved.flat()].filter((v) => typeof v === "string" && v !== "");
		};
		else options.trustedOrigins = staticOrigins;
	}
	if (options.databaseHooks) dbHooks.push({
		source: "user",
		hooks: options.databaseHooks
	});
	context.internalAdapter = createInternalAdapter(context.adapter, {
		options,
		logger: context.logger,
		hooks: dbHooks,
		generateId: context.generateId
	});
	context.options = options;
}
function getInternalPlugins(options) {
	const plugins = [];
	if (options.advanced?.crossSubDomainCookies?.enabled) {}
	return plugins;
}
async function getTrustedOrigins(options, request) {
	const trustedOrigins = [];
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const allowedHosts = options.baseURL.allowedHosts;
		const proto = options.baseURL.protocol;
		for (const host of allowedHosts) if (!host.includes("://")) {
			if (!proto || proto === "https" || proto === "auto") trustedOrigins.push(`https://${host}`);
			if (proto === "http" || proto === "auto" || isLoopbackHost(host)) trustedOrigins.push(`http://${host}`);
		} else trustedOrigins.push(host);
		if (options.baseURL.fallback) try {
			trustedOrigins.push(new URL(options.baseURL.fallback).origin);
		} catch {}
	} else {
		const baseURL = getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath, request);
		if (baseURL) trustedOrigins.push(new URL(baseURL).origin);
	}
	if (options.trustedOrigins) {
		if (Array.isArray(options.trustedOrigins)) trustedOrigins.push(...options.trustedOrigins);
		if (typeof options.trustedOrigins === "function") {
			const validOrigins = await options.trustedOrigins(request);
			trustedOrigins.push(...validOrigins);
		}
	}
	const envTrustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS;
	if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(","));
	return trustedOrigins.filter((v) => Boolean(v));
}
/**
* Picks a `Request`-like or `Headers` value from a direct `auth.api` call.
* Headers are only accepted when they carry a host: without one, host
* resolution would fall back to `null` and the caller should use `fallback`
* or pass a `Request` instead.
*/
function pickSource(input) {
	if (isRequestLike(input?.request)) return input.request;
	if (!input?.headers) return void 0;
	const headers = input.headers instanceof Headers ? input.headers : new Headers(input.headers);
	if (!headers.has("host") && !headers.has("x-forwarded-host")) return;
	return headers;
}
/**
* Returns the effective `trustedProxyHeaders` value for dynamic `baseURL`
* resolution. Proxy headers (`x-forwarded-host` / `x-forwarded-proto`) are
* ignored unless the user opts in with `advanced.trustedProxyHeaders: true`,
* matching the static-config path. Deployments behind a reverse proxy that
* only exposes the public host via `x-forwarded-host` must set the flag.
*/
function resolveDynamicTrustedProxyHeaders(options) {
	return options.advanced?.trustedProxyHeaders ?? false;
}
/**
* Per-request clone with `baseURL`, `trustedOrigins`, `trustedProviders`
* and cookies rehydrated for the resolved host. Throws `BetterAuthError`
* when the URL cannot be resolved; callers on the direct-API path convert
* this to `APIError`.
*/
async function resolveRequestContext(ctx, source, trustedProxyHeaders) {
	const dynamicBaseURLConfig = ctx.options.baseURL;
	const baseURL = resolveBaseURL(dynamicBaseURLConfig, ctx.options.basePath || "/api/auth", source, void 0, trustedProxyHeaders);
	if (!baseURL) throw new BetterAuthError("Could not resolve base URL from request. Check your allowedHosts config.");
	const resolved = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
	resolved.baseURL = baseURL;
	resolved.options = {
		...ctx.options,
		baseURL: getOrigin(baseURL) || void 0
	};
	const trustedOriginOptions = {
		...resolved.options,
		baseURL: dynamicBaseURLConfig
	};
	const needsRequest = typeof ctx.options.trustedOrigins === "function" || typeof ctx.options.account?.accountLinking?.trustedProviders === "function";
	let callbackRequest;
	if (needsRequest) if (isRequestLike(source)) callbackRequest = source;
	else if (source) callbackRequest = new Request(baseURL, { headers: source });
	else callbackRequest = void 0;
	else callbackRequest = void 0;
	resolved.trustedOrigins = await getTrustedOrigins(trustedOriginOptions, callbackRequest);
	resolved.trustedProviders = await getTrustedProviders(resolved.options, callbackRequest);
	if (ctx.options.advanced?.crossSubDomainCookies?.enabled) {
		resolved.authCookies = getCookies(resolved.options);
		resolved.createAuthCookie = createCookieGetter(resolved.options);
	}
	return resolved;
}
async function getAwaitableValue(arr, item) {
	if (!arr) return void 0;
	for (const val of arr) {
		const value = typeof val === "function" ? await val() : val;
		if (value[item.field ?? "id"] === item.value) return value;
	}
}
async function getTrustedProviders(options, request) {
	const trustedProviders = options.account?.accountLinking?.trustedProviders;
	if (!trustedProviders) return [];
	if (Array.isArray(trustedProviders)) return trustedProviders.filter((v) => Boolean(v));
	return (await trustedProviders(request) ?? []).filter((v) => Boolean(v));
}
/**
* Exposes a provider-declared profile as the raw claim record used by
* provisioning hooks. Provider profile interfaces are object-shaped but do
* not need an index signature solely to satisfy this erased boundary.
*/
function toOAuthProfileRecord(profile) {
	return profile;
}
/**
* Resolves the stable account key established by an OAuth provider response.
*/
async function resolveOAuthAccountKey(provider, tokens, profile) {
	const accountKeyContext = {
		tokens,
		profile
	};
	const accountSubject = provider.accountSubject;
	const resolvedSubject = await accountSubject(accountKeyContext);
	const accountId = String(resolvedSubject);
	if (typeof resolvedSubject === "number" && !Number.isFinite(resolvedSubject) || accountId.trim().length === 0 || accountId === "undefined" || accountId === "null") throw new BetterAuthError("OAUTH_ACCOUNT_SUBJECT_INVALID");
	return {
		providerId: provider.id,
		accountId
	};
}
/**
* Resolves an OAuth account key at a direct HTTP authentication boundary.
*
* Provider resolvers are application code and can reject or return malformed
* values. Direct sign-in and linking expose all such failures as one stable
* authentication error instead of leaking implementation details or a 500.
*/
async function resolveOAuthAccountKeyForAPI(provider, tokens, profile) {
	try {
		return await resolveOAuthAccountKey(provider, tokens, profile);
	} catch {
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	}
}
/**
* Check if a string looks like encrypted data
*/
function isLikelyEncrypted(token) {
	if (token.startsWith("$ba$")) return true;
	return token.length % 2 === 0 && /^[0-9a-f]+$/i.test(token);
}
function decryptOAuthToken(token, ctx) {
	if (!token) return token;
	if (ctx.options.account?.encryptOAuthTokens) {
		if (!isLikelyEncrypted(token)) return token;
		return symmetricDecrypt({
			key: ctx.secretConfig,
			data: token
		});
	}
	return token;
}
function setTokenUtil(token, ctx) {
	if (ctx.options.account?.encryptOAuthTokens && token) return symmetricEncrypt({
		key: ctx.secretConfig,
		data: token
	});
	return token;
}
function getOAuthCallbackPath(provider) {
	if (!provider.callbackPath) return `/callback/${provider.id}`;
	return provider.callbackPath.startsWith("/") ? provider.callbackPath : `/${provider.callbackPath}`;
}
function safeCloneRequest(request) {
	if (!request) return;
	try {
		return request.clone();
	} catch {
		return new Request(request.url, {
			cache: request.cache,
			credentials: request.credentials,
			headers: request.headers,
			integrity: request.integrity,
			keepalive: request.keepalive,
			method: request.method,
			mode: request.mode,
			redirect: request.redirect,
			referrer: request.referrer,
			referrerPolicy: request.referrerPolicy,
			signal: request.signal
		});
	}
}
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600, extraPayload) {
	return await signJWT({
		email: email.toLowerCase(),
		updateTo: updateTo?.toLowerCase(),
		...extraPayload
	}, secret, expiresIn);
}
/**
* A function to send a verification email to the user
*/
async function sendVerificationEmailFn(ctx, user) {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
	const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
	await ctx.context.options.emailVerification.sendVerificationEmail({
		user,
		url,
		token
	}, ctx.request);
}
var sendVerificationEmail = createAuthEndpoint("/send-verification-email", {
	method: "POST",
	operationId: "sendVerificationEmail",
	cloneRequest: true,
	body: object({
		email: email().meta({ description: "The email to send the verification email to" }),
		callbackURL: string().meta({ description: "The URL to use for email verification callback" }).optional()
	}),
	metadata: { openapi: {
		operationId: "sendVerificationEmail",
		description: "Send a verification email to the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				email: {
					type: "string",
					description: "The email to send the verification email to",
					example: "user@example.com"
				},
				callbackURL: {
					type: "string",
					description: "The URL to use for email verification callback",
					example: "https://example.com/callback",
					nullable: true
				}
			},
			required: ["email"]
		} } } },
		responses: {
			"200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: {
						type: "boolean",
						description: "Indicates if the email was sent successfully",
						example: true
					} }
				} } }
			},
			"400": {
				description: "Bad Request",
				content: { "application/json": { schema: {
					type: "object",
					properties: { message: {
						type: "string",
						description: "Error message",
						example: "Verification email isn't enabled"
					} }
				} } }
			}
		}
	} }
}, async (ctx) => {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const { email } = ctx.body;
	const session = await getSessionFromCtx(ctx);
	if (!session) {
		/**
		* Enforce a constant-time floor so an attacker cannot distinguish
		* "email not found / already verified" (fast local JWT sign) from
		* "email found and unverified" (slow external email-send) by
		* comparing response times.
		*/
		const MINIMUM_MS = 500;
		const start = Date.now();
		const user = await ctx.context.internalAdapter.findUserByEmail(email);
		let error;
		if (!user || user.user.emailVerified) await createEmailVerificationToken(ctx.context.secret, email, void 0, ctx.context.options.emailVerification?.expiresIn);
		else try {
			await sendVerificationEmailFn(ctx, user.user);
		} catch (e) {
			error = e;
		}
		const remaining = MINIMUM_MS - (Date.now() - start);
		if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
		if (error) throw error;
		return ctx.json({ status: true });
	}
	if (session?.user.email.toLowerCase() !== email.toLowerCase()) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_MISMATCH);
	if (session?.user.emailVerified) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_ALREADY_VERIFIED);
	await sendVerificationEmailFn(ctx, session.user);
	return ctx.json({ status: true });
});
var verifyEmail = createAuthEndpoint("/verify-email", {
	method: "GET",
	operationId: "verifyEmail",
	query: object({
		token: string().meta({ description: "The token to verify the email" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Verify the email of the user",
		parameters: [{
			name: "token",
			in: "query",
			description: "The token to verify the email",
			required: true,
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			description: "The URL to redirect to after email verification",
			required: false,
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the email was verified successfully"
					}
				},
				required: ["user", "status"]
			} } }
		} }
	} }
}, async (ctx) => {
	function redirectOnError(error) {
		if (ctx.query.callbackURL) {
			const params = new URLSearchParams({ error: error.code });
			const redirectURL = appendQueryParams(ctx.query.callbackURL, params);
			throw ctx.redirect(redirectURL);
		}
		throw APIError.from("UNAUTHORIZED", error);
	}
	const { token } = ctx.query;
	let jwt;
	try {
		jwt = await jwtVerify(token, new TextEncoder().encode(ctx.context.secret), { algorithms: ["HS256"] });
	} catch (e) {
		if (e instanceof JWTExpired) return redirectOnError(BASE_ERROR_CODES.TOKEN_EXPIRED);
		return redirectOnError(BASE_ERROR_CODES.INVALID_TOKEN);
	}
	const parsed = object({
		email: email(),
		updateTo: string().optional(),
		requestType: string().optional()
	}).parse(jwt.payload);
	const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
	if (!user) return redirectOnError(BASE_ERROR_CODES.USER_NOT_FOUND);
	if (parsed.updateTo) {
		const session = await getSessionFromCtx(ctx);
		if (session && session.user.email !== parsed.email) return redirectOnError(BASE_ERROR_CODES.INVALID_USER);
		switch (parsed.requestType) {
			/**
			* User clicks confirmation -> sends verification to new email
			*/
			case "change-email-confirmation": {
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.email, parsed.updateTo, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				const url = `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`;
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: {
						...user.user,
						email: parsed.updateTo
					},
					url,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({ status: true });
			}
			/**
			* User clicks verification -> updates email
			*/
			case "change-email-verification": {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: true
				});
				if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: true
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
			/**
			* Legacy flow
			*
			* - skips two-step verification
			* - updates email immediately
			*/
			default: {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: false
				});
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: updatedUser,
					url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: false
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
		}
	}
	if (user.user.emailVerified) {
		if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
		return ctx.json({
			status: true,
			user: null
		});
	}
	if (ctx.context.options.emailVerification?.beforeEmailVerification) await ctx.context.options.emailVerification.beforeEmailVerification(user.user, ctx.request);
	const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, { emailVerified: true });
	if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
	if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
		const currentSession = await getSessionFromCtx(ctx);
		if (!currentSession || currentSession.user.email !== parsed.email) {
			const session = await ctx.context.internalAdapter.createSession(user.user.id);
			if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
			await setSessionCookie(ctx, {
				session,
				user: {
					...user.user,
					emailVerified: true
				}
			});
		} else await setSessionCookie(ctx, {
			session: currentSession.session,
			user: {
				...currentSession.user,
				emailVerified: true
			}
		});
	}
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
	return ctx.json({
		status: true,
		user: null
	});
});
function linkOAuthAccountFailure(code, message) {
	return {
		linked: false,
		error: {
			code,
			message
		}
	};
}
async function linkOAuthAccount(c, { link, userInfo, account, profile, scopes }) {
	try {
		await assertValidUserInfo(c, {
			user: {
				...userInfo,
				id: link.userId,
				email: userInfo.email ?? void 0
			},
			source: {
				action: "link-account",
				method: "oauth",
				oauth: {
					providerId: account.providerId,
					profile
				}
			}
		});
	} catch (error) {
		if (!isAPIError(error) || !error.body?.code) throw error;
		return linkOAuthAccountFailure(error.body.code, error.body.message);
	}
	if (!c.context.trustedProviders.includes(account.providerId) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
		c.context.logger.error("Unable to link account - untrusted provider");
		return linkOAuthAccountFailure(OAUTH_CALLBACK_ERROR_CODES.UNABLE_TO_LINK_ACCOUNT);
	}
	if (userInfo.email?.toLowerCase() !== link.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) return linkOAuthAccountFailure(OAUTH_CALLBACK_ERROR_CODES.EMAIL_DOES_NOT_MATCH);
	const existingAccount = await c.context.internalAdapter.findAccountByKey(account);
	if (existingAccount) {
		if (existingAccount.userId.toString() !== link.userId.toString()) return linkOAuthAccountFailure(OAUTH_CALLBACK_ERROR_CODES.ACCOUNT_ALREADY_LINKED_TO_DIFFERENT_USER);
		const mergedScope = mergeScopes(existingAccount.scope, scopes);
		const updateData = Object.fromEntries(Object.entries({
			providerId: account.providerId,
			accessToken: await setTokenUtil(account.accessToken, c.context),
			refreshToken: await setTokenUtil(account.refreshToken, c.context),
			idToken: account.idToken,
			accessTokenExpiresAt: account.accessTokenExpiresAt,
			refreshTokenExpiresAt: account.refreshTokenExpiresAt,
			scope: mergedScope || void 0
		}).filter(([_, value]) => value !== void 0));
		await c.context.internalAdapter.updateAccount(existingAccount.id, updateData);
	} else if (!await c.context.internalAdapter.createAccount({
		userId: link.userId,
		...account,
		accessToken: await setTokenUtil(account.accessToken, c.context),
		refreshToken: await setTokenUtil(account.refreshToken, c.context),
		scope: scopes?.join(",") ?? account.scope
	})) return linkOAuthAccountFailure(OAUTH_CALLBACK_ERROR_CODES.UNABLE_TO_LINK_ACCOUNT);
	await applyUpdateUserInfoOnLink(c, link.userId, userInfo);
	return { linked: true };
}
async function handleOAuthUserInfo(c, opts) {
	const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } = opts;
	const source = opts.source ?? {
		method: "oauth",
		oauth: { providerId: account.providerId }
	};
	const requireExactAccountBinding = !!opts.selectedUser || opts.requireExactAccountBinding === true;
	let pendingAccountCookie = null;
	const accountOwner = await c.context.internalAdapter.findAccountOwnerByKey({
		providerId: account.providerId,
		accountId: account.accountId
	}).catch((e) => {
		c.context.logger.error("Better auth was unable to query your database.\nError: ", e);
		redirectOnError(c, c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`, "internal_server_error");
	});
	if (accountOwner?.kind === "orphaned") {
		c.context.logger.error("OAuth account references a missing user. Repair the account before retrying authentication.");
		return {
			error: "unable to link account",
			data: null,
			isRegister: false
		};
	}
	const dbUser = await (async () => {
		if (accountOwner?.kind === "owned") {
			if (opts.selectedUser && accountOwner.user.id !== opts.selectedUser.userId) throw new APIError("CONFLICT", {
				code: "account_ownership_conflict",
				message: "Account is already linked to another user"
			});
			return {
				user: accountOwner.user,
				linkedAccount: accountOwner.account,
				accounts: [accountOwner.account]
			};
		}
		if (opts.selectedUser) {
			const selectedUser = await c.context.internalAdapter.findUserById(opts.selectedUser.userId);
			if (!selectedUser) throw new APIError("NOT_FOUND", {
				code: "user_not_found",
				message: "User not found"
			});
			return {
				user: selectedUser,
				linkedAccount: null,
				accounts: []
			};
		}
		const emailMatch = await c.context.internalAdapter.findUserByEmail(userInfo.email.toLowerCase(), { includeAccounts: true });
		if (!emailMatch) return null;
		return {
			user: emailMatch.user,
			linkedAccount: null,
			accounts: emailMatch.accounts
		};
	})().catch((e) => {
		if (isAPIError(e)) throw e;
		c.context.logger.error("Better auth was unable to query your database.\nError: ", e);
		redirectOnError(c, c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`, "internal_server_error");
	});
	let user = dbUser?.user;
	const isRegister = !user;
	if (dbUser) {
		const linkedAccount = dbUser.linkedAccount ?? dbUser.accounts.find((acc) => acc.providerId === account.providerId && acc.accountId === account.accountId);
		if (!linkedAccount) {
			const accountLinking = c.context.options.account?.accountLinking;
			const isTrustedProvider = opts.isTrustedProvider || opts.trustProviderByName !== false && c.context.trustedProviders.includes(account.providerId);
			const requireLocalEmailVerified = accountLinking?.requireLocalEmailVerified ?? true;
			if (!opts.selectedUser && (!isTrustedProvider && !userInfo.emailVerified || requireLocalEmailVerified && !dbUser.user.emailVerified || accountLinking?.enabled === false || accountLinking?.disableImplicitLinking === true)) {
				if (isDevelopment()) c.context.logger.warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
				return {
					error: "account not linked",
					data: null
				};
			}
			try {
				const { id: _accountId, ...providerUserInfo } = userInfo;
				await assertValidUserInfo(c, {
					user: {
						...providerUserInfo,
						id: dbUser.user.id,
						email: userInfo.email.toLowerCase()
					},
					source: {
						...source,
						action: "link-account"
					}
				});
				const createdAccount = await c.context.internalAdapter.linkAccount({
					providerId: account.providerId,
					accountId: account.accountId,
					userId: dbUser.user.id,
					accessToken: await setTokenUtil(account.accessToken, c.context),
					refreshToken: await setTokenUtil(account.refreshToken, c.context),
					idToken: account.idToken,
					accessTokenExpiresAt: account.accessTokenExpiresAt,
					refreshTokenExpiresAt: account.refreshTokenExpiresAt,
					scope: account.scope
				});
				if (!createdAccount) return {
					error: "unable to link account",
					data: null
				};
				if (requireExactAccountBinding && (createdAccount.accountId !== account.accountId || createdAccount.providerId !== account.providerId || createdAccount.userId !== dbUser.user.id)) throw new APIError("CONFLICT", {
					code: "account_hook_binding_conflict",
					message: "Account hook changed the selected authentication binding"
				});
				if (c.context.options.account?.storeAccountCookie) if (opts.deferNonDatabaseWrites) pendingAccountCookie = createdAccount;
				else await setAccountCookie(c, createdAccount);
			} catch (e) {
				if (isAPIError(e)) throw e;
				c.context.logger.error("Unable to link account", e);
				return {
					error: "unable to link account",
					data: null
				};
			}
			if (!opts.selectedUser && userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
			if (!opts.selectedUser) user = await applyUpdateUserInfoOnLink(c, dbUser.user.id, userInfo) ?? user;
		} else {
			const { id: _accountId, ...providerUserInfo } = userInfo;
			await assertValidUserInfo(c, {
				user: {
					...providerUserInfo,
					id: dbUser.user.id,
					email: userInfo.email.toLowerCase()
				},
				source: {
					...source,
					action: "sign-in"
				}
			});
			/**
			* `scope` intentionally omitted. Updated only via linkSocial.
			*
			* @see {@link Account.scope}
			*/
			const freshTokens = c.context.options.account?.updateAccountOnSignIn !== false ? Object.fromEntries(Object.entries({
				providerId: account.providerId,
				idToken: account.idToken,
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt
			}).filter(([_, value]) => value !== void 0)) : {};
			if (c.context.options.account?.storeAccountCookie) {
				const accountCookie = {
					...linkedAccount,
					...freshTokens
				};
				if (opts.deferNonDatabaseWrites) pendingAccountCookie = accountCookie;
				else await setAccountCookie(c, accountCookie);
			}
			if (Object.keys(freshTokens).length > 0) {
				const updatedAccount = await c.context.internalAdapter.updateAccount(linkedAccount.id, freshTokens);
				if (!updatedAccount) return {
					error: "unable to update account",
					data: null
				};
				if (requireExactAccountBinding && (updatedAccount.accountId !== account.accountId || updatedAccount.providerId !== account.providerId || updatedAccount.userId !== dbUser.user.id)) throw new APIError("CONFLICT", {
					code: "account_hook_binding_conflict",
					message: "Account hook changed the selected authentication binding"
				});
				if (opts.deferNonDatabaseWrites && pendingAccountCookie) pendingAccountCookie = updatedAccount;
			}
			if (!opts.selectedUser && userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
		}
		if (opts.selectedUser ? opts.selectedUser.profile === "update" : overrideUserInfo) {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
			const updatedUser = await c.context.internalAdapter.updateUser(dbUser.user.id, {
				name,
				image,
				...additionalUserFields,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
			});
			if (updatedUser == null) c.context.logger.warn("Could not update user info during OAuth sign in; preserving existing user for session.");
			if (opts.selectedUser && updatedUser && updatedUser.id !== opts.selectedUser.userId) throw new APIError("CONFLICT", {
				code: "user_hook_selection_conflict",
				message: "User hook changed the selected user"
			});
			user = updatedUser ?? user;
		}
	} else {
		if (disableSignUp) return {
			error: "signup disabled",
			data: null,
			isRegister: false
		};
		try {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "create");
			const accountData = {
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				idToken: account.idToken,
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope,
				providerId: account.providerId,
				accountId: account.accountId
			};
			const { createdUser, createdAccount } = await runWithTransaction(c.context.adapter, async () => {
				const createdUser = await c.context.internalAdapter.createUser({
					name,
					image,
					...additionalUserFields,
					email: userInfo.email.toLowerCase(),
					emailVerified: userInfo.emailVerified
				}, source);
				return {
					createdUser,
					createdAccount: await c.context.internalAdapter.createAccount({
						...accountData,
						userId: createdUser.id
					})
				};
			});
			if (requireExactAccountBinding && (createdAccount.accountId !== account.accountId || createdAccount.providerId !== account.providerId || createdAccount.userId !== createdUser.id)) throw new APIError("CONFLICT", {
				code: "account_hook_binding_conflict",
				message: "Account hook changed the selected authentication binding"
			});
			user = createdUser;
			if (c.context.options.account?.storeAccountCookie) if (opts.deferNonDatabaseWrites) pendingAccountCookie = createdAccount;
			else await setAccountCookie(c, createdAccount);
		} catch (e) {
			if (isAPIError(e)) throw e;
			c.context.logger.error("Unable to create OAuth user", e);
			return {
				error: "unable to create user",
				data: null,
				isRegister: false
			};
		}
	}
	if (!user) return {
		error: "unable to create user",
		data: null,
		isRegister: false
	};
	const requireEmailVerification = c.context.socialProviders.find((p) => p.id === account.providerId)?.options?.requireEmailVerification;
	if (isRegister && !user.emailVerified && (c.context.options.emailVerification?.sendOnSignUp ?? requireEmailVerification)) await dispatchVerificationEmail(c, user, callbackURL, opts.deferNonDatabaseWrites);
	if (requireEmailVerification && !user.emailVerified) {
		if (!isRegister && c.context.options.emailVerification?.sendOnSignIn) await dispatchVerificationEmail(c, user, callbackURL, opts.deferNonDatabaseWrites);
		return {
			error: OAUTH_CALLBACK_ERROR_CODES.EMAIL_NOT_VERIFIED,
			data: null,
			isRegister
		};
	}
	const session = await c.context.internalAdapter.createSession(user.id, void 0, void 0, void 0, { deferSecondaryStorageWrites: opts.deferNonDatabaseWrites === true });
	if (!session) return {
		error: "unable to create session",
		data: null,
		isRegister: false
	};
	if (requireExactAccountBinding && session.userId !== (opts.selectedUser?.userId ?? user.id)) throw new APIError("CONFLICT", {
		code: "session_hook_user_conflict",
		message: "Session hook changed the selected user"
	});
	return {
		data: {
			session,
			user
		},
		error: null,
		isRegister,
		accountCookie: pendingAccountCookie
	};
}
async function dispatchVerificationEmail(c, user, callbackURL, deferUntilAfterTransaction) {
	const sendVerificationEmail = c.context.options.emailVerification?.sendVerificationEmail;
	if (!sendVerificationEmail) return;
	const send = async () => {
		try {
			const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
			const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(callbackURL || "/")}`;
			await c.context.runInBackgroundOrAwait(sendVerificationEmail({
				user,
				url,
				token
			}, c.request));
		} catch (e) {
			c.context.logger.error("Failed to send OAuth verification email", e);
		}
	};
	if (deferUntilAfterTransaction) await queueAfterTransactionHook(send);
	else await send();
}
/**
* Apply the `account.accountLinking.updateUserInfoOnLink` policy: when enabled,
* copy the freshly linked provider's profile onto the local user, matching the
* field set persisted on sign-up. The local `email` and `emailVerified` are
* never changed, so a link can't rebind the account's identity, and
* `updateUser` drops `undefined` fields, so a provider that omits one leaves
* the existing column intact.
*
* Returns the updated user so a caller that issues a session can seed the
* cookie cache with the fresh row. Returns `undefined` when the policy is
* disabled or the update fails: a failed profile sync must not abort the link.
*/
async function applyUpdateUserInfoOnLink(c, userId, userInfo) {
	if (c.context.options.account?.accountLinking?.updateUserInfoOnLink !== true) return;
	try {
		const { email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
		const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
		return await c.context.internalAdapter.updateUser(userId, {
			name,
			image,
			...additionalUserFields
		});
	} catch (e) {
		c.context.logger.warn("Could not update user info on account link", e);
		return;
	}
}
function parseStoredScopes(scope) {
	if (!scope) return [];
	return scope.split(",").map((s) => s.trim()).filter(Boolean);
}
var listUserAccounts = createAuthEndpoint("/list-accounts", {
	method: "GET",
	use: [sessionMiddleware],
	metadata: { openapi: {
		operationId: "listUserAccounts",
		description: "List all accounts linked to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						providerId: { type: "string" },
						createdAt: {
							type: "string",
							format: "date-time"
						},
						updatedAt: {
							type: "string",
							format: "date-time"
						},
						accountId: { type: "string" },
						userId: { type: "string" },
						scopes: {
							type: "array",
							items: { type: "string" }
						}
					},
					required: [
						"id",
						"providerId",
						"createdAt",
						"updatedAt",
						"accountId",
						"userId",
						"scopes"
					]
				}
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
	return c.json(accounts.map((a) => {
		const { scope, ...parsed } = parseAccountOutput(c.context.options, a);
		return {
			...parsed,
			scopes: parseStoredScopes(scope)
		};
	}));
});
var linkSocialAccount = createAuthEndpoint("/link-social", {
	method: "POST",
	requireHeaders: true,
	body: object({
		/**
		* Callback URL to redirect to after the user has signed in.
		*/
		callbackURL: string().meta({ description: "The URL to redirect to after the user has signed in" }).optional(),
		/**
		* OAuth2 provider to use
		*/
		provider: SocialProviderListEnum,
		/**
		* ID Token for direct authentication without redirect
		*/
		idToken: object({
			token: string(),
			nonce: string().optional(),
			accessToken: string().optional(),
			refreshToken: string().optional()
		}).optional(),
		/**
		* Whether to allow sign up for new users
		*/
		requestSignUp: boolean$1().optional(),
		/**
		* Additional scopes to request when linking the account.
		* This is useful for requesting additional permissions when
		* linking a social account compared to the initial authentication.
		*/
		scopes: array(string()).meta({ description: "Additional scopes to request from the provider" }).optional(),
		/**
		* The URL to redirect to if there is an error during the link process.
		*/
		errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional(),
		/**
		* Disable automatic redirection to the provider
		*
		* This is useful if you want to handle the redirection
		* yourself like in a popup or a different tab.
		*/
		disableRedirect: boolean$1().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
		/**
		* The login hint to forward to the provider authorization endpoint.
		*/
		loginHint: string().meta({ description: "The login hint to use for the authorization code request" }).optional(),
		/**
		* Extra query parameters to append to the provider authorization URL.
		* Reserved OAuth keys (state, client_id, redirect_uri, response_type,
		* code_challenge, code_challenge_method, nonce, scope) are rejected.
		*/
		additionalParams: additionalAuthorizationParamsSchema,
		/**
		* Any additional data to pass through the oauth flow.
		*/
		additionalData: record(string(), any()).optional()
	}),
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link a social account to the user",
		operationId: "linkSocialAccount",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						description: "The authorization URL to redirect the user to"
					},
					redirect: {
						type: "boolean",
						description: "Indicates if the user should be redirected to the authorization URL"
					},
					status: { type: "boolean" }
				},
				required: ["redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!supportsIdTokenSignIn(provider)) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await verifyProviderIdToken(provider, token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const linkingUserInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken
		});
		if (!linkingUserInfo || !linkingUserInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		if (!linkingUserInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		const accountKey = await resolveOAuthAccountKeyForAPI(provider, {
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken
		}, linkingUserInfo.data);
		const linkedAccount = await c.context.internalAdapter.findAccountByKey(accountKey);
		if (linkedAccount?.userId === session.user.id) {
			const updateData = Object.fromEntries(Object.entries({
				providerId: provider.id,
				accessToken: await setTokenUtil(c.body.idToken.accessToken, c.context),
				idToken: token,
				refreshToken: await setTokenUtil(c.body.idToken.refreshToken, c.context)
			}).filter(([_, value]) => value !== void 0));
			await c.context.internalAdapter.updateAccount(linkedAccount.id, updateData);
			await applyUpdateUserInfoOnLink(c, session.user.id, linkingUserInfo.user);
			return c.json({
				url: "",
				status: true,
				redirect: false
			});
		}
		if (linkedAccount) throw APIError.from("CONFLICT", BASE_ERROR_CODES.SOCIAL_ACCOUNT_ALREADY_LINKED);
		if (!c.context.trustedProviders.includes(provider.id) && !linkingUserInfo.user.emailVerified || c.context.options.account?.accountLinking?.enabled === false) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - linking not allowed",
			code: "LINKING_NOT_ALLOWED"
		});
		if (linkingUserInfo.user.email?.toLowerCase() !== session.user.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - different emails not allowed",
			code: "LINKING_DIFFERENT_EMAILS_NOT_ALLOWED"
		});
		try {
			await c.context.internalAdapter.createAccount({
				userId: session.user.id,
				...accountKey,
				accessToken: await setTokenUtil(c.body.idToken.accessToken, c.context),
				idToken: token,
				refreshToken: await setTokenUtil(c.body.idToken.refreshToken, c.context)
			});
		} catch {
			throw APIError.from("EXPECTATION_FAILED", {
				message: "Account not linked - unable to create account",
				code: "LINKING_FAILED"
			});
		}
		await applyUpdateUserInfoOnLink(c, session.user.id, linkingUserInfo.user);
		return c.json({
			url: "",
			status: true,
			redirect: false
		});
	}
	const idTokenNonce = generateIdTokenNonce(provider);
	const state = await generateState(c, {
		link: {
			userId: session.user.id,
			email: session.user.email
		},
		additionalData: c.body.additionalData,
		idTokenNonce
	});
	const url = await provider.createAuthorizationURL({
		state: state.state,
		codeVerifier: state.codeVerifier,
		idTokenNonce,
		redirectURI: `${c.context.baseURL}${getOAuthCallbackPath(provider)}`,
		scopes: c.body.scopes,
		loginHint: c.body.loginHint,
		additionalParams: c.body.additionalParams
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var unlinkAccount = createAuthEndpoint("/unlink-account", {
	method: "POST",
	body: object({ accountId: string().meta({ description: "The Better Auth account ID to unlink" }) }),
	use: [freshSessionMiddleware],
	metadata: { openapi: {
		description: "Unlink an account",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { accountId } = ctx.body;
	const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
	if (accounts.length === 1 && !ctx.context.options.account?.accountLinking?.allowUnlinkingAll) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT);
	const accountExist = accounts.find((account) => account.id === accountId);
	if (!accountExist) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	await ctx.context.internalAdapter.deleteAccount(accountExist.id);
	return ctx.json({ status: true });
});
/**
* Resolves the user id an account-token operation should act on.
*
* A caller reaching the server over HTTP (a request or session headers are
* present) must have a valid session, and that session's user always wins.
* A trusted server-side `auth.api` caller with no session may instead name a
* `userId` directly. Throws `UNAUTHORIZED` when an HTTP caller is
* unauthenticated, and `USER_ID_OR_SESSION_REQUIRED` when neither a session
* nor a `userId` is available.
*
* When a durable store is authoritative, bypasses the cookie cache: these
* routes mint or refresh provider access tokens, so a server-side session
* revocation must take effect immediately rather than waiting for the cached
* cookie to expire. DB-less deployments keep the session in the cookie itself,
* so the cache is left in place for them.
*/
async function resolveUserId(ctx, userId) {
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session && (ctx.request || ctx.headers)) throw ctx.error("UNAUTHORIZED");
	const resolvedUserId = session?.user?.id || userId;
	if (!resolvedUserId) throw APIError.from("BAD_REQUEST", {
		message: "Either userId or session is required",
		code: "USER_ID_OR_SESSION_REQUIRED"
	});
	return resolvedUserId;
}
var accountSelectionSchema = union([strictObject({
	accountId: string().meta({ description: "The Better Auth account ID" }),
	userId: string().meta({ description: "The user ID associated with the account" }).optional()
}), strictObject({
	useAccountCookie: literal(true).meta({ description: "Select the current OAuth account from its signed cookie" }),
	userId: string().meta({ description: "The user ID associated with the account" }).optional()
})]);
function matchesAccountSelection(ctx, account, { resolvedUserId, selection }) {
	return (!shouldBindAccountCookieToSessionUser(ctx.context.options) || account.userId === resolvedUserId) && ("accountId" in selection ? account.id === selection.accountId : true);
}
/**
* Resolves an account from exactly one explicit source.
*
* A local account ID is resolved from the database. A signed account cookie is
* used only when the caller explicitly selects it, which keeps stateless OAuth
* flows usable without letting cached cookie data satisfy a row-ID lookup.
*/
async function resolveUserAccount(ctx, { resolvedUserId, selection }) {
	if ("accountId" in selection) {
		const account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((candidate) => candidate.id === selection.accountId);
		if (account) return {
			account,
			accountCookie: null
		};
	} else if (ctx.context.options.account?.storeAccountCookie) {
		const accountCookie = await getAccountCookie(ctx);
		if (accountCookie && matchesAccountSelection(ctx, accountCookie, {
			resolvedUserId,
			selection
		})) return {
			account: accountCookie,
			accountCookie
		};
	}
	throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
}
/**
* Fetches a currently-valid access token for a user's provider account,
* refreshing and persisting it when it is within five seconds of expiry.
* Shared by the `/get-access-token` endpoint and `/account-info` so both
* resolve and refresh tokens through one path.
*/
async function getValidAccessToken(ctx, { resolvedUserId, selection, account: resolvedAccount }) {
	const account = resolvedAccount ?? (await resolveUserAccount(ctx, {
		resolvedUserId,
		selection
	})).account;
	if (!matchesAccountSelection(ctx, account, {
		resolvedUserId,
		selection
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${account.providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	try {
		let newTokens = null;
		const accessTokenExpired = account.accessTokenExpiresAt && new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
		if (account.refreshToken && accessTokenExpired && provider.refreshAccessToken) {
			const refreshToken = await decryptOAuthToken(account.refreshToken, ctx.context);
			newTokens = await provider.refreshAccessToken(refreshToken, ctx);
			const updatedData = {
				accessToken: await setTokenUtil(newTokens?.accessToken, ctx.context),
				accessTokenExpiresAt: newTokens?.accessTokenExpiresAt,
				refreshToken: newTokens?.refreshToken ? await setTokenUtil(newTokens.refreshToken, ctx.context) : account.refreshToken,
				refreshTokenExpiresAt: newTokens?.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt,
				idToken: newTokens?.idToken || account.idToken
			};
			let updatedAccount = null;
			if (account.id) updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, updatedData);
			if (ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
				...account,
				...updatedAccount ?? updatedData
			});
		}
		const accessTokenExpiresAt = (() => {
			if (newTokens?.accessTokenExpiresAt) {
				if (typeof newTokens.accessTokenExpiresAt === "string") return new Date(newTokens.accessTokenExpiresAt);
				return newTokens.accessTokenExpiresAt;
			}
			if (account.accessTokenExpiresAt) {
				if (typeof account.accessTokenExpiresAt === "string") return new Date(account.accessTokenExpiresAt);
				return account.accessTokenExpiresAt;
			}
		})();
		return {
			accessToken: newTokens?.accessToken ?? await decryptOAuthToken(account.accessToken ?? "", ctx.context),
			accessTokenExpiresAt,
			scopes: parseStoredScopes(account.scope),
			idToken: newTokens?.idToken ?? account.idToken ?? void 0
		};
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to get a valid access token",
			code: "FAILED_TO_GET_ACCESS_TOKEN"
		});
	}
}
var getAccessToken = createAuthEndpoint("/get-access-token", {
	method: "POST",
	body: accountSelectionSchema,
	metadata: { openapi: {
		description: "Get a valid access token, doing a refresh if needed",
		responses: {
			200: {
				description: "A Valid access token",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { userId } = ctx.body;
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId: await resolveUserId(ctx, userId),
		selection: ctx.body
	});
	return ctx.json(tokens);
});
var refreshToken = createAuthEndpoint("/refresh-token", {
	method: "POST",
	body: accountSelectionSchema,
	metadata: { openapi: {
		description: "Refresh the access token using a refresh token",
		responses: {
			200: {
				description: "Access token refreshed successfully",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						refreshToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						},
						refreshTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { userId } = ctx.body;
	const { account, accountCookie } = await resolveUserAccount(ctx, {
		resolvedUserId: await resolveUserId(ctx, userId),
		selection: ctx.body
	});
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${account.providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	if (!provider.refreshAccessToken) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${account.providerId} does not support token refreshing.`,
		code: "TOKEN_REFRESH_NOT_SUPPORTED"
	});
	const refreshToken = account.refreshToken ?? void 0;
	if (!refreshToken) throw APIError.from("BAD_REQUEST", {
		message: "Refresh token not found",
		code: "REFRESH_TOKEN_NOT_FOUND"
	});
	try {
		const decryptedRefreshToken = await decryptOAuthToken(refreshToken, ctx.context);
		const tokens = await provider.refreshAccessToken(decryptedRefreshToken, ctx);
		const resolvedRefreshToken = tokens.refreshToken ? await setTokenUtil(tokens.refreshToken, ctx.context) : refreshToken;
		const resolvedRefreshTokenExpiresAt = tokens.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt;
		const updatedTokenData = {
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			refreshToken: resolvedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			idToken: tokens.idToken || account.idToken
		};
		let updatedAccount = null;
		if (account.id)
 /**
		* `scope` intentionally omitted. Refresh response may be narrower.
		*
		* @see {@link Account.scope}
		*/
		updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, updatedTokenData);
		if (accountCookie?.id === account.id && ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
			...accountCookie,
			...updatedAccount ?? updatedTokenData
		});
		const responseScope = updatedAccount?.scope ?? account.scope;
		return ctx.json({
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken ?? decryptedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: responseScope,
			idToken: tokens.idToken || account.idToken,
			providerId: account.providerId,
			accountId: account.id
		});
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to refresh access token",
			code: "FAILED_TO_REFRESH_ACCESS_TOKEN"
		});
	}
});
var accountInfo = createAuthEndpoint("/account-info", {
	method: "GET",
	metadata: { openapi: {
		description: "Get the account info provided by the provider",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						properties: {
							name: { type: "string" },
							email: {
								type: "string",
								nullable: true
							},
							image: { type: "string" },
							emailVerified: { type: "boolean" }
						},
						required: ["emailVerified"]
					},
					account: {
						type: "object",
						properties: {
							id: { type: "string" },
							providerId: { type: "string" },
							accountId: { type: "string" }
						},
						required: [
							"id",
							"providerId",
							"accountId"
						],
						additionalProperties: false
					},
					data: {
						type: "object",
						properties: {},
						additionalProperties: true
					}
				},
				required: [
					"user",
					"data",
					"account"
				],
				additionalProperties: false
			} } }
		} }
	} },
	query: accountSelectionSchema
}, async (ctx) => {
	const { userId } = ctx.query;
	const resolvedUserId = await resolveUserId(ctx, userId);
	const { account } = await resolveUserAccount(ctx, {
		resolvedUserId,
		selection: ctx.query
	});
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: "Account is not associated with a configured social provider.",
		code: "PROVIDER_NOT_CONFIGURED"
	});
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId,
		selection: ctx.query,
		account
	});
	if (!tokens.accessToken) throw APIError.from("BAD_REQUEST", {
		message: "Access token not found",
		code: "ACCESS_TOKEN_NOT_FOUND"
	});
	const info = await provider.getUserInfo({
		...tokens,
		accessToken: tokens.accessToken
	});
	if (!info) throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	return ctx.json({
		...info,
		account: {
			id: account.id,
			providerId: account.providerId,
			accountId: account.accountId
		}
	});
});
/**
* Turns a provider callback into a verified identity. It checks that the
* callback answers this authorization request, exchanges the code, and
* resolves the user and account key.
*
* Every route that completes a provider callback goes through here, so the
* routes run the same checks.
*/
async function exchangeOAuthCallback(ctx, provider, callback) {
	if (callback.iss && provider.issuer && callback.iss !== provider.issuer) {
		ctx.context.logger.error("OAuth issuer mismatch", {
			expected: provider.issuer,
			received: callback.iss
		});
		return { error: OAUTH_CALLBACK_ERROR_CODES.ISSUER_MISMATCH };
	}
	if (provider.requiresIdTokenNonce && !callback.idTokenNonce) {
		ctx.context.logger.error("OAuth id_token nonce binding required but no expected nonce was found in state", { providerId: provider.id });
		return { error: OAUTH_CALLBACK_ERROR_CODES.NONCE_BINDING_MISSING };
	}
	let tokens;
	try {
		tokens = await provider.validateAuthorizationCode({
			code: callback.code,
			codeVerifier: callback.codeVerifier,
			deviceId: callback.deviceId,
			redirectURI: `${ctx.context.baseURL}${getOAuthCallbackPath(provider)}`
		});
	} catch (error) {
		ctx.context.logger.error("Failed to validate authorization code", error);
		return { error: OAUTH_CALLBACK_ERROR_CODES.INVALID_CODE };
	}
	if (!tokens) return { error: OAUTH_CALLBACK_ERROR_CODES.INVALID_CODE };
	const result = await provider.getUserInfo({
		...tokens,
		expectedIdTokenNonce: callback.idTokenNonce,
		/**
		* The user object from the provider
		* This is only available for some providers like Apple
		*/
		user: safeJSONParse(callback.user) ?? void 0
	});
	if (!result?.user) {
		ctx.context.logger.error("Unable to get user info");
		return { error: OAUTH_CALLBACK_ERROR_CODES.UNABLE_TO_GET_USER_INFO };
	}
	const accountKey = await resolveOAuthAccountKey(provider, tokens, result.data).catch((error) => {
		ctx.context.logger.error("Unable to derive provider account identity", {
			providerId: provider.id,
			error
		});
		return null;
	});
	if (!accountKey) return { error: OAUTH_CALLBACK_ERROR_CODES.UNABLE_TO_GET_USER_INFO };
	return {
		tokens,
		userInfo: result.user,
		providerProfile: toOAuthProfileRecord(result.data),
		accountKey
	};
}
var schema$1 = object({
	code: string().optional(),
	error: string().optional(),
	device_id: string().optional(),
	error_description: string().optional(),
	state: string().optional(),
	user: string().optional(),
	iss: string().optional()
});
var callbackOAuth = createAuthEndpoint("/callback/:id", {
	method: ["GET", "POST"],
	operationId: "handleOAuthCallback",
	body: schema$1.optional(),
	query: schema$1.optional(),
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"]
	}
}, async (c) => {
	let queryOrBody;
	const defaultErrorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	if (c.method === "POST") {
		const postData = c.body ? schema$1.parse(c.body) : {};
		const queryData = c.query ? schema$1.parse(c.query) : {};
		const mergedData = schema$1.parse({
			...postData,
			...queryData
		});
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(mergedData)) if (value !== void 0 && value !== null) params.set(key, String(value));
		const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
		throw c.redirect(redirectURL);
	}
	try {
		if (c.method === "GET") queryOrBody = schema$1.parse(c.query);
		else if (c.method === "POST") queryOrBody = schema$1.parse(c.body);
		else throw new Error("Unsupported method");
	} catch (e) {
		c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
		const redirectURL = appendQueryParams(defaultErrorURL, new URLSearchParams({ error: "invalid_callback_request" }));
		throw c.redirect(redirectURL);
	}
	const { code, error, state, error_description, device_id, user: userData, iss } = queryOrBody;
	if (state === void 0 && code) {
		const provider = await getAwaitableValue(c.context.socialProviders, { value: c.params.id });
		if (provider?.allowIdpInitiated) {
			const idTokenNonce = generateIdTokenNonce(provider);
			const { state: freshState, codeVerifier } = await generateState(c, { idTokenNonce });
			const authUrl = await provider.createAuthorizationURL({
				state: freshState,
				codeVerifier,
				idTokenNonce,
				redirectURI: `${c.context.baseURL}${getOAuthCallbackPath(provider)}`
			});
			throw c.redirect(authUrl.toString());
		}
	}
	if (!state) {
		c.context.logger.error("State not found", error);
		const redirectURL = appendQueryParams(defaultErrorURL, new URLSearchParams({ error: "state_not_found" }));
		throw c.redirect(redirectURL);
	}
	const { codeVerifier, callbackURL, link, errorURL, newUserURL, requestSignUp, idTokenNonce } = await parseState(c);
	function redirectOnError(error, description) {
		const baseURL = errorURL ?? defaultErrorURL;
		const params = new URLSearchParams({ error });
		if (description) params.set("error_description", description);
		const redirectURL = appendQueryParams(baseURL, params);
		throw c.redirect(redirectURL);
	}
	if (error) redirectOnError(error, error_description);
	if (!code) {
		c.context.logger.warn("Code not found");
		throw redirectOnError(OAUTH_CALLBACK_ERROR_CODES.NO_CODE);
	}
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.params.id });
	if (!provider) {
		c.context.logger.warn("OAuth provider not found", { providerId: c.params.id });
		throw redirectOnError(OAUTH_CALLBACK_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	const exchanged = await exchangeOAuthCallback(c, provider, {
		code,
		codeVerifier,
		iss,
		deviceId: device_id,
		user: userData,
		idTokenNonce
	});
	if (exchanged.error) throw redirectOnError(exchanged.error);
	const { tokens, userInfo, providerProfile, accountKey } = exchanged;
	const { accountId } = accountKey;
	if (!callbackURL) {
		c.context.logger.error("No callback URL found");
		throw redirectOnError(OAUTH_CALLBACK_ERROR_CODES.NO_CALLBACK_URL);
	}
	const accountData = {
		...accountKey,
		...tokens,
		scope: tokens.scopes?.join(",")
	};
	if (link) {
		const linkResult = await linkOAuthAccount(c, {
			link,
			userInfo,
			account: accountData,
			profile: providerProfile,
			scopes: tokens.scopes
		});
		if (!linkResult.linked) return redirectOnError(linkResult.error.code, linkResult.error.message);
		throw c.redirect(callbackURL);
	}
	if (!userInfo.email) {
		c.context.logger.error(missingEmailLogMessage(provider.id));
		return redirectOnError(OAUTH_CALLBACK_ERROR_CODES.EMAIL_NOT_FOUND);
	}
	let result;
	try {
		result = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo,
				id: accountId,
				email: userInfo.email,
				name: userInfo.name || ""
			},
			account: accountData,
			callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !requestSignUp || provider.options?.disableSignUp,
			overrideUserInfo: provider.options?.overrideUserInfoOnSignIn,
			source: {
				method: "oauth",
				oauth: {
					providerId: provider.id,
					profile: providerProfile
				}
			}
		});
	} catch (e) {
		if (isAPIError(e) && e.body?.code) redirectOnError(e.body.code, e.body.message);
		throw e;
	}
	if (result.error) {
		c.context.logger.error(result.error.split(" ").join("_"));
		return redirectOnError(result.error.split(" ").join("_"));
	}
	const { session, user } = result.data;
	await setSessionCookie(c, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw c.redirect(toRedirectTo);
});
function sanitize(input) {
	return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, "&amp;");
}
var html = (options, code = "Unknown", description = null) => {
	const custom = options.onAPIError?.customizeDefaultErrorPage;
	return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || "var(--background)"};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || "0.875rem"};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || "1.5rem"};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || "2.25rem"};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || "3rem"};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || "0.625rem"};
        --default-mono-font-family: ${custom?.font?.monoFamily || "var(--font-geist-mono)"};
        --primary: ${custom?.colors?.primary || "black"};
        --primary-foreground: ${custom?.colors?.primaryForeground || "white"};
        --background: ${custom?.colors?.background || "white"};
        --foreground: ${custom?.colors?.foreground || "oklch(0.271 0 0)"};
        --border: ${custom?.colors?.border || "oklch(0.89 0 0)"};
        --destructive: ${custom?.colors?.destructive || "oklch(0.55 0.15 25.723)"};
        --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.545 0 0)"};
        --corner-border: ${custom?.colors?.cornerBorder || "#404040"};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || "white"};
          --primary-foreground: ${custom?.colors?.primaryForeground || "black"};
          --background: ${custom?.colors?.background || "oklch(0.15 0 0)"};
          --foreground: ${custom?.colors?.foreground || "oklch(0.98 0 0)"};
          --border: ${custom?.colors?.border || "oklch(0.27 0 0)"};
          --destructive: ${custom?.colors?.destructive || "oklch(0.65 0.15 25.723)"};
          --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.65 0 0)"};
          --corner-border: ${custom?.colors?.cornerBorder || "#a0a0a0"};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${custom?.disableBackgroundGrid ? "" : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || "var(--background)"};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || "var(--background)"};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${custom?.disableCornerDecorations ? "" : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`}

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? "transparent" : custom?.colors?.titleBorder || "var(--destructive)"};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || "var(--foreground)"};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find <a href='https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>more information about the error</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
var error = createAuthEndpoint("/error", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Displays an error page",
			responses: { "200": {
				description: "Success",
				content: { "text/html": { schema: {
					type: "string",
					description: "The HTML content of the error page"
				} } }
			} }
		}
	}
}, async (c) => {
	const url = new URL(c.request?.url || "");
	const unsanitizedCode = url.searchParams.get("error") || "UNKNOWN";
	const unsanitizedDescription = url.searchParams.get("error_description") || null;
	const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || "") ? unsanitizedCode : "UNKNOWN";
	const safeDescription = unsanitizedDescription ? sanitize(unsanitizedDescription) : null;
	const params = new URLSearchParams();
	params.set("error", safeCode);
	if (unsanitizedDescription) params.set("error_description", unsanitizedDescription);
	const options = c.context.options;
	const errorURL = options.onAPIError?.errorURL;
	if (errorURL) {
		const redirectURL = appendQueryParams(errorURL, params);
		return new Response(null, {
			status: 302,
			headers: { Location: redirectURL }
		});
	}
	if (isProduction && !options.onAPIError?.customizeDefaultErrorPage) return new Response(null, {
		status: 302,
		headers: { Location: `/?${params.toString()}` }
	});
	return new Response(html(c.context.options, safeCode, safeDescription), { headers: { "Content-Type": "text/html" } });
});
var ok = createAuthEndpoint("/ok", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Check if the API is working",
			responses: { "200": {
				description: "API is working",
				content: { "application/json": { schema: {
					type: "object",
					properties: { ok: {
						type: "boolean",
						description: "Indicates if the API is working"
					} },
					required: ["ok"]
				} } }
			} }
		}
	}
}, async (ctx) => {
	return ctx.json({ ok: true });
});
function assertPasswordNotTooShort(ctx, password) {
	if (password.length < ctx.context.password.config.minPasswordLength) {
		ctx.context.logger.warn("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
}
function assertPasswordNotTooLong(ctx, password) {
	if (password.length > ctx.context.password.config.maxPasswordLength) {
		ctx.context.logger.warn("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
}
/**
* Sets a user's credential password after a reset, revoking their sessions
* when `emailAndPassword.revokeSessionsOnPasswordReset` is enabled.
*
* `consumeResetToken` spends the single-use reset token or OTP and throws when
* it is no longer valid. It runs first inside the same transaction as
* revocation and the password write, so a failure in any of them leaves all
* three unchanged and the user can retry. Verification values held only in
* secondary storage are consumed with `getAndDelete`, which can't roll back,
* so a later failure there still spends the token. Secondary-storage sessions are
* removed by an after-commit hook, so they can't roll back with the write.
* Sessions are revoked before the write so that on an adapter without
* transactions a failure still keeps the old password rather than committing a
* new one while existing sessions stay valid.
*/
async function resetCredentialPassword(ctx, userId, passwordHash, consumeResetToken) {
	await runWithTransaction(ctx.context.adapter, async () => {
		await consumeResetToken?.();
		if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteUserSessions(userId);
		if (!await ctx.context.internalAdapter.findCredentialAccount(userId)) {
			await ctx.context.internalAdapter.createAccount({
				userId,
				providerId: "credential",
				accountId: userId,
				password: passwordHash
			});
			return;
		}
		await ctx.context.internalAdapter.updatePassword(userId, passwordHash);
	});
}
async function validatePassword(ctx, data) {
	assertPasswordNotTooLong(ctx, data.password);
	const credentialAccount = await ctx.context.internalAdapter.findCredentialAccount(data.userId);
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword) return false;
	return await ctx.context.password.verify({
		hash: currentPassword,
		password: data.password
	});
}
async function checkPassword(userId, c) {
	const password = c.body.password;
	if (typeof password === "string") assertPasswordNotTooLong(c, password);
	const credentialAccount = await c.context.internalAdapter.findCredentialAccount(userId);
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword || !password) {
		if (password) await c.context.password.hash(password);
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (!await c.context.password.verify({
		hash: currentPassword,
		password
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return true;
}
function redirectError(ctx, callbackURL, query) {
	const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
	const url = new URL(callbackURL, ctx.baseURL);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
var requestPasswordReset = createAuthEndpoint("/request-password-reset", {
	method: "POST",
	body: object({
		/**
		* The email address of the user to send a password reset email to.
		*/
		email: email().meta({ description: "The email address of the user to send a password reset email to" }),
		/**
		* The URL to redirect the user to reset their password.
		* If the token isn't valid or expired, it'll be redirected with a query parameter `?
		* error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
		* token=VALID_TOKEN
		*/
		redirectTo: string().meta({ description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN" }).optional()
	}),
	metadata: { openapi: {
		operationId: "requestPasswordReset",
		description: "Send a password reset email to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					status: { type: "boolean" },
					message: { type: "string" }
				}
			} } }
		} }
	} },
	use: [originCheck((ctx) => ctx.body.redirectTo)]
}, async (ctx) => {
	if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
		ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!");
		throw APIError.from("BAD_REQUEST", {
			message: "Reset password isn't enabled",
			code: "RESET_PASSWORD_DISABLED"
		});
	}
	const { email, redirectTo } = ctx.body;
	const user = await ctx.context.internalAdapter.findUserByEmail(email, { includeAccounts: true });
	if (!user) {
		/**
		* We simulate the verification token generation and the database lookup
		* to mitigate timing attacks.
		*/
		generateId(24);
		await ctx.context.internalAdapter.findVerificationValue("dummy-verification-token");
		ctx.context.logger.warn("Reset Password: User not found");
		return ctx.json({
			status: true,
			message: "If this email exists in our system, check your email for the reset link"
		});
	}
	const expiresAt = getDate(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || 3600, "sec");
	const verificationToken = generateId(24);
	await ctx.context.internalAdapter.createVerificationValue({
		value: user.user.id,
		identifier: `reset-password:${verificationToken}`,
		expiresAt
	});
	const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : "";
	const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
	await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.sendResetPassword({
		user: user.user,
		url,
		token: verificationToken
	}, ctx.request));
	return ctx.json({
		status: true,
		message: "If this email exists in our system, check your email for the reset link"
	});
});
var requestPasswordResetCallback = createAuthEndpoint("/reset-password/:token", {
	method: "GET",
	operationId: "resetPasswordCallback",
	query: object({ callbackURL: string().meta({ description: "The URL to redirect the user to reset their password" }) }),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		operationId: "resetPasswordCallback",
		description: "Redirects the user to the callback URL with the token",
		parameters: [{
			name: "token",
			in: "path",
			required: true,
			description: "The token to reset the password",
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			required: true,
			description: "The URL to redirect the user to reset their password",
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { token: { type: "string" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { token } = ctx.params;
	const { callbackURL } = ctx.query;
	if (!token || !callbackURL) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	throw ctx.redirect(redirectCallback(ctx.context, callbackURL, { token }));
});
var resetPassword = createAuthEndpoint("/reset-password", {
	method: "POST",
	operationId: "resetPassword",
	query: object({ token: string().optional() }).optional(),
	body: object({
		newPassword: string().meta({ description: "The new password to set" }),
		token: string().meta({ description: "The token to reset the password" }).optional()
	}),
	metadata: { openapi: {
		operationId: "resetPassword",
		description: "Reset the password for a user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token || ctx.query?.token;
	if (!token) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const { newPassword } = ctx.body;
	assertPasswordNotTooShort(ctx, newPassword);
	assertPasswordNotTooLong(ctx, newPassword);
	const id = `reset-password:${token}`;
	const verification = await ctx.context.internalAdapter.findVerificationValue(id);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const userId = verification.value;
	const user = await ctx.context.internalAdapter.findUserById(userId);
	if (!user) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.USER_NOT_FOUND);
	await resetCredentialPassword(ctx, userId, await ctx.context.password.hash(newPassword), async () => {
		if (!await ctx.context.internalAdapter.consumeVerificationValue(id)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	});
	if (ctx.context.options.emailAndPassword?.onPasswordReset) await ctx.context.options.emailAndPassword.onPasswordReset({ user }, ctx.request);
	return ctx.json({ status: true });
});
var verifyPassword$1 = createAuthEndpoint("/verify-password", {
	method: "POST",
	body: object({ 
	/**
	* The password to verify
	*/
password: string().meta({ description: "The password to verify" }) }),
	metadata: {
		scope: "server",
		openapi: {
			operationId: "verifyPassword",
			description: "Verify the current user's password",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: { type: "boolean" } }
				} } }
			} }
		}
	},
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { password } = ctx.body;
	const session = ctx.context.session;
	if (!await validatePassword(ctx, {
		password,
		userId: session.user.id
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return ctx.json({ status: true });
});
var socialSignInBodySchema = object({
	/**
	* Callback URL to redirect to after the user
	* has signed in.
	*/
	callbackURL: string().meta({ description: "Callback URL to redirect to after the user has signed in" }).optional(),
	/**
	* callback url to redirect if the user is newly registered.
	*
	* useful if you have different routes for existing users and new users
	*/
	newUserCallbackURL: string().optional(),
	/**
	* Callback url to redirect to if an error happens
	*
	* If it's initiated from the client sdk this defaults to
	* the current url.
	*/
	errorCallbackURL: string().meta({ description: "Callback URL to redirect to if an error happens" }).optional(),
	/**
	* OAuth2 provider to use`
	*/
	provider: SocialProviderListEnum,
	/**
	* Disable automatic redirection to the provider
	*
	* This is useful if you want to handle the redirection
	* yourself like in a popup or a different tab.
	*/
	disableRedirect: boolean$1().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
	/**
	* ID token from the provider
	*
	* This is used to sign in the user
	* if the user is already signed in with the
	* provider in the frontend.
	*
	* Only applicable if the provider supports
	* it. Currently only `apple` and `google` is
	* supported out of the box.
	*/
	idToken: optional(object({
		/**
		* ID token from the provider
		*/
		token: string().meta({ description: "ID token from the provider" }),
		/**
		* The nonce used to generate the token
		*/
		nonce: string().meta({ description: "Nonce used to generate the token" }).optional(),
		/**
		* Access token from the provider
		*/
		accessToken: string().meta({ description: "Access token from the provider" }).optional(),
		/**
		* Refresh token from the provider
		*/
		refreshToken: string().meta({ description: "Refresh token from the provider" }).optional(),
		/**
		* Expiry date of the token
		*/
		expiresAt: number().meta({ description: "Expiry date of the token" }).optional(),
		/**
		* The user object from the provider.
		* This is only available for some providers like Apple.
		*/
		user: object({
			name: object({
				firstName: string().optional(),
				lastName: string().optional()
			}).optional(),
			email: string().optional()
		}).meta({ description: "The user object from the provider. Only available for some providers like Apple." }).optional()
	})),
	scopes: array(string()).meta({ description: "Array of scopes to request from the provider. This will override the default scopes passed." }).optional(),
	/**
	* Explicitly request sign-up
	*
	* Should be used to allow sign up when
	* disableImplicitSignUp for this provider is
	* true
	*/
	requestSignUp: boolean$1().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider" }).optional(),
	/**
	* The login hint to use for the authorization code request
	*/
	loginHint: string().meta({ description: "The login hint to use for the authorization code request" }).optional(),
	/**
	* Extra query parameters to append to the provider authorization URL.
	* Reserved OAuth keys (state, client_id, redirect_uri, response_type,
	* code_challenge, code_challenge_method, nonce, scope) are rejected.
	*/
	additionalParams: additionalAuthorizationParamsSchema,
	/**
	* Additional data to be passed through the OAuth flow
	*/
	additionalData: record(string(), any()).optional().meta({ description: "Additional data to be passed through the OAuth flow" })
});
var signInSocial = () => createAuthEndpoint("/sign-in/social", {
	method: "POST",
	operationId: "socialSignIn",
	body: socialSignInBodySchema,
	metadata: {
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			description: "Sign in with a social provider",
			operationId: "socialSignIn",
			responses: { "200": {
				description: "Success - Returns session details (idToken branch) or an authorize URL (redirect branch)",
				content: { "application/json": { schema: {
					type: "object",
					description: "Returns session details when idToken is provided, or an authorize URL otherwise",
					properties: {
						token: { type: "string" },
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						},
						url: { type: "string" },
						redirect: { type: "boolean" }
					},
					required: ["redirect"]
				} } }
			} }
		}
	}
}, async (c) => {
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!supportsIdTokenSignIn(provider)) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await verifyProviderIdToken(provider, token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const oauthTokens = {
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken,
			user: c.body.idToken.user
		};
		const userInfo = await provider.getUserInfo(oauthTokens);
		if (!userInfo || !userInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		if (!userInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		const accountKey = await resolveOAuthAccountKeyForAPI(provider, oauthTokens, userInfo.data);
		const providerProfile = toOAuthProfileRecord(userInfo.data);
		const data = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo.user,
				email: userInfo.user.email,
				id: accountKey.accountId,
				name: userInfo.user.name || "",
				image: userInfo.user.image,
				emailVerified: userInfo.user.emailVerified || false
			},
			account: {
				...accountKey,
				accessToken: c.body.idToken.accessToken,
				idToken: token
			},
			callbackURL: c.body.callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !c.body.requestSignUp || provider.options?.disableSignUp || provider.disableSignUp,
			source: {
				method: "oauth",
				oauth: {
					providerId: provider.id,
					profile: providerProfile
				}
			}
		});
		if (data.error) {
			if (data.error === OAUTH_CALLBACK_ERROR_CODES.EMAIL_NOT_VERIFIED) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
			throw APIError.from("UNAUTHORIZED", {
				message: data.error,
				code: "OAUTH_LINK_ERROR"
			});
		}
		await setSessionCookie(c, data.data);
		return c.json({
			redirect: false,
			token: data.data.session.token,
			url: void 0,
			user: parseUserOutput(c.context.options, data.data.user)
		});
	}
	const idTokenNonce = generateIdTokenNonce(provider);
	const { codeVerifier, state } = await generateState(c, {
		additionalData: c.body.additionalData,
		idTokenNonce
	});
	const url = await provider.createAuthorizationURL({
		state,
		codeVerifier,
		idTokenNonce,
		redirectURI: `${c.context.baseURL}${getOAuthCallbackPath(provider)}`,
		scopes: c.body.scopes,
		loginHint: c.body.loginHint,
		additionalParams: c.body.additionalParams
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var signInEmail = () => createAuthEndpoint("/sign-in/email", {
	method: "POST",
	operationId: "signInEmail",
	use: [formCsrfMiddleware],
	cloneRequest: true,
	body: object({
		/**
		* Email of the user
		*/
		email: string().meta({ description: "Email of the user" }),
		/**
		* Password of the user
		*/
		password: string().meta({ description: "Password of the user" }),
		/**
		* Callback URL to use as a redirect for email
		* verification and for possible redirects
		*/
		callbackURL: string().meta({ description: "Callback URL to use as a redirect for email verification" }).optional(),
		/**
		* If this is false, the session will not be remembered
		* @default true
		*/
		rememberMe: boolean$1().meta({ description: "If this is false, the session will not be remembered. Default is `true`." }).default(true).optional()
	}),
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signInEmail",
			description: "Sign in with email and password",
			responses: { "200": {
				description: "Success - Returns either session details or redirect URL",
				content: { "application/json": { schema: {
					type: "object",
					description: "Session response when idToken is provided",
					properties: {
						redirect: {
							type: "boolean",
							enum: [false]
						},
						token: {
							type: "string",
							description: "Session token"
						},
						url: {
							type: "string",
							nullable: true
						},
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						}
					},
					required: [
						"redirect",
						"token",
						"user"
					]
				} } }
			} }
		}
	}
}, async (ctx) => {
	if (!ctx.context.options?.emailAndPassword?.enabled) {
		ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
		throw APIError.from("BAD_REQUEST", {
			code: "EMAIL_PASSWORD_DISABLED",
			message: "Email and password is not enabled"
		});
	}
	const { email: email$4, password } = ctx.body;
	if (!email().safeParse(email$4).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
	assertPasswordNotTooLong(ctx, password);
	const userRecord = await ctx.context.internalAdapter.findUserByEmail(email$4.toLowerCase(), { includeAccounts: true });
	const credentialAccount = userRecord?.accounts.find((account) => account.providerId === "credential" && account.accountId === userRecord.user.id);
	if (!userRecord || !credentialAccount) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("User not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const user = userRecord.user;
	const currentPassword = credentialAccount.password;
	if (!currentPassword) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("Password not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (!await ctx.context.password.verify({
		hash: currentPassword,
		password
	})) {
		ctx.context.logger.warn("Invalid password");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.emailVerified) {
		if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
		if (ctx.context.options?.emailVerification?.sendOnSignIn) {
			const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
	}
	const session = await ctx.context.internalAdapter.createSession(user.id, ctx.body.rememberMe === false);
	if (!session) {
		ctx.context.logger.error("Failed to create session");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
	}
	await setSessionCookie(ctx, {
		session,
		user
	}, ctx.body.rememberMe === false);
	if (ctx.body.callbackURL) ctx.setHeader("Location", ctx.body.callbackURL);
	return ctx.json({
		redirect: !!ctx.body.callbackURL,
		token: session.token,
		url: ctx.body.callbackURL,
		user: parseUserOutput(ctx.context.options, user)
	});
});
var signOutBodySchema = object({
	callbackURL: string().meta({ description: "The URL to redirect to after provider logout" }).optional(),
	disableRedirect: boolean$1().meta({ description: "Return the provider logout URL without redirecting" }).optional(),
	state: string().meta({ description: "State to pass to the provider logout endpoint" }).optional()
}).optional();
var signOutResponse = (providerLogout) => ({
	success: true,
	url: providerLogout?.url,
	redirect: providerLogout?.redirect
});
var signOut = createAuthEndpoint("/sign-out", {
	method: "POST",
	body: signOutBodySchema,
	operationId: "signOut",
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "signOut",
		description: "Sign out the current user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: { type: "boolean" },
					url: {
						type: "string",
						description: "Provider logout URL when RP-initiated logout is available"
					},
					redirect: {
						type: "boolean",
						description: "Whether the client should redirect to the provider logout URL"
					}
				}
			} } }
		} }
	} }
}, async (ctx) => {
	const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
	let currentSession = null;
	if (sessionCookieToken) try {
		currentSession = await ctx.context.internalAdapter.findSession(sessionCookieToken);
	} catch (e) {
		ctx.context.logger.error("Failed to read session from database", e);
	}
	if (sessionCookieToken) try {
		await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
	} catch (e) {
		ctx.context.logger.error("Failed to delete session from database", e);
	}
	deleteSessionCookie(ctx);
	const providerLogoutResult = await (async () => {
		try {
			if (!currentSession) return null;
			const accounts = await ctx.context.internalAdapter.findAccounts(currentSession.user.id);
			const providersById = new Map(ctx.context.socialProviders.map((provider) => [provider.id, provider]));
			const logoutAccounts = accounts.filter((account) => Boolean(providersById.get(account.providerId)?.createEndSessionURL)).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
			if (logoutAccounts.length === 0) return null;
			const seenProviderIds = /* @__PURE__ */ new Set();
			const postLogoutRedirectURI = ctx.body?.callbackURL ? new URL(ctx.body.callbackURL, ctx.context.baseURL).toString() : void 0;
			for (const account of logoutAccounts) {
				if (seenProviderIds.has(account.providerId)) continue;
				seenProviderIds.add(account.providerId);
				const provider = providersById.get(account.providerId);
				try {
					const url = await provider?.createEndSessionURL?.({
						idToken: account.idToken,
						postLogoutRedirectURI,
						state: ctx.body?.state
					});
					if (url) return url.toString();
				} catch (e) {
					ctx.context.logger.error(`Failed to create logout URL for provider "${account.providerId}"`, e);
				}
			}
			return null;
		} catch (e) {
			ctx.context.logger.error("Failed to create provider logout URL", e);
			return null;
		}
	})();
	if (providerLogoutResult) {
		const shouldRedirect = !ctx.body?.disableRedirect;
		if (shouldRedirect) ctx.setHeader("Location", providerLogoutResult);
		return ctx.json(signOutResponse({
			url: providerLogoutResult,
			redirect: shouldRedirect
		}));
	}
	return ctx.json(signOutResponse());
});
var signUpEmailBodySchema = object({
	name: string(),
	email: email(),
	password: string().nonempty(),
	image: string().optional(),
	callbackURL: string().optional(),
	rememberMe: boolean$1().optional()
}).and(record(string(), any()));
var signUpEmail = () => createAuthEndpoint("/sign-up/email", {
	method: "POST",
	operationId: "signUpWithEmailAndPassword",
	use: [formCsrfMiddleware],
	body: signUpEmailBodySchema,
	cloneRequest: true,
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signUpWithEmailAndPassword",
			description: "Sign up a user using email and password",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					email: {
						type: "string",
						description: "The email of the user"
					},
					password: {
						type: "string",
						description: "The password of the user"
					},
					image: {
						type: "string",
						description: "The profile image URL of the user"
					},
					callbackURL: {
						type: "string",
						description: "The URL to use for email verification callback"
					},
					rememberMe: {
						type: "boolean",
						description: "If this is false, the session will not be remembered. Default is `true`."
					}
				},
				required: [
					"name",
					"email",
					"password"
				]
			} } } },
			responses: {
				"200": {
					description: "Successfully created user",
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							token: {
								type: "string",
								nullable: true,
								description: "Authentication token for the session"
							},
							user: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "The unique identifier of the user"
									},
									email: {
										type: "string",
										format: "email",
										description: "The email address of the user"
									},
									name: {
										type: "string",
										description: "The name of the user"
									},
									image: {
										type: "string",
										format: "uri",
										nullable: true,
										description: "The profile image URL of the user"
									},
									emailVerified: {
										type: "boolean",
										description: "Whether the email has been verified"
									},
									createdAt: {
										type: "string",
										format: "date-time",
										description: "When the user was created"
									},
									updatedAt: {
										type: "string",
										format: "date-time",
										description: "When the user was last updated"
									}
								},
								required: [
									"id",
									"email",
									"name",
									"emailVerified",
									"createdAt",
									"updatedAt"
								]
							}
						},
						required: ["user"]
					} } }
				},
				"422": {
					description: "Unprocessable Entity. User already exists or failed to create user.",
					content: { "application/json": { schema: {
						type: "object",
						properties: { message: { type: "string" } }
					} } }
				}
			}
		}
	}
}, async (ctx) => {
	return runWithTransaction(ctx.context.adapter, async () => {
		if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) throw APIError.from("BAD_REQUEST", {
			message: "Email and password sign up is not enabled",
			code: "EMAIL_PASSWORD_SIGN_UP_DISABLED"
		});
		const body = ctx.body;
		const { name, email: email$1, password, image, callbackURL: _callbackURL, rememberMe, ...rest } = body;
		if (!email().safeParse(email$1).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
		if (!password || typeof password !== "string") throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
		assertPasswordNotTooShort(ctx, password);
		assertPasswordNotTooLong(ctx, password);
		const shouldReturnGenericDuplicateResponse = ctx.context.options.emailAndPassword.requireEmailVerification || ctx.context.options.emailAndPassword.autoSignIn === false;
		const shouldSkipAutoSignIn = ctx.context.options.emailAndPassword.autoSignIn === false || shouldReturnGenericDuplicateResponse;
		const additionalUserFields = parseUserInput(ctx.context.options, rest, "create");
		const normalizedEmail = email$1.toLowerCase();
		const buildGenericDuplicateResponse = () => {
			const now = /* @__PURE__ */ new Date();
			const generatedId = ctx.context.generateId({ model: "user" }) || generateId();
			const coreFields = {
				name,
				email: normalizedEmail,
				emailVerified: false,
				image: image ?? null,
				createdAt: now,
				updatedAt: now
			};
			const customSyntheticUser = ctx.context.options.emailAndPassword?.customSyntheticUser;
			let syntheticUser;
			if (customSyntheticUser) {
				const additionalFieldKeys = Object.keys(ctx.context.options.user?.additionalFields ?? {});
				const additionalFields = {};
				for (const key of additionalFieldKeys) if (key in additionalUserFields) additionalFields[key] = additionalUserFields[key];
				const customResult = customSyntheticUser({
					coreFields,
					additionalFields,
					id: generatedId
				});
				syntheticUser = buildSyntheticUserOutput(ctx.context.options, customResult);
			} else syntheticUser = buildSyntheticUserOutput(ctx.context.options, {
				...coreFields,
				...additionalUserFields,
				id: generatedId
			});
			return ctx.json({
				token: null,
				user: parseUserOutput(ctx.context.options, syntheticUser)
			});
		};
		const dbUser = await ctx.context.internalAdapter.findUserByEmail(normalizedEmail);
		if (dbUser?.user) {
			ctx.context.logger.info(`Sign-up attempt for existing email: ${email$1}`);
			if (shouldReturnGenericDuplicateResponse) {
				/**
				* Hash the password to reduce timing differences
				* between existing and non-existing emails.
				*/
				await ctx.context.password.hash(password);
				if (ctx.context.options.emailAndPassword?.onExistingUserSignUp) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.onExistingUserSignUp({ user: dbUser.user }, safeCloneRequest(ctx.request)));
				return buildGenericDuplicateResponse();
			}
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
		}
		/**
		* Hash the password
		*
		* This is done prior to creating the user
		* to ensure that any plugin that
		* may break the hashing should break
		* before the user is created.
		*/
		const hash = await ctx.context.password.hash(password);
		let createdUser;
		try {
			createdUser = await ctx.context.internalAdapter.createUser({
				email: normalizedEmail,
				name,
				image,
				...additionalUserFields,
				emailVerified: false
			}, { method: "email-password" });
			if (!createdUser) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		} catch (e) {
			if (isAPIError(e)) {
				if (e.statusCode === 403 && shouldReturnGenericDuplicateResponse) return buildGenericDuplicateResponse();
				throw e;
			}
			if (isDevelopment()) ctx.context.logger.error("Failed to create user", e);
			ctx.context.logger?.error("Failed to create user", e);
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		}
		if (!createdUser) throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		await ctx.context.internalAdapter.linkAccount({
			userId: createdUser.id,
			providerId: "credential",
			accountId: createdUser.id,
			password: hash
		});
		if (ctx.context.options.emailVerification?.sendOnSignUp ?? ctx.context.options.emailAndPassword.requireEmailVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = body.callbackURL ? encodeURIComponent(body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: createdUser,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		if (shouldSkipAutoSignIn) return ctx.json({
			token: null,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
		const session = await ctx.context.internalAdapter.createSession(createdUser.id, rememberMe === false, void 0, void 0, { deferSecondaryStorageWrites: true });
		if (!session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
		await setSessionCookie(ctx, {
			session,
			user: createdUser
		}, rememberMe === false);
		return ctx.json({
			token: session.token,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
	});
});
var updateSessionBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateSession = () => createAuthEndpoint("/update-session", {
	method: "POST",
	operationId: "updateSession",
	body: updateSessionBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateSession",
			description: "Update the current session",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { session: {
						type: "object",
						$ref: "#/components/schemas/Session"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	const session = ctx.context.session;
	const additionalFields = parseSessionInput(ctx.context.options, body, "update");
	if (Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	});
	if (!updatedSession && isStateful(ctx)) {
		deleteSessionCookie(ctx);
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
	const newSession = updatedSession ?? {
		...session.session,
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	};
	await setSessionCookie(ctx, {
		session: newSession,
		user: session.user
	});
	return ctx.json({ session: parseSessionOutput(ctx.context.options, newSession) });
});
var updateUserBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateUser = () => createAuthEndpoint("/update-user", {
	method: "POST",
	operationId: "updateUser",
	body: updateUserBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateUser",
			description: "Update the current user",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					image: {
						type: "string",
						description: "The image of the user",
						nullable: true
					}
				}
			} } } },
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: {
						type: "object",
						$ref: "#/components/schemas/User"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	if (body.email) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED);
	const { name, image, ...rest } = body;
	const session = ctx.context.session;
	const additionalFields = parseUserInput(ctx.context.options, rest, "update");
	if (image === void 0 && name === void 0 && Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, {
		name,
		image,
		...additionalFields
	}) ?? {
		...session.user,
		...name !== void 0 && { name },
		...image !== void 0 && { image },
		...additionalFields
	};
	/**
	* Update the session cookie with the new user data
	*/
	await setSessionCookie(ctx, {
		session: session.session,
		user: updatedUser
	});
	return ctx.json({ status: true });
});
var changePassword = createAuthEndpoint("/change-password", {
	method: "POST",
	operationId: "changePassword",
	body: object({
		/**
		* The new password to set
		*/
		newPassword: string().meta({ description: "The new password to set" }),
		/**
		* The current password of the user
		*/
		currentPassword: string().meta({ description: "The current password is required" }),
		/**
		* revoke all sessions that are not the
		* current one logged in by the user
		*/
		revokeOtherSessions: boolean$1().meta({ description: "Must be a boolean value" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changePassword",
		description: "Change the password of the user",
		responses: { "200": {
			description: "Password successfully changed",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					token: {
						type: "string",
						nullable: true,
						description: "New session token if other sessions were revoked"
					},
					user: {
						type: "object",
						properties: {
							id: {
								type: "string",
								description: "The unique identifier of the user"
							},
							email: {
								type: "string",
								format: "email",
								description: "The email address of the user"
							},
							name: {
								type: "string",
								description: "The name of the user"
							},
							image: {
								type: "string",
								format: "uri",
								nullable: true,
								description: "The profile image URL of the user"
							},
							emailVerified: {
								type: "boolean",
								description: "Whether the email has been verified"
							},
							createdAt: {
								type: "string",
								format: "date-time",
								description: "When the user was created"
							},
							updatedAt: {
								type: "string",
								format: "date-time",
								description: "When the user was last updated"
							}
						},
						required: [
							"id",
							"email",
							"name",
							"emailVerified",
							"createdAt",
							"updatedAt"
						]
					}
				},
				required: ["user"]
			} } }
		} }
	} }
}, async (ctx) => {
	const { newPassword, currentPassword, revokeOtherSessions } = ctx.body;
	const session = ctx.context.session;
	assertPasswordNotTooShort(ctx, newPassword);
	assertPasswordNotTooLong(ctx, newPassword);
	assertPasswordNotTooLong(ctx, currentPassword);
	const account = await ctx.context.internalAdapter.findCredentialAccount(session.user.id);
	if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!await ctx.context.password.verify({
		hash: account.password,
		password: currentPassword
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	const newSession = await runWithTransaction(ctx.context.adapter, async () => {
		if (revokeOtherSessions) await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
		await ctx.context.internalAdapter.updateAccount(account.id, { password: passwordHash });
		if (!revokeOtherSessions) return null;
		const created = await ctx.context.internalAdapter.createSession(session.user.id, void 0, void 0, void 0, { deferSecondaryStorageWrites: true });
		if (!created) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
		return created;
	});
	let token = null;
	if (newSession) {
		await setSessionCookie(ctx, {
			session: newSession,
			user: session.user
		});
		token = newSession.token;
	}
	return ctx.json({
		token,
		user: parseUserOutput(ctx.context.options, session.user)
	});
});
var setPassword = createAuthEndpoint.serverOnly({
	method: "POST",
	body: object({ 
	/**
	* The new password to set
	*/
newPassword: string().meta({ description: "The new password to set is required" }) }),
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { newPassword } = ctx.body;
	const session = ctx.context.session;
	assertPasswordNotTooShort(ctx, newPassword);
	assertPasswordNotTooLong(ctx, newPassword);
	const account = await ctx.context.internalAdapter.findCredentialAccount(session.user.id);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!account) {
		await ctx.context.internalAdapter.linkAccount({
			userId: session.user.id,
			providerId: "credential",
			accountId: session.user.id,
			password: passwordHash
		});
		return ctx.json({ status: true });
	}
	if (!account.password) {
		await ctx.context.internalAdapter.updateAccount(account.id, { password: passwordHash });
		return ctx.json({ status: true });
	}
	throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_ALREADY_SET);
});
var deleteUser = createAuthEndpoint("/delete-user", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	body: object({
		/**
		* The callback URL to redirect to after the user is deleted
		* this is only used on delete user callback
		*/
		callbackURL: string().meta({ description: "The callback URL to redirect to after the user is deleted" }).optional(),
		/**
		* The password of the user. If the password isn't provided, session freshness
		* will be checked.
		*/
		password: string().meta({ description: "The password of the user is required to delete the user" }).optional(),
		/**
		* The token to delete the user. If the token is provided, the user will be deleted
		*/
		token: string().meta({ description: "The token to delete the user is required" }).optional()
	}),
	metadata: { openapi: {
		operationId: "deleteUser",
		description: "Delete the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				callbackURL: {
					type: "string",
					description: "The callback URL to redirect to after the user is deleted"
				},
				password: {
					type: "string",
					description: "The user's password. Required if session is not fresh"
				},
				token: {
					type: "string",
					description: "The deletion verification token"
				}
			}
		} } } },
		responses: { "200": {
			description: "User deletion processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the operation was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted", "Verification email sent"],
						description: "Status message of the deletion process"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.fromStatus("NOT_FOUND");
	}
	const session = ctx.context.session;
	if (ctx.body.password) {
		assertPasswordNotTooLong(ctx, ctx.body.password);
		const account = await ctx.context.internalAdapter.findCredentialAccount(session.user.id);
		if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
		if (!await ctx.context.password.verify({
			hash: account.password,
			password: ctx.body.password
		})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (ctx.body.token) {
		await deleteUserCallback({
			...ctx,
			query: { token: ctx.body.token }
		});
		return ctx.json({
			success: true,
			message: "User deleted"
		});
	}
	if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
		const token = generateRandomString(32, "0-9", "a-z");
		await ctx.context.internalAdapter.createVerificationValue({
			value: session.user.id,
			identifier: `delete-account-${token}`,
			expiresAt: new Date(Date.now() + (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn || 86400) * 1e3)
		});
		const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
			user: session.user,
			url,
			token
		}, ctx.request));
		return ctx.json({
			success: true,
			message: "Verification email sent"
		});
	}
	if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.SESSION_EXPIRED);
	}
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var deleteUserCallback = createAuthEndpoint("/delete-user/callback", {
	method: "GET",
	query: object({
		token: string().meta({ description: "The token to verify the deletion request" }),
		callbackURL: string().meta({ description: "The URL to redirect to after deletion" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Callback to complete user deletion with verification token",
		responses: { "200": {
			description: "User successfully deleted",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the deletion was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted"],
						description: "Confirmation message"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.from("NOT_FOUND", {
			message: "Not found",
			code: "NOT_FOUND"
		});
	}
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	const token = await ctx.context.internalAdapter.consumeVerificationValue(`delete-account-${ctx.query.token}`);
	if (!token || token.value !== session.user.id) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.INVALID_TOKEN);
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	await ctx.context.internalAdapter.deleteAccounts(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || "/");
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var changeEmail = createAuthEndpoint("/change-email", {
	method: "POST",
	body: object({
		newEmail: email().meta({ description: "The new email address to set must be a valid email address" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changeEmail",
		responses: { "200": {
			description: "Email change request processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the request was successful"
					},
					message: {
						type: "string",
						enum: ["Email updated", "Verification email sent"],
						description: "Status message of the email change process",
						nullable: true
					}
				},
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.changeEmail?.enabled) {
		ctx.context.logger.error("Change email is disabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CHANGE_EMAIL_DISABLED);
	}
	const newEmail = ctx.body.newEmail.toLowerCase();
	if (newEmail === ctx.context.session.user.email) {
		ctx.context.logger.warn("Email is the same");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Email is the same" });
	}
	/**
	* Early config check: ensure at least one email-change flow is
	* available for the current session state. Without this, an
	* existing-email lookup would return 200 while a non-existing
	* email would later throw 400, leaking email existence.
	*/
	const canUpdateWithoutVerification = ctx.context.session.user.emailVerified !== true && ctx.context.options.user.changeEmail.updateEmailWithoutVerification;
	const canSendVerification = ctx.context.options.emailVerification?.sendVerificationEmail;
	const canSendConfirmation = canSendVerification && ctx.context.session.user.emailVerified && ctx.context.options.user.changeEmail.sendChangeEmailConfirmation;
	if (!canUpdateWithoutVerification && !canSendConfirmation && !canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
		await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn);
		ctx.context.logger.info("Change email attempt for existing email");
		return ctx.json({ status: true });
	}
	/**
	* If the email is not verified, we can update the email if the option is enabled
	*/
	if (canUpdateWithoutVerification) {
		await ctx.context.internalAdapter.updateUser(ctx.context.session.user.id, { email: newEmail });
		await setSessionCookie(ctx, {
			session: ctx.context.session.session,
			user: {
				...ctx.context.session.user,
				email: newEmail
			}
		});
		if (canSendVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, newEmail, void 0, ctx.context.options.emailVerification?.expiresIn);
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
			await ctx.context.runInBackgroundOrAwait(canSendVerification({
				user: {
					...ctx.context.session.user,
					email: newEmail
				},
				url,
				token
			}, ctx.request));
		}
		return ctx.json({ status: true });
	}
	/**
	* If the email is verified, we need to send a verification email
	*/
	if (canSendConfirmation) {
		const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-confirmation" });
		const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(canSendConfirmation({
			user: ctx.context.session.user,
			newEmail,
			url,
			token
		}, ctx.request));
		return ctx.json({ status: true });
	}
	if (!canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
	await ctx.context.runInBackgroundOrAwait(canSendVerification({
		user: {
			...ctx.context.session.user,
			email: newEmail
		},
		url,
		token
	}, ctx.request));
	return ctx.json({ status: true });
});
var defuReplaceArrays = createDefu((obj, key, value) => {
	if (Array.isArray(obj[key]) && Array.isArray(value)) {
		obj[key] = value;
		return true;
	}
});
var hooksSourceWeakMap = /* @__PURE__ */ new WeakMap();
/**
* Resolves the operation id used for spans, preferring an explicit
* `operationId`, then the OpenAPI one, then the caller's `fallback` (the
* `auth.api.*` map key), and finally the route path.
*/
function getOperationId(endpoint, fallback) {
	const opts = endpoint.options;
	return opts?.operationId ?? opts?.metadata?.openapi?.operationId ?? fallback ?? endpoint.path ?? "/:virtual";
}
/**
* Merge a set of response headers onto the dispatch's accumulator, appending
* `set-cookie` (multiple cookies are legal) and replacing everything else.
*/
function mergeResponseHeaders(context, headers) {
	if (!headers) return;
	headers.forEach((value, key) => {
		if (!context.responseHeaders) context.responseHeaders = new Headers({ [key]: value });
		else if (key.toLowerCase() === "set-cookie") context.responseHeaders.append(key, value);
		else context.responseHeaders.set(key, value);
	});
}
/**
* Combine the two header sources an `APIError` can carry into one set:
* - `kAPIErrorHeaderSymbol`: `ctx.responseHeaders` accumulated via
*   `c.setCookie` / `c.setHeader` before the throw.
* - `e.headers`: explicit headers on the error (e.g. `location` from
*   `c.redirect`).
*
* `c.redirect()` reuses `ctx.responseHeaders` as `e.headers`, so when both
* point at the same object iterating each would duplicate every `set-cookie`;
* the identity check skips that copy. Explicit error headers override
* accumulated ones, while cookies from both accumulate.
*/
function mergeAPIErrorHeaders(error) {
	const ctxHeaders = error[kAPIErrorHeaderSymbol];
	const errHeaders = error.headers && error.headers !== ctxHeaders ? new Headers(error.headers) : null;
	if (!ctxHeaders && !errHeaders) return null;
	const headers = new Headers();
	ctxHeaders?.forEach((value, key) => {
		headers.append(key, value);
	});
	errHeaders?.forEach((value, key) => {
		if (key.toLowerCase() === "set-cookie") headers.append(key, value);
		else headers.set(key, value);
	});
	return headers;
}
async function runBeforeHooks(context, hooks, endpoint, operationId) {
	const withSpan = createWithSpan(context.context.options);
	let modifiedContext = {};
	for (const hook of hooks) {
		let matched = false;
		try {
			matched = hook.matcher(context);
		} catch (error) {
			const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
			context.context.logger.error(`An error occurred during ${hookSource} hook matcher execution:`, error);
			throw new APIError("INTERNAL_SERVER_ERROR", { message: "An error occurred during hook matcher execution. Check the logs for more details." });
		}
		if (!matched) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook before ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "before",
			[ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler({
			...context,
			returnHeaders: true
		})).catch((e) => {
			if (isAPIError(e) && shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
			throw e;
		});
		mergeResponseHeaders(context.context, result?.headers);
		const hookReturn = result?.response;
		if (hookReturn && typeof hookReturn === "object") {
			if ("context" in hookReturn && typeof hookReturn.context === "object") {
				const { headers, ...rest } = hookReturn.context;
				if (headers instanceof Headers) if (modifiedContext.headers) headers.forEach((value, key) => {
					modifiedContext.headers?.set(key, value);
				});
				else modifiedContext.headers = headers;
				modifiedContext = defuReplaceArrays(rest, modifiedContext);
				continue;
			}
			return hookReturn;
		}
	}
	return { context: modifiedContext };
}
async function runAfterHooks(context, hooks, endpoint, operationId) {
	const withSpan = createWithSpan(context.context.options);
	for (const hook of hooks) {
		if (!hook.matcher(context)) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook after ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "after",
			[ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler(context)).catch((e) => {
			if (isAPIError(e)) {
				if (shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
				return {
					response: e,
					headers: mergeAPIErrorHeaders(e)
				};
			}
			throw e;
		});
		mergeResponseHeaders(context.context, result.headers);
		if (result.response !== void 0) context.context.returned = result.response;
	}
	return {
		response: context.context.returned,
		headers: context.context.responseHeaders
	};
}
function getHooks(authContext) {
	const plugins = authContext.options.plugins || [];
	const beforeHooks = [];
	const afterHooks = [];
	const beforeHookHandler = authContext.options.hooks?.before;
	if (beforeHookHandler) {
		hooksSourceWeakMap.set(beforeHookHandler, "user");
		beforeHooks.push({
			matcher: () => true,
			handler: beforeHookHandler
		});
	}
	const afterHookHandler = authContext.options.hooks?.after;
	if (afterHookHandler) {
		hooksSourceWeakMap.set(afterHookHandler, "user");
		afterHooks.push({
			matcher: () => true,
			handler: afterHookHandler
		});
	}
	const pluginBeforeHooks = plugins.flatMap((plugin) => (plugin.hooks?.before ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	const pluginAfterHooks = plugins.flatMap((plugin) => (plugin.hooks?.after ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
	if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
	return {
		beforeHooks,
		afterHooks
	};
}
/**
* Run a single endpoint through the configured `hooks.before` / `hooks.after`
* pipeline, normalizing the response, headers, and `APIError`s the same way a
* router or `auth.api.*` dispatch does.
*
* This is the canonical hook runner. The HTTP router and `auth.api.*` reach it
* through {@link toAuthEndpoints}. Plugins call it directly when they need to
* re-enter the pipeline on purpose, such as resuming `/oauth2/authorize` after
* a fresh sign-in. Calling an endpoint as a plain function deliberately skips
* hooks; `dispatchAuthEndpoint` is the supported way to opt back in.
*
* @param endpoint The endpoint to dispatch.
* @param input Input context whose `context` is an already-resolved `AuthContext`.
*/
async function dispatchAuthEndpoint(endpoint, input) {
	const withSpan = createWithSpan(input.context.options);
	const operationId = input.operationId ?? getOperationId(endpoint);
	const route = endpoint.path ?? "/:virtual";
	const endpointMethod = endpoint.options?.method;
	const defaultMethod = Array.isArray(endpointMethod) ? endpointMethod[0] : endpointMethod;
	const methodName = input.method ?? input.request?.method ?? defaultMethod ?? "?";
	const shouldReturnResponse = input.asResponse ?? isRequestLike(input.request);
	let internalContext = {
		...input,
		context: {
			...input.context,
			returned: void 0,
			responseHeaders: void 0,
			session: input.context.session ?? null
		},
		path: endpoint.path,
		headers: input.headers ? new Headers(input.headers) : void 0
	};
	return withSpan(`${methodName} ${route}`, {
		[ATTR_HTTP_ROUTE]: route,
		[ATTR_OPERATION_ID]: operationId
	}, async () => runWithEndpointContext(internalContext, async () => {
		const { beforeHooks, afterHooks } = getHooks(internalContext.context);
		const before = await runBeforeHooks(internalContext, beforeHooks, endpoint, operationId);
		if ("context" in before && before.context && typeof before.context === "object") {
			const { headers, ...rest } = before.context;
			if (headers) {
				if (!internalContext.headers) internalContext.headers = new Headers();
				const requestHeaders = internalContext.headers;
				headers.forEach((value, key) => {
					requestHeaders.set(key, value);
				});
			}
			internalContext = defuReplaceArrays(rest, internalContext);
		} else if (before) {
			const responseHeaders = internalContext.context.responseHeaders;
			return shouldReturnResponse ? toResponse(before, { headers: responseHeaders }) : input.returnHeaders ? {
				headers: responseHeaders,
				response: before
			} : before;
		}
		internalContext.asResponse = false;
		internalContext.returnHeaders = true;
		internalContext.returnStatus = true;
		const result = await runWithEndpointContext(internalContext, () => withSpan(`handler ${route}`, {
			[ATTR_HTTP_ROUTE]: route,
			[ATTR_OPERATION_ID]: operationId
		}, () => endpoint(internalContext))).catch((e) => {
			if (isAPIError(e)) return {
				response: e,
				status: e.statusCode,
				headers: mergeAPIErrorHeaders(e)
			};
			throw e;
		});
		if (result instanceof Response) return result;
		internalContext.context.returned = result.response;
		internalContext.context.responseHeaders = result.headers ?? void 0;
		const after = await runAfterHooks(internalContext, afterHooks, endpoint, operationId);
		if (after.response !== void 0) result.response = after.response;
		result.headers = after.headers ?? result.headers;
		if (isAPIError(result.response) && shouldPublishLog(internalContext.context.logger.level, "debug")) result.response.stack = result.response.errorStack;
		if (isAPIError(result.response) && !shouldReturnResponse) {
			if (result.headers) Object.defineProperty(result.response, kAPIErrorHeaderSymbol, {
				enumerable: false,
				configurable: true,
				writable: false,
				value: result.headers
			});
			throw result.response;
		}
		return shouldReturnResponse ? toResponse(result.response, {
			headers: result.headers ?? void 0,
			status: result.status
		}) : input.returnHeaders ? input.returnStatus ? {
			headers: result.headers,
			response: result.response,
			status: result.status
		} : {
			headers: result.headers,
			response: result.response
		} : input.returnStatus ? {
			response: result.response,
			status: result.status
		} : result.response;
	}));
}
/**
* Resolves the per-call `AuthContext` for endpoints with a dynamic `baseURL`.
*
* - `rawCtx.baseURL` already set: HTTP handler rehydrated upstream; return as-is.
* - Direct `auth.api` call with a source or a configured `fallback`: resolve here.
* - Neither: throw `APIError` with a helpful message. Leaving `baseURL = ""`
*   would let plugins build `new URL("")` and crash cryptically downstream.
*/
async function resolveDynamicContext(rawCtx, input) {
	if (rawCtx.baseURL) return rawCtx;
	const source = pickSource(input);
	const config = rawCtx.options.baseURL;
	const hasFallback = isDynamicBaseURLConfig(config) && Boolean(config.fallback);
	if (source === void 0 && !hasFallback) throw new APIError("INTERNAL_SERVER_ERROR", { message: "Dynamic baseURL could not be resolved for this direct auth.api call. Pass `headers: request.headers` (or `request`) to the call, or add `fallback` to your baseURL config." });
	try {
		return await resolveRequestContext(rawCtx, source, resolveDynamicTrustedProxyHeaders(rawCtx.options));
	} catch (err) {
		if (err instanceof BetterAuthError) throw new APIError("INTERNAL_SERVER_ERROR", { message: err.message });
		throw err;
	}
}
/**
* Wraps each raw endpoint so a router or `auth.api.*` call runs it through the
* configured hook pipeline. Per-call work that is specific to this entry point
* (dynamic `baseURL` resolution, request-state initialization) happens here;
* the hook pipeline itself lives in {@link dispatchAuthEndpoint}.
*/
function toAuthEndpoints(endpoints, ctx) {
	const api = {};
	for (const [key, endpoint] of Object.entries(endpoints)) {
		api[key] = async (context) => {
			const operationId = getOperationId(endpoint, key);
			const run = async () => {
				const rawContext = await ctx;
				const pendingSchemaCheck = rawContext.checkSchema?.();
				if (pendingSchemaCheck) await pendingSchemaCheck;
				const authContext = isDynamicBaseURLConfig(rawContext.options.baseURL) ? await resolveDynamicContext(rawContext, context) : rawContext;
				return dispatchAuthEndpoint(endpoint, {
					...context,
					context: authContext,
					operationId,
					asResponse: context?.asResponse ?? isRequestLike(context?.request)
				});
			};
			if (await hasRequestState()) return run();
			return runWithRequestState(/* @__PURE__ */ new WeakMap(), run);
		};
		api[key].path = endpoint.path;
		api[key].options = endpoint.options;
	}
	return api;
}
function checkEndpointConflicts(options, logger) {
	const endpointRegistry = /* @__PURE__ */ new Map();
	options.plugins?.forEach((plugin) => {
		if (plugin.endpoints) {
			for (const [key, endpoint] of Object.entries(plugin.endpoints)) if (endpoint && "path" in endpoint && typeof endpoint.path === "string") {
				const path = endpoint.path;
				let methods = [];
				if (endpoint.options && "method" in endpoint.options) {
					if (Array.isArray(endpoint.options.method)) methods = endpoint.options.method;
					else if (typeof endpoint.options.method === "string") methods = [endpoint.options.method];
				}
				if (methods.length === 0) methods = ["*"];
				if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
				endpointRegistry.get(path).push({
					pluginId: plugin.id,
					endpointKey: key,
					methods
				});
			}
		}
	});
	const conflicts = [];
	for (const [path, entries] of endpointRegistry.entries()) if (entries.length > 1) {
		const methodMap = /* @__PURE__ */ new Map();
		let hasConflict = false;
		for (const entry of entries) for (const method of entry.methods) {
			if (!methodMap.has(method)) methodMap.set(method, []);
			methodMap.get(method).push(entry.pluginId);
			if (methodMap.get(method).length > 1) hasConflict = true;
			if (method === "*" && entries.length > 1) hasConflict = true;
			else if (method !== "*" && methodMap.has("*")) hasConflict = true;
		}
		if (hasConflict) {
			const uniquePlugins = [...new Set(entries.map((e) => e.pluginId))];
			const conflictingMethods = [];
			for (const [method, plugins] of methodMap.entries()) if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) conflictingMethods.push(method);
			conflicts.push({
				path,
				plugins: uniquePlugins,
				conflictingMethods
			});
		}
	}
	if (conflicts.length > 0) {
		const conflictMessages = conflicts.map((conflict) => `  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
		logger.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
	}
}
function getEndpoints(ctx, options) {
	const withSpan = createWithSpan(options);
	const pluginEndpoints = options.plugins?.reduce((acc, plugin) => {
		return {
			...acc,
			...plugin.endpoints
		};
	}, {}) ?? {};
	const middlewares = options.plugins?.map((plugin) => plugin.middlewares?.map((m) => {
		const middleware = (async (context) => {
			const authContext = await ctx;
			return withSpan(`middleware ${m.path} ${plugin.id}`, {
				["better_auth.hook.type"]: "middleware",
				["http.route"]: m.path,
				["better_auth.context"]: `plugin:${plugin.id}`
			}, () => m.middleware({
				...context,
				context: {
					...authContext,
					...context.context
				}
			}));
		});
		middleware.options = m.middleware.options;
		return {
			path: m.path,
			middleware
		};
	})).filter((plugin) => plugin !== void 0).flat() || [];
	return {
		api: toAuthEndpoints({
			signInSocial: signInSocial(),
			callbackOAuth,
			getSession: getSession(),
			signOut,
			signUpEmail: signUpEmail(),
			signInEmail: signInEmail(),
			resetPassword,
			verifyPassword: verifyPassword$1,
			verifyEmail,
			sendVerificationEmail,
			changeEmail,
			changePassword,
			setPassword,
			updateSession: updateSession(),
			updateUser: updateUser(),
			deleteUser,
			requestPasswordReset,
			requestPasswordResetCallback,
			listSessions: listSessions(),
			revokeSession,
			revokeSessions,
			revokeOtherSessions,
			linkSocialAccount,
			listUserAccounts,
			deleteUserCallback,
			unlinkAccount,
			refreshToken,
			getAccessToken,
			accountInfo,
			...pluginEndpoints,
			ok,
			error
		}, ctx),
		middlewares
	};
}
var router = (ctx, options) => {
	const withSpan = createWithSpan(options);
	const { api, middlewares } = getEndpoints(ctx, options);
	const basePath = new URL(ctx.baseURL).pathname;
	return createRouter$1(api, {
		routerContext: ctx,
		openapi: { disabled: true },
		basePath,
		routerMiddleware: [{
			path: "/**",
			middleware: originCheckMiddleware
		}, ...middlewares],
		allowedMediaTypes: ["application/json"],
		skipTrailingSlashes: options.advanced?.skipTrailingSlashes ?? false,
		async onRequest(req) {
			const disabledPaths = ctx.options.disabledPaths || [];
			const normalizedPath = normalizePathname(req.url, basePath);
			if (disabledPaths.includes(normalizedPath)) return new Response("Not Found", { status: 404 });
			const pendingSchemaCheck = ctx.checkSchema?.();
			if (pendingSchemaCheck) await pendingSchemaCheck;
			let currentRequest = req;
			const rateLimitResponse = await onRequestRateLimit(currentRequest, ctx);
			if (rateLimitResponse) return rateLimitResponse;
			for (const plugin of ctx.options.plugins || []) if (plugin.onRequest) {
				const response = await withSpan(`onRequest ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onRequest",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`
				}, () => plugin.onRequest(currentRequest, ctx));
				if (response && "response" in response) return response.response;
				if (response && "request" in response) currentRequest = response.request;
			}
			return currentRequest;
		},
		async onResponse(res, req) {
			for (const plugin of ctx.options.plugins || []) if (plugin.onResponse) {
				const response = await withSpan(`onResponse ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onResponse",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`,
					[ATTR_HTTP_RESPONSE_STATUS_CODE]: res.status
				}, () => plugin.onResponse(res, ctx));
				if (response) return response.response;
			}
			return res;
		},
		async onError(e) {
			if (isAPIError(e) && e.status === "FOUND") return;
			if (options.onAPIError?.throw) throw e;
			if (options.onAPIError?.onError) {
				try {
					await options.onAPIError.onError(e, ctx);
				} catch (hookError) {
					ctx.logger.error("onAPIError.onError threw", hookError);
				}
				return;
			}
			const optLogLevel = options.logger?.level;
			const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? logger : void 0;
			if (options.logger?.disabled !== true) {
				if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
					if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
						ctx.logger?.error(e.message);
						return;
					}
				}
				if (isAPIError(e)) {
					if (e.status === "INTERNAL_SERVER_ERROR") ctx.logger.error(e.status, e);
					log?.error(e.message);
				} else ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
			}
		}
	});
};
async function getBaseAdapter(options, handleDirectDatabase) {
	let adapter;
	if (!options.database) {
		const tables = getAuthTables(options);
		const memoryDB = Object.keys(tables).reduce((acc, key) => {
			acc[key] = [];
			return acc;
		}, {});
		const { memoryAdapter } = await import("../_libs/better-auth__memory-adapter.mjs").then((n) => n.t);
		adapter = memoryAdapter(memoryDB)(options);
	} else if (typeof options.database === "function") adapter = options.database(options);
	else adapter = await handleDirectDatabase(options);
	if (!adapter.transaction) {
		logger.warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
		adapter.transaction = async (cb) => {
			return cb(adapter);
		};
	}
	return adapter;
}
async function getAdapter(options) {
	return getBaseAdapter(options, async (opts) => {
		const { createKyselyAdapter, kyselyAdapter } = await import("./kysely-adapter-Cj_QZw5p.mjs");
		const { kysely, databaseType, transaction } = await createKyselyAdapter(opts);
		if (!kysely) throw new BetterAuthError("Failed to initialize database adapter");
		return kyselyAdapter(kysely, {
			type: databaseType || "sqlite",
			debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
			transaction
		})(opts);
	});
}
/**
* @internal
*/
function buildSchema(config) {
	const { indexesByTable, tables } = getAuthTablesWithResolvedIndexes(config);
	const referenceKeys = /* @__PURE__ */ new Map();
	const schema = {};
	for (const key in tables) {
		const table = tables[key];
		const fields = table.fields;
		const actualFields = {};
		Object.entries(fields).forEach(([key, field]) => {
			const reference = field.references;
			const refTable = reference ? tables[reference.model] : void 0;
			const actualField = reference && refTable ? {
				...field,
				references: {
					...reference,
					model: refTable.modelName
				}
			} : field;
			actualFields[field.fieldName || key] = actualField;
			if (reference) referenceKeys.set(actualField, {
				modelKey: reference.model,
				fieldKey: reference.field
			});
		});
		if (schema[table.modelName]) {
			schema[table.modelName].fields = {
				...schema[table.modelName].fields,
				...actualFields
			};
			if (table.disableMigrations) schema[table.modelName].disableMigrations = true;
			continue;
		}
		schema[table.modelName] = {
			fields: actualFields,
			order: table.order || Infinity,
			disableMigrations: table.disableMigrations
		};
	}
	for (const [tableName, indexes] of indexesByTable) if (schema[tableName]) schema[tableName].indexes = indexes;
	return {
		schema,
		tables,
		referenceKeys
	};
}
var map = {
	postgres: {
		string: [
			"character varying",
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"int4",
			"int8",
			"integer",
			"bigint",
			"smallint",
			"numeric",
			"real",
			"double precision"
		],
		boolean: ["bool", "boolean"],
		date: [
			"timestamptz",
			"timestamp",
			"date"
		],
		json: ["json", "jsonb"]
	},
	mysql: {
		string: [
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"integer",
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["boolean", "tinyint"],
		date: [
			"timestamp",
			"datetime",
			"date"
		],
		json: ["json"]
	},
	sqlite: {
		string: ["TEXT"],
		number: [
			"INTEGER",
			"REAL",
			"BIGINT"
		],
		boolean: ["INTEGER", "BOOLEAN"],
		date: ["DATE", "INTEGER"],
		json: ["TEXT"]
	},
	mssql: {
		string: [
			"varchar",
			"nvarchar",
			"uniqueidentifier"
		],
		number: [
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["bit", "smallint"],
		date: [
			"datetime2",
			"date",
			"datetime"
		],
		json: ["varchar", "nvarchar"]
	}
};
function createDatabaseIndexKey(tableName, indexName) {
	return `${getPortableDatabaseIdentifierKey(tableName)}\u0000${getPortableDatabaseIdentifierKey(indexName)}`;
}
function createDatabaseColumnKey(tableName, columnName) {
	return `${tableName}\u0000${columnName}`;
}
function databaseIndexMatches(existing, configured) {
	return existing.unique === (configured.unique ?? false) && existing.validFullColumns && existing.columns.length === configured.columns.length && existing.columns.every((column, position) => column === configured.columns[position]);
}
function databaseValueIsTrue(value) {
	if (typeof value === "boolean") return value;
	if (typeof value === "number") return value !== 0;
	return value === "1" || value?.toLowerCase() === "true" || value === "t";
}
function toDatabaseIndexMap(indexes) {
	return new Map(indexes.map((index) => {
		const columns = [...index.columns].sort((left, right) => left.position - right.position);
		return [createDatabaseIndexKey(index.table, index.name), {
			columns: columns.flatMap((column) => column.name === null ? [] : [column.name]),
			name: index.name,
			table: index.table,
			unique: index.unique,
			validFullColumns: index.valid && !index.partial && columns.length > 0 && columns.every((column) => column.name !== null && column.fullLength)
		}];
	}));
}
async function getDatabaseIndexMap(db, target, tableNames, introspectIndexes) {
	if (introspectIndexes) return toDatabaseIndexMap(await introspectIndexes(tableNames));
	let rows;
	switch (target.type) {
		case "sqlite":
			rows = (await sql`
				SELECT
					tables.name AS "tableName",
					index_list.name AS "indexName",
					index_info.name AS "columnName",
					index_list."unique" AS "isUnique",
					index_list.partial AS "isPartial",
					index_info.seqno AS "columnPosition"
				FROM sqlite_master AS tables
				INNER JOIN pragma_index_list(tables.name) AS index_list
				INNER JOIN pragma_index_info(index_list.name) AS index_info
				WHERE tables.type = 'table'
			`.execute(db)).rows;
			break;
		case "postgres":
			rows = (await sql`
				SELECT
					table_class.relname AS "tableName",
					index_class.relname AS "indexName",
					index_attribute.attname AS "columnName",
					index_data.indisunique AS "isUnique",
					index_data.indisvalid AS "isValid",
					(index_data.indpred IS NOT NULL) AS "isPartial",
					index_column.ordinality AS "columnPosition"
				FROM pg_class AS table_class
				INNER JOIN pg_namespace AS table_namespace
					ON table_namespace.oid = table_class.relnamespace
				INNER JOIN pg_index AS index_data
					ON index_data.indrelid = table_class.oid
				INNER JOIN pg_class AS index_class
					ON index_class.oid = index_data.indexrelid
				INNER JOIN LATERAL unnest(index_data.indkey)
					WITH ORDINALITY AS index_column(attribute_number, ordinality)
					ON TRUE
				LEFT JOIN pg_attribute AS index_attribute
					ON index_attribute.attrelid = table_class.oid
					AND index_attribute.attnum = index_column.attribute_number
				WHERE table_namespace.nspname = ${target.schema}
					AND table_class.relkind = 'r'
					AND index_column.ordinality <= index_data.indnkeyatts
			`.execute(db)).rows;
			break;
		case "mysql":
			rows = (await sql`
				SELECT
					table_name AS tableName,
					index_name AS indexName,
					column_name AS columnName,
					non_unique AS nonUnique,
					seq_in_index AS columnPosition,
					sub_part AS prefixLength,
					COALESCE(LOWER(comment) = 'disabled', FALSE) AS isDisabled
				FROM information_schema.statistics
				WHERE table_schema = DATABASE()
			`.execute(db)).rows;
			break;
		case "mssql": rows = (await sql`
				SELECT
					tables.name AS "tableName",
					indexes.name AS "indexName",
					columns.name AS "columnName",
					indexes.is_unique AS "isUnique",
					indexes.is_disabled AS "isDisabled",
					indexes.is_hypothetical AS "isHypothetical",
					indexes.has_filter AS "isPartial",
					index_columns.key_ordinal AS "columnPosition"
				FROM sys.indexes AS indexes
				INNER JOIN sys.tables AS tables
					ON indexes.object_id = tables.object_id
				INNER JOIN sys.schemas AS table_schemas
					ON table_schemas.schema_id = tables.schema_id
				INNER JOIN sys.index_columns AS index_columns
					ON index_columns.object_id = indexes.object_id
					AND index_columns.index_id = indexes.index_id
				INNER JOIN sys.columns AS columns
					ON columns.object_id = index_columns.object_id
					AND columns.column_id = index_columns.column_id
				WHERE table_schemas.name = ${target.schema}
					AND indexes.name IS NOT NULL
					AND index_columns.key_ordinal > 0
			`.execute(db)).rows;
	}
	const indexMetadata = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const table = row.tableName ?? row.table_name ?? row.TABLE_NAME ?? row.tablename ?? row.tbl_name;
		const name = row.indexName ?? row.index_name ?? row.INDEX_NAME ?? row.name;
		const column = row.columnName ?? row.column_name ?? row.COLUMN_NAME;
		if (!table || !name) continue;
		const key = createDatabaseIndexKey(table, name);
		const nonUnique = row.nonUnique ?? row.non_unique ?? row.NON_UNIQUE;
		const unique = nonUnique === void 0 ? databaseValueIsTrue(row.isUnique ?? row.is_unique) : !databaseValueIsTrue(nonUnique);
		const position = Number(row.columnPosition ?? row.column_position ?? row.keyOrdinal ?? row.key_ordinal ?? row.ordinality ?? row.seqInIndex ?? row.seq_in_index ?? row.SEQ_IN_INDEX ?? row.seqno ?? 0);
		const indexColumn = {
			fullLength: column !== void 0 && column !== null && (row.prefixLength === void 0 || row.prefixLength === null),
			name: column ?? null,
			position
		};
		const partial = databaseValueIsTrue(row.isPartial);
		const valid = !databaseValueIsTrue(row.isDisabled) && !databaseValueIsTrue(row.isHypothetical) && (row.isValid === void 0 || databaseValueIsTrue(row.isValid));
		const existing = indexMetadata.get(key);
		indexMetadata.set(key, existing ? {
			...existing,
			columns: [...existing.columns, indexColumn],
			partial: existing.partial || partial,
			valid: existing.valid && valid
		} : {
			columns: [indexColumn],
			name,
			partial,
			table,
			unique,
			valid
		});
	}
	return toDatabaseIndexMap([...indexMetadata.values()]);
}
async function getDatabaseColumnBounds(db, target) {
	let rows;
	switch (target.type) {
		case "postgres":
		case "sqlite": return /* @__PURE__ */ new Map();
		case "mysql":
			rows = (await sql`
				SELECT
					table_name AS tableName,
					column_name AS columnName,
					character_octet_length AS maxIndexBytes
				FROM information_schema.columns
				WHERE table_schema = DATABASE()
			`.execute(db)).rows;
			break;
		case "mssql": rows = (await sql`
				SELECT
					tables.name AS "tableName",
					columns.name AS "columnName",
					columns.max_length AS "maxIndexBytes"
				FROM sys.columns AS columns
				INNER JOIN sys.tables AS tables
					ON tables.object_id = columns.object_id
				INNER JOIN sys.schemas AS table_schemas
					ON table_schemas.schema_id = tables.schema_id
				WHERE table_schemas.name = ${target.schema}
			`.execute(db)).rows;
	}
	const bounds = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const table = row.tableName ?? row.TABLE_NAME;
		const column = row.columnName ?? row.COLUMN_NAME;
		if (!table || !column) continue;
		const maxIndexBytes = Number(row.maxIndexBytes ?? row.MAX_INDEX_BYTES ?? -1);
		bounds.set(createDatabaseColumnKey(table, column), { maxIndexBytes: maxIndexBytes < 0 ? null : maxIndexBytes });
	}
	return bounds;
}
function assertExistingTableIndexFits({ columnBounds, dbType, existingColumns, fields, indexes, index, table }) {
	const byteBudget = dbType === "mysql" ? 3072 : 1700;
	let requiredBytes = 0;
	for (const column of index.columns) {
		const field = fields[column];
		if (!field) continue;
		if (field.type === "string" || Array.isArray(field.type)) {
			if (!existingColumns.has(column)) {
				const generatedLength = getDatabaseIndexStringLength({
					columnName: column,
					dialect: dbType,
					fields,
					indexes
				});
				requiredBytes += (generatedLength ?? 0) * (dbType === "mysql" ? 4 : 1);
				continue;
			}
			const bound = columnBounds.get(createDatabaseColumnKey(table, column));
			if (!bound?.maxIndexBytes) throw new BetterAuthError(`Cannot create database index "${index.name}" on existing table "${table}" because column "${column}" is not bounded for ${dbType === "mysql" ? "MySQL" : "SQL Server"}. Change it to a bounded string column, resolve oversized values, then run the migration again.`);
			requiredBytes += bound.maxIndexBytes;
		} else requiredBytes += 16;
	}
	if (requiredBytes > byteBudget) throw new BetterAuthError(`Cannot create database index "${index.name}" on existing table "${table}" because its columns can exceed ${dbType === "mysql" ? "MySQL" : "SQL Server"}'s ${byteBudget}-byte index-key limit. Bound the indexed string columns to the generated schema lengths, resolve oversized values, then run the migration again.`);
}
/**
* Thrown when {@link getMigrations} refuses to add a required column with no
* default value to a populated table. Distinct from the plain
* {@link BetterAuthError} thrown for index-definition conflicts, so callers
* can tell the two apart without matching on message text.
*/
var UnsafeMigrationError = class extends BetterAuthError {};
function hasTimestampColumnDefault(field, dbType) {
	return field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql");
}
function hasStaticColumnDefault(field) {
	return !(field.unique && field.required === false) && (field.type === "string" || field.type === "number" || field.type === "boolean") && field.defaultValue !== void 0 && field.defaultValue !== null && typeof field.defaultValue !== "function";
}
async function tableHasRows(db, dbType, table) {
	const probe = db.selectFrom(table).select(sql`1`.as("present"));
	return (await (dbType === "mssql" ? probe.top(1) : probe.limit(1)).execute()).length > 0;
}
function matchType(columnDataType, fieldType, dbType) {
	function normalize(type) {
		return type.toLowerCase().split("(")[0].trim();
	}
	if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
	const types = map[dbType];
	return (Array.isArray(fieldType) ? types["string"].map((t) => t.toLowerCase()) : types[fieldType].map((t) => t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Build the migration plan that `auth migrate` executes and `auth generate`
* prints for the Kysely adapter.
*
* Adding a required column without a default to a populated table is refused:
* existing rows have no value to backfill. `throwOnUnsafe` picks how that
* refusal is delivered: executing callers get an {@link UnsafeMigrationError},
* read-only callers get the plan plus the same message in `unsafeChanges`.
*
* @throws {UnsafeMigrationError} when a required column cannot be migrated
* safely and `throwOnUnsafe` is left on.
* @throws {BetterAuthError} when an index definition conflicts with an
* existing or already-planned index.
*/
async function getMigrations(config, { throwOnUnsafe = true } = {}) {
	const { schema: betterAuthSchema, tables: authTables, referenceKeys } = buildSchema(config);
	const logger = createLogger(config.logger);
	const unsafeChanges = [];
	const reportUnsafeChange = (message) => {
		if (throwOnUnsafe) throw new UnsafeMigrationError(message);
		unsafeChanges.push(message);
	};
	let { kysely: db, databaseType: dbType, introspectIndexes, schemaName } = await createKyselyAdapter(config);
	if (!dbType) {
		logger.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
		dbType = "sqlite";
	}
	if (!db) {
		logger.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
		process.exit(1);
	}
	const allTableMetadata = await db.introspection.getTables();
	let target;
	let tableMetadata = allTableMetadata;
	switch (dbType) {
		case "postgres": {
			const schema = schemaName ?? await getPostgresSchema(db);
			target = {
				type: "postgres",
				schema
			};
			logger.debug(`PostgreSQL migration: Using schema '${schema}' (${schemaName ? "from database.schemaName" : "from search_path"})`);
			try {
				if (!(await db.introspection.getSchemas()).some(({ name }) => name === schema)) if (schemaName) logger.debug(`Schema '${schema}' does not exist yet. The migration creates it before creating tables.`);
				else logger.warn(`Schema '${schema}' does not exist. Create it before running migrations or check your database configuration.`);
			} catch (error) {
				logger.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
			}
			/**
			* Kysely 0.28 does not expose `isForeign`, while 0.29 adds foreign table metadata.
			* @see https://github.com/kysely-org/kysely/pull/1494
			*/
			tableMetadata = allTableMetadata.filter((table) => table.schema === schema && !table.isView && !("isForeign" in table && table.isForeign));
			logger.debug(`Found ${tableMetadata.length} table(s) in schema '${schema}': ${tableMetadata.map((table) => table.name).join(", ") || "(none)"}`);
			break;
		}
		case "mssql": {
			const schema = await getMssqlSchema(db);
			target = {
				type: "mssql",
				schema
			};
			logger.debug(`SQL Server migration: Using schema '${schema}' (from the current user's default schema)`);
			tableMetadata = allTableMetadata.filter((table) => table.schema === schema);
			break;
		}
		case "mysql":
			target = { type: "mysql" };
			break;
		case "sqlite": target = { type: "sqlite" };
	}
	const databaseIndexMap = await getDatabaseIndexMap(db, target, allTableMetadata.map((table) => table.name), introspectIndexes);
	const databaseColumnBounds = await getDatabaseColumnBounds(db, target);
	const schemaProblems = diffSchema(toPhysicalSchema(db, betterAuthSchema), toIntrospectedTables(tableMetadata)).filter((finding) => finding.kind === "unexpected-required-column").map((finding) => formatSchemaFinding(finding, "database"));
	const toBeCreated = [];
	const toBeAdded = [];
	const toBeAddedIndexes = [];
	const plannedIndexes = /* @__PURE__ */ new Map();
	for (const [key, value] of Object.entries(betterAuthSchema)) {
		if (value.disableMigrations) continue;
		const table = tableMetadata.find((table) => table.name === key);
		for (const index of value.indexes ?? []) {
			const name = index.name;
			const indexKey = createDatabaseIndexKey(key, name);
			const existingIndex = databaseIndexMap.get(indexKey);
			if (existingIndex) {
				if (!databaseIndexMatches(existingIndex, index)) throw new BetterAuthError(`Database index "${name}" on table "${key}" does not match the configured fields and uniqueness. Rename or replace the existing index, then run the migration again.`);
				continue;
			}
			if (dbType === "sqlite" || dbType === "postgres") {
				const indexOnAnotherTable = [...databaseIndexMap.values()].find((databaseIndex) => getPortableDatabaseIdentifierKey(databaseIndex.name) === getPortableDatabaseIdentifierKey(name) && getPortableDatabaseIdentifierKey(databaseIndex.table) !== getPortableDatabaseIdentifierKey(key));
				if (indexOnAnotherTable) throw new BetterAuthError(`Database index name "${name}" is already used by table "${indexOnAnotherTable.table}". Index names must be unique across the schema.`);
			}
			const plannedIndex = plannedIndexes.get(indexKey);
			if (plannedIndex) {
				if (!databaseIndexMatches({
					columns: plannedIndex.columns,
					name: plannedIndex.name,
					table: key,
					unique: plannedIndex.unique ?? false,
					validFullColumns: true
				}, index)) throw new BetterAuthError(`Database index name "${name}" identifies more than one index on table "${key}".`);
				continue;
			}
			if (table && (dbType === "mysql" || dbType === "mssql")) assertExistingTableIndexFits({
				columnBounds: databaseColumnBounds,
				dbType,
				existingColumns: new Set(table.columns.map((column) => column.name)),
				fields: value.fields,
				index,
				indexes: value.indexes ?? [],
				table: key
			});
			plannedIndexes.set(indexKey, index);
			toBeAddedIndexes.push({
				table: key,
				index,
				name
			});
		}
		if (!table) {
			const tIndex = toBeCreated.findIndex((t) => t.table === key);
			const tableData = {
				table: key,
				fields: value.fields,
				order: value.order || Infinity
			};
			const insertIndex = toBeCreated.findIndex((t) => (t.order || Infinity) > tableData.order);
			if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
			else toBeCreated[tIndex].fields = {
				...toBeCreated[tIndex].fields,
				...value.fields
			};
			else toBeCreated.splice(insertIndex, 0, tableData);
			continue;
		}
		const toBeAddedFields = {};
		for (const [fieldName, field] of Object.entries(value.fields)) {
			const column = table.columns.find((c) => c.name === fieldName);
			if (!column) {
				toBeAddedFields[fieldName] = field;
				continue;
			}
			if (field.required !== false && column.isNullable) logger.warn(`Column "${fieldName}" on table "${key}" stays nullable while the schema declares the field required, so existing rows can still hold null. Backfill every row for this column and enforce NOT NULL to remove the drift.`);
			if (matchType(column.dataType, field.type, dbType)) continue;
			else logger.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
		}
		if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
			table: key,
			fields: toBeAddedFields,
			order: value.order || Infinity
		});
	}
	const migrations = [];
	if (schemaName && toBeCreated.length > 0) migrations.push(db.schema.createSchema(schemaName).ifNotExists());
	const useUUIDs = config.advanced?.database?.generateId === "uuid";
	const useNumberId = config.advanced?.database?.generateId === "serial";
	function getType(field, fieldName, tableIndexStringLength) {
		const type = field.type;
		const provider = dbType || "sqlite";
		const typeMap = {
			string: {
				sqlite: "text",
				postgres: "text",
				mysql: tableIndexStringLength ? `varchar(${tableIndexStringLength})` : field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
				mssql: tableIndexStringLength ? `varchar(${tableIndexStringLength})` : field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
			},
			boolean: {
				sqlite: "integer",
				postgres: "boolean",
				mysql: "boolean",
				mssql: "smallint"
			},
			number: {
				sqlite: field.bigint ? "bigint" : "integer",
				postgres: field.bigint ? "bigint" : "integer",
				mysql: field.bigint ? "bigint" : "integer",
				mssql: field.bigint ? "bigint" : "integer"
			},
			date: {
				sqlite: "date",
				postgres: "timestamptz",
				mysql: "timestamp(3)",
				mssql: sql`datetime2(3)`
			},
			json: {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			id: {
				postgres: useNumberId ? sql`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			foreignKeyId: {
				postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			"string[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			"number[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			}
		};
		if (fieldName === "id" || field.references?.field === "id") {
			if (fieldName === "id") return typeMap.id[provider];
			return typeMap.foreignKeyId[provider];
		}
		if (Array.isArray(type)) return "text";
		if (!(type in typeMap)) throw new Error(`Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`);
		return typeMap[type][provider];
	}
	const getModelName = initGetModelName({
		schema: authTables,
		usePlural: false
	});
	const getFieldName = initGetFieldName({
		schema: authTables,
		usePlural: false
	});
	function getReferencePath(field) {
		const reference = field.references;
		if (!reference) throw new BetterAuthError("Cannot resolve a field without references.");
		const keys = referenceKeys.get(field);
		if (!keys) throw new BetterAuthError(`Missing migration reference metadata for "${reference.model}.${reference.field}".`);
		try {
			return `${getModelName(keys.modelKey)}.${getFieldName({
				model: keys.modelKey,
				field: keys.fieldKey
			})}`;
		} catch {
			return `${reference.model}.${reference.field}`;
		}
	}
	const deferredIndexes = [];
	const getTableIndexStringLength = (tableName, fieldName) => {
		if (dbType !== "mysql" && dbType !== "mssql") return void 0;
		const table = betterAuthSchema[tableName];
		if (!table) return void 0;
		return getDatabaseIndexStringLength({
			columnName: fieldName,
			dialect: dbType,
			fields: table.fields,
			indexes: table.indexes ?? []
		});
	};
	if (toBeAdded.length) {
		const populatedTables = /* @__PURE__ */ new Map();
		for (const table of toBeAdded) for (const [fieldName, field] of Object.entries(table.fields)) {
			const timestampDefault = hasTimestampColumnDefault(field, dbType);
			const staticDefault = hasStaticColumnDefault(field);
			if (field.required !== false && !timestampDefault && !staticDefault) {
				let populated = populatedTables.get(table.table);
				if (populated === void 0) {
					populated = await tableHasRows(db, dbType, table.table);
					populatedTables.set(table.table, populated);
				}
				if (populated) {
					const textDetail = field.type === "string" ? " For a text column, every existing row ends up with the same empty string." : "";
					reportUnsafeChange(`Cannot add required column "${fieldName}" to populated table "${table.table}": the schema declares no default value, so existing rows have no value to backfill. MySQL accepts this statement instead of rejecting it and fills every existing row with an implicit default for the column type, reporting a successful migration over corrupted data.${textDetail} Add the column as nullable, backfill a correct value for every row, then make it NOT NULL.`);
				}
			}
			const type = getType(field, fieldName, getTableIndexStringLength(table.table, fieldName));
			const builder = db.schema.alterTable(table.table);
			if (field.index || field.unique) {
				const indexName = getDatabaseFieldIndexName(table.table, fieldName, field.unique ?? false);
				let indexBuilder = db.schema.createIndex(indexName).on(table.table).columns([fieldName]);
				if (field.unique) {
					indexBuilder = indexBuilder.unique();
					if (field.required === false && dbType === "mssql") indexBuilder = indexBuilder.where(fieldName, "is not", null);
					if (field.required !== false && field.defaultValue !== void 0 && field.defaultValue !== null && typeof field.defaultValue !== "function") logger.warn(`Adding unique column "${fieldName}" to existing table "${table.table}" backfills every existing row with its default value. If the table has more than one row, creating the unique index "${indexName}" will fail; backfill distinct values manually, then re-run the migration or create the index yourself.`);
				}
				deferredIndexes.push(indexBuilder);
			}
			const built = builder.addColumn(fieldName, type, (col) => {
				col = field.required !== false ? col.notNull() : col;
				if (field.references) col = col.references(getReferencePath(field)).onDelete(field.references.onDelete || "cascade");
				if (timestampDefault) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
				else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
				else if (staticDefault) col = col.defaultTo(typeof field.defaultValue === "boolean" && (dbType === "sqlite" || dbType === "mssql") ? field.defaultValue ? 1 : 0 : field.defaultValue);
				return col;
			});
			migrations.push(built);
		}
	}
	if (toBeCreated.length) for (const table of toBeCreated) {
		const idType = getType({ type: useNumberId ? "number" : "string" }, "id");
		let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col) => {
			if (useNumberId) {
				if (dbType === "postgres") return col.primaryKey().notNull();
				else if (dbType === "sqlite") return col.primaryKey().notNull();
				else if (dbType === "mssql") return col.identity().primaryKey().notNull();
				return col.autoIncrement().primaryKey().notNull();
			}
			if (useUUIDs) {
				if (dbType === "postgres") return col.primaryKey().defaultTo(sql`pg_catalog.gen_random_uuid()`).notNull();
				return col.primaryKey().notNull();
			}
			return col.primaryKey().notNull();
		});
		for (const [fieldName, field] of Object.entries(table.fields)) {
			const type = getType(field, fieldName, getTableIndexStringLength(table.table, fieldName));
			dbT = dbT.addColumn(fieldName, type, (col) => {
				col = field.required !== false ? col.notNull() : col;
				if (field.references) col = col.references(getReferencePath(field)).onDelete(field.references.onDelete || "cascade");
				if (field.unique) col = col.unique();
				if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
				else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
				return col;
			});
			if (field.index && !field.unique) {
				const builder = db.schema.createIndex(getDatabaseFieldIndexName(table.table, fieldName, false)).on(table.table).columns([fieldName]);
				deferredIndexes.push(builder);
			}
		}
		migrations.push(dbT);
	}
	for (const { table, index, name } of toBeAddedIndexes) {
		let builder = db.schema.createIndex(name).on(table).columns([...index.columns]);
		if (index.unique) builder = builder.unique();
		deferredIndexes.push(builder);
	}
	for (const index of deferredIndexes) migrations.push(index);
	async function runMigrations() {
		try {
			for (const migration of migrations) await migration.execute();
		} finally {
			if (migrations.length && config.database) invalidateSchemaChecks(config.database);
		}
	}
	async function compileMigrations() {
		return migrations.map((m) => m.compile().sql).join(";\n\n") + ";";
	}
	return {
		toBeCreated,
		toBeAdded,
		toBeAddedIndexes,
		unsafeChanges,
		schemaProblems,
		runMigrations,
		compileMigrations
	};
}
var DEFAULT_SECRET = "better-auth-secret-12345678901234567890";
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy$1(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
function parseSecretsEnv(envValue) {
	if (!envValue) return null;
	return envValue.split(",").map((entry) => {
		entry = entry.trim();
		const colonIdx = entry.indexOf(":");
		if (colonIdx === -1) throw new BetterAuthError(`Invalid BETTER_AUTH_SECRETS entry: "${entry}". Expected format: "<version>:<secret>"`);
		const version = parseInt(entry.slice(0, colonIdx), 10);
		if (!Number.isInteger(version) || version < 0) throw new BetterAuthError(`Invalid version in BETTER_AUTH_SECRETS: "${entry.slice(0, colonIdx)}". Version must be a non-negative integer.`);
		const value = entry.slice(colonIdx + 1).trim();
		if (!value) throw new BetterAuthError(`Empty secret value for version ${version} in BETTER_AUTH_SECRETS.`);
		return {
			version,
			value
		};
	});
}
function validateSecretsArray(secrets, logger) {
	if (secrets.length === 0) throw new BetterAuthError("`secrets` array must contain at least one entry.");
	const seen = /* @__PURE__ */ new Set();
	for (const s of secrets) {
		const version = parseInt(String(s.version), 10);
		if (!Number.isInteger(version) || version < 0 || String(version) !== String(s.version).trim()) throw new BetterAuthError(`Invalid version ${s.version} in \`secrets\`. Version must be a non-negative integer.`);
		if (!s.value) throw new BetterAuthError(`Empty secret value for version ${version} in \`secrets\`.`);
		if (seen.has(version)) throw new BetterAuthError(`Duplicate version ${version} in \`secrets\`. Each version must be unique.`);
		seen.add(version);
	}
	const current = secrets[0];
	if (current.value.length < 32) logger.warn(`[better-auth] Warning: the current secret (version ${current.version}) should be at least 32 characters long for adequate security.`);
	if (estimateEntropy$1(current.value) < 120) logger.warn("[better-auth] Warning: the current secret appears low-entropy. Use a randomly generated secret for production.");
}
function buildSecretConfig(secrets, legacySecret) {
	const keys = /* @__PURE__ */ new Map();
	for (const s of secrets) keys.set(parseInt(String(s.version), 10), s.value);
	return {
		keys,
		currentVersion: parseInt(String(secrets[0].version), 10),
		legacySecret: legacySecret && legacySecret !== "better-auth-secret-12345678901234567890" ? legacySecret : void 0
	};
}
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
/**
* Validates that the secret meets minimum security requirements.
* Throws BetterAuthError if the secret is invalid.
* Skips validation for DEFAULT_SECRET in test environments only.
* Only throws for DEFAULT_SECRET in production environment.
*/
function validateSecret(secret, logger) {
	const isDefaultSecret = secret === DEFAULT_SECRET;
	if (isTest()) return;
	if (isDefaultSecret && isProduction) throw new BetterAuthError("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
	if (!secret) throw new BetterAuthError("BETTER_AUTH_SECRET is missing. Set it in your environment or pass `secret` to betterAuth({ secret }).");
	if (secret.length < 32) logger.warn(`[better-auth] Warning: your BETTER_AUTH_SECRET should be at least 32 characters long for adequate security. Generate one with \`npx auth secret\` or \`openssl rand -base64 32\`.`);
	if (estimateEntropy(secret) < 120) logger.warn("[better-auth] Warning: your BETTER_AUTH_SECRET appears low-entropy. Use a randomly generated secret for production.");
}
async function createAuthContext(adapter, options, getDatabaseType) {
	const isStateful = hasServerSessionStore(options);
	if (!isStateful) options = defu(options, { session: { cookieCache: {
		enabled: true,
		strategy: "jwe",
		refreshCache: true,
		maxAge: options.session?.expiresIn || 604800
	} } });
	if (!options.database) options = defu(options, { account: { storeAccountCookie: true } });
	const plugins = options.plugins || [];
	const internalPlugins = getInternalPlugins(options);
	const logger = createLogger(options.logger);
	const isDynamicConfig = isDynamicBaseURLConfig(options.baseURL);
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const { allowedHosts } = options.baseURL;
		if (!allowedHosts || allowedHosts.length === 0) throw new BetterAuthError("baseURL.allowedHosts cannot be empty. Provide at least one allowed host pattern (e.g., [\"myapp.com\", \"*.vercel.app\"]).");
	}
	const baseURL = isDynamicConfig ? void 0 : getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath);
	if (!baseURL && !isDynamicConfig) logger.warn(`[better-auth] Base URL is not set. Set the baseURL option or BETTER_AUTH_URL env, or use a dynamic baseURL with allowedHosts for multi-host setups. Without it the origin is derived from the incoming request, and callbacks and redirects may not work correctly.`);
	if (adapter.id === "memory" && options.advanced?.database?.generateId === false) logger.error(`[better-auth] Misconfiguration detected.
You are using the memory DB with generateId: false.
This will cause no id to be generated for any model.
Most of the features of Better Auth will not work correctly.`);
	const secretsArray = options.secrets ?? parseSecretsEnv(env.BETTER_AUTH_SECRETS);
	const legacySecret = options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET || "";
	let secret;
	let secretConfig;
	if (secretsArray) {
		validateSecretsArray(secretsArray, logger);
		secret = secretsArray[0].value;
		secretConfig = buildSecretConfig(secretsArray, legacySecret);
	} else {
		secret = legacySecret || "better-auth-secret-12345678901234567890";
		validateSecret(secret, logger);
		secretConfig = secret;
	}
	options = {
		...options,
		secret,
		baseURL: isDynamicConfig ? options.baseURL : baseURL ? new URL(baseURL).origin : "",
		basePath: options.basePath || "/api/auth",
		plugins: plugins.concat(internalPlugins)
	};
	checkEndpointConflicts(options, logger);
	const trustedProxies = options.advanced?.ipAddress?.trustedProxies;
	if (trustedProxies && trustedProxies.length > 0) {
		const invalid = findInvalidTrustedProxies(trustedProxies);
		if (invalid.length > 0) logger.warn(`Ignoring invalid \`advanced.ipAddress.trustedProxies\` entries: ${invalid.join(", ")}. Each entry must be an IP address or CIDR range.`);
	}
	const cookies = getCookies(options);
	const tables = getAuthTables(options);
	const providers = (await Promise.all(Object.entries(options.socialProviders || {}).map(async ([key, originalConfig]) => {
		const config = typeof originalConfig === "function" ? await originalConfig() : originalConfig;
		if (config == null) return null;
		if (config.enabled === false) return null;
		if (!config.clientId) logger.warn(`Social provider ${key} is missing clientId or clientSecret`);
		const provider = socialProviders[key](config);
		provider.disableImplicitSignUp = config.disableImplicitSignUp;
		return provider;
	}))).filter((x) => x !== null);
	const generateIdFunc = ({ model, size }) => {
		if (typeof options.advanced?.generateId === "function") return options.advanced.generateId({
			model,
			size
		});
		const dbGenerateId = options?.advanced?.database?.generateId;
		if (typeof dbGenerateId === "function") return dbGenerateId({
			model,
			size
		});
		if (dbGenerateId === "uuid") return crypto.randomUUID();
		if (dbGenerateId === "serial" || dbGenerateId === false) return false;
		return generateId(size);
	};
	const { publish } = await createTelemetry(options, {
		adapter: adapter.id,
		database: typeof options.database === "function" ? "adapter" : getDatabaseType(options.database)
	});
	const pluginIds = new Set(options.plugins.map((p) => p.id));
	const getPluginFn = (id) => options.plugins.find((p) => p.id === id) ?? null;
	const hasPluginFn = (id) => pluginIds.has(id);
	const trustedOrigins = await getTrustedOrigins(options);
	const trustedProviders = await getTrustedProviders(options);
	const ctx = {
		appName: options.appName || "Better Auth",
		baseURL: baseURL || "",
		version: getBetterAuthVersion(),
		socialProviders: providers,
		options,
		oauthConfig: {
			storeStateStrategy: options.account?.storeStateStrategy || (isStateful ? "database" : "cookie"),
			skipStateCookieCheck: !!options.account?.skipStateCookieCheck
		},
		tables,
		trustedOrigins,
		trustedProviders,
		isTrustedOrigin(url, settings) {
			return this.trustedOrigins.some((origin) => matchesOriginPattern(url, origin, settings));
		},
		sessionConfig: {
			updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 86400,
			expiresIn: options.session?.expiresIn || 604800,
			freshAge: options.session?.freshAge === void 0 ? 86400 : options.session.freshAge,
			cookieRefreshCache: (() => {
				const refreshCache = options.session?.cookieCache?.refreshCache;
				const maxAge = options.session?.cookieCache?.maxAge || 300;
				if (isStateful && refreshCache) {
					logger.warn("[better-auth] `session.cookieCache.refreshCache` is enabled while `database` or `secondaryStorage` is configured. `refreshCache` is meant for stateless (DB-less) setups. Disabling `refreshCache` — remove it from your config to silence this warning.");
					return false;
				}
				if (refreshCache === false || refreshCache === void 0) return false;
				if (refreshCache === true) return {
					enabled: true,
					updateAge: Math.floor(maxAge * .2)
				};
				return {
					enabled: true,
					updateAge: refreshCache.updateAge !== void 0 ? refreshCache.updateAge : Math.floor(maxAge * .2)
				};
			})()
		},
		secret,
		secretConfig,
		rateLimit: {
			...options.rateLimit,
			enabled: options.rateLimit?.enabled ?? isProduction,
			window: options.rateLimit?.window || 10,
			max: options.rateLimit?.max || 100,
			storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
		},
		authCookies: cookies,
		logger,
		generateId: generateIdFunc,
		session: null,
		secondaryStorage: options.secondaryStorage,
		password: {
			hash: options.emailAndPassword?.password?.hash || hashPassword$1,
			verify: options.emailAndPassword?.password?.verify || verifyPassword$1$1,
			config: {
				minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
				maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
			},
			checkPassword
		},
		setNewSession(session) {
			this.newSession = session;
		},
		newSession: null,
		adapter,
		internalAdapter: createInternalAdapter(adapter, {
			options,
			logger,
			hooks: options.databaseHooks ? [{
				source: "user",
				hooks: options.databaseHooks
			}] : [],
			generateId: generateIdFunc
		}),
		createAuthCookie: createCookieGetter(options),
		async runMigrations() {
			throw new BetterAuthError("runMigrations will be set by the specific init implementation");
		},
		publishTelemetry: publish,
		skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
		skipOriginCheck: options.advanced?.disableOriginCheck !== void 0 ? options.advanced.disableOriginCheck : isTest() ? true : false,
		runInBackground: options.advanced?.backgroundTasks?.handler ?? ((p) => {
			p.catch(() => {});
		}),
		async runInBackgroundOrAwait(promise) {
			try {
				if (options.advanced?.backgroundTasks?.handler) {
					if (promise instanceof Promise) options.advanced.backgroundTasks.handler(promise.catch((e) => {
						logger.error("Failed to run background task:", e);
					}));
				} else await promise;
			} catch (e) {
				logger.error("Failed to run background task:", e);
			}
		},
		getPlugin: getPluginFn,
		hasPlugin: hasPluginFn
	};
	const initOrPromise = runPluginInit(ctx);
	if (isPromise(initOrPromise)) await initOrPromise;
	ctx.checkSchema = runtimeSchemaCheckFor(ctx.adapter);
	ctx.explicitSchemaCheck = schemaCheckFor(ctx.adapter);
	return ctx;
}
var init = async (options) => {
	const adapter = await getAdapter(options);
	const getDatabaseType = (database) => getKyselyDatabaseType(database) || "unknown";
	const ctx = await createAuthContext(adapter, options, getDatabaseType);
	ctx.runMigrations = async function() {
		if (!options.database || "updateMany" in options.database) throw new BetterAuthError("Database is not provided or it's an adapter. Migrations are only supported with a database instance.");
		const { runMigrations } = await getMigrations(options);
		await runMigrations();
	};
	return ctx;
};
var createBetterAuth = (options, initFn) => {
	const authContext = initFn(options).then((ctx) => {
		const validateSchema = ctx.options.advanced?.database?.validateSchema;
		if (!ctx.checkSchema && validateSchema !== false) {
			const level = validateSchema === true ? "warn" : "debug";
			ctx.logger[level](`Schema validation is not available for adapter "${ctx.adapter.id}". Skipping schema validation. Database operations will proceed normally.`);
		}
		const pendingSchemaCheck = ctx.checkSchema?.();
		if (pendingSchemaCheck) pendingSchemaCheck.catch((error) => {
			ctx.logger.error(error instanceof SchemaMismatchError ? error.message : "Could not validate the database schema. Check your database connection.");
		});
		return ctx;
	});
	const { api } = getEndpoints(authContext, options);
	const errorCodes = options.plugins?.reduce((acc, plugin) => {
		if (plugin.$ERROR_CODES) return {
			...acc,
			...plugin.$ERROR_CODES
		};
		return acc;
	}, {});
	const handler = async (request) => {
		const ctx = await authContext;
		const basePath = ctx.options.basePath || "/api/auth";
		let handlerCtx;
		if (isDynamicBaseURLConfig(options.baseURL)) handlerCtx = await resolveRequestContext(ctx, request, resolveDynamicTrustedProxyHeaders(ctx.options));
		else {
			handlerCtx = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
			let trustOptions = ctx.options;
			if (!ctx.options.baseURL) {
				const baseURL = getBaseURL(void 0, basePath, request, void 0, ctx.options.advanced?.trustedProxyHeaders);
				if (!baseURL) throw new BetterAuthError("Could not get base URL from request. Please provide a valid base URL.");
				handlerCtx.baseURL = baseURL;
				handlerCtx.options = {
					...ctx.options,
					baseURL: getOrigin(baseURL) || void 0
				};
				trustOptions = handlerCtx.options;
			}
			handlerCtx.trustedOrigins = await getTrustedOrigins(trustOptions, request);
			handlerCtx.trustedProviders = await getTrustedProviders(trustOptions, request);
		}
		const { handler } = router(handlerCtx, options);
		return runWithAdapter(handlerCtx.adapter, () => handler(request));
	};
	return {
		handler,
		fetch: handler,
		api,
		options,
		$context: authContext,
		$ERROR_CODES: {
			...errorCodes,
			...BASE_ERROR_CODES
		}
	};
};
/**
* Better Auth initializer for full mode (with Kysely)
*
* @example
* ```ts
* import { betterAuth } from "better-auth";
*
* const auth = betterAuth({
* 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
* });
* ```
*
* For minimal mode (without Kysely), import from `better-auth/minimal` instead
* @example
* ```ts
* import { betterAuth } from "better-auth/minimal";
*
* const auth = betterAuth({
*	  database: drizzleAdapter(db, { provider: "pg" }),
* });
*/
var betterAuth = (options) => {
	return createBetterAuth(options, init);
};
var prisma_adapter_exports = /* @__PURE__ */ __exportAll({});
__reExport(prisma_adapter_exports, dist_exports);
function unknownResourceResponse(requestedResource) {
	return {
		success: false,
		error: `You are not allowed to access resource: ${requestedResource}`
	};
}
function unauthorizedResourceResponse(requestedResource) {
	return {
		success: false,
		error: `unauthorized to access resource "${requestedResource}"`
	};
}
function normalizeConnector(connector) {
	return connector === "OR" ? "OR" : "AND";
}
function isActionList(actions) {
	return Array.isArray(actions);
}
function normalizeActionRequest(requestedActions) {
	if (isActionList(requestedActions)) return {
		actions: requestedActions,
		connector: "AND"
	};
	if (!requestedActions || typeof requestedActions !== "object") throw new BetterAuthError("Invalid access control request");
	const { actions, connector } = requestedActions;
	if (!isActionList(actions)) return {
		actions: [],
		connector: normalizeConnector(connector)
	};
	return {
		actions,
		connector: normalizeConnector(connector)
	};
}
function hasAllowedAction(allowedActions, requestedAction) {
	return typeof requestedAction === "string" && allowedActions.includes(requestedAction);
}
function isResourceAuthorized(allowedActions, { actions, connector }) {
	if (actions.length === 0) return false;
	if (connector === "OR") return actions.some((requestedAction) => hasAllowedAction(allowedActions, requestedAction));
	return actions.every((requestedAction) => hasAllowedAction(allowedActions, requestedAction));
}
function role(statements) {
	return {
		authorize(request, connector = "AND") {
			let hasAuthorizedResource = false;
			for (const [requestedResource, requestedActions] of Object.entries(request)) {
				const allowedActions = statements[requestedResource];
				if (!allowedActions) {
					if (connector === "AND") return unknownResourceResponse(requestedResource);
					continue;
				}
				const isAuthorized = isResourceAuthorized(allowedActions, normalizeActionRequest(requestedActions));
				if (isAuthorized) hasAuthorizedResource = true;
				if (isAuthorized && connector === "OR") return { success: true };
				if (!isAuthorized && connector === "AND") return unauthorizedResourceResponse(requestedResource);
			}
			if (hasAuthorizedResource) return { success: true };
			return {
				success: false,
				error: "Not authorized"
			};
		},
		statements
	};
}
function createAccessControl(s) {
	return {
		newRole(statements) {
			return role(statements);
		},
		statements: s
	};
}
var PACKAGE_VERSION = "1.7.12";
var defaultAc = createAccessControl({
	user: [
		"create",
		"list",
		"set-role",
		"ban",
		"impersonate",
		"impersonate-admins",
		"delete",
		"set-password",
		"set-email",
		"get",
		"update"
	],
	session: [
		"list",
		"revoke",
		"delete"
	]
});
var defaultRoles = {
	admin: defaultAc.newRole({
		user: [
			"create",
			"list",
			"set-role",
			"ban",
			"impersonate",
			"delete",
			"set-password",
			"set-email",
			"get",
			"update"
		],
		session: [
			"list",
			"revoke",
			"delete"
		]
	}),
	user: defaultAc.newRole({
		user: [],
		session: []
	})
};
var ADMIN_ERROR_CODES = defineErrorCodes({
	FAILED_TO_CREATE_USER: "Failed to create user",
	USER_ALREADY_EXISTS: "User already exists.",
	USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Use another email.",
	YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself",
	YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role",
	YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users",
	YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions",
	YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users",
	YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users",
	YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions",
	YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password",
	BANNED_USER: "You have been banned from this application",
	YOU_ARE_NOT_ALLOWED_TO_GET_USER: "You are not allowed to get user",
	NO_DATA_TO_UPDATE: "No data to update",
	YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "You are not allowed to update users",
	YOU_CANNOT_REMOVE_YOURSELF: "You cannot remove yourself",
	YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE: "You are not allowed to set a non-existent role value",
	YOU_CANNOT_IMPERSONATE_ADMINS: "You cannot impersonate admins",
	INVALID_ROLE_TYPE: "Invalid role type",
	YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL: "You are not allowed to update users email",
	PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER: "Password cannot be updated through update-user. Use the set-user-password endpoint instead"
});
var getEndpointResponse = async (ctx) => {
	const returned = ctx.context.returned;
	if (!returned) return null;
	if (returned instanceof Response) {
		if (returned.status !== 200) return null;
		return await returned.clone().json();
	}
	if (isAPIError(returned)) return null;
	return returned;
};
var hasPermission = (input) => {
	if (input.userId && input.options?.adminUserIds?.includes(input.userId)) return true;
	if (!input.permissions) return false;
	const roles = (input.role || input.options?.defaultRole || "user").split(",");
	const acRoles = input.options?.roles || defaultRoles;
	for (const role of roles) if ((acRoles[role]?.authorize(input.permissions))?.success) return true;
	return false;
};
/**
* Ensures a valid session, if not will throw.
* Will also provide additional types on the user to include role types.
*/
var adminMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getAuthoritativeSessionFromCtx(ctx);
	if (!session) throw APIError.fromStatus("UNAUTHORIZED");
	return { session };
});
function parseRoles(roles) {
	return Array.isArray(roles) ? roles.join(",") : roles;
}
var setRoleBodySchema = object({
	userId: string$1().meta({ description: "The user id" }),
	role: union([string().meta({ description: "The role to set. `admin` or `user` by default" }), array(string().meta({ description: "The roles to set. `admin` or `user` by default" }))]).meta({ description: "The role to set, this can be a string or an array of strings. Eg: `admin` or `[admin, user]`" })
});
/**
* ### Endpoint
*
* POST `/admin/set-role`
*
* ### API Methods
*
* **server:**
* `auth.api.setRole`
*
* **client:**
* `authClient.admin.setRole`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-set-role)
*/
var setRole = (opts) => createAuthEndpoint("/admin/set-role", {
	method: "POST",
	body: setRoleBodySchema,
	requireHeaders: true,
	use: [adminMiddleware],
	metadata: {
		openapi: {
			operationId: "setUserRole",
			summary: "Set the role of a user",
			description: "Set the role of a user",
			responses: { 200: {
				description: "User role updated",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: { $ref: "#/components/schemas/User" } }
				} } }
			} }
		},
		$Infer: { body: {} }
	}
}, async (ctx) => {
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: ctx.context.session.user.role,
		options: opts,
		permissions: { user: ["set-role"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE);
	const roles = opts.roles;
	if (roles) {
		const inputRoles = Array.isArray(ctx.body.role) ? ctx.body.role : [ctx.body.role];
		for (const role of inputRoles) if (!roles[role]) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE);
	}
	if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	const updatedUser = await ctx.context.internalAdapter.updateUser(ctx.body.userId, { role: parseRoles(ctx.body.role) });
	return ctx.json({ user: parseUserOutput(ctx.context.options, updatedUser) });
});
var getUserQuerySchema = object({ id: string().meta({ description: "The id of the User" }) });
var getUser = (opts) => createAuthEndpoint("/admin/get-user", {
	method: "GET",
	query: getUserQuerySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "getUser",
		summary: "Get an existing user",
		description: "Get an existing user",
		responses: { 200: {
			description: "User",
			content: { "application/json": { schema: {
				type: "object",
				properties: { user: { $ref: "#/components/schemas/User" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { id } = ctx.query;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: ctx.context.session.user.role,
		options: opts,
		permissions: { user: ["get"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_GET_USER);
	const user = await ctx.context.internalAdapter.findUserById(id);
	if (!user) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	return parseUserOutput(ctx.context.options, user);
});
var createUserBodySchema = object({
	email: string().meta({ description: "The email of the user" }),
	password: string().optional().meta({ description: "The password of the user. If not provided, the user will be created without a credential account (useful for magic link or social login only users)." }),
	name: string().meta({ description: "The name of the user" }),
	role: union([string().meta({ description: "The role of the user" }), array(string().meta({ description: "The roles of user" }))]).optional().meta({ description: `A string or array of strings representing the roles to apply to the new user. Eg: \"user\"` }),
	/**
	* extra fields for user
	*/
	data: record(string(), any()).optional().meta({ description: "Extra fields for the user. Including custom additional fields." })
});
/**
* ### Endpoint
*
* POST `/admin/create-user`
*
* ### API Methods
*
* **server:**
* `auth.api.createUser`
*
* **client:**
* `authClient.admin.createUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-create-user)
*/
var createUser = (opts) => createAuthEndpoint("/admin/create-user", {
	method: "POST",
	body: createUserBodySchema,
	metadata: {
		openapi: {
			operationId: "createUser",
			summary: "Create a new user",
			description: "Create a new user",
			responses: { 200: {
				description: "User created",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: { $ref: "#/components/schemas/User" } }
				} } }
			} }
		},
		$Infer: { body: {} }
	}
}, async (ctx) => {
	const session = await getAuthoritativeSessionFromCtx(ctx);
	if (!session && (ctx.request || ctx.headers)) throw ctx.error("UNAUTHORIZED");
	if (session) {
		if (!hasPermission({
			userId: session.user.id,
			role: session.user.role,
			options: opts,
			permissions: { user: ["create"] }
		})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS);
	}
	const { role: dataRole, ...userData } = ctx.body.data ?? {};
	const requestedRole = ctx.body.role ?? dataRole;
	if (requestedRole !== void 0) {
		if (session) {
			if (!hasPermission({
				userId: session.user.id,
				role: session.user.role,
				options: opts,
				permissions: { user: ["set-role"] }
			})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE);
		}
		const inputRoles = Array.isArray(requestedRole) ? requestedRole : [requestedRole];
		for (const role of inputRoles) {
			if (typeof role !== "string") throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.INVALID_ROLE_TYPE);
			if (opts.roles && !opts.roles[role]) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE);
		}
	}
	if (session && [
		"banned",
		"banReason",
		"banExpires"
	].some((key) => Object.prototype.hasOwnProperty.call(userData, key))) {
		if (!hasPermission({
			userId: session.user.id,
			role: session.user.role,
			options: opts,
			permissions: { user: ["ban"] }
		})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_BAN_USERS);
	}
	const email$3 = ctx.body.email.toLowerCase();
	if (!email().safeParse(email$3).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
	if (ctx.body.password) assertPasswordNotTooLong(ctx, ctx.body.password);
	if (await ctx.context.internalAdapter.findUserByEmail(email$3)) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
	const user = await ctx.context.internalAdapter.createUser({
		...userData,
		email: email$3,
		name: ctx.body.name,
		role: requestedRole !== void 0 ? parseRoles(requestedRole) : opts?.defaultRole ?? "user"
	}, { method: "admin" });
	if (!user) throw APIError.from("INTERNAL_SERVER_ERROR", ADMIN_ERROR_CODES.FAILED_TO_CREATE_USER);
	if (ctx.body.password) {
		const hashedPassword = await ctx.context.password.hash(ctx.body.password);
		await ctx.context.internalAdapter.linkAccount({
			providerId: "credential",
			accountId: user.id,
			password: hashedPassword,
			userId: user.id
		});
	}
	return ctx.json({ user: parseUserOutput(ctx.context.options, user) });
});
var adminUpdateUserBodySchema = object({
	userId: string$1().meta({ description: "The user id" }),
	data: record(any(), any()).meta({ description: "The user data to update" })
});
/**
* ### Endpoint
*
* POST `/admin/update-user`
*
* ### API Methods
*
* **server:**
* `auth.api.adminUpdateUser`
*
* **client:**
* `authClient.admin.updateUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-update-user)
*/
var adminUpdateUser = (opts) => createAuthEndpoint("/admin/update-user", {
	method: "POST",
	body: adminUpdateUserBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "adminUpdateUser",
		summary: "Update a user",
		description: "Update a user's details",
		responses: { 200: {
			description: "User updated",
			content: { "application/json": { schema: {
				type: "object",
				properties: { user: { $ref: "#/components/schemas/User" } }
			} } }
		} }
	} }
}, async (ctx) => {
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: ctx.context.session.user.role,
		options: opts,
		permissions: { user: ["update"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS);
	if (Object.keys(ctx.body.data).length === 0) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.NO_DATA_TO_UPDATE);
	const updateData = ctx.body.data;
	const hasDataKey = (key) => Object.prototype.hasOwnProperty.call(updateData, key);
	if (hasDataKey("password")) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER);
	if (Object.prototype.hasOwnProperty.call(ctx.body.data, "role")) {
		if (!hasPermission({
			userId: ctx.context.session.user.id,
			role: ctx.context.session.user.role,
			options: opts,
			permissions: { user: ["set-role"] }
		})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE);
		const roleValue = ctx.body.data.role;
		const inputRoles = Array.isArray(roleValue) ? roleValue : [roleValue];
		for (const role of inputRoles) {
			if (typeof role !== "string") throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.INVALID_ROLE_TYPE);
			if (opts.roles && !opts.roles[role]) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE);
		}
		ctx.body.data.role = parseRoles(inputRoles);
	}
	if ([
		"banned",
		"banReason",
		"banExpires"
	].some(hasDataKey)) {
		if (!hasPermission({
			userId: ctx.context.session.user.id,
			role: ctx.context.session.user.role,
			options: opts,
			permissions: { user: ["ban"] }
		})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_BAN_USERS);
		if (updateData.banned === true && ctx.body.userId === ctx.context.session.user.id) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_CANNOT_BAN_YOURSELF);
	}
	if (hasDataKey("email") || hasDataKey("emailVerified")) {
		if (!hasPermission({
			userId: ctx.context.session.user.id,
			role: ctx.context.session.user.role,
			options: opts,
			permissions: { user: ["set-email"] }
		})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL);
		if (hasDataKey("email")) {
			const email$2 = String(updateData.email).toLowerCase();
			if (!email().safeParse(email$2).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
			const existUser = await ctx.context.internalAdapter.findUserByEmail(email$2);
			if (existUser && existUser.user.id !== ctx.body.userId) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
			updateData.email = email$2;
		}
	}
	if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	const updatedUser = await ctx.context.internalAdapter.updateUser(ctx.body.userId, ctx.body.data);
	if (updateData.banned === true) await ctx.context.internalAdapter.deleteUserSessions(ctx.body.userId);
	return ctx.json(parseUserOutput(ctx.context.options, updatedUser));
});
var listUsersQuerySchema = object({
	searchValue: string().optional().meta({ description: "The value to search for. Eg: \"some name\"" }),
	searchField: _enum(["email", "name"]).meta({ description: "The field to search in, defaults to email. Can be `email` or `name`. Eg: \"name\"" }).optional(),
	searchOperator: _enum([
		"contains",
		"starts_with",
		"ends_with"
	]).meta({ description: "The operator to use for the search. Can be `contains`, `starts_with` or `ends_with`. Eg: \"contains\"" }).optional(),
	limit: string().meta({ description: "The number of users to return" }).or(number()).optional(),
	offset: string().meta({ description: "The offset to start from" }).or(number()).optional(),
	sortBy: string().meta({ description: "The field to sort by" }).optional(),
	sortDirection: _enum(["asc", "desc"]).meta({ description: "The direction to sort by" }).optional(),
	filterField: string().meta({ description: "The field to filter by" }).optional(),
	filterValue: string().meta({ description: "The value to filter by" }).or(number()).or(boolean$1()).or(array(string())).or(array(number())).optional(),
	filterOperator: _enum(whereOperators).meta({ description: "The operator to use for the filter" }).optional()
});
var listUsers = (opts) => createAuthEndpoint("/admin/list-users", {
	method: "GET",
	use: [adminMiddleware],
	query: listUsersQuerySchema,
	metadata: { openapi: {
		operationId: "listUsers",
		summary: "List users",
		description: "List users",
		responses: { 200: {
			description: "List of users",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					users: {
						type: "array",
						items: { $ref: "#/components/schemas/User" }
					},
					total: { type: "number" },
					limit: { type: "number" },
					offset: { type: "number" }
				},
				required: ["users", "total"]
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { user: ["list"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_LIST_USERS);
	const where = [];
	if (ctx.query?.searchValue) where.push({
		field: ctx.query.searchField || "email",
		operator: ctx.query.searchOperator || "contains",
		value: ctx.query.searchValue
	});
	if (ctx.query?.filterValue !== void 0) where.push({
		field: ctx.query.filterField || "email",
		operator: ctx.query.filterOperator || "eq",
		value: ctx.query.filterValue
	});
	try {
		const users = await ctx.context.internalAdapter.listUsers(Number(ctx.query?.limit) || void 0, Number(ctx.query?.offset) || void 0, ctx.query?.sortBy ? {
			field: ctx.query.sortBy,
			direction: ctx.query.sortDirection || "asc"
		} : void 0, where.length ? where : void 0);
		const total = await ctx.context.internalAdapter.countTotalUsers(where.length ? where : void 0);
		return ctx.json({
			users: users.map((user) => parseUserOutput(ctx.context.options, user)),
			total,
			limit: Number(ctx.query?.limit) || void 0,
			offset: Number(ctx.query?.offset) || void 0
		});
	} catch {
		return ctx.json({
			users: [],
			total: 0
		});
	}
});
var listUserSessionsBodySchema = object({ userId: string$1().meta({ description: "The user id" }) });
/**
* ### Endpoint
*
* POST `/admin/list-user-sessions`
*
* ### API Methods
*
* **server:**
* `auth.api.listUserSessions`
*
* **client:**
* `authClient.admin.listUserSessions`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-list-user-sessions)
*/
var listUserSessions = (opts) => createAuthEndpoint("/admin/list-user-sessions", {
	method: "POST",
	use: [adminMiddleware],
	body: listUserSessionsBodySchema,
	metadata: { openapi: {
		operationId: "adminListUserSessions",
		summary: "List user sessions",
		description: "List user sessions",
		responses: { 200: {
			description: "List of user sessions",
			content: { "application/json": { schema: {
				type: "object",
				properties: { sessions: {
					type: "array",
					items: { $ref: "#/components/schemas/Session" }
				} }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { session: ["list"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS);
	const sessions = await ctx.context.internalAdapter.listSessions(ctx.body.userId);
	return ctx.json({ sessions: sessions.map((s) => parseSessionOutput(ctx.context.options, s)) });
});
var unbanUserBodySchema = object({ userId: string$1().meta({ description: "The user id" }) });
/**
* ### Endpoint
*
* POST `/admin/unban-user`
*
* ### API Methods
*
* **server:**
* `auth.api.unbanUser`
*
* **client:**
* `authClient.admin.unbanUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-unban-user)
*/
var unbanUser = (opts) => createAuthEndpoint("/admin/unban-user", {
	method: "POST",
	body: unbanUserBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "unbanUser",
		summary: "Unban a user",
		description: "Unban a user",
		responses: { 200: {
			description: "User unbanned",
			content: { "application/json": { schema: {
				type: "object",
				properties: { user: { $ref: "#/components/schemas/User" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { user: ["ban"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_BAN_USERS);
	if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	const user = await ctx.context.internalAdapter.updateUser(ctx.body.userId, {
		banned: false,
		banExpires: null,
		banReason: null,
		updatedAt: /* @__PURE__ */ new Date()
	});
	return ctx.json({ user: parseUserOutput(ctx.context.options, user) });
});
var banUserBodySchema = object({
	userId: string$1().meta({ description: "The user id" }),
	/**
	* Reason for the ban
	*/
	banReason: string().meta({ description: "The reason for the ban" }).optional(),
	/**
	* Number of seconds until the ban expires
	*/
	banExpiresIn: number().meta({ description: "The number of seconds until the ban expires" }).optional()
});
/**
* ### Endpoint
*
* POST `/admin/ban-user`
*
* ### API Methods
*
* **server:**
* `auth.api.banUser`
*
* **client:**
* `authClient.admin.banUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-ban-user)
*/
var banUser = (opts) => createAuthEndpoint("/admin/ban-user", {
	method: "POST",
	body: banUserBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "banUser",
		summary: "Ban a user",
		description: "Ban a user",
		responses: { 200: {
			description: "User banned",
			content: { "application/json": { schema: {
				type: "object",
				properties: { user: { $ref: "#/components/schemas/User" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { user: ["ban"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_BAN_USERS);
	if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	if (ctx.body.userId === ctx.context.session.user.id) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_CANNOT_BAN_YOURSELF);
	const user = await ctx.context.internalAdapter.updateUser(ctx.body.userId, {
		banned: true,
		banReason: ctx.body.banReason || opts?.defaultBanReason || "No reason",
		banExpires: ctx.body.banExpiresIn ? getDate(ctx.body.banExpiresIn, "sec") : opts?.defaultBanExpiresIn ? getDate(opts.defaultBanExpiresIn, "sec") : null,
		updatedAt: /* @__PURE__ */ new Date()
	});
	await ctx.context.internalAdapter.deleteUserSessions(ctx.body.userId);
	return ctx.json({ user: parseUserOutput(ctx.context.options, user) });
});
var impersonateUserBodySchema = object({ userId: string$1().meta({ description: "The user id" }) });
/**
* ### Endpoint
*
* POST `/admin/impersonate-user`
*
* ### API Methods
*
* **server:**
* `auth.api.impersonateUser`
*
* **client:**
* `authClient.admin.impersonateUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-impersonate-user)
*/
var impersonateUser = (opts) => createAuthEndpoint("/admin/impersonate-user", {
	method: "POST",
	body: impersonateUserBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "impersonateUser",
		summary: "Impersonate a user",
		description: "Impersonate a user",
		responses: { 200: {
			description: "Impersonation session created",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					session: { $ref: "#/components/schemas/Session" },
					user: { $ref: "#/components/schemas/User" }
				}
			} } }
		} }
	} }
}, async (ctx) => {
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: ctx.context.session.user.role,
		options: opts,
		permissions: { user: ["impersonate"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS);
	const targetUser = await ctx.context.internalAdapter.findUserById(ctx.body.userId);
	if (!targetUser) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	const adminRoles = (Array.isArray(opts.adminRoles) ? opts.adminRoles : opts.adminRoles?.split(",") || []).map((role) => role.trim());
	if ((targetUser.role || opts.defaultRole || "user").split(",").some((role) => adminRoles.includes(role)) || !!opts.adminUserIds?.includes(targetUser.id)) {
		if (!(opts.allowImpersonatingAdmins === true || hasPermission({
			userId: ctx.context.session.user.id,
			role: ctx.context.session.user.role,
			options: opts,
			permissions: { user: ["impersonate-admins"] }
		}))) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_CANNOT_IMPERSONATE_ADMINS);
	}
	const session = await ctx.context.internalAdapter.createSession(targetUser.id, true, {
		impersonatedBy: ctx.context.session.user.id,
		expiresAt: opts?.impersonationSessionDuration ? getDate(opts.impersonationSessionDuration, "sec") : getDate(3600, "sec")
	}, true);
	if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", ADMIN_ERROR_CODES.FAILED_TO_CREATE_USER);
	const authCookies = ctx.context.authCookies;
	deleteSessionCookie(ctx);
	const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
	const adminCookieProp = ctx.context.createAuthCookie("admin_session");
	await ctx.setSignedCookie(adminCookieProp.name, `${ctx.context.session.session.token}:${dontRememberMeCookie || ""}`, ctx.context.secret, authCookies.sessionToken.attributes);
	await setSessionCookie(ctx, {
		session,
		user: targetUser
	}, true);
	return ctx.json({
		session,
		user: parseUserOutput(ctx.context.options, targetUser)
	});
});
/**
* ### Endpoint
*
* POST `/admin/stop-impersonating`
*
* ### API Methods
*
* **server:**
* `auth.api.stopImpersonating`
*
* **client:**
* `authClient.admin.stopImpersonating`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-stop-impersonating)
*/
var stopImpersonating = () => createAuthEndpoint("/admin/stop-impersonating", {
	method: "POST",
	requireHeaders: true
}, async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session) throw APIError.fromStatus("UNAUTHORIZED");
	if (!session.session.impersonatedBy) throw APIError.fromStatus("BAD_REQUEST", { message: "You are not impersonating anyone" });
	const user = await ctx.context.internalAdapter.findUserById(session.session.impersonatedBy);
	if (!user) throw APIError.fromStatus("INTERNAL_SERVER_ERROR", { message: "Failed to find user" });
	const adminSessionCookie = ctx.context.createAuthCookie("admin_session");
	const adminCookie = await ctx.getSignedCookie(adminSessionCookie.name, ctx.context.secret);
	if (!adminCookie) throw APIError.fromStatus("INTERNAL_SERVER_ERROR", { message: "Failed to find admin session" });
	const [adminSessionToken, dontRememberMeCookie] = adminCookie?.split(":");
	const adminSession = await ctx.context.internalAdapter.findSession(adminSessionToken);
	if (!adminSession || adminSession.session.userId !== user.id) throw APIError.fromStatus("INTERNAL_SERVER_ERROR", { message: "Failed to find admin session" });
	await ctx.context.internalAdapter.deleteSession(session.session.token);
	await setSessionCookie(ctx, adminSession, !!dontRememberMeCookie);
	expireCookie(ctx, adminSessionCookie);
	return ctx.json({
		session: parseSessionOutput(ctx.context.options, adminSession.session),
		user: parseUserOutput(ctx.context.options, adminSession.user)
	});
});
var revokeUserSessionBodySchema = object({ sessionToken: string().meta({ description: "The session token" }) });
/**
* ### Endpoint
*
* POST `/admin/revoke-user-session`
*
* ### API Methods
*
* **server:**
* `auth.api.revokeUserSession`
*
* **client:**
* `authClient.admin.revokeUserSession`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-revoke-user-session)
*/
var revokeUserSession = (opts) => createAuthEndpoint("/admin/revoke-user-session", {
	method: "POST",
	body: revokeUserSessionBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "revokeUserSession",
		summary: "Revoke a user session",
		description: "Revoke a user session",
		responses: { 200: {
			description: "Session revoked",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { session: ["revoke"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS);
	await ctx.context.internalAdapter.deleteSession(ctx.body.sessionToken);
	return ctx.json({ success: true });
});
var revokeUserSessionsBodySchema = object({ userId: string$1().meta({ description: "The user id" }) });
/**
* ### Endpoint
*
* POST `/admin/revoke-user-sessions`
*
* ### API Methods
*
* **server:**
* `auth.api.revokeUserSessions`
*
* **client:**
* `authClient.admin.revokeUserSessions`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-revoke-user-sessions)
*/
var revokeUserSessions = (opts) => createAuthEndpoint("/admin/revoke-user-sessions", {
	method: "POST",
	body: revokeUserSessionsBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "revokeUserSessions",
		summary: "Revoke all user sessions",
		description: "Revoke all user sessions",
		responses: { 200: {
			description: "Sessions revoked",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { session: ["revoke"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS);
	await ctx.context.internalAdapter.deleteUserSessions(ctx.body.userId);
	return ctx.json({ success: true });
});
var removeUserBodySchema = object({ userId: string$1().meta({ description: "The user id" }) });
/**
* ### Endpoint
*
* POST `/admin/remove-user`
*
* ### API Methods
*
* **server:**
* `auth.api.removeUser`
*
* **client:**
* `authClient.admin.removeUser`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-remove-user)
*/
var removeUser = (opts) => createAuthEndpoint("/admin/remove-user", {
	method: "POST",
	body: removeUserBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "removeUser",
		summary: "Remove a user",
		description: "Delete a user and all their sessions and accounts. Cannot be undone.",
		responses: { 200: {
			description: "User removed",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: session.user.role,
		options: opts,
		permissions: { user: ["delete"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS);
	if (ctx.body.userId === ctx.context.session.user.id) throw APIError.from("BAD_REQUEST", ADMIN_ERROR_CODES.YOU_CANNOT_REMOVE_YOURSELF);
	if (!await ctx.context.internalAdapter.findUserById(ctx.body.userId)) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	await ctx.context.internalAdapter.deleteUserSessions(ctx.body.userId);
	await ctx.context.internalAdapter.deleteUser(ctx.body.userId);
	return ctx.json({ success: true });
});
var setUserPasswordBodySchema = object({
	newPassword: string().nonempty("newPassword cannot be empty").meta({ description: "The new password" }),
	userId: string$1().nonempty("userId cannot be empty").meta({ description: "The user id" })
});
/**
* ### Endpoint
*
* POST `/admin/set-user-password`
*
* ### API Methods
*
* **server:**
* `auth.api.setUserPassword`
*
* **client:**
* `authClient.admin.setUserPassword`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-set-user-password)
*/
var setUserPassword = (opts) => createAuthEndpoint("/admin/set-user-password", {
	method: "POST",
	body: setUserPasswordBodySchema,
	use: [adminMiddleware],
	metadata: { openapi: {
		operationId: "setUserPassword",
		summary: "Set a user's password",
		description: "Set a user's password",
		responses: { 200: {
			description: "Password set",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	if (!hasPermission({
		userId: ctx.context.session.user.id,
		role: ctx.context.session.user.role,
		options: opts,
		permissions: { user: ["set-password"] }
	})) throw APIError.from("FORBIDDEN", ADMIN_ERROR_CODES.YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD);
	const { newPassword, userId } = ctx.body;
	assertPasswordNotTooShort(ctx, newPassword);
	assertPasswordNotTooLong(ctx, newPassword);
	const user = await ctx.context.internalAdapter.findUserById(userId);
	if (!user) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.USER_NOT_FOUND);
	const hashedPassword = await ctx.context.password.hash(newPassword);
	if (await ctx.context.internalAdapter.findCredentialAccount(userId)) await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
	else await ctx.context.internalAdapter.createAccount({
		userId,
		providerId: "credential",
		accountId: user.id,
		password: hashedPassword
	});
	return ctx.json({ status: true });
});
var userHasPermissionBodySchema = object({
	userId: string$1().optional().meta({ description: `The user id. Eg: "user-id"` }),
	role: string().optional().meta({ description: `The role to check permission for. Eg: "admin"` })
}).and(xor([object({ permission: record(string(), array(string())) }), object({ permissions: record(string(), array(string())) })]));
/**
* ### Endpoint
*
* POST `/admin/has-permission`
*
* ### API Methods
*
* **server:**
* `auth.api.userHasPermission`
*
* **client:**
* `authClient.admin.hasPermission`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/admin#api-method-admin-has-permission)
*/
var userHasPermission = (opts) => {
	return createAuthEndpoint("/admin/has-permission", {
		method: "POST",
		body: userHasPermissionBodySchema,
		metadata: {
			openapi: {
				description: "Check if the user has permission",
				requestBody: { content: { "application/json": { schema: {
					type: "object",
					properties: { permissions: {
						type: "object",
						description: "The permission to check"
					} },
					required: ["permissions"]
				} } } },
				responses: { "200": {
					description: "Success",
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							error: { type: "string" },
							success: { type: "boolean" }
						},
						required: ["success"]
					} } }
				} }
			},
			$Infer: { body: {} }
		}
	}, async (ctx) => {
		if (!ctx.body?.permissions) throw new APIError("BAD_REQUEST", { message: "invalid permission check. no permission(s) were passed." });
		const session = await getAuthoritativeSessionFromCtx(ctx);
		if (!session && (ctx.request || ctx.headers)) throw new APIError("UNAUTHORIZED");
		if (!session && !ctx.body.userId && !ctx.body.role) throw new APIError("BAD_REQUEST", { message: "user id or role is required" });
		const user = session?.user || (ctx.body.role ? {
			id: ctx.body.userId || "",
			role: ctx.body.role
		} : null) || (ctx.body.userId ? await ctx.context.internalAdapter.findUserById(ctx.body.userId) : null);
		if (!user) throw new APIError("BAD_REQUEST", { message: "user not found" });
		const result = hasPermission({
			userId: user.id,
			role: user.role,
			options: opts,
			permissions: ctx.body.permissions
		});
		return ctx.json({
			error: null,
			success: result
		});
	});
};
var schema = {
	user: { fields: {
		role: {
			type: "string",
			required: false,
			input: false
		},
		banned: {
			type: "boolean",
			defaultValue: false,
			required: false,
			input: false
		},
		banReason: {
			type: "string",
			required: false,
			input: false
		},
		banExpires: {
			type: "date",
			required: false,
			input: false
		}
	} },
	session: { fields: { impersonatedBy: {
		type: "string",
		required: false,
		input: false
	} } }
};
var admin = (options) => {
	const opts = {
		...options || {},
		defaultRole: options?.defaultRole ?? "user",
		adminRoles: options?.adminRoles ?? ["admin"],
		bannedUserMessage: options?.bannedUserMessage ?? "You have been banned from this application. Please contact support if you believe this is an error."
	};
	if (options?.adminRoles) {
		const invalidRoles = (Array.isArray(options.adminRoles) ? options.adminRoles : [...options.adminRoles.split(",")]).filter((role) => !Object.keys(options?.roles || defaultRoles).map((r) => r.toLowerCase()).includes(role.toLowerCase()));
		if (invalidRoles.length > 0) throw new BetterAuthError(`Invalid admin roles: ${invalidRoles.join(", ")}. Admin roles must be defined in the 'roles' configuration.`);
	}
	return {
		id: "admin",
		version: PACKAGE_VERSION,
		init() {
			return { options: { databaseHooks: {
				user: { create: { async before(user) {
					return { data: {
						role: options?.defaultRole ?? "user",
						...user
					} };
				} } },
				session: { create: { async before(session, ctx) {
					if (!ctx) return;
					const user = await ctx.context.internalAdapter.findUserById(session.userId);
					if (user?.banned) {
						if (user.banExpires && new Date(user.banExpires).getTime() < Date.now()) {
							await ctx.context.internalAdapter.updateUser(session.userId, {
								banned: false,
								banReason: null,
								banExpires: null
							});
							return;
						}
						const bannedUserMessage = opts.bannedUserMessage;
						const message = typeof bannedUserMessage === "function" ? await bannedUserMessage(user) : bannedUserMessage;
						throw APIError.from("FORBIDDEN", {
							message,
							code: "BANNED_USER"
						});
					}
				} } }
			} } };
		},
		hooks: { after: [{
			matcher(context) {
				return context.path === "/list-sessions";
			},
			handler: createAuthMiddleware(async (ctx) => {
				const response = await getEndpointResponse(ctx);
				if (!response) return;
				const newJson = response.filter((session) => {
					return !session.impersonatedBy;
				});
				return ctx.json(newJson);
			})
		}] },
		endpoints: {
			setRole: setRole(opts),
			getUser: getUser(opts),
			createUser: createUser(opts),
			adminUpdateUser: adminUpdateUser(opts),
			listUsers: listUsers(opts),
			listUserSessions: listUserSessions(opts),
			unbanUser: unbanUser(opts),
			banUser: banUser(opts),
			impersonateUser: impersonateUser(opts),
			stopImpersonating: stopImpersonating(),
			revokeUserSession: revokeUserSession(opts),
			revokeUserSessions: revokeUserSessions(opts),
			removeUser: removeUser(opts),
			setUserPassword: setUserPassword(opts),
			userHasPermission: userHasPermission(opts)
		},
		$ERROR_CODES: ADMIN_ERROR_CODES,
		schema: mergeSchema(schema, opts.schema),
		options
	};
};
var config = {
	"previewFeatures": [],
	"clientVersion": "7.10.1",
	"engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
	"activeProvider": "sqlite",
	"inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n}\n\nenum UserRole {\n  TENANT\n  LANDLORD\n  ADMIN\n  UNIVERSITY_ADMIN\n  VIEWER\n}\n\nenum LandlordStatus {\n  PENDING\n  APPROVED\n  REJECTED\n  SUSPENDED\n}\n\nenum ListingCategory {\n  HOSTEL\n  BEDSITTER\n  SINGLE_ROOM\n  STUDIO\n  SHARED_APARTMENT\n}\n\nenum ListingStatus {\n  AVAILABLE\n  RENTED\n  HIDDEN\n  PENDING\n  PUBLISHED\n  REJECTED\n}\n\nmodel User {\n  id            String    @id @default(cuid())\n  email         String    @unique\n  emailVerified Boolean   @default(false)\n  name          String?\n  password      String? // hashed with bcrypt\n  role          UserRole  @default(TENANT)\n  image         String?\n  // Fields required by the Better Auth admin plugin (ban / unban).\n  banned        Boolean   @default(false)\n  banReason     String?\n  banExpires    DateTime?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n\n  landlordProfile LandlordProfile?\n  listings        Listing[]\n  favorites       Favorite[]\n  sessions        Session[]\n  accounts        Account[]\n}\n\nmodel LandlordProfile {\n  id                  String         @id @default(cuid())\n  userId              String         @unique\n  user                User           @relation(fields: [userId], references: [id], onDelete: Cascade)\n  businessName        String\n  phone               String\n  whatsappNumber      String\n  nationalId          String?\n  targetCampuses      String // JSON string array\n  estimatedProperties Int\n  status              LandlordStatus @default(PENDING)\n  reviewNote          String?\n  consentGivenAt      DateTime       @default(now())\n  consentVersion      String         @default(\"2026-07-01\")\n  createdAt           DateTime       @default(now())\n  updatedAt           DateTime       @updatedAt\n\n  listings Listing[]\n}\n\nmodel Listing {\n  id                 String          @id @default(cuid())\n  title              String\n  description        String\n  price              Int // in cents (KES)\n  deposit            Int // in cents (KES)\n  category           ListingCategory\n  location           String\n  latitude           Float?\n  longitude          Float?\n  images             String // JSON string array\n  amenities          String // JSON string array\n  genderRestriction  String? // none, male_only, female_only\n  hasWifi            Boolean         @default(false)\n  hasWater           Boolean         @default(false)\n  videoUrl           String?\n  status             ListingStatus   @default(AVAILABLE)\n  isVerified         Boolean         @default(false)\n  reviewNote         String?\n  featured           Boolean         @default(false)\n  inquiries          Int             @default(0)\n  // Boost state, moved here from the retired Firestore listing documents.\n  adStatus           String          @default(\"inactive\")\n  adPlan             String?\n  adExpiresAt        DateTime?\n  landlordId         String\n  landlord           LandlordProfile @relation(fields: [landlordId], references: [id], onDelete: Cascade)\n  userId             String\n  user               User            @relation(fields: [userId], references: [id], onDelete: Cascade)\n  university         String?\n  distanceFromCampus String?\n  createdAt          DateTime        @default(now())\n  updatedAt          DateTime        @updatedAt\n\n  favorites Favorite[]\n}\n\nmodel Favorite {\n  id        String   @id @default(cuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  listingId String\n  listing   Listing  @relation(fields: [listingId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n\n  @@unique([userId, listingId])\n}\n\nmodel University {\n  id           String   @id @default(cuid())\n  name         String\n  slug         String   @unique\n  logoUrl      String?\n  location     String\n  contactEmail String?\n  contactPhone String?\n  description  String\n  verified     Boolean  @default(false)\n  adminUserId  String?\n  status       String   @default(\"active\")\n  foundedYear  Int?\n  studentCount Int?\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  hostels Hostel[]\n}\n\nmodel Hostel {\n  id           String     @id @default(cuid())\n  universityId String\n  university   University @relation(fields: [universityId], references: [id], onDelete: Cascade)\n  name         String\n  location     String\n  description  String\n  hostelType   String // boys, girls, mixed\n  images       String // JSON string array\n  amenities    String // JSON string array\n  wardenName   String?\n  wardenPhone  String?\n  wardenEmail  String?\n  status       String     @default(\"active\")\n  createdAt    DateTime   @default(now())\n  updatedAt    DateTime   @updatedAt\n\n  rooms HostelRoom[]\n}\n\nmodel HostelRoom {\n  id                  String    @id @default(cuid())\n  hostelId            String\n  hostel              Hostel    @relation(fields: [hostelId], references: [id], onDelete: Cascade)\n  roomNumber          String\n  bedNumber           String?\n  roomType            String // single, shared_double, shared_quad, shared_open\n  pricePerMonth       Int?\n  pricePerSemester    Int?\n  pricePerYear        Int?\n  status              String    @default(\"available\")\n  currentOccupants    Int       @default(0)\n  maxOccupants        Int\n  occupancyPercentage Float     @default(0)\n  amenities           String // JSON string array\n  features            String // JSON string array\n  availableFrom       DateTime?\n  availableUntil      DateTime?\n  bookingDeadline     DateTime?\n  createdAt           DateTime  @default(now())\n  updatedAt           DateTime  @updatedAt\n}\n\nmodel Apartment {\n  id           String   @id @default(cuid())\n  name         String\n  location     String\n  description  String\n  address      String\n  latitude     Float?\n  longitude    Float?\n  amenities    String // JSON string array\n  images       String // JSON string array\n  agentId      String\n  ownerType    String // individual, company\n  ownerName    String?\n  contactEmail String?\n  contactPhone String?\n  status       String   @default(\"active\")\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  rooms Room[]\n}\n\nmodel Room {\n  id               String    @id @default(cuid())\n  apartmentId      String\n  apartment        Apartment @relation(fields: [apartmentId], references: [id], onDelete: Cascade)\n  roomNumber       String\n  roomType         String // single, double, bedsitter, studio, one_bedroom, two_bedroom\n  price            Int\n  deposit          Int?\n  description      String\n  features         String // JSON string array\n  images           String // JSON string array\n  status           String    @default(\"available\")\n  maxOccupants     Int\n  squareMeters     Float?\n  availabilityDate DateTime?\n  createdAt        DateTime  @default(now())\n  updatedAt        DateTime  @updatedAt\n}\n\n// Better Auth tables\nmodel Session {\n  id             String   @id @default(cuid())\n  userId         String\n  user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  token          String   @unique\n  expiresAt      DateTime\n  ipAddress      String?\n  userAgent      String?\n  // Set by the Better Auth admin plugin when an administrator impersonates a user.\n  impersonatedBy String?\n  createdAt      DateTime @default(now())\n  updatedAt      DateTime @updatedAt\n}\n\nmodel Account {\n  id                    String    @id @default(cuid())\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accountId             String\n  providerId            String\n  accessToken           String?\n  refreshToken          String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  idToken               String?\n  password              String? // for email/password provider\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@unique([providerId, accountId])\n}\n\nmodel VerificationToken {\n  id         String   @id @default(cuid())\n  identifier String\n  token      String   @unique\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n\n  @@unique([identifier, token])\n}\n\n// Verification table used by Better Auth for email verification and password\n// reset tokens. It is required by the authentication layer at runtime.\nmodel Verification {\n  id         String   @id @default(cuid())\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n}\n\n// ---------------------------------------------------------------------------\n// Consent capture (Data Protection Act, 2019 s.32; General Regulations, 2021\n// reg. 4). One row per purpose, per person. Purposes are never bundled: a\n// row exists only for a purpose the person actually ticked.\n// ---------------------------------------------------------------------------\n\nenum ConsentPurpose {\n  IDENTITY_VERIFICATION\n  LISTING_PUBLICATION\n  PUBLIC_CONTACT_DETAILS\n  PLATFORM_COMMUNICATIONS\n}\n\nenum ConsentStatus {\n  GRANTED\n  WITHDRAWN\n}\n\nmodel ConsentRecord {\n  id                String         @id @default(cuid())\n  userId            String? // Better Auth user id when the person is signed in\n  email             String\n  name              String\n  purpose           ConsentPurpose\n  purposeText       String // the exact wording shown to the person at the time\n  wordingVersion    String // version of that wording (v1.0)\n  /// The consent declaration statements that were ticked when this record was\n  /// written, as comma separated ids. Kept so the record shows exactly what\n  /// the person agreed to, not only which purpose it was filed under.\n  acknowledgedItems String?\n  status            ConsentStatus  @default(GRANTED)\n  grantedAt         DateTime\n  withdrawnAt       DateTime?\n  source            String         @default(\"consent-screen\")\n  createdAt         DateTime       @default(now())\n  updatedAt         DateTime       @updatedAt\n\n  @@index([email])\n  @@index([purpose])\n  @@index([status])\n}\n\n// ---------------------------------------------------------------------------\n// Records extracted from the public university hostel-notice source file.\n// Kept in the same relational data layer so they can be imported, exported,\n// searched, filtered and reported on.\n// ---------------------------------------------------------------------------\n\nmodel ExtractedHostelRecord {\n  id         String   @id @default(cuid())\n  hostelName String\n  campus     String\n  category   String\n  rentKsh    Int\n  capacity   Int\n  distanceKm Float?\n  sourceFile String\n  sourceLine String\n  confidence Float?\n  importedAt DateTime @default(now())\n\n  @@unique([hostelName, campus])\n  @@index([campus])\n}\n\n// ---------------------------------------------------------------------------\n// Site content managed from the admin site builder. One row (`global`) holds\n// the hero copy, the featured listings, the theme, the feature flags and the\n// team shown on the public site. JSON columns keep the shape identical to the\n// SiteSettings type the marketing pages already consume.\n// ---------------------------------------------------------------------------\n\n// Admin content models. These used to live in Firestore; they are plain\n// SQLite tables now so the administrator console works without a network.\nmodel Agent {\n  id              String   @id @default(cuid())\n  name            String\n  phone           String\n  whatsappNumber  String\n  profilePhotoUrl String?\n  isActive        Boolean  @default(true)\n  createdAt       DateTime @default(now())\n  updatedAt       DateTime @updatedAt\n}\n\nmodel Category {\n  id        String   @id @default(cuid())\n  name      String\n  slug      String   @unique\n  isActive  Boolean  @default(true)\n  sortOrder Int      @default(0)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Property {\n  id          String   @id @default(cuid())\n  title       String\n  categoryId  String\n  price       Int\n  deposit     Int?\n  location    String\n  latitude    Float?\n  longitude   Float?\n  description String\n  features    String   @default(\"[]\")\n  agentId     String\n  status      String   @default(\"available\")\n  media       String   @default(\"[]\")\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n}\n\nmodel SiteSettings {\n  id                 String   @id @default(\"global\")\n  siteName           String   @default(\"UniHub\")\n  siteUrl            String   @default(\"\")\n  adminEmail         String   @default(\"\")\n  maintenanceMode    Boolean  @default(false)\n  maintenanceMessage String   @default(\"We are currently performing scheduled maintenance.\")\n  heroTitle          String\n  heroSubtitle       String\n  heroImage          String?\n  ctaText            String\n  featuredProperties String   @default(\"[]\") // JSON string array of listing ids\n  theme              String   @default(\"{}\") // JSON of theme tokens\n  features           String   @default(\"{}\") // JSON of feature flags\n  teamMembers        String   @default(\"[]\") // JSON string array of team members\n  updatedBy          String?\n  updatedAt          DateTime @updatedAt\n  createdAt          DateTime @default(now())\n}\n",
	"runtimeDataModel": {
		"models": {},
		"enums": {},
		"types": {}
	},
	"parameterizationSchema": {
		"strings": [],
		"graph": ""
	}
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"banned\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"banReason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"banExpires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"landlordProfile\",\"kind\":\"object\",\"type\":\"LandlordProfile\",\"relationName\":\"LandlordProfileToUser\"},{\"name\":\"listings\",\"kind\":\"object\",\"type\":\"Listing\",\"relationName\":\"ListingToUser\"},{\"name\":\"favorites\",\"kind\":\"object\",\"type\":\"Favorite\",\"relationName\":\"FavoriteToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"}],\"dbName\":null,\"schema\":null},\"LandlordProfile\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"LandlordProfileToUser\"},{\"name\":\"businessName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"whatsappNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nationalId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"targetCampuses\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"estimatedProperties\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"LandlordStatus\"},{\"name\":\"reviewNote\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"consentGivenAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"consentVersion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"listings\",\"kind\":\"object\",\"type\":\"Listing\",\"relationName\":\"LandlordProfileToListing\"}],\"dbName\":null,\"schema\":null},\"Listing\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"deposit\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"category\",\"kind\":\"enum\",\"type\":\"ListingCategory\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amenities\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"genderRestriction\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hasWifi\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"hasWater\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"videoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ListingStatus\"},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"reviewNote\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"featured\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"inquiries\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"adStatus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"adPlan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"adExpiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"landlordId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"landlord\",\"kind\":\"object\",\"type\":\"LandlordProfile\",\"relationName\":\"LandlordProfileToListing\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ListingToUser\"},{\"name\":\"university\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"distanceFromCampus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"favorites\",\"kind\":\"object\",\"type\":\"Favorite\",\"relationName\":\"FavoriteToListing\"}],\"dbName\":null,\"schema\":null},\"Favorite\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FavoriteToUser\"},{\"name\":\"listingId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"listing\",\"kind\":\"object\",\"type\":\"Listing\",\"relationName\":\"FavoriteToListing\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"University\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"logoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactPhone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"verified\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"adminUserId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"foundedYear\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"studentCount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"hostels\",\"kind\":\"object\",\"type\":\"Hostel\",\"relationName\":\"HostelToUniversity\"}],\"dbName\":null,\"schema\":null},\"Hostel\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"universityId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"university\",\"kind\":\"object\",\"type\":\"University\",\"relationName\":\"HostelToUniversity\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hostelType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amenities\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wardenName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wardenPhone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wardenEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"rooms\",\"kind\":\"object\",\"type\":\"HostelRoom\",\"relationName\":\"HostelToHostelRoom\"}],\"dbName\":null,\"schema\":null},\"HostelRoom\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hostelId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hostel\",\"kind\":\"object\",\"type\":\"Hostel\",\"relationName\":\"HostelToHostelRoom\"},{\"name\":\"roomNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bedNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"roomType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pricePerMonth\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"pricePerSemester\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"pricePerYear\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"currentOccupants\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"maxOccupants\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"occupancyPercentage\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"amenities\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"features\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"availableFrom\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"availableUntil\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"bookingDeadline\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Apartment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"amenities\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"agentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ownerType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ownerName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"contactPhone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"rooms\",\"kind\":\"object\",\"type\":\"Room\",\"relationName\":\"ApartmentToRoom\"}],\"dbName\":null,\"schema\":null},\"Room\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apartmentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apartment\",\"kind\":\"object\",\"type\":\"Apartment\",\"relationName\":\"ApartmentToRoom\"},{\"name\":\"roomNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"roomType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"deposit\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"features\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maxOccupants\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"squareMeters\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"availabilityDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"impersonatedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Account\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"},{\"name\":\"accountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accessToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"accessTokenExpiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"refreshTokenExpiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"VerificationToken\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Verification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"value\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"ConsentRecord\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"purpose\",\"kind\":\"enum\",\"type\":\"ConsentPurpose\"},{\"name\":\"purposeText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"wordingVersion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"acknowledgedItems\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ConsentStatus\"},{\"name\":\"grantedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"withdrawnAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"ExtractedHostelRecord\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hostelName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"campus\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rentKsh\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"capacity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"distanceKm\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"sourceFile\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sourceLine\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"confidence\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"importedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Agent\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"whatsappNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"profilePhotoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Category\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"sortOrder\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Property\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"deposit\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"location\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"features\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"agentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"media\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"SiteSettings\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"siteName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"siteUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"adminEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maintenanceMode\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"maintenanceMessage\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"heroTitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"heroSubtitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"heroImage\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ctaText\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"featuredProperties\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"theme\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"features\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teamMembers\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
	strings: JSON.parse("[\"where\",\"user\",\"orderBy\",\"cursor\",\"landlord\",\"listing\",\"favorites\",\"_count\",\"listings\",\"landlordProfile\",\"sessions\",\"accounts\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"LandlordProfile.findUnique\",\"LandlordProfile.findUniqueOrThrow\",\"LandlordProfile.findFirst\",\"LandlordProfile.findFirstOrThrow\",\"LandlordProfile.findMany\",\"LandlordProfile.createOne\",\"LandlordProfile.createMany\",\"LandlordProfile.createManyAndReturn\",\"LandlordProfile.updateOne\",\"LandlordProfile.updateMany\",\"LandlordProfile.updateManyAndReturn\",\"LandlordProfile.upsertOne\",\"LandlordProfile.deleteOne\",\"LandlordProfile.deleteMany\",\"_avg\",\"_sum\",\"LandlordProfile.groupBy\",\"LandlordProfile.aggregate\",\"Listing.findUnique\",\"Listing.findUniqueOrThrow\",\"Listing.findFirst\",\"Listing.findFirstOrThrow\",\"Listing.findMany\",\"Listing.createOne\",\"Listing.createMany\",\"Listing.createManyAndReturn\",\"Listing.updateOne\",\"Listing.updateMany\",\"Listing.updateManyAndReturn\",\"Listing.upsertOne\",\"Listing.deleteOne\",\"Listing.deleteMany\",\"Listing.groupBy\",\"Listing.aggregate\",\"Favorite.findUnique\",\"Favorite.findUniqueOrThrow\",\"Favorite.findFirst\",\"Favorite.findFirstOrThrow\",\"Favorite.findMany\",\"Favorite.createOne\",\"Favorite.createMany\",\"Favorite.createManyAndReturn\",\"Favorite.updateOne\",\"Favorite.updateMany\",\"Favorite.updateManyAndReturn\",\"Favorite.upsertOne\",\"Favorite.deleteOne\",\"Favorite.deleteMany\",\"Favorite.groupBy\",\"Favorite.aggregate\",\"university\",\"hostel\",\"rooms\",\"hostels\",\"University.findUnique\",\"University.findUniqueOrThrow\",\"University.findFirst\",\"University.findFirstOrThrow\",\"University.findMany\",\"University.createOne\",\"University.createMany\",\"University.createManyAndReturn\",\"University.updateOne\",\"University.updateMany\",\"University.updateManyAndReturn\",\"University.upsertOne\",\"University.deleteOne\",\"University.deleteMany\",\"University.groupBy\",\"University.aggregate\",\"Hostel.findUnique\",\"Hostel.findUniqueOrThrow\",\"Hostel.findFirst\",\"Hostel.findFirstOrThrow\",\"Hostel.findMany\",\"Hostel.createOne\",\"Hostel.createMany\",\"Hostel.createManyAndReturn\",\"Hostel.updateOne\",\"Hostel.updateMany\",\"Hostel.updateManyAndReturn\",\"Hostel.upsertOne\",\"Hostel.deleteOne\",\"Hostel.deleteMany\",\"Hostel.groupBy\",\"Hostel.aggregate\",\"HostelRoom.findUnique\",\"HostelRoom.findUniqueOrThrow\",\"HostelRoom.findFirst\",\"HostelRoom.findFirstOrThrow\",\"HostelRoom.findMany\",\"HostelRoom.createOne\",\"HostelRoom.createMany\",\"HostelRoom.createManyAndReturn\",\"HostelRoom.updateOne\",\"HostelRoom.updateMany\",\"HostelRoom.updateManyAndReturn\",\"HostelRoom.upsertOne\",\"HostelRoom.deleteOne\",\"HostelRoom.deleteMany\",\"HostelRoom.groupBy\",\"HostelRoom.aggregate\",\"apartment\",\"Apartment.findUnique\",\"Apartment.findUniqueOrThrow\",\"Apartment.findFirst\",\"Apartment.findFirstOrThrow\",\"Apartment.findMany\",\"Apartment.createOne\",\"Apartment.createMany\",\"Apartment.createManyAndReturn\",\"Apartment.updateOne\",\"Apartment.updateMany\",\"Apartment.updateManyAndReturn\",\"Apartment.upsertOne\",\"Apartment.deleteOne\",\"Apartment.deleteMany\",\"Apartment.groupBy\",\"Apartment.aggregate\",\"Room.findUnique\",\"Room.findUniqueOrThrow\",\"Room.findFirst\",\"Room.findFirstOrThrow\",\"Room.findMany\",\"Room.createOne\",\"Room.createMany\",\"Room.createManyAndReturn\",\"Room.updateOne\",\"Room.updateMany\",\"Room.updateManyAndReturn\",\"Room.upsertOne\",\"Room.deleteOne\",\"Room.deleteMany\",\"Room.groupBy\",\"Room.aggregate\",\"Session.findUnique\",\"Session.findUniqueOrThrow\",\"Session.findFirst\",\"Session.findFirstOrThrow\",\"Session.findMany\",\"Session.createOne\",\"Session.createMany\",\"Session.createManyAndReturn\",\"Session.updateOne\",\"Session.updateMany\",\"Session.updateManyAndReturn\",\"Session.upsertOne\",\"Session.deleteOne\",\"Session.deleteMany\",\"Session.groupBy\",\"Session.aggregate\",\"Account.findUnique\",\"Account.findUniqueOrThrow\",\"Account.findFirst\",\"Account.findFirstOrThrow\",\"Account.findMany\",\"Account.createOne\",\"Account.createMany\",\"Account.createManyAndReturn\",\"Account.updateOne\",\"Account.updateMany\",\"Account.updateManyAndReturn\",\"Account.upsertOne\",\"Account.deleteOne\",\"Account.deleteMany\",\"Account.groupBy\",\"Account.aggregate\",\"VerificationToken.findUnique\",\"VerificationToken.findUniqueOrThrow\",\"VerificationToken.findFirst\",\"VerificationToken.findFirstOrThrow\",\"VerificationToken.findMany\",\"VerificationToken.createOne\",\"VerificationToken.createMany\",\"VerificationToken.createManyAndReturn\",\"VerificationToken.updateOne\",\"VerificationToken.updateMany\",\"VerificationToken.updateManyAndReturn\",\"VerificationToken.upsertOne\",\"VerificationToken.deleteOne\",\"VerificationToken.deleteMany\",\"VerificationToken.groupBy\",\"VerificationToken.aggregate\",\"Verification.findUnique\",\"Verification.findUniqueOrThrow\",\"Verification.findFirst\",\"Verification.findFirstOrThrow\",\"Verification.findMany\",\"Verification.createOne\",\"Verification.createMany\",\"Verification.createManyAndReturn\",\"Verification.updateOne\",\"Verification.updateMany\",\"Verification.updateManyAndReturn\",\"Verification.upsertOne\",\"Verification.deleteOne\",\"Verification.deleteMany\",\"Verification.groupBy\",\"Verification.aggregate\",\"ConsentRecord.findUnique\",\"ConsentRecord.findUniqueOrThrow\",\"ConsentRecord.findFirst\",\"ConsentRecord.findFirstOrThrow\",\"ConsentRecord.findMany\",\"ConsentRecord.createOne\",\"ConsentRecord.createMany\",\"ConsentRecord.createManyAndReturn\",\"ConsentRecord.updateOne\",\"ConsentRecord.updateMany\",\"ConsentRecord.updateManyAndReturn\",\"ConsentRecord.upsertOne\",\"ConsentRecord.deleteOne\",\"ConsentRecord.deleteMany\",\"ConsentRecord.groupBy\",\"ConsentRecord.aggregate\",\"ExtractedHostelRecord.findUnique\",\"ExtractedHostelRecord.findUniqueOrThrow\",\"ExtractedHostelRecord.findFirst\",\"ExtractedHostelRecord.findFirstOrThrow\",\"ExtractedHostelRecord.findMany\",\"ExtractedHostelRecord.createOne\",\"ExtractedHostelRecord.createMany\",\"ExtractedHostelRecord.createManyAndReturn\",\"ExtractedHostelRecord.updateOne\",\"ExtractedHostelRecord.updateMany\",\"ExtractedHostelRecord.updateManyAndReturn\",\"ExtractedHostelRecord.upsertOne\",\"ExtractedHostelRecord.deleteOne\",\"ExtractedHostelRecord.deleteMany\",\"ExtractedHostelRecord.groupBy\",\"ExtractedHostelRecord.aggregate\",\"Agent.findUnique\",\"Agent.findUniqueOrThrow\",\"Agent.findFirst\",\"Agent.findFirstOrThrow\",\"Agent.findMany\",\"Agent.createOne\",\"Agent.createMany\",\"Agent.createManyAndReturn\",\"Agent.updateOne\",\"Agent.updateMany\",\"Agent.updateManyAndReturn\",\"Agent.upsertOne\",\"Agent.deleteOne\",\"Agent.deleteMany\",\"Agent.groupBy\",\"Agent.aggregate\",\"Category.findUnique\",\"Category.findUniqueOrThrow\",\"Category.findFirst\",\"Category.findFirstOrThrow\",\"Category.findMany\",\"Category.createOne\",\"Category.createMany\",\"Category.createManyAndReturn\",\"Category.updateOne\",\"Category.updateMany\",\"Category.updateManyAndReturn\",\"Category.upsertOne\",\"Category.deleteOne\",\"Category.deleteMany\",\"Category.groupBy\",\"Category.aggregate\",\"Property.findUnique\",\"Property.findUniqueOrThrow\",\"Property.findFirst\",\"Property.findFirstOrThrow\",\"Property.findMany\",\"Property.createOne\",\"Property.createMany\",\"Property.createManyAndReturn\",\"Property.updateOne\",\"Property.updateMany\",\"Property.updateManyAndReturn\",\"Property.upsertOne\",\"Property.deleteOne\",\"Property.deleteMany\",\"Property.groupBy\",\"Property.aggregate\",\"SiteSettings.findUnique\",\"SiteSettings.findUniqueOrThrow\",\"SiteSettings.findFirst\",\"SiteSettings.findFirstOrThrow\",\"SiteSettings.findMany\",\"SiteSettings.createOne\",\"SiteSettings.createMany\",\"SiteSettings.createManyAndReturn\",\"SiteSettings.updateOne\",\"SiteSettings.updateMany\",\"SiteSettings.updateManyAndReturn\",\"SiteSettings.upsertOne\",\"SiteSettings.deleteOne\",\"SiteSettings.deleteMany\",\"SiteSettings.groupBy\",\"SiteSettings.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"siteName\",\"siteUrl\",\"adminEmail\",\"maintenanceMode\",\"maintenanceMessage\",\"heroTitle\",\"heroSubtitle\",\"heroImage\",\"ctaText\",\"featuredProperties\",\"theme\",\"features\",\"teamMembers\",\"updatedBy\",\"updatedAt\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"title\",\"categoryId\",\"price\",\"deposit\",\"location\",\"latitude\",\"longitude\",\"description\",\"agentId\",\"status\",\"media\",\"name\",\"slug\",\"isActive\",\"sortOrder\",\"phone\",\"whatsappNumber\",\"profilePhotoUrl\",\"hostelName\",\"campus\",\"category\",\"rentKsh\",\"capacity\",\"distanceKm\",\"sourceFile\",\"sourceLine\",\"confidence\",\"importedAt\",\"hostelName_campus\",\"userId\",\"email\",\"ConsentPurpose\",\"purpose\",\"purposeText\",\"wordingVersion\",\"acknowledgedItems\",\"ConsentStatus\",\"grantedAt\",\"withdrawnAt\",\"source\",\"identifier\",\"value\",\"expiresAt\",\"token\",\"identifier_token\",\"accountId\",\"providerId\",\"accessToken\",\"refreshToken\",\"accessTokenExpiresAt\",\"refreshTokenExpiresAt\",\"scope\",\"idToken\",\"password\",\"ipAddress\",\"userAgent\",\"impersonatedBy\",\"apartmentId\",\"roomNumber\",\"roomType\",\"images\",\"maxOccupants\",\"squareMeters\",\"availabilityDate\",\"address\",\"amenities\",\"ownerType\",\"ownerName\",\"contactEmail\",\"contactPhone\",\"every\",\"some\",\"none\",\"hostelId\",\"bedNumber\",\"pricePerMonth\",\"pricePerSemester\",\"pricePerYear\",\"currentOccupants\",\"occupancyPercentage\",\"availableFrom\",\"availableUntil\",\"bookingDeadline\",\"universityId\",\"hostelType\",\"wardenName\",\"wardenPhone\",\"wardenEmail\",\"logoUrl\",\"verified\",\"adminUserId\",\"foundedYear\",\"studentCount\",\"listingId\",\"ListingCategory\",\"genderRestriction\",\"hasWifi\",\"hasWater\",\"videoUrl\",\"ListingStatus\",\"isVerified\",\"reviewNote\",\"featured\",\"inquiries\",\"adStatus\",\"adPlan\",\"adExpiresAt\",\"landlordId\",\"distanceFromCampus\",\"businessName\",\"nationalId\",\"targetCampuses\",\"estimatedProperties\",\"LandlordStatus\",\"consentGivenAt\",\"consentVersion\",\"emailVerified\",\"UserRole\",\"role\",\"image\",\"banned\",\"banReason\",\"banExpires\",\"providerId_accountId\",\"userId_listingId\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
	graph: "mAexAbACFAYAANYEACAIAADOBAAgCQAA1QQAIAoAANcEACALAADYBAAgyQIAANMEADDKAgAAHgAQywIAANMEADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIfMCAQCBBAAhhgMBAAAAAZ0DAQCBBAAh3AMgAIAEACHeAwAA1ATeAyLfAwEAgQQAIeADIACABAAh4QMBAIEEACHiA0AApAQAIQEAAAABACATAQAAzQQAIAgAAM4EACDJAgAAywQAMMoCAAADABDLAgAAywQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAADMBNoDIvcCAQD_AwAh-AIBAP8DACGFAwEA_wMAIc0DAQCBBAAh1QMBAP8DACHWAwEAgQQAIdcDAQD_AwAh2AMCAI0EACHaA0AAggQAIdsDAQD_AwAhAQAAAAMAICMBAADNBAAgBAAA4gQAIAYAANYEACBUAQCBBAAhyQIAAN8EADDKAgAABQAQywIAAN8EADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHoAgEA_wMAIeoCAgCNBAAh6wICAI0EACHsAgEA_wMAIe0CCACPBAAh7gIIAI8EACHvAgEA_wMAIfECAADhBMwDIvwCAADgBMcDIoUDAQD_AwAhpAMBAP8DACGpAwEA_wMAIccDAQCBBAAhyAMgAIAEACHJAyAAgAQAIcoDAQCBBAAhzAMgAIAEACHNAwEAgQQAIc4DIACABAAhzwMCAI0EACHQAwEA_wMAIdEDAQCBBAAh0gNAAKQEACHTAwEA_wMAIdQDAQCBBAAhDAEAAJoGACAEAADZBgAgBgAA2gYAIFQAAOMEACDtAgAA4wQAIO4CAADjBAAgxwMAAOMEACDKAwAA4wQAIM0DAADjBAAg0QMAAOMEACDSAwAA4wQAINQDAADjBAAgIwEAAM0EACAEAADiBAAgBgAA1gQAIFQBAIEEACHJAgAA3wQAMMoCAAAFABDLAgAA3wQAMMwCAQAAAAHbAkAAggQAIdwCQACCBAAh6AIBAP8DACHqAgIAjQQAIesCAgCNBAAh7AIBAP8DACHtAggAjwQAIe4CCACPBAAh7wIBAP8DACHxAgAA4QTMAyL8AgAA4ATHAyKFAwEA_wMAIaQDAQD_AwAhqQMBAP8DACHHAwEAgQQAIcgDIACABAAhyQMgAIAEACHKAwEAgQQAIcwDIACABAAhzQMBAIEEACHOAyAAgAQAIc8DAgCNBAAh0AMBAP8DACHRAwEAgQQAIdIDQACkBAAh0wMBAP8DACHUAwEAgQQAIQMAAAAFACACAAAGADADAAAHACAJAQAAzQQAIAUAAN4EACDJAgAA3QQAMMoCAAAJABDLAgAA3QQAMMwCAQD_AwAh3AJAAIIEACGFAwEA_wMAIcUDAQD_AwAhAgEAAJoGACAFAADdBgAgCgEAAM0EACAFAADeBAAgyQIAAN0EADDKAgAACQAQywIAAN0EADDMAgEAAAAB3AJAAIIEACGFAwEA_wMAIcUDAQD_AwAh5AMAANwEACADAAAACQAgAgAACgAwAwAACwAgAQAAAAkAIAEAAAAFACADAAAABQAgAgAABgAwAwAABwAgAwAAAAkAIAIAAAoAMAMAAAsAIA0BAADNBAAgyQIAANsEADDKAgAAEQAQywIAANsEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACGFAwEA_wMAIZIDQACCBAAhkwMBAP8DACGeAwEAgQQAIZ8DAQCBBAAhoAMBAIEEACEEAQAAmgYAIJ4DAADjBAAgnwMAAOMEACCgAwAA4wQAIA0BAADNBAAgyQIAANsEADDKAgAAEQAQywIAANsEADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIYUDAQD_AwAhkgNAAIIEACGTAwEAAAABngMBAIEEACGfAwEAgQQAIaADAQCBBAAhAwAAABEAIAIAABIAMAMAABMAIBEBAADNBAAgyQIAANoEADDKAgAAFQAQywIAANoEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACGFAwEA_wMAIZUDAQD_AwAhlgMBAP8DACGXAwEAgQQAIZgDAQCBBAAhmQNAAKQEACGaA0AApAQAIZsDAQCBBAAhnAMBAIEEACGdAwEAgQQAIQgBAACaBgAglwMAAOMEACCYAwAA4wQAIJkDAADjBAAgmgMAAOMEACCbAwAA4wQAIJwDAADjBAAgnQMAAOMEACASAQAAzQQAIMkCAADaBAAwygIAABUAEMsCAADaBAAwzAIBAAAAAdsCQACCBAAh3AJAAIIEACGFAwEA_wMAIZUDAQD_AwAhlgMBAP8DACGXAwEAgQQAIZgDAQCBBAAhmQNAAKQEACGaA0AApAQAIZsDAQCBBAAhnAMBAIEEACGdAwEAgQQAIeMDAADZBAAgAwAAABUAIAIAABYAMAMAABcAIAEAAAAFACABAAAACQAgAQAAABEAIAEAAAAVACABAAAAAQAgFAYAANYEACAIAADOBAAgCQAA1QQAIAoAANcEACALAADYBAAgyQIAANMEADDKAgAAHgAQywIAANMEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHzAgEAgQQAIYYDAQD_AwAhnQMBAIEEACHcAyAAgAQAId4DAADUBN4DIt8DAQCBBAAh4AMgAIAEACHhAwEAgQQAIeIDQACkBAAhCgYAANoGACAIAACbBgAgCQAA2QYAIAoAANsGACALAADcBgAg8wIAAOMEACCdAwAA4wQAIN8DAADjBAAg4QMAAOMEACDiAwAA4wQAIAMAAAAeACACAAAfADADAAABACADAAAAHgAgAgAAHwAwAwAAAQAgAwAAAB4AIAIAAB8AMAMAAAEAIBEGAADWBgAgCAAA1QYAIAkAANQGACAKAADXBgAgCwAA2AYAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAGGAwEAAAABnQMBAAAAAdwDIAAAAAHeAwAAAN4DAt8DAQAAAAHgAyAAAAAB4QMBAAAAAeIDQAAAAAEBEQAAIwAgDMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAGGAwEAAAABnQMBAAAAAdwDIAAAAAHeAwAAAN4DAt8DAQAAAAHgAyAAAAAB4QMBAAAAAeIDQAAAAAEBEQAAJQAwAREAACUAMBEGAACiBgAgCAAAoQYAIAkAAKAGACAKAACjBgAgCwAApAYAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACECAAAAAQAgEQAAKAAgDMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACECAAAAHgAgEQAAKgAgAgAAAB4AIBEAACoAIAMAAAABACAYAAAjACAZAAAoACABAAAAAQAgAQAAAB4AIAgHAACcBgAgHgAAngYAIB8AAJ0GACDzAgAA4wQAIJ0DAADjBAAg3wMAAOMEACDhAwAA4wQAIOIDAADjBAAgD8kCAADPBAAwygIAADEAEMsCAADPBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8wIBAPIDACGGAwEA8AMAIZ0DAQDyAwAh3AMgAPEDACHeAwAA0ATeAyLfAwEA8gMAIeADIADxAwAh4QMBAPIDACHiA0AAmgQAIQMAAAAeACACAAAwADAdAAAxACADAAAAHgAgAgAAHwAwAwAAAQAgEwEAAM0EACAIAADOBAAgyQIAAMsEADDKAgAAAwAQywIAAMsEADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIfECAADMBNoDIvcCAQD_AwAh-AIBAP8DACGFAwEAAAABzQMBAIEEACHVAwEA_wMAIdYDAQCBBAAh1wMBAP8DACHYAwIAjQQAIdoDQACCBAAh2wMBAP8DACEBAAAANAAgAQAAADQAIAQBAACaBgAgCAAAmwYAIM0DAADjBAAg1gMAAOMEACADAAAAAwAgAgAANwAwAwAANAAgAwAAAAMAIAIAADcAMAMAADQAIAMAAAADACACAAA3ADADAAA0ACAQAQAAmAYAIAgAAJkGACDMAgEAAAAB2wJAAAAAAdwCQAAAAAHxAgAAANoDAvcCAQAAAAH4AgEAAAABhQMBAAAAAc0DAQAAAAHVAwEAAAAB1gMBAAAAAdcDAQAAAAHYAwIAAAAB2gNAAAAAAdsDAQAAAAEBEQAAOwAgDswCAQAAAAHbAkAAAAAB3AJAAAAAAfECAAAA2gMC9wIBAAAAAfgCAQAAAAGFAwEAAAABzQMBAAAAAdUDAQAAAAHWAwEAAAAB1wMBAAAAAdgDAgAAAAHaA0AAAAAB2wMBAAAAAQERAAA9ADABEQAAPQAwEAEAAIoGACAIAACLBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8QIAAIkG2gMi9wIBAOcEACH4AgEA5wQAIYUDAQDnBAAhzQMBAOkEACHVAwEA5wQAIdYDAQDpBAAh1wMBAOcEACHYAwIA8AQAIdoDQADqBAAh2wMBAOcEACECAAAANAAgEQAAQAAgDswCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfECAACJBtoDIvcCAQDnBAAh-AIBAOcEACGFAwEA5wQAIc0DAQDpBAAh1QMBAOcEACHWAwEA6QQAIdcDAQDnBAAh2AMCAPAEACHaA0AA6gQAIdsDAQDnBAAhAgAAAAMAIBEAAEIAIAIAAAADACARAABCACADAAAANAAgGAAAOwAgGQAAQAAgAQAAADQAIAEAAAADACAHBwAAhAYAIB4AAIcGACAfAACGBgAgMAAAhQYAIDEAAIgGACDNAwAA4wQAINYDAADjBAAgEckCAADHBAAwygIAAEkAEMsCAADHBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8QIAAMgE2gMi9wIBAPADACH4AgEA8AMAIYUDAQDwAwAhzQMBAPIDACHVAwEA8AMAIdYDAQDyAwAh1wMBAPADACHYAwIAhAQAIdoDQADzAwAh2wMBAPADACEDAAAAAwAgAgAASAAwHQAASQAgAwAAAAMAIAIAADcAMAMAADQAIAEAAAAHACABAAAABwAgAwAAAAUAIAIAAAYAMAMAAAcAIAMAAAAFACACAAAGADADAAAHACADAAAABQAgAgAABgAwAwAABwAgIAEAAIIGACAEAACBBgAgBgAAgwYAIFQBAAAAAcwCAQAAAAHbAkAAAAAB3AJAAAAAAegCAQAAAAHqAgIAAAAB6wICAAAAAewCAQAAAAHtAggAAAAB7gIIAAAAAe8CAQAAAAHxAgAAAMwDAvwCAAAAxwMChQMBAAAAAaQDAQAAAAGpAwEAAAABxwMBAAAAAcgDIAAAAAHJAyAAAAABygMBAAAAAcwDIAAAAAHNAwEAAAABzgMgAAAAAc8DAgAAAAHQAwEAAAAB0QMBAAAAAdIDQAAAAAHTAwEAAAAB1AMBAAAAAQERAABRACAdVAEAAAABzAIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAeoCAgAAAAHrAgIAAAAB7AIBAAAAAe0CCAAAAAHuAggAAAAB7wIBAAAAAfECAAAAzAMC_AIAAADHAwKFAwEAAAABpAMBAAAAAakDAQAAAAHHAwEAAAAByAMgAAAAAckDIAAAAAHKAwEAAAABzAMgAAAAAc0DAQAAAAHOAyAAAAABzwMCAAAAAdADAQAAAAHRAwEAAAAB0gNAAAAAAdMDAQAAAAHUAwEAAAABAREAAFMAMAERAABTADAgAQAA8wUAIAQAAPIFACAGAAD0BQAgVAEA6QQAIcwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIegCAQDnBAAh6gICAPAEACHrAgIA8AQAIewCAQDnBAAh7QIIAPIEACHuAggA8gQAIe8CAQDnBAAh8QIAAPEFzAMi_AIAAPAFxwMihQMBAOcEACGkAwEA5wQAIakDAQDnBAAhxwMBAOkEACHIAyAA6AQAIckDIADoBAAhygMBAOkEACHMAyAA6AQAIc0DAQDpBAAhzgMgAOgEACHPAwIA8AQAIdADAQDnBAAh0QMBAOkEACHSA0AAhQUAIdMDAQDnBAAh1AMBAOkEACECAAAABwAgEQAAVgAgHVQBAOkEACHMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHoAgEA5wQAIeoCAgDwBAAh6wICAPAEACHsAgEA5wQAIe0CCADyBAAh7gIIAPIEACHvAgEA5wQAIfECAADxBcwDIvwCAADwBccDIoUDAQDnBAAhpAMBAOcEACGpAwEA5wQAIccDAQDpBAAhyAMgAOgEACHJAyAA6AQAIcoDAQDpBAAhzAMgAOgEACHNAwEA6QQAIc4DIADoBAAhzwMCAPAEACHQAwEA5wQAIdEDAQDpBAAh0gNAAIUFACHTAwEA5wQAIdQDAQDpBAAhAgAAAAUAIBEAAFgAIAIAAAAFACARAABYACADAAAABwAgGAAAUQAgGQAAVgAgAQAAAAcAIAEAAAAFACAOBwAA6wUAIB4AAO4FACAfAADtBQAgMAAA7AUAIDEAAO8FACBUAADjBAAg7QIAAOMEACDuAgAA4wQAIMcDAADjBAAgygMAAOMEACDNAwAA4wQAINEDAADjBAAg0gMAAOMEACDUAwAA4wQAICBUAQDyAwAhyQIAAMAEADDKAgAAXwAQywIAAMAEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACHoAgEA8AMAIeoCAgCEBAAh6wICAIQEACHsAgEA8AMAIe0CCACGBAAh7gIIAIYEACHvAgEA8AMAIfECAADCBMwDIvwCAADBBMcDIoUDAQDwAwAhpAMBAPADACGpAwEA8AMAIccDAQDyAwAhyAMgAPEDACHJAyAA8QMAIcoDAQDyAwAhzAMgAPEDACHNAwEA8gMAIc4DIADxAwAhzwMCAIQEACHQAwEA8AMAIdEDAQDyAwAh0gNAAJoEACHTAwEA8AMAIdQDAQDyAwAhAwAAAAUAIAIAAF4AMB0AAF8AIAMAAAAFACACAAAGADADAAAHACABAAAACwAgAQAAAAsAIAMAAAAJACACAAAKADADAAALACADAAAACQAgAgAACgAwAwAACwAgAwAAAAkAIAIAAAoAMAMAAAsAIAYBAADpBQAgBQAA6gUAIMwCAQAAAAHcAkAAAAABhQMBAAAAAcUDAQAAAAEBEQAAZwAgBMwCAQAAAAHcAkAAAAABhQMBAAAAAcUDAQAAAAEBEQAAaQAwAREAAGkAMAYBAADnBQAgBQAA6AUAIMwCAQDnBAAh3AJAAOoEACGFAwEA5wQAIcUDAQDnBAAhAgAAAAsAIBEAAGwAIATMAgEA5wQAIdwCQADqBAAhhQMBAOcEACHFAwEA5wQAIQIAAAAJACARAABuACACAAAACQAgEQAAbgAgAwAAAAsAIBgAAGcAIBkAAGwAIAEAAAALACABAAAACQAgAwcAAOQFACAeAADmBQAgHwAA5QUAIAfJAgAAvwQAMMoCAAB1ABDLAgAAvwQAMMwCAQDwAwAh3AJAAPMDACGFAwEA8AMAIcUDAQDwAwAhAwAAAAkAIAIAAHQAMB0AAHUAIAMAAAAJACACAAAKADADAAALACATVwAAuAQAIMkCAAC3BAAwygIAAIUBABDLAgAAtwQAMMwCAQAAAAHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACH0AgEAAAABrAMBAIEEACGtAwEAgQQAIcADAQCBBAAhwQMgAIAEACHCAwEAgQQAIcMDAgCOBAAhxAMCAI4EACEBAAAAeAAgE1QAAL0EACBWAAC-BAAgyQIAALwEADDKAgAAegAQywIAALwEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHsAgEA_wMAIe8CAQD_AwAh8QIBAP8DACHzAgEA_wMAIaQDAQD_AwAhqQMBAP8DACG7AwEA_wMAIbwDAQD_AwAhvQMBAIEEACG-AwEAgQQAIb8DAQCBBAAhBVQAAOIFACBWAADjBQAgvQMAAOMEACC-AwAA4wQAIL8DAADjBAAgE1QAAL0EACBWAAC-BAAgyQIAALwEADDKAgAAegAQywIAALwEADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7wIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGpAwEA_wMAIbsDAQD_AwAhvAMBAP8DACG9AwEAgQQAIb4DAQCBBAAhvwMBAIEEACEDAAAAegAgAgAAewAwAwAAfAAgF1UAALsEACDJAgAAuQQAMMoCAAB-ABDLAgAAuQQAMMwCAQD_AwAh2AIBAP8DACHbAkAAggQAIdwCQACCBAAh8QIBAP8DACGiAwEA_wMAIaMDAQD_AwAhpQMCAI0EACGpAwEA_wMAIbEDAQD_AwAhsgMBAIEEACGzAwIAjgQAIbQDAgCOBAAhtQMCAI4EACG2AwIAjQQAIbcDCAC6BAAhuANAAKQEACG5A0AApAQAIboDQACkBAAhCFUAAOEFACCyAwAA4wQAILMDAADjBAAgtAMAAOMEACC1AwAA4wQAILgDAADjBAAguQMAAOMEACC6AwAA4wQAIBdVAAC7BAAgyQIAALkEADDKAgAAfgAQywIAALkEADDMAgEAAAAB2AIBAP8DACHbAkAAggQAIdwCQACCBAAh8QIBAP8DACGiAwEA_wMAIaMDAQD_AwAhpQMCAI0EACGpAwEA_wMAIbEDAQD_AwAhsgMBAIEEACGzAwIAjgQAIbQDAgCOBAAhtQMCAI4EACG2AwIAjQQAIbcDCAC6BAAhuANAAKQEACG5A0AApAQAIboDQACkBAAhAwAAAH4AIAIAAH8AMAMAAIABACABAAAAfgAgAQAAAHoAIAEAAAB4ACATVwAAuAQAIMkCAAC3BAAwygIAAIUBABDLAgAAtwQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7wIBAP8DACHxAgEA_wMAIfMCAQD_AwAh9AIBAP8DACGsAwEAgQQAIa0DAQCBBAAhwAMBAIEEACHBAyAAgAQAIcIDAQCBBAAhwwMCAI4EACHEAwIAjgQAIQdXAADgBQAgrAMAAOMEACCtAwAA4wQAIMADAADjBAAgwgMAAOMEACDDAwAA4wQAIMQDAADjBAAgAwAAAIUBACACAACGAQAwAwAAeAAgAwAAAIUBACACAACGAQAwAwAAeAAgAwAAAIUBACACAACGAQAwAwAAeAAgEFcAAN8FACDMAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7wIBAAAAAfECAQAAAAHzAgEAAAAB9AIBAAAAAawDAQAAAAGtAwEAAAABwAMBAAAAAcEDIAAAAAHCAwEAAAABwwMCAAAAAcQDAgAAAAEBEQAAigEAIA_MAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7wIBAAAAAfECAQAAAAHzAgEAAAAB9AIBAAAAAawDAQAAAAGtAwEAAAABwAMBAAAAAcEDIAAAAAHCAwEAAAABwwMCAAAAAcQDAgAAAAEBEQAAjAEAMAERAACMAQAwEFcAANIFACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe8CAQDnBAAh8QIBAOcEACHzAgEA5wQAIfQCAQDnBAAhrAMBAOkEACGtAwEA6QQAIcADAQDpBAAhwQMgAOgEACHCAwEA6QQAIcMDAgDxBAAhxAMCAPEEACECAAAAeAAgEQAAjwEAIA_MAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe8CAQDnBAAh8QIBAOcEACHzAgEA5wQAIfQCAQDnBAAhrAMBAOkEACGtAwEA6QQAIcADAQDpBAAhwQMgAOgEACHCAwEA6QQAIcMDAgDxBAAhxAMCAPEEACECAAAAhQEAIBEAAJEBACACAAAAhQEAIBEAAJEBACADAAAAeAAgGAAAigEAIBkAAI8BACABAAAAeAAgAQAAAIUBACALBwAAzQUAIB4AANAFACAfAADPBQAgMAAAzgUAIDEAANEFACCsAwAA4wQAIK0DAADjBAAgwAMAAOMEACDCAwAA4wQAIMMDAADjBAAgxAMAAOMEACASyQIAALYEADDKAgAAmAEAEMsCAAC2BAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh7AIBAPADACHvAgEA8AMAIfECAQDwAwAh8wIBAPADACH0AgEA8AMAIawDAQDyAwAhrQMBAPIDACHAAwEA8gMAIcEDIADxAwAhwgMBAPIDACHDAwIAhQQAIcQDAgCFBAAhAwAAAIUBACACAACXAQAwHQAAmAEAIAMAAACFAQAgAgAAhgEAMAMAAHgAIAEAAAB8ACABAAAAfAAgAwAAAHoAIAIAAHsAMAMAAHwAIAMAAAB6ACACAAB7ADADAAB8ACADAAAAegAgAgAAewAwAwAAfAAgEFQAAMsFACBWAADMBQAgzAIBAAAAAdsCQAAAAAHcAkAAAAAB7AIBAAAAAe8CAQAAAAHxAgEAAAAB8wIBAAAAAaQDAQAAAAGpAwEAAAABuwMBAAAAAbwDAQAAAAG9AwEAAAABvgMBAAAAAb8DAQAAAAEBEQAAoAEAIA7MAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7wIBAAAAAfECAQAAAAHzAgEAAAABpAMBAAAAAakDAQAAAAG7AwEAAAABvAMBAAAAAb0DAQAAAAG-AwEAAAABvwMBAAAAAQERAACiAQAwAREAAKIBADAQVAAAvQUAIFYAAL4FACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe8CAQDnBAAh8QIBAOcEACHzAgEA5wQAIaQDAQDnBAAhqQMBAOcEACG7AwEA5wQAIbwDAQDnBAAhvQMBAOkEACG-AwEA6QQAIb8DAQDpBAAhAgAAAHwAIBEAAKUBACAOzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh7AIBAOcEACHvAgEA5wQAIfECAQDnBAAh8wIBAOcEACGkAwEA5wQAIakDAQDnBAAhuwMBAOcEACG8AwEA5wQAIb0DAQDpBAAhvgMBAOkEACG_AwEA6QQAIQIAAAB6ACARAACnAQAgAgAAAHoAIBEAAKcBACADAAAAfAAgGAAAoAEAIBkAAKUBACABAAAAfAAgAQAAAHoAIAYHAAC6BQAgHgAAvAUAIB8AALsFACC9AwAA4wQAIL4DAADjBAAgvwMAAOMEACARyQIAALUEADDKAgAArgEAEMsCAAC1BAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh7AIBAPADACHvAgEA8AMAIfECAQDwAwAh8wIBAPADACGkAwEA8AMAIakDAQDwAwAhuwMBAPADACG8AwEA8AMAIb0DAQDyAwAhvgMBAPIDACG_AwEA8gMAIQMAAAB6ACACAACtAQAwHQAArgEAIAMAAAB6ACACAAB7ADADAAB8ACABAAAAgAEAIAEAAACAAQAgAwAAAH4AIAIAAH8AMAMAAIABACADAAAAfgAgAgAAfwAwAwAAgAEAIAMAAAB-ACACAAB_ADADAACAAQAgFFUAALkFACDMAgEAAAAB2AIBAAAAAdsCQAAAAAHcAkAAAAAB8QIBAAAAAaIDAQAAAAGjAwEAAAABpQMCAAAAAakDAQAAAAGxAwEAAAABsgMBAAAAAbMDAgAAAAG0AwIAAAABtQMCAAAAAbYDAgAAAAG3AwgAAAABuANAAAAAAbkDQAAAAAG6A0AAAAABAREAALYBACATzAIBAAAAAdgCAQAAAAHbAkAAAAAB3AJAAAAAAfECAQAAAAGiAwEAAAABowMBAAAAAaUDAgAAAAGpAwEAAAABsQMBAAAAAbIDAQAAAAGzAwIAAAABtAMCAAAAAbUDAgAAAAG2AwIAAAABtwMIAAAAAbgDQAAAAAG5A0AAAAABugNAAAAAAQERAAC4AQAwAREAALgBADAUVQAAuAUAIMwCAQDnBAAh2AIBAOcEACHbAkAA6gQAIdwCQADqBAAh8QIBAOcEACGiAwEA5wQAIaMDAQDnBAAhpQMCAPAEACGpAwEA5wQAIbEDAQDnBAAhsgMBAOkEACGzAwIA8QQAIbQDAgDxBAAhtQMCAPEEACG2AwIA8AQAIbcDCAC3BQAhuANAAIUFACG5A0AAhQUAIboDQACFBQAhAgAAAIABACARAAC7AQAgE8wCAQDnBAAh2AIBAOcEACHbAkAA6gQAIdwCQADqBAAh8QIBAOcEACGiAwEA5wQAIaMDAQDnBAAhpQMCAPAEACGpAwEA5wQAIbEDAQDnBAAhsgMBAOkEACGzAwIA8QQAIbQDAgDxBAAhtQMCAPEEACG2AwIA8AQAIbcDCAC3BQAhuANAAIUFACG5A0AAhQUAIboDQACFBQAhAgAAAH4AIBEAAL0BACACAAAAfgAgEQAAvQEAIAMAAACAAQAgGAAAtgEAIBkAALsBACABAAAAgAEAIAEAAAB-ACAMBwAAsgUAIB4AALUFACAfAAC0BQAgMAAAswUAIDEAALYFACCyAwAA4wQAILMDAADjBAAgtAMAAOMEACC1AwAA4wQAILgDAADjBAAguQMAAOMEACC6AwAA4wQAIBbJAgAAsgQAMMoCAADEAQAQywIAALIEADDMAgEA8AMAIdgCAQDwAwAh2wJAAPMDACHcAkAA8wMAIfECAQDwAwAhogMBAPADACGjAwEA8AMAIaUDAgCEBAAhqQMBAPADACGxAwEA8AMAIbIDAQDyAwAhswMCAIUEACG0AwIAhQQAIbUDAgCFBAAhtgMCAIQEACG3AwgAswQAIbgDQACaBAAhuQNAAJoEACG6A0AAmgQAIQMAAAB-ACACAADDAQAwHQAAxAEAIAMAAAB-ACACAAB_ADADAACAAQAgFVYAAK8EACDJAgAArgQAMMoCAADPAQAQywIAAK4EADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8AIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGoAwEA_wMAIakDAQD_AwAhqgMBAP8DACGrAwEAgQQAIawDAQCBBAAhrQMBAIEEACEBAAAAxwEAIBOIAQAAsQQAIMkCAACwBAAwygIAAMkBABDLAgAAsAQAMMwCAQD_AwAh2AIBAP8DACHbAkAAggQAIdwCQACCBAAh6gICAI0EACHrAgIAjgQAIe8CAQD_AwAh8QIBAP8DACGhAwEA_wMAIaIDAQD_AwAhowMBAP8DACGkAwEA_wMAIaUDAgCNBAAhpgMIAI8EACGnA0AApAQAIQSIAQAAsQUAIOsCAADjBAAgpgMAAOMEACCnAwAA4wQAIBOIAQAAsQQAIMkCAACwBAAwygIAAMkBABDLAgAAsAQAMMwCAQAAAAHYAgEA_wMAIdsCQACCBAAh3AJAAIIEACHqAgIAjQQAIesCAgCOBAAh7wIBAP8DACHxAgEA_wMAIaEDAQD_AwAhogMBAP8DACGjAwEA_wMAIaQDAQD_AwAhpQMCAI0EACGmAwgAjwQAIacDQACkBAAhAwAAAMkBACACAADKAQAwAwAAywEAIAEAAADJAQAgAQAAAMcBACAVVgAArwQAIMkCAACuBAAwygIAAM8BABDLAgAArgQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8AIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGoAwEA_wMAIakDAQD_AwAhqgMBAP8DACGrAwEAgQQAIawDAQCBBAAhrQMBAIEEACEGVgAAsAUAIO0CAADjBAAg7gIAAOMEACCrAwAA4wQAIKwDAADjBAAgrQMAAOMEACADAAAAzwEAIAIAANABADADAADHAQAgAwAAAM8BACACAADQAQAwAwAAxwEAIAMAAADPAQAgAgAA0AEAMAMAAMcBACASVgAArwUAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAewCAQAAAAHtAggAAAAB7gIIAAAAAe8CAQAAAAHwAgEAAAAB8QIBAAAAAfMCAQAAAAGkAwEAAAABqAMBAAAAAakDAQAAAAGqAwEAAAABqwMBAAAAAawDAQAAAAGtAwEAAAABAREAANQBACARzAIBAAAAAdsCQAAAAAHcAkAAAAAB7AIBAAAAAe0CCAAAAAHuAggAAAAB7wIBAAAAAfACAQAAAAHxAgEAAAAB8wIBAAAAAaQDAQAAAAGoAwEAAAABqQMBAAAAAaoDAQAAAAGrAwEAAAABrAMBAAAAAa0DAQAAAAEBEQAA1gEAMAERAADWAQAwElYAAKIFACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe0CCADyBAAh7gIIAPIEACHvAgEA5wQAIfACAQDnBAAh8QIBAOcEACHzAgEA5wQAIaQDAQDnBAAhqAMBAOcEACGpAwEA5wQAIaoDAQDnBAAhqwMBAOkEACGsAwEA6QQAIa0DAQDpBAAhAgAAAMcBACARAADZAQAgEcwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIewCAQDnBAAh7QIIAPIEACHuAggA8gQAIe8CAQDnBAAh8AIBAOcEACHxAgEA5wQAIfMCAQDnBAAhpAMBAOcEACGoAwEA5wQAIakDAQDnBAAhqgMBAOcEACGrAwEA6QQAIawDAQDpBAAhrQMBAOkEACECAAAAzwEAIBEAANsBACACAAAAzwEAIBEAANsBACADAAAAxwEAIBgAANQBACAZAADZAQAgAQAAAMcBACABAAAAzwEAIAoHAACdBQAgHgAAoAUAIB8AAJ8FACAwAACeBQAgMQAAoQUAIO0CAADjBAAg7gIAAOMEACCrAwAA4wQAIKwDAADjBAAgrQMAAOMEACAUyQIAAK0EADDKAgAA4gEAEMsCAACtBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh7AIBAPADACHtAggAhgQAIe4CCACGBAAh7wIBAPADACHwAgEA8AMAIfECAQDwAwAh8wIBAPADACGkAwEA8AMAIagDAQDwAwAhqQMBAPADACGqAwEA8AMAIasDAQDyAwAhrAMBAPIDACGtAwEA8gMAIQMAAADPAQAgAgAA4QEAMB0AAOIBACADAAAAzwEAIAIAANABADADAADHAQAgAQAAAMsBACABAAAAywEAIAMAAADJAQAgAgAAygEAMAMAAMsBACADAAAAyQEAIAIAAMoBADADAADLAQAgAwAAAMkBACACAADKAQAwAwAAywEAIBCIAQAAnAUAIMwCAQAAAAHYAgEAAAAB2wJAAAAAAdwCQAAAAAHqAgIAAAAB6wICAAAAAe8CAQAAAAHxAgEAAAABoQMBAAAAAaIDAQAAAAGjAwEAAAABpAMBAAAAAaUDAgAAAAGmAwgAAAABpwNAAAAAAQERAADqAQAgD8wCAQAAAAHYAgEAAAAB2wJAAAAAAdwCQAAAAAHqAgIAAAAB6wICAAAAAe8CAQAAAAHxAgEAAAABoQMBAAAAAaIDAQAAAAGjAwEAAAABpAMBAAAAAaUDAgAAAAGmAwgAAAABpwNAAAAAAQERAADsAQAwAREAAOwBADAQiAEAAJsFACDMAgEA5wQAIdgCAQDnBAAh2wJAAOoEACHcAkAA6gQAIeoCAgDwBAAh6wICAPEEACHvAgEA5wQAIfECAQDnBAAhoQMBAOcEACGiAwEA5wQAIaMDAQDnBAAhpAMBAOcEACGlAwIA8AQAIaYDCADyBAAhpwNAAIUFACECAAAAywEAIBEAAO8BACAPzAIBAOcEACHYAgEA5wQAIdsCQADqBAAh3AJAAOoEACHqAgIA8AQAIesCAgDxBAAh7wIBAOcEACHxAgEA5wQAIaEDAQDnBAAhogMBAOcEACGjAwEA5wQAIaQDAQDnBAAhpQMCAPAEACGmAwgA8gQAIacDQACFBQAhAgAAAMkBACARAADxAQAgAgAAAMkBACARAADxAQAgAwAAAMsBACAYAADqAQAgGQAA7wEAIAEAAADLAQAgAQAAAMkBACAIBwAAlgUAIB4AAJkFACAfAACYBQAgMAAAlwUAIDEAAJoFACDrAgAA4wQAIKYDAADjBAAgpwMAAOMEACASyQIAAKwEADDKAgAA-AEAEMsCAACsBAAwzAIBAPADACHYAgEA8AMAIdsCQADzAwAh3AJAAPMDACHqAgIAhAQAIesCAgCFBAAh7wIBAPADACHxAgEA8AMAIaEDAQDwAwAhogMBAPADACGjAwEA8AMAIaQDAQDwAwAhpQMCAIQEACGmAwgAhgQAIacDQACaBAAhAwAAAMkBACACAAD3AQAwHQAA-AEAIAMAAADJAQAgAgAAygEAMAMAAMsBACABAAAAEwAgAQAAABMAIAMAAAARACACAAASADADAAATACADAAAAEQAgAgAAEgAwAwAAEwAgAwAAABEAIAIAABIAMAMAABMAIAoBAACVBQAgzAIBAAAAAdsCQAAAAAHcAkAAAAABhQMBAAAAAZIDQAAAAAGTAwEAAAABngMBAAAAAZ8DAQAAAAGgAwEAAAABAREAAIACACAJzAIBAAAAAdsCQAAAAAHcAkAAAAABhQMBAAAAAZIDQAAAAAGTAwEAAAABngMBAAAAAZ8DAQAAAAGgAwEAAAABAREAAIICADABEQAAggIAMAoBAACUBQAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAhhQMBAOcEACGSA0AA6gQAIZMDAQDnBAAhngMBAOkEACGfAwEA6QQAIaADAQDpBAAhAgAAABMAIBEAAIUCACAJzAIBAOcEACHbAkAA6gQAIdwCQADqBAAhhQMBAOcEACGSA0AA6gQAIZMDAQDnBAAhngMBAOkEACGfAwEA6QQAIaADAQDpBAAhAgAAABEAIBEAAIcCACACAAAAEQAgEQAAhwIAIAMAAAATACAYAACAAgAgGQAAhQIAIAEAAAATACABAAAAEQAgBgcAAJEFACAeAACTBQAgHwAAkgUAIJ4DAADjBAAgnwMAAOMEACCgAwAA4wQAIAzJAgAAqwQAMMoCAACOAgAQywIAAKsEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACGFAwEA8AMAIZIDQADzAwAhkwMBAPADACGeAwEA8gMAIZ8DAQDyAwAhoAMBAPIDACEDAAAAEQAgAgAAjQIAMB0AAI4CACADAAAAEQAgAgAAEgAwAwAAEwAgAQAAABcAIAEAAAAXACADAAAAFQAgAgAAFgAwAwAAFwAgAwAAABUAIAIAABYAMAMAABcAIAMAAAAVACACAAAWADADAAAXACAOAQAAkAUAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAYUDAQAAAAGVAwEAAAABlgMBAAAAAZcDAQAAAAGYAwEAAAABmQNAAAAAAZoDQAAAAAGbAwEAAAABnAMBAAAAAZ0DAQAAAAEBEQAAlgIAIA3MAgEAAAAB2wJAAAAAAdwCQAAAAAGFAwEAAAABlQMBAAAAAZYDAQAAAAGXAwEAAAABmAMBAAAAAZkDQAAAAAGaA0AAAAABmwMBAAAAAZwDAQAAAAGdAwEAAAABAREAAJgCADABEQAAmAIAMA4BAACPBQAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAhhQMBAOcEACGVAwEA5wQAIZYDAQDnBAAhlwMBAOkEACGYAwEA6QQAIZkDQACFBQAhmgNAAIUFACGbAwEA6QQAIZwDAQDpBAAhnQMBAOkEACECAAAAFwAgEQAAmwIAIA3MAgEA5wQAIdsCQADqBAAh3AJAAOoEACGFAwEA5wQAIZUDAQDnBAAhlgMBAOcEACGXAwEA6QQAIZgDAQDpBAAhmQNAAIUFACGaA0AAhQUAIZsDAQDpBAAhnAMBAOkEACGdAwEA6QQAIQIAAAAVACARAACdAgAgAgAAABUAIBEAAJ0CACADAAAAFwAgGAAAlgIAIBkAAJsCACABAAAAFwAgAQAAABUAIAoHAACMBQAgHgAAjgUAIB8AAI0FACCXAwAA4wQAIJgDAADjBAAgmQMAAOMEACCaAwAA4wQAIJsDAADjBAAgnAMAAOMEACCdAwAA4wQAIBDJAgAAqgQAMMoCAACkAgAQywIAAKoEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACGFAwEA8AMAIZUDAQDwAwAhlgMBAPADACGXAwEA8gMAIZgDAQDyAwAhmQNAAJoEACGaA0AAmgQAIZsDAQDyAwAhnAMBAPIDACGdAwEA8gMAIQMAAAAVACACAACjAgAwHQAApAIAIAMAAAAVACACAAAWADADAAAXACAJyQIAAKgEADDKAgAAqgIAEMsCAACoBAAwzAIBAAAAAdwCQACCBAAhkAMBAP8DACGSA0AAggQAIZMDAQAAAAGUAwAAqQQAIAEAAACnAgAgAQAAAKcCACAIyQIAAKgEADDKAgAAqgIAEMsCAACoBAAwzAIBAP8DACHcAkAAggQAIZADAQD_AwAhkgNAAIIEACGTAwEA_wMAIQADAAAAqgIAIAIAAKsCADADAACnAgAgAwAAAKoCACACAACrAgAwAwAApwIAIAMAAACqAgAgAgAAqwIAMAMAAKcCACAFzAIBAAAAAdwCQAAAAAGQAwEAAAABkgNAAAAAAZMDAQAAAAEBEQAArwIAIAXMAgEAAAAB3AJAAAAAAZADAQAAAAGSA0AAAAABkwMBAAAAAQERAACxAgAwAREAALECADAFzAIBAOcEACHcAkAA6gQAIZADAQDnBAAhkgNAAOoEACGTAwEA5wQAIQIAAACnAgAgEQAAtAIAIAXMAgEA5wQAIdwCQADqBAAhkAMBAOcEACGSA0AA6gQAIZMDAQDnBAAhAgAAAKoCACARAAC2AgAgAgAAAKoCACARAAC2AgAgAwAAAKcCACAYAACvAgAgGQAAtAIAIAEAAACnAgAgAQAAAKoCACADBwAAiQUAIB4AAIsFACAfAACKBQAgCMkCAACnBAAwygIAAL0CABDLAgAApwQAMMwCAQDwAwAh3AJAAPMDACGQAwEA8AMAIZIDQADzAwAhkwMBAPADACEDAAAAqgIAIAIAALwCADAdAAC9AgAgAwAAAKoCACACAACrAgAwAwAApwIAIAnJAgAApgQAMMoCAADDAgAQywIAAKYEADDMAgEAAAAB2wJAAIIEACHcAkAAggQAIZADAQD_AwAhkQMBAP8DACGSA0AAggQAIQEAAADAAgAgAQAAAMACACAJyQIAAKYEADDKAgAAwwIAEMsCAACmBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAhkAMBAP8DACGRAwEA_wMAIZIDQACCBAAhAAMAAADDAgAgAgAAxAIAMAMAAMACACADAAAAwwIAIAIAAMQCADADAADAAgAgAwAAAMMCACACAADEAgAwAwAAwAIAIAbMAgEAAAAB2wJAAAAAAdwCQAAAAAGQAwEAAAABkQMBAAAAAZIDQAAAAAEBEQAAyAIAIAbMAgEAAAAB2wJAAAAAAdwCQAAAAAGQAwEAAAABkQMBAAAAAZIDQAAAAAEBEQAAygIAMAERAADKAgAwBswCAQDnBAAh2wJAAOoEACHcAkAA6gQAIZADAQDnBAAhkQMBAOcEACGSA0AA6gQAIQIAAADAAgAgEQAAzQIAIAbMAgEA5wQAIdsCQADqBAAh3AJAAOoEACGQAwEA5wQAIZEDAQDnBAAhkgNAAOoEACECAAAAwwIAIBEAAM8CACACAAAAwwIAIBEAAM8CACADAAAAwAIAIBgAAMgCACAZAADNAgAgAQAAAMACACABAAAAwwIAIAMHAACGBQAgHgAAiAUAIB8AAIcFACAJyQIAAKUEADDKAgAA1gIAEMsCAAClBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAhkAMBAPADACGRAwEA8AMAIZIDQADzAwAhAwAAAMMCACACAADVAgAwHQAA1gIAIAMAAADDAgAgAgAAxAIAMAMAAMACACARyQIAAKEEADDKAgAA3AIAEMsCAAChBAAwzAIBAAAAAdsCQACCBAAh3AJAAIIEACHxAgAAowSNAyLzAgEA_wMAIYUDAQCBBAAhhgMBAP8DACGIAwAAogSIAyKJAwEA_wMAIYoDAQD_AwAhiwMBAIEEACGNA0AAggQAIY4DQACkBAAhjwMBAP8DACEBAAAA2QIAIAEAAADZAgAgEckCAAChBAAwygIAANwCABDLAgAAoQQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAACjBI0DIvMCAQD_AwAhhQMBAIEEACGGAwEA_wMAIYgDAACiBIgDIokDAQD_AwAhigMBAP8DACGLAwEAgQQAIY0DQACCBAAhjgNAAKQEACGPAwEA_wMAIQOFAwAA4wQAIIsDAADjBAAgjgMAAOMEACADAAAA3AIAIAIAAN0CADADAADZAgAgAwAAANwCACACAADdAgAwAwAA2QIAIAMAAADcAgAgAgAA3QIAMAMAANkCACAOzAIBAAAAAdsCQAAAAAHcAkAAAAAB8QIAAACNAwLzAgEAAAABhQMBAAAAAYYDAQAAAAGIAwAAAIgDAokDAQAAAAGKAwEAAAABiwMBAAAAAY0DQAAAAAGOA0AAAAABjwMBAAAAAQERAADhAgAgDswCAQAAAAHbAkAAAAAB3AJAAAAAAfECAAAAjQMC8wIBAAAAAYUDAQAAAAGGAwEAAAABiAMAAACIAwKJAwEAAAABigMBAAAAAYsDAQAAAAGNA0AAAAABjgNAAAAAAY8DAQAAAAEBEQAA4wIAMAERAADjAgAwDswCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfECAACEBY0DIvMCAQDnBAAhhQMBAOkEACGGAwEA5wQAIYgDAACDBYgDIokDAQDnBAAhigMBAOcEACGLAwEA6QQAIY0DQADqBAAhjgNAAIUFACGPAwEA5wQAIQIAAADZAgAgEQAA5gIAIA7MAgEA5wQAIdsCQADqBAAh3AJAAOoEACHxAgAAhAWNAyLzAgEA5wQAIYUDAQDpBAAhhgMBAOcEACGIAwAAgwWIAyKJAwEA5wQAIYoDAQDnBAAhiwMBAOkEACGNA0AA6gQAIY4DQACFBQAhjwMBAOcEACECAAAA3AIAIBEAAOgCACACAAAA3AIAIBEAAOgCACADAAAA2QIAIBgAAOECACAZAADmAgAgAQAAANkCACABAAAA3AIAIAYHAACABQAgHgAAggUAIB8AAIEFACCFAwAA4wQAIIsDAADjBAAgjgMAAOMEACARyQIAAJcEADDKAgAA7wIAEMsCAACXBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8QIAAJkEjQMi8wIBAPADACGFAwEA8gMAIYYDAQDwAwAhiAMAAJgEiAMiiQMBAPADACGKAwEA8AMAIYsDAQDyAwAhjQNAAPMDACGOA0AAmgQAIY8DAQDwAwAhAwAAANwCACACAADuAgAwHQAA7wIAIAMAAADcAgAgAgAA3QIAMAMAANkCACAPyQIAAJUEADDKAgAA9QIAEMsCAACVBAAwzAIBAAAAAfoCAQD_AwAh-wIBAP8DACH8AgEA_wMAIf0CAgCNBAAh_gICAI0EACH_AggAjwQAIYADAQD_AwAhgQMBAP8DACGCAwgAjwQAIYMDQACCBAAhhAMAAJYEACABAAAA8gIAIAEAAADyAgAgDskCAACVBAAwygIAAPUCABDLAgAAlQQAMMwCAQD_AwAh-gIBAP8DACH7AgEA_wMAIfwCAQD_AwAh_QICAI0EACH-AgIAjQQAIf8CCACPBAAhgAMBAP8DACGBAwEA_wMAIYIDCACPBAAhgwNAAIIEACEC_wIAAOMEACCCAwAA4wQAIAMAAAD1AgAgAgAA9gIAMAMAAPICACADAAAA9QIAIAIAAPYCADADAADyAgAgAwAAAPUCACACAAD2AgAwAwAA8gIAIAvMAgEAAAAB-gIBAAAAAfsCAQAAAAH8AgEAAAAB_QICAAAAAf4CAgAAAAH_AggAAAABgAMBAAAAAYEDAQAAAAGCAwgAAAABgwNAAAAAAQERAAD6AgAgC8wCAQAAAAH6AgEAAAAB-wIBAAAAAfwCAQAAAAH9AgIAAAAB_gICAAAAAf8CCAAAAAGAAwEAAAABgQMBAAAAAYIDCAAAAAGDA0AAAAABAREAAPwCADABEQAA_AIAMAvMAgEA5wQAIfoCAQDnBAAh-wIBAOcEACH8AgEA5wQAIf0CAgDwBAAh_gICAPAEACH_AggA8gQAIYADAQDnBAAhgQMBAOcEACGCAwgA8gQAIYMDQADqBAAhAgAAAPICACARAAD_AgAgC8wCAQDnBAAh-gIBAOcEACH7AgEA5wQAIfwCAQDnBAAh_QICAPAEACH-AgIA8AQAIf8CCADyBAAhgAMBAOcEACGBAwEA5wQAIYIDCADyBAAhgwNAAOoEACECAAAA9QIAIBEAAIEDACACAAAA9QIAIBEAAIEDACADAAAA8gIAIBgAAPoCACAZAAD_AgAgAQAAAPICACABAAAA9QIAIAcHAAD7BAAgHgAA_gQAIB8AAP0EACAwAAD8BAAgMQAA_wQAIP8CAADjBAAgggMAAOMEACAOyQIAAJQEADDKAgAAiAMAEMsCAACUBAAwzAIBAPADACH6AgEA8AMAIfsCAQDwAwAh_AIBAPADACH9AgIAhAQAIf4CAgCEBAAh_wIIAIYEACGAAwEA8AMAIYEDAQDwAwAhggMIAIYEACGDA0AA8wMAIQMAAAD1AgAgAgAAhwMAMB0AAIgDACADAAAA9QIAIAIAAPYCADADAADyAgAgC8kCAACTBAAwygIAAI4DABDLAgAAkwQAMMwCAQAAAAHbAkAAggQAIdwCQACCBAAh8wIBAP8DACH1AiAAgAQAIfcCAQD_AwAh-AIBAP8DACH5AgEAgQQAIQEAAACLAwAgAQAAAIsDACALyQIAAJMEADDKAgAAjgMAEMsCAACTBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh8wIBAP8DACH1AiAAgAQAIfcCAQD_AwAh-AIBAP8DACH5AgEAgQQAIQH5AgAA4wQAIAMAAACOAwAgAgAAjwMAMAMAAIsDACADAAAAjgMAIAIAAI8DADADAACLAwAgAwAAAI4DACACAACPAwAwAwAAiwMAIAjMAgEAAAAB2wJAAAAAAdwCQAAAAAHzAgEAAAAB9QIgAAAAAfcCAQAAAAH4AgEAAAAB-QIBAAAAAQERAACTAwAgCMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAH1AiAAAAAB9wIBAAAAAfgCAQAAAAH5AgEAAAABAREAAJUDADABEQAAlQMAMAjMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHzAgEA5wQAIfUCIADoBAAh9wIBAOcEACH4AgEA5wQAIfkCAQDpBAAhAgAAAIsDACARAACYAwAgCMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDnBAAh9QIgAOgEACH3AgEA5wQAIfgCAQDnBAAh-QIBAOkEACECAAAAjgMAIBEAAJoDACACAAAAjgMAIBEAAJoDACADAAAAiwMAIBgAAJMDACAZAACYAwAgAQAAAIsDACABAAAAjgMAIAQHAAD4BAAgHgAA-gQAIB8AAPkEACD5AgAA4wQAIAvJAgAAkgQAMMoCAAChAwAQywIAAJIEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACHzAgEA8AMAIfUCIADxAwAh9wIBAPADACH4AgEA8AMAIfkCAQDyAwAhAwAAAI4DACACAACgAwAwHQAAoQMAIAMAAACOAwAgAgAAjwMAMAMAAIsDACAKyQIAAJEEADDKAgAApwMAEMsCAACRBAAwzAIBAAAAAdsCQACCBAAh3AJAAIIEACHzAgEA_wMAIfQCAQAAAAH1AiAAgAQAIfYCAgCNBAAhAQAAAKQDACABAAAApAMAIArJAgAAkQQAMMoCAACnAwAQywIAAJEEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHzAgEA_wMAIfQCAQD_AwAh9QIgAIAEACH2AgIAjQQAIQADAAAApwMAIAIAAKgDADADAACkAwAgAwAAAKcDACACAACoAwAwAwAApAMAIAMAAACnAwAgAgAAqAMAMAMAAKQDACAHzAIBAAAAAdsCQAAAAAHcAkAAAAAB8wIBAAAAAfQCAQAAAAH1AiAAAAAB9gICAAAAAQERAACsAwAgB8wCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAH0AgEAAAAB9QIgAAAAAfYCAgAAAAEBEQAArgMAMAERAACuAwAwB8wCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDnBAAh9AIBAOcEACH1AiAA6AQAIfYCAgDwBAAhAgAAAKQDACARAACxAwAgB8wCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDnBAAh9AIBAOcEACH1AiAA6AQAIfYCAgDwBAAhAgAAAKcDACARAACzAwAgAgAAAKcDACARAACzAwAgAwAAAKQDACAYAACsAwAgGQAAsQMAIAEAAACkAwAgAQAAAKcDACAFBwAA8wQAIB4AAPYEACAfAAD1BAAgMAAA9AQAIDEAAPcEACAKyQIAAJAEADDKAgAAugMAEMsCAACQBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8wIBAPADACH0AgEA8AMAIfUCIADxAwAh9gICAIQEACEDAAAApwMAIAIAALkDADAdAAC6AwAgAwAAAKcDACACAACoAwAwAwAApAMAIBLJAgAAjAQAMMoCAADAAwAQywIAAIwEADDMAgEAAAAB2AIBAP8DACHbAkAAggQAIdwCQACCBAAh6AIBAP8DACHpAgEA_wMAIeoCAgCNBAAh6wICAI4EACHsAgEA_wMAIe0CCACPBAAh7gIIAI8EACHvAgEA_wMAIfACAQD_AwAh8QIBAP8DACHyAgEA_wMAIQEAAAC9AwAgAQAAAL0DACASyQIAAIwEADDKAgAAwAMAEMsCAACMBAAwzAIBAP8DACHYAgEA_wMAIdsCQACCBAAh3AJAAIIEACHoAgEA_wMAIekCAQD_AwAh6gICAI0EACHrAgIAjgQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8AIBAP8DACHxAgEA_wMAIfICAQD_AwAhA-sCAADjBAAg7QIAAOMEACDuAgAA4wQAIAMAAADAAwAgAgAAwQMAMAMAAL0DACADAAAAwAMAIAIAAMEDADADAAC9AwAgAwAAAMADACACAADBAwAwAwAAvQMAIA_MAgEAAAAB2AIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAekCAQAAAAHqAgIAAAAB6wICAAAAAewCAQAAAAHtAggAAAAB7gIIAAAAAe8CAQAAAAHwAgEAAAAB8QIBAAAAAfICAQAAAAEBEQAAxQMAIA_MAgEAAAAB2AIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAekCAQAAAAHqAgIAAAAB6wICAAAAAewCAQAAAAHtAggAAAAB7gIIAAAAAe8CAQAAAAHwAgEAAAAB8QIBAAAAAfICAQAAAAEBEQAAxwMAMAERAADHAwAwD8wCAQDnBAAh2AIBAOcEACHbAkAA6gQAIdwCQADqBAAh6AIBAOcEACHpAgEA5wQAIeoCAgDwBAAh6wICAPEEACHsAgEA5wQAIe0CCADyBAAh7gIIAPIEACHvAgEA5wQAIfACAQDnBAAh8QIBAOcEACHyAgEA5wQAIQIAAAC9AwAgEQAAygMAIA_MAgEA5wQAIdgCAQDnBAAh2wJAAOoEACHcAkAA6gQAIegCAQDnBAAh6QIBAOcEACHqAgIA8AQAIesCAgDxBAAh7AIBAOcEACHtAggA8gQAIe4CCADyBAAh7wIBAOcEACHwAgEA5wQAIfECAQDnBAAh8gIBAOcEACECAAAAwAMAIBEAAMwDACACAAAAwAMAIBEAAMwDACADAAAAvQMAIBgAAMUDACAZAADKAwAgAQAAAL0DACABAAAAwAMAIAgHAADrBAAgHgAA7gQAIB8AAO0EACAwAADsBAAgMQAA7wQAIOsCAADjBAAg7QIAAOMEACDuAgAA4wQAIBLJAgAAgwQAMMoCAADTAwAQywIAAIMEADDMAgEA8AMAIdgCAQDwAwAh2wJAAPMDACHcAkAA8wMAIegCAQDwAwAh6QIBAPADACHqAgIAhAQAIesCAgCFBAAh7AIBAPADACHtAggAhgQAIe4CCACGBAAh7wIBAPADACHwAgEA8AMAIfECAQDwAwAh8gIBAPADACEDAAAAwAMAIAIAANIDADAdAADTAwAgAwAAAMADACACAADBAwAwAwAAvQMAIBTJAgAA_gMAMMoCAADZAwAQywIAAP4DADDMAgEAAAABzQIBAP8DACHOAgEA_wMAIc8CAQD_AwAh0AIgAIAEACHRAgEA_wMAIdICAQD_AwAh0wIBAP8DACHUAgEAgQQAIdUCAQD_AwAh1gIBAP8DACHXAgEA_wMAIdgCAQD_AwAh2QIBAP8DACHaAgEAgQQAIdsCQACCBAAh3AJAAIIEACEBAAAA1gMAIAEAAADWAwAgFMkCAAD-AwAwygIAANkDABDLAgAA_gMAMMwCAQD_AwAhzQIBAP8DACHOAgEA_wMAIc8CAQD_AwAh0AIgAIAEACHRAgEA_wMAIdICAQD_AwAh0wIBAP8DACHUAgEAgQQAIdUCAQD_AwAh1gIBAP8DACHXAgEA_wMAIdgCAQD_AwAh2QIBAP8DACHaAgEAgQQAIdsCQACCBAAh3AJAAIIEACEC1AIAAOMEACDaAgAA4wQAIAMAAADZAwAgAgAA2gMAMAMAANYDACADAAAA2QMAIAIAANoDADADAADWAwAgAwAAANkDACACAADaAwAwAwAA1gMAIBHMAgEAAAABzQIBAAAAAc4CAQAAAAHPAgEAAAAB0AIgAAAAAdECAQAAAAHSAgEAAAAB0wIBAAAAAdQCAQAAAAHVAgEAAAAB1gIBAAAAAdcCAQAAAAHYAgEAAAAB2QIBAAAAAdoCAQAAAAHbAkAAAAAB3AJAAAAAAQERAADeAwAgEcwCAQAAAAHNAgEAAAABzgIBAAAAAc8CAQAAAAHQAiAAAAAB0QIBAAAAAdICAQAAAAHTAgEAAAAB1AIBAAAAAdUCAQAAAAHWAgEAAAAB1wIBAAAAAdgCAQAAAAHZAgEAAAAB2gIBAAAAAdsCQAAAAAHcAkAAAAABAREAAOADADABEQAA4AMAMBHMAgEA5wQAIc0CAQDnBAAhzgIBAOcEACHPAgEA5wQAIdACIADoBAAh0QIBAOcEACHSAgEA5wQAIdMCAQDnBAAh1AIBAOkEACHVAgEA5wQAIdYCAQDnBAAh1wIBAOcEACHYAgEA5wQAIdkCAQDnBAAh2gIBAOkEACHbAkAA6gQAIdwCQADqBAAhAgAAANYDACARAADjAwAgEcwCAQDnBAAhzQIBAOcEACHOAgEA5wQAIc8CAQDnBAAh0AIgAOgEACHRAgEA5wQAIdICAQDnBAAh0wIBAOcEACHUAgEA6QQAIdUCAQDnBAAh1gIBAOcEACHXAgEA5wQAIdgCAQDnBAAh2QIBAOcEACHaAgEA6QQAIdsCQADqBAAh3AJAAOoEACECAAAA2QMAIBEAAOUDACACAAAA2QMAIBEAAOUDACADAAAA1gMAIBgAAN4DACAZAADjAwAgAQAAANYDACABAAAA2QMAIAUHAADkBAAgHgAA5gQAIB8AAOUEACDUAgAA4wQAINoCAADjBAAgFMkCAADvAwAwygIAAOwDABDLAgAA7wMAMMwCAQDwAwAhzQIBAPADACHOAgEA8AMAIc8CAQDwAwAh0AIgAPEDACHRAgEA8AMAIdICAQDwAwAh0wIBAPADACHUAgEA8gMAIdUCAQDwAwAh1gIBAPADACHXAgEA8AMAIdgCAQDwAwAh2QIBAPADACHaAgEA8gMAIdsCQADzAwAh3AJAAPMDACEDAAAA2QMAIAIAAOsDADAdAADsAwAgAwAAANkDACACAADaAwAwAwAA1gMAIBTJAgAA7wMAMMoCAADsAwAQywIAAO8DADDMAgEA8AMAIc0CAQDwAwAhzgIBAPADACHPAgEA8AMAIdACIADxAwAh0QIBAPADACHSAgEA8AMAIdMCAQDwAwAh1AIBAPIDACHVAgEA8AMAIdYCAQDwAwAh1wIBAPADACHYAgEA8AMAIdkCAQDwAwAh2gIBAPIDACHbAkAA8wMAIdwCQADzAwAhDgcAAPUDACAeAAD9AwAgHwAA_QMAIN0CAQAAAAHeAgEAAAAE3wIBAAAABOACAQAAAAHhAgEAAAAB4gIBAAAAAeMCAQAAAAHkAgEA_AMAIeUCAQAAAAHmAgEAAAAB5wIBAAAAAQUHAAD1AwAgHgAA-wMAIB8AAPsDACDdAiAAAAAB5AIgAPoDACEOBwAA-AMAIB4AAPkDACAfAAD5AwAg3QIBAAAAAd4CAQAAAAXfAgEAAAAF4AIBAAAAAeECAQAAAAHiAgEAAAAB4wIBAAAAAeQCAQD3AwAh5QIBAAAAAeYCAQAAAAHnAgEAAAABCwcAAPUDACAeAAD2AwAgHwAA9gMAIN0CQAAAAAHeAkAAAAAE3wJAAAAABOACQAAAAAHhAkAAAAAB4gJAAAAAAeMCQAAAAAHkAkAA9AMAIQsHAAD1AwAgHgAA9gMAIB8AAPYDACDdAkAAAAAB3gJAAAAABN8CQAAAAATgAkAAAAAB4QJAAAAAAeICQAAAAAHjAkAAAAAB5AJAAPQDACEI3QICAAAAAd4CAgAAAATfAgIAAAAE4AICAAAAAeECAgAAAAHiAgIAAAAB4wICAAAAAeQCAgD1AwAhCN0CQAAAAAHeAkAAAAAE3wJAAAAABOACQAAAAAHhAkAAAAAB4gJAAAAAAeMCQAAAAAHkAkAA9gMAIQ4HAAD4AwAgHgAA-QMAIB8AAPkDACDdAgEAAAAB3gIBAAAABd8CAQAAAAXgAgEAAAAB4QIBAAAAAeICAQAAAAHjAgEAAAAB5AIBAPcDACHlAgEAAAAB5gIBAAAAAecCAQAAAAEI3QICAAAAAd4CAgAAAAXfAgIAAAAF4AICAAAAAeECAgAAAAHiAgIAAAAB4wICAAAAAeQCAgD4AwAhC90CAQAAAAHeAgEAAAAF3wIBAAAABeACAQAAAAHhAgEAAAAB4gIBAAAAAeMCAQAAAAHkAgEA-QMAIeUCAQAAAAHmAgEAAAAB5wIBAAAAAQUHAAD1AwAgHgAA-wMAIB8AAPsDACDdAiAAAAAB5AIgAPoDACEC3QIgAAAAAeQCIAD7AwAhDgcAAPUDACAeAAD9AwAgHwAA_QMAIN0CAQAAAAHeAgEAAAAE3wIBAAAABOACAQAAAAHhAgEAAAAB4gIBAAAAAeMCAQAAAAHkAgEA_AMAIeUCAQAAAAHmAgEAAAAB5wIBAAAAAQvdAgEAAAAB3gIBAAAABN8CAQAAAATgAgEAAAAB4QIBAAAAAeICAQAAAAHjAgEAAAAB5AIBAP0DACHlAgEAAAAB5gIBAAAAAecCAQAAAAEUyQIAAP4DADDKAgAA2QMAEMsCAAD-AwAwzAIBAP8DACHNAgEA_wMAIc4CAQD_AwAhzwIBAP8DACHQAiAAgAQAIdECAQD_AwAh0gIBAP8DACHTAgEA_wMAIdQCAQCBBAAh1QIBAP8DACHWAgEA_wMAIdcCAQD_AwAh2AIBAP8DACHZAgEA_wMAIdoCAQCBBAAh2wJAAIIEACHcAkAAggQAIQvdAgEAAAAB3gIBAAAABN8CAQAAAATgAgEAAAAB4QIBAAAAAeICAQAAAAHjAgEAAAAB5AIBAP0DACHlAgEAAAAB5gIBAAAAAecCAQAAAAEC3QIgAAAAAeQCIAD7AwAhC90CAQAAAAHeAgEAAAAF3wIBAAAABeACAQAAAAHhAgEAAAAB4gIBAAAAAeMCAQAAAAHkAgEA-QMAIeUCAQAAAAHmAgEAAAAB5wIBAAAAAQjdAkAAAAAB3gJAAAAABN8CQAAAAATgAkAAAAAB4QJAAAAAAeICQAAAAAHjAkAAAAAB5AJAAPYDACESyQIAAIMEADDKAgAA0wMAEMsCAACDBAAwzAIBAPADACHYAgEA8AMAIdsCQADzAwAh3AJAAPMDACHoAgEA8AMAIekCAQDwAwAh6gICAIQEACHrAgIAhQQAIewCAQDwAwAh7QIIAIYEACHuAggAhgQAIe8CAQDwAwAh8AIBAPADACHxAgEA8AMAIfICAQDwAwAhDQcAAPUDACAeAAD1AwAgHwAA9QMAIDAAAIsEACAxAAD1AwAg3QICAAAAAd4CAgAAAATfAgIAAAAE4AICAAAAAeECAgAAAAHiAgIAAAAB4wICAAAAAeQCAgCKBAAhDQcAAPgDACAeAAD4AwAgHwAA-AMAIDAAAIgEACAxAAD4AwAg3QICAAAAAd4CAgAAAAXfAgIAAAAF4AICAAAAAeECAgAAAAHiAgIAAAAB4wICAAAAAeQCAgCJBAAhDQcAAPgDACAeAACIBAAgHwAAiAQAIDAAAIgEACAxAACIBAAg3QIIAAAAAd4CCAAAAAXfAggAAAAF4AIIAAAAAeECCAAAAAHiAggAAAAB4wIIAAAAAeQCCACHBAAhDQcAAPgDACAeAACIBAAgHwAAiAQAIDAAAIgEACAxAACIBAAg3QIIAAAAAd4CCAAAAAXfAggAAAAF4AIIAAAAAeECCAAAAAHiAggAAAAB4wIIAAAAAeQCCACHBAAhCN0CCAAAAAHeAggAAAAF3wIIAAAABeACCAAAAAHhAggAAAAB4gIIAAAAAeMCCAAAAAHkAggAiAQAIQ0HAAD4AwAgHgAA-AMAIB8AAPgDACAwAACIBAAgMQAA-AMAIN0CAgAAAAHeAgIAAAAF3wICAAAABeACAgAAAAHhAgIAAAAB4gICAAAAAeMCAgAAAAHkAgIAiQQAIQ0HAAD1AwAgHgAA9QMAIB8AAPUDACAwAACLBAAgMQAA9QMAIN0CAgAAAAHeAgIAAAAE3wICAAAABOACAgAAAAHhAgIAAAAB4gICAAAAAeMCAgAAAAHkAgIAigQAIQjdAggAAAAB3gIIAAAABN8CCAAAAATgAggAAAAB4QIIAAAAAeICCAAAAAHjAggAAAAB5AIIAIsEACESyQIAAIwEADDKAgAAwAMAEMsCAACMBAAwzAIBAP8DACHYAgEA_wMAIdsCQACCBAAh3AJAAIIEACHoAgEA_wMAIekCAQD_AwAh6gICAI0EACHrAgIAjgQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8AIBAP8DACHxAgEA_wMAIfICAQD_AwAhCN0CAgAAAAHeAgIAAAAE3wICAAAABOACAgAAAAHhAgIAAAAB4gICAAAAAeMCAgAAAAHkAgIA9QMAIQjdAgIAAAAB3gICAAAABd8CAgAAAAXgAgIAAAAB4QICAAAAAeICAgAAAAHjAgIAAAAB5AICAPgDACEI3QIIAAAAAd4CCAAAAAXfAggAAAAF4AIIAAAAAeECCAAAAAHiAggAAAAB4wIIAAAAAeQCCACIBAAhCskCAACQBAAwygIAALoDABDLAgAAkAQAMMwCAQDwAwAh2wJAAPMDACHcAkAA8wMAIfMCAQDwAwAh9AIBAPADACH1AiAA8QMAIfYCAgCEBAAhCskCAACRBAAwygIAAKcDABDLAgAAkQQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfMCAQD_AwAh9AIBAP8DACH1AiAAgAQAIfYCAgCNBAAhC8kCAACSBAAwygIAAKEDABDLAgAAkgQAMMwCAQDwAwAh2wJAAPMDACHcAkAA8wMAIfMCAQDwAwAh9QIgAPEDACH3AgEA8AMAIfgCAQDwAwAh-QIBAPIDACELyQIAAJMEADDKAgAAjgMAEMsCAACTBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh8wIBAP8DACH1AiAAgAQAIfcCAQD_AwAh-AIBAP8DACH5AgEAgQQAIQ7JAgAAlAQAMMoCAACIAwAQywIAAJQEADDMAgEA8AMAIfoCAQDwAwAh-wIBAPADACH8AgEA8AMAIf0CAgCEBAAh_gICAIQEACH_AggAhgQAIYADAQDwAwAhgQMBAPADACGCAwgAhgQAIYMDQADzAwAhDskCAACVBAAwygIAAPUCABDLAgAAlQQAMMwCAQD_AwAh-gIBAP8DACH7AgEA_wMAIfwCAQD_AwAh_QICAI0EACH-AgIAjQQAIf8CCACPBAAhgAMBAP8DACGBAwEA_wMAIYIDCACPBAAhgwNAAIIEACEC-gIBAAAAAfsCAQAAAAERyQIAAJcEADDKAgAA7wIAEMsCAACXBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8QIAAJkEjQMi8wIBAPADACGFAwEA8gMAIYYDAQDwAwAhiAMAAJgEiAMiiQMBAPADACGKAwEA8AMAIYsDAQDyAwAhjQNAAPMDACGOA0AAmgQAIY8DAQDwAwAhBwcAAPUDACAeAACgBAAgHwAAoAQAIN0CAAAAiAMC3gIAAACIAwjfAgAAAIgDCOQCAACfBIgDIgcHAAD1AwAgHgAAngQAIB8AAJ4EACDdAgAAAI0DAt4CAAAAjQMI3wIAAACNAwjkAgAAnQSNAyILBwAA-AMAIB4AAJwEACAfAACcBAAg3QJAAAAAAd4CQAAAAAXfAkAAAAAF4AJAAAAAAeECQAAAAAHiAkAAAAAB4wJAAAAAAeQCQACbBAAhCwcAAPgDACAeAACcBAAgHwAAnAQAIN0CQAAAAAHeAkAAAAAF3wJAAAAABeACQAAAAAHhAkAAAAAB4gJAAAAAAeMCQAAAAAHkAkAAmwQAIQjdAkAAAAAB3gJAAAAABd8CQAAAAAXgAkAAAAAB4QJAAAAAAeICQAAAAAHjAkAAAAAB5AJAAJwEACEHBwAA9QMAIB4AAJ4EACAfAACeBAAg3QIAAACNAwLeAgAAAI0DCN8CAAAAjQMI5AIAAJ0EjQMiBN0CAAAAjQMC3gIAAACNAwjfAgAAAI0DCOQCAACeBI0DIgcHAAD1AwAgHgAAoAQAIB8AAKAEACDdAgAAAIgDAt4CAAAAiAMI3wIAAACIAwjkAgAAnwSIAyIE3QIAAACIAwLeAgAAAIgDCN8CAAAAiAMI5AIAAKAEiAMiEckCAAChBAAwygIAANwCABDLAgAAoQQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAACjBI0DIvMCAQD_AwAhhQMBAIEEACGGAwEA_wMAIYgDAACiBIgDIokDAQD_AwAhigMBAP8DACGLAwEAgQQAIY0DQACCBAAhjgNAAKQEACGPAwEA_wMAIQTdAgAAAIgDAt4CAAAAiAMI3wIAAACIAwjkAgAAoASIAyIE3QIAAACNAwLeAgAAAI0DCN8CAAAAjQMI5AIAAJ4EjQMiCN0CQAAAAAHeAkAAAAAF3wJAAAAABeACQAAAAAHhAkAAAAAB4gJAAAAAAeMCQAAAAAHkAkAAnAQAIQnJAgAApQQAMMoCAADWAgAQywIAAKUEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACGQAwEA8AMAIZEDAQDwAwAhkgNAAPMDACEJyQIAAKYEADDKAgAAwwIAEMsCAACmBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAhkAMBAP8DACGRAwEA_wMAIZIDQACCBAAhCMkCAACnBAAwygIAAL0CABDLAgAApwQAMMwCAQDwAwAh3AJAAPMDACGQAwEA8AMAIZIDQADzAwAhkwMBAPADACEIyQIAAKgEADDKAgAAqgIAEMsCAACoBAAwzAIBAP8DACHcAkAAggQAIZADAQD_AwAhkgNAAIIEACGTAwEA_wMAIQKQAwEAAAABkwMBAAAAARDJAgAAqgQAMMoCAACkAgAQywIAAKoEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACGFAwEA8AMAIZUDAQDwAwAhlgMBAPADACGXAwEA8gMAIZgDAQDyAwAhmQNAAJoEACGaA0AAmgQAIZsDAQDyAwAhnAMBAPIDACGdAwEA8gMAIQzJAgAAqwQAMMoCAACOAgAQywIAAKsEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACGFAwEA8AMAIZIDQADzAwAhkwMBAPADACGeAwEA8gMAIZ8DAQDyAwAhoAMBAPIDACESyQIAAKwEADDKAgAA-AEAEMsCAACsBAAwzAIBAPADACHYAgEA8AMAIdsCQADzAwAh3AJAAPMDACHqAgIAhAQAIesCAgCFBAAh7wIBAPADACHxAgEA8AMAIaEDAQDwAwAhogMBAPADACGjAwEA8AMAIaQDAQDwAwAhpQMCAIQEACGmAwgAhgQAIacDQACaBAAhFMkCAACtBAAwygIAAOIBABDLAgAArQQAMMwCAQDwAwAh2wJAAPMDACHcAkAA8wMAIewCAQDwAwAh7QIIAIYEACHuAggAhgQAIe8CAQDwAwAh8AIBAPADACHxAgEA8AMAIfMCAQDwAwAhpAMBAPADACGoAwEA8AMAIakDAQDwAwAhqgMBAPADACGrAwEA8gMAIawDAQDyAwAhrQMBAPIDACEVVgAArwQAIMkCAACuBAAwygIAAM8BABDLAgAArgQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8AIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGoAwEA_wMAIakDAQD_AwAhqgMBAP8DACGrAwEAgQQAIawDAQCBBAAhrQMBAIEEACEDrgMAAMkBACCvAwAAyQEAILADAADJAQAgE4gBAACxBAAgyQIAALAEADDKAgAAyQEAEMsCAACwBAAwzAIBAP8DACHYAgEA_wMAIdsCQACCBAAh3AJAAIIEACHqAgIAjQQAIesCAgCOBAAh7wIBAP8DACHxAgEA_wMAIaEDAQD_AwAhogMBAP8DACGjAwEA_wMAIaQDAQD_AwAhpQMCAI0EACGmAwgAjwQAIacDQACkBAAhF1YAAK8EACDJAgAArgQAMMoCAADPAQAQywIAAK4EADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHsAgEA_wMAIe0CCACPBAAh7gIIAI8EACHvAgEA_wMAIfACAQD_AwAh8QIBAP8DACHzAgEA_wMAIaQDAQD_AwAhqAMBAP8DACGpAwEA_wMAIaoDAQD_AwAhqwMBAIEEACGsAwEAgQQAIa0DAQCBBAAh5QMAAM8BACDmAwAAzwEAIBbJAgAAsgQAMMoCAADEAQAQywIAALIEADDMAgEA8AMAIdgCAQDwAwAh2wJAAPMDACHcAkAA8wMAIfECAQDwAwAhogMBAPADACGjAwEA8AMAIaUDAgCEBAAhqQMBAPADACGxAwEA8AMAIbIDAQDyAwAhswMCAIUEACG0AwIAhQQAIbUDAgCFBAAhtgMCAIQEACG3AwgAswQAIbgDQACaBAAhuQNAAJoEACG6A0AAmgQAIQ0HAAD1AwAgHgAAiwQAIB8AAIsEACAwAACLBAAgMQAAiwQAIN0CCAAAAAHeAggAAAAE3wIIAAAABOACCAAAAAHhAggAAAAB4gIIAAAAAeMCCAAAAAHkAggAtAQAIQ0HAAD1AwAgHgAAiwQAIB8AAIsEACAwAACLBAAgMQAAiwQAIN0CCAAAAAHeAggAAAAE3wIIAAAABOACCAAAAAHhAggAAAAB4gIIAAAAAeMCCAAAAAHkAggAtAQAIRHJAgAAtQQAMMoCAACuAQAQywIAALUEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACHsAgEA8AMAIe8CAQDwAwAh8QIBAPADACHzAgEA8AMAIaQDAQDwAwAhqQMBAPADACG7AwEA8AMAIbwDAQDwAwAhvQMBAPIDACG-AwEA8gMAIb8DAQDyAwAhEskCAAC2BAAwygIAAJgBABDLAgAAtgQAMMwCAQDwAwAh2wJAAPMDACHcAkAA8wMAIewCAQDwAwAh7wIBAPADACHxAgEA8AMAIfMCAQDwAwAh9AIBAPADACGsAwEA8gMAIa0DAQDyAwAhwAMBAPIDACHBAyAA8QMAIcIDAQDyAwAhwwMCAIUEACHEAwIAhQQAIRNXAAC4BAAgyQIAALcEADDKAgAAhQEAEMsCAAC3BAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACH0AgEA_wMAIawDAQCBBAAhrQMBAIEEACHAAwEAgQQAIcEDIACABAAhwgMBAIEEACHDAwIAjgQAIcQDAgCOBAAhA64DAAB6ACCvAwAAegAgsAMAAHoAIBdVAAC7BAAgyQIAALkEADDKAgAAfgAQywIAALkEADDMAgEA_wMAIdgCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAQD_AwAhogMBAP8DACGjAwEA_wMAIaUDAgCNBAAhqQMBAP8DACGxAwEA_wMAIbIDAQCBBAAhswMCAI4EACG0AwIAjgQAIbUDAgCOBAAhtgMCAI0EACG3AwgAugQAIbgDQACkBAAhuQNAAKQEACG6A0AApAQAIQjdAggAAAAB3gIIAAAABN8CCAAAAATgAggAAAAB4QIIAAAAAeICCAAAAAHjAggAAAAB5AIIAIsEACEVVAAAvQQAIFYAAL4EACDJAgAAvAQAMMoCAAB6ABDLAgAAvAQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7wIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGpAwEA_wMAIbsDAQD_AwAhvAMBAP8DACG9AwEAgQQAIb4DAQCBBAAhvwMBAIEEACHlAwAAegAg5gMAAHoAIBNUAAC9BAAgVgAAvgQAIMkCAAC8BAAwygIAAHoAEMsCAAC8BAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACGkAwEA_wMAIakDAQD_AwAhuwMBAP8DACG8AwEA_wMAIb0DAQCBBAAhvgMBAIEEACG_AwEAgQQAIRVXAAC4BAAgyQIAALcEADDKAgAAhQEAEMsCAAC3BAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACH0AgEA_wMAIawDAQCBBAAhrQMBAIEEACHAAwEAgQQAIcEDIACABAAhwgMBAIEEACHDAwIAjgQAIcQDAgCOBAAh5QMAAIUBACDmAwAAhQEAIAOuAwAAfgAgrwMAAH4AILADAAB-ACAHyQIAAL8EADDKAgAAdQAQywIAAL8EADDMAgEA8AMAIdwCQADzAwAhhQMBAPADACHFAwEA8AMAISBUAQDyAwAhyQIAAMAEADDKAgAAXwAQywIAAMAEADDMAgEA8AMAIdsCQADzAwAh3AJAAPMDACHoAgEA8AMAIeoCAgCEBAAh6wICAIQEACHsAgEA8AMAIe0CCACGBAAh7gIIAIYEACHvAgEA8AMAIfECAADCBMwDIvwCAADBBMcDIoUDAQDwAwAhpAMBAPADACGpAwEA8AMAIccDAQDyAwAhyAMgAPEDACHJAyAA8QMAIcoDAQDyAwAhzAMgAPEDACHNAwEA8gMAIc4DIADxAwAhzwMCAIQEACHQAwEA8AMAIdEDAQDyAwAh0gNAAJoEACHTAwEA8AMAIdQDAQDyAwAhBwcAAPUDACAeAADGBAAgHwAAxgQAIN0CAAAAxwMC3gIAAADHAwjfAgAAAMcDCOQCAADFBMcDIgcHAAD1AwAgHgAAxAQAIB8AAMQEACDdAgAAAMwDAt4CAAAAzAMI3wIAAADMAwjkAgAAwwTMAyIHBwAA9QMAIB4AAMQEACAfAADEBAAg3QIAAADMAwLeAgAAAMwDCN8CAAAAzAMI5AIAAMMEzAMiBN0CAAAAzAMC3gIAAADMAwjfAgAAAMwDCOQCAADEBMwDIgcHAAD1AwAgHgAAxgQAIB8AAMYEACDdAgAAAMcDAt4CAAAAxwMI3wIAAADHAwjkAgAAxQTHAyIE3QIAAADHAwLeAgAAAMcDCN8CAAAAxwMI5AIAAMYExwMiEckCAADHBAAwygIAAEkAEMsCAADHBAAwzAIBAPADACHbAkAA8wMAIdwCQADzAwAh8QIAAMgE2gMi9wIBAPADACH4AgEA8AMAIYUDAQDwAwAhzQMBAPIDACHVAwEA8AMAIdYDAQDyAwAh1wMBAPADACHYAwIAhAQAIdoDQADzAwAh2wMBAPADACEHBwAA9QMAIB4AAMoEACAfAADKBAAg3QIAAADaAwLeAgAAANoDCN8CAAAA2gMI5AIAAMkE2gMiBwcAAPUDACAeAADKBAAgHwAAygQAIN0CAAAA2gMC3gIAAADaAwjfAgAAANoDCOQCAADJBNoDIgTdAgAAANoDAt4CAAAA2gMI3wIAAADaAwjkAgAAygTaAyITAQAAzQQAIAgAAM4EACDJAgAAywQAMMoCAAADABDLAgAAywQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAADMBNoDIvcCAQD_AwAh-AIBAP8DACGFAwEA_wMAIc0DAQCBBAAh1QMBAP8DACHWAwEAgQQAIdcDAQD_AwAh2AMCAI0EACHaA0AAggQAIdsDAQD_AwAhBN0CAAAA2gMC3gIAAADaAwjfAgAAANoDCOQCAADKBNoDIhYGAADWBAAgCAAAzgQAIAkAANUEACAKAADXBAAgCwAA2AQAIMkCAADTBAAwygIAAB4AEMsCAADTBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh8wIBAIEEACGGAwEA_wMAIZ0DAQCBBAAh3AMgAIAEACHeAwAA1ATeAyLfAwEAgQQAIeADIACABAAh4QMBAIEEACHiA0AApAQAIeUDAAAeACDmAwAAHgAgA64DAAAFACCvAwAABQAgsAMAAAUAIA_JAgAAzwQAMMoCAAAxABDLAgAAzwQAMMwCAQDwAwAh2wJAAPMDACHcAkAA8wMAIfMCAQDyAwAhhgMBAPADACGdAwEA8gMAIdwDIADxAwAh3gMAANAE3gMi3wMBAPIDACHgAyAA8QMAIeEDAQDyAwAh4gNAAJoEACEHBwAA9QMAIB4AANIEACAfAADSBAAg3QIAAADeAwLeAgAAAN4DCN8CAAAA3gMI5AIAANEE3gMiBwcAAPUDACAeAADSBAAgHwAA0gQAIN0CAAAA3gMC3gIAAADeAwjfAgAAAN4DCOQCAADRBN4DIgTdAgAAAN4DAt4CAAAA3gMI3wIAAADeAwjkAgAA0gTeAyIUBgAA1gQAIAgAAM4EACAJAADVBAAgCgAA1wQAIAsAANgEACDJAgAA0wQAMMoCAAAeABDLAgAA0wQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIfMCAQCBBAAhhgMBAP8DACGdAwEAgQQAIdwDIACABAAh3gMAANQE3gMi3wMBAIEEACHgAyAAgAQAIeEDAQCBBAAh4gNAAKQEACEE3QIAAADeAwLeAgAAAN4DCN8CAAAA3gMI5AIAANIE3gMiFQEAAM0EACAIAADOBAAgyQIAAMsEADDKAgAAAwAQywIAAMsEADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACHxAgAAzATaAyL3AgEA_wMAIfgCAQD_AwAhhQMBAP8DACHNAwEAgQQAIdUDAQD_AwAh1gMBAIEEACHXAwEA_wMAIdgDAgCNBAAh2gNAAIIEACHbAwEA_wMAIeUDAAADACDmAwAAAwAgA64DAAAJACCvAwAACQAgsAMAAAkAIAOuAwAAEQAgrwMAABEAILADAAARACADrgMAABUAIK8DAAAVACCwAwAAFQAgApUDAQAAAAGWAwEAAAABEQEAAM0EACDJAgAA2gQAMMoCAAAVABDLAgAA2gQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIYUDAQD_AwAhlQMBAP8DACGWAwEA_wMAIZcDAQCBBAAhmAMBAIEEACGZA0AApAQAIZoDQACkBAAhmwMBAIEEACGcAwEAgQQAIZ0DAQCBBAAhDQEAAM0EACDJAgAA2wQAMMoCAAARABDLAgAA2wQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIYUDAQD_AwAhkgNAAIIEACGTAwEA_wMAIZ4DAQCBBAAhnwMBAIEEACGgAwEAgQQAIQKFAwEAAAABxQMBAAAAAQkBAADNBAAgBQAA3gQAIMkCAADdBAAwygIAAAkAEMsCAADdBAAwzAIBAP8DACHcAkAAggQAIYUDAQD_AwAhxQMBAP8DACElAQAAzQQAIAQAAOIEACAGAADWBAAgVAEAgQQAIckCAADfBAAwygIAAAUAEMsCAADfBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh6AIBAP8DACHqAgIAjQQAIesCAgCNBAAh7AIBAP8DACHtAggAjwQAIe4CCACPBAAh7wIBAP8DACHxAgAA4QTMAyL8AgAA4ATHAyKFAwEA_wMAIaQDAQD_AwAhqQMBAP8DACHHAwEAgQQAIcgDIACABAAhyQMgAIAEACHKAwEAgQQAIcwDIACABAAhzQMBAIEEACHOAyAAgAQAIc8DAgCNBAAh0AMBAP8DACHRAwEAgQQAIdIDQACkBAAh0wMBAP8DACHUAwEAgQQAIeUDAAAFACDmAwAABQAgIwEAAM0EACAEAADiBAAgBgAA1gQAIFQBAIEEACHJAgAA3wQAMMoCAAAFABDLAgAA3wQAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIegCAQD_AwAh6gICAI0EACHrAgIAjQQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8QIAAOEEzAMi_AIAAOAExwMihQMBAP8DACGkAwEA_wMAIakDAQD_AwAhxwMBAIEEACHIAyAAgAQAIckDIACABAAhygMBAIEEACHMAyAAgAQAIc0DAQCBBAAhzgMgAIAEACHPAwIAjQQAIdADAQD_AwAh0QMBAIEEACHSA0AApAQAIdMDAQD_AwAh1AMBAIEEACEE3QIAAADHAwLeAgAAAMcDCN8CAAAAxwMI5AIAAMYExwMiBN0CAAAAzAMC3gIAAADMAwjfAgAAAMwDCOQCAADEBMwDIhUBAADNBAAgCAAAzgQAIMkCAADLBAAwygIAAAMAEMsCAADLBAAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh8QIAAMwE2gMi9wIBAP8DACH4AgEA_wMAIYUDAQD_AwAhzQMBAIEEACHVAwEA_wMAIdYDAQCBBAAh1wMBAP8DACHYAwIAjQQAIdoDQACCBAAh2wMBAP8DACHlAwAAAwAg5gMAAAMAIAAAAAAB6gMBAAAAAQHqAyAAAAABAeoDAQAAAAEB6gNAAAAAAQAAAAAABeoDAgAAAAHwAwIAAAAB8QMCAAAAAfIDAgAAAAHzAwIAAAABBeoDAgAAAAHwAwIAAAAB8QMCAAAAAfIDAgAAAAHzAwIAAAABBeoDCAAAAAHwAwgAAAAB8QMIAAAAAfIDCAAAAAHzAwgAAAABAAAAAAAAAAAAAAAAAAAAAAHqAwAAAIgDAgHqAwAAAI0DAgHqA0AAAAABAAAAAAAAAAAABRgAAJQHACAZAACXBwAg5wMAAJUHACDoAwAAlgcAIO0DAAABACADGAAAlAcAIOcDAACVBwAg7QMAAAEAIAAAAAUYAACPBwAgGQAAkgcAIOcDAACQBwAg6AMAAJEHACDtAwAAAQAgAxgAAI8HACDnAwAAkAcAIO0DAAABACAAAAAAAAUYAACKBwAgGQAAjQcAIOcDAACLBwAg6AMAAIwHACDtAwAAxwEAIAMYAACKBwAg5wMAAIsHACDtAwAAxwEAIAAAAAAACxgAAKMFADAZAACoBQAw5wMAAKQFADDoAwAApQUAMOkDAACmBQAg6gMAAKcFADDrAwAApwUAMOwDAACnBQAw7QMAAKcFADDuAwAAqQUAMO8DAACqBQAwDswCAQAAAAHYAgEAAAAB2wJAAAAAAdwCQAAAAAHqAgIAAAAB6wICAAAAAe8CAQAAAAHxAgEAAAABogMBAAAAAaMDAQAAAAGkAwEAAAABpQMCAAAAAaYDCAAAAAGnA0AAAAABAgAAAMsBACAYAACuBQAgAwAAAMsBACAYAACuBQAgGQAArQUAIAERAACJBwAwE4gBAACxBAAgyQIAALAEADDKAgAAyQEAEMsCAACwBAAwzAIBAAAAAdgCAQD_AwAh2wJAAIIEACHcAkAAggQAIeoCAgCNBAAh6wICAI4EACHvAgEA_wMAIfECAQD_AwAhoQMBAP8DACGiAwEA_wMAIaMDAQD_AwAhpAMBAP8DACGlAwIAjQQAIaYDCACPBAAhpwNAAKQEACECAAAAywEAIBEAAK0FACACAAAAqwUAIBEAAKwFACASyQIAAKoFADDKAgAAqwUAEMsCAACqBQAwzAIBAP8DACHYAgEA_wMAIdsCQACCBAAh3AJAAIIEACHqAgIAjQQAIesCAgCOBAAh7wIBAP8DACHxAgEA_wMAIaEDAQD_AwAhogMBAP8DACGjAwEA_wMAIaQDAQD_AwAhpQMCAI0EACGmAwgAjwQAIacDQACkBAAhEskCAACqBQAwygIAAKsFABDLAgAAqgUAMMwCAQD_AwAh2AIBAP8DACHbAkAAggQAIdwCQACCBAAh6gICAI0EACHrAgIAjgQAIe8CAQD_AwAh8QIBAP8DACGhAwEA_wMAIaIDAQD_AwAhowMBAP8DACGkAwEA_wMAIaUDAgCNBAAhpgMIAI8EACGnA0AApAQAIQ7MAgEA5wQAIdgCAQDnBAAh2wJAAOoEACHcAkAA6gQAIeoCAgDwBAAh6wICAPEEACHvAgEA5wQAIfECAQDnBAAhogMBAOcEACGjAwEA5wQAIaQDAQDnBAAhpQMCAPAEACGmAwgA8gQAIacDQACFBQAhDswCAQDnBAAh2AIBAOcEACHbAkAA6gQAIdwCQADqBAAh6gICAPAEACHrAgIA8QQAIe8CAQDnBAAh8QIBAOcEACGiAwEA5wQAIaMDAQDnBAAhpAMBAOcEACGlAwIA8AQAIaYDCADyBAAhpwNAAIUFACEOzAIBAAAAAdgCAQAAAAHbAkAAAAAB3AJAAAAAAeoCAgAAAAHrAgIAAAAB7wIBAAAAAfECAQAAAAGiAwEAAAABowMBAAAAAaQDAQAAAAGlAwIAAAABpgMIAAAAAacDQAAAAAEEGAAAowUAMOcDAACkBQAw6QMAAKYFACDtAwAApwUAMAAGVgAAsAUAIO0CAADjBAAg7gIAAOMEACCrAwAA4wQAIKwDAADjBAAgrQMAAOMEACAAAAAAAAXqAwgAAAAB8AMIAAAAAfEDCAAAAAHyAwgAAAAB8wMIAAAAAQUYAACEBwAgGQAAhwcAIOcDAACFBwAg6AMAAIYHACDtAwAAfAAgAxgAAIQHACDnAwAAhQcAIO0DAAB8ACAAAAAFGAAA_gYAIBkAAIIHACDnAwAA_wYAIOgDAACBBwAg7QMAAHgAIAsYAAC_BQAwGQAAxAUAMOcDAADABQAw6AMAAMEFADDpAwAAwgUAIOoDAADDBQAw6wMAAMMFADDsAwAAwwUAMO0DAADDBQAw7gMAAMUFADDvAwAAxgUAMBLMAgEAAAAB2AIBAAAAAdsCQAAAAAHcAkAAAAAB8QIBAAAAAaIDAQAAAAGjAwEAAAABpQMCAAAAAakDAQAAAAGyAwEAAAABswMCAAAAAbQDAgAAAAG1AwIAAAABtgMCAAAAAbcDCAAAAAG4A0AAAAABuQNAAAAAAboDQAAAAAECAAAAgAEAIBgAAMoFACADAAAAgAEAIBgAAMoFACAZAADJBQAgAREAAIAHADAXVQAAuwQAIMkCAAC5BAAwygIAAH4AEMsCAAC5BAAwzAIBAAAAAdgCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAQD_AwAhogMBAP8DACGjAwEA_wMAIaUDAgCNBAAhqQMBAP8DACGxAwEA_wMAIbIDAQCBBAAhswMCAI4EACG0AwIAjgQAIbUDAgCOBAAhtgMCAI0EACG3AwgAugQAIbgDQACkBAAhuQNAAKQEACG6A0AApAQAIQIAAACAAQAgEQAAyQUAIAIAAADHBQAgEQAAyAUAIBbJAgAAxgUAMMoCAADHBQAQywIAAMYFADDMAgEA_wMAIdgCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAQD_AwAhogMBAP8DACGjAwEA_wMAIaUDAgCNBAAhqQMBAP8DACGxAwEA_wMAIbIDAQCBBAAhswMCAI4EACG0AwIAjgQAIbUDAgCOBAAhtgMCAI0EACG3AwgAugQAIbgDQACkBAAhuQNAAKQEACG6A0AApAQAIRbJAgAAxgUAMMoCAADHBQAQywIAAMYFADDMAgEA_wMAIdgCAQD_AwAh2wJAAIIEACHcAkAAggQAIfECAQD_AwAhogMBAP8DACGjAwEA_wMAIaUDAgCNBAAhqQMBAP8DACGxAwEA_wMAIbIDAQCBBAAhswMCAI4EACG0AwIAjgQAIbUDAgCOBAAhtgMCAI0EACG3AwgAugQAIbgDQACkBAAhuQNAAKQEACG6A0AApAQAIRLMAgEA5wQAIdgCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfECAQDnBAAhogMBAOcEACGjAwEA5wQAIaUDAgDwBAAhqQMBAOcEACGyAwEA6QQAIbMDAgDxBAAhtAMCAPEEACG1AwIA8QQAIbYDAgDwBAAhtwMIALcFACG4A0AAhQUAIbkDQACFBQAhugNAAIUFACESzAIBAOcEACHYAgEA5wQAIdsCQADqBAAh3AJAAOoEACHxAgEA5wQAIaIDAQDnBAAhowMBAOcEACGlAwIA8AQAIakDAQDnBAAhsgMBAOkEACGzAwIA8QQAIbQDAgDxBAAhtQMCAPEEACG2AwIA8AQAIbcDCAC3BQAhuANAAIUFACG5A0AAhQUAIboDQACFBQAhEswCAQAAAAHYAgEAAAAB2wJAAAAAAdwCQAAAAAHxAgEAAAABogMBAAAAAaMDAQAAAAGlAwIAAAABqQMBAAAAAbIDAQAAAAGzAwIAAAABtAMCAAAAAbUDAgAAAAG2AwIAAAABtwMIAAAAAbgDQAAAAAG5A0AAAAABugNAAAAAAQMYAAD-BgAg5wMAAP8GACDtAwAAeAAgBBgAAL8FADDnAwAAwAUAMOkDAADCBQAg7QMAAMMFADAAAAAAAAsYAADTBQAwGQAA2AUAMOcDAADUBQAw6AMAANUFADDpAwAA1gUAIOoDAADXBQAw6wMAANcFADDsAwAA1wUAMO0DAADXBQAw7gMAANkFADDvAwAA2gUAMA5WAADMBQAgzAIBAAAAAdsCQAAAAAHcAkAAAAAB7AIBAAAAAe8CAQAAAAHxAgEAAAAB8wIBAAAAAaQDAQAAAAGpAwEAAAABvAMBAAAAAb0DAQAAAAG-AwEAAAABvwMBAAAAAQIAAAB8ACAYAADeBQAgAwAAAHwAIBgAAN4FACAZAADdBQAgAREAAP0GADATVAAAvQQAIFYAAL4EACDJAgAAvAQAMMoCAAB6ABDLAgAAvAQAMMwCAQAAAAHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACGkAwEA_wMAIakDAQD_AwAhuwMBAP8DACG8AwEA_wMAIb0DAQCBBAAhvgMBAIEEACG_AwEAgQQAIQIAAAB8ACARAADdBQAgAgAAANsFACARAADcBQAgEckCAADaBQAwygIAANsFABDLAgAA2gUAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIewCAQD_AwAh7wIBAP8DACHxAgEA_wMAIfMCAQD_AwAhpAMBAP8DACGpAwEA_wMAIbsDAQD_AwAhvAMBAP8DACG9AwEAgQQAIb4DAQCBBAAhvwMBAIEEACERyQIAANoFADDKAgAA2wUAEMsCAADaBQAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAh7AIBAP8DACHvAgEA_wMAIfECAQD_AwAh8wIBAP8DACGkAwEA_wMAIakDAQD_AwAhuwMBAP8DACG8AwEA_wMAIb0DAQCBBAAhvgMBAIEEACG_AwEAgQQAIQ3MAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe8CAQDnBAAh8QIBAOcEACHzAgEA5wQAIaQDAQDnBAAhqQMBAOcEACG8AwEA5wQAIb0DAQDpBAAhvgMBAOkEACG_AwEA6QQAIQ5WAAC-BQAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh7AIBAOcEACHvAgEA5wQAIfECAQDnBAAh8wIBAOcEACGkAwEA5wQAIakDAQDnBAAhvAMBAOcEACG9AwEA6QQAIb4DAQDpBAAhvwMBAOkEACEOVgAAzAUAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAewCAQAAAAHvAgEAAAAB8QIBAAAAAfMCAQAAAAGkAwEAAAABqQMBAAAAAbwDAQAAAAG9AwEAAAABvgMBAAAAAb8DAQAAAAEEGAAA0wUAMOcDAADUBQAw6QMAANYFACDtAwAA1wUAMAAFVAAA4gUAIFYAAOMFACC9AwAA4wQAIL4DAADjBAAgvwMAAOMEACAHVwAA4AUAIKwDAADjBAAgrQMAAOMEACDAAwAA4wQAIMIDAADjBAAgwwMAAOMEACDEAwAA4wQAIAAAAAAFGAAA9QYAIBkAAPsGACDnAwAA9gYAIOgDAAD6BgAg7QMAAAEAIAUYAADzBgAgGQAA-AYAIOcDAAD0BgAg6AMAAPcGACDtAwAABwAgAxgAAPUGACDnAwAA9gYAIO0DAAABACADGAAA8wYAIOcDAAD0BgAg7QMAAAcAIAAAAAAAAeoDAAAAxwMCAeoDAAAAzAMCBRgAAOoGACAZAADxBgAg5wMAAOsGACDoAwAA8AYAIO0DAAA0ACAFGAAA6AYAIBkAAO4GACDnAwAA6QYAIOgDAADtBgAg7QMAAAEAIAsYAAD1BQAwGQAA-gUAMOcDAAD2BQAw6AMAAPcFADDpAwAA-AUAIOoDAAD5BQAw6wMAAPkFADDsAwAA-QUAMO0DAAD5BQAw7gMAAPsFADDvAwAA_AUAMAQBAADpBQAgzAIBAAAAAdwCQAAAAAGFAwEAAAABAgAAAAsAIBgAAIAGACADAAAACwAgGAAAgAYAIBkAAP8FACABEQAA7AYAMAoBAADNBAAgBQAA3gQAIMkCAADdBAAwygIAAAkAEMsCAADdBAAwzAIBAAAAAdwCQACCBAAhhQMBAP8DACHFAwEA_wMAIeQDAADcBAAgAgAAAAsAIBEAAP8FACACAAAA_QUAIBEAAP4FACAHyQIAAPwFADDKAgAA_QUAEMsCAAD8BQAwzAIBAP8DACHcAkAAggQAIYUDAQD_AwAhxQMBAP8DACEHyQIAAPwFADDKAgAA_QUAEMsCAAD8BQAwzAIBAP8DACHcAkAAggQAIYUDAQD_AwAhxQMBAP8DACEDzAIBAOcEACHcAkAA6gQAIYUDAQDnBAAhBAEAAOcFACDMAgEA5wQAIdwCQADqBAAhhQMBAOcEACEEAQAA6QUAIMwCAQAAAAHcAkAAAAABhQMBAAAAAQMYAADqBgAg5wMAAOsGACDtAwAANAAgAxgAAOgGACDnAwAA6QYAIO0DAAABACAEGAAA9QUAMOcDAAD2BQAw6QMAAPgFACDtAwAA-QUAMAAAAAAAAeoDAAAA2gMCBRgAAOIGACAZAADmBgAg5wMAAOMGACDoAwAA5QYAIO0DAAABACALGAAAjAYAMBkAAJEGADDnAwAAjQYAMOgDAACOBgAw6QMAAI8GACDqAwAAkAYAMOsDAACQBgAw7AMAAJAGADDtAwAAkAYAMO4DAACSBgAw7wMAAJMGADAeAQAAggYAIAYAAIMGACBUAQAAAAHMAgEAAAAB2wJAAAAAAdwCQAAAAAHoAgEAAAAB6gICAAAAAesCAgAAAAHsAgEAAAAB7QIIAAAAAe4CCAAAAAHvAgEAAAAB8QIAAADMAwL8AgAAAMcDAoUDAQAAAAGkAwEAAAABqQMBAAAAAccDAQAAAAHIAyAAAAAByQMgAAAAAcoDAQAAAAHMAyAAAAABzQMBAAAAAc4DIAAAAAHPAwIAAAAB0AMBAAAAAdEDAQAAAAHSA0AAAAAB1AMBAAAAAQIAAAAHACAYAACXBgAgAwAAAAcAIBgAAJcGACAZAACWBgAgAREAAOQGADAjAQAAzQQAIAQAAOIEACAGAADWBAAgVAEAgQQAIckCAADfBAAwygIAAAUAEMsCAADfBAAwzAIBAAAAAdsCQACCBAAh3AJAAIIEACHoAgEA_wMAIeoCAgCNBAAh6wICAI0EACHsAgEA_wMAIe0CCACPBAAh7gIIAI8EACHvAgEA_wMAIfECAADhBMwDIvwCAADgBMcDIoUDAQD_AwAhpAMBAP8DACGpAwEA_wMAIccDAQCBBAAhyAMgAIAEACHJAyAAgAQAIcoDAQCBBAAhzAMgAIAEACHNAwEAgQQAIc4DIACABAAhzwMCAI0EACHQAwEA_wMAIdEDAQCBBAAh0gNAAKQEACHTAwEA_wMAIdQDAQCBBAAhAgAAAAcAIBEAAJYGACACAAAAlAYAIBEAAJUGACAgVAEAgQQAIckCAACTBgAwygIAAJQGABDLAgAAkwYAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIegCAQD_AwAh6gICAI0EACHrAgIAjQQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8QIAAOEEzAMi_AIAAOAExwMihQMBAP8DACGkAwEA_wMAIakDAQD_AwAhxwMBAIEEACHIAyAAgAQAIckDIACABAAhygMBAIEEACHMAyAAgAQAIc0DAQCBBAAhzgMgAIAEACHPAwIAjQQAIdADAQD_AwAh0QMBAIEEACHSA0AApAQAIdMDAQD_AwAh1AMBAIEEACEgVAEAgQQAIckCAACTBgAwygIAAJQGABDLAgAAkwYAMMwCAQD_AwAh2wJAAIIEACHcAkAAggQAIegCAQD_AwAh6gICAI0EACHrAgIAjQQAIewCAQD_AwAh7QIIAI8EACHuAggAjwQAIe8CAQD_AwAh8QIAAOEEzAMi_AIAAOAExwMihQMBAP8DACGkAwEA_wMAIakDAQD_AwAhxwMBAIEEACHIAyAAgAQAIckDIACABAAhygMBAIEEACHMAyAAgAQAIc0DAQCBBAAhzgMgAIAEACHPAwIAjQQAIdADAQD_AwAh0QMBAIEEACHSA0AApAQAIdMDAQD_AwAh1AMBAIEEACEcVAEA6QQAIcwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIegCAQDnBAAh6gICAPAEACHrAgIA8AQAIewCAQDnBAAh7QIIAPIEACHuAggA8gQAIe8CAQDnBAAh8QIAAPEFzAMi_AIAAPAFxwMihQMBAOcEACGkAwEA5wQAIakDAQDnBAAhxwMBAOkEACHIAyAA6AQAIckDIADoBAAhygMBAOkEACHMAyAA6AQAIc0DAQDpBAAhzgMgAOgEACHPAwIA8AQAIdADAQDnBAAh0QMBAOkEACHSA0AAhQUAIdQDAQDpBAAhHgEAAPMFACAGAAD0BQAgVAEA6QQAIcwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIegCAQDnBAAh6gICAPAEACHrAgIA8AQAIewCAQDnBAAh7QIIAPIEACHuAggA8gQAIe8CAQDnBAAh8QIAAPEFzAMi_AIAAPAFxwMihQMBAOcEACGkAwEA5wQAIakDAQDnBAAhxwMBAOkEACHIAyAA6AQAIckDIADoBAAhygMBAOkEACHMAyAA6AQAIc0DAQDpBAAhzgMgAOgEACHPAwIA8AQAIdADAQDnBAAh0QMBAOkEACHSA0AAhQUAIdQDAQDpBAAhHgEAAIIGACAGAACDBgAgVAEAAAABzAIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAeoCAgAAAAHrAgIAAAAB7AIBAAAAAe0CCAAAAAHuAggAAAAB7wIBAAAAAfECAAAAzAMC_AIAAADHAwKFAwEAAAABpAMBAAAAAakDAQAAAAHHAwEAAAAByAMgAAAAAckDIAAAAAHKAwEAAAABzAMgAAAAAc0DAQAAAAHOAyAAAAABzwMCAAAAAdADAQAAAAHRAwEAAAAB0gNAAAAAAdQDAQAAAAEDGAAA4gYAIOcDAADjBgAg7QMAAAEAIAQYAACMBgAw5wMAAI0GADDpAwAAjwYAIO0DAACQBgAwCgYAANoGACAIAACbBgAgCQAA2QYAIAoAANsGACALAADcBgAg8wIAAOMEACCdAwAA4wQAIN8DAADjBAAg4QMAAOMEACDiAwAA4wQAIAAAAAAB6gMAAADeAwIHGAAAzwYAIBkAANIGACDnAwAA0AYAIOgDAADRBgAg6wMAAAMAIOwDAAADACDtAwAANAAgCxgAAMYGADAZAADKBgAw5wMAAMcGADDoAwAAyAYAMOkDAADJBgAg6gMAAJAGADDrAwAAkAYAMOwDAACQBgAw7QMAAJAGADDuAwAAywYAMO8DAACTBgAwCxgAAL0GADAZAADBBgAw5wMAAL4GADDoAwAAvwYAMOkDAADABgAg6gMAAPkFADDrAwAA-QUAMOwDAAD5BQAw7QMAAPkFADDuAwAAwgYAMO8DAAD8BQAwCxgAALEGADAZAAC2BgAw5wMAALIGADDoAwAAswYAMOkDAAC0BgAg6gMAALUGADDrAwAAtQYAMOwDAAC1BgAw7QMAALUGADDuAwAAtwYAMO8DAAC4BgAwCxgAAKUGADAZAACqBgAw5wMAAKYGADDoAwAApwYAMOkDAACoBgAg6gMAAKkGADDrAwAAqQYAMOwDAACpBgAw7QMAAKkGADDuAwAAqwYAMO8DAACsBgAwDMwCAQAAAAHbAkAAAAAB3AJAAAAAAZUDAQAAAAGWAwEAAAABlwMBAAAAAZgDAQAAAAGZA0AAAAABmgNAAAAAAZsDAQAAAAGcAwEAAAABnQMBAAAAAQIAAAAXACAYAACwBgAgAwAAABcAIBgAALAGACAZAACvBgAgAREAAOEGADASAQAAzQQAIMkCAADaBAAwygIAABUAEMsCAADaBAAwzAIBAAAAAdsCQACCBAAh3AJAAIIEACGFAwEA_wMAIZUDAQD_AwAhlgMBAP8DACGXAwEAgQQAIZgDAQCBBAAhmQNAAKQEACGaA0AApAQAIZsDAQCBBAAhnAMBAIEEACGdAwEAgQQAIeMDAADZBAAgAgAAABcAIBEAAK8GACACAAAArQYAIBEAAK4GACAQyQIAAKwGADDKAgAArQYAEMsCAACsBgAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAhhQMBAP8DACGVAwEA_wMAIZYDAQD_AwAhlwMBAIEEACGYAwEAgQQAIZkDQACkBAAhmgNAAKQEACGbAwEAgQQAIZwDAQCBBAAhnQMBAIEEACEQyQIAAKwGADDKAgAArQYAEMsCAACsBgAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAhhQMBAP8DACGVAwEA_wMAIZYDAQD_AwAhlwMBAIEEACGYAwEAgQQAIZkDQACkBAAhmgNAAKQEACGbAwEAgQQAIZwDAQCBBAAhnQMBAIEEACEMzAIBAOcEACHbAkAA6gQAIdwCQADqBAAhlQMBAOcEACGWAwEA5wQAIZcDAQDpBAAhmAMBAOkEACGZA0AAhQUAIZoDQACFBQAhmwMBAOkEACGcAwEA6QQAIZ0DAQDpBAAhDMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIZUDAQDnBAAhlgMBAOcEACGXAwEA6QQAIZgDAQDpBAAhmQNAAIUFACGaA0AAhQUAIZsDAQDpBAAhnAMBAOkEACGdAwEA6QQAIQzMAgEAAAAB2wJAAAAAAdwCQAAAAAGVAwEAAAABlgMBAAAAAZcDAQAAAAGYAwEAAAABmQNAAAAAAZoDQAAAAAGbAwEAAAABnAMBAAAAAZ0DAQAAAAEIzAIBAAAAAdsCQAAAAAHcAkAAAAABkgNAAAAAAZMDAQAAAAGeAwEAAAABnwMBAAAAAaADAQAAAAECAAAAEwAgGAAAvAYAIAMAAAATACAYAAC8BgAgGQAAuwYAIAERAADgBgAwDQEAAM0EACDJAgAA2wQAMMoCAAARABDLAgAA2wQAMMwCAQAAAAHbAkAAggQAIdwCQACCBAAhhQMBAP8DACGSA0AAggQAIZMDAQAAAAGeAwEAgQQAIZ8DAQCBBAAhoAMBAIEEACECAAAAEwAgEQAAuwYAIAIAAAC5BgAgEQAAugYAIAzJAgAAuAYAMMoCAAC5BgAQywIAALgGADDMAgEA_wMAIdsCQACCBAAh3AJAAIIEACGFAwEA_wMAIZIDQACCBAAhkwMBAP8DACGeAwEAgQQAIZ8DAQCBBAAhoAMBAIEEACEMyQIAALgGADDKAgAAuQYAEMsCAAC4BgAwzAIBAP8DACHbAkAAggQAIdwCQACCBAAhhQMBAP8DACGSA0AAggQAIZMDAQD_AwAhngMBAIEEACGfAwEAgQQAIaADAQCBBAAhCMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIZIDQADqBAAhkwMBAOcEACGeAwEA6QQAIZ8DAQDpBAAhoAMBAOkEACEIzAIBAOcEACHbAkAA6gQAIdwCQADqBAAhkgNAAOoEACGTAwEA5wQAIZ4DAQDpBAAhnwMBAOkEACGgAwEA6QQAIQjMAgEAAAAB2wJAAAAAAdwCQAAAAAGSA0AAAAABkwMBAAAAAZ4DAQAAAAGfAwEAAAABoAMBAAAAAQQFAADqBQAgzAIBAAAAAdwCQAAAAAHFAwEAAAABAgAAAAsAIBgAAMUGACADAAAACwAgGAAAxQYAIBkAAMQGACABEQAA3wYAMAIAAAALACARAADEBgAgAgAAAP0FACARAADDBgAgA8wCAQDnBAAh3AJAAOoEACHFAwEA5wQAIQQFAADoBQAgzAIBAOcEACHcAkAA6gQAIcUDAQDnBAAhBAUAAOoFACDMAgEAAAAB3AJAAAAAAcUDAQAAAAEeBAAAgQYAIAYAAIMGACBUAQAAAAHMAgEAAAAB2wJAAAAAAdwCQAAAAAHoAgEAAAAB6gICAAAAAesCAgAAAAHsAgEAAAAB7QIIAAAAAe4CCAAAAAHvAgEAAAAB8QIAAADMAwL8AgAAAMcDAqQDAQAAAAGpAwEAAAABxwMBAAAAAcgDIAAAAAHJAyAAAAABygMBAAAAAcwDIAAAAAHNAwEAAAABzgMgAAAAAc8DAgAAAAHQAwEAAAAB0QMBAAAAAdIDQAAAAAHTAwEAAAAB1AMBAAAAAQIAAAAHACAYAADOBgAgAwAAAAcAIBgAAM4GACAZAADNBgAgAREAAN4GADACAAAABwAgEQAAzQYAIAIAAACUBgAgEQAAzAYAIBxUAQDpBAAhzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh6AIBAOcEACHqAgIA8AQAIesCAgDwBAAh7AIBAOcEACHtAggA8gQAIe4CCADyBAAh7wIBAOcEACHxAgAA8QXMAyL8AgAA8AXHAyKkAwEA5wQAIakDAQDnBAAhxwMBAOkEACHIAyAA6AQAIckDIADoBAAhygMBAOkEACHMAyAA6AQAIc0DAQDpBAAhzgMgAOgEACHPAwIA8AQAIdADAQDnBAAh0QMBAOkEACHSA0AAhQUAIdMDAQDnBAAh1AMBAOkEACEeBAAA8gUAIAYAAPQFACBUAQDpBAAhzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh6AIBAOcEACHqAgIA8AQAIesCAgDwBAAh7AIBAOcEACHtAggA8gQAIe4CCADyBAAh7wIBAOcEACHxAgAA8QXMAyL8AgAA8AXHAyKkAwEA5wQAIakDAQDnBAAhxwMBAOkEACHIAyAA6AQAIckDIADoBAAhygMBAOkEACHMAyAA6AQAIc0DAQDpBAAhzgMgAOgEACHPAwIA8AQAIdADAQDnBAAh0QMBAOkEACHSA0AAhQUAIdMDAQDnBAAh1AMBAOkEACEeBAAAgQYAIAYAAIMGACBUAQAAAAHMAgEAAAAB2wJAAAAAAdwCQAAAAAHoAgEAAAAB6gICAAAAAesCAgAAAAHsAgEAAAAB7QIIAAAAAe4CCAAAAAHvAgEAAAAB8QIAAADMAwL8AgAAAMcDAqQDAQAAAAGpAwEAAAABxwMBAAAAAcgDIAAAAAHJAyAAAAABygMBAAAAAcwDIAAAAAHNAwEAAAABzgMgAAAAAc8DAgAAAAHQAwEAAAAB0QMBAAAAAdIDQAAAAAHTAwEAAAAB1AMBAAAAAQ4IAACZBgAgzAIBAAAAAdsCQAAAAAHcAkAAAAAB8QIAAADaAwL3AgEAAAAB-AIBAAAAAc0DAQAAAAHVAwEAAAAB1gMBAAAAAdcDAQAAAAHYAwIAAAAB2gNAAAAAAdsDAQAAAAECAAAANAAgGAAAzwYAIAMAAAADACAYAADPBgAgGQAA0wYAIBAAAAADACAIAACLBgAgEQAA0wYAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfECAACJBtoDIvcCAQDnBAAh-AIBAOcEACHNAwEA6QQAIdUDAQDnBAAh1gMBAOkEACHXAwEA5wQAIdgDAgDwBAAh2gNAAOoEACHbAwEA5wQAIQ4IAACLBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8QIAAIkG2gMi9wIBAOcEACH4AgEA5wQAIc0DAQDpBAAh1QMBAOcEACHWAwEA6QQAIdcDAQDnBAAh2AMCAPAEACHaA0AA6gQAIdsDAQDnBAAhAxgAAM8GACDnAwAA0AYAIO0DAAA0ACAEGAAAxgYAMOcDAADHBgAw6QMAAMkGACDtAwAAkAYAMAQYAAC9BgAw5wMAAL4GADDpAwAAwAYAIO0DAAD5BQAwBBgAALEGADDnAwAAsgYAMOkDAAC0BgAg7QMAALUGADAEGAAApQYAMOcDAACmBgAw6QMAAKgGACDtAwAAqQYAMAQBAACaBgAgCAAAmwYAIM0DAADjBAAg1gMAAOMEACAAAAAMAQAAmgYAIAQAANkGACAGAADaBgAgVAAA4wQAIO0CAADjBAAg7gIAAOMEACDHAwAA4wQAIMoDAADjBAAgzQMAAOMEACDRAwAA4wQAINIDAADjBAAg1AMAAOMEACAcVAEAAAABzAIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAeoCAgAAAAHrAgIAAAAB7AIBAAAAAe0CCAAAAAHuAggAAAAB7wIBAAAAAfECAAAAzAMC_AIAAADHAwKkAwEAAAABqQMBAAAAAccDAQAAAAHIAyAAAAAByQMgAAAAAcoDAQAAAAHMAyAAAAABzQMBAAAAAc4DIAAAAAHPAwIAAAAB0AMBAAAAAdEDAQAAAAHSA0AAAAAB0wMBAAAAAdQDAQAAAAEDzAIBAAAAAdwCQAAAAAHFAwEAAAABCMwCAQAAAAHbAkAAAAAB3AJAAAAAAZIDQAAAAAGTAwEAAAABngMBAAAAAZ8DAQAAAAGgAwEAAAABDMwCAQAAAAHbAkAAAAAB3AJAAAAAAZUDAQAAAAGWAwEAAAABlwMBAAAAAZgDAQAAAAGZA0AAAAABmgNAAAAAAZsDAQAAAAGcAwEAAAABnQMBAAAAARAGAADWBgAgCAAA1QYAIAoAANcGACALAADYBgAgzAIBAAAAAdsCQAAAAAHcAkAAAAAB8wIBAAAAAYYDAQAAAAGdAwEAAAAB3AMgAAAAAd4DAAAA3gMC3wMBAAAAAeADIAAAAAHhAwEAAAAB4gNAAAAAAQIAAAABACAYAADiBgAgHFQBAAAAAcwCAQAAAAHbAkAAAAAB3AJAAAAAAegCAQAAAAHqAgIAAAAB6wICAAAAAewCAQAAAAHtAggAAAAB7gIIAAAAAe8CAQAAAAHxAgAAAMwDAvwCAAAAxwMChQMBAAAAAaQDAQAAAAGpAwEAAAABxwMBAAAAAcgDIAAAAAHJAyAAAAABygMBAAAAAcwDIAAAAAHNAwEAAAABzgMgAAAAAc8DAgAAAAHQAwEAAAAB0QMBAAAAAdIDQAAAAAHUAwEAAAABAwAAAB4AIBgAAOIGACAZAADnBgAgEgAAAB4AIAYAAKIGACAIAAChBgAgCgAAowYAIAsAAKQGACARAADnBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8wIBAOkEACGGAwEA5wQAIZ0DAQDpBAAh3AMgAOgEACHeAwAAnwbeAyLfAwEA6QQAIeADIADoBAAh4QMBAOkEACHiA0AAhQUAIRAGAACiBgAgCAAAoQYAIAoAAKMGACALAACkBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8wIBAOkEACGGAwEA5wQAIZ0DAQDpBAAh3AMgAOgEACHeAwAAnwbeAyLfAwEA6QQAIeADIADoBAAh4QMBAOkEACHiA0AAhQUAIRAGAADWBgAgCQAA1AYAIAoAANcGACALAADYBgAgzAIBAAAAAdsCQAAAAAHcAkAAAAAB8wIBAAAAAYYDAQAAAAGdAwEAAAAB3AMgAAAAAd4DAAAA3gMC3wMBAAAAAeADIAAAAAHhAwEAAAAB4gNAAAAAAQIAAAABACAYAADoBgAgDwEAAJgGACDMAgEAAAAB2wJAAAAAAdwCQAAAAAHxAgAAANoDAvcCAQAAAAH4AgEAAAABhQMBAAAAAc0DAQAAAAHVAwEAAAAB1gMBAAAAAdcDAQAAAAHYAwIAAAAB2gNAAAAAAdsDAQAAAAECAAAANAAgGAAA6gYAIAPMAgEAAAAB3AJAAAAAAYUDAQAAAAEDAAAAHgAgGAAA6AYAIBkAAO8GACASAAAAHgAgBgAAogYAIAkAAKAGACAKAACjBgAgCwAApAYAIBEAAO8GACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHzAgEA6QQAIYYDAQDnBAAhnQMBAOkEACHcAyAA6AQAId4DAACfBt4DIt8DAQDpBAAh4AMgAOgEACHhAwEA6QQAIeIDQACFBQAhEAYAAKIGACAJAACgBgAgCgAAowYAIAsAAKQGACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHzAgEA6QQAIYYDAQDnBAAhnQMBAOkEACHcAyAA6AQAId4DAACfBt4DIt8DAQDpBAAh4AMgAOgEACHhAwEA6QQAIeIDQACFBQAhAwAAAAMAIBgAAOoGACAZAADyBgAgEQAAAAMAIAEAAIoGACARAADyBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8QIAAIkG2gMi9wIBAOcEACH4AgEA5wQAIYUDAQDnBAAhzQMBAOkEACHVAwEA5wQAIdYDAQDpBAAh1wMBAOcEACHYAwIA8AQAIdoDQADqBAAh2wMBAOcEACEPAQAAigYAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfECAACJBtoDIvcCAQDnBAAh-AIBAOcEACGFAwEA5wQAIc0DAQDpBAAh1QMBAOcEACHWAwEA6QQAIdcDAQDnBAAh2AMCAPAEACHaA0AA6gQAIdsDAQDnBAAhHwEAAIIGACAEAACBBgAgVAEAAAABzAIBAAAAAdsCQAAAAAHcAkAAAAAB6AIBAAAAAeoCAgAAAAHrAgIAAAAB7AIBAAAAAe0CCAAAAAHuAggAAAAB7wIBAAAAAfECAAAAzAMC_AIAAADHAwKFAwEAAAABpAMBAAAAAakDAQAAAAHHAwEAAAAByAMgAAAAAckDIAAAAAHKAwEAAAABzAMgAAAAAc0DAQAAAAHOAyAAAAABzwMCAAAAAdADAQAAAAHRAwEAAAAB0gNAAAAAAdMDAQAAAAHUAwEAAAABAgAAAAcAIBgAAPMGACAQCAAA1QYAIAkAANQGACAKAADXBgAgCwAA2AYAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAGGAwEAAAABnQMBAAAAAdwDIAAAAAHeAwAAAN4DAt8DAQAAAAHgAyAAAAAB4QMBAAAAAeIDQAAAAAECAAAAAQAgGAAA9QYAIAMAAAAFACAYAADzBgAgGQAA-QYAICEAAAAFACABAADzBQAgBAAA8gUAIBEAAPkGACBUAQDpBAAhzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh6AIBAOcEACHqAgIA8AQAIesCAgDwBAAh7AIBAOcEACHtAggA8gQAIe4CCADyBAAh7wIBAOcEACHxAgAA8QXMAyL8AgAA8AXHAyKFAwEA5wQAIaQDAQDnBAAhqQMBAOcEACHHAwEA6QQAIcgDIADoBAAhyQMgAOgEACHKAwEA6QQAIcwDIADoBAAhzQMBAOkEACHOAyAA6AQAIc8DAgDwBAAh0AMBAOcEACHRAwEA6QQAIdIDQACFBQAh0wMBAOcEACHUAwEA6QQAIR8BAADzBQAgBAAA8gUAIFQBAOkEACHMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHoAgEA5wQAIeoCAgDwBAAh6wICAPAEACHsAgEA5wQAIe0CCADyBAAh7gIIAPIEACHvAgEA5wQAIfECAADxBcwDIvwCAADwBccDIoUDAQDnBAAhpAMBAOcEACGpAwEA5wQAIccDAQDpBAAhyAMgAOgEACHJAyAA6AQAIcoDAQDpBAAhzAMgAOgEACHNAwEA6QQAIc4DIADoBAAhzwMCAPAEACHQAwEA5wQAIdEDAQDpBAAh0gNAAIUFACHTAwEA5wQAIdQDAQDpBAAhAwAAAB4AIBgAAPUGACAZAAD8BgAgEgAAAB4AIAgAAKEGACAJAACgBgAgCgAAowYAIAsAAKQGACARAAD8BgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8wIBAOkEACGGAwEA5wQAIZ0DAQDpBAAh3AMgAOgEACHeAwAAnwbeAyLfAwEA6QQAIeADIADoBAAh4QMBAOkEACHiA0AAhQUAIRAIAAChBgAgCQAAoAYAIAoAAKMGACALAACkBgAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh8wIBAOkEACGGAwEA5wQAIZ0DAQDpBAAh3AMgAOgEACHeAwAAnwbeAyLfAwEA6QQAIeADIADoBAAh4QMBAOkEACHiA0AAhQUAIQ3MAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7wIBAAAAAfECAQAAAAHzAgEAAAABpAMBAAAAAakDAQAAAAG8AwEAAAABvQMBAAAAAb4DAQAAAAG_AwEAAAABD8wCAQAAAAHbAkAAAAAB3AJAAAAAAewCAQAAAAHvAgEAAAAB8QIBAAAAAfMCAQAAAAH0AgEAAAABrAMBAAAAAa0DAQAAAAHAAwEAAAABwQMgAAAAAcIDAQAAAAHDAwIAAAABxAMCAAAAAQIAAAB4ACAYAAD-BgAgEswCAQAAAAHYAgEAAAAB2wJAAAAAAdwCQAAAAAHxAgEAAAABogMBAAAAAaMDAQAAAAGlAwIAAAABqQMBAAAAAbIDAQAAAAGzAwIAAAABtAMCAAAAAbUDAgAAAAG2AwIAAAABtwMIAAAAAbgDQAAAAAG5A0AAAAABugNAAAAAAQMAAACFAQAgGAAA_gYAIBkAAIMHACARAAAAhQEAIBEAAIMHACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe8CAQDnBAAh8QIBAOcEACHzAgEA5wQAIfQCAQDnBAAhrAMBAOkEACGtAwEA6QQAIcADAQDpBAAhwQMgAOgEACHCAwEA6QQAIcMDAgDxBAAhxAMCAPEEACEPzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh7AIBAOcEACHvAgEA5wQAIfECAQDnBAAh8wIBAOcEACH0AgEA5wQAIawDAQDpBAAhrQMBAOkEACHAAwEA6QQAIcEDIADoBAAhwgMBAOkEACHDAwIA8QQAIcQDAgDxBAAhD1QAAMsFACDMAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7wIBAAAAAfECAQAAAAHzAgEAAAABpAMBAAAAAakDAQAAAAG7AwEAAAABvAMBAAAAAb0DAQAAAAG-AwEAAAABvwMBAAAAAQIAAAB8ACAYAACEBwAgAwAAAHoAIBgAAIQHACAZAACIBwAgEQAAAHoAIBEAAIgHACBUAAC9BQAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh7AIBAOcEACHvAgEA5wQAIfECAQDnBAAh8wIBAOcEACGkAwEA5wQAIakDAQDnBAAhuwMBAOcEACG8AwEA5wQAIb0DAQDpBAAhvgMBAOkEACG_AwEA6QQAIQ9UAAC9BQAgzAIBAOcEACHbAkAA6gQAIdwCQADqBAAh7AIBAOcEACHvAgEA5wQAIfECAQDnBAAh8wIBAOcEACGkAwEA5wQAIakDAQDnBAAhuwMBAOcEACG8AwEA5wQAIb0DAQDpBAAhvgMBAOkEACG_AwEA6QQAIQ7MAgEAAAAB2AIBAAAAAdsCQAAAAAHcAkAAAAAB6gICAAAAAesCAgAAAAHvAgEAAAAB8QIBAAAAAaIDAQAAAAGjAwEAAAABpAMBAAAAAaUDAgAAAAGmAwgAAAABpwNAAAAAARHMAgEAAAAB2wJAAAAAAdwCQAAAAAHsAgEAAAAB7QIIAAAAAe4CCAAAAAHvAgEAAAAB8AIBAAAAAfECAQAAAAHzAgEAAAABpAMBAAAAAagDAQAAAAGpAwEAAAABqgMBAAAAAasDAQAAAAGsAwEAAAABrQMBAAAAAQIAAADHAQAgGAAAigcAIAMAAADPAQAgGAAAigcAIBkAAI4HACATAAAAzwEAIBEAAI4HACDMAgEA5wQAIdsCQADqBAAh3AJAAOoEACHsAgEA5wQAIe0CCADyBAAh7gIIAPIEACHvAgEA5wQAIfACAQDnBAAh8QIBAOcEACHzAgEA5wQAIaQDAQDnBAAhqAMBAOcEACGpAwEA5wQAIaoDAQDnBAAhqwMBAOkEACGsAwEA6QQAIa0DAQDpBAAhEcwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIewCAQDnBAAh7QIIAPIEACHuAggA8gQAIe8CAQDnBAAh8AIBAOcEACHxAgEA5wQAIfMCAQDnBAAhpAMBAOcEACGoAwEA5wQAIakDAQDnBAAhqgMBAOcEACGrAwEA6QQAIawDAQDpBAAhrQMBAOkEACEQBgAA1gYAIAgAANUGACAJAADUBgAgCwAA2AYAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAGGAwEAAAABnQMBAAAAAdwDIAAAAAHeAwAAAN4DAt8DAQAAAAHgAyAAAAAB4QMBAAAAAeIDQAAAAAECAAAAAQAgGAAAjwcAIAMAAAAeACAYAACPBwAgGQAAkwcAIBIAAAAeACAGAACiBgAgCAAAoQYAIAkAAKAGACALAACkBgAgEQAAkwcAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACEQBgAAogYAIAgAAKEGACAJAACgBgAgCwAApAYAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACEQBgAA1gYAIAgAANUGACAJAADUBgAgCgAA1wYAIMwCAQAAAAHbAkAAAAAB3AJAAAAAAfMCAQAAAAGGAwEAAAABnQMBAAAAAdwDIAAAAAHeAwAAAN4DAt8DAQAAAAHgAyAAAAAB4QMBAAAAAeIDQAAAAAECAAAAAQAgGAAAlAcAIAMAAAAeACAYAACUBwAgGQAAmAcAIBIAAAAeACAGAACiBgAgCAAAoQYAIAkAAKAGACAKAACjBgAgEQAAmAcAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACEQBgAAogYAIAgAAKEGACAJAACgBgAgCgAAowYAIMwCAQDnBAAh2wJAAOoEACHcAkAA6gQAIfMCAQDpBAAhhgMBAOcEACGdAwEA6QQAIdwDIADoBAAh3gMAAJ8G3gMi3wMBAOkEACHgAyAA6AQAIeEDAQDpBAAh4gNAAIUFACEGBhAEBwAJCA8DCQQCChQHCxgIAwEAAQcABggIAwQBAAEEAAIGDAQHAAUCAQABBQADAQYNAAEIDgABAQABAQEAAQQGGgAIGQAKGwALHAAAAAADBwAOHgAPHwAQAAAAAwcADh4ADx8AEAEBAAEBAQABBQcAFR4AGB8AGTAAFjEAFwAAAAAABQcAFR4AGB8AGTAAFjEAFwIBAAEEAAICAQABBAACBQcAHh4AIR8AIjAAHzEAIAAAAAAABQcAHh4AIR8AIjAAHzEAIAIBAAEFAAMCAQABBQADAwcAJx4AKB8AKQAAAAMHACceACgfACkCBwAvV30sAwcALlQAK1aBAS0BVQAsAVaCAQABV4MBAAAABQcAMx4ANh8ANzAANDEANQAAAAAABQcAMx4ANh8ANzAANDEANQFUACsBVAArAwcAPB4APR8APgAAAAMHADweAD0fAD4BVQAsAVUALAUHAEMeAEYfAEcwAEQxAEUAAAAAAAUHAEMeAEYfAEcwAEQxAEUCBwBLVswBSgGIAQBJAVbNAQAAAAUHAE8eAFIfAFMwAFAxAFEAAAAAAAUHAE8eAFIfAFMwAFAxAFEBiAEASQGIAQBJBQcAWB4AWx8AXDAAWTEAWgAAAAAABQcAWB4AWx8AXDAAWTEAWgEBAAEBAQABAwcAYR4AYh8AYwAAAAMHAGEeAGIfAGMBAQABAQEAAQMHAGgeAGkfAGoAAAADBwBoHgBpHwBqAAAAAwcAcB4AcR8AcgAAAAMHAHAeAHEfAHIAAAADBwB4HgB5HwB6AAAAAwcAeB4AeR8AegAAAAMHAIABHgCBAR8AggEAAAADBwCAAR4AgQEfAIIBAAAABQcAiAEeAIsBHwCMATAAiQExAIoBAAAAAAAFBwCIAR4AiwEfAIwBMACJATEAigEAAAADBwCSAR4AkwEfAJQBAAAAAwcAkgEeAJMBHwCUAQAAAAUHAJoBHgCdAR8AngEwAJsBMQCcAQAAAAAABQcAmgEeAJ0BHwCeATAAmwExAJwBAAAABQcApAEeAKcBHwCoATAApQExAKYBAAAAAAAFBwCkAR4ApwEfAKgBMAClATEApgEAAAADBwCuAR4ArwEfALABAAAAAwcArgEeAK8BHwCwAQwCAQ0dAQ4gAQ8hARAiARIkARMmChQnCxUpARYrChcsDBotARsuARwvCiAyDSEzESI1AiM2AiQ4AiU5AiY6Aic8Aig-Cik_EipBAitDCixEEy1FAi5GAi9HCjJKFDNLGjRMAzVNAzZOAzdPAzhQAzlSAzpUCjtVGzxXAz1ZCj5aHD9bA0BcA0FdCkJgHUNhI0RiBEVjBEZkBEdlBEhmBEloBEpqCktrJExtBE1vCk5wJU9xBFByBFFzClJ2JlN3Klh5K1mEAStahwErW4gBK1yJAStdiwErXo0BCl-OATBgkAErYZIBCmKTATFjlAErZJUBK2WWAQpmmQEyZ5oBOGibASxpnAEsap0BLGueASxsnwEsbaEBLG6jAQpvpAE5cKYBLHGoAQpyqQE6c6oBLHSrASx1rAEKdq8BO3ewAT94sQEtebIBLXqzAS17tAEtfLUBLX23AS1-uQEKf7oBQIABvAEtgQG-AQqCAb8BQYMBwAEthAHBAS2FAcIBCoYBxQFChwHGAUiJAcgBSYoBzgFJiwHRAUmMAdIBSY0B0wFJjgHVAUmPAdcBCpAB2AFMkQHaAUmSAdwBCpMB3QFNlAHeAUmVAd8BSZYB4AEKlwHjAU6YAeQBVJkB5QFKmgHmAUqbAecBSpwB6AFKnQHpAUqeAesBSp8B7QEKoAHuAVWhAfABSqIB8gEKowHzAVakAfQBSqUB9QFKpgH2AQqnAfkBV6gB-gFdqQH7AQeqAfwBB6sB_QEHrAH-AQetAf8BB64BgQIHrwGDAgqwAYQCXrEBhgIHsgGIAgqzAYkCX7QBigIHtQGLAge2AYwCCrcBjwJguAGQAmS5AZECCLoBkgIIuwGTAgi8AZQCCL0BlQIIvgGXAgi_AZkCCsABmgJlwQGcAgjCAZ4CCsMBnwJmxAGgAgjFAaECCMYBogIKxwGlAmfIAaYCa8kBqAJsygGpAmzLAawCbMwBrQJszQGuAmzOAbACbM8BsgIK0AGzAm3RAbUCbNIBtwIK0wG4Am7UAbkCbNUBugJs1gG7AgrXAb4Cb9gBvwJz2QHBAnTaAcICdNsBxQJ03AHGAnTdAccCdN4ByQJ03wHLAgrgAcwCdeEBzgJ04gHQAgrjAdECduQB0gJ05QHTAnTmAdQCCucB1wJ36AHYAnvpAdoCfOoB2wJ86wHeAnzsAd8CfO0B4AJ87gHiAnzvAeQCCvAB5QJ98QHnAnzyAekCCvMB6gJ-9AHrAnz1AewCfPYB7QIK9wHwAn_4AfECgwH5AfMChAH6AfQChAH7AfcChAH8AfgChAH9AfkChAH-AfsChAH_Af0CCoAC_gKFAYECgAOEAYICggMKgwKDA4YBhAKEA4QBhQKFA4QBhgKGAwqHAokDhwGIAooDjQGJAowDjgGKAo0DjgGLApADjgGMApEDjgGNApIDjgGOApQDjgGPApYDCpAClwOPAZECmQOOAZICmwMKkwKcA5ABlAKdA44BlQKeA44BlgKfAwqXAqIDkQGYAqMDlQGZAqUDlgGaAqYDlgGbAqkDlgGcAqoDlgGdAqsDlgGeAq0DlgGfAq8DCqACsAOXAaECsgOWAaICtAMKowK1A5gBpAK2A5YBpQK3A5YBpgK4AwqnArsDmQGoArwDnwGpAr4DoAGqAr8DoAGrAsIDoAGsAsMDoAGtAsQDoAGuAsYDoAGvAsgDCrACyQOhAbECywOgAbICzQMKswLOA6IBtALPA6ABtQLQA6ABtgLRAwq3AtQDowG4AtUDqQG5AtcDqgG6AtgDqgG7AtsDqgG8AtwDqgG9At0DqgG-At8DqgG_AuEDCsAC4gOrAcEC5AOqAcIC5gMKwwLnA6wBxALoA6oBxQLpA6oBxgLqAwrHAu0DrQHIAu4DsQE"
};
async function decodeBase64AsWasm(wasmBase64) {
	const { Buffer } = await import("node:buffer");
	const wasmArray = Buffer.from(wasmBase64, "base64");
	return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
	getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs"),
	getQueryCompilerWasmModule: async () => {
		const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs");
		return await decodeBase64AsWasm(wasm);
	},
	importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
	return runtime.getPrismaClient(config);
}
globalThis["__dirname"] = path$1.dirname(fileURLToPath(import.meta.url));
/**
* ## Prisma Client
* 
* Type-safe database client for TypeScript
* @example
* ```
* const prisma = new PrismaClient({
*   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
* })
* // Fetch zero or more Users
* const users = await prisma.user.findMany()
* ```
* 
* Read more in our [docs](https://pris.ly/d/client).
*/
var PrismaClient = getPrismaClientClass();
var prisma$1 = new PrismaClient({ adapter: new PrismaLibSqlAdapterFactory({ url: process.env["DATABASE_URL"] }) });
var auth = betterAuth({
	database: (0, prisma_adapter_exports.prismaAdapter)(prisma$1, { provider: "sqlite" }),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
		minPasswordLength: 8,
		maxPasswordLength: 128
	},
	/**
	* The offline kit signs in and out of seven accounts in quick succession
	* while demonstrating the roles, which trips the credential rate limit.
	* start.bat opts out for that copy only; deployed instances keep it on.
	*/
	rateLimit: process.env["DISABLE_AUTH_RATE_LIMIT"] === "1" ? { enabled: false } : {
		enabled: true,
		window: 60,
		max: 100
	},
	session: {
		expiresIn: 604800,
		updateAge: 86400,
		cookieCache: {
			enabled: true,
			maxAge: 300
		}
	},
	user: { additionalFields: { role: {
		type: "string",
		required: false,
		defaultValue: "TENANT",
		input: false
	} } },
	plugins: [admin({
		adminRoles: ["ADMIN"],
		defaultRole: "TENANT"
	})],
	trustedOrigins: [
		"http://localhost:5173",
		"http://localhost:8080",
		"http://localhost:3000",
		...process.env["BETTER_AUTH_URL"] ? [process.env["BETTER_AUTH_URL"]] : []
	]
});
/**
* Shared server-side database client.
*
* The app already talks to SQLite through the libsql adapter (see
* `src/lib/auth/index.ts`). This module exposes a single PrismaClient for
* the server routes so every server-side read/write goes through one
* connection and can be reused by the consent, import and export services.
*/
var globalForPrisma = globalThis;
function createClient() {
	const url = process.env["DATABASE_URL"];
	if (!url) throw new Error("DATABASE_URL is not set. Server routes need the SQLite/libsql database URL.");
	return new PrismaClient({ adapter: new PrismaLibSqlAdapterFactory({ url }) });
}
var prisma = globalForPrisma.prisma ?? createClient();
/**
* Server-side authorisation.
*
* Roles are read from the signed-in session's user row in the database, never
* from anything the browser sends, so a viewer cannot reach administrator
* data by changing a request or hiding a button.
*
* Two roles with genuinely different access are used by the app:
*   - ADMIN  : full access, including the consent ledger and data export.
*   - VIEWER : read-only access to the same dashboard data, no export,
*              no consent withdrawal on behalf of anyone else.
*/
var HttpError = class extends Error {
	status;
	constructor(status, message) {
		super(message);
		this.status = status;
		this.name = "HttpError";
	}
};
/**
* Resolve the signed-in user from the request cookie.
* Returns null when the request is not authenticated.
*/
async function getSessionUser(request) {
	try {
		const session = await auth.api.getSession({ headers: request.headers });
		if (!session?.user) return null;
		const email = session.user.email ?? "";
		const row = await prisma.user.findUnique({
			where: { email },
			select: {
				id: true,
				email: true,
				name: true,
				role: true
			}
		});
		if (!row) return null;
		return {
			id: row.id,
			email: row.email,
			name: row.name ?? session.user.name ?? "",
			role: row.role ?? "TENANT"
		};
	} catch (error) {
		console.error("Session lookup failed:", error);
		return null;
	}
}
/** Require a signed-in user with one of the given roles. */
async function requireRole(request, roles) {
	const user = await getSessionUser(request);
	if (!user) throw new HttpError(401, "Sign in to use this endpoint.");
	if (!roles.includes(user.role)) throw new HttpError(403, `This action requires the ${roles.join(" or ")} role. Your role is ${user.role}.`);
	return user;
}
function jsonError(error) {
	if (error instanceof HttpError) return new Response(JSON.stringify({ error: error.message }), {
		status: error.status,
		headers: { "content-type": "application/json" }
	});
	console.error("Unhandled server error:", error);
	return new Response(JSON.stringify({ error: "Internal server error." }), {
		status: 500,
		headers: { "content-type": "application/json" }
	});
}
/**
* Consent service.
*
* Rules implemented here (Data Protection Act, 2019 s.32; Data Protection
* (General) Regulations, 2021 reg. 4):
*
*  - Consent is recorded per purpose. There is no single "all purposes" row,
*    so a tick for one purpose is never treated as a tick for another.
*  - Every row stores the wording the person actually saw, the version of
*    that wording, and the date and time of the grant.
*  - Withdrawal is always available and always recorded with a date and time.
*    Withdrawal never deletes the earlier record: the row is marked withdrawn
*    so the trail of what was agreed and when remains auditable.
*  - The record set is append-only for grants. Re-granting a purpose after a
*    withdrawal creates a new row rather than rewriting history.
*/
function normaliseEmail$1(email) {
	return email.trim().toLowerCase();
}
/**
* The database enum and the shared catalogue carry the same values, so a
* purpose that came from the catalogue can be written straight to the
* database. The cast keeps the two definitions in one place each.
*/
function toDbPurpose(purpose) {
	return purpose;
}
function toRow$1(record) {
	return {
		id: record.id,
		userId: record.userId,
		email: record.email,
		name: record.name,
		purpose: record.purpose,
		purposeText: record.purposeText,
		wordingVersion: record.wordingVersion,
		acknowledgedItems: splitItems(record.acknowledgedItems),
		status: record.status,
		grantedAt: record.grantedAt.toISOString(),
		withdrawnAt: record.withdrawnAt ? record.withdrawnAt.toISOString() : null,
		source: record.source
	};
}
/** The ticked statement ids are stored as one comma separated column. */
function splitItems(value) {
	if (!value) return [];
	return value.split(",").map((item) => item.trim()).filter(Boolean);
}
/**
* Record a grant for each purpose the person ticked.
* Unknown purpose ids are rejected rather than silently stored.
*/
async function grantConsent(input) {
	const email = normaliseEmail$1(input.email);
	if (!email || !email.includes("@")) throw new Error("A valid email address is required to record consent.");
	const name = input.name.trim();
	if (!name) throw new Error("A name is required to record consent.");
	const rejected = input.purposes.filter((id) => id && !isConsentPurposeId(id));
	if (rejected.length > 0) throw new Error(`Unknown consent purpose: ${rejected.join(", ")}`);
	const purposes = input.purposes.filter((id) => id && isConsentPurposeId(id));
	if (purposes.length === 0) throw new Error("At least one purpose must be selected.");
	const grantedAt = /* @__PURE__ */ new Date();
	const created = [];
	const acknowledgedItems = (input.declarationItems ?? []).filter(Boolean).join(",");
	for (const purpose of purposes) {
		const open = await prisma.consentRecord.findFirst({
			where: {
				email,
				purpose: toDbPurpose(purpose),
				status: "GRANTED",
				withdrawnAt: null
			},
			orderBy: { grantedAt: "desc" }
		});
		if (open) {
			created.push(toRow$1(open));
			continue;
		}
		const record = await prisma.consentRecord.create({ data: {
			userId: input.userId ?? null,
			email,
			name,
			purpose: toDbPurpose(purpose),
			purposeText: purposeWording(purpose),
			wordingVersion: "1.0",
			acknowledgedItems: acknowledgedItems || null,
			status: "GRANTED",
			grantedAt,
			source: input.source ?? "consent-screen"
		} });
		created.push(toRow$1(record));
	}
	return created;
}
/**
* Withdraw consent for one purpose, or for every purpose the person holds.
* Returns the rows that were updated so the caller can show the outcome.
*/
async function withdrawConsent(email, purposes, scope = "selected") {
	const normalised = normaliseEmail$1(email);
	if (!normalised) throw new Error("An email address is required to withdraw consent.");
	const targets = purposes?.filter((id) => isConsentPurposeId(id)).map((id) => id);
	const open = await prisma.consentRecord.findMany({ where: {
		email: normalised,
		status: "GRANTED",
		withdrawnAt: null,
		...scope === "selected" && targets && targets.length > 0 ? { purpose: { in: targets.map(toDbPurpose) } } : {}
	} });
	const withdrawnAt = /* @__PURE__ */ new Date();
	const updated = [];
	for (const record of open) {
		const next = await prisma.consentRecord.update({
			where: { id: record.id },
			data: {
				status: "WITHDRAWN",
				withdrawnAt
			}
		});
		updated.push(toRow$1(next));
	}
	return updated;
}
/** Every consent record held for one email, newest first. */
async function listConsentForEmail(email) {
	return (await prisma.consentRecord.findMany({
		where: { email: normaliseEmail$1(email) },
		orderBy: [{ purpose: "asc" }, { grantedAt: "desc" }]
	})).map(toRow$1);
}
/** The full ledger — administrator only. */
async function listConsentLedger(filters) {
	return (await prisma.consentRecord.findMany({
		where: {
			...filters?.status ? { status: filters.status } : {},
			...filters?.purpose ? { purpose: toDbPurpose(filters.purpose) } : {}
		},
		orderBy: [{ grantedAt: "desc" }]
	})).map(toRow$1);
}
/** Current state of consent per purpose for one email. */
function summarise(records) {
	const current = /* @__PURE__ */ new Map();
	for (const record of records) {
		const existing = current.get(record.purpose);
		if (!existing) {
			current.set(record.purpose, record);
			continue;
		}
		const existingOpen = existing.status === "GRANTED";
		const incomingOpen = record.status === "GRANTED";
		if (incomingOpen && !existingOpen) current.set(record.purpose, record);
		else if (incomingOpen === existingOpen && record.grantedAt > existing.grantedAt) current.set(record.purpose, record);
	}
	return CONSENT_PURPOSES.map((purpose) => ({
		purpose: purpose.id,
		title: purpose.title,
		required: purpose.required,
		record: current.get(purpose.id) ?? null
	}));
}
var CSV_COLUMNS = [
	"id",
	"email",
	"name",
	"purpose",
	"wordingVersion",
	"acknowledgedItems",
	"status",
	"grantedAt",
	"withdrawnAt",
	"source",
	"purposeText"
];
function consentToCsv(records) {
	const escape = (value) => {
		const text = Array.isArray(value) ? value.join(" ") : value === null || value === void 0 ? "" : String(value);
		return /[",\n]/.test(text) ? `"${text.replace(/"/g, "\"\"")}"` : text;
	};
	const lines = [CSV_COLUMNS.join(",")];
	for (const record of records) lines.push(CSV_COLUMNS.map((column) => escape(record[column])).join(","));
	return lines.join("\n");
}
/**
* Who is making a consent request.
*
* A consent record is only worth keeping if it can be tied to a person the
* server can check. The email address is therefore never read from the
* request body: it is taken either from a signed session cookie or from a
* Firebase ID token that the server verifies with Google before it trusts
* it. A request that carries neither is refused.
*/
/**
* The Firebase Web API key. It is a public identifier, not a secret — it is
* already shipped in the browser bundle — and it is only used here to ask
* Google to verify an ID token that the browser presents.
*/
function readApiKeyFromConfigFile() {
	const candidates = [path.join(process.cwd(), "firebase-applet-config.json"), path.resolve(process.cwd(), "..", "firebase-applet-config.json")];
	for (const candidate of candidates) try {
		if (!fs.existsSync(candidate)) continue;
		const parsed = JSON.parse(fs.readFileSync(candidate, "utf8"));
		if (parsed.apiKey) return parsed.apiKey;
	} catch {}
	return null;
}
function firebaseApiKey() {
	const fromEnv = process.env["FIREBASE_API_KEY"] ?? process.env["VITE_FIREBASE_API_KEY"];
	if (fromEnv) return fromEnv;
	const fromBuild = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_ADMIN_EMAILS": "your-admin-email@example.com,admin@unihub.dev",
		"VITE_APP_URL": "http://localhost:8080",
		"VITE_FIREBASE_API_KEY": "AIzaSyConZk9rE3THKivisE8C3nqwEaPfr5RaOY",
		"VITE_FIREBASE_APP_ID": "1:967118340428:web:e37e76fd96985d83aa4fe9",
		"VITE_FIREBASE_AUTH_DOMAIN": "efk-battles.firebaseapp.com",
		"VITE_FIREBASE_MESSAGING_SENDER_ID": "967118340428",
		"VITE_FIREBASE_PROJECT_ID": "efk-battles",
		"VITE_FIREBASE_STORAGE_BUCKET": "efk-battles.firebasestorage.app",
		"VITE_WHATSAPP_MESSAGE": "Hi%20UniHub%2C%20I%27d%20like%20help%20finding%20verified%20student%20housing",
		"VITE_WHATSAPP_NUMBER": "254700000000"
	}["VITE_FIREBASE_API_KEY"];
	if (fromBuild) return fromBuild;
	return readApiKeyFromConfigFile();
}
/**
* Ask Google to verify a Firebase ID token and return the account it
* belongs to. Returns null when the token is missing, expired, or not a
* Firebase token at all.
*/
async function verifyFirebaseIdToken(idToken) {
	const apiKey = firebaseApiKey();
	if (!apiKey) {
		console.error("No Firebase API key is configured, so a Firebase token cannot be verified.");
		return null;
	}
	try {
		const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(apiKey)}`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ idToken })
		});
		if (!response.ok) {
			console.error(`Firebase token verification failed: ${response.status}`);
			return null;
		}
		const account = (await response.json()).users?.[0];
		if (!account?.email) return null;
		return {
			email: account.email,
			displayName: account.displayName
		};
	} catch (error) {
		console.error("Firebase token verification failed:", error);
		return null;
	}
}
function bearerToken(request) {
	const header = request.headers.get("authorization");
	if (!header) return null;
	const [scheme, token] = header.split(" ");
	if (!token || !scheme || scheme.toLowerCase() !== "bearer") return null;
	const trimmed = token.trim();
	return trimmed.length > 0 ? trimmed : null;
}
/**
* Resolve the caller.
*
* The platform session is tried first, then a Firebase ID token. The email
* that is stored is always one the server has verified.
*/
async function resolveConsentIdentity(request) {
	const sessionUser = await getSessionUser(request);
	if (sessionUser) return {
		email: sessionUser.email,
		name: sessionUser.name || sessionUser.email,
		userId: sessionUser.id,
		method: "session"
	};
	const token = bearerToken(request);
	if (!token) return null;
	const account = await verifyFirebaseIdToken(token);
	if (!account?.email) return null;
	return {
		email: account.email,
		name: account.displayName || account.email,
		userId: null,
		method: "firebase"
	};
}
/**
* The consent API.
*
* Three things live here:
*   GET  /api/consent          what the caller has agreed to, and when
*   POST /api/consent          record a grant, or withdraw consent
*   GET  /api/consent/ledger   the whole ledger, for the administrator
*
* Rules the handler enforces:
*   - The person is identified from a session cookie or a verified Firebase
*     ID token. An email in the request body is never trusted.
*   - Consent is granted per purpose. A tick for one purpose never grants
*     another, and the wording and version shown to the person are stored
*     with the record.
*   - Withdrawal is always available and is recorded with a date and time.
*/
function json$9(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
async function readBody(request) {
	try {
		const body = await request.json();
		if (body && typeof body === "object") return body;
	} catch {}
	return {};
}
function asStringArray$2(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((item) => typeof item === "string" && item.length > 0);
}
/**
* Turn the ticked declaration statements into the purposes they grant.
* Every statement the form marks as required has to be present.
*/
function resolveGrantPurposes(declarationItems) {
	const known = new Set(DECLARATION_ITEMS.map((item) => item.id));
	const ticked = declarationItems.filter((id) => known.has(id));
	const missingItems = REQUIRED_DECLARATION_ITEM_IDS.filter((id) => !ticked.includes(id));
	const purposes = purposesFromDeclarationItems(ticked);
	return {
		purposes,
		missingItems,
		missingPurposes: CONSENT_PURPOSES.filter((purpose) => purpose.required && !purposes.includes(purpose.id)).map((purpose) => purpose.id)
	};
}
/** GET and POST on /api/consent. */
async function handleConsentRequest(request) {
	const identity = await resolveConsentIdentity(request);
	if (!identity) return json$9({ error: "Sign in, or open this page from the account you registered, so that your consent can be recorded against you." }, 401);
	if (request.method === "GET") {
		const records = await listConsentForEmail(identity.email);
		return json$9({
			identity: {
				email: identity.email,
				name: identity.name,
				method: identity.method
			},
			records,
			summary: summarise(records),
			wordingVersion: "1.0"
		});
	}
	if (request.method !== "POST") return json$9({ error: "Method not allowed." }, 405);
	const body = await readBody(request);
	if ((typeof body["action"] === "string" ? body["action"] : "grant") === "withdraw") {
		const requested = asStringArray$2(body["purposes"]);
		const unknown = requested.filter((id) => !isConsentPurposeId(id));
		if (unknown.length > 0) return json$9({ error: `Unknown consent purpose: ${unknown.join(", ")}` }, 400);
		const scope = body["scope"] === "all" || requested.length === 0 ? "all" : "selected";
		const withdrawn = await withdrawConsent(identity.email, requested, scope);
		const records = await listConsentForEmail(identity.email);
		return json$9({
			withdrawn,
			records,
			summary: summarise(records)
		});
	}
	const ticked = asStringArray$2(body["declarationItems"]);
	const purposes = asStringArray$2(body["purposes"]).filter((id) => isConsentPurposeId(id));
	const unknownPurposes = asStringArray$2(body["purposes"]).filter((id) => !isConsentPurposeId(id));
	if (unknownPurposes.length > 0) return json$9({ error: `Unknown consent purpose: ${unknownPurposes.join(", ")}` }, 400);
	let grantedPurposes = purposes;
	if (ticked.length > 0) {
		const resolved = resolveGrantPurposes(ticked);
		if (resolved.missingItems.length > 0 || resolved.missingPurposes.length > 0) return json$9({ error: `Please tick every required statement before you continue: ${[...resolved.missingItems.map((id) => DECLARATION_ITEMS.find((item) => item.id === id)?.title ?? id), ...resolved.missingPurposes.map((id) => CONSENT_PURPOSES.find((purpose) => purpose.id === id)?.title ?? id)].join(", ")}.` }, 400);
		grantedPurposes = resolved.purposes;
	}
	if (grantedPurposes.length === 0) return json$9({ error: "No consent was selected." }, 400);
	try {
		const created = await grantConsent({
			email: identity.email,
			name: identity.name,
			userId: identity.userId,
			purposes: grantedPurposes,
			...ticked.length > 0 ? { declarationItems: ticked } : {},
			source: typeof body["source"] === "string" ? body["source"] : "consent-screen"
		});
		const records = await listConsentForEmail(identity.email);
		return json$9({
			created,
			records,
			summary: summarise(records)
		});
	} catch (error) {
		return json$9({ error: error instanceof Error ? error.message : "The consent could not be recorded." }, 400);
	}
}
/**
* GET /api/consent/ledger — the administrator's view of every consent
* record, with a CSV export for the compliance file.
*/
async function handleConsentLedgerRequest(request) {
	try {
		await requireRole(request, ["ADMIN", "VIEWER"]);
	} catch (error) {
		return jsonError(error);
	}
	const url = new URL(request.url);
	const statusFilter = url.searchParams.get("status");
	const purposeFilter = url.searchParams.get("purpose");
	const filters = {};
	if (statusFilter === "GRANTED" || statusFilter === "WITHDRAWN") filters.status = statusFilter;
	if (purposeFilter && isConsentPurposeId(purposeFilter)) filters.purpose = purposeFilter;
	const records = await listConsentLedger(filters);
	if (url.searchParams.get("format") === "csv") return new Response(consentToCsv(records), {
		status: 200,
		headers: {
			"content-type": "text/csv; charset=utf-8",
			"content-disposition": "attachment; filename=\"unihub-consent-ledger.csv\"",
			"cache-control": "no-store"
		}
	});
	return json$9({
		records,
		count: records.length
	});
}
/**
* Consent endpoint.
*
* GET  /api/consent  - what the signed-in person has agreed to, and when.
* POST /api/consent  - record a grant, or withdraw consent.
*
* The handler lives in `src/server/consentApi.ts` so it can be exercised
* directly by the tests without going through the router.
*/
var Route$32 = createFileRoute("/api/consent")({ server: { handlers: {
	GET: ({ request }) => handleConsentRequest(request),
	POST: ({ request }) => handleConsentRequest(request)
} } });
/**
* Site content managed from the admin site builder.
*
* One row (`global`) holds everything the public site reads from the CMS:
* hero copy, featured listings, theme tokens, feature flags and team members.
* JSON columns keep the stored shape identical to the `SiteSettingsData` type
* the marketing pages consume, so the CMS, the API and the pages cannot drift.
*
* Reads never fail because a row is missing: the defaults below are the copy
* the site shipped with, so a fresh install renders exactly as before anyone
* presses Save.
*/
var DEFAULT_THEME = {
	primaryColor: "#c6f24e",
	backgroundColor: "#0d0d0f",
	surfaceColor: "#17171a",
	borderRadius: "1.5rem",
	fontFamily: "Inter"
};
var FONT_OPTIONS = [
	"Inter",
	"Space Grotesk",
	"Poppins",
	"Roboto",
	"Nunito"
];
var RADIUS_OPTIONS = [
	"0rem",
	"0.25rem",
	"0.5rem",
	"0.75rem",
	"1rem",
	"1.5rem",
	"2rem"
];
var DEFAULT_SETTINGS = {
	heroTitle: "Find your perfect home.",
	heroSubtitle: "Browse verified hostels, bedsitters, and rentals near campus. Message landlords on WhatsApp. No account needed to search.",
	heroImage: "",
	ctaText: "Browse Listings",
	featuredProperties: [],
	theme: DEFAULT_THEME,
	features: { enableBlog: false },
	teamMembers: [],
	updatedAt: null,
	updatedBy: null
};
function parseJson$1(value, fallback) {
	if (!value) return fallback;
	try {
		return JSON.parse(value);
	} catch {
		return fallback;
	}
}
function text(value, fallback) {
	return typeof value === "string" && value.trim() ? value.trim() : fallback;
}
function isHexColor(value) {
	return /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
}
function isUrl(value) {
	if (!value) return true;
	try {
		const url = new URL(value);
		return url.protocol === "https:" || url.protocol === "http:";
	} catch {
		return false;
	}
}
/** Copy over the input limits the CMS form also enforces client-side. */
function bounded(value, limit, label) {
	if (value.length > limit) throw new HttpError(400, `${label} must be ${limit} characters or fewer.`);
	return value;
}
function sanitiseTheme(value) {
	const input = value && typeof value === "object" ? value : {};
	const theme = {
		primaryColor: text(input["primaryColor"], DEFAULT_THEME.primaryColor),
		backgroundColor: text(input["backgroundColor"], DEFAULT_THEME.backgroundColor),
		surfaceColor: text(input["surfaceColor"], DEFAULT_THEME.surfaceColor),
		borderRadius: text(input["borderRadius"], DEFAULT_THEME.borderRadius),
		fontFamily: text(input["fontFamily"], DEFAULT_THEME.fontFamily)
	};
	for (const [key, colour] of [
		["Primary colour", theme.primaryColor],
		["Background colour", theme.backgroundColor],
		["Surface colour", theme.surfaceColor]
	]) if (!isHexColor(colour)) throw new HttpError(400, `${key} must be a hex colour such as #c6f24e.`);
	if (!RADIUS_OPTIONS.includes(theme.borderRadius)) throw new HttpError(400, "Choose one of the available corner radii.");
	if (!FONT_OPTIONS.includes(theme.fontFamily)) throw new HttpError(400, "Choose one of the available fonts.");
	return theme;
}
function sanitiseTeam(value) {
	if (!Array.isArray(value)) return [];
	if (value.length > 12) throw new HttpError(400, "The team section holds at most 12 people.");
	return value.map((entry, index) => {
		const member = entry && typeof entry === "object" ? entry : {};
		const name = bounded(text(member["name"], ""), 80, `Team member ${index + 1} name`);
		const role = bounded(text(member["role"], ""), 80, `Team member ${index + 1} role`);
		const photoUrl = text(member["photoUrl"], "");
		if (!name) throw new HttpError(400, `Team member ${index + 1} needs a name.`);
		if (!isUrl(photoUrl)) throw new HttpError(400, `Team member ${index + 1} photo must be a full http(s) image URL, or left blank.`);
		return {
			name,
			role,
			photoUrl
		};
	});
}
function sanitiseFeatured(value) {
	if (!Array.isArray(value)) return [];
	const ids = value.filter((entry) => typeof entry === "string").map((entry) => entry.trim()).filter(Boolean);
	if (ids.length > 12) throw new HttpError(400, "Feature at most 12 listings.");
	for (const id of ids) if (!/^[A-Za-z0-9_-]{1,64}$/.test(id)) throw new HttpError(400, `"${id}" is not a listing id.`);
	return [...new Set(ids)];
}
function toPayload(row) {
	const features = parseJson$1(row.features, {});
	return {
		heroTitle: row.heroTitle,
		heroSubtitle: row.heroSubtitle,
		heroImage: row.heroImage ?? "",
		ctaText: row.ctaText,
		featuredProperties: parseJson$1(row.featuredProperties, []),
		theme: {
			...DEFAULT_THEME,
			...parseJson$1(row.theme, {})
		},
		features: { enableBlog: features.enableBlog === true },
		teamMembers: parseJson$1(row.teamMembers, []),
		updatedAt: row.updatedAt.toISOString(),
		updatedBy: row.updatedBy
	};
}
/** The published site content, or the shipped defaults when nothing is saved. */
async function getSiteSettings() {
	const row = await prisma.siteSettings.findUnique({ where: { id: "global" } });
	if (!row) return DEFAULT_SETTINGS;
	return toPayload(row);
}
/** Validate and persist the CMS form. Administrator only at the route. */
async function saveSiteSettings(input, updatedBy) {
	const body = input && typeof input === "object" ? input : {};
	const heroTitle = bounded(text(body["heroTitle"], DEFAULT_SETTINGS.heroTitle), 90, "Hero title");
	const heroSubtitle = bounded(text(body["heroSubtitle"], DEFAULT_SETTINGS.heroSubtitle), 220, "Hero subtitle");
	const heroImage = bounded(text(body["heroImage"], ""), 500, "Hero image URL");
	if (!isUrl(heroImage)) throw new HttpError(400, "The hero image must be a full http(s) URL, or left blank.");
	const ctaText = bounded(text(body["ctaText"], DEFAULT_SETTINGS.ctaText), 40, "Button text");
	const featuresInput = body["features"] && typeof body["features"] === "object" ? body["features"] : {};
	const data = {
		heroTitle,
		heroSubtitle,
		heroImage: heroImage || null,
		ctaText,
		featuredProperties: JSON.stringify(sanitiseFeatured(body["featuredProperties"])),
		theme: JSON.stringify(sanitiseTheme(body["theme"])),
		features: JSON.stringify({ enableBlog: featuresInput["enableBlog"] === true }),
		teamMembers: JSON.stringify(sanitiseTeam(body["teamMembers"])),
		updatedBy
	};
	return toPayload(await prisma.siteSettings.upsert({
		where: { id: "global" },
		create: {
			id: "global",
			...data
		},
		update: data
	}));
}
/**
* Site content.
*
* GET  /api/site-settings   public: what the marketing pages render.
* PUT  /api/site-settings   administrator only: save the site builder.
*
* The public read is cacheable for a short window; the write is always
* no-store and identifies the person who saved it.
*/
function json$8(body, status = 200, cache = "no-store") {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": cache
		}
	});
}
async function handleSiteSettings(request) {
	if (request.method === "GET" || request.method === "HEAD") try {
		return json$8({ settings: await getSiteSettings() }, 200, "public, max-age=60, stale-while-revalidate=300");
	} catch (error) {
		return jsonError(error);
	}
	if (request.method !== "PUT") return json$8({ error: "Method not allowed." }, 405);
	try {
		const user = await requireRole(request, ["ADMIN"]);
		const body = await request.json().catch(() => null);
		if (!body) return json$8({ error: "Send the site settings as JSON." }, 400);
		return json$8({ settings: await saveSiteSettings(body, user.email) });
	} catch (error) {
		return jsonError(error);
	}
}
var Route$31 = createFileRoute("/api/site-settings")({ server: { handlers: {
	GET: ({ request }) => handleSiteSettings(request),
	PUT: ({ request }) => handleSiteSettings(request)
} } });
/** Old hostel detail links now resolve to the listings index. */
var Route$30 = createFileRoute("/hostels/$id")({ beforeLoad: () => {
	throw redirect({ to: "/listings" });
} });
var $$splitComponentImporter$12 = () => import("./landlord.index-22yRRS_F.mjs");
var Route$29 = createFileRoute("/landlord/")({
	head: () => ({ meta: [{ title: "Dashboard · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./landlord.ads-DYWkNYeU.mjs");
var Route$28 = createFileRoute("/landlord/ads")({
	head: () => ({ meta: [{ title: "Ad boosts · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./landlord.listings-BXYGy5Iw.mjs");
var Route$27 = createFileRoute("/landlord/listings")({
	head: () => ({ meta: [{ title: "Listings · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./landlord.login-p71yw3xL.mjs");
var Route$26 = createFileRoute("/landlord/login")({
	head: () => ({ meta: [{ title: "Sign in · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./landlord.pending-0wAL41oS.mjs");
var Route$25 = createFileRoute("/landlord/pending")({
	head: () => ({ meta: [{ title: "Application under review · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./landlord.register-BNTTfXnP.mjs");
var Route$24 = createFileRoute("/landlord/register")({
	head: () => ({ meta: [{ title: "Register · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./landlord.rejected-Cv-83Iby.mjs");
var Route$23 = createFileRoute("/landlord/rejected")({
	head: () => ({ meta: [{ title: "Application not approved · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./landlord.suspended-CWwlO5ST.mjs");
var Route$22 = createFileRoute("/landlord/suspended")({
	head: () => ({ meta: [{ title: "Account suspended · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
/**
* Legacy property URLs used to forward into the hash-routed legacy app, which
* rendered a blank page when its data could not load. Property details now
* live at /listings/$id, so send old links to the listings index instead of a
* dead end.
*/
var Route$21 = createFileRoute("/properties/$id")({ beforeLoad: () => {
	throw redirect({ to: "/listings" });
} });
/** Legacy signup URL kept alive for old links and QR codes. */
var Route$20 = createFileRoute("/public/landlord-register")({ beforeLoad: () => {
	throw redirect({ to: "/landlord/register" });
} });
var $$splitComponentImporter$4 = () => import("./hostels_.new-wsVSwnlJ.mjs");
var Route$19 = createFileRoute("/admin/hostels_/new")({
	head: () => ({ meta: [{ title: "New hostel · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: async () => {
		await requireAdmin();
		return {};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./properties_._id-Ci8oXty_.mjs");
var Route$18 = createFileRoute("/admin/properties_/$id")({
	head: () => ({ meta: [{ title: "Edit property · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: ({ params }) => guardedLoader(() => routeOptions$6.loader({ params }), {
		property: null,
		categories: [],
		agents: []
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./properties_.new-C7lphkHE.mjs");
var Route$17 = createFileRoute("/admin/properties_/new")({
	head: () => ({ meta: [{ title: "New property · UniHub Admin" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: () => guardedLoader(() => routeOptions$6.loader({ params: {} }), {
		property: null,
		categories: [],
		agents: []
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
/**
* Landlord listings, listing moderation, boost requests and landlord vetting.
*
* Everything here reads and writes the Prisma database. The screens used to
* call Firestore directly, against a project that is not reachable from this
* deployment, so the dashboard could only ever show a connection error. These
* functions keep the same shapes the screens already consume — lowercase
* statuses, prices in KES — while the database stores cents and enum values.
*
* Ownership rules enforced here, not in the browser:
*   - A landlord only ever sees and edits their own listings.
*   - Only an APPROVED landlord can create a listing; a new listing starts as
*     PENDING and is invisible to students until an administrator publishes it.
*   - Moderation, featuring and boost approval require the ADMIN role at the
*     route, and are never accepted from a landlord request.
*/
var STATUS_TO_DB = {
	pending: "PENDING",
	published: "PUBLISHED",
	rejected: "REJECTED",
	hidden: "HIDDEN"
};
var STATUS_FROM_DB$1 = {
	PENDING: "pending",
	PUBLISHED: "published",
	REJECTED: "rejected",
	HIDDEN: "hidden",
	AVAILABLE: "published",
	RENTED: "hidden"
};
var LANDLORD_FROM_DB = {
	PENDING: "pending",
	APPROVED: "approved",
	REJECTED: "rejected",
	SUSPENDED: "suspended"
};
var LANDLORD_TO_DB = {
	pending: "PENDING",
	approved: "APPROVED",
	rejected: "REJECTED",
	suspended: "SUSPENDED"
};
var CATEGORY_FROM_TYPE = {
	bedsitter: "BEDSITTER",
	studio: "STUDIO",
	"single room": "SINGLE_ROOM",
	hostel: "HOSTEL",
	"one bedroom": "SHARED_APARTMENT",
	"two bedroom": "SHARED_APARTMENT",
	"three bedroom": "SHARED_APARTMENT",
	apartment: "SHARED_APARTMENT"
};
var TYPE_FROM_CATEGORY = {
	BEDSITTER: "Bedsitter",
	STUDIO: "Studio",
	SINGLE_ROOM: "Single room",
	HOSTEL: "Hostel",
	SHARED_APARTMENT: "Apartment"
};
var AD_PLAN_DAYS = {
	free: 7,
	basic: 14,
	pro: 30,
	premium: 90,
	week: 7,
	fortnight: 14,
	month: 30
};
function parseList(value) {
	if (!value) return [];
	try {
		const parsed = JSON.parse(value);
		return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
	} catch {
		return [];
	}
}
function toRow(row) {
	return {
		id: row.id,
		title: row.title,
		type: TYPE_FROM_CATEGORY[row.category] ?? row.category,
		category: row.category,
		campus: row.university ?? "",
		location: row.location,
		price: Math.round(row.price / 100),
		deposit: Math.round(row.deposit / 100),
		description: row.description,
		amenities: parseList(row.amenities),
		images: parseList(row.images),
		landlordName: row.landlord.user.name ?? row.landlord.businessName,
		ownerUid: row.landlord.user.id,
		landlordId: row.landlordId,
		inquiries: row.inquiries,
		status: STATUS_FROM_DB$1[row.status] ?? "hidden",
		adStatus: [
			"live",
			"requested",
			"expired",
			"inactive"
		].includes(row.adStatus) ? row.adStatus : "inactive",
		...row.adPlan ? { adPlan: row.adPlan } : {},
		...row.adExpiresAt ? { adExpiresAt: row.adExpiresAt.toISOString() } : {},
		featured: row.featured,
		...row.reviewNote ? { reviewNote: row.reviewNote } : {},
		createdAt: row.createdAt.toISOString(),
		updatedAt: row.updatedAt.toISOString()
	};
}
var LISTING_INCLUDE = { landlord: { select: {
	businessName: true,
	user: { select: {
		id: true,
		name: true
	} }
} } };
function clean$1(value) {
	return typeof value === "string" ? value.trim() : "";
}
async function landlordFor(userId) {
	const profile = await prisma.landlordProfile.findUnique({
		where: { userId },
		select: {
			id: true,
			status: true
		}
	});
	if (!profile) throw new HttpError(403, "This account has no landlord profile, so it cannot manage listings.");
	return profile;
}
async function listLandlordListings(userId) {
	const profile = await landlordFor(userId);
	return (await prisma.listing.findMany({
		where: { landlordId: profile.id },
		include: LISTING_INCLUDE,
		orderBy: { createdAt: "desc" }
	})).map(toRow);
}
async function createListing(userId, input) {
	const profile = await landlordFor(userId);
	if (profile.status !== "APPROVED") throw new HttpError(403, "Only an approved landlord can add a listing. Your application is still being reviewed.");
	const title = clean$1(input.title);
	const location = clean$1(input.location);
	const campus = clean$1(input.campus);
	const description = clean$1(input.description);
	const type = clean$1(input.type);
	if (title.length < 5 || title.length > 120) throw new HttpError(400, "Give the listing a title of 5 to 120 characters.");
	if (!location) throw new HttpError(400, "Enter the specific location of the property.");
	if (!campus) throw new HttpError(400, "Choose the campus or town the property serves.");
	if (!type) throw new HttpError(400, "Choose the property type.");
	if (!Number.isFinite(input.price) || input.price < 1e3) throw new HttpError(400, "Enter the monthly rent in KES (at least 1,000).");
	if (!Number.isFinite(input.deposit) || input.deposit < 0) throw new HttpError(400, "Enter the deposit in KES, or leave it at zero.");
	if (description.length < 40) throw new HttpError(400, "Describe the property in at least 40 characters.");
	const category = CATEGORY_FROM_TYPE[type.toLowerCase()] ?? "BEDSITTER";
	const images = Array.isArray(input.images) ? input.images.filter(Boolean).slice(0, 10) : [];
	const amenities = Array.isArray(input.amenities) ? input.amenities.filter(Boolean).slice(0, 20) : [];
	return (await prisma.listing.create({
		data: {
			title,
			description,
			price: Math.round(input.price * 100),
			deposit: Math.round(input.deposit * 100),
			category,
			location,
			university: campus,
			images: JSON.stringify(images),
			amenities: JSON.stringify(amenities),
			status: "PENDING",
			isVerified: false,
			landlordId: profile.id,
			userId
		},
		select: { id: true }
	})).id;
}
async function ownedListing(userId, id) {
	const profile = await landlordFor(userId);
	const listing = await prisma.listing.findFirst({
		where: {
			id,
			landlordId: profile.id
		},
		select: {
			id: true,
			status: true
		}
	});
	if (!listing) throw new HttpError(404, "That listing is not on your account.");
	return listing;
}
async function deleteListing(userId, id) {
	await ownedListing(userId, id);
	await prisma.listing.delete({ where: { id } });
}
async function updateListingStatus(userId, id, status) {
	const listing = await ownedListing(userId, id);
	if (listing.status === "PENDING" || listing.status === "REJECTED") throw new HttpError(403, "A listing that is awaiting review or was rejected cannot be published from the portal.");
	await prisma.listing.update({
		where: { id },
		data: { status: status === "published" ? "PUBLISHED" : "HIDDEN" }
	});
}
async function requestAd(userId, id, planId) {
	if (!AD_PLAN_DAYS[planId]) throw new HttpError(400, "Choose one of the available boost plans.");
	await ownedListing(userId, id);
	await prisma.listing.update({
		where: { id },
		data: {
			adStatus: "requested",
			adPlan: planId,
			adExpiresAt: null
		}
	});
}
async function listAllListings() {
	return (await prisma.listing.findMany({
		include: LISTING_INCLUDE,
		orderBy: { createdAt: "desc" }
	})).map(toRow);
}
async function moderateListing(id, status, note) {
	if (!await prisma.listing.findUnique({
		where: { id },
		select: { id: true }
	})) throw new HttpError(404, "That listing does not exist.");
	await prisma.listing.update({
		where: { id },
		data: {
			status: STATUS_TO_DB[status],
			isVerified: status === "published",
			...note === void 0 ? {} : { reviewNote: note }
		}
	});
}
async function setFeatured(id, featured) {
	if (!await prisma.listing.findUnique({
		where: { id },
		select: { id: true }
	})) throw new HttpError(404, "That listing does not exist.");
	await prisma.listing.update({
		where: { id },
		data: { featured }
	});
}
async function reviewAd(id, approved) {
	const listing = await prisma.listing.findUnique({
		where: { id },
		select: {
			id: true,
			adPlan: true
		}
	});
	if (!listing) throw new HttpError(404, "That listing does not exist.");
	if (!approved) {
		await prisma.listing.update({
			where: { id },
			data: {
				adStatus: "inactive",
				adPlan: null,
				adExpiresAt: null
			}
		});
		return;
	}
	const days = AD_PLAN_DAYS[listing.adPlan ?? ""] ?? 7;
	const expires = /* @__PURE__ */ new Date();
	expires.setDate(expires.getDate() + days);
	await prisma.listing.update({
		where: { id },
		data: {
			adStatus: "live",
			adExpiresAt: expires
		}
	});
}
async function listLandlords() {
	return (await prisma.landlordProfile.findMany({
		include: { user: { select: {
			id: true,
			email: true,
			name: true
		} } },
		orderBy: { createdAt: "desc" }
	})).map((row) => ({
		id: row.id,
		fullName: row.user.name ?? "",
		businessName: row.businessName,
		email: row.user.email,
		phone: row.phone,
		whatsapp: row.whatsappNumber,
		idNumber: row.nationalId ?? "",
		areas: parseList(row.targetCampuses).join(", "),
		propertyCount: row.estimatedProperties,
		status: LANDLORD_FROM_DB[row.status] ?? "pending",
		reviewNote: row.reviewNote ?? ""
	})).sort((a, b) => a.fullName.localeCompare(b.fullName));
}
async function reviewLandlord(id, status, note) {
	if (!await prisma.landlordProfile.findUnique({
		where: { id },
		select: { id: true }
	})) throw new HttpError(404, "That landlord profile does not exist.");
	await prisma.landlordProfile.update({
		where: { id },
		data: {
			status: LANDLORD_TO_DB[status],
			...note === void 0 ? {} : { reviewNote: note }
		}
	});
}
/**
* Landlord applications, for the admin vetting queue.
*
* GET /api/admin/landlords
*
* ADMIN only. Includes the national ID because the reviewer needs it to match
* the documents; it is never exposed on a public route.
*/
async function handleAdminLandlords(request) {
	try {
		await requireRole(request, ["ADMIN"]);
		const landlords = await listLandlords();
		return new Response(JSON.stringify({ landlords }), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		return jsonError(error);
	}
}
var Route$16 = createFileRoute("/api/admin/landlords")({ server: { handlers: { GET: ({ request }) => handleAdminLandlords(request) } } });
/**
* Every listing, for the admin moderation queue.
*
* GET /api/admin/listings
*
* ADMIN only. The role is read from the database against the session, so a
* landlord or viewer cannot reach moderation data by calling the URL.
*/
async function handleAdminListings(request) {
	try {
		await requireRole(request, ["ADMIN"]);
		const listings = await listAllListings();
		return new Response(JSON.stringify({ listings }), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		return jsonError(error);
	}
}
var Route$15 = createFileRoute("/api/admin/listings")({ server: { handlers: { GET: ({ request }) => handleAdminListings(request) } } });
/**
* Administrator content, backed by SQLite.
*
* The admin console used to read these collections straight from Firestore,
* which meant the screens were empty whenever the browser had no network —
* and the offline build has no network at all. Everything here goes through
* Prisma so the console shows the same rows as the rest of the app.
*
* The public shapes are the ones in `@/shared/types/admin`; snake_case and
* JSON-string columns exist only at this boundary.
*/
function parseJson(value, fallback) {
	if (!value) return fallback;
	try {
		return JSON.parse(value);
	} catch {
		return fallback;
	}
}
function asString$1(value, field) {
	if (typeof value !== "string" || value.trim() === "") throw new HttpError(400, `${field} is required.`);
	return value.trim();
}
function asOptionalString(value) {
	return typeof value === "string" && value.trim() !== "" ? value.trim() : void 0;
}
function asNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value === "string" && value.trim() !== "") {
		const parsed = Number(value);
		if (Number.isFinite(parsed)) return parsed;
	}
}
function asBoolean(value, fallback = false) {
	return typeof value === "boolean" ? value : fallback;
}
function asStringArray$1(value) {
	return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
function asMedia(value) {
	if (!Array.isArray(value)) return [];
	return value.filter((item) => Boolean(item) && typeof item === "object" && typeof item.secure_url === "string");
}
function agentOut(row) {
	return {
		id: row.id,
		name: row.name,
		phone: row.phone,
		whatsappNumber: row.whatsappNumber,
		...row.profilePhotoUrl ? { profilePhotoURL: row.profilePhotoUrl } : {},
		isActive: row.isActive
	};
}
async function listAgents() {
	return (await prisma.agent.findMany({ orderBy: { name: "asc" } })).map(agentOut);
}
async function createAgent(body) {
	return agentOut(await prisma.agent.create({ data: {
		name: asString$1(body["name"], "Name"),
		phone: asString$1(body["phone"], "Phone"),
		whatsappNumber: asOptionalString(body["whatsappNumber"]) ?? asString$1(body["phone"], "Phone"),
		profilePhotoUrl: asOptionalString(body["profilePhotoURL"]) ?? null,
		isActive: asBoolean(body["isActive"], true)
	} }));
}
async function updateAgent(id, body) {
	return agentOut(await prisma.agent.update({
		where: { id },
		data: {
			...body["name"] !== void 0 ? { name: asString$1(body["name"], "Name") } : {},
			...body["phone"] !== void 0 ? { phone: asString$1(body["phone"], "Phone") } : {},
			...body["whatsappNumber"] !== void 0 ? { whatsappNumber: asString$1(body["whatsappNumber"], "WhatsApp number") } : {},
			...body["profilePhotoURL"] !== void 0 ? { profilePhotoUrl: asOptionalString(body["profilePhotoURL"]) ?? null } : {},
			...body["isActive"] !== void 0 ? { isActive: asBoolean(body["isActive"], true) } : {}
		}
	}));
}
async function listCategories() {
	return (await prisma.category.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] })).map((row) => ({
		id: row.id,
		name: row.name,
		slug: row.slug,
		isActive: row.isActive,
		order: row.sortOrder
	}));
}
async function createCategory(body) {
	const name = asString$1(body["name"], "Name");
	const slug = asOptionalString(body["slug"]) ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
	const row = await prisma.category.create({ data: {
		name,
		slug,
		isActive: asBoolean(body["isActive"], true),
		sortOrder: asNumber(body["order"]) ?? 0
	} });
	return {
		id: row.id,
		name: row.name,
		slug: row.slug,
		isActive: row.isActive,
		order: row.sortOrder
	};
}
async function updateCategory(id, body) {
	const row = await prisma.category.update({
		where: { id },
		data: {
			...body["name"] !== void 0 ? { name: asString$1(body["name"], "Name") } : {},
			...body["slug"] !== void 0 ? { slug: asString$1(body["slug"], "Slug") } : {},
			...body["isActive"] !== void 0 ? { isActive: asBoolean(body["isActive"], true) } : {},
			...body["order"] !== void 0 ? { sortOrder: asNumber(body["order"]) ?? 0 } : {}
		}
	});
	return {
		id: row.id,
		name: row.name,
		slug: row.slug,
		isActive: row.isActive,
		order: row.sortOrder
	};
}
function propertyOut(row) {
	return {
		id: row.id,
		title: row.title,
		categoryId: row.categoryId,
		price: row.price,
		...row.deposit === null ? {} : { deposit: row.deposit },
		location: row.location,
		...row.latitude === null || row.longitude === null ? {} : { coordinates: {
			lat: row.latitude,
			lng: row.longitude
		} },
		description: row.description,
		features: parseJson(row.features, []),
		agentId: row.agentId,
		status: row.status,
		media: parseJson(row.media, []),
		createdAt: row.createdAt,
		updatedAt: row.updatedAt
	};
}
async function listProperties() {
	return (await prisma.property.findMany({ orderBy: { createdAt: "desc" } })).map(propertyOut);
}
async function getProperty(id) {
	const row = await prisma.property.findUnique({ where: { id } });
	return row ? propertyOut(row) : null;
}
async function createProperty(body) {
	const coordinates = body["coordinates"] ?? {};
	return propertyOut(await prisma.property.create({ data: {
		title: asString$1(body["title"], "Title"),
		categoryId: asString$1(body["categoryId"], "Category"),
		price: asNumber(body["price"]) ?? 0,
		deposit: asNumber(body["deposit"]) ?? null,
		location: asString$1(body["location"], "Location"),
		latitude: asNumber(coordinates.lat) ?? null,
		longitude: asNumber(coordinates.lng) ?? null,
		description: asOptionalString(body["description"]) ?? "",
		features: JSON.stringify(asStringArray$1(body["features"])),
		agentId: asOptionalString(body["agentId"]) ?? "",
		status: asOptionalString(body["status"]) ?? "available",
		media: JSON.stringify(asMedia(body["media"]))
	} }));
}
async function updateProperty(id, body) {
	const coordinates = body["coordinates"];
	return propertyOut(await prisma.property.update({
		where: { id },
		data: {
			...body["title"] !== void 0 ? { title: asString$1(body["title"], "Title") } : {},
			...body["categoryId"] !== void 0 ? { categoryId: asString$1(body["categoryId"], "Category") } : {},
			...body["price"] !== void 0 ? { price: asNumber(body["price"]) ?? 0 } : {},
			...body["deposit"] !== void 0 ? { deposit: asNumber(body["deposit"]) ?? null } : {},
			...body["location"] !== void 0 ? { location: asString$1(body["location"], "Location") } : {},
			...coordinates?.lat !== void 0 ? { latitude: asNumber(coordinates.lat) ?? null } : {},
			...coordinates?.lng !== void 0 ? { longitude: asNumber(coordinates.lng) ?? null } : {},
			...body["description"] !== void 0 ? { description: asOptionalString(body["description"]) ?? "" } : {},
			...body["features"] !== void 0 ? { features: JSON.stringify(asStringArray$1(body["features"])) } : {},
			...body["agentId"] !== void 0 ? { agentId: asOptionalString(body["agentId"]) ?? "" } : {},
			...body["status"] !== void 0 ? { status: asOptionalString(body["status"]) ?? "available" } : {},
			...body["media"] !== void 0 ? { media: JSON.stringify(asMedia(body["media"])) } : {}
		}
	}));
}
function universityOut(row) {
	return {
		id: row.id,
		name: row.name,
		slug: row.slug,
		...row.logoUrl ? { logo_url: row.logoUrl } : {},
		location: row.location,
		...row.contactEmail ? { contact_email: row.contactEmail } : {},
		...row.contactPhone ? { contact_phone: row.contactPhone } : {},
		description: row.description,
		verified: row.verified,
		...row.adminUserId ? { admin_user_id: row.adminUserId } : {},
		status: row.status === "inactive" ? "inactive" : "active",
		metadata: {
			...row.foundedYear === null ? {} : { founded_year: row.foundedYear },
			...row.studentCount === null ? {} : { student_count: row.studentCount }
		},
		createdAt: row.createdAt,
		updatedAt: row.updatedAt
	};
}
async function listUniversities() {
	return (await prisma.university.findMany({ orderBy: { name: "asc" } })).map(universityOut);
}
async function createUniversity(body) {
	const name = asString$1(body["name"], "Name");
	const metadata = body["metadata"] ?? {};
	return universityOut(await prisma.university.create({ data: {
		name,
		slug: asOptionalString(body["slug"]) ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
		logoUrl: asOptionalString(body["logo_url"]) ?? null,
		location: asOptionalString(body["location"]) ?? "",
		contactEmail: asOptionalString(body["contact_email"]) ?? null,
		contactPhone: asOptionalString(body["contact_phone"]) ?? null,
		description: asOptionalString(body["description"]) ?? "",
		verified: asBoolean(body["verified"]),
		adminUserId: asOptionalString(body["admin_user_id"]) ?? null,
		status: asOptionalString(body["status"]) ?? "active",
		foundedYear: asNumber(metadata.founded_year) ?? null,
		studentCount: asNumber(metadata.student_count) ?? null
	} }));
}
async function updateUniversity(id, body) {
	const metadata = body["metadata"] ?? {};
	return universityOut(await prisma.university.update({
		where: { id },
		data: {
			...body["name"] !== void 0 ? { name: asString$1(body["name"], "Name") } : {},
			...body["slug"] !== void 0 ? { slug: asString$1(body["slug"], "Slug") } : {},
			...body["logo_url"] !== void 0 ? { logoUrl: asOptionalString(body["logo_url"]) ?? null } : {},
			...body["location"] !== void 0 ? { location: asOptionalString(body["location"]) ?? "" } : {},
			...body["contact_email"] !== void 0 ? { contactEmail: asOptionalString(body["contact_email"]) ?? null } : {},
			...body["contact_phone"] !== void 0 ? { contactPhone: asOptionalString(body["contact_phone"]) ?? null } : {},
			...body["description"] !== void 0 ? { description: asOptionalString(body["description"]) ?? "" } : {},
			...body["verified"] !== void 0 ? { verified: asBoolean(body["verified"]) } : {},
			...body["admin_user_id"] !== void 0 ? { adminUserId: asOptionalString(body["admin_user_id"]) ?? null } : {},
			...body["status"] !== void 0 ? { status: asString$1(body["status"], "Status") } : {},
			...metadata.founded_year !== void 0 ? { foundedYear: asNumber(metadata.founded_year) ?? null } : {},
			...metadata.student_count !== void 0 ? { studentCount: asNumber(metadata.student_count) ?? null } : {}
		}
	}));
}
function hostelOut(row) {
	return {
		id: row.id,
		universityId: row.universityId,
		name: row.name,
		location: row.location,
		description: row.description,
		hostel_type: row.hostelType,
		images: parseJson(row.images, []),
		amenities: parseJson(row.amenities, []),
		...row.wardenName ? { warden_name: row.wardenName } : {},
		...row.wardenPhone ? { warden_phone: row.wardenPhone } : {},
		...row.wardenEmail ? { warden_email: row.wardenEmail } : {},
		status: row.status === "inactive" ? "inactive" : "active",
		createdAt: row.createdAt,
		updatedAt: row.updatedAt
	};
}
async function listHostels(universityId) {
	return (await prisma.hostel.findMany({
		...universityId ? { where: { universityId } } : {},
		orderBy: { name: "asc" }
	})).map(hostelOut);
}
async function createHostel(body) {
	return hostelOut(await prisma.hostel.create({ data: {
		universityId: asString$1(body["universityId"], "University"),
		name: asString$1(body["name"], "Name"),
		location: asOptionalString(body["location"]) ?? "",
		description: asOptionalString(body["description"]) ?? "",
		hostelType: asOptionalString(body["hostel_type"]) ?? "mixed",
		images: JSON.stringify(asMedia(body["images"])),
		amenities: JSON.stringify(asStringArray$1(body["amenities"])),
		wardenName: asOptionalString(body["warden_name"]) ?? null,
		wardenPhone: asOptionalString(body["warden_phone"]) ?? null,
		wardenEmail: asOptionalString(body["warden_email"]) ?? null,
		status: asOptionalString(body["status"]) ?? "active"
	} }));
}
async function updateHostel(id, body) {
	return hostelOut(await prisma.hostel.update({
		where: { id },
		data: {
			...body["universityId"] !== void 0 ? { universityId: asString$1(body["universityId"], "University") } : {},
			...body["name"] !== void 0 ? { name: asString$1(body["name"], "Name") } : {},
			...body["location"] !== void 0 ? { location: asOptionalString(body["location"]) ?? "" } : {},
			...body["description"] !== void 0 ? { description: asOptionalString(body["description"]) ?? "" } : {},
			...body["hostel_type"] !== void 0 ? { hostelType: asOptionalString(body["hostel_type"]) ?? "mixed" } : {},
			...body["images"] !== void 0 ? { images: JSON.stringify(asMedia(body["images"])) } : {},
			...body["amenities"] !== void 0 ? { amenities: JSON.stringify(asStringArray$1(body["amenities"])) } : {},
			...body["warden_name"] !== void 0 ? { wardenName: asOptionalString(body["warden_name"]) ?? null } : {},
			...body["warden_phone"] !== void 0 ? { wardenPhone: asOptionalString(body["warden_phone"]) ?? null } : {},
			...body["warden_email"] !== void 0 ? { wardenEmail: asOptionalString(body["warden_email"]) ?? null } : {},
			...body["status"] !== void 0 ? { status: asString$1(body["status"], "Status") } : {}
		}
	}));
}
async function getAdminSettings() {
	const row = await prisma.siteSettings.findUnique({ where: { id: "global" } });
	if (!row) return {
		siteName: "UniHub",
		siteUrl: "",
		adminEmail: "",
		maintenanceMode: false,
		maintenanceMessage: "We are currently performing scheduled maintenance.",
		heroTitle: "",
		heroSubtitle: "",
		ctaText: ""
	};
	return {
		siteName: row.siteName,
		siteUrl: row.siteUrl,
		adminEmail: row.adminEmail,
		maintenanceMode: row.maintenanceMode,
		maintenanceMessage: row.maintenanceMessage,
		heroTitle: row.heroTitle,
		heroSubtitle: row.heroSubtitle,
		ctaText: row.ctaText,
		updatedAt: row.updatedAt.toISOString()
	};
}
async function updateAdminSettings(body) {
	const current = await prisma.siteSettings.findUnique({ where: { id: "global" } });
	const data = {
		siteName: asOptionalString(body["siteName"]) ?? current?.siteName ?? "UniHub",
		siteUrl: typeof body["siteUrl"] === "string" ? body["siteUrl"] : current?.siteUrl ?? "",
		adminEmail: typeof body["adminEmail"] === "string" ? body["adminEmail"] : current?.adminEmail ?? "",
		maintenanceMode: asBoolean(body["maintenanceMode"], current?.maintenanceMode ?? false),
		maintenanceMessage: asOptionalString(body["maintenanceMessage"]) ?? current?.maintenanceMessage ?? "We are currently performing scheduled maintenance."
	};
	if (current) await prisma.siteSettings.update({
		where: { id: "global" },
		data
	});
	else await prisma.siteSettings.create({ data: {
		id: "global",
		...data,
		heroTitle: "Find student housing near your campus",
		heroSubtitle: "Verified hostels, bedsitters and apartments across Kenya.",
		ctaText: "Browse listings"
	} });
	return getAdminSettings();
}
/**
* The administrator's site settings.
*
* GET /api/admin/settings   the current values
* PUT /api/admin/settings   save the general tab
*
* ADMIN only. These rows used to live in Firestore, which is why the page
* silently fell back to defaults whenever the network was unavailable.
*/
function json$7(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
async function handleAdminSettings(request) {
	try {
		await requireRole(request, ["ADMIN"]);
		if (request.method === "GET") return json$7({ settings: await getAdminSettings() });
		if (request.method !== "PUT") return json$7({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) throw new HttpError(400, "Send the settings as JSON.");
		return json$7({ settings: await updateAdminSettings(body) });
	} catch (error) {
		return jsonError(error);
	}
}
var Route$14 = createFileRoute("/api/admin/settings")({ server: { handlers: {
	GET: ({ request }) => handleAdminSettings(request),
	PUT: ({ request }) => handleAdminSettings(request)
} } });
/**
* Better Auth request handler.
*
* TanStack Start only mounts a route file that exports a `Route`, so the
* handler is registered here with the server `handlers` option. The splat
* route id (`/api/auth/$`) is what the client in `src/lib/auth-client.ts`
* calls for every auth request.
*/
var Route$13 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
/**
* The consent ledger.
*
* GET /api/consent/ledger          every consent record, as JSON.
* GET /api/consent/ledger?format=csv  the same records, as a CSV export for
* the compliance file.
*
* Access is checked on the server against the role on the signed session, so
* hiding the link is never what keeps the ledger private.
*/
var Route$12 = createFileRoute("/api/consent/ledger")({ server: { handlers: { GET: ({ request }) => handleConsentLedgerRequest(request) } } });
/**
* Import and export of platform data.
*
* Exports are written as CSV so a person exercising the right to data
* portability (Act, 2019 s.38) receives a structured, commonly used and
* machine-readable file, and so an administrator can move data between
* environments.
*
* Two rules are enforced here rather than left to the caller:
*   1. A field that is never published — the national ID number, the review
*      note, the session details — is never written to an export.
*   2. An import is validated before anything is stored. A row that fails
*      validation is reported and skipped; it is never stored half-made.
*/
var ESCAPE_NEEDED = /[",\n\r]/;
function csvCell(value) {
	if (value === null || value === void 0) return "";
	const text = value instanceof Date ? value.toISOString() : String(value);
	return ESCAPE_NEEDED.test(text) ? `"${text.replace(/"/g, "\"\"")}"` : text;
}
function toCsv(headers, rows) {
	const lines = [headers.join(",")];
	for (const row of rows) lines.push(headers.map((header) => csvCell(row[header])).join(","));
	return lines.join("\n");
}
var LISTING_EXPORT_COLUMNS = [
	"id",
	"title",
	"category",
	"location",
	"priceKsh",
	"depositKsh",
	"university",
	"distanceFromCampus",
	"amenities",
	"status",
	"isVerified",
	"createdAt"
];
var EXTRACTED_EXPORT_COLUMNS = [
	"id",
	"hostelName",
	"campus",
	"category",
	"rentKsh",
	"capacity",
	"distanceKm",
	"sourceFile",
	"sourceLine",
	"confidence",
	"importedAt"
];
/**
* Listings as CSV. Only fields a student can already see are included.
* The landlord's national ID number and review notes are deliberately absent.
*/
async function exportListingsCsv() {
	return toCsv(LISTING_EXPORT_COLUMNS, (await prisma.listing.findMany({
		orderBy: { createdAt: "asc" },
		select: {
			id: true,
			title: true,
			category: true,
			location: true,
			price: true,
			deposit: true,
			university: true,
			distanceFromCampus: true,
			amenities: true,
			status: true,
			isVerified: true,
			createdAt: true
		}
	})).map((listing) => ({
		id: listing.id,
		title: listing.title,
		category: listing.category,
		location: listing.location,
		priceKsh: listing.price,
		depositKsh: listing.deposit,
		university: listing.university ?? "",
		distanceFromCampus: listing.distanceFromCampus ?? "",
		amenities: listing.amenities,
		status: listing.status,
		isVerified: listing.isVerified,
		createdAt: listing.createdAt
	})));
}
/** Imported hostel records as CSV. */
async function exportExtractedRecordsCsv() {
	return toCsv(EXTRACTED_EXPORT_COLUMNS, (await prisma.extractedHostelRecord.findMany({ orderBy: [{ campus: "asc" }, { hostelName: "asc" }] })).map((record) => ({
		id: record.id,
		hostelName: record.hostelName,
		campus: record.campus,
		category: record.category,
		rentKsh: record.rentKsh,
		capacity: record.capacity ?? "",
		distanceKm: record.distanceKm ?? "",
		sourceFile: record.sourceFile,
		sourceLine: record.sourceLine,
		confidence: record.confidence ?? "",
		importedAt: record.importedAt
	})));
}
var IMPORT_COLUMNS = [
	"hostelName",
	"campus",
	"category",
	"rentKsh",
	"capacity",
	"distanceKm",
	"sourceFile",
	"sourceLine"
];
var VALID_CATEGORIES = /* @__PURE__ */ new Set([
	"Hostel",
	"Bedsitter",
	"Single Room",
	"Studio",
	"Shared Apartment"
]);
/** Split one CSV line, honouring quoted fields that contain a comma. */
function parseCsvLine(line) {
	const cells = [];
	let current = "";
	let inQuotes = false;
	for (let index = 0; index < line.length; index += 1) {
		const character = line[index];
		if (inQuotes) {
			if (character === "\"") if (line[index + 1] === "\"") {
				current += "\"";
				index += 1;
			} else inQuotes = false;
			else current += character;
			continue;
		}
		if (character === "\"") {
			inQuotes = true;
			continue;
		}
		if (character === ",") {
			cells.push(current);
			current = "";
			continue;
		}
		current += character;
	}
	cells.push(current);
	return cells.map((cell) => cell.trim());
}
function toOptionalNumber(value) {
	if (!value) return null;
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : null;
}
/**
* Import hostel records from CSV.
*
* The header row is required and must name the expected columns; extra
* columns are ignored, missing ones are an error. Every row is validated
* before it is stored.
*/
async function importExtractedRecordsCsv(csv) {
	const lines = csv.split(/\r?\n/).map((line) => line.trim()).filter((line) => line.length > 0);
	const result = {
		accepted: 0,
		rejected: 0,
		errors: []
	};
	if (lines.length === 0) {
		result.errors.push({
			line: 0,
			reason: "the file is empty",
			value: ""
		});
		result.rejected += 1;
		return result;
	}
	const firstLine = lines[0] ?? "";
	const header = parseCsvLine(firstLine).map((cell) => cell.toLowerCase());
	const missing = IMPORT_COLUMNS.filter((column) => !header.includes(column.toLowerCase()));
	if (missing.length > 0) {
		result.errors.push({
			line: 1,
			reason: `missing required column(s): ${missing.join(", ")}`,
			value: firstLine
		});
		result.rejected += 1;
		return result;
	}
	const indexOf = (column) => header.indexOf(column.toLowerCase());
	for (let offset = 1; offset < lines.length; offset += 1) {
		const lineNumber = offset + 1;
		const cells = parseCsvLine(lines[offset] ?? "");
		const getValue = (column) => cells[indexOf(column)] ?? "";
		const hostelName = getValue("hostelName");
		const campus = getValue("campus");
		const category = getValue("category");
		const rentKsh = toOptionalNumber(getValue("rentKsh"));
		if (!hostelName) {
			result.rejected += 1;
			const lineValue = lines[offset] ?? "";
			result.errors.push({
				line: lineNumber,
				reason: "the hostel name is missing",
				value: lineValue
			});
			continue;
		}
		if (!campus) {
			result.rejected += 1;
			const lineValue = lines[offset] ?? "";
			result.errors.push({
				line: lineNumber,
				reason: "the campus is missing",
				value: lineValue
			});
			continue;
		}
		if (!VALID_CATEGORIES.has(category)) {
			result.rejected += 1;
			const lineValue = lines[offset] ?? "";
			result.errors.push({
				line: lineNumber,
				reason: `unknown category "${category}"`,
				value: lineValue
			});
			continue;
		}
		if (rentKsh === null || rentKsh <= 0) {
			result.rejected += 1;
			const lineValue = lines[offset] ?? "";
			result.errors.push({
				line: lineNumber,
				reason: "the rent is missing or is not a number",
				value: lineValue
			});
			continue;
		}
		const capacityValue = toOptionalNumber(getValue("capacity"));
		const distanceKmValue = toOptionalNumber(getValue("distanceKm"));
		const createData = {
			hostelName,
			campus,
			category,
			rentKsh: Math.round(rentKsh),
			sourceFile: getValue("sourceFile") || "import",
			sourceLine: getValue("sourceLine") || `line ${lineNumber}`,
			confidence: 1
		};
		if (capacityValue !== null) createData["capacity"] = capacityValue;
		if (distanceKmValue !== null) createData["distanceKm"] = distanceKmValue;
		const updateData = {
			category,
			rentKsh: Math.round(rentKsh),
			sourceFile: getValue("sourceFile") || "import",
			sourceLine: getValue("sourceLine") || `line ${lineNumber}`
		};
		if (capacityValue !== null) updateData["capacity"] = capacityValue;
		if (distanceKmValue !== null) updateData["distanceKm"] = distanceKmValue;
		await prisma.extractedHostelRecord.upsert({
			where: { hostelName_campus: {
				hostelName,
				campus
			} },
			create: createData,
			update: updateData
		});
		result.accepted += 1;
	}
	return result;
}
function json$6(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
/**
* GET /api/data/export?type=listings|extracted|consent
*
* Returns CSV export for the requested dataset.
* - listings: all platform listings (ADMIN only)
* - extracted: imported hostel records from public notices (ADMIN only)
* - consent: the caller's own consent records (any signed-in user)
*
* ADMIN routes check role on the server; hiding the link is never what keeps
* the data private.
*/
var Route$11 = createFileRoute("/api/data/export")({ server: { handlers: { GET: async ({ request }) => {
	const type = new URL(request.url).searchParams.get("type");
	if (type === "consent") return handleConsentRequest(request);
	try {
		await requireRole(request, ["ADMIN"]);
	} catch (error) {
		return jsonError(error);
	}
	if (type === "listings") {
		const csv = await exportListingsCsv();
		return new Response(csv, {
			status: 200,
			headers: {
				"content-type": "text/csv; charset=utf-8",
				"content-disposition": "attachment; filename=\"unihub-listings.csv\"",
				"cache-control": "no-store"
			}
		});
	}
	if (type === "extracted") {
		const csv = await exportExtractedRecordsCsv();
		return new Response(csv, {
			status: 200,
			headers: {
				"content-type": "text/csv; charset=utf-8",
				"content-disposition": "attachment; filename=\"unihub-extracted-hostels.csv\"",
				"cache-control": "no-store"
			}
		});
	}
	return json$6({ error: "Unknown export type. Use type=listings|extracted|consent" }, 400);
} } } });
function json$5(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
/**
* POST /api/data/import/extracted
*
* Imports hostel records from a CSV file (multipart/form-data with field "file").
* Only ADMIN can import. The CSV must contain the required columns:
* hostelName, campus, category, rentKsh, capacity, distanceKm, sourceFile, sourceLine
*
* Validation: every row is checked before storage. Invalid rows are rejected and reported.
* Duplicate (hostelName, campus) pairs are upserted.
*/
var Route$10 = createFileRoute("/api/data/import")({ server: { handlers: { POST: async ({ request }) => {
	try {
		await requireRole(request, ["ADMIN"]);
	} catch (error) {
		return jsonError(error);
	}
	if (!(request.headers.get("content-type") ?? "").includes("multipart/form-data")) return json$5({ error: "Request must be multipart/form-data with a file field named 'file'" }, 400);
	const file = (await request.formData()).get("file");
	if (!file || typeof file === "string") return json$5({ error: "No file uploaded. Use a 'file' field in the multipart form." }, 400);
	const result = await importExtractedRecordsCsv(await file.text());
	return json$5({
		imported: result.accepted,
		rejected: result.rejected,
		errors: result.errors
	});
} } } });
/**
* A landlord's own listings.
*
* GET  /api/landlord/listings   list only the caller's listings
* POST /api/landlord/listings   create a listing awaiting admin review
*
* The owner is taken from the session, never from the body, so one landlord
* cannot create or read another landlord's listings.
*/
function json$4(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
function strings(value) {
	return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
async function handleLandlordListings(request) {
	try {
		const user = await requireRole(request, ["LANDLORD", "ADMIN"]);
		if (request.method === "GET") return json$4({ listings: await listLandlordListings(user.id) });
		if (request.method !== "POST") return json$4({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) return json$4({ error: "Send the listing as JSON." }, 400);
		return json$4({
			id: await createListing(user.id, {
				title: typeof body["title"] === "string" ? body["title"] : "",
				campus: typeof body["campus"] === "string" ? body["campus"] : "",
				location: typeof body["location"] === "string" ? body["location"] : "",
				type: typeof body["type"] === "string" ? body["type"] : "",
				price: Number(body["price"] ?? 0),
				deposit: Number(body["deposit"] ?? 0),
				description: typeof body["description"] === "string" ? body["description"] : "",
				amenities: strings(body["amenities"]),
				images: strings(body["images"]),
				landlordName: typeof body["landlordName"] === "string" ? body["landlordName"] : void 0
			}),
			status: "pending"
		}, 201);
	} catch (error) {
		return jsonError(error);
	}
}
var Route$9 = createFileRoute("/api/landlord/listings")({ server: { handlers: {
	GET: ({ request }) => handleLandlordListings(request),
	POST: ({ request }) => handleLandlordListings(request)
} } });
/**
* Landlord registration.
*
* One account, one profile, one consent record:
*
*  - The account is created through better-auth (the same store the sign-in
*    page uses), so the password is hashed by the library and the session the
*    browser gets afterwards is a real session.
*  - The role is written to the user row here, server-side. The client cannot
*    ask for a role; better-auth ignores a role sent with a sign-up.
*  - The landlord profile is written to `LandlordProfile` with a PENDING
*    status, which is what the portal gate reads.
*  - Consent is recorded per purpose before the account is handed back, with
*    the wording the person ticked. If anything fails the account is removed
*    again so the same email can simply be retried.
*/
function clean(value) {
	return typeof value === "string" ? value.trim() : "";
}
function normaliseEmail(value) {
	return value.trim().toLowerCase();
}
/** Kenyan mobile numbers are stored as 07XXXXXXXX or 01XXXXXXXX. */
function isPhone(value) {
	const digits = value.replace(/[\s-]/g, "");
	return /^(?:\+?254|0)[17]\d{8}$/.test(digits) || /^[17]\d{8}$/.test(digits);
}
function validateRegistration(input) {
	const email = normaliseEmail(input.email);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new HttpError(400, "Enter a valid email address.");
	if (input.password.length < 8) throw new HttpError(400, "Use a password of at least 8 characters.");
	if (input.password.length > 128) throw new HttpError(400, "Use a password of no more than 128 characters.");
	if (clean(input.fullName).length < 3) throw new HttpError(400, "Enter your full name as it appears on your ID.");
	if (!isPhone(clean(input.phone))) throw new HttpError(400, "Enter a valid Kenyan phone number, for example 0712 345 678.");
	if (!isPhone(clean(input.whatsappNumber))) throw new HttpError(400, "Enter a valid WhatsApp number, for example 0712 345 678.");
	if (input.targetCampuses.length === 0) throw new HttpError(400, "Choose at least one area you let property in.");
	if (!Number.isFinite(input.estimatedProperties) || input.estimatedProperties < 0) throw new HttpError(400, "Enter how many properties you manage as a number.");
	const unknownItems = input.consentItems.filter((id) => !isDeclarationItemId(id));
	if (unknownItems.length > 0) throw new HttpError(400, `Unknown consent statement: ${unknownItems.join(", ")}.`);
	if (REQUIRED_DECLARATION_ITEM_IDS.filter((id) => !input.consentItems.includes(id)).length > 0) throw new HttpError(400, "Every required consent statement has to be ticked before the account can be created.");
}
/**
* Create the account, the profile and the consent records.
*
* Throws HttpError with a message safe to show the person. A duplicate email
* rolls nothing back because nothing was created; any later failure removes
* the account it created so the email stays usable.
*/
async function registerLandlordAccount(input) {
	validateRegistration(input);
	const email = normaliseEmail(input.email);
	const fullName = clean(input.fullName);
	const businessName = clean(input.businessName) || fullName;
	const phone = clean(input.phone);
	const whatsappNumber = clean(input.whatsappNumber);
	const nationalId = clean(input.nationalId) || null;
	const reviewNote = clean(input.reviewNote) || null;
	const campuses = input.targetCampuses.map(clean).filter(Boolean);
	const existing = await prisma.user.findUnique({
		where: { email },
		select: {
			id: true,
			role: true,
			landlordProfile: { select: { id: true } }
		}
	});
	if (existing) throw new HttpError(409, existing.landlordProfile ? "An account with this email already exists. Sign in instead, or reset your password." : "An account with this email already exists. Sign in, then finish your landlord registration from your account.");
	let userId = null;
	try {
		userId = (await auth.api.signUpEmail({ body: {
			email,
			password: input.password,
			name: fullName
		} })).user.id;
		await prisma.user.update({
			where: { id: userId },
			data: {
				role: "LANDLORD",
				name: fullName
			}
		});
		await prisma.landlordProfile.create({ data: {
			userId,
			businessName,
			phone,
			whatsappNumber,
			nationalId,
			targetCampuses: JSON.stringify(campuses),
			estimatedProperties: Math.trunc(input.estimatedProperties),
			status: "PENDING",
			reviewNote,
			consentGivenAt: /* @__PURE__ */ new Date()
		} });
	} catch (error) {
		if (error instanceof HttpError) throw error;
		if (userId) await prisma.user.delete({ where: { id: userId } }).catch(() => void 0);
		const message = error instanceof Error ? error.message : String(error);
		if (/exist|unique/i.test(message)) throw new HttpError(409, "An account with this email already exists. Sign in instead.");
		throw new HttpError(500, "We could not create your account. Please try again in a moment.");
	}
	let consentRecorded = true;
	try {
		await grantConsent({
			email,
			name: fullName,
			userId,
			purposes: purposesFromDeclarationItems(input.consentItems),
			declarationItems: input.consentItems,
			source: "landlord-registration"
		});
	} catch (error) {
		consentRecorded = false;
		console.error("Consent could not be recorded during landlord registration:", error);
	}
	return {
		userId,
		email,
		fullName,
		status: "PENDING",
		consentRecorded
	};
}
var STATUS_FROM_DB = {
	PENDING: "pending",
	APPROVED: "approved",
	REJECTED: "rejected",
	SUSPENDED: "suspended"
};
function parseCampuses(value) {
	try {
		const parsed = JSON.parse(value);
		return Array.isArray(parsed) ? parsed.filter((c) => typeof c === "string") : [];
	} catch {
		return value.split(",").map((c) => c.trim()).filter(Boolean);
	}
}
/**
* The signed-in person's landlord profile, in the lowercase shape the portal
* screens use. Returns null when the account has no profile yet, which the
* gate treats as "register first" rather than an error.
*/
async function getLandlordProfile(userId) {
	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: {
			id: true,
			email: true,
			name: true,
			landlordProfile: true
		}
	});
	if (!user?.landlordProfile) return null;
	const profile = user.landlordProfile;
	return {
		userId: user.id,
		email: user.email,
		fullName: user.name ?? "",
		businessName: profile.businessName,
		phone: profile.phone,
		whatsappNumber: profile.whatsappNumber,
		targetCampuses: parseCampuses(profile.targetCampuses),
		estimatedProperties: profile.estimatedProperties,
		status: STATUS_FROM_DB[profile.status],
		reviewNote: profile.reviewNote ?? "",
		consentGivenAt: profile.consentGivenAt.toISOString(),
		createdAt: profile.createdAt.toISOString()
	};
}
/**
* The signed-in person's landlord profile.
*
* GET /api/landlord/profile
*   200 { profile: {...} }   the profile, in the portal's lowercase shape
*   200 { profile: null }    signed in, but no landlord profile yet
*   401                      not signed in
*
* The profile is looked up by the session's user id, never by an id sent from
* the browser, so one landlord cannot read another's details.
*/
async function handleLandlordProfile(request) {
	try {
		const user = await getSessionUser(request);
		if (!user) return new Response(JSON.stringify({ error: "Sign in to view your landlord profile." }), {
			status: 401,
			headers: { "content-type": "application/json" }
		});
		const profile = await getLandlordProfile(user.id);
		return new Response(JSON.stringify({ profile }), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		return jsonError(error);
	}
}
var Route$8 = createFileRoute("/api/landlord/profile")({ server: { handlers: { GET: ({ request }) => handleLandlordProfile(request) } } });
/**
* Landlord registration.
*
* POST /api/landlord/register
*   { email, password, fullName, businessName, phone, whatsappNumber,
*     nationalId, targetCampuses, estimatedProperties, reviewNote,
*     consentItems }
*
* Creates the better-auth account, the PENDING landlord profile and one
* consent record per purpose. The browser signs in afterwards with the same
* credentials; no session cookie is handed out by this endpoint.
*/
function asString(value) {
	return typeof value === "string" ? value : "";
}
function asStringArray(value) {
	return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
async function handleLandlordRegister(request) {
	if (request.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed." }), {
		status: 405,
		headers: { "content-type": "application/json" }
	});
	let body = {};
	try {
		const parsed = await request.json();
		if (parsed && typeof parsed === "object") body = parsed;
	} catch {
		return new Response(JSON.stringify({ error: "Send the registration as JSON." }), {
			status: 400,
			headers: { "content-type": "application/json" }
		});
	}
	const input = {
		email: asString(body["email"]),
		password: asString(body["password"]),
		fullName: asString(body["fullName"]),
		businessName: asString(body["businessName"]),
		phone: asString(body["phone"]),
		whatsappNumber: asString(body["whatsappNumber"]),
		nationalId: asString(body["nationalId"]),
		targetCampuses: asStringArray(body["targetCampuses"]),
		estimatedProperties: Number(body["estimatedProperties"] ?? 0),
		reviewNote: asString(body["reviewNote"]),
		consentItems: asStringArray(body["consentItems"])
	};
	try {
		const created = await registerLandlordAccount(input);
		return new Response(JSON.stringify(created), {
			status: 201,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		return jsonError(error);
	}
}
var Route$7 = createFileRoute("/api/landlord/register")({ server: { handlers: { POST: ({ request }) => handleLandlordRegister(request) } } });
var $$splitComponentImporter$1 = () => import("./landlord.ads_.new-0-RcDO-W.mjs");
/**
* Optional `listingId` deep-link: the listings page sends landlords here with
* the property they chose to boost. Declaring it on the route keeps the value
* in the typed search contract instead of reading `window.location`, which
* broke client-side navigation and page refresh.
*/
var Route$6 = createFileRoute("/landlord/ads_/new")({
	head: () => ({ meta: [{ title: "New boost · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	validateSearch: (search) => {
		const listingId = search["listingId"];
		return typeof listingId === "string" && listingId.length > 0 ? { listingId } : {};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./landlord.listings_.new-Bv2EvDNo.mjs");
var Route$5 = createFileRoute("/landlord/listings_/new")({
	head: () => ({ meta: [{ title: "New listing · UniHub Landlord Portal" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/**
* Administrator content, list and create.
*
* GET  /api/admin/content/:resource
* POST /api/admin/content/:resource
*
* ADMIN only. One endpoint serves the whole console so every screen reads the
* same SQLite tables the public site uses.
*/
function json$3(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
async function handleAdminContent(request, resource) {
	try {
		await requireRole(request, ["ADMIN"]);
		if (request.method === "GET") switch (resource) {
			case "agents": return json$3({ items: await listAgents() });
			case "categories": return json$3({ items: await listCategories() });
			case "properties": return json$3({ items: await listProperties() });
			case "universities": return json$3({ items: await listUniversities() });
			case "hostels": return json$3({ items: await listHostels(new URL(request.url).searchParams.get("universityId") ?? void 0) });
			default: throw new HttpError(404, `Unknown content type: ${resource}`);
		}
		if (request.method !== "POST") return json$3({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) throw new HttpError(400, "Send the record as JSON.");
		switch (resource) {
			case "agents": return json$3({ item: await createAgent(body) }, 201);
			case "categories": return json$3({ item: await createCategory(body) }, 201);
			case "properties": return json$3({ item: await createProperty(body) }, 201);
			case "universities": return json$3({ item: await createUniversity(body) }, 201);
			case "hostels": return json$3({ item: await createHostel(body) }, 201);
			default: throw new HttpError(404, `Unknown content type: ${resource}`);
		}
	} catch (error) {
		return jsonError(error);
	}
}
var Route$4 = createFileRoute("/api/admin/content/$resource")({ server: { handlers: {
	GET: ({ request, params }) => handleAdminContent(request, params.resource),
	POST: ({ request, params }) => handleAdminContent(request, params.resource)
} } });
/**
* PATCH /api/admin/landlords/$id
*   { status: "pending" | "approved" | "rejected" | "suspended", note?: string }
*
* The decision is a human one and is recorded with the review note on the
* profile, which is what the landlord's own status screen reads.
*/
var STATUSES$1 = [
	"pending",
	"approved",
	"rejected",
	"suspended"
];
async function handleAdminLandlord(request, id) {
	try {
		await requireRole(request, ["ADMIN"]);
		if (request.method !== "PATCH") return new Response(JSON.stringify({ error: "Method not allowed." }), {
			status: 405,
			headers: { "content-type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body) throw new HttpError(400, "Send the decision as JSON.");
		const status = body["status"];
		if (typeof status !== "string" || !STATUSES$1.includes(status)) throw new HttpError(400, "Status has to be pending, approved, rejected or suspended.");
		await reviewLandlord(id, status, typeof body["note"] === "string" ? body["note"] : void 0);
		return new Response(JSON.stringify({
			ok: true,
			status
		}), {
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "no-store"
			}
		});
	} catch (error) {
		return jsonError(error);
	}
}
var Route$3 = createFileRoute("/api/admin/landlords/$id")({ server: { handlers: { PATCH: ({ request, params }) => handleAdminLandlord(request, params.id) } } });
/**
* One listing, from the administrator's side.
*
* PATCH { action: "moderate", status, note? }  publish / reject / hide
* PATCH { action: "feature", featured }        show in the featured rail
* PATCH { action: "reviewAd", approved }       approve or decline a boost
*/
function json$2(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
var STATUSES = [
	"pending",
	"published",
	"rejected",
	"hidden"
];
async function handleAdminListing(request, id) {
	try {
		await requireRole(request, ["ADMIN"]);
		if (request.method !== "PATCH") return json$2({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) return json$2({ error: "Send the change as JSON." }, 400);
		const action = body["action"];
		if (action === "moderate") {
			const status = body["status"];
			if (typeof status !== "string" || !STATUSES.includes(status)) throw new HttpError(400, "Status has to be pending, published, rejected or hidden.");
			await moderateListing(id, status, typeof body["note"] === "string" ? body["note"] : void 0);
			return json$2({
				ok: true,
				status
			});
		}
		if (action === "feature") {
			if (typeof body["featured"] !== "boolean") throw new HttpError(400, "featured has to be true or false.");
			await setFeatured(id, body["featured"]);
			return json$2({
				ok: true,
				featured: body["featured"]
			});
		}
		if (action === "reviewAd") {
			if (typeof body["approved"] !== "boolean") throw new HttpError(400, "approved has to be true or false.");
			await reviewAd(id, body["approved"]);
			return json$2({
				ok: true,
				adStatus: body["approved"] ? "live" : "inactive"
			});
		}
		return json$2({ error: "Unknown action." }, 400);
	} catch (error) {
		return jsonError(error);
	}
}
var Route$2 = createFileRoute("/api/admin/listings/$id")({ server: { handlers: { PATCH: ({ request, params }) => handleAdminListing(request, params.id) } } });
/**
* One landlord listing.
*
* PATCH  { action: "status", status: "published" | "hidden" }
* PATCH  { action: "requestAd", plan: "week" | "fortnight" | "month" | ... }
* DELETE remove the listing from the caller's account
*
* Every action is scoped to a listing the caller owns; a request for somebody
* else's listing answers 404 rather than revealing that it exists.
*/
function json$1(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
async function handleLandlordListing(request, id) {
	try {
		const user = await requireRole(request, ["LANDLORD", "ADMIN"]);
		if (request.method === "DELETE") {
			await deleteListing(user.id, id);
			return json$1({ ok: true });
		}
		if (request.method !== "PATCH") return json$1({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) return json$1({ error: "Send the change as JSON." }, 400);
		const action = body["action"];
		if (action === "status") {
			const status = body["status"];
			if (status !== "published" && status !== "hidden") throw new HttpError(400, "Status has to be published or hidden.");
			await updateListingStatus(user.id, id, status);
			return json$1({
				ok: true,
				status
			});
		}
		if (action === "requestAd") {
			const plan = typeof body["plan"] === "string" ? body["plan"] : "";
			await requestAd(user.id, id, plan);
			return json$1({
				ok: true,
				adStatus: "requested"
			});
		}
		return json$1({ error: "Unknown action." }, 400);
	} catch (error) {
		return jsonError(error);
	}
}
var Route$1 = createFileRoute("/api/landlord/listings/$id")({ server: { handlers: {
	PATCH: ({ request, params }) => handleLandlordListing(request, params.id),
	DELETE: ({ request, params }) => handleLandlordListing(request, params.id)
} } });
/**
* Administrator content, one record.
*
* GET    /api/admin/content/:resource/:id
* PATCH  /api/admin/content/:resource/:id
* DELETE /api/admin/content/:resource/:id
*
* ADMIN only, and every write is checked against the same session lookup the
* rest of the admin API uses.
*/
function json(body, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"content-type": "application/json",
			"cache-control": "no-store"
		}
	});
}
async function deleteRecord(resource, id) {
	switch (resource) {
		case "agents":
			await prisma.agent.delete({ where: { id } });
			return;
		case "categories":
			await prisma.category.delete({ where: { id } });
			return;
		case "properties":
			await prisma.property.delete({ where: { id } });
			return;
		case "universities":
			await prisma.university.delete({ where: { id } });
			return;
		case "hostels":
			await prisma.hostel.delete({ where: { id } });
			return;
		default: throw new HttpError(404, `Unknown content type: ${resource}`);
	}
}
async function handleAdminContentRecord(request, resource, id) {
	try {
		await requireRole(request, ["ADMIN"]);
		if (request.method === "GET") {
			if (resource === "properties") {
				const item = await getProperty(id);
				if (!item) throw new HttpError(404, "That property no longer exists.");
				return json({ item });
			}
			throw new HttpError(404, `Reading a single ${resource} record is not supported.`);
		}
		if (request.method === "DELETE") {
			await deleteRecord(resource, id);
			return json({ ok: true });
		}
		if (request.method !== "PATCH") return json({ error: "Method not allowed." }, 405);
		const body = await request.json().catch(() => null);
		if (!body) throw new HttpError(400, "Send the change as JSON.");
		switch (resource) {
			case "agents": return json({ item: await updateAgent(id, body) });
			case "categories": return json({ item: await updateCategory(id, body) });
			case "properties": return json({ item: await updateProperty(id, body) });
			case "universities": return json({ item: await updateUniversity(id, body) });
			case "hostels": return json({ item: await updateHostel(id, body) });
			default: throw new HttpError(404, `Unknown content type: ${resource}`);
		}
	} catch (error) {
		return jsonError(error);
	}
}
var Route = createFileRoute("/api/admin/content/$resource/$id")({ server: { handlers: {
	GET: ({ request, params }) => handleAdminContentRecord(request, params.resource, params.id),
	PATCH: ({ request, params }) => handleAdminContentRecord(request, params.resource, params.id),
	DELETE: ({ request, params }) => handleAdminContentRecord(request, params.resource, params.id)
} } });
var IndexRoute = Route$56.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$57
});
var AboutRoute = Route$55.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$57
});
var AdminRoute = Route$54.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$57
});
var AppRoute = Route$53.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$57
});
var ConsentRoute = Route$52.update({
	id: "/consent",
	path: "/consent",
	getParentRoute: () => Route$57
});
var ContactRoute = Route$51.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$57
});
var HostelsRoute = Route$50.update({
	id: "/hostels",
	path: "/hostels",
	getParentRoute: () => Route$57
});
var LandlordRoute = Route$49.update({
	id: "/landlord",
	path: "/landlord",
	getParentRoute: () => Route$57
});
var ListPropertyRoute = Route$48.update({
	id: "/list-property",
	path: "/list-property",
	getParentRoute: () => Route$57
});
var ListingsRoute = Route$47.update({
	id: "/listings",
	path: "/listings",
	getParentRoute: () => Route$57
});
var PrivacyRoute = Route$46.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$57
});
var TermsRoute = Route$45.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$57
});
var AdminIndexRoute = Route$44.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var AdminAdsRoute = Route$43.update({
	id: "/ads",
	path: "/ads",
	getParentRoute: () => AdminRoute
});
var AdminAgentsRoute = Route$42.update({
	id: "/agents",
	path: "/agents",
	getParentRoute: () => AdminRoute
});
var AdminCategoriesRoute = Route$41.update({
	id: "/categories",
	path: "/categories",
	getParentRoute: () => AdminRoute
});
var AdminCmsRoute = Route$40.update({
	id: "/cms",
	path: "/cms",
	getParentRoute: () => AdminRoute
});
var AdminHostelsRoute = Route$39.update({
	id: "/hostels",
	path: "/hostels",
	getParentRoute: () => AdminRoute
});
var AdminLandlordsRoute = Route$38.update({
	id: "/landlords",
	path: "/landlords",
	getParentRoute: () => AdminRoute
});
var AdminListingsRoute = Route$37.update({
	id: "/listings",
	path: "/listings",
	getParentRoute: () => AdminRoute
});
var AdminLoginRoute = Route$36.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AdminRoute
});
var AdminPropertiesRoute = Route$35.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$34.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminUniversitiesRoute = Route$33.update({
	id: "/universities",
	path: "/universities",
	getParentRoute: () => AdminRoute
});
var ApiConsentRoute = Route$32.update({
	id: "/api/consent",
	path: "/api/consent",
	getParentRoute: () => Route$57
});
var ApiSiteSettingsRoute = Route$31.update({
	id: "/api/site-settings",
	path: "/api/site-settings",
	getParentRoute: () => Route$57
});
var HostelsIdRoute = Route$30.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => HostelsRoute
});
var LandlordIndexRoute = Route$29.update({
	id: "/",
	path: "/",
	getParentRoute: () => LandlordRoute
});
var LandlordAdsRoute = Route$28.update({
	id: "/ads",
	path: "/ads",
	getParentRoute: () => LandlordRoute
});
var LandlordListingsRoute = Route$27.update({
	id: "/listings",
	path: "/listings",
	getParentRoute: () => LandlordRoute
});
var LandlordLoginRoute = Route$26.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => LandlordRoute
});
var LandlordPendingRoute = Route$25.update({
	id: "/pending",
	path: "/pending",
	getParentRoute: () => LandlordRoute
});
var LandlordRegisterRoute = Route$24.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => LandlordRoute
});
var LandlordRejectedRoute = Route$23.update({
	id: "/rejected",
	path: "/rejected",
	getParentRoute: () => LandlordRoute
});
var LandlordSuspendedRoute = Route$22.update({
	id: "/suspended",
	path: "/suspended",
	getParentRoute: () => LandlordRoute
});
var ListingsIdRoute = Route$58.update({
	id: "/listings_/$id",
	path: "/listings/$id",
	getParentRoute: () => Route$57
});
var PropertiesIdRoute = Route$21.update({
	id: "/properties/$id",
	path: "/properties/$id",
	getParentRoute: () => Route$57
});
var PublicLandlordRegisterRoute = Route$20.update({
	id: "/public/landlord-register",
	path: "/public/landlord-register",
	getParentRoute: () => Route$57
});
var AdminHostelsNewRoute = Route$19.update({
	id: "/hostels_/new",
	path: "/hostels/new",
	getParentRoute: () => AdminRoute
});
var AdminPropertiesIdRoute = Route$18.update({
	id: "/properties_/$id",
	path: "/properties/$id",
	getParentRoute: () => AdminRoute
});
var AdminPropertiesNewRoute = Route$17.update({
	id: "/properties_/new",
	path: "/properties/new",
	getParentRoute: () => AdminRoute
});
var ApiAdminLandlordsRoute = Route$16.update({
	id: "/api/admin/landlords",
	path: "/api/admin/landlords",
	getParentRoute: () => Route$57
});
var ApiAdminListingsRoute = Route$15.update({
	id: "/api/admin/listings",
	path: "/api/admin/listings",
	getParentRoute: () => Route$57
});
var ApiAdminSettingsRoute = Route$14.update({
	id: "/api/admin/settings",
	path: "/api/admin/settings",
	getParentRoute: () => Route$57
});
var ApiAuthSplatRoute = Route$13.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$57
});
var ApiConsentLedgerRoute = Route$12.update({
	id: "/ledger",
	path: "/ledger",
	getParentRoute: () => ApiConsentRoute
});
var ApiDataExportRoute = Route$11.update({
	id: "/api/data/export",
	path: "/api/data/export",
	getParentRoute: () => Route$57
});
var ApiDataImportRoute = Route$10.update({
	id: "/api/data/import",
	path: "/api/data/import",
	getParentRoute: () => Route$57
});
var ApiLandlordListingsRoute = Route$9.update({
	id: "/api/landlord/listings",
	path: "/api/landlord/listings",
	getParentRoute: () => Route$57
});
var ApiLandlordProfileRoute = Route$8.update({
	id: "/api/landlord/profile",
	path: "/api/landlord/profile",
	getParentRoute: () => Route$57
});
var ApiLandlordRegisterRoute = Route$7.update({
	id: "/api/landlord/register",
	path: "/api/landlord/register",
	getParentRoute: () => Route$57
});
var LandlordAdsNewRoute = Route$6.update({
	id: "/ads_/new",
	path: "/ads/new",
	getParentRoute: () => LandlordRoute
});
var LandlordListingsNewRoute = Route$5.update({
	id: "/listings_/new",
	path: "/listings/new",
	getParentRoute: () => LandlordRoute
});
var ApiAdminContentResourceRoute = Route$4.update({
	id: "/api/admin/content/$resource",
	path: "/api/admin/content/$resource",
	getParentRoute: () => Route$57
});
var ApiAdminLandlordsIdRoute = Route$3.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiAdminLandlordsRoute
});
var ApiAdminListingsIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiAdminListingsRoute
});
var ApiLandlordListingsIdRoute = Route$1.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiLandlordListingsRoute
});
var ApiAdminContentResourceIdRoute = Route.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiAdminContentResourceRoute
});
var AdminRouteChildren = {
	AdminAdsRoute,
	AdminAgentsRoute,
	AdminCategoriesRoute,
	AdminCmsRoute,
	AdminHostelsRoute,
	AdminLandlordsRoute,
	AdminListingsRoute,
	AdminLoginRoute,
	AdminPropertiesRoute,
	AdminSettingsRoute,
	AdminUniversitiesRoute,
	AdminIndexRoute,
	AdminHostelsNewRoute,
	AdminPropertiesIdRoute,
	AdminPropertiesNewRoute
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var HostelsRouteChildren = { HostelsIdRoute };
var HostelsRouteWithChildren = HostelsRoute._addFileChildren(HostelsRouteChildren);
var LandlordRouteChildren = {
	LandlordAdsRoute,
	LandlordListingsRoute,
	LandlordLoginRoute,
	LandlordPendingRoute,
	LandlordRegisterRoute,
	LandlordRejectedRoute,
	LandlordSuspendedRoute,
	LandlordIndexRoute,
	LandlordAdsNewRoute,
	LandlordListingsNewRoute
};
var LandlordRouteWithChildren = LandlordRoute._addFileChildren(LandlordRouteChildren);
var ApiConsentRouteChildren = { ApiConsentLedgerRoute };
var ApiConsentRouteWithChildren = ApiConsentRoute._addFileChildren(ApiConsentRouteChildren);
var ApiAdminLandlordsRouteChildren = { ApiAdminLandlordsIdRoute };
var ApiAdminLandlordsRouteWithChildren = ApiAdminLandlordsRoute._addFileChildren(ApiAdminLandlordsRouteChildren);
var ApiAdminListingsRouteChildren = { ApiAdminListingsIdRoute };
var ApiAdminListingsRouteWithChildren = ApiAdminListingsRoute._addFileChildren(ApiAdminListingsRouteChildren);
var ApiLandlordListingsRouteChildren = { ApiLandlordListingsIdRoute };
var ApiLandlordListingsRouteWithChildren = ApiLandlordListingsRoute._addFileChildren(ApiLandlordListingsRouteChildren);
var ApiAdminContentResourceRouteChildren = { ApiAdminContentResourceIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRouteWithChildren,
	AppRoute,
	ConsentRoute,
	ContactRoute,
	HostelsRoute: HostelsRouteWithChildren,
	LandlordRoute: LandlordRouteWithChildren,
	ListPropertyRoute,
	ListingsRoute,
	PrivacyRoute,
	TermsRoute,
	ApiConsentRoute: ApiConsentRouteWithChildren,
	ApiSiteSettingsRoute,
	ListingsIdRoute,
	PropertiesIdRoute,
	PublicLandlordRegisterRoute,
	ApiAdminLandlordsRoute: ApiAdminLandlordsRouteWithChildren,
	ApiAdminListingsRoute: ApiAdminListingsRouteWithChildren,
	ApiAdminSettingsRoute,
	ApiAuthSplatRoute,
	ApiDataExportRoute,
	ApiDataImportRoute,
	ApiLandlordListingsRoute: ApiLandlordListingsRouteWithChildren,
	ApiLandlordProfileRoute,
	ApiLandlordRegisterRoute,
	ApiAdminContentResourceRoute: ApiAdminContentResourceRoute._addFileChildren(ApiAdminContentResourceRouteChildren)
};
var routeTree = Route$57._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
