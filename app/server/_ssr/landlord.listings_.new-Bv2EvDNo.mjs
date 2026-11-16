import { o as __toESM } from "../_runtime.mjs";
import { Ln as string, Nn as object, Tn as _enum } from "../_libs/@better-auth/core+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as useRouter, S as useNavigate, Y as isRedirect, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArrowLeft, F as ImagePlus, G as CircleX, Q as ArrowRight, j as LoaderCircle, q as CircleCheck, s as Trash2, u as Sparkles, y as Plus } from "../_libs/lucide-react.mjs";
import { n as createListing } from "./services-BxKA9otU.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as uploadToCloudinary } from "./cloudinary-B4kFxH8F.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { n as useApprovedLandlord, t as LandlordShell } from "./LandlordShell-BKD34LJR.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BwdSb3_C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landlord.listings_.new-Bv2EvDNo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	title: string().max(200).default(""),
	type: string().max(60).default(""),
	campus: string().max(120).default(""),
	location: string().max(200).default(""),
	price: string().max(30).default(""),
	deposit: string().max(30).default(""),
	amenities: string().max(600).default(""),
	notes: string().max(1200).default(""),
	tone: _enum([
		"clear",
		"safety",
		"budget"
	]).default("clear")
});
var draftListingDescription = createServerFn({ method: "POST" }).inputValidator((d) => Input.parse(d)).handler(createSsrRpc("83cae8a96116ab516d2860b2a5e9c5b652e413e5c51815f96990da7f8641a092"));
function AiDescriptionAssistant({ details, onApply }) {
	const draft = useServerFn(draftListingDescription);
	const [notes, setNotes] = (0, import_react.useState)("");
	const [tone, setTone] = (0, import_react.useState)("clear");
	const [result, setResult] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const run = async () => {
		setLoading(true);
		setError(null);
		try {
			const r = await draft({ data: {
				...Object.fromEntries(Object.entries(details).map(([k, v]) => [k, String(v ?? "")])),
				notes,
				tone
			} });
			if (r.error) setError(r.error);
			else setResult(r.text);
		} catch {
			setError("Couldn't reach the assistant. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card space-y-3 rounded-3xl border border-border p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					className: "h-4 w-4",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-medium",
					children: "AI description assistant"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Uses your property details above. Add anything students should know."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: notes,
				onChange: (e) => setNotes(e.target.value),
				rows: 3,
				maxLength: 1200,
				placeholder: "e.g. 5 min walk to main gate, borehole water, CCTV, quiet study area",
				className: "w-full rounded-2xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [[
					"clear",
					"safety",
					"budget"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTone(t),
					"aria-pressed": tone === t,
					className: `rounded-full border px-3 py-1 text-xs ${tone === t ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground"}`,
					children: t === "clear" ? "Clear & direct" : t === "safety" ? "Safety-focused" : "Budget-friendly"
				}, t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: run,
					disabled: loading,
					className: "cta-shine ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60",
					children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), loading ? "Drafting…" : result ? "Regenerate" : "Generate with AI"]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-sm text-destructive",
				children: error
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: result,
					onChange: (e) => setResult(e.target.value),
					rows: 8,
					className: "w-full rounded-2xl border border-border bg-background px-3 py-2 text-sm text-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onApply(result),
					className: "rounded-full border border-border px-4 py-2 text-sm text-foreground hover:bg-accent",
					children: "Use this description"
				})]
			})
		]
	});
}
var MAX_IMAGES = 10;
var CAMPUS_OPTIONS = [
	{
		value: "UoN",
		label: "University of Nairobi (UoN)"
	},
	{
		value: "JKUAT",
		label: "Jomo Kenyatta University (JKUAT)"
	},
	{
		value: "KU",
		label: "Kenyatta University (KU)"
	},
	{
		value: "SU",
		label: "Strathmore University (SU)"
	},
	{
		value: "MU",
		label: "Moi University (MU)"
	},
	{
		value: "EGU",
		label: "Egerton University (EGU)"
	},
	{
		value: "Thika",
		label: "Thika student belt"
	},
	{
		value: "Nairobi",
		label: "Nairobi (other areas)"
	},
	{
		value: "Juja",
		label: "Juja"
	},
	{
		value: "Kahawa",
		label: "Kahawa"
	},
	{
		value: "Madaraka",
		label: "Madaraka"
	},
	{
		value: "Kesses",
		label: "Kesses"
	},
	{
		value: "Njoro",
		label: "Njoro"
	},
	{
		value: "Nakuru",
		label: "Nakuru"
	}
];
var TYPE_OPTIONS = [
	"Bedsitter",
	"Studio",
	"Single room",
	"One bedroom",
	"Two bedroom",
	"Three bedroom",
	"Apartment",
	"Hostel"
];
var LandlordNewListingPage = () => {
	const { uid, profile } = useApprovedLandlord();
	useNavigate();
	const [formData, setFormData] = (0, import_react.useState)({
		title: "",
		campus: "",
		location: "",
		type: "",
		price: "",
		deposit: "",
		description: "",
		amenities: "",
		images: []
	});
	const [step, setStep] = (0, import_react.useState)(1);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [uploadError, setUploadError] = (0, import_react.useState)("");
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const [savedId, setSavedId] = (0, import_react.useState)(null);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		setErrors((prev) => prev[name] ? {
			...prev,
			[name]: ""
		} : prev);
	};
	const validateStepOne = () => {
		const next = {};
		if (!formData.title.trim()) next["title"] = "Give the listing a short, clear title.";
		if (!formData.campus) next["campus"] = "Choose the campus area this property serves.";
		if (!formData.location.trim()) next["location"] = "Say where it is, e.g. \"5 min from main gate\".";
		if (!formData.type) next["type"] = "Pick the property type.";
		const price = Number(formData.price);
		if (!formData.price.trim() || Number.isNaN(price) || price < 1e3) next["price"] = "Enter the monthly rent in KES (at least 1,000).";
		const deposit = Number(formData.deposit);
		if (formData.deposit.trim() && (Number.isNaN(deposit) || deposit < 0)) next["deposit"] = "Deposit must be a number, or leave it blank.";
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const goToStepTwo = () => {
		if (validateStepOne()) {
			setStep(2);
			setSubmitError("");
		}
	};
	const handlePhotoUpload = async (e) => {
		const files = Array.from(e.target.files ?? []);
		e.target.value = "";
		if (files.length === 0) return;
		const room = MAX_IMAGES - formData.images.length;
		if (room <= 0) {
			setUploadError(`You can add up to ${MAX_IMAGES} photos.`);
			return;
		}
		setIsUploading(true);
		setUploadError("");
		try {
			const urls = await Promise.all(files.slice(0, room).map((file) => uploadToCloudinary(file)));
			setFormData((prev) => ({
				...prev,
				images: [...prev.images, ...urls]
			}));
		} catch (error) {
			console.error("Photo upload failed:", error);
			setUploadError(error instanceof Error ? `Photo upload failed: ${error.message}` : "Photo upload failed. Try smaller images, or submit without photos.");
		} finally {
			setIsUploading(false);
		}
	};
	const removePhoto = (url) => {
		setFormData((prev) => ({
			...prev,
			images: prev.images.filter((p) => p !== url)
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (step === 1) {
			goToStepTwo();
			return;
		}
		if (!formData.description.trim() || formData.description.trim().length < 30) {
			setErrors({ description: "Write at least a couple of sentences so students know what to expect." });
			return;
		}
		if (!uid) {
			setSubmitError("Your session expired. Sign in again to submit this listing.");
			return;
		}
		setIsSaving(true);
		setSubmitError("");
		try {
			const id = await createListing(uid, {
				title: formData.title.trim(),
				campus: formData.campus,
				location: formData.location.trim(),
				type: formData.type,
				price: Number(formData.price),
				deposit: formData.deposit.trim() ? Number(formData.deposit) : 0,
				description: formData.description.trim(),
				amenities: formData.amenities.split(",").map((a) => a.trim()).filter((a) => a.length > 0),
				images: formData.images,
				...profile?.fullName ? { landlordName: profile.fullName } : {}
			});
			setSavedId(id);
		} catch (error) {
			console.error("Failed to create listing:", error);
			setSubmitError(error instanceof Error ? error.message : "We could not save your listing. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};
	if (savedId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto h-10 w-10 text-emerald-600",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-xl font-medium text-emerald-900",
				children: "Listing submitted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-emerald-800",
				children: "Your listing is pending review. Once an admin approves it, it appears in campus search."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/landlord/listings",
					className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
					children: "View my listings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setSavedId(null);
						setFormData({
							title: "",
							campus: "",
							location: "",
							type: "",
							price: "",
							deposit: "",
							description: "",
							amenities: "",
							images: []
						});
						setStep(1);
					},
					className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent",
					children: "Add another"
				})]
			})
		]
	}) });
	const fieldClass = (name) => cn("w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring", errors[name] ? "border-destructive" : "border-border");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/landlord/listings",
					className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to listings"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-2xl font-medium",
					children: "New listing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Listings go to review before students see them. Clear photos and honest details get approved faster."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "flex items-center gap-3 text-sm",
				"aria-label": "Listing steps",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 font-medium", step === 1 ? "text-foreground" : "text-muted-foreground"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex h-6 w-6 items-center justify-center rounded-full border text-xs", step === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border"),
							children: "1"
						}), "Property details"]
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
						}), "Photos & description"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-6",
				noValidate: true,
				children: [step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "title",
							className: "mb-1 block text-sm font-medium",
							children: "Property title"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "title",
							name: "title",
							value: formData.title,
							onChange: handleChange,
							className: fieldClass("title"),
							placeholder: "Spacious bedsitter near JKUAT main gate",
							"aria-invalid": Boolean(errors["title"])
						}),
						errors["title"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors["title"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "campus",
								className: "mb-1 block text-sm font-medium",
								children: "Campus / area"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "campus",
								name: "campus",
								value: formData.campus,
								onChange: handleChange,
								className: fieldClass("campus"),
								"aria-invalid": Boolean(errors["campus"]),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select campus area"
								}), CAMPUS_OPTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.value,
									children: c.label
								}, c.value))]
							}),
							errors["campus"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors["campus"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "type",
								className: "mb-1 block text-sm font-medium",
								children: "Property type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "type",
								name: "type",
								value: formData.type,
								onChange: handleChange,
								className: fieldClass("type"),
								"aria-invalid": Boolean(errors["type"]),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select type"
								}), TYPE_OPTIONS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: t,
									children: t
								}, t))]
							}),
							errors["type"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors["type"]
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "location",
							className: "mb-1 block text-sm font-medium",
							children: "Specific location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "location",
							name: "location",
							value: formData.location,
							onChange: handleChange,
							className: fieldClass("location"),
							placeholder: "e.g. Near main gate, opposite the supermarket",
							"aria-invalid": Boolean(errors["location"])
						}),
						errors["location"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors["location"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "price",
								className: "mb-1 block text-sm font-medium",
								children: "Monthly rent (KES)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "price",
								name: "price",
								type: "number",
								inputMode: "numeric",
								min: "1000",
								value: formData.price,
								onChange: handleChange,
								className: fieldClass("price"),
								placeholder: "15000",
								"aria-invalid": Boolean(errors["price"])
							}),
							errors["price"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors["price"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "deposit",
								className: "mb-1 block text-sm font-medium",
								children: "Deposit (KES, optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "deposit",
								name: "deposit",
								type: "number",
								inputMode: "numeric",
								min: "0",
								value: formData.deposit,
								onChange: handleChange,
								className: fieldClass("deposit"),
								placeholder: "15000",
								"aria-invalid": Boolean(errors["deposit"])
							}),
							errors["deposit"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-destructive",
								children: errors["deposit"]
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/landlord/listings",
							className: "text-sm text-muted-foreground hover:text-foreground",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: goToStepTwo,
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
							children: ["Next: photos & description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				] }), step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiDescriptionAssistant, {
						details: {
							...formData,
							campus: formData.campus,
							price: formData.price
						},
						onApply: (text) => {
							setFormData((prev) => ({
								...prev,
								description: text
							}));
							setErrors((prev) => ({
								...prev,
								description: ""
							}));
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "description",
							className: "mb-1 block text-sm font-medium",
							children: "Description"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "description",
							name: "description",
							value: formData.description,
							onChange: handleChange,
							rows: 7,
							className: fieldClass("description"),
							placeholder: "Describe the rooms, water and electricity, security, transport links.",
							"aria-invalid": Boolean(errors["description"])
						}),
						errors["description"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-destructive",
							children: errors["description"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "amenities",
						className: "mb-1 block text-sm font-medium",
						children: "Amenities (comma-separated)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "amenities",
						name: "amenities",
						value: formData.amenities,
						onChange: handleChange,
						className: "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
						placeholder: "Wi-Fi, 24/7 water, security, parking, gym"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-sm font-medium",
							children: "Photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-xs text-muted-foreground",
							children: [
								"Up to ",
								MAX_IMAGES,
								" images. First photo becomes the cover."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent",
							children: [
								isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-4 w-4" }),
								isUploading ? "Uploading…" : "Add photos",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									multiple: true,
									onChange: handlePhotoUpload,
									className: "sr-only",
									disabled: isUploading
								})
							]
						}),
						uploadError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-destructive",
							children: uploadError
						}),
						formData.images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: formData.images.map((url) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: url,
									alt: "Property photo",
									className: "h-20 w-24 rounded-lg border border-border object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removePhoto(url),
									"aria-label": "Remove photo",
									className: "absolute -right-1.5 -top-1.5 rounded-full border border-border bg-background p-1 text-destructive shadow-sm hover:bg-destructive/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3 w-3" })
								})]
							}, url))
						})
					] }),
					submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0" }),
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
							disabled: isSaving || isUploading,
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60",
							children: [isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), isSaving ? "Submitting…" : "Submit for review"]
						})]
					})
				] })]
			})
		]
	}) });
};
var SplitComponent = LandlordNewListingPage;
//#endregion
export { SplitComponent as component };
