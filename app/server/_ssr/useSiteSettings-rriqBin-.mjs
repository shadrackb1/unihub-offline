import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-BBjsoOtd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useSiteSettings-rriqBin-.js
var useSiteSettings_rriqBin__exports = /* @__PURE__ */ __exportAll({
	n: () => useSiteSettings,
	r: () => useSiteSettings_exports,
	t: () => invalidateSiteSettings
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var useSiteSettings_exports = /* @__PURE__ */ __exportAll$1({
	fetchSiteSettings: () => fetchSiteSettings,
	invalidateSiteSettings: () => invalidateSiteSettings,
	useSiteSettings: () => useSiteSettings
});
var cached = null;
async function fetchSiteSettings() {
	const response = await fetch("/api/site-settings", { headers: { accept: "application/json" } });
	if (!response.ok) throw new Error(`Site settings request failed with ${response.status}`);
	return (await response.json()).settings ?? null;
}
function loadSiteSettings() {
	cached ??= fetchSiteSettings().catch((error) => {
		console.warn("Site settings unavailable, using defaults:", error);
		cached = null;
		return null;
	});
	return cached;
}
/** Drop the page-load cache (used after the CMS saves). */
function invalidateSiteSettings() {
	cached = null;
}
function useSiteSettings() {
	const [settings, setSettings] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		loadSiteSettings().then((data) => {
			if (live) setSettings(data);
		});
		return () => {
			live = false;
		};
	}, []);
	return settings;
}
//#endregion
export { useSiteSettings as n, useSiteSettings_rriqBin__exports as r, invalidateSiteSettings as t };
