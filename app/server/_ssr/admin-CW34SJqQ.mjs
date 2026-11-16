import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as AuthProvider, u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { S as useNavigate, b as Link, g as Outlet, p as useRouterState, x as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as House, M as LayoutDashboard, O as LogOut, S as Monitor, T as Megaphone, W as ClipboardCheck, X as Building, c as Tag, f as ShieldAlert, h as School, i as UserCheck, j as LoaderCircle, n as X, p as Settings, r as Users, w as Menu } from "../_libs/lucide-react.mjs";
import { n as isAdminRole } from "./requireAdmin-Dzm4cN2o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CW34SJqQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		to: "/admin",
		icon: LayoutDashboard,
		label: "Dashboard",
		end: true
	},
	{
		to: "/admin/landlords",
		icon: UserCheck,
		label: "Landlords"
	},
	{
		to: "/admin/listings",
		icon: ClipboardCheck,
		label: "Listing review"
	},
	{
		to: "/admin/ads",
		icon: Megaphone,
		label: "Ads & boosts"
	},
	{
		to: "/admin/cms",
		icon: Monitor,
		label: "Site builder"
	},
	{
		to: "/admin/properties",
		icon: House,
		label: "Properties"
	},
	{
		to: "/admin/universities",
		icon: School,
		label: "Universities"
	},
	{
		to: "/admin/hostels",
		icon: Building,
		label: "Hostels"
	},
	{
		to: "/admin/agents",
		icon: Users,
		label: "Agents"
	},
	{
		to: "/admin/categories",
		icon: Tag,
		label: "Categories"
	},
	{
		to: "/admin/settings",
		icon: Settings,
		label: "Settings"
	}
];
var AdminLayout = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "") || "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const handleLogout = async () => {
		try {
			await logout();
		} catch {}
		navigate({ to: "/admin/login" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground md:flex-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border p-4 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl font-medium tracking-tight",
					children: "UniHub Admin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen(!open),
					className: "text-muted-foreground",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-40 w-64 flex-col border-r border-border bg-card md:relative ${open ? "flex" : "hidden md:flex"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden border-b border-border p-6 md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-2xl font-medium tracking-tight",
							children: "UniHub Admin"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-1 overflow-y-auto p-4",
						children: navItems.map((item) => {
							const active = "end" in item ? pathname === item.to : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => setOpen(false),
								className: `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleLogout,
							className: "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Log out"]
						})
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-30 bg-background/70 md:hidden",
				onClick: () => setOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-w-0 flex-1 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl p-6 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})
			})
		]
	});
};
/**
* Admin subtree guard.
*
* Rendered by the `/admin` route for every path except `/admin/login`.
* It must render `<AdminLayout />`, which owns the admin chrome and the
* `<Outlet />` for child routes.
*
* The admin check reads the role the session was issued for and shares
* `isAdminRole` with the route loaders, so the navigation a loader permits and
* the navigation the layout permits can never disagree.
*/
var ProtectedRoute = () => {
	const { user, loading, logout } = useAuth();
	const isAdmin = isAdminRole(user?.role);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		role: "status",
		"aria-label": "Checking admin access",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-foreground" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
				className: "h-8 w-8 text-muted-foreground",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-medium",
				children: "Admins only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: "This account doesn't have admin access. Landlords can manage their listings from the landlord dashboard."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => logout().catch(() => {}),
					className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: "Sign out"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/landlord",
					className: "rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent",
					children: "Go to landlord portal"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {});
};
function AdminRoot() {
	const isLogin = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin/login");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: isLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {}) });
}
//#endregion
export { AdminRoot as component };
