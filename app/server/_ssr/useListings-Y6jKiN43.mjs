import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as sampleListings } from "./listings-DkuUnH_5.mjs";
import { t as useOnlineRefresh } from "./useOnlineRefresh-C70pS0qr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useListings-Y6jKiN43.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useListings() {
	const [listings, setListings] = (0, import_react.useState)(sampleListings);
	const onlineTick = useOnlineRefresh();
	(0, import_react.useEffect)(() => {
		return () => {};
	}, [onlineTick]);
	return listings;
}
//#endregion
export { useListings as t };
