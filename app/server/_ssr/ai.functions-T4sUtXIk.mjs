import { Ln as string, Nn as object, Tn as _enum } from "../_libs/@better-auth/core+[...].mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-T4sUtXIk.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	title: string().max(200).default(""),
	type: string().max(60).default(""),
	campus: string().max(120).default(""),
	location: string().max(200).default(""),
	price: string().max(30).default(""),
	deposit: string().max(30).default(""),
	amenities: string().max(600).default(""),
	notes: string().max(1200).default(""),
	tone: _enum([
		"clear",
		"safety",
		"budget"
	]).default("clear")
});
var TONES = {
	clear: "direct and clear",
	safety: "reassuring, emphasising security and safety",
	budget: "value-focused, emphasising affordability"
};
var draftListingDescription_createServerFn_handler = createServerRpc({
	id: "83cae8a96116ab516d2860b2a5e9c5b652e413e5c51815f96990da7f8641a092",
	name: "draftListingDescription",
	filename: "src/features/marketplace/ai.functions.ts"
}, (opts) => draftListingDescription.__executeServer(opts));
var draftListingDescription = createServerFn({ method: "POST" }).inputValidator((d) => Input.parse(d)).handler(draftListingDescription_createServerFn_handler, async ({ data }) => {
	const { generateResponse, GatewayError } = await import("../_libs/lovable.dev__ai-gateway.mjs").then((n) => n.t);
	const facts = [
		["Title", data.title],
		["Type", data.type],
		["Near campus", data.campus],
		["Location", data.location],
		["Rent (KES/month)", data.price],
		["Deposit (KES)", data.deposit],
		["Amenities", data.amenities],
		["Landlord notes", data.notes]
	].filter(([, v]) => (v ?? "").trim()).map(([k, v]) => `${k}: ${v}`).join("\n");
	if (!facts) return {
		text: "",
		error: "Add a few property details first."
	};
	try {
		const r = await generateResponse({
			model: "openai/gpt-6-astra",
			instructions: "You write rental listing descriptions for UniHub, a verified student housing platform in Kenya. Write for university students and parents. Use plain, confident language, 90-150 words, 2 short paragraphs, then a short bullet list of key features. Mention campus proximity, what's included (water, Wi-Fi, electricity tokens, security) only if provided. Never invent facts, prices, distances or amenities not given. No emojis, no hype, no all-caps. Output plain text only.",
			input: `Tone: ${TONES[data.tone]}\n\nProperty details:\n${facts}`
		});
		const text = r.output_text ?? (r.output ?? []).flatMap((o) => o.content ?? []).filter((c) => c.type === "output_text").map((c) => c.text ?? "").join("");
		if (!text.trim()) return {
			text: "",
			error: "The assistant returned an empty draft. Please try again."
		};
		return {
			text: text.trim(),
			error: null
		};
	} catch (e) {
		console.error("draftListingDescription failed", e);
		if (e instanceof GatewayError && e.httpStatus === 429) return {
			text: "",
			error: "Too many requests right now. Please wait a moment."
		};
		if (e instanceof GatewayError && e.httpStatus === 402) return {
			text: "",
			error: "AI credits are used up. Please top up to keep drafting."
		};
		return {
			text: "",
			error: "Couldn't draft a description. Please try again."
		};
	}
});
//#endregion
export { draftListingDescription_createServerFn_handler };
