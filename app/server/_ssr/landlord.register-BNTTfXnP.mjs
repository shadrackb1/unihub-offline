import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { S as useNavigate, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArrowLeft, D as Mail, E as MapPin, G as CircleX, J as CircleCheckBig, Q as ArrowRight, b as Phone, d as ShieldCheck, j as LoaderCircle, r as Users } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { r as REQUIRED_DECLARATION_ITEM_IDS } from "./consentPurposes-BEDGknoK.mjs";
import { t as ConsentDeclaration } from "./ConsentForm-B5XJQAlP.mjs";
import { a as useLandlord, n as homeForStatus, r as registerLandlord } from "./LandlordContext-CmC5R_Ek.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.register-BNTTfXnP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_LABELS = [
	"Account",
	"Profile",
	"Verification"
];
var CAMPUS_OPTIONS = [
	"Nairobi",
	"Juja",
	"Kahawa",
	"Madaraka",
	"Thika",
	"Kesses",
	"Njoro",
	"Nakuru",
	"Meru",
	"Eldoret"
];
var MIN_PASSWORD_LENGTH = 8;
var inputBase = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60";
var labelClass = "mb-1.5 block text-sm font-medium text-secondary-foreground";
var hintClass = "text-xs leading-relaxed text-muted-foreground";
var EMPTY_FORM = {
	email: "",
	password: "",
	confirmPassword: "",
	fullName: "",
	businessName: "",
	phone: "",
	whatsappNumber: "",
	nationalId: "",
	estimatedProperties: "",
	reviewNote: ""
};
/** Kenyan mobile numbers, accepted as 07…, 01…, or with a +254 prefix. */
function isPhone(value) {
	const digits = value.replace(/[\s-]/g, "");
	return /^(?:\+?254|0)?[17]\d{8}$/.test(digits);
}
var LandlordRegisterPage = () => {
	const navigate = useNavigate();
	const { user, profile, profileState, authLoading } = useLandlord();
	const { refreshSession } = useAuth();
	const [step, setStep] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)(EMPTY_FORM);
	const [campuses, setCampuses] = (0, import_react.useState)([]);
	const [consentTicks, setConsentTicks] = (0, import_react.useState)({});
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [consentRecorded, setConsentRecorded] = (0, import_react.useState)(true);
	const [registered, setRegistered] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!authLoading && user && profileState === "ok" && profile) navigate({
			to: homeForStatus(profile.status),
			replace: true
		});
	}, [
		authLoading,
		user,
		profile,
		profileState,
		navigate
	]);
	const setField = (name, value) => {
		setForm((previous) => ({
			...previous,
			[name]: value
		}));
		setErrorMessage("");
	};
	const toggleCampus = (campus) => {
		setCampuses((previous) => previous.includes(campus) ? previous.filter((c) => c !== campus) : [...previous, campus]);
		setErrorMessage("");
	};
	const toggleConsent = (id) => {
		setConsentTicks((previous) => ({
			...previous,
			[id]: !previous[id]
		}));
		setErrorMessage("");
	};
	/** Validate only the fields on the step being left. */
	const validateStep = (current) => {
		if (current === 1) {
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Enter a valid email address.";
			if (form.password.length < MIN_PASSWORD_LENGTH) return `Use a password of at least ${MIN_PASSWORD_LENGTH} characters.`;
			if (form.password !== form.confirmPassword) return "The two passwords do not match.";
		}
		if (current === 2) {
			if (form.fullName.trim().length < 3) return "Enter your full name as it appears on your ID.";
			if (!isPhone(form.phone)) return "Enter a valid Kenyan phone number, for example 0712 345 678.";
			if (!isPhone(form.whatsappNumber)) return "Enter a valid WhatsApp number, for example 0712 345 678.";
		}
		return "";
	};
	const goNext = () => {
		const problem = validateStep(step);
		if (problem) {
			setErrorMessage(problem);
			return;
		}
		setErrorMessage("");
		setStep((current) => Math.min(current + 1, STEP_LABELS.length));
	};
	const goBack = () => {
		setErrorMessage("");
		setStep((current) => Math.max(current - 1, 1));
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (step < STEP_LABELS.length) {
			goNext();
			return;
		}
		const earlier = validateStep(1) || validateStep(2);
		if (earlier) {
			setErrorMessage(earlier);
			return;
		}
		if (campuses.length === 0) {
			setErrorMessage("Choose at least one area you let property in.");
			return;
		}
		const estimated = Number(form.estimatedProperties);
		if (!form.estimatedProperties.trim() || !Number.isFinite(estimated) || estimated < 0) {
			setErrorMessage("Enter how many properties you manage, for example 3.");
			return;
		}
		const ticked = Object.entries(consentTicks).filter(([, value]) => value).map(([id]) => id);
		if (REQUIRED_DECLARATION_ITEM_IDS.filter((id) => !ticked.includes(id)).length > 0) {
			setErrorMessage("Tick every required consent statement. Nothing is ticked for you, and each statement is separate.");
			return;
		}
		setIsLoading(true);
		setErrorMessage("");
		try {
			const created = await registerLandlord({
				email: form.email.trim(),
				password: form.password,
				fullName: form.fullName.trim(),
				businessName: form.businessName.trim(),
				phone: form.phone.trim(),
				whatsappNumber: form.whatsappNumber.trim(),
				nationalId: form.nationalId.trim(),
				targetCampuses: campuses,
				estimatedProperties: Math.trunc(estimated),
				reviewNote: form.reviewNote.trim(),
				consentItems: ticked
			});
			await refreshSession();
			setConsentRecorded(created.consentRecorded);
			setRegistered(created);
			if (created.consentRecorded) navigate({
				to: "/landlord/pending",
				replace: true
			});
		} catch (error) {
			setErrorMessage(error instanceof Error && error.message ? error.message : "We could not create your account. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	if (registered && !consentRecorded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-5 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-destructive/30 bg-card p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
					className: "size-8 text-destructive",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl font-medium",
					children: "Finish your consent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: "Your account and landlord profile were created, but we could not record your consent. Nothing is published until it is recorded."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consent",
						className: "inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow",
						children: "Open the consent page"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/landlord/pending",
						className: "inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold hover:bg-accent",
						children: "Go to my application status"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-gradient-to-r from-highlight via-primary to-highlight opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 items-center justify-center px-4 py-10 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-3.5 text-highlight",
									"aria-hidden": "true"
								}), "Verified landlords only"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl",
								children: "Become a verified landlord"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
								children: "List student housing on UniHub. We check every account before a listing goes live, so students know who they are talking to."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mb-6 flex items-center gap-2",
						"aria-label": "Registration progress",
						children: STEP_LABELS.map((label, index) => {
							const number = index + 1;
							const isActive = number === step;
							const isDone = number < step;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-1 items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-current": isActive ? "step" : void 0,
										className: cn("flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold", isDone ? "bg-status/20 text-status" : isActive ? "bg-primary text-primary-foreground shadow-glow" : "border border-border bg-card text-muted-foreground"),
										children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
											className: "size-4",
											"aria-hidden": "true"
										}) : number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-xs font-medium sm:text-sm", isActive ? "text-foreground" : "text-muted-foreground"),
										children: label
									}),
									index < STEP_LABELS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: cn("h-px flex-1", isDone ? "bg-status/40" : "bg-border")
									}) : null
								]
							}, label);
						})
					}),
					errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "registration-error",
						role: "alert",
						className: "mb-5 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
							className: "mt-0.5 size-4 shrink-0",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						noValidate: true,
						className: "rounded-2xl border border-border bg-card p-5 sm:p-7",
						children: [
							step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "size-4 text-muted-foreground",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-medium",
											children: "Account details"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: labelClass,
											htmlFor: "email",
											children: "Email address"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											type: "email",
											name: "email",
											value: form.email,
											onChange: (event) => setField("email", event.target.value),
											className: inputBase,
											placeholder: "you@example.com",
											autoComplete: "email",
											"aria-invalid": Boolean(errorMessage && !form.email.includes("@")),
											"aria-describedby": errorMessage ? "registration-error" : void 0,
											disabled: isLoading,
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `mt-1.5 ${hintClass}`,
											children: "We use this for your status updates and sign-in."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "password",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "password",
										type: "password",
										name: "password",
										value: form.password,
										onChange: (event) => setField("password", event.target.value),
										className: inputBase,
										placeholder: `At least ${MIN_PASSWORD_LENGTH} characters`,
										autoComplete: "new-password",
										minLength: MIN_PASSWORD_LENGTH,
										"aria-describedby": errorMessage ? "registration-error" : void 0,
										disabled: isLoading,
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "confirmPassword",
										children: "Confirm password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "confirmPassword",
										type: "password",
										name: "confirmPassword",
										value: form.confirmPassword,
										onChange: (event) => setField("confirmPassword", event.target.value),
										className: inputBase,
										placeholder: "Repeat your password",
										autoComplete: "new-password",
										minLength: MIN_PASSWORD_LENGTH,
										"aria-describedby": errorMessage ? "registration-error" : void 0,
										disabled: isLoading,
										required: true
									})] })
								]
							}) : null,
							step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
										className: "size-4 text-muted-foreground",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg font-medium",
										children: "Who you are"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: labelClass,
												htmlFor: "fullName",
												children: "Full name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "fullName",
												type: "text",
												name: "fullName",
												value: form.fullName,
												onChange: (event) => setField("fullName", event.target.value),
												className: inputBase,
												placeholder: "Jane Otieno",
												autoComplete: "name",
												disabled: isLoading,
												required: true
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: labelClass,
												htmlFor: "businessName",
												children: "Business or agency name"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "businessName",
												type: "text",
												name: "businessName",
												value: form.businessName,
												onChange: (event) => setField("businessName", event.target.value),
												className: inputBase,
												placeholder: "Joy Homes Real Estate",
												autoComplete: "organization",
												disabled: isLoading
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `mt-1.5 ${hintClass}`,
												children: "Optional — leave blank if you list as an individual."
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: labelClass,
											htmlFor: "phone",
											children: "Phone number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											type: "tel",
											name: "phone",
											inputMode: "tel",
											value: form.phone,
											onChange: (event) => setField("phone", event.target.value),
											className: inputBase,
											placeholder: "0712 345 678",
											autoComplete: "tel",
											disabled: isLoading,
											required: true
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: labelClass,
												htmlFor: "whatsappNumber",
												children: "WhatsApp number"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "whatsappNumber",
												type: "tel",
												name: "whatsappNumber",
												inputMode: "tel",
												value: form.whatsappNumber,
												onChange: (event) => setField("whatsappNumber", event.target.value),
												className: inputBase,
												placeholder: "0712 345 678",
												autoComplete: "tel",
												disabled: isLoading,
												required: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: `mt-1.5 ${hintClass}`,
												children: "Students will reach you here."
											})
										] })
									]
								})]
							}) : null,
							step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											className: "size-4 text-muted-foreground",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-lg font-medium",
											children: "Verification details"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: labelClass,
														htmlFor: "nationalId",
														children: "National ID or passport number"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														id: "nationalId",
														type: "text",
														name: "nationalId",
														value: form.nationalId,
														onChange: (event) => setField("nationalId", event.target.value),
														className: inputBase,
														placeholder: "12345678",
														autoComplete: "off",
														disabled: isLoading
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `mt-1.5 ${hintClass}`,
														children: "Used for verification only, never shown publicly. You can add it later if you prefer."
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "sm:col-span-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
														className: labelClass,
														children: "Areas you let property in"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex flex-wrap gap-2",
														children: CAMPUS_OPTIONS.map((campus) => {
															const selected = campuses.includes(campus);
															return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => toggleCampus(campus),
																"aria-pressed": selected,
																disabled: isLoading,
																className: cn("inline-flex min-h-9 items-center rounded-full border px-3 text-xs font-medium transition-colors disabled:opacity-60", selected ? "border-foreground bg-foreground text-background" : "border-border bg-card text-secondary-foreground hover:border-foreground/50"),
																children: campus
															}, campus);
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `mt-2 ${hintClass}`,
														children: campuses.length === 0 ? "Tap every area you list in." : `${campuses.length} area${campuses.length === 1 ? "" : "s"} selected.`
													})
												] })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: labelClass,
												htmlFor: "estimatedProperties",
												children: "Properties you manage"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "estimatedProperties",
												type: "number",
												name: "estimatedProperties",
												inputMode: "numeric",
												min: 0,
												value: form.estimatedProperties,
												onChange: (event) => setField("estimatedProperties", event.target.value),
												className: inputBase,
												placeholder: "5",
												autoComplete: "off",
												disabled: isLoading,
												required: true
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: labelClass,
													htmlFor: "reviewNote",
													children: "Anything else for our review team?"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: "reviewNote",
													name: "reviewNote",
													value: form.reviewNote,
													onChange: (event) => setField("reviewNote", event.target.value),
													className: inputBase,
													rows: 3,
													placeholder: "Specialisations, certifications, or notes for the review team…",
													disabled: isLoading
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-base font-medium",
											children: "Consent declaration"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs leading-relaxed text-muted-foreground",
											children: [
												"Each statement is separate and nothing is ticked for you. You can withdraw consent at any time. The full wording is at",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/consent",
													className: "text-highlight hover:underline",
													children: "/consent"
												}),
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsentDeclaration, {
												ticked: consentTicks,
												onToggle: toggleConsent,
												disabled: isLoading,
												showBasis: false
											})
										})
									] })
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between gap-3 border-t border-border pt-5",
								children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: goBack,
									disabled: isLoading,
									className: "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Back"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/landlord/login",
									className: "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-foreground",
									children: "Already registered?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isLoading,
									className: "cta-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60",
									children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
										className: "size-4 animate-spin",
										"aria-hidden": "true"
									}), "Creating your account…"] }) : step === STEP_LABELS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Complete registration", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
										className: "size-4",
										"aria-hidden": "true"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})] })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-2xl border border-border bg-card/40 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"Already have an account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/landlord/login",
									className: "font-medium text-foreground underline-offset-4 hover:underline",
									children: "Sign in"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-3.5 text-highlight",
									"aria-hidden": "true"
								}), " Verified listings"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-3.5 text-highlight",
									"aria-hidden": "true"
								}), " WhatsApp-first contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-3.5 text-highlight",
									"aria-hidden": "true"
								}), " Campus-focused areas"]
							})
						]
					})
				]
			})
		})]
	});
};
var SplitComponent = LandlordRegisterPage;
//#endregion
export { SplitComponent as component };
