import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ExternalLink, J as CircleCheckBig, N as Info, _ as RotateCcw, g as Save, j as LoaderCircle, l as Star, o as TriangleAlert, r as Users, s as Trash2, x as Palette, y as Plus } from "../_libs/lucide-react.mjs";
import { t as invalidateSiteSettings } from "./useSiteSettings-rriqBin-.mjs";
import { n as sampleListings } from "./listings-DkuUnH_5.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminCMSPage-CWeCqvKu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	{
		value: "0rem",
		label: "Square"
	},
	{
		value: "0.5rem",
		label: "Small"
	},
	{
		value: "1rem",
		label: "Medium"
	},
	{
		value: "1.5rem",
		label: "Large (current)"
	},
	{
		value: "2rem",
		label: "Extra large"
	}
];
var TABS = [
	{
		id: "content",
		label: "Content",
		icon: Star
	},
	{
		id: "theme",
		label: "Theme",
		icon: Palette
	},
	{
		id: "team",
		label: "Team",
		icon: Users
	}
];
function buildState(settings) {
	return {
		heroTitle: settings?.heroTitle ?? "",
		heroSubtitle: settings?.heroSubtitle ?? "",
		heroImage: settings?.heroImage ?? "",
		ctaText: settings?.ctaText ?? "",
		featuredProperties: settings?.featuredProperties ?? [],
		theme: {
			...DEFAULT_THEME,
			...settings?.theme ?? {}
		},
		features: { enableBlog: settings?.features?.enableBlog === true },
		teamMembers: settings?.teamMembers ?? []
	};
}
var routeOptions = { loader: async () => {
	const response = await fetch("/api/site-settings", {
		headers: { accept: "application/json" },
		credentials: "include"
	});
	if (!response.ok) return {
		settings: null,
		error: `Could not load site content (${response.status}).`
	};
	return {
		settings: (await response.json()).settings ?? null,
		error: null
	};
} };
var fieldClass = "w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60";
var labelClass = "mb-1.5 block text-sm font-medium text-secondary-foreground";
var hintClass = "mt-1 text-xs leading-relaxed text-muted-foreground";
var AdminCMSPage = () => {
	const loaderData = useLoaderData({ strict: false }) ?? {};
	const initial = (0, import_react.useMemo)(() => buildState(loaderData.settings), [loaderData.settings]);
	const [form, setForm] = (0, import_react.useState)(initial);
	const [baseline, setBaseline] = (0, import_react.useState)(initial);
	const [tab, setTab] = (0, import_react.useState)("content");
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(loaderData.error ?? null);
	const [savedAt, setSavedAt] = (0, import_react.useState)(loaderData.settings?.updatedAt ?? null);
	const [savedBy, setSavedBy] = (0, import_react.useState)(loaderData.settings?.updatedBy ?? null);
	const [success, setSuccess] = (0, import_react.useState)(false);
	const [previewKey, setPreviewKey] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setForm(initial);
		setBaseline(initial);
	}, [initial]);
	const dirty = JSON.stringify(form) !== JSON.stringify(baseline);
	const featuredCount = form.featuredProperties.length;
	const update = (key, value) => {
		setForm((previous) => ({
			...previous,
			[key]: value
		}));
		setSuccess(false);
	};
	const updateTheme = (key, value) => {
		setForm((previous) => ({
			...previous,
			theme: {
				...previous.theme,
				[key]: value
			}
		}));
		setSuccess(false);
	};
	const toggleFeatured = (id) => {
		const next = form.featuredProperties.includes(id) ? form.featuredProperties.filter((item) => item !== id) : [...form.featuredProperties, id];
		update("featuredProperties", next);
	};
	const updateMember = (index, patch) => {
		update("teamMembers", form.teamMembers.map((member, i) => i === index ? {
			...member,
			...patch
		} : member));
	};
	const addMember = () => {
		if (form.teamMembers.length >= 12) {
			setError("The team section holds at most 12 people.");
			return;
		}
		update("teamMembers", [...form.teamMembers, {
			name: "",
			role: "",
			photoUrl: ""
		}]);
	};
	const removeMember = (index) => {
		update("teamMembers", form.teamMembers.filter((_, i) => i !== index));
	};
	const reset = () => {
		setForm(baseline);
		setError(null);
		setSuccess(false);
	};
	const save = async () => {
		setIsSaving(true);
		setError(null);
		setSuccess(false);
		try {
			const response = await fetch("/api/site-settings", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				credentials: "include",
				body: JSON.stringify(form)
			});
			const payload = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(payload.error ?? `Could not save the site content (${response.status}).`);
			setSavedAt(payload.settings?.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString());
			setSavedBy(payload.settings?.updatedBy ?? null);
			setBaseline(form);
			setSuccess(true);
			invalidateSiteSettings();
			setPreviewKey((key) => key + 1);
		} catch (saveError) {
			setError(saveError instanceof Error ? saveError.message : "Could not save the site content.");
		} finally {
			setIsSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Site builder"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-2xl font-medium leading-tight sm:text-3xl",
						children: "Public site content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",
						children: "What visitors see on the homepage and the About page. Changes go live as soon as you save; there is no draft."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: reset,
						disabled: !dirty || isSaving,
						className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Discard"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: save,
						disabled: !dirty || isSaving,
						className: "cta-shine inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50",
						children: [isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "size-4 animate-spin",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
							className: "size-4",
							"aria-hidden": "true"
						}), isSaving ? "Saving…" : dirty ? "Save changes" : "Saved"]
					})]
				})]
			}),
			success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "status",
				className: "flex items-center gap-2 rounded-xl border border-status/30 bg-status/10 px-4 py-3 text-sm text-status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, {
					className: "size-4 shrink-0",
					"aria-hidden": "true"
				}), "Saved. The homepage and About page now show this content."]
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "alert",
				className: "flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "mt-0.5 size-4 shrink-0",
					"aria-hidden": "true"
				}), error]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground",
				children: [savedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Last saved ",
					new Date(savedAt).toLocaleString(),
					savedBy ? ` by ${savedBy}` : ""
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nothing saved yet — the site is showing its built-in copy." }), dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-highlight",
					children: "Unsaved changes"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "Site builder sections",
						className: "flex flex-wrap gap-2",
						children: TABS.map((item) => {
							const active = tab === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": active,
								"aria-controls": `panel-${item.id}`,
								id: `tab-${item.id}`,
								onClick: () => setTab(item.id),
								className: cn("inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors", active ? "border-foreground bg-foreground text-background" : "border-border bg-card text-secondary-foreground hover:border-foreground/40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-4",
									"aria-hidden": "true"
								}), item.label]
							}, item.id);
						})
					}),
					tab === "content" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "panel-content",
						role: "tabpanel",
						"aria-labelledby": "tab-content",
						className: "mt-4 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "heroTitle",
									children: "Hero headline"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "heroTitle",
									value: form.heroTitle,
									onChange: (event) => update("heroTitle", event.target.value),
									className: fieldClass,
									placeholder: "Find your perfect home.",
									maxLength: 90,
									disabled: isSaving
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: hintClass,
									children: [form.heroTitle.length, "/90 characters."]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "heroSubtitle",
									children: "Hero supporting line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "heroSubtitle",
									value: form.heroSubtitle,
									onChange: (event) => update("heroSubtitle", event.target.value),
									className: fieldClass,
									rows: 3,
									maxLength: 220,
									placeholder: "Browse verified hostels, bedsitters, and rentals near campus.",
									disabled: isSaving
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: hintClass,
									children: [form.heroSubtitle.length, "/220 characters."]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "ctaText",
									children: "Button label"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "ctaText",
									value: form.ctaText,
									onChange: (event) => update("ctaText", event.target.value),
									className: fieldClass,
									placeholder: "Browse Listings",
									maxLength: 40,
									disabled: isSaving
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: labelClass,
										htmlFor: "heroImage",
										children: "Hero image URL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "heroImage",
										type: "url",
										value: form.heroImage,
										onChange: (event) => update("heroImage", event.target.value),
										className: fieldClass,
										placeholder: "https://…",
										disabled: isSaving
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: hintClass,
										children: "Leave blank to keep the video and poster the site ships with."
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-base font-medium",
											children: "Featured listings"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-muted-foreground",
											children: [featuredCount, " of 12 selected"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: hintClass,
										children: "Featured listings appear in the homepage rail in the order they are selected."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 grid gap-2 sm:grid-cols-2",
										children: sampleListings.map((listing) => {
											const id = listing.id ?? listing.title;
											const checked = form.featuredProperties.includes(id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: cn("flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors", checked ? "border-foreground/40 bg-accent" : "border-border hover:border-foreground/30"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked,
													onChange: () => toggleFeatured(id),
													className: "mt-1 size-4",
													disabled: isSaving
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-sm font-medium leading-snug",
														children: listing.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-0.5 block text-xs text-muted-foreground",
														children: [
															listing.location,
															" · ",
															listing.price
														]
													})]
												})]
											}) }, id);
										})
									})
								]
							})
						]
					}) : null,
					tab === "theme" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "panel-theme",
						role: "tabpanel",
						"aria-labelledby": "tab-theme",
						className: "mt-4 space-y-5 rounded-2xl border border-border bg-card p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-start gap-2 rounded-xl border border-border bg-background/40 p-3 text-xs leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									className: "mt-0.5 size-4 shrink-0 text-highlight",
									"aria-hidden": "true"
								}), "The theme is applied to the whole public site the next time a page loads. Admin screens keep the console palette so they stay readable while you work."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-3",
								children: [
									["primaryColor", "Accent"],
									["backgroundColor", "Background"],
									["surfaceColor", "Surface"]
								].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: key,
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: key,
										type: "color",
										value: form.theme[key],
										onChange: (event) => updateTheme(key, event.target.value),
										className: "size-10 shrink-0 rounded-lg border border-input bg-transparent p-0",
										disabled: isSaving
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": `${label} hex value`,
										value: form.theme[key],
										onChange: (event) => updateTheme(key, event.target.value),
										className: fieldClass,
										spellCheck: false,
										disabled: isSaving
									})]
								})] }, key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "fontFamily",
									children: "Font"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "fontFamily",
									value: form.theme.fontFamily,
									onChange: (event) => updateTheme("fontFamily", event.target.value),
									className: fieldClass,
									disabled: isSaving,
									children: FONT_OPTIONS.map((font) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: font,
										children: font
									}, font))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: labelClass,
									htmlFor: "borderRadius",
									children: "Corner radius"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "borderRadius",
									value: form.theme.borderRadius,
									onChange: (event) => updateTheme("borderRadius", event.target.value),
									className: fieldClass,
									disabled: isSaving,
									children: RADIUS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: option.value,
										children: option.label
									}, option.value))
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
									children: "Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 overflow-hidden border border-border",
									style: {
										borderRadius: form.theme.borderRadius,
										background: form.theme.backgroundColor,
										fontFamily: `"${form.theme.fontFamily}", sans-serif`
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold leading-tight",
												style: { color: form.theme.primaryColor },
												children: form.heroTitle || "Find your perfect home."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-white/70",
												children: form.heroSubtitle || "Verified student housing near campus."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-4 inline-flex px-4 py-2 text-xs font-semibold text-black",
												style: {
													background: form.theme.primaryColor,
													borderRadius: form.theme.borderRadius
												},
												children: form.ctaText || "Browse Listings"
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border pt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: form.features.enableBlog,
										onChange: (event) => update("features", {
											...form.features,
											enableBlog: event.target.checked
										}),
										className: "mt-1 size-4",
										disabled: isSaving
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium",
										children: "Show the blog section"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs text-muted-foreground",
										children: "Reserved for the articles rail. Nothing is shown until published posts exist."
									})] })]
								})
							})
						]
					}) : null,
					tab === "team" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "panel-team",
						role: "tabpanel",
						"aria-labelledby": "tab-team",
						className: "mt-4 space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-base font-medium",
								children: "Team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: hintClass,
								children: "Shown on the About page, in this order."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: addMember,
								className: "inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold hover:bg-accent",
								disabled: isSaving,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Add member"]
							})]
						}), form.teamMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground",
							children: "No team members yet. The About page hides this section until at least one is added."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: form.teamMembers.map((member, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid size-16 place-items-center overflow-hidden rounded-lg border border-border bg-background",
										children: member.photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: member.photoUrl,
											alt: "",
											className: "size-full object-cover",
											loading: "lazy"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
											className: "size-5 text-muted-foreground",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "sr-only",
											htmlFor: `member-name-${index}`,
											children: [
												"Team member ",
												index + 1,
												" name"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: `member-name-${index}`,
											value: member.name,
											onChange: (event) => updateMember(index, { name: event.target.value }),
											className: fieldClass,
											placeholder: "Full name",
											maxLength: 80,
											disabled: isSaving
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "sr-only",
											htmlFor: `member-role-${index}`,
											children: [
												"Team member ",
												index + 1,
												" role"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: `member-role-${index}`,
											value: member.role,
											onChange: (event) => updateMember(index, { role: event.target.value }),
											className: `${fieldClass} mt-2`,
											placeholder: "Role or title",
											maxLength: 80,
											disabled: isSaving
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "sr-only",
											htmlFor: `member-photo-${index}`,
											children: [
												"Team member ",
												index + 1,
												" photo URL"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: `member-photo-${index}`,
											type: "url",
											value: member.photoUrl,
											onChange: (event) => updateMember(index, { photoUrl: event.target.value }),
											className: fieldClass,
											placeholder: "https://… photo URL",
											disabled: isSaving
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: hintClass,
											children: "Optional. A square image works best."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeMember(index),
										"aria-label": `Remove ${member.name || `team member ${index + 1}`}`,
										className: "inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive",
										disabled: isSaving,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
											className: "size-4",
											"aria-hidden": "true"
										})
									})
								]
							}, index))
						})]
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
								children: "Published homepage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1 text-xs font-medium text-highlight hover:underline",
								children: ["Open", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
									className: "size-3",
									"aria-hidden": "true"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border bg-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: "/",
								title: "Published homepage preview",
								className: "h-[520px] w-full",
								loading: "lazy"
							}, previewKey)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: "The preview is the live page. Save to see your changes appear in it."
						})
					]
				})]
			})
		]
	});
};
//#endregion
export { routeOptions as n, AdminCMSPage as t };
