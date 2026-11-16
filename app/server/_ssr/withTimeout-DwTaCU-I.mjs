//#region node_modules/.nitro/vite/services/ssr/assets/withTimeout-DwTaCU-I.js
/**
* Promise timeout utility.
* Use for Firestore reads/writes that hang (retry forever) when the backend is
* unreachable — time them out so screens always get real feedback.
*/
function withTimeout(promise, ms = 8e3, what = "The database") {
	let timer;
	return Promise.race([promise, new Promise((_, reject) => {
		timer = setTimeout(() => reject(/* @__PURE__ */ new Error(`${what} did not respond in time. Please try again in a moment.`)), ms);
	})]).finally(() => clearTimeout(timer));
}
//#endregion
export { withTimeout as t };
