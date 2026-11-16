import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as useLoaderData, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as House, M as LayoutDashboard, R as Eye, X as Building, r as Users } from "../_libs/lucide-react.mjs";
import { c as getCategories, l as getHostels, p as getUniversities, s as getAgents, u as getProperties } from "./adminContent-BucBge6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminDashboard-DIPvU8jU.js
var import_jsx_runtime = require_jsx_runtime();
var routeOptions = { loader: async () => {
	const [properties, hostels, universities, agents, categories] = await Promise.all([
		getProperties(),
		getHostels(),
		getUniversities(),
		getAgents(),
		getCategories()
	]);
	return {
		stats: {
			properties: properties.length,
			hostels: hostels.length,
			universities: universities.length,
			agents: agents.length,
			categories: categories.length
		},
		recentProperties: properties.slice(0, 5),
		recentHostels: hostels.slice(0, 5)
	};
} };
function AdminDashboard() {
	const { stats, recentProperties, recentHostels } = useLoaderData({ strict: false });
	const statCards = [
		{
			label: "Properties",
			value: stats.properties,
			icon: House,
			color: "text-blue-400",
			bg: "bg-blue-500/10",
			href: "/admin/properties"
		},
		{
			label: "Hostels",
			value: stats.hostels,
			icon: Building,
			color: "text-green-400",
			bg: "bg-green-500/10",
			href: "/admin/hostels"
		},
		{
			label: "Universities",
			value: stats.universities,
			icon: Building,
			color: "text-purple-400",
			bg: "bg-purple-500/10",
			href: "/admin/universities"
		},
		{
			label: "Agents",
			value: stats.agents,
			icon: Users,
			color: "text-orange-400",
			bg: "bg-orange-500/10",
			href: "/admin/agents"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl font-display font-medium text-white flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "w-8 h-8 text-brand-400" }), "Dashboard"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-zinc-400 mt-2",
					children: "Welcome to the UniHub Admin Dashboard"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/admin/cms",
						className: "px-4 py-2 flex items-center gap-2 rounded-xl border border-zinc-800 text-sm font-medium hover:bg-zinc-800 transition-all font-display",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" }), " Live Preview"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: statCards.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: stat.href,
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl hover:border-brand-500/50 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-3 rounded-xl ${stat.bg}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: `w-6 h-6 ${stat.color}` })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-display font-bold text-white",
								children: stat.value
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-zinc-400 text-sm font-medium",
							children: stat.label
						})]
					})
				}, stat.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-display font-medium text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-5 h-5 text-brand-400" }), "Recent Properties"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admin/properties",
							className: "text-sm text-brand-400 hover:text-brand-300 font-medium",
							children: "View All"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: recentProperties.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-zinc-500 text-center py-8",
							children: "No properties yet"
						}) : recentProperties.map((prop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-6 h-6 text-brand-400" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-white",
									children: prop.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-zinc-400",
									children: prop.location
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `px-2 py-1 rounded-full text-xs font-medium ${prop.status === "available" ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`,
									children: prop.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-zinc-500 mt-1",
									children: ["KES ", prop.price.toLocaleString()]
								})]
							})]
						}, prop.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-display font-medium text-white flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-5 h-5 text-green-400" }), "Recent Hostels"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/admin/hostels",
							className: "text-sm text-brand-400 hover:text-brand-300 font-medium",
							children: "View All"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: recentHostels.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-zinc-500 text-center py-8",
							children: "No hostels yet"
						}) : recentHostels.map((hostel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "w-6 h-6 text-green-400" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-white",
									children: hostel.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-zinc-400",
									children: hostel.location
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-2 py-1 rounded-full text-xs font-medium ${hostel.status === "active" ? "bg-green-500/20 text-green-400" : "bg-zinc-700 text-zinc-400"}`,
								children: hostel.status
							})]
						}, hostel.id))
					})]
				})]
			})
		]
	});
}
//#endregion
export { routeOptions as n, AdminDashboard as t };
