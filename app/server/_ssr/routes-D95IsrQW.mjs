import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as WHATSAPP_CONFIGURED, i as SupportLink } from "./SupportLink-CbB80iuK.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageCircle, E as MapPin, L as GraduationCap, Q as ArrowRight, Y as Check, Z as Building2, d as ShieldCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as SiteFooter, r as SiteHeader } from "./MarketingChrome-DhUEta_m.mjs";
import { n as useSiteSettings } from "./useSiteSettings-rriqBin-.mjs";
import { a as usePrefersReducedMotion, i as cn, n as Reveal, r as VideoPanel, t as PortraitVideo } from "./VideoPanel-ClYaL67p.mjs";
import { t as listing_apartment_default } from "./listings-DkuUnH_5.mjs";
import { t as useListings } from "./useListings-Y6jKiN43.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D95IsrQW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ACTS = [
	{
		id: "top",
		label: "I · Arrive"
	},
	{
		id: "how-it-works",
		label: "II · Orient"
	},
	{
		id: "trust",
		label: "III · Believe"
	},
	{
		id: "residences",
		label: "IV · Witness"
	},
	{
		id: "listings",
		label: "V · Choose"
	},
	{
		id: "locations",
		label: "VI · Place"
	},
	{
		id: "close",
		label: "VII · Move"
	}
];
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const rafId = (0, import_react.useRef)(null);
	const lastScrollY = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		let ticking = false;
		const onScroll = () => {
			lastScrollY.current = window.scrollY;
			if (!ticking) {
				ticking = true;
				rafId.current = requestAnimationFrame(() => {
					const max = document.documentElement.scrollHeight - window.innerHeight;
					const scrollY = lastScrollY.current;
					setProgress(max > 0 ? scrollY / max * 100 : 0);
					ticking = false;
				});
			}
		};
		const max = document.documentElement.scrollHeight - window.innerHeight;
		setProgress(max > 0 ? window.scrollY / max * 100 : 0);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (rafId.current !== null) cancelAnimationFrame(rafId.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full origin-left bg-gradient-to-r from-highlight/80 via-foreground/70 to-highlight/40 transition-[width] duration-150 ease-out",
			style: { width: `${progress}%` }
		})
	});
}
function JourneyRail() {
	const [active, setActive] = (0, import_react.useState)(ACTS[0].id);
	usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const nodes = ACTS.map((act) => document.getElementById(act.id)).filter(Boolean);
		if (!nodes.length) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -45% 0px",
			threshold: [
				.15,
				.35,
				.6
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => {
			nodes.forEach((node) => observer.unobserve(node));
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Page journey",
		className: "fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 xl:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3",
			children: ACTS.map((act) => {
				const isActive = active === act.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${act.id}`,
					className: cn("group flex items-center justify-end gap-3 text-[0.68rem] uppercase tracking-[0.16em] transition-colors", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("whitespace-nowrap opacity-0 transition-opacity duration-300", isActive ? "opacity-100" : "group-hover:opacity-80"),
						children: act.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-px transition-all duration-300", isActive ? "w-8 bg-highlight" : "w-4 bg-border group-hover:w-6") })]
				}) }, act.id);
			})
		})
	});
}
function Act({ id, index, title, children, className = "", tone = "base" }) {
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		"data-act": index,
		className: cn("relative", tone === "panel" ? "border-y border-border bg-panel/80" : "", tone === "deep" ? "experience-act-deep" : "", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "experience-orb" }), !reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise absolute inset-0 opacity-[0.07]" }) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mb-10 flex max-w-7xl items-center gap-4 px-5 md:mb-12 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "instrument text-highlight/80",
						children: index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-border md:w-16" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "instrument",
						children: title
					})
				]
			}), children]
		})]
	});
}
var campusPins = [
	{
		id: "uon",
		code: "UoN",
		name: "University of Nairobi",
		town: "Nairobi",
		lng: 36.814,
		lat: -1.279
	},
	{
		id: "jkuat",
		code: "JKUAT",
		name: "Jomo Kenyatta University",
		town: "Juja",
		lng: 37.015,
		lat: -1.093
	},
	{
		id: "ku",
		code: "KU",
		name: "Kenyatta University",
		town: "Kahawa",
		lng: 36.927,
		lat: -1.174
	},
	{
		id: "su",
		code: "SU",
		name: "Strathmore University",
		town: "Madaraka",
		lng: 36.813,
		lat: -1.31
	},
	{
		id: "thika",
		code: "THK",
		name: "Thika student belt",
		town: "Thika",
		lng: 37.069,
		lat: -1.033
	},
	{
		id: "mu",
		code: "MU",
		name: "Moi University",
		town: "Kesses",
		lng: 35.335,
		lat: .295
	},
	{
		id: "egu",
		code: "EGU",
		name: "Egerton University",
		town: "Njoro",
		lng: 35.944,
		lat: -.366
	},
	{
		id: "nku",
		code: "NKU",
		name: "Nakuru campus belt",
		town: "Nakuru",
		lng: 36.08,
		lat: -.303
	}
];
/** Free providers. No API keys. Attribution required in UI. */
var BASEMAPS = {
	dark: {
		label: "Dark",
		attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> · <a href=\"https://openfreemap.org/\">OpenFreeMap</a>",
		style: "https://tiles.openfreemap.org/styles/dark"
	},
	satellite: {
		label: "Satellite",
		attribution: "Imagery © <a href=\"https://www.esri.com/\">Esri</a>, Maxar, Earthstar Geographics",
		style: {
			version: 8,
			name: "Esri World Imagery",
			sources: { esri: {
				type: "raster",
				tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
				tileSize: 256,
				attribution: "Imagery © <a href=\"https://www.esri.com/\">Esri</a>, Maxar, Earthstar Geographics",
				maxzoom: 19
			} },
			layers: [{
				id: "esri-imagery",
				type: "raster",
				source: "esri",
				minzoom: 0,
				maxzoom: 19
			}]
		}
	}
};
function markerEl(pin) {
	const el = document.createElement("button");
	el.type = "button";
	el.className = "unihub-map-marker";
	el.setAttribute("aria-label", `${pin.name} in ${pin.town}`);
	const dot = document.createElement("span");
	dot.className = "unihub-map-marker__dot";
	dot.setAttribute("aria-hidden", "true");
	const label = document.createElement("span");
	label.className = "unihub-map-marker__label";
	const codeSpan = document.createTextNode(pin.code);
	const em = document.createElement("em");
	em.textContent = pin.town;
	label.appendChild(codeSpan);
	label.appendChild(em);
	el.appendChild(dot);
	el.appendChild(label);
	return el;
}
function CampusMap({ className = "" }) {
	const containerRef = (0, import_react.useRef)(null);
	const [basemap, setBasemap] = (0, import_react.useState)("dark");
	const mapRef = (0, import_react.useRef)(null);
	/**
	* With no network the tile servers cannot be reached, so the live map would
	* paint an empty rectangle. The same view is bundled as a still image and
	* used instead, which is what keeps the offline copy visually identical.
	*/
	const [offline, setOffline] = (0, import_react.useState)(() => typeof navigator !== "undefined" && navigator.onLine === false);
	(0, import_react.useEffect)(() => {
		const update = () => setOffline(navigator.onLine === false);
		window.addEventListener("online", update);
		window.addEventListener("offline", update);
		return () => {
			window.removeEventListener("online", update);
			window.removeEventListener("offline", update);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container || offline) return;
		let cancelled = false;
		let map = null;
		const markers = [];
		const popups = [];
		(async () => {
			const maplibregl = (await import("../_libs/maplibre-gl.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
			await Promise.resolve({});
			if (cancelled || !container || offline) return;
			const cfg = BASEMAPS.dark;
			map = new maplibregl.Map({
				container,
				style: cfg.style,
				center: [36.5, -.7],
				zoom: 5.6,
				pitch: 28,
				bearing: -8,
				maxPitch: 55,
				attributionControl: false
			});
			if (!map) return;
			const mapInstance = map;
			mapRef.current = map;
			map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
			map.addControl(new maplibregl.AttributionControl({ compact: true }), "bottom-right");
			const bounds = new maplibregl.LngLatBounds();
			campusPins.forEach((pin) => {
				const el = markerEl(pin);
				const popup = new maplibregl.Popup({
					offset: 18,
					closeButton: true,
					className: "unihub-map-popup"
				});
				popups.push(popup);
				const popupDiv = document.createElement("div");
				popupDiv.className = "unihub-map-popup__inner";
				const codeP = document.createElement("p");
				codeP.className = "unihub-map-popup__code";
				codeP.textContent = pin.code;
				const titleP = document.createElement("p");
				titleP.className = "unihub-map-popup__title";
				titleP.textContent = pin.name;
				const townP = document.createElement("p");
				townP.className = "unihub-map-popup__town";
				townP.textContent = pin.town;
				popupDiv.appendChild(codeP);
				popupDiv.appendChild(titleP);
				popupDiv.appendChild(townP);
				popup.setDOMContent(popupDiv);
				const marker = new maplibregl.Marker({
					element: el,
					anchor: "bottom"
				}).setLngLat([pin.lng, pin.lat]).setPopup(popup).addTo(mapInstance);
				markers.push(marker);
				bounds.extend([pin.lng, pin.lat]);
			});
			mapInstance.on("load", () => {
				mapInstance.fitBounds(bounds, {
					padding: {
						top: 48,
						bottom: 72,
						left: 40,
						right: 40
					},
					duration: 0,
					maxZoom: 8.2
				});
			});
		})();
		return () => {
			cancelled = true;
			markers.forEach((marker) => marker.remove());
			popups.forEach((popup) => popup.remove());
			map?.remove();
			mapRef.current = null;
		};
	}, [offline]);
	(0, import_react.useEffect)(() => {
		const map = mapRef.current;
		if (!map || offline) return;
		const cfg = BASEMAPS[basemap];
		map.setStyle(cfg.style);
		const handleStyleLoad = () => {
			map.resize();
		};
		map.once("style.load", handleStyleLoad);
		return () => {
			map.off("style.load", handleStyleLoad);
		};
	}, [basemap, offline]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-4 top-4 z-10 flex gap-2",
				children: Object.keys(BASEMAPS).map((id) => {
					const active = basemap === id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("pointer-events-auto rounded-full border px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] backdrop-blur-md transition-colors", active ? "border-highlight/50 bg-highlight/20 text-foreground" : "border-border bg-background/70 text-muted-foreground hover:text-foreground"),
						onClick: () => setBasemap(id),
						"aria-pressed": active,
						children: BASEMAPS[id].label
					}, id);
				})
			}),
			offline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: basemap === "dark" ? "/map-dark.png" : "/map-satellite.png",
				alt: "Campus housing map of Kenya",
				className: "unihub-map min-h-[28rem] w-full overflow-hidden rounded-3xl border border-border bg-card object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: containerRef,
				className: "unihub-map min-h-[28rem] overflow-hidden rounded-3xl border border-border bg-card",
				role: "region",
				"aria-label": "Campus housing map of Kenya"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: BASEMAPS[basemap].attribution.replace(/<[^>]+>/g, "")
			})
		]
	});
}
function LetterReveal({ text, className, delayStepMs = 36, startDelayMs = 120 }) {
	const reduced = usePrefersReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setReady(true);
		}, { threshold: .2 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	const words = text.trim().split(/\s+/);
	let letterIndex = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		ref,
		className: cn("max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-normal sm:text-7xl lg:text-[6.8rem]", className),
		"aria-label": text,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: words.map((word, wordIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-block whitespace-nowrap",
				children: [Array.from(word).map((char) => {
					const index = letterIndex++;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("letter-reveal inline-block", ready || reduced ? "letter-reveal-in" : "letter-reveal-out"),
						style: { transitionDelay: `${startDelayMs + index * delayStepMs}ms` },
						children: char
					}, `${char}-${index}`);
				}), wordIndex < words.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-[0.28em]" }) : null]
			}, `${word}-${wordIndex}`))
		})
	});
}
function CoolVideoCard({ clip, delay = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		delay,
		className: `video-card group relative overflow-hidden rounded-[1.75rem] border border-border bg-card ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-end p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-highlight/40 bg-highlight/15 px-3 py-1.5 text-[0.68rem] font-semibold tracking-wide text-highlight",
					children: clip.meta
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[9/16] bg-black/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-black/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitVideo, {
					className: "h-full w-full",
					src: clip.src,
					poster: clip.poster,
					ariaLabel: clip.ariaLabel
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 -mt-16 border-t border-white/10 bg-card p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-xl font-medium leading-snug text-foreground",
					children: clip.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: clip.blurb
				})]
			})
		]
	});
}
function ResidenceVideoGallery({ clips }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mb-8 flex flex-wrap items-end justify-between gap-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Residence film strip"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-2xl font-medium sm:text-3xl",
				children: "Rooms, hostels & stays"
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: clips.map((clip, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoolVideoCard, {
				clip,
				delay: index * 90
			}, clip.id))
		})]
	});
}
var residenceClips = [
	{
		id: "student-rooms",
		title: "Spacious student rooms",
		meta: "From KES 15,000",
		blurb: "Own kitchen and bathroom even when you share. Free gym and lounges for campus life.",
		src: "/assets/listing-video-student-rooms-CAayIm54.mp4",
		poster: "/assets/listing-video-student-rooms-poster-DaKlSeId.jpg",
		ariaLabel: "Spacious student rooms tour with kitchen bathroom and gym"
	},
	{
		id: "female-hostel",
		title: "Female hostel in Kigamboni",
		meta: "Student-focused",
		blurb: "Modern women's hostel near ferry routes. Built for students around IFM, CBE, TIA, UTUMISHI, and nearby colleges. Free Wi‑Fi.",
		src: "/assets/listing-video-female-hostel-BWIX24dw.mp4",
		poster: "/assets/listing-video-female-hostel-poster-CMeW10OG.jpg",
		ariaLabel: "Luxury female hostel for students in Kigamboni"
	},
	{
		id: "maison",
		title: "Maison Bauchart suites",
		meta: "Premium stays",
		blurb: "Tailored suites for short stays above typical hostel budgets.",
		src: "/assets/listing-video-maison-CmiR7TQ1.mp4",
		poster: "/assets/listing-video-maison-poster-D8mWuYPw.jpg",
		ariaLabel: "Maison Bauchart tailored suites hospitality video"
	}
];
var unihub_hero_default = "/assets/unihub-hero-e9cr0xVh.mp4";
var unihub_site_walkthrough_default = "/assets/unihub-site-walkthrough-CN8wfrFX.mp4";
var unihub_walkthrough_poster_default = "/assets/unihub-walkthrough-poster-WXrAkjyp.jpg";
var unihub_qwetu_documentary_default = "/assets/unihub-qwetu-documentary-DDJ57-tO.mp4";
var unihub_qwetu_poster_default = "/assets/unihub-qwetu-poster-46OuDwSO.jpg";
var journey = [
	[
		"01",
		"Find your perfect home",
		"Start with the campus or area that works for you."
	],
	[
		"02",
		"Browse verified listings",
		"Compare clear prices, photos, and amenities."
	],
	[
		"03",
		"Pick a listing",
		"Choose the room that feels right for student life."
	],
	[
		"04",
		"Chat with an agent",
		"Message the verified contact directly."
	]
];
var campusCodes = [
	{
		code: "UoN",
		name: "Nairobi"
	},
	{
		code: "JKUAT",
		name: "Juja"
	},
	{
		code: "KU",
		name: "Kahawa"
	},
	{
		code: "MU",
		name: "Kesses"
	},
	{
		code: "EGU",
		name: "Njoro"
	},
	{
		code: "SU",
		name: "Madaraka"
	}
];
campusCodes.map((campus) => campus.name);
function ArrowLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: "group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-highlight",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
			"aria-hidden": "true"
		})]
	});
}
function PrimaryLink({ href, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: "cta-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
			className: "size-4",
			"aria-hidden": "true"
		})]
	});
}
function Index() {
	const listings = useListings();
	const siteSettings = useSiteSettings();
	const heroVideoRef = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		const video = heroVideoRef.current;
		if (!video) return;
		video.muted = true;
		if (reduced) {
			video.pause();
			return;
		}
		video.play().catch(() => {});
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-frame min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyRail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "top",
						className: "relative flex min-h-[94svh] items-end overflow-hidden pb-10 pt-28 md:items-center md:pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: heroVideoRef,
								className: "hero-image absolute inset-0 h-full w-full object-cover object-center",
								muted: true,
								loop: true,
								playsInline: true,
								preload: "auto",
								poster: siteSettings?.heroImage || "/assets/unihub-hero-poster-C-uvBIn9.jpg",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
									src: unihub_hero_default,
									type: "video/mp4"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-overlay absolute inset-0",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "noise absolute inset-0 opacity-50",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-4xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "reveal reveal-1 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-secondary-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
												className: "size-4",
												"aria-hidden": "true"
											}), "UniHub · Verified campus housing in Kenya"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterReveal, { text: siteSettings?.heroTitle || "Find your perfect home." }, siteSettings?.heroTitle || "default-hero"),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "reveal reveal-3 mt-7 max-w-2xl text-base leading-relaxed text-secondary-foreground sm:text-xl",
											children: siteSettings?.heroSubtitle || "Browse verified hostels, bedsitters, and rentals near campus. Message landlords on WhatsApp. No account needed to search."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "reveal reveal-4 mt-9 flex flex-wrap items-center gap-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
												href: "/listings",
												children: siteSettings?.ctaText || "Browse Listings"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#how-it-works",
												className: "group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-highlight",
												children: ["How UniHub works", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
													className: "size-4 transition-transform duration-300 group-hover:translate-x-1",
													"aria-hidden": "true"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "reveal reveal-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-foreground" }), " Vetted listings"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-foreground" }), " Free to browse"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-foreground" }), " WhatsApp with agents"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "reveal reveal-4 mt-12 max-w-3xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "instrument mb-3 text-highlight/80",
												children: "Search by campus"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "campus-rail",
												children: campusCodes.map((campus) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "campus-code",
													children: [campus.code, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-normal tracking-normal text-muted-foreground normal-case",
														children: campus.name
													})]
												}, campus.code))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "reveal reveal-4 mt-14",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "scroll-cue",
												"aria-hidden": "true"
											})
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
						id: "how-it-works",
						index: "II",
						title: "Orient",
						tone: "panel",
						className: "section-shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									className: "section-heading",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "The simple way home"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "From campus search to agent chat." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4",
									children: journey.map(([number, title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										as: "li",
										delay: index * 80,
										className: "journey-step group min-h-64 bg-card p-7 transition-colors duration-500 hover:bg-accent md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "relative z-10 font-display text-sm text-highlight",
												children: number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "relative z-10 mt-16 font-display text-xl font-medium",
												children: title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground",
												children: copy
											})
										]
									}, number))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoPanel, {
										id: "walkthrough",
										eyebrow: "Site walkthrough",
										title: "See how to navigate UniHub.",
										description: "Browse listings, shortlist a place, and contact an agent.",
										src: unihub_site_walkthrough_default,
										poster: unihub_walkthrough_poster_default
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										className: "solid-card p-7 sm:p-9",
										delay: 120,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow",
												children: "The path"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-2xl font-medium",
												children: "Same path as the four steps."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm leading-relaxed text-muted-foreground",
												children: "Find a campus area, open verified listings, pick a room, then message the agent."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-6 space-y-3 text-sm text-secondary-foreground",
												children: [
													"Browse without signing up",
													"Compare price and location",
													"Contact via WhatsApp"
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-highlight" }),
														" ",
														item
													]
												}, item))
											})
										]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
						id: "trust",
						index: "III",
						title: "Believe",
						className: "section-shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "section-heading max-w-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Why UniHub"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"Designed for students.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Built for trust."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Less uncertainty, fewer dead ends, and no signup wall between you and a genuine place to live." })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 grid gap-5 md:grid-cols-4 md:grid-rows-[1fr_1fr]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										delay: 0,
										className: "solid-card group p-7 sm:p-9 md:col-span-2 md:row-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-14 items-center justify-center rounded-2xl border border-border bg-accent transition-colors group-hover:bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
													className: "size-6",
													strokeWidth: 1.7,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-10 font-display text-3xl font-medium leading-tight sm:text-4xl",
												children: "Verified Listings"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg",
												children: "Every listing and landlord is vetted before appearing on UniHub. We check property details, ownership documents, and agent contacts so you spend less time sorting scams from real rooms."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-8 flex flex-wrap gap-3 text-sm text-secondary-foreground",
												children: [
													"Property documents checked",
													"Landlord identity verified",
													"Agent contacts confirmed"
												].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-highlight" }), item]
												}, item))
											})
										]
									}, "verified"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										delay: 120,
										className: "solid-card group p-7 sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-12 items-center justify-center rounded-2xl border border-border bg-accent transition-colors group-hover:bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
													className: "size-5",
													strokeWidth: 1.7,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-8 font-display text-xl font-medium",
												children: "Renter-Focused"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-xs leading-relaxed text-muted-foreground",
												children: "Housing selected for student routines, practical budgets, and short commutes."
											})
										]
									}, "renter"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										delay: 200,
										className: "solid-card group p-7 sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex size-12 items-center justify-center rounded-2xl border border-border bg-accent transition-colors group-hover:bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
													className: "size-5",
													strokeWidth: 1.7,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-8 font-display text-xl font-medium",
												children: "Direct Contact"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-xs leading-relaxed text-muted-foreground",
												children: "Use WhatsApp or email. No account required to find your next home."
											})
										]
									}, "direct")
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
						id: "residences",
						index: "IV",
						title: "Witness",
						tone: "panel",
						className: "section-shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									className: "section-heading max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: "Housing on the ground"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "See the residences behind the listings." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Student housing footage from residences across the region: rooms, hostels, and premium stays." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										className: "mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative aspect-[9/16] bg-black/60",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitVideo, {
												className: "h-full w-full",
												src: unihub_qwetu_documentary_default,
												poster: unihub_qwetu_poster_default,
												ariaLabel: "Qwetu Qejani student residences documentary"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "verified-stamp",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
													className: "size-3.5",
													"aria-hidden": "true"
												}), " Campus housing spotlight"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted-foreground",
												children: "Best student hostels in Kenya · Qwetu Qejani"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										className: "solid-card p-7 sm:p-10",
										delay: 120,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow",
												children: "Why this matters"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-3xl font-medium leading-tight",
												children: "Trust starts with seeing the place."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base",
												children: "Students and parents often ask where it is safe to stay while visiting or studying in Kenya. Real residence footage helps you judge space, security, and vibe before you message an agent."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-8 flex flex-wrap gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
													href: "/listings",
													children: "Browse listings"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "#how-it-works",
													className: "inline-flex min-h-12 items-center gap-2 text-sm font-medium text-foreground hover:text-highlight",
													children: ["How UniHub works", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
														className: "size-4",
														"aria-hidden": "true"
													})]
												})]
											})
										]
									})]
								}),
								residenceClips && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResidenceVideoGallery, { clips: residenceClips })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Act, {
						id: "listings",
						index: "V",
						title: "Choose",
						className: "section-shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									className: "flex items-end justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "section-heading",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow",
											children: "Freshly verified"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Featured near campus" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
											href: "/listings",
											children: "View all listings"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 grid gap-6 md:grid-cols-2",
									children: [residenceClips && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoolVideoCard, {
										clip: residenceClips[0],
										delay: 0
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
										className: "solid-card flex flex-col justify-center p-7 sm:p-10",
										delay: 100,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow",
												children: "Featured rooms"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-3xl font-medium leading-tight",
												children: "Rooms you can almost walk into."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
												children: [
													"Spacious student rooms from ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground",
														children: "KES 15,000"
													}),
													". Private kitchen and bathroom options, free gym and lounges."
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-7 flex flex-wrap gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
													href: "/listings",
													children: "Open listings"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "#residences",
													className: "inline-flex min-h-12 items-center gap-2 text-sm font-medium text-foreground hover:text-highlight",
													children: ["More residence clips", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
														className: "size-4",
														"aria-hidden": "true"
													})]
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
									children: listings.map((listing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: index % 3 * 90,
										className: "h-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "listing-card group h-full overflow-hidden rounded-2xl border border-border bg-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-[4/3] overflow-hidden",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: listing.image,
														alt: listing.title,
														width: 1200,
														height: 912,
														loading: "lazy",
														className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium backdrop-blur-md",
														children: listing.category
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-status px-3 py-1.5 text-xs font-semibold text-status-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-status-dot" }), " Available"]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap items-center justify-between gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5 text-xs text-muted-foreground",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
																" ",
																listing.location
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "verified-stamp",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
																className: "size-3.5",
																"aria-hidden": "true"
															}), " Vetted"]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-3 min-h-14 font-display text-xl font-medium leading-snug",
														children: listing.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-6 flex items-end justify-between border-t border-border pt-5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "font-display text-xl font-medium",
															children: [listing.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm text-muted-foreground",
																children: " / month"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-xs text-muted-foreground",
															children: listing.deposit
														})] }), listing.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/listings/$id",
															params: { id: listing.id },
															"aria-label": `View details for ${listing.title}`,
															className: "flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-accent transition-colors hover:bg-primary hover:text-primary-foreground",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
																className: "size-4",
																"aria-hidden": "true"
															})
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/listings",
															"aria-label": `Browse listings like ${listing.title}`,
															className: "flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-accent transition-colors hover:bg-primary hover:text-primary-foreground",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
																className: "size-4",
																"aria-hidden": "true"
															})
														})]
													})
												]
											})]
										})
									}, listing.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 sm:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
										href: "/listings",
										children: "View all listings"
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Act, {
						id: "locations",
						index: "VI",
						title: "Place",
						tone: "panel",
						className: "section-shell",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "section-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Popular areas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Housing keyed to campus." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Search by the town you already know (Juja, Kahawa, Kesses), then shortlist places that keep the commute short." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-8 flex flex-wrap gap-2",
										children: campusCodes.map((campus) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "campus-chip",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mr-2 text-highlight",
												children: campus.code
											}), campus.name]
										}, campus.code))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-9",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
											href: "/listings",
											children: "Explore by location"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "min-h-[28rem]",
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampusMap, { className: "h-full min-h-[28rem]" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-10 grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8",
							children: [residenceClips && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoolVideoCard, { clip: residenceClips[1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "solid-card flex flex-col justify-center p-7 sm:p-9",
								delay: 100,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Campus corridors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl font-medium",
										children: "Female hostels students actually ask for."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: "Modern hostels with Wi‑Fi for learners around IFM, CBE, TIA, UTUMISHI, and nearby colleges. See the space before you message an agent."
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-border bg-foreground text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl",
								children: "No more housing scams."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-base leading-relaxed text-background/65 sm:text-lg",
								children: "Listings are checked before they go live. We verify property details and landlord or agent contacts so you can make your next move with more confidence."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "grid grid-cols-3 gap-3 border-t border-background/15 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0",
								delay: 100,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm font-semibold",
										children: "Vetted listings"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm font-semibold",
										children: "Campus focused"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm font-semibold",
										children: "Direct contact"
									})] })
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Act, {
						id: "close",
						index: "VII",
						title: "Move",
						tone: "deep",
						className: "section-shell",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "min-h-[26rem] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: listing_apartment_default,
									alt: "Student residence ready to welcome new tenants",
									width: 1200,
									height: 912,
									loading: "lazy",
									className: "h-full w-full object-cover object-right opacity-75 transition-transform duration-700 hover:scale-[1.03]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "flex flex-col justify-center p-7 sm:p-12 lg:p-16",
								delay: 100,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "For landlords & agents"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-medium leading-tight sm:text-5xl",
										children: "List property. Reach students ready to move."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-8 space-y-4 text-sm text-secondary-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " Earn a verified badge students can trust"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " Receive direct WhatsApp and email leads"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), " Reach renters searching around your campus area"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-9",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
											href: "/list-property",
											children: "List your property"
										})
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-10 max-w-md",
							children: residenceClips && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoolVideoCard, { clip: residenceClips[2] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "relative overflow-hidden px-5 py-24 text-center md:px-8 md:py-36",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cta-orb absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "relative z-10 mx-auto max-w-4xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "mx-auto size-6 text-muted-foreground",
									strokeWidth: 1.5,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 font-display text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl",
									children: "Your next home is already listed."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-9",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryLink, {
										href: "/listings",
										children: "Browse Listings"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-sm text-muted-foreground",
									children: "Free to browse · Contact agents directly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SupportLink, {
									message: "Hi UniHub, I'd like help finding verified student housing",
									className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-highlight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": "true"
									}), WHATSAPP_CONFIGURED ? "Or chat on WhatsApp" : "Or email our support team"]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };
