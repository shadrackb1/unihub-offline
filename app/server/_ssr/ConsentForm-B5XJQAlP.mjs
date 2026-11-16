import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { G as CircleX, J as CircleCheckBig, a as Undo2, d as ShieldCheck, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-BkRapwZn.mjs";
import { n as DECLARATION_ITEMS, r as REQUIRED_DECLARATION_ITEM_IDS, t as CONSENT_PURPOSES } from "./consentPurposes-BEDGknoK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ConsentForm-B5XJQAlP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConsentDeclaration({ ticked, onToggle, disabled = false, showBasis = true }) {
	const requiredIds = new Set(REQUIRED_DECLARATION_ITEM_IDS);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-3",
		children: DECLARATION_ITEMS.map((item) => {
			const checked = Boolean(ticked[item.id]);
			const basis = item.purpose ? CONSENT_PURPOSES.find((purpose) => purpose.id === item.purpose)?.basis : void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors", checked ? "border-primary/50 bg-primary/5" : "border-border bg-card/40", disabled && "cursor-not-allowed opacity-60"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked,
					disabled,
					onChange: () => onToggle(item.id),
					"aria-describedby": `consent-${item.id}-text`,
					className: "mt-1 size-4 shrink-0 rounded border-border text-primary focus:ring-ring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "instrument text-xs tabular-nums text-muted-foreground",
									children: item.number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold text-foreground",
									children: item.title
								}),
								requiredIds.has(item.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground",
									children: "Required"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground",
									children: "Optional"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							id: `consent-${item.id}-text`,
							className: "mt-1.5 block text-sm leading-relaxed text-muted-foreground",
							children: item.text
						}),
						showBasis && basis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block text-xs leading-relaxed text-muted-foreground/80",
							children: ["Lawful basis: ", basis]
						}) : null
					]
				})]
			}) }, item.id);
		})
	});
}
function formatWhen(value) {
	if (!value) return "—";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return date.toLocaleString(void 0, {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function ConsentRecordPanel({ summary, onWithdraw, onWithdrawAll, busy = false, emptyMessage = "No consent has been recorded for this account yet." }) {
	const [confirmingAll, setConfirmingAll] = (0, import_react.useState)(false);
	const active = summary.filter((item) => item.record?.status === "GRANTED");
	const hasAny = summary.some((item) => item.record);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card/50 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "flex items-center gap-2 font-display text-lg font-medium text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-highlight" }), "Your consent record"]
			}), active.length > 0 ? confirmingAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setConfirmingAll(false);
						onWithdrawAll();
					},
					disabled: busy,
					className: "rounded-full bg-destructive px-4 py-2 text-xs font-semibold text-destructive-foreground disabled:opacity-60",
					children: "Withdraw everything"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setConfirmingAll(false),
					className: "rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground",
					children: "Keep my consent"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setConfirmingAll(true),
				disabled: busy,
				className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-3.5" }), "Withdraw all consent"]
			}) : null]
		}), !hasAny ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: emptyMessage
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: summary.map((item) => {
				const record = item.record;
				const granted = record?.status === "GRANTED";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-start justify-between gap-3 border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-sm font-medium text-foreground",
							children: [granted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-4 shrink-0 text-status" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "size-4 shrink-0 text-muted-foreground" }), item.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: record ? granted ? `Granted ${formatWhen(record.grantedAt)} · wording version ${record.wordingVersion}` : `Withdrawn ${formatWhen(record.withdrawnAt)} · granted ${formatWhen(record.grantedAt)}` : "Not given"
						})]
					}), granted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onWithdraw(item.purpose),
						disabled: busy,
						className: "rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-60",
						children: "Withdraw"
					}) : null]
				}, item.purpose);
			})
		})]
	});
}
/** The button that records the ticked statements. */
function ConsentSubmitButton({ busy, disabled, label = "Record my consent" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "submit",
		disabled: busy || disabled,
		className: cn("cta-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-colors disabled:opacity-60", !busy && "hover:bg-primary/90"),
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), busy ? "Recording…" : label]
	});
}
//#endregion
export { ConsentRecordPanel as n, ConsentSubmitButton as r, ConsentDeclaration as t };
