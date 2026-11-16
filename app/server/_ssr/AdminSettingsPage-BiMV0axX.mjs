import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Save, p as Settings } from "../_libs/lucide-react.mjs";
import { f as getSiteSettingsData, h as updateSiteSettingsData } from "./adminContent-BucBge6g.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminSettingsPage-BiMV0axX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routeOptions = { loader: async () => {
	return { settings: await getSiteSettingsData() };
} };
function AdminSettingsPage() {
	const { settings } = useLoaderData({ strict: false });
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("general");
	const [formData, setFormData] = (0, import_react.useState)({
		siteName: settings?.siteName || "UniHub",
		siteUrl: settings?.siteUrl || "",
		adminEmail: settings?.adminEmail || "",
		maintenanceMode: settings?.maintenanceMode || false,
		maintenanceMessage: settings?.maintenanceMessage || "We are currently performing scheduled maintenance."
	});
	const handleSave = async (e) => {
		e.preventDefault();
		setIsSaving(true);
		try {
			await updateSiteSettingsData(formData);
			alert("Settings saved successfully!");
		} catch (error) {
			console.error("Save failed:", error);
			alert("Failed to save settings");
		} finally {
			setIsSaving(false);
		}
	};
	const renderGeneralTab = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: 20
		},
		animate: {
			opacity: 1,
			x: 0
		},
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-zinc-800 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium font-display mb-1 text-white",
				children: "General Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-zinc-400",
				children: "Basic site configuration"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Site Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "siteName",
						value: formData.siteName,
						onChange: (e) => setFormData({
							...formData,
							siteName: e.target.value
						}),
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Site URL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "siteUrl",
						value: formData.siteUrl,
						onChange: (e) => setFormData({
							...formData,
							siteUrl: e.target.value
						}),
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
						placeholder: "https://unihub.ke"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Admin Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						name: "adminEmail",
						value: formData.adminEmail,
						onChange: (e) => setFormData({
							...formData,
							adminEmail: e.target.value
						}),
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: "maintenanceMode",
							checked: formData.maintenanceMode,
							onChange: (e) => setFormData({
								...formData,
								maintenanceMode: e.target.checked
							}),
							className: "w-5 h-5 accent-brand-500 rounded"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium text-white",
							children: "Maintenance Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-zinc-500",
							children: "Display maintenance page to visitors"
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Maintenance Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "maintenanceMessage",
						value: formData.maintenanceMessage,
						onChange: (e) => setFormData({
							...formData,
							maintenanceMessage: e.target.value
						}),
						rows: 3,
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500"
					})]
				})
			]
		})]
	});
	const renderFeaturesTab = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: 20
		},
		animate: {
			opacity: 1,
			x: 0
		},
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-zinc-800 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium font-display mb-1 text-white",
				children: "Feature Toggles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-zinc-400",
				children: "Enable or disable platform features globally."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer hover:border-zinc-700 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: false,
						onChange: (e) => console.log(e.target.checked),
						className: "w-5 h-5 accent-brand-500 rounded"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-white",
						children: "Enable Blog Section"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-zinc-500",
						children: "Shows the blog and articles tab across the platform."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer hover:border-zinc-700 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: false,
						onChange: (e) => console.log(e.target.checked),
						className: "w-5 h-5 accent-brand-500 rounded"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-white",
						children: "Enable User Reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-zinc-500",
						children: "Allow tenants to leave reviews for properties."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 cursor-pointer hover:border-zinc-700 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: false,
						onChange: (e) => console.log(e.target.checked),
						className: "w-5 h-5 accent-brand-500 rounded"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-white",
						children: "Enable Saved Searches"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-zinc-500",
						children: "Allow users to save search criteria and get alerts."
					})] })]
				})
			]
		})]
	});
	const renderAdvancedTab = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: 20
		},
		animate: {
			opacity: 1,
			x: 0
		},
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-zinc-800 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-medium font-display mb-1 text-white",
				children: "Advanced Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-zinc-400",
				children: "Advanced configuration options. Use with caution."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Custom CSS (injected in <head>)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 6,
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-brand-500",
						placeholder: "/* Custom CSS here */"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium text-zinc-300",
						children: "Custom JS (injected before </body>)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 6,
						className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-brand-500",
						placeholder: "// Custom JavaScript here"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: false,
							className: "w-5 h-5 accent-brand-500 rounded"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium text-white",
							children: "Enable Debug Mode"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-zinc-500",
							children: "Show debug panel and verbose logging"
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-zinc-800 pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl font-medium transition-colors",
						children: "Clear All Cache & Rebuild"
					})
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-display font-medium text-white flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-8 h-8 text-blue-400" }), "Settings"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-zinc-400 mt-2",
				children: "Configure site-wide settings"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				form: "settings-form",
				disabled: isSaving,
				className: "px-6 py-3 flex items-center gap-2 rounded-xl bg-brand-500 text-black text-sm font-medium hover:bg-white hover:scale-105 transition-all font-display shadow-[0_0_20px_var(--color-brand-500)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-4 h-4" }),
					" ",
					isSaving ? "Saving..." : "Save Settings"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			id: "settings-form",
			onSubmit: handleSave,
			className: "space-y-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:w-64 shrink-0 flex flex-col gap-2",
					children: [
						{
							id: "general",
							icon: "🏠",
							label: "General"
						},
						{
							id: "features",
							icon: "🔧",
							label: "Features"
						},
						{
							id: "advanced",
							icon: "⚙️",
							label: "Advanced"
						}
					].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab(tab.id),
						className: `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-sm w-full text-left ${activeTab === tab.id ? "bg-zinc-800 text-white shadow-inner border border-zinc-700" : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 border border-transparent"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.icon }),
							" ",
							tab.label
						]
					}, tab.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						activeTab === "general" && renderGeneralTab(),
						activeTab === "features" && renderFeaturesTab(),
						activeTab === "advanced" && renderAdvancedTab()
					] })]
				})]
			})
		})]
	});
}
//#endregion
export { routeOptions as n, AdminSettingsPage as t };
