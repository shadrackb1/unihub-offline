import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as Building, m as Search, y as Plus } from "../_libs/lucide-react.mjs";
import { o as deleteUniversity, p as getUniversities } from "./adminContent-BucBge6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminUniversitiesPage-C_000IFg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routeOptions = { loader: async () => {
	return { universities: await getUniversities() };
} };
function AdminUniversitiesPage() {
	const { universities } = useLoaderData({ strict: false });
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [deletingId, setDeletingId] = (0, import_react.useState)(null);
	universities.filter((uni) => {
		const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || uni.location.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === "all" || uni.status === statusFilter;
		return matchesSearch && matchesStatus;
	});
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this university?")) return;
		setDeletingId(id);
		try {
			await deleteUniversity(id);
		} catch (error) {
			console.error("Delete failed:", error);
			alert("Failed to delete university");
		} finally {
			setDeletingId(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-display font-medium text-white flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-8 h-8 text-purple-400" }), "Universities"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-zinc-400 mt-2",
				children: "Manage university listings"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/admin/universities/new",
				className: "px-6 py-3 flex items-center gap-2 rounded-xl bg-purple-500 text-black text-sm font-medium hover:bg-purple-400 hover:scale-105 transition-all font-display shadow-[0_0_20px_rgba(168,85,247,0.3)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), " Add University"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search universities...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					className: "px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-purple-500",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: "All Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "active",
							children: "Active"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "inactive",
							children: "Inactive"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-zinc-400 text-sm font-medium border-b border-zinc-800 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "University"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Code"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-right",
								children: "Actions"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-zinc-800",
						children: universities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							colSpan: 6,
							className: "text-center py-12 text-zinc-500",
							children: [
								"No universities yet.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/admin/universities/new",
									className: "text-purple-400 hover:underline",
									children: "Add your first university"
								})
							]
						}) }) : universities.map((uni) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-zinc-900/50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden",
											children: uni.logo_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: uni.logo_url,
												alt: uni.name,
												className: "w-full h-full object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: "🏫"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-white",
											children: uni.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-zinc-400",
											children: uni.slug
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 font-mono text-zinc-300",
									children: uni.slug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-zinc-300",
									children: uni.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `px-2 py-1 rounded-full text-xs font-medium ${uni.status === "active" ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`,
										children: uni.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-4 text-zinc-300",
									children: [uni.contact_email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["📧 ", uni.contact_email] }), uni.contact_phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["📞 ", uni.contact_phone] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `/admin/universities/${uni.id}`,
											className: "p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors",
											title: "Edit",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-5 h-5",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 2,
													d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5a2.121 2.121 0 013 3z"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => uni.id && handleDelete(uni.id),
											disabled: deletingId === uni.id,
											className: "p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
											title: "Delete",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-5 h-5",
												fill: "none",
												stroke: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													strokeWidth: 2,
													d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												})
											})
										})]
									})
								})
							]
						}, uni.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { routeOptions as n, AdminUniversitiesPage as t };
