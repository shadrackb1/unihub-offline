import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as authClient, u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { i as SupportLink } from "./SupportLink-CbB80iuK.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Lock, D as Mail, Q as ArrowRight, R as Eye, d as ShieldCheck, j as LoaderCircle, z as EyeOff } from "../_libs/lucide-react.mjs";
import { n as isAdminRole } from "./requireAdmin-Dzm4cN2o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-cCKDimAV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputBase = "w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";
function AdminLoginPage() {
	const { login, logout, refreshSession } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		try {
			await login(email, password);
			const { data } = await authClient.getSession();
			const role = (data?.user)?.role;
			await refreshSession();
			if (!isAdminRole(role)) {
				await logout().catch(() => {});
				setError("This account does not have admin access. Use the landlord portal, or ask support for access.");
				return;
			}
			navigate({ to: "/admin" });
		} catch (err) {
			const message = err instanceof Error ? err.message : "";
			setError(/invalid|credential|password|email/i.test(message) || !message ? "That email and password did not match. Try again." : message);
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 items-center justify-center px-5 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "UniHub · Admin"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-medium leading-tight",
								children: "Sign in to the console"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: "Review landlords and listings, publish site content, and manage boosts."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 sm:p-8",
						children: [
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: "admin-sign-in-error",
								role: "alert",
								className: "mb-5 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "admin-email",
										className: "mb-1.5 block text-sm font-medium text-secondary-foreground",
										children: "Admin email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "admin-email",
											type: "email",
											name: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											required: true,
											autoComplete: "email",
											"aria-describedby": error ? "admin-sign-in-error" : void 0,
											className: inputBase,
											placeholder: "name@unihub.ke"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "admin-password",
										className: "mb-1.5 block text-sm font-medium text-secondary-foreground",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
												className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "admin-password",
												type: showPassword ? "text" : "password",
												name: "password",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												required: true,
												autoComplete: "current-password",
												"aria-describedby": error ? "admin-sign-in-error" : void 0,
												className: `${inputBase} pr-12`,
												placeholder: "••••••••"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShowPassword((value) => !value),
												className: "absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground",
												"aria-label": showPassword ? "Hide password" : "Show password",
												children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										disabled: isLoading,
										className: "mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60",
										children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
											className: "size-4 animate-spin",
											"aria-hidden": "true"
										}), "Signing in…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Sign in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "size-4",
											"aria-hidden": "true"
										})] })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "mt-0.5 size-3.5 shrink-0 text-highlight",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admin access is invite-only. Only allowlisted emails can open the console." })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Need access or a password reset?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
										message: "Hi UniHub, I need admin access to the console",
										className: "font-medium text-foreground underline underline-offset-4",
										children: "Contact support"
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-center text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline underline-offset-4 hover:text-foreground",
								children: "Back to UniHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: " · "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/landlord/login",
								className: "underline underline-offset-4 hover:text-foreground",
								children: "Landlord sign in"
							})
						]
					})
				]
			})
		})
	});
}
var SplitComponent = AdminLoginPage;
//#endregion
export { SplitComponent as component };
