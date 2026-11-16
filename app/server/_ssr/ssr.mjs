//#region node_modules/.nitro/vite/services/ssr/index.js
var lastError = null;
function consumeLastCapturedError() {
	const error = lastError;
	lastError = null;
	return error;
}
function renderErrorPage() {
	return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>UniHub - Error</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            background-color: #0A0A0A;
            color: #FFFFFF;
            margin: 0;
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .error-container {
            text-align: center;
            max-width: 400px;
          }
          .error-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          .error-message {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.8;
          }
          .error-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }
          .error-button {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
          }
          .error-button-primary {
            background-color: #6EE7B7;
            color: #0A0A0A;
          }
          .error-button-secondary {
            background-color: transparent;
            border: 1px solid #FFFFFF;
            color: #FFFFFF;
          }
        </style>
      </head>
      <body>
        <div class="error-container">
          <div class="error-title">This page didn't load</div>
          <div class="error-message">
            Something went wrong on our end. You can try refreshing or head back home.
          </div>
          <div class="error-actions">
            <button class="error-button error-button-primary" onclick="location.reload()">
              Try again
            </button>
            <a href="/" class="error-button error-button-secondary">
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  `;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-wj4WiLTb.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
