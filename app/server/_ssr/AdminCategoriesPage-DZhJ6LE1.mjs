import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Tag } from "../_libs/lucide-react.mjs";
import { c as getCategories, r as deleteCategory } from "./adminContent-BucBge6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminCategoriesPage-DZhJ6LE1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routeOptions = { loader: async () => {
	return { categories: await getCategories() };
} };
function AdminCategoriesPage() {
	const { categories } = useLoaderData({ strict: false });
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [deletingId, setDeletingId] = (0, import_react.useState)(null);
	categories.filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()) || category.slug.toLowerCase().includes(searchTerm.toLowerCase()));
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this category?")) return;
		setDeletingId(id);
		try {
			await deleteCategory(id);
		} catch (error) {
			console.error("Delete failed:", error);
			alert("Failed to delete category");
		} finally {
			setDeletingId(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "text-3xl font-display font-medium text-white flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-8 h-8 text-purple-400" }), "Categories"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-zinc-400 mt-2",
				children: "Manage property categories"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col sm:flex-row gap-4 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search categories...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-left text-zinc-400 text-sm font-medium border-b border-zinc-800 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Slug"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-right",
								children: "Actions"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-zinc-800",
						children: categories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 5,
							className: "text-center py-12 text-zinc-500",
							children: "No categories are on file yet."
						}) }) : categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-zinc-900/50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-6 h-6 text-purple-400" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-white",
											children: category.name
										}) })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 font-mono text-zinc-300",
									children: category.slug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `px-2 py-1 rounded-full text-xs font-medium ${category.isActive ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`,
										children: category.isActive ? "Active" : "Inactive"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-zinc-300",
									children: category.order
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-end gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => category.id && handleDelete(category.id),
											disabled: deletingId === category.id,
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
										})
									})
								})
							]
						}, category.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { routeOptions as n, AdminCategoriesPage as t };
