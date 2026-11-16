import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as authClient } from "./AuthContext-RxT3sJ-M.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as CircleX, J as CircleCheckBig, N as Info } from "../_libs/lucide-react.mjs";
import { t as MarketingShell } from "./MarketingChrome-DhUEta_m.mjs";
import { n as Reveal } from "./VideoPanel-ClYaL67p.mjs";
import { n as ConsentRecordPanel, r as ConsentSubmitButton, t as ConsentDeclaration } from "./ConsentForm-B5XJQAlP.mjs";
import { n as onAuthStateChanged } from "../_libs/firebase__auth.mjs";
import "../_libs/firebase.mjs";
import { t as auth } from "./firebase-BUHXILn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consent-ChVNgEki.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Who the browser is, for the purposes of a consent record.
*
* Two sign-in systems exist in the app: the platform session (used by the
* console) and Firebase (used by the landlord portal). Either one is enough
* to be identified, so the consent screen asks both. The credential is only
* used to prove who the person is; it is never used to decide which email
* the consent is filed under — that is the server's job.
*/
function useConsentSession() {
	const [state, setState] = (0, import_react.useState)({
		status: "loading",
		session: null
	});
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let unsubscribe;
		const listenForFirebase = () => {
			unsubscribe = onAuthStateChanged(auth, (user) => {
				if (cancelled) return;
				if (user) setState({
					status: "signed-in",
					session: {
						mode: "firebase",
						email: user.email ?? "",
						name: user.displayName || user.email || "",
						getToken: async () => user.getIdToken()
					}
				});
				else setState({
					status: "signed-out",
					session: null
				});
			}, () => {
				if (!cancelled) setState({
					status: "signed-out",
					session: null
				});
			});
		};
		const checkPlatformSession = async () => {
			try {
				const { data } = await authClient.getSession();
				if (cancelled) return;
				if (data?.user?.email) {
					setState({
						status: "signed-in",
						session: {
							mode: "session",
							email: data.user.email,
							name: data.user.name || data.user.email,
							getToken: async () => null
						}
					});
					return;
				}
			} catch {}
			if (!cancelled) listenForFirebase();
		};
		checkPlatformSession();
		return () => {
			cancelled = true;
			unsubscribe?.();
		};
	}, []);
	return state;
}
var ConsentRequestError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.status = status;
		this.name = "ConsentRequestError";
	}
};
function headers(token) {
	const base = { "content-type": "application/json" };
	if (token) base["authorization"] = `Bearer ${token}`;
	return base;
}
async function readJson(response) {
	try {
		return await response.json();
	} catch {
		return {};
	}
}
async function call(path, init) {
	const response = await fetch(path, {
		method: init.method,
		headers: headers(init.token),
		credentials: "include",
		...init.body === void 0 ? {} : { body: JSON.stringify(init.body) }
	});
	const payload = await readJson(response);
	if (!response.ok) throw new ConsentRequestError(typeof payload["error"] === "string" ? payload["error"] : "The request could not be completed. Please try again.", response.status);
	return payload;
}
function loadConsent(token) {
	return call("/api/consent", {
		method: "GET",
		token
	});
}
function grantConsentItems(declarationItems, token) {
	return call("/api/consent", {
		method: "POST",
		body: {
			action: "grant",
			declarationItems
		},
		token
	});
}
function withdrawConsentItems(purposes, token) {
	return call("/api/consent", {
		method: "POST",
		body: purposes === "all" ? {
			action: "withdraw",
			scope: "all"
		} : {
			action: "withdraw",
			purposes
		},
		token
	});
}
function ConsentPage() {
	const { status, session } = useConsentSession();
	const [ticked, setTicked] = (0, import_react.useState)({});
	const [state, setState] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const token = (0, import_react.useCallback)(async () => {
		if (!session) return null;
		return session.mode === "firebase" ? session.getToken() : null;
	}, [session]);
	const refresh = (0, import_react.useCallback)(async () => {
		try {
			const next = await loadConsent(await token());
			setState(next);
			setError("");
		} catch (caught) {
			setError(caught instanceof ConsentRequestError ? caught.message : "We could not reach the server. Please try again.");
		}
	}, [token]);
	(0, import_react.useEffect)(() => {
		if (status !== "signed-in") return;
		refresh();
	}, [status, refresh]);
	const handleToggle = (id) => {
		setNotice("");
		setTicked((previous) => ({
			...previous,
			[id]: !previous[id]
		}));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		setNotice("");
		setBusy(true);
		try {
			const idToken = await token();
			const result = await grantConsentItems(Object.entries(ticked).filter(([, value]) => value).map(([id]) => id), idToken);
			setState((previous) => previous ? {
				...previous,
				records: result.records,
				summary: previous.summary
			} : previous);
			setTicked({});
			setNotice("Your consent has been recorded. We keep the wording you agreed to, the date and time, and the version of the form.");
			await refresh();
		} catch (caught) {
			setError(caught instanceof ConsentRequestError ? caught.message : "We could not record your consent. Please try again.");
		} finally {
			setBusy(false);
		}
	};
	const handleWithdraw = async (purpose) => {
		setError("");
		setNotice("");
		setBusy(true);
		try {
			const idToken = await token();
			await withdrawConsentItems([purpose], idToken);
			setNotice("That consent has been withdrawn, and the withdrawal has been recorded.");
			await refresh();
		} catch (caught) {
			setError(caught instanceof ConsentRequestError ? caught.message : "We could not withdraw your consent. Please try again.");
		} finally {
			setBusy(false);
		}
	};
	const handleWithdrawAll = async () => {
		setError("");
		setNotice("");
		setBusy(true);
		try {
			await withdrawConsentItems("all", await token());
			setNotice("All of your consent has been withdrawn, and the withdrawals have been recorded.");
			await refresh();
		} catch (caught) {
			setError(caught instanceof ConsentRequestError ? caught.message : "We could not withdraw your consent. Please try again.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Consent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl",
					children: "Your consent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-foreground/90",
					children: "This is the consent form for UniHub landlord and agent accounts. Every statement is separate, so you can agree to one thing and not another, and you can take your consent back at any time. Students who only browse UniHub give us no personal data and do not need this form."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground",
					children: [
						"Form version ",
						"1.0",
						" · Data Protection Act, 2019 s.32"
					]
				})
			] }), status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground",
				children: "Checking who you are…"
			}) : status === "signed-out" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mt-10 rounded-2xl border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 font-display text-lg font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4 text-highlight" }), "Sign in to see your consent"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "We can only keep a consent record against an account we can check. Sign in with the landlord account you registered, and the form will show what you have already agreed to."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/landlord/login",
							className: "inline-flex min-h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground",
							children: "Sign in as a landlord"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "inline-flex min-h-10 items-center rounded-full border border-border bg-accent px-5 text-sm font-semibold",
							children: "Read the privacy policy"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
				}) : null,
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-start gap-3 rounded-xl border border-status/30 bg-status/10 p-4 text-sm text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "mt-0.5 size-4 shrink-0 text-status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: notice })]
				}) : null,
				state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsentRecordPanel, {
						summary: state.summary,
						onWithdraw: handleWithdraw,
						onWithdrawAll: handleWithdrawAll,
						busy
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-medium text-foreground",
								children: "Consent declaration"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: "Please read each statement and tick every box that applies to you. Nothing is ticked for you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsentDeclaration, {
								ticked,
								onToggle: handleToggle,
								disabled: busy
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsentSubmitButton, { busy }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"Signing in as ",
										session?.email,
										". Your consent is stored against this address."
									]
								})]
							})
						]
					})
				})
			] })]
		})
	}) });
}
//#endregion
export { ConsentPage as component };
