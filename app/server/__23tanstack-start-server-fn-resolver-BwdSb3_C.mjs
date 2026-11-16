//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BwdSb3_C.js
var manifest = { "83cae8a96116ab516d2860b2a5e9c5b652e413e5c51815f96990da7f8641a092": {
	functionName: "draftListingDescription_createServerFn_handler",
	importer: () => import("./_ssr/ai.functions-T4sUtXIk.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
