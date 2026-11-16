import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Users } from "../_libs/lucide-react.mjs";
import { n as deleteAgent, s as getAgents } from "./adminContent-BucBge6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminAgentsPage-DbxFc5hh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var routeOptions = { loader: async () => {
	return { agents: await getAgents() };
} };
function AdminAgentsPage() {
	const { agents } = useLoaderData({ strict: false });
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [deletingId, setDeletingId] = (0, import_react.useState)(null);
	agents.filter((agent) => {
		const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || agent.phone.includes(searchTerm) || agent.whatsappNumber.includes(searchTerm);
		const matchesStatus = statusFilter === "all" || agent.isActive && statusFilter === "active" || !agent.isActive && statusFilter === "inactive";
		return matchesSearch && matchesStatus;
	});
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this agent?")) return;
		setDeletingId(id);
		try {
			await deleteAgent(id);
		} catch (error) {
			console.error("Delete failed:", error);
			alert("Failed to delete agent");
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-8 h-8 text-orange-400" }), "Agents"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-zinc-400 mt-2",
				children: "Manage property agents"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						placeholder: "Search agents...",
						value: searchTerm,
						onChange: (e) => setSearchTerm(e.target.value),
						className: "w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					className: "px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-orange-500",
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
								children: "Agent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-left",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-4 text-right",
								children: "Actions"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-zinc-800",
						children: agents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 5,
							className: "text-center py-12 text-zinc-500",
							children: "No agents are on file yet."
						}) }) : agents.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-zinc-900/50 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden",
											children: agent.profilePhotoURL ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: agent.profilePhotoURL,
												alt: agent.name,
												className: "w-full h-full object-cover"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: "👤"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-white",
											children: agent.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-zinc-400",
											children: agent.phone
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-zinc-300",
									children: agent.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-zinc-300",
									children: agent.whatsappNumber
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `px-2 py-1 rounded-full text-xs font-medium ${agent.isActive ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`,
										children: agent.isActive ? "Active" : "Inactive"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-end gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => agent.id && handleDelete(agent.id),
											disabled: deletingId === agent.id,
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
						}, agent.id))
					})]
				})
			})]
		})]
	});
}
//#endregion
export { routeOptions as n, AdminAgentsPage as t };
