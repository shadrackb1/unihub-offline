import { n as authClient } from "./AuthContext-RxT3sJ-M.mjs";
import { Z as redirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as withTimeout } from "./withTimeout-DwTaCU-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/requireAdmin-Dzm4cN2o.js
/**
* Route-loader safe admin guard.
*
* Loaders run OUTSIDE React rendering, so this must never call hooks like
* useAuth()/useContext() — that throws an "invalid hook call" which surfaces
* as the root error page ("This page didn't load"). It asks the better-auth
* client for the session instead, which is a plain async call.
*
* The role comes from the user row the session was issued for, not from
* anything the browser can set, and it is the same check the API routes apply
* with requireRole().
*/
var AUTH_WAIT_MS = 8e3;
/** Max time a guarded data fetch may take before we serve the empty fallback. */
var DATA_WAIT_MS = 6e3;
function isAdminRole(role) {
	return (role ?? "").toUpperCase() === "ADMIN";
}
async function readSessionUser() {
	const { data } = await authClient.getSession();
	if (!data?.user) return null;
	const user = data.user;
	return {
		id: user.id,
		email: user.email,
		name: user.name ?? null,
		role: user.role ?? "TENANT"
	};
}
var requireAdmin = async () => {
	if (typeof window === "undefined") return { user: null };
	let user = null;
	try {
		user = await withTimeout(readSessionUser(), AUTH_WAIT_MS, "Checking your admin session");
	} catch {
		user = null;
	}
	if (!user) throw redirect({ to: "/admin/login" });
	if (!isAdminRole(user.role)) throw redirect({ to: "/" });
	return { user };
};
/**
* Run a route's data loader behind requireAdmin().
*
* requireAdmin() runs first and its redirect is thrown outside the try, so
* auth redirects are never swallowed. If the data fetch itself fails or hangs,
* the route receives its empty fallback after DATA_WAIT_MS and the screen
* degrades to an empty state instead of the root error page.
*/
async function guardedLoader(loader, fallback) {
	await requireAdmin();
	if (!loader) return fallback;
	try {
		return await withTimeout(loader(), DATA_WAIT_MS, "Admin route loader") ?? fallback;
	} catch (error) {
		console.error("Admin route loader failed; serving empty fallback:", error);
		return fallback;
	}
}
//#endregion
export { isAdminRole as n, requireAdmin as r, guardedLoader as t };
