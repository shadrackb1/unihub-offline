import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { i as SupportLink } from "./SupportLink-CbB80iuK.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Lock, D as Mail, Q as ArrowRight, R as Eye, d as ShieldCheck, j as LoaderCircle, z as EyeOff } from "../_libs/lucide-react.mjs";
import { a as useLandlord, i as signInLandlord, n as homeForStatus } from "./LandlordContext-CmC5R_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.login-p71yw3xL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputBase = "w-full rounded-xl border border-input bg-background py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring transition-shadow";
var LandlordLoginPage = () => {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const { user, profile, profileState } = useLandlord();
	const { refreshSession } = useAuth();
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (user && profileState === "ok" && profile) navigate({
			to: homeForStatus(profile.status),
			replace: true
		});
	}, [
		user,
		profile,
		profileState,
		navigate
	]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		try {
			const { profile: signedInProfile } = await signInLandlord(email, password);
			if (signedInProfile.state === "missing") throw new Error("No landlord profile is linked to this account. Register as a landlord first — it takes about three minutes.");
			if (signedInProfile.state === "unavailable") throw new Error(signedInProfile.message);
			await refreshSession();
			navigate({
				to: homeForStatus(signedInProfile.profile.status),
				replace: true
			});
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "That email and password did not match. Try again.");
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
								children: "UniHub · Landlord portal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 font-display text-3xl font-medium leading-tight",
								children: "Sign in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: "Manage your listings, applications, and boosts. Approved landlords see their dashboard straight away; everyone else lands on their review status."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 sm:p-8",
						children: [
							errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: "sign-in-error",
								role: "alert",
								className: "mb-5 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive",
								children: errorMessage
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "mb-1.5 block text-sm font-medium text-secondary-foreground",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											type: "email",
											name: "email",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											required: true,
											autoComplete: "email",
											"aria-describedby": errorMessage ? "sign-in-error" : void 0,
											className: inputBase,
											placeholder: "you@example.com"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "password",
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
												id: "password",
												type: showPassword ? "text" : "password",
												name: "password",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												required: true,
												autoComplete: "current-password",
												"aria-describedby": errorMessage ? "sign-in-error" : void 0,
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 pt-1 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/landlord/register",
											className: "font-medium text-foreground underline-offset-4 hover:underline",
											children: "Create an account"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportLink, {
											message: "Hi UniHub, I can't sign in to my landlord account",
											className: "font-medium text-muted-foreground hover:text-foreground",
											children: "Forgot password?"
										})]
									}),
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "mt-0.5 size-3.5 shrink-0 text-highlight",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Locked out? Message support and we will reset access once we have confirmed the account is yours." })]
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
								to: "/list-property",
								className: "underline underline-offset-4 hover:text-foreground",
								children: "Why list with us"
							})
						]
					})
				]
			})
		})
	});
};
var SplitComponent = LandlordLoginPage;
//#endregion
export { SplitComponent as component };
