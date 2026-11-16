import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useOnlineRefresh-C70pS0qr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Returns a counter that increments every time the browser reports coming
* back online. Data hooks include it in their effect dependencies so listings,
* site settings and other cached reads are re-fetched (and the offline cache
* re-populated) as soon as connectivity returns.
*/
function useOnlineRefresh() {
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const bump = () => setTick((previous) => previous + 1);
		window.addEventListener("online", bump);
		return () => window.removeEventListener("online", bump);
	}, []);
	return tick;
}
//#endregion
export { useOnlineRefresh as t };
