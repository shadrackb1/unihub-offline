//#region node_modules/.nitro/vite/services/ssr/assets/services-BxKA9otU.js
var AD_PLANS = [
	{
		id: "free",
		label: "Free",
		price: 0,
		days: 7
	},
	{
		id: "basic",
		label: "Basic",
		price: 500,
		days: 14
	},
	{
		id: "pro",
		label: "Pro",
		price: 900,
		days: 30
	},
	{
		id: "premium",
		label: "Premium",
		price: 1500,
		days: 90
	}
];
function formatKes(amount) {
	if (amount >= 1e6) return "KES " + (amount / 1e6).toFixed(1) + "m";
	if (amount >= 1e3) return "KES " + (amount / 1e3).toFixed(1) + "k";
	return "KES " + amount.toLocaleString("en-KE");
}
async function api(path, init) {
	let response;
	try {
		response = await fetch(path, {
			method: init?.method ?? "GET",
			credentials: "include",
			...init?.body === void 0 ? {} : {
				headers: { "content-type": "application/json" },
				body: JSON.stringify(init.body)
			}
		});
	} catch {
		throw new Error("We could not reach the server. Check your connection and try again.");
	}
	if (!response.ok) {
		let message = "The request could not be completed. Please try again.";
		try {
			const payload = await response.json();
			if (payload && typeof payload === "object") {
				const error = payload.error;
				if (typeof error === "string" && error.trim()) message = error;
			}
		} catch {}
		if (response.status === 401) message = "Sign in again to continue.";
		throw new Error(message);
	}
	return await response.json();
}
/** Re-hydrate ISO strings so the screens can sort and compare dates. */
function hydrate(listing) {
	const asDate = (value) => {
		if (typeof value === "string") {
			const date = new Date(value);
			return Number.isNaN(date.getTime()) ? void 0 : date;
		}
		return value instanceof Date ? value : void 0;
	};
	return {
		...listing,
		createdAt: asDate(listing.createdAt),
		updatedAt: asDate(listing.updatedAt),
		adExpiresAt: asDate(listing.adExpiresAt)
	};
}
function isAdLive(listing) {
	if (listing.adStatus !== "live") return false;
	if (!listing.adExpiresAt) return true;
	return new Date(listing.adExpiresAt) > /* @__PURE__ */ new Date();
}
function byCreatedAtDesc(a, b) {
	const toMs = (value) => value instanceof Date ? value.getTime() : 0;
	return toMs(b.createdAt) - toMs(a.createdAt);
}
/** Listings owned by the signed-in landlord (the server scopes the query). */
async function listLandlordListings(ownerUid) {
	if (ownerUid === "") return [];
	return (await api("/api/landlord/listings")).listings.map(hydrate).sort(byCreatedAtDesc);
}
/** Create a listing awaiting admin review, owned by the signed-in landlord. */
async function createListing(_ownerUid, input) {
	return (await api("/api/landlord/listings", {
		method: "POST",
		body: input
	})).id;
}
async function deleteListing(id) {
	if (!id) throw new Error("Missing listing id.");
	await api(`/api/landlord/listings/${encodeURIComponent(id)}`, { method: "DELETE" });
}
/** Landlord-side visibility toggle (hide a live listing, or re-publish a hidden one). */
async function updateListingStatus(id, status) {
	if (!id) throw new Error("Missing listing id.");
	await api(`/api/landlord/listings/${encodeURIComponent(id)}`, {
		method: "PATCH",
		body: {
			action: "status",
			status
		}
	});
}
async function requestAd(listingId, planId) {
	if (!listingId || !planId) return;
	await api(`/api/landlord/listings/${encodeURIComponent(listingId)}`, {
		method: "PATCH",
		body: {
			action: "requestAd",
			plan: planId
		}
	});
}
/** Every listing, for admin moderation. Newest first. */
async function listAllListings() {
	return (await api("/api/admin/listings")).listings.map(hydrate).sort(byCreatedAtDesc);
}
async function moderateListing(id, status, note) {
	if (!id) throw new Error("Missing listing id.");
	await api(`/api/admin/listings/${encodeURIComponent(id)}`, {
		method: "PATCH",
		body: {
			action: "moderate",
			status,
			...note === void 0 ? {} : { note }
		}
	});
}
async function setFeatured(id, featured) {
	if (!id) throw new Error("Missing listing id.");
	await api(`/api/admin/listings/${encodeURIComponent(id)}`, {
		method: "PATCH",
		body: {
			action: "feature",
			featured
		}
	});
}
async function reviewAd(listing, approved) {
	if (!listing.id) return;
	await api(`/api/admin/listings/${encodeURIComponent(listing.id)}`, {
		method: "PATCH",
		body: {
			action: "reviewAd",
			approved
		}
	});
}
/** Every landlord profile, for the admin vetting queue. */
async function listLandlords() {
	return (await api("/api/admin/landlords")).landlords;
}
async function reviewLandlord(id, status, note) {
	if (!id) throw new Error("Missing landlord id.");
	await api(`/api/admin/landlords/${encodeURIComponent(id)}`, {
		method: "PATCH",
		body: {
			status,
			...note === void 0 ? {} : { note }
		}
	});
}
//#endregion
export { isAdLive as a, listLandlords as c, reviewAd as d, reviewLandlord as f, formatKes as i, moderateListing as l, updateListingStatus as m, createListing as n, listAllListings as o, setFeatured as p, deleteListing as r, listLandlordListings as s, AD_PLANS as t, requestAd as u };
