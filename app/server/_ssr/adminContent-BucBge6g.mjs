//#region node_modules/.nitro/vite/services/ssr/assets/adminContent-BucBge6g.js
async function request(path, init = {}) {
	const response = await fetch(path, {
		method: init.method ?? "GET",
		credentials: "include",
		...init.body === void 0 ? {} : {
			headers: { "content-type": "application/json" },
			body: JSON.stringify(init.body)
		}
	});
	if (!response.ok) {
		let message = `Request failed (${response.status})`;
		try {
			const payload = await response.json();
			if (typeof payload.error === "string") message = payload.error;
		} catch {}
		throw new Error(message);
	}
	return await response.json();
}
async function list(resource, query = "") {
	try {
		const payload = await request(`/api/admin/content/${resource}${query}`);
		return Array.isArray(payload.items) ? payload.items : [];
	} catch (error) {
		console.error(`Could not load ${resource}:`, error);
		return [];
	}
}
async function getAgents() {
	return list("agents");
}
async function deleteAgent(id) {
	await request(`/api/admin/content/agents/${id}`, { method: "DELETE" });
}
async function getCategories() {
	return list("categories");
}
async function deleteCategory(id) {
	await request(`/api/admin/content/categories/${id}`, { method: "DELETE" });
}
async function getProperties(status) {
	const items = await list("properties");
	return status ? items.filter((item) => item.status === status) : items;
}
async function getProperty(id) {
	try {
		const { item } = await request(`/api/admin/content/properties/${id}`);
		return item;
	} catch {
		return null;
	}
}
async function createProperty(data) {
	const { item } = await request("/api/admin/content/properties", {
		method: "POST",
		body: data
	});
	return item.id ?? "";
}
async function updateProperty(id, data) {
	await request(`/api/admin/content/properties/${id}`, {
		method: "PATCH",
		body: data
	});
}
async function deleteProperty(id) {
	await request(`/api/admin/content/properties/${id}`, { method: "DELETE" });
}
async function getUniversities() {
	return list("universities");
}
async function deleteUniversity(id) {
	await request(`/api/admin/content/universities/${id}`, { method: "DELETE" });
}
async function getHostels(universityId) {
	return list("hostels", universityId ? `?universityId=${encodeURIComponent(universityId)}` : "");
}
async function deleteHostel(id) {
	await request(`/api/admin/content/hostels/${id}`, { method: "DELETE" });
}
async function getSiteSettingsData() {
	try {
		const { settings } = await request("/api/admin/settings");
		return settings;
	} catch (error) {
		console.error("Could not load site settings:", error);
		return null;
	}
}
async function updateSiteSettingsData(data) {
	await request("/api/admin/settings", {
		method: "PUT",
		body: data
	});
}
//#endregion
export { deleteProperty as a, getCategories as c, getProperty as d, getSiteSettingsData as f, updateSiteSettingsData as h, deleteHostel as i, getHostels as l, updateProperty as m, deleteAgent as n, deleteUniversity as o, getUniversities as p, deleteCategory as r, getAgents as s, createProperty as t, getProperties as u };
