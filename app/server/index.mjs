globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
"/agents/samuel-kiptoo.jpg": {
		"type": "image/jpeg",
		"etag": "\"30a3-0p-e8X0oaGFY66ecY3xe8ZiT9E_\"",
		"mtime": "2026-10-23T04:37:22.000Z",
		"size": 12451,
		"path": "../public/agents/samuel-kiptoo.jpg"
	},

"/agents/grace-njoki.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d77-raBQQGwT9Nlw-1e9hxTrq98ST21\"",
		"mtime": "2026-10-23T04:37:22.000Z",
		"size": 15735,
		"path": "../public/agents/grace-njoki.jpg"
	},

	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"33c-Rm0BvMIMbgRb1/4slJ2h5Ah/5BE\"",
		"mtime": "2026-10-22T17:39:05.133Z",
		"size": 828,
		"path": "../public/favicon.svg"
	},
	"/listing-bedsitter.jpg": {
		"type": "image/jpeg",
		"etag": "\"285cf-xkgyQlOHpS00mf+OtXvXb66dAEk\"",
		"mtime": "2026-10-22T17:39:50.151Z",
		"size": 165327,
		"path": "../public/listing-bedsitter.jpg"
	},
	"/listing-apartment.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bf8e-yPbCqY1/JcFEP8y+1fs/xancb58\"",
		"mtime": "2026-10-22T17:39:50.150Z",
		"size": 180110,
		"path": "../public/listing-apartment.jpg"
	},
	"/listing-hostel.jpg": {
		"type": "image/jpeg",
		"etag": "\"27eb1-IQlEb+QQIouzhgJc3FTph2BaISU\"",
		"mtime": "2026-10-22T17:39:50.153Z",
		"size": 163505,
		"path": "../public/listing-hostel.jpg"
	},
	"/listing-shared.jpg": {
		"type": "image/jpeg",
		"etag": "\"75d26-+pWvzcJB/kKdSGSAjl96c0V2zE4\"",
		"mtime": "2026-10-22T17:39:50.156Z",
		"size": 482598,
		"path": "../public/listing-shared.jpg"
	},
	"/listing-studio.jpg": {
		"type": "image/jpeg",
		"etag": "\"77fd1-S+6xk9soY27j5lLwfkfn6jnymEI\"",
		"mtime": "2026-10-22T17:39:50.159Z",
		"size": 491473,
		"path": "../public/listing-studio.jpg"
	},
	"/listing-video-female-hostel-poster.jpg": {
		"type": "image/jpeg",
		"etag": "\"fff2-ZeCrmUl4FNzwlc3L/O8JPfEOBu0\"",
		"mtime": "2026-10-22T17:39:50.163Z",
		"size": 65522,
		"path": "../public/listing-video-female-hostel-poster.jpg"
	},
	"/listing-video-student-rooms-poster.jpg": {
		"type": "image/jpeg",
		"etag": "\"5066-8uChZw5+Mvqfcg8chI+A1v39S0c\"",
		"mtime": "2026-10-22T17:39:50.164Z",
		"size": 20582,
		"path": "../public/listing-video-student-rooms-poster.jpg"
	},
	"/listing-video-maison-poster.jpg": {
		"type": "image/jpeg",
		"etag": "\"c4f4-coftixmRkvHK4yxdP4Zhndv3O/8\"",
		"mtime": "2026-10-22T17:39:50.163Z",
		"size": 50420,
		"path": "../public/listing-video-maison-poster.jpg"
	},
	"/logo-mark.svg": {
		"type": "image/svg+xml",
		"etag": "\"39c-9wS/7eFaQZTVPa2EE4n9jWxftrY\"",
		"mtime": "2026-10-22T17:39:05.133Z",
		"size": 924,
		"path": "../public/logo-mark.svg"
	},
	"/manifest.webmanifest": {
		"type": "application/manifest+json",
		"etag": "\"368-yzliH8c70nktU6ymxZkMI59n1Fs\"",
		"mtime": "2026-10-22T22:11:38.505Z",
		"size": 872,
		"path": "../public/manifest.webmanifest"
	},
	"/listing-twin-hostel.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a8c5-ONWn30O9jc7/jyxei0MJUZdTU+k\"",
		"mtime": "2026-10-22T17:39:50.162Z",
		"size": 501957,
		"path": "../public/listing-twin-hostel.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-10-22T17:39:00.856Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/map-dark.png": {
		"type": "image/png",
		"etag": "\"11d68-bdxS9lJ5aClUopgXFCdSChYIQ04\"",
		"mtime": "2026-10-23T03:45:00.081Z",
		"size": 73064,
		"path": "../public/map-dark.png"
	},
	"/map-satellite.png": {
		"type": "image/png",
		"etag": "\"2ff39-U0jy7e28rhVKRZpMAq5+waKNJZY\"",
		"mtime": "2026-10-23T03:47:46.112Z",
		"size": 196409,
		"path": "../public/map-satellite.png"
	},
	"/ads/AD-COPY.md": {
		"type": "text/markdown; charset=utf-8",
		"etag": "\"9b2-OVJ+Ga2r//yb/54+q4+ZVX6aKzQ\"",
		"mtime": "2026-10-22T22:11:38.345Z",
		"size": 2482,
		"path": "../public/ads/AD-COPY.md"
	},
	"/fonts/inter-400.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-10-23T03:29:55.329Z",
		"size": 48256,
		"path": "../public/fonts/inter-400.woff2"
	},
	"/fonts/inter-600.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-10-23T03:29:55.970Z",
		"size": 48256,
		"path": "../public/fonts/inter-600.woff2"
	},
	"/fonts/inter-500.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-10-23T03:29:55.800Z",
		"size": 48256,
		"path": "../public/fonts/inter-500.woff2"
	},
	"/pwa/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"1a29-9j9NvKV2uCcas/1N4zzDNTcctJI\"",
		"mtime": "2026-10-22T17:39:50.165Z",
		"size": 6697,
		"path": "../public/pwa/apple-touch-icon.png"
	},
	"/fonts/space-grotesk-500.woff2": {
		"type": "font/woff2",
		"etag": "\"5710-wHgeovKQE4JtweuNtA9NQA2d9xA\"",
		"mtime": "2026-10-23T03:29:56.405Z",
		"size": 22288,
		"path": "../public/fonts/space-grotesk-500.woff2"
	},
	"/fonts/space-grotesk-600.woff2": {
		"type": "font/woff2",
		"etag": "\"5710-wHgeovKQE4JtweuNtA9NQA2d9xA\"",
		"mtime": "2026-10-23T03:29:56.842Z",
		"size": 22288,
		"path": "../public/fonts/space-grotesk-600.woff2"
	},
	"/ads/unihub-landing-status-28s.mp4": {
		"type": "video/mp4",
		"etag": "\"1665a8-S8mJ9A3/xiKsP8qOLyG4SotmUlo\"",
		"mtime": "2026-10-22T17:39:05.270Z",
		"size": 1467816,
		"path": "../public/ads/unihub-landing-status-28s.mp4"
	},
	"/sw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b4c-OmQIxO+iO8I4tC2FNa/HIKxGDuQ\"",
		"mtime": "2026-10-22T22:11:38.545Z",
		"size": 6988,
		"path": "../public/sw.js"
	},
	"/pwa/icon-192.png": {
		"type": "image/png",
		"etag": "\"1bac-7NMoVSSNe6ZF6lih6EBJ0JLYH44\"",
		"mtime": "2026-10-22T17:39:50.165Z",
		"size": 7084,
		"path": "../public/pwa/icon-192.png"
	},
	"/pwa/icon-512-maskable.png": {
		"type": "image/png",
		"etag": "\"121e-ecYCkvKc9cwAW/vgHAgY5cnbrxg\"",
		"mtime": "2026-10-22T17:39:50.166Z",
		"size": 4638,
		"path": "../public/pwa/icon-512-maskable.png"
	},
	"/assets/about-B6JmefJU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f57-HUJTB1Pg0m2IYN7PsPNUUyYAVzc\"",
		"mtime": "2026-10-23T03:55:45.719Z",
		"size": 3927,
		"path": "../public/assets/about-B6JmefJU.js"
	},
	"/pwa/icon-512.png": {
		"type": "image/png",
		"etag": "\"121e-ecYCkvKc9cwAW/vgHAgY5cnbrxg\"",
		"mtime": "2026-10-22T17:39:50.166Z",
		"size": 4638,
		"path": "../public/pwa/icon-512.png"
	},
	"/assets/admin-uZrF_Ulj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a9-NglWNnCIsND/b00s9Fs0CnGGcHc\"",
		"mtime": "2026-10-23T03:55:45.720Z",
		"size": 5545,
		"path": "../public/assets/admin-uZrF_Ulj.js"
	},
	"/assets/admin-vJgSP6Sd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-Vh6H6J7AzE9ltBxV7JODBGXg9J8\"",
		"mtime": "2026-10-23T03:55:45.720Z",
		"size": 71,
		"path": "../public/assets/admin-vJgSP6Sd.js"
	},
	"/assets/AdminMarketplacePages-BANx6lBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f13-Mqxu6tr6Vjj2wCLQsCpq33SCFQg\"",
		"mtime": "2026-10-23T03:55:45.717Z",
		"size": 12051,
		"path": "../public/assets/AdminMarketplacePages-BANx6lBp.js"
	},
	"/assets/ads-CAJDbrfA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57-kOOYard0aww23emVkftsAmrqL8M\"",
		"mtime": "2026-10-23T03:55:45.720Z",
		"size": 87,
		"path": "../public/assets/ads-CAJDbrfA.js"
	},
	"/assets/agents-BXIYWyvV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-VJENvs7AshRr/lBhzejZqpW51fk\"",
		"mtime": "2026-10-23T03:55:45.721Z",
		"size": 71,
		"path": "../public/assets/agents-BXIYWyvV.js"
	},
	"/assets/arrow-right-CAeYkmn8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-K+2AJOwALhQSDBz+SHzPQaEZjSw\"",
		"mtime": "2026-10-23T03:55:45.721Z",
		"size": 165,
		"path": "../public/assets/arrow-right-CAeYkmn8.js"
	},
	"/assets/building-2-BchBJEGn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-e0d1Ld5FlRap3eexiOcypuaJFAM\"",
		"mtime": "2026-10-23T03:55:45.721Z",
		"size": 383,
		"path": "../public/assets/building-2-BchBJEGn.js"
	},
	"/assets/categories-BOQfFMZI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-Yg+gREgmCqaJw3iQkYu8hP0/eYs\"",
		"mtime": "2026-10-23T03:55:45.721Z",
		"size": 71,
		"path": "../public/assets/categories-BOQfFMZI.js"
	},
	"/assets/check-CmWUQ7w7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-FcEM86FZTpPxYUdTJxlmif2i0tI\"",
		"mtime": "2026-10-23T03:55:45.722Z",
		"size": 124,
		"path": "../public/assets/check-CmWUQ7w7.js"
	},
	"/assets/circle-check-CfYeOavY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-sOP83mvxnTDFC7Ng/Kjq+TPmATQ\"",
		"mtime": "2026-10-23T03:55:45.722Z",
		"size": 178,
		"path": "../public/assets/circle-check-CfYeOavY.js"
	},
	"/assets/circle-x-C4UkbfRY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf-ZMQHB4KUx3MDlGgJc6gDAOTi9ls\"",
		"mtime": "2026-10-23T03:55:45.723Z",
		"size": 207,
		"path": "../public/assets/circle-x-C4UkbfRY.js"
	},
	"/assets/clock-BTdsgVpE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-H6leaKoZwphvO9SFyM3kwHLxWbE\"",
		"mtime": "2026-10-23T03:55:45.723Z",
		"size": 169,
		"path": "../public/assets/clock-BTdsgVpE.js"
	},
	"/assets/cloudinary-BUqrofci.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c9-fb4jVKtN3ZfdBlc//t3FWRmXFhU\"",
		"mtime": "2026-10-23T03:55:45.724Z",
		"size": 2249,
		"path": "../public/assets/cloudinary-BUqrofci.js"
	},
	"/assets/cms-_NSuzrlF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-otqkv1Vlz0jDbtddGAZ4sVZawEw\"",
		"mtime": "2026-10-23T03:55:45.726Z",
		"size": 71,
		"path": "../public/assets/cms-_NSuzrlF.js"
	},
	"/assets/consent-B0h6jEhJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a57-Ac5BuNPX2aX8PHjCzz2KfIUKZWI\"",
		"mtime": "2026-10-23T03:55:45.727Z",
		"size": 6743,
		"path": "../public/assets/consent-B0h6jEhJ.js"
	},
	"/assets/ConsentForm-CxwFx42N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2511-iyOkhGa/ZVYNM8LEac1Y0W1QHFA\"",
		"mtime": "2026-10-23T03:55:45.717Z",
		"size": 9489,
		"path": "../public/assets/ConsentForm-CxwFx42N.js"
	},
	"/assets/contact-XGpBr-42.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb3-Jv3h8QIo4/vscoEljoyDk3J8UDw\"",
		"mtime": "2026-10-23T03:55:45.727Z",
		"size": 2995,
		"path": "../public/assets/contact-XGpBr-42.js"
	},
	"/assets/createLucideIcon-CgPoqdpr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cc-YUqCmUknCDt2o7Xac/vSEnXiObk\"",
		"mtime": "2026-10-23T03:55:45.727Z",
		"size": 1228,
		"path": "../public/assets/createLucideIcon-CgPoqdpr.js"
	},
	"/assets/eye-off-CSbLASAX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ae-KtY6mfVF82Y5cJ4I2R/CfCKoZc8\"",
		"mtime": "2026-10-23T03:55:45.728Z",
		"size": 430,
		"path": "../public/assets/eye-off-CSbLASAX.js"
	},
	"/assets/firebase-P5cmScJ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7aa5f-qmt+LJrHVTqD4Oe2lQS4wTlBsAo\"",
		"mtime": "2026-10-23T03:55:45.733Z",
		"size": 502367,
		"path": "../public/assets/firebase-P5cmScJ0.js"
	},
	"/assets/graduation-cap-B1sRHD2j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c-SSCXdae2C85+vmbjGgtOyeK1w0c\"",
		"mtime": "2026-10-23T03:55:45.734Z",
		"size": 332,
		"path": "../public/assets/graduation-cap-B1sRHD2j.js"
	},
	"/assets/hostels-D1WxJKVz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-YitO9vbE4Dek2vHVwlI2ASDKIXE\"",
		"mtime": "2026-10-23T03:55:45.734Z",
		"size": 71,
		"path": "../public/assets/hostels-D1WxJKVz.js"
	},
	"/assets/hostels_.new-DiLjjgLw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-h8hlBnYvTNdF4iPNrcitrXobOSs\"",
		"mtime": "2026-10-23T03:55:45.734Z",
		"size": 184,
		"path": "../public/assets/hostels_.new-DiLjjgLw.js"
	},
	"/assets/jsx-runtime-NZYk81nU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b3-E2cxOBZp5vJBrKGtXXATYgbVvjE\"",
		"mtime": "2026-10-23T03:55:45.735Z",
		"size": 435,
		"path": "../public/assets/jsx-runtime-NZYk81nU.js"
	},
	"/assets/landlord-Bvs-35fj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be8-8L7R9JEjYYpSGsSKG7Q0EebqiXE\"",
		"mtime": "2026-10-23T03:55:45.735Z",
		"size": 3048,
		"path": "../public/assets/landlord-Bvs-35fj.js"
	},
	"/assets/landlord.ads-CT44gvqn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e20-d1/iw4CTshorphW1g0dzfRZM7RM\"",
		"mtime": "2026-10-23T03:55:45.736Z",
		"size": 11808,
		"path": "../public/assets/landlord.ads-CT44gvqn.js"
	},
	"/assets/landlord.ads_.new-BXJIc-3Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2932-mEJZ2ljwUhmQV27qNV181cDk9PU\"",
		"mtime": "2026-10-23T03:55:45.737Z",
		"size": 10546,
		"path": "../public/assets/landlord.ads_.new-BXJIc-3Z.js"
	},
	"/assets/landlord.index-Dlahdfxb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbd-OPuakwSsldO8Mz8a6CZ5cjP7VUc\"",
		"mtime": "2026-10-23T03:55:45.739Z",
		"size": 7357,
		"path": "../public/assets/landlord.index-Dlahdfxb.js"
	},
	"/assets/landlord.listings-EW3VRUTW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25c3-YsCib1MKuv6HiVMQ2lYvXkGyJW0\"",
		"mtime": "2026-10-23T03:55:45.740Z",
		"size": 9667,
		"path": "../public/assets/landlord.listings-EW3VRUTW.js"
	},
	"/assets/landlord.listings_.new-Dp1PybCQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4ff1-t5yiVfULEW5AHYKUkWF/nXyhG98\"",
		"mtime": "2026-10-23T03:55:45.740Z",
		"size": 20465,
		"path": "../public/assets/landlord.listings_.new-Dp1PybCQ.js"
	},
	"/assets/landlord.login-CH2W37e0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1629-g3k/n/+kjVYdGd40/5VEBXsZ4G8\"",
		"mtime": "2026-10-23T03:55:45.740Z",
		"size": 5673,
		"path": "../public/assets/landlord.login-CH2W37e0.js"
	},
	"/assets/landlord.pending-BP_LcE_j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c9-zZ4V1p7jTPZdn1OOeVk0BauyOUc\"",
		"mtime": "2026-10-23T03:55:45.741Z",
		"size": 713,
		"path": "../public/assets/landlord.pending-BP_LcE_j.js"
	},
	"/assets/landlord.rejected-BuDiVXkE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ae-OyA/9XwbZmipOdwwUdHV+Wd776U\"",
		"mtime": "2026-10-23T03:55:45.743Z",
		"size": 686,
		"path": "../public/assets/landlord.rejected-BuDiVXkE.js"
	},
	"/assets/landlord.register-CFL_8FVD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e38-sJq/CAkVgWCTNdcY8/PITZm5Wko\"",
		"mtime": "2026-10-23T03:55:45.742Z",
		"size": 15928,
		"path": "../public/assets/landlord.register-CFL_8FVD.js"
	},
	"/assets/landlord.suspended-Dgr70ntj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b1-BrgwKIa333/FhtT6X8NvI+jQJVA\"",
		"mtime": "2026-10-23T03:55:45.745Z",
		"size": 689,
		"path": "../public/assets/landlord.suspended-Dgr70ntj.js"
	},
	"/assets/LandlordContext-C7JJ5XBQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae4-0o5OCyhKVnlGLYkgfJnUxhMV5Bk\"",
		"mtime": "2026-10-23T03:55:45.718Z",
		"size": 2788,
		"path": "../public/assets/LandlordContext-C7JJ5XBQ.js"
	},
	"/assets/landlords-83ktHQBk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57-z6MEmLjv3VR055ZUQRWeng71R1o\"",
		"mtime": "2026-10-23T03:55:45.745Z",
		"size": 87,
		"path": "../public/assets/landlords-83ktHQBk.js"
	},
	"/assets/LandlordShell-B6Yjy3lH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"151c-+nqWA3IuOoQlH3DMn8YOnnoCqu4\"",
		"mtime": "2026-10-23T03:55:45.718Z",
		"size": 5404,
		"path": "../public/assets/LandlordShell-B6Yjy3lH.js"
	},
	"/assets/LandlordStatusScreen-ATpiTYW4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10de-tAhggixG45+EuXsW8uPO4OnayFw\"",
		"mtime": "2026-10-23T03:55:45.718Z",
		"size": 4318,
		"path": "../public/assets/LandlordStatusScreen-ATpiTYW4.js"
	},
	"/assets/LegalPage-ZkU3yfQJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"88b-czuWsz1RhQZU6O4yvprD9iP0l6o\"",
		"mtime": "2026-10-23T03:55:45.719Z",
		"size": 2187,
		"path": "../public/assets/LegalPage-ZkU3yfQJ.js"
	},
	"/assets/list-property-zy13eBtt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c76-ulYbA35N58ym6BkM1R4WHPD+Ldc\"",
		"mtime": "2026-10-23T03:55:45.746Z",
		"size": 3190,
		"path": "../public/assets/list-property-zy13eBtt.js"
	},
	"/assets/index-BIfDeE0n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"988bd-yD4CRxCZG7J9qSG2lCAFo+3h1c4\"",
		"mtime": "2026-10-23T03:55:45.717Z",
		"size": 624829,
		"path": "../public/assets/index-BIfDeE0n.js"
	},
	"/ads/unihub-landing-social-45s.mp4": {
		"type": "video/mp4",
		"etag": "\"481fc9-l95cZho4TXOPEtASy973QZIJaF4\"",
		"mtime": "2026-10-22T17:39:05.260Z",
		"size": 4726729,
		"path": "../public/ads/unihub-landing-social-45s.mp4"
	},
	"/assets/listing-apartment-CJdqMByw.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bf8e-yPbCqY1/JcFEP8y+1fs/xancb58\"",
		"mtime": "2026-10-23T03:55:45.759Z",
		"size": 180110,
		"path": "../public/assets/listing-apartment-CJdqMByw.jpg"
	},
	"/assets/listing-bedsitter-DDOm5JGm.jpg": {
		"type": "image/jpeg",
		"etag": "\"285cf-xkgyQlOHpS00mf+OtXvXb66dAEk\"",
		"mtime": "2026-10-23T03:55:45.759Z",
		"size": 165327,
		"path": "../public/assets/listing-bedsitter-DDOm5JGm.jpg"
	},
	"/assets/listing-hostel-CMAzW2su.jpg": {
		"type": "image/jpeg",
		"etag": "\"27eb1-IQlEb+QQIouzhgJc3FTph2BaISU\"",
		"mtime": "2026-10-23T03:55:45.760Z",
		"size": 163505,
		"path": "../public/assets/listing-hostel-CMAzW2su.jpg"
	},
	"/assets/listing-twin-hostel-Bls5oBir.jpg": {
		"type": "image/jpeg",
		"etag": "\"7a8c5-ONWn30O9jc7/jyxei0MJUZdTU+k\"",
		"mtime": "2026-10-23T03:55:45.762Z",
		"size": 501957,
		"path": "../public/assets/listing-twin-hostel-Bls5oBir.jpg"
	},
	"/assets/listing-studio-BGLH672v.jpg": {
		"type": "image/jpeg",
		"etag": "\"77fd1-S+6xk9soY27j5lLwfkfn6jnymEI\"",
		"mtime": "2026-10-23T03:55:45.761Z",
		"size": 491473,
		"path": "../public/assets/listing-studio-BGLH672v.jpg"
	},
	"/assets/listing-shared-rEQvnyoN.jpg": {
		"type": "image/jpeg",
		"etag": "\"75d26-+pWvzcJB/kKdSGSAjl96c0V2zE4\"",
		"mtime": "2026-10-23T03:55:45.760Z",
		"size": 482598,
		"path": "../public/assets/listing-shared-rEQvnyoN.jpg"
	},
	"/assets/listing-video-female-hostel-poster-CMeW10OG.jpg": {
		"type": "image/jpeg",
		"etag": "\"fff2-ZeCrmUl4FNzwlc3L/O8JPfEOBu0\"",
		"mtime": "2026-10-23T03:55:45.832Z",
		"size": 65522,
		"path": "../public/assets/listing-video-female-hostel-poster-CMeW10OG.jpg"
	},
	"/assets/listing-video-maison-poster-D8mWuYPw.jpg": {
		"type": "image/jpeg",
		"etag": "\"c4f4-coftixmRkvHK4yxdP4Zhndv3O/8\"",
		"mtime": "2026-10-23T03:55:45.834Z",
		"size": 50420,
		"path": "../public/assets/listing-video-maison-poster-D8mWuYPw.jpg"
	},
	"/assets/listings-CBxbxD2q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c11-h5ODRAGUJoiWzHNAJ5shXpWKiE0\"",
		"mtime": "2026-10-23T03:55:45.746Z",
		"size": 7185,
		"path": "../public/assets/listings-CBxbxD2q.js"
	},
	"/assets/listings_._id-CBDOQOd0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1506-vxLSLUOkxw0RtVlmBuDgsz8wNHI\"",
		"mtime": "2026-10-23T03:55:45.747Z",
		"size": 5382,
		"path": "../public/assets/listings_._id-CBDOQOd0.js"
	},
	"/assets/listings-EAiGd8x5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57-ZauknMTVAaVicy9N3mJ6habcH84\"",
		"mtime": "2026-10-23T03:55:45.746Z",
		"size": 87,
		"path": "../public/assets/listings-EAiGd8x5.js"
	},
	"/assets/lock-BvR9YJl7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-JTtykZQy+gm80YdDA7wAJetwP/0\"",
		"mtime": "2026-10-23T03:55:45.749Z",
		"size": 206,
		"path": "../public/assets/lock-BvR9YJl7.js"
	},
	"/assets/log-out-BXHC3l3a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-5HXLr6MnXQuYNSCQMwu7t9wKwCY\"",
		"mtime": "2026-10-23T03:55:45.749Z",
		"size": 230,
		"path": "../public/assets/log-out-BXHC3l3a.js"
	},
	"/assets/login-BBOUwHV6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1506-64HPfQRnG41mt6IIuVWjOV71gNc\"",
		"mtime": "2026-10-23T03:55:45.750Z",
		"size": 5382,
		"path": "../public/assets/login-BBOUwHV6.js"
	},
	"/assets/map-pin-DNHXAYER.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-Y0Bf9GxyaSP2j3XSKM3mp+U81vg\"",
		"mtime": "2026-10-23T03:55:45.750Z",
		"size": 259,
		"path": "../public/assets/map-pin-DNHXAYER.js"
	},
	"/assets/listing-video-student-rooms-poster-DaKlSeId.jpg": {
		"type": "image/jpeg",
		"etag": "\"5066-8uChZw5+Mvqfcg8chI+A1v39S0c\"",
		"mtime": "2026-10-23T03:55:45.838Z",
		"size": 20582,
		"path": "../public/assets/listing-video-student-rooms-poster-DaKlSeId.jpg"
	},
	"/assets/megaphone-86XuRizM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15a-cxy/DwdS/HWYciqvQM/WoVnNjvA\"",
		"mtime": "2026-10-23T03:55:45.751Z",
		"size": 346,
		"path": "../public/assets/megaphone-86XuRizM.js"
	},
	"/assets/privacy-D4K0Yf-y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1096-nHVDrUbM9cj+g7IfbdmS7zKDGUs\"",
		"mtime": "2026-10-23T03:55:45.752Z",
		"size": 4246,
		"path": "../public/assets/privacy-D4K0Yf-y.js"
	},
	"/assets/maplibre-gl-B2k4QVOw.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"110b0-ktCrTpfc4yMYyf4bIOXbtYXFctY\"",
		"mtime": "2026-10-23T03:55:45.839Z",
		"size": 69808,
		"path": "../public/assets/maplibre-gl-B2k4QVOw.css"
	},
	"/assets/properties-92AwHF-k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-KfN2kbPLq71SqnrabmYz62PW8wo\"",
		"mtime": "2026-10-23T03:55:45.752Z",
		"size": 71,
		"path": "../public/assets/properties-92AwHF-k.js"
	},
	"/assets/properties_.new-D8eamxro.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-MWN1ST2yg0+AGzbQP2a/+yqtZ1w\"",
		"mtime": "2026-10-23T03:55:45.753Z",
		"size": 71,
		"path": "../public/assets/properties_.new-D8eamxro.js"
	},
	"/assets/maplibre-gl-CFcDe5TP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"faea5-RP1l/XbIExNFCiUZlFoyw++IejI\"",
		"mtime": "2026-10-23T03:55:45.751Z",
		"size": 1027749,
		"path": "../public/assets/maplibre-gl-CFcDe5TP.js"
	},
	"/assets/properties_._id-D8eamxro.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-MWN1ST2yg0+AGzbQP2a/+yqtZ1w\"",
		"mtime": "2026-10-23T03:55:45.752Z",
		"size": 71,
		"path": "../public/assets/properties_._id-D8eamxro.js"
	},
	"/assets/react-CwJFpaho.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d6c-KfTag/o29kzdrpfhBdCUUysb2R0\"",
		"mtime": "2026-10-23T03:55:45.754Z",
		"size": 7532,
		"path": "../public/assets/react-CwJFpaho.js"
	},
	"/assets/rolldown-runtime-hePW80VL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cc-fA8td6k29UVF6JoPfhOPkceTK1M\"",
		"mtime": "2026-10-23T03:55:45.754Z",
		"size": 716,
		"path": "../public/assets/rolldown-runtime-hePW80VL.js"
	},
	"/assets/refresh-cw-DFvtn3vr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"141-n/Dk5YIsLB/PyrVcwpMxbzAxkL8\"",
		"mtime": "2026-10-23T03:55:45.754Z",
		"size": 321,
		"path": "../public/assets/refresh-cw-DFvtn3vr.js"
	},
	"/assets/services-DVuEmzy3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b28-So8eK7/0Eu+Xnhh5xxuituH+t8w\"",
		"mtime": "2026-10-23T03:55:45.755Z",
		"size": 2856,
		"path": "../public/assets/services-DVuEmzy3.js"
	},
	"/assets/routes-Dm49ooM1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8747-vv4Aef1GZG0umNz59oZAxnnZJg6\"",
		"mtime": "2026-10-23T03:55:45.755Z",
		"size": 34631,
		"path": "../public/assets/routes-Dm49ooM1.js"
	},
	"/assets/settings-B5DebzkV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-4B/J8aciOkW+8an8Mcbgrku+0zM\"",
		"mtime": "2026-10-23T03:55:45.755Z",
		"size": 71,
		"path": "../public/assets/settings-B5DebzkV.js"
	},
	"/assets/shield-alert-BEyCoFHk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"161-BAO/4EqN1rbAVuSIVi7MXpHA9hw\"",
		"mtime": "2026-10-23T03:55:45.756Z",
		"size": 353,
		"path": "../public/assets/shield-alert-BEyCoFHk.js"
	},
	"/assets/shield-check-JmOM0y7a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-slh6OOnQ19T99/obS2UBnOk66Cs\"",
		"mtime": "2026-10-23T03:55:45.756Z",
		"size": 320,
		"path": "../public/assets/shield-check-JmOM0y7a.js"
	},
	"/assets/sparkles-CjtL3vot.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-urYPTSyFtREjtMXZ4CfZubOV8aI\"",
		"mtime": "2026-10-23T03:55:45.756Z",
		"size": 494,
		"path": "../public/assets/sparkles-CjtL3vot.js"
	},
	"/assets/terms-DNyDQ9U6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5e-StEN4bYR2vWcXj2jGoIomOqicYo\"",
		"mtime": "2026-10-23T03:55:45.757Z",
		"size": 3934,
		"path": "../public/assets/terms-DNyDQ9U6.js"
	},
	"/assets/styles-Emh0aXVp.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"171df-S5VYuR9nDOIvoc+jirUarwwx8d8\"",
		"mtime": "2026-10-23T03:55:45.839Z",
		"size": 94687,
		"path": "../public/assets/styles-Emh0aXVp.css"
	},
	"/assets/unihub-hero-B5Uo8BTw.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d836-/REBX61zIDerLBRpkYew6k2IM30\"",
		"mtime": "2026-10-23T03:55:45.839Z",
		"size": 251958,
		"path": "../public/assets/unihub-hero-B5Uo8BTw.jpg"
	},
	"/assets/unihub-hero-poster-C-uvBIn9.jpg": {
		"type": "image/jpeg",
		"etag": "\"1320e-jeJMnL77+37wUldDl7+ym4PULtM\"",
		"mtime": "2026-10-23T03:55:45.845Z",
		"size": 78350,
		"path": "../public/assets/unihub-hero-poster-C-uvBIn9.jpg"
	},
	"/assets/unihub-qwetu-poster-46OuDwSO.jpg": {
		"type": "image/jpeg",
		"etag": "\"1abf6-B2kVScQBHpG39r/ZZUS0jLYaAGQ\"",
		"mtime": "2026-10-23T03:55:45.849Z",
		"size": 109558,
		"path": "../public/assets/unihub-qwetu-poster-46OuDwSO.jpg"
	},
	"/assets/unihub-walkthrough-poster-WXrAkjyp.jpg": {
		"type": "image/jpeg",
		"etag": "\"c0f0-Vm8IQVGi4D1MUSGou10yK/Vi4Ao\"",
		"mtime": "2026-10-23T03:55:45.854Z",
		"size": 49392,
		"path": "../public/assets/unihub-walkthrough-poster-WXrAkjyp.jpg"
	},
	"/assets/listing-video-maison-CmiR7TQ1.mp4": {
		"type": "video/mp4",
		"etag": "\"26be12-hGXU4bGcdTqFRcs7ax93h8SWWJQ\"",
		"mtime": "2026-10-23T03:55:45.834Z",
		"size": 2539026,
		"path": "../public/assets/listing-video-maison-CmiR7TQ1.mp4"
	},
	"/assets/universities-CZYGOLlb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47-TxZCZ8Ving0z7XaK0b5sScWtqcw\"",
		"mtime": "2026-10-23T03:55:45.757Z",
		"size": 71,
		"path": "../public/assets/universities-CZYGOLlb.js"
	},
	"/assets/useListings-CX6b6w5b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-rlf9uHpom2oSAGvJaEnF/cqPPrI\"",
		"mtime": "2026-10-23T03:55:45.757Z",
		"size": 249,
		"path": "../public/assets/useListings-CX6b6w5b.js"
	},
	"/assets/useMatch-CbVRUcPi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"273-Mzj3fKrKRd5WWEJZ/b5sFdR8rwc\"",
		"mtime": "2026-10-23T03:55:45.758Z",
		"size": 627,
		"path": "../public/assets/useMatch-CbVRUcPi.js"
	},
	"/assets/useRouterState-9wJeE68s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c7-N6lrbZyaO181cxC65hRaOHTtYAs\"",
		"mtime": "2026-10-23T03:55:45.758Z",
		"size": 199,
		"path": "../public/assets/useRouterState-9wJeE68s.js"
	},
	"/assets/useSelector-9PWusaCx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1479-uQ4z1RqPJqw8kFvs5/l4z33aUVc\"",
		"mtime": "2026-10-23T03:55:45.759Z",
		"size": 5241,
		"path": "../public/assets/useSelector-9PWusaCx.js"
	},
	"/assets/VideoPanel-DGX5hjtE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1066-iVJAhGCmocvTzjCvKZOa3eDULME\"",
		"mtime": "2026-10-23T03:55:45.719Z",
		"size": 4198,
		"path": "../public/assets/VideoPanel-DGX5hjtE.js"
	},
	"/assets/listing-video-female-hostel-BWIX24dw.mp4": {
		"type": "video/mp4",
		"etag": "\"57eef8-KnTO6ebbeUhk09D1FZTTOYfrZkQ\"",
		"mtime": "2026-10-23T03:55:45.784Z",
		"size": 5762808,
		"path": "../public/assets/listing-video-female-hostel-BWIX24dw.mp4"
	},
	"/assets/listing-video-student-rooms-CAayIm54.mp4": {
		"type": "video/mp4",
		"etag": "\"61b8aa-PEtpB91o5JEfVgYyU7kDIty4UCo\"",
		"mtime": "2026-10-23T03:55:45.838Z",
		"size": 6404266,
		"path": "../public/assets/listing-video-student-rooms-CAayIm54.mp4"
	},
	"/assets/unihub-qwetu-documentary-DDJ57-tO.mp4": {
		"type": "video/mp4",
		"etag": "\"636032-FtJp67I2LACPzq2C/xRo1E/wG+g\"",
		"mtime": "2026-10-23T03:55:45.848Z",
		"size": 6512690,
		"path": "../public/assets/unihub-qwetu-documentary-DDJ57-tO.mp4"
	},
	"/assets/unihub-hero-e9cr0xVh.mp4": {
		"type": "video/mp4",
		"etag": "\"7f087b-nqxVwr0pLJpuOOmUeZDJcIQwk0Q\"",
		"mtime": "2026-10-23T03:55:45.844Z",
		"size": 8325243,
		"path": "../public/assets/unihub-hero-e9cr0xVh.mp4"
	},
	"/assets/unihub-site-walkthrough-CN8wfrFX.mp4": {
		"type": "video/mp4",
		"etag": "\"9d4a32-NaOOXNAM2kpDsURxnyRZJc9Zo0I\"",
		"mtime": "2026-10-23T03:55:45.852Z",
		"size": 10308146,
		"path": "../public/assets/unihub-site-walkthrough-CN8wfrFX.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_M_VF6T = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_M_VF6T
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
