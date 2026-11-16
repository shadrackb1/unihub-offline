import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VideoPanel-ClYaL67p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(inputs.filter(Boolean).join(" "));
}
var reducedMotionState = false;
var subscribers = /* @__PURE__ */ new Set();
if (typeof window !== "undefined") {
	const media = window.matchMedia("(prefers-reduced-motion: reduce)");
	reducedMotionState = media.matches;
	const handleChange = () => {
		reducedMotionState = media.matches;
		subscribers.forEach((cb) => cb());
	};
	media.addEventListener("change", handleChange);
}
/**
* Subscribe to reduced motion changes
*/
function subscribe(callback) {
	subscribers.add(callback);
	return () => subscribers.delete(callback);
}
/**
* Get current reduced motion state
*/
function getSnapshot() {
	return reducedMotionState;
}
/**
* Get server snapshot (always false for SSR)
*/
function getServerSnapshot() {
	return false;
}
/**
* Shared hook for prefers-reduced-motion using useSyncExternalStore
* Single media query listener shared across all components
*/
function usePrefersReducedMotion() {
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getServerSnapshot);
}
/**
* Shared IntersectionObserver singleton
* Consolidates multiple observers into a single instance per (rootMargin, threshold) combo
*/
var IntersectionObserverSingleton = class {
	observers = /* @__PURE__ */ new Map();
	subscriptions = /* @__PURE__ */ new Map();
	getKey(rootMargin, threshold) {
		return `${rootMargin}:${threshold}`;
	}
	getOrCreateObserver(rootMargin, threshold) {
		const key = this.getKey(rootMargin, threshold);
		let observer = this.observers.get(key);
		if (!observer) {
			observer = new IntersectionObserver((entries) => {
				const subs = this.subscriptions.get(key);
				if (!subs) return;
				entries.forEach((entry) => {
					const callbacks = subs.get(entry.target);
					if (callbacks) {
						const observerEntry = {
							target: entry.target,
							isIntersecting: entry.isIntersecting,
							intersectionRatio: entry.intersectionRatio
						};
						callbacks.forEach((cb) => cb(observerEntry));
					}
				});
			}, {
				rootMargin,
				threshold
			});
			this.observers.set(key, observer);
			this.subscriptions.set(key, /* @__PURE__ */ new Map());
		}
		return observer;
	}
	subscribe(element, rootMargin, threshold, callback) {
		const key = this.getKey(rootMargin, threshold);
		const observer = this.getOrCreateObserver(rootMargin, threshold);
		const subs = this.subscriptions.get(key);
		if (!subs.has(element)) {
			subs.set(element, /* @__PURE__ */ new Set());
			observer.observe(element);
		}
		subs.get(element).add(callback);
		return () => {
			const elementSubs = subs.get(element);
			if (elementSubs) {
				elementSubs.delete(callback);
				if (elementSubs.size === 0) {
					subs.delete(element);
					observer.unobserve(element);
				}
			}
			if (subs.size === 0) {
				observer.disconnect();
				this.observers.delete(key);
				this.subscriptions.delete(key);
			}
		};
	}
};
var intersectionObserverSingleton = new IntersectionObserverSingleton();
/**
* Hook for using the shared IntersectionObserver
* Multiple components with same options share a single observer instance
*/
function useSharedIntersectionObserver(options = {}) {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	const once = options?.once ?? false;
	const rootMargin = options?.rootMargin ?? "0px 0px -12% 0px";
	const threshold = options?.threshold ?? .35;
	const handleEntry = (0, import_react.useCallback)((entry) => {
		const visible = entry.isIntersecting;
		setInView((prev) => once && prev ? true : visible);
	}, [once]);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		return intersectionObserverSingleton.subscribe(node, rootMargin, threshold, handleEntry);
	}, [
		rootMargin,
		threshold,
		handleEntry
	]);
	return {
		ref,
		inView
	};
}
/**
* Alternative: hook that uses IntersectionObserver directly but batched
* This is more efficient for many videos on the page
*/
function useIntersectionVideoAutoplay(options) {
	const videoRef = (0, import_react.useRef)(null);
	const elementRef = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		const element = elementRef.current;
		if (!video || !element) return;
		video.muted = true;
		const observer = new IntersectionObserver(([entry]) => {
			if ((entry?.isIntersecting ?? false) && !reduced) video.play().catch(() => {});
			else video.pause();
		}, {
			rootMargin: options?.rootMargin ?? "15% 0px 15% 0px",
			threshold: options?.threshold ?? .35
		});
		observer.observe(element);
		return () => {
			observer.unobserve(element);
			observer.disconnect();
		};
	}, [
		reduced,
		options?.rootMargin,
		options?.threshold
	]);
	return {
		videoRef,
		elementRef
	};
}
function useInView(options) {
	const { ref, inView } = useSharedIntersectionObserver({
		rootMargin: options?.rootMargin ?? "0px 0px -12% 0px",
		threshold: options?.threshold ?? .35,
		once: options?.once ?? false
	});
	return {
		ref,
		inView
	};
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const { ref, inView } = useInView({ once: true });
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("scroll-reveal", inView || reduced ? "scroll-reveal-in" : "scroll-reveal-out", className),
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
function useAutoplayInView() {
	const { videoRef, elementRef } = useIntersectionVideoAutoplay({
		threshold: .35,
		rootMargin: "15% 0px 15% 0px"
	});
	usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (video) video.muted = true;
	}, [videoRef]);
	return {
		videoRef,
		wrapRef: elementRef
	};
}
function VideoPanel({ src, poster, title, description, eyebrow, id }) {
	const { videoRef, wrapRef } = useAutoplayInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "video-card group relative overflow-hidden rounded-[1.75rem] border border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: wrapRef,
			className: "relative aspect-video bg-black/70",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
				ref: videoRef,
				className: "h-full w-full object-cover",
				muted: true,
				loop: true,
				playsInline: true,
				controls: true,
				preload: "metadata",
				poster,
				"aria-label": title,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src,
					type: "video/mp4"
				}), "Your browser does not support embedded video."]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 border-t border-white/10 p-6 sm:p-7",
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id,
					className: "eyebrow",
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-medium",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
					children: description
				})
			]
		})]
	});
}
function PortraitVideo({ src, poster, ariaLabel, className = "" }) {
	const { videoRef, wrapRef } = useAutoplayInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
			ref: videoRef,
			className: "h-full w-full object-cover",
			muted: true,
			loop: true,
			playsInline: true,
			controls: true,
			preload: "metadata",
			poster,
			"aria-label": ariaLabel,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				src,
				type: "video/mp4"
			}), "Your browser does not support embedded video."]
		})
	});
}
//#endregion
export { usePrefersReducedMotion as a, cn as i, Reveal as n, VideoPanel as r, PortraitVideo as t };
