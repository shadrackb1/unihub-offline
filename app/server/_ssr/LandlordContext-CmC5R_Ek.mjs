import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as authClient, u as useAuth } from "./AuthContext-RxT3sJ-M.mjs";
import { t as withTimeout } from "./withTimeout-DwTaCU-I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LandlordContext-CmC5R_Ek.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Landlord service layer: registration, sign-in and profile reads.
*
* Everything goes through the platform session (better-auth) and the
* Prisma-backed API, so a landlord account created here is the same account
* the portal, the consent screen and the admin console see:
*
*  - `registerLandlord` creates the account, the PENDING profile and the
*    consent records in one server call, then the browser signs in with the
*    same credentials.
*  - `signInLandlord` signs in and resolves the profile in one step.
*  - `fetchLandlordProfile` distinguishes "no profile" from "backend
*    unreachable" so the portal gate can show the right message.
*/
/** Where to send a landlord once their profile status is known. */
function homeForStatus(status) {
	switch (status) {
		case "pending": return "/landlord/pending";
		case "rejected": return "/landlord/rejected";
		case "suspended": return "/landlord/suspended";
		default: return "/landlord";
	}
}
async function readError(response, fallback) {
	try {
		const payload = await response.json();
		if (payload && typeof payload === "object") {
			const message = payload.error;
			if (typeof message === "string" && message.trim()) return message;
		}
	} catch {}
	return fallback;
}
/** The signed-in person's landlord profile. */
async function fetchLandlordProfile() {
	try {
		const response = await withTimeout(fetch("/api/landlord/profile", { credentials: "include" }), 1e4, "Checking your profile");
		if (response.status === 401) return { state: "missing" };
		if (!response.ok) return {
			state: "unavailable",
			message: await readError(response, "We could not reach the server to check your landlord profile. Please try again.")
		};
		const payload = await response.json();
		if (!payload.profile) return { state: "missing" };
		return {
			state: "ok",
			profile: payload.profile
		};
	} catch (error) {
		console.error("Landlord profile read failed:", error);
		return {
			state: "unavailable",
			message: "We could not reach the server to check your landlord profile. Check your connection and try again."
		};
	}
}
/** Register, then sign in so the portal screens have a live session. */
async function registerLandlord(input) {
	const response = await fetch("/api/landlord/register", {
		method: "POST",
		headers: { "content-type": "application/json" },
		credentials: "include",
		body: JSON.stringify(input)
	});
	if (!response.ok) throw new Error(await readError(response, "We could not create your account. Please try again."));
	const created = await response.json();
	const { error } = await authClient.signIn.email({
		email: input.email,
		password: input.password
	});
	if (error) throw new Error("Your account was created, but we could not sign you in automatically. Sign in with the email and password you just chose.");
	return created;
}
/** Sign in and resolve the caller's landlord profile in one step. */
async function signInLandlord(email, password) {
	const { error } = await authClient.signIn.email({
		email,
		password
	});
	if (error) throw new Error(/invalid|credential|password/i.test(error.message ?? "") ? "That email and password did not match. Try again." : error.message ?? "Sign in failed. Try again.");
	return { profile: await fetchLandlordProfile() };
}
var LandlordContext = (0, import_react.createContext)(null);
/**
* Holds the signed-in landlord's session (from the platform AuthProvider) plus
* their landlord profile, read from `/api/landlord/profile`.
*
* The `loadedFor` guard: right after sign-in a stale in-flight profile read
* must not clobber the new user's state, and a signed-out frame must never
* render "profile missing" for the previous user. Profile state is only ever
* applied for the user it was requested for.
*/
function LandlordProvider({ children }) {
	const { user: sessionUser, loading: authLoading } = useAuth();
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [profileState, setProfileState] = (0, import_react.useState)("loading");
	const [profileMessage, setProfileMessage] = (0, import_react.useState)("");
	const [reloadToken, setReloadToken] = (0, import_react.useState)(0);
	const loadedForRef = (0, import_react.useRef)(null);
	const user = sessionUser ? {
		id: sessionUser.id,
		email: sessionUser.email,
		name: sessionUser.name
	} : null;
	(0, import_react.useEffect)(() => {
		if (authLoading) return;
		if (!sessionUser) {
			loadedForRef.current = null;
			setProfile(null);
			setProfileState("ok");
			setProfileMessage("");
			return;
		}
		let live = true;
		const userId = sessionUser.id;
		loadedForRef.current = userId;
		setProfileState("loading");
		fetchLandlordProfile().then((result) => {
			if (!live || loadedForRef.current !== userId) return;
			if (result.state === "ok") {
				setProfile(result.profile);
				setProfileState("ok");
				setProfileMessage("");
			} else if (result.state === "missing") {
				setProfile(null);
				setProfileState("missing");
				setProfileMessage("");
			} else {
				setProfile(null);
				setProfileState("unavailable");
				setProfileMessage(result.message);
			}
		});
		return () => {
			live = false;
		};
	}, [
		sessionUser,
		authLoading,
		reloadToken
	]);
	const refreshProfile = (0, import_react.useCallback)(() => setReloadToken((n) => n + 1), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandlordContext.Provider, {
		value: {
			user,
			authLoading,
			profile,
			profileState,
			profileMessage,
			refreshProfile
		},
		children
	});
}
function useLandlord() {
	const context = (0, import_react.useContext)(LandlordContext);
	if (!context) throw new Error("useLandlord must be used within a LandlordProvider");
	return context;
}
//#endregion
export { useLandlord as a, signInLandlord as i, homeForStatus as n, registerLandlord as r, LandlordProvider as t };
