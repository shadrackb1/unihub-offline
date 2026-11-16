import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as useNavigate, T as useLoaderData, b as Link, w as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArrowLeft, P as Image, g as Save, j as LoaderCircle, n as X, y as Plus } from "../_libs/lucide-react.mjs";
import { c as getCategories, d as getProperty, m as updateProperty, s as getAgents, t as createProperty } from "./adminContent-BucBge6g.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminPropertyForm-Bku9QK0V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function uploadMedia(file, folder) {
	const { uploadToCloudinary } = await import("./cloudinary-B4kFxH8F.mjs").then((n) => n.t);
	const url = await uploadToCloudinary(file);
	return {
		public_id: extractPublicId(url),
		secure_url: url,
		resource_type: file.type.startsWith("video/") ? "video" : "image",
		format: file.type.split("/")[1] || "unknown",
		order: 0
	};
}
function extractPublicId(url) {
	return url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/)?.[1] ?? "";
}
var routeOptions = { loader: async ({ params }) => {
	const id = params?.id;
	if (!id || id === "new") {
		const [categories, agents] = await Promise.all([getCategories(), getAgents()]);
		return {
			property: null,
			categories,
			agents
		};
	}
	const [property, categories, agents] = await Promise.all([
		getProperty(id),
		getCategories(),
		getAgents()
	]);
	if (!property) throw new Error("Property not found");
	return {
		property,
		categories,
		agents
	};
} };
function AdminPropertyForm() {
	const { property, categories, agents } = useLoaderData({ strict: false });
	const navigate = useNavigate();
	const params = useParams({ strict: false });
	const isNew = params.id === "new";
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [uploadingImages, setUploadingImages] = (0, import_react.useState)({});
	const [imagePreviews, setImagePreviews] = (0, import_react.useState)([]);
	const [formData, setFormData] = (0, import_react.useState)({
		title: property?.title || "",
		categoryId: property?.categoryId || "",
		price: property?.price?.toString() || "",
		deposit: property?.deposit?.toString() || "",
		location: property?.location || "",
		coordinates: property?.coordinates ? `${property.coordinates.lat},${property.coordinates.lng}` : "",
		description: property?.description || "",
		features: property?.features?.join(", ") || "",
		agentId: property?.agentId || "",
		status: property?.status || "available",
		media: property?.media || []
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "features") setFormData((prev) => ({
			...prev,
			features: value
		}));
		else if (name === "coordinates") setFormData((prev) => ({
			...prev,
			coordinates: value
		}));
		else setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleImageUpload = async (index, file) => {
		setUploadingImages((prev) => ({
			...prev,
			[index]: true
		}));
		try {
			const media = await uploadMedia(file);
			const newPreviews = [...imagePreviews];
			newPreviews[index] = media.secure_url;
			setImagePreviews(newPreviews);
			setFormData((prev) => ({
				...prev,
				media: prev.media.map((m, i) => i === index ? {
					...m,
					secure_url: media.secure_url,
					public_id: media.public_id
				} : m)
			}));
		} catch (error) {
			console.error("Upload failed:", error);
			alert("Failed to upload image");
		} finally {
			setUploadingImages((prev) => ({
				...prev,
				[index]: false
			}));
		}
	};
	const handleFileChange = (index, e) => {
		const file = e.target.files?.[0];
		if (file) handleImageUpload(index, file);
	};
	const addImageSlot = () => {
		const newMedia = {
			public_id: "",
			secure_url: "",
			resource_type: "image",
			format: "",
			order: imagePreviews.length
		};
		setImagePreviews((prev) => [...prev, ""]);
		setFormData((prev) => ({
			...prev,
			media: [...prev.media, newMedia]
		}));
	};
	const removeImage = (index) => {
		setImagePreviews((prev) => prev.filter((_, i) => i !== index));
		setFormData((prev) => ({
			...prev,
			media: prev.media.filter((_, i) => i !== index)
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSaving(true);
		try {
			const [rawLat, rawLng] = formData.coordinates.split(",");
			const lat = Number(rawLat);
			const lng = Number(rawLng);
			const coordinates = Number.isFinite(lat) && Number.isFinite(lng) ? {
				lat,
				lng
			} : void 0;
			const { coordinates: _coordinates, deposit: _deposit, ...rest } = formData;
			const data = {
				...rest,
				price: Number(formData.price),
				...formData.deposit ? { deposit: Number(formData.deposit) } : {},
				...coordinates ? { coordinates } : {},
				features: formData.features.split(",").map((f) => f.trim()).filter(Boolean),
				media: formData.media.filter((m) => m.secure_url)
			};
			if (isNew) await createProperty(data);
			else if (params.id) await updateProperty(params.id, data);
			navigate({ to: "/admin/properties" });
		} catch (error) {
			console.error("Save failed:", error);
			alert("Failed to save property");
		} finally {
			setIsSaving(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (property?.media) setImagePreviews(property.media.map((m) => m.secure_url));
	}, [property]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/properties",
					className: "p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-5 h-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl font-display font-medium text-white flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-8" }), isNew ? "New Property" : "Edit Property"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-zinc-400 mt-2",
					children: isNew ? "Create a new property listing" : `Editing: ${property?.title}`
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/properties",
					className: "px-4 py-2 flex items-center gap-2 rounded-xl border border-zinc-800 text-sm font-medium hover:bg-zinc-800 transition-all font-display",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					form: "property-form",
					disabled: isSaving,
					className: "px-6 py-3 flex items-center gap-2 rounded-xl bg-brand-500 text-black text-sm font-medium hover:bg-white hover:scale-105 transition-all font-display shadow-[0_0_20px_var(--color-brand-500)]",
					children: [
						isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-4 h-4" }),
						" ",
						isSaving ? "Saving..." : "Save Property"
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			id: "property-form",
			onSubmit: handleSubmit,
			className: "space-y-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-display font-medium text-white mb-6",
							children: "Basic Information"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Title *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "title",
										value: formData.title,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "e.g., Modern Bedsitter in Juja Town"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Category *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "categoryId",
										value: formData.categoryId,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select category"
										}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: cat.id,
											children: cat.name
										}, cat.id))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Price (KES/month) *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "number",
										name: "price",
										value: formData.price,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "9500"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Deposit (KES)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										name: "deposit",
										value: formData.deposit,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "9500"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Location *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "location",
										value: formData.location,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "e.g., Near JKUAT, Juja"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Coordinates (lat,lng)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "coordinates",
										value: formData.coordinates,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "-1.093, 37.015"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Agent"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "agentId",
										value: formData.agentId,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select agent (optional)"
										}), agents.map((agent) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: agent.id,
											children: agent.name
										}, agent.id))]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-display font-medium text-white mb-6",
							children: "Description & Features"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium text-zinc-300",
									children: "Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "description",
									value: formData.description,
									onChange: handleChange,
									rows: 6,
									className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 resize-none",
									placeholder: "Describe the property in detail..."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-medium text-zinc-300",
										children: "Features (comma separated)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "features",
										value: formData.features,
										onChange: handleChange,
										className: "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
										placeholder: "Wifi, Water, Security, Parking, Laundry"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-zinc-500",
										children: "Separate features with commas"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-display font-medium text-white mb-6",
								children: "Images"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
								children: [imagePreviews.map((preview, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700",
									children: [
										preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: preview,
											alt: `Property image ${index + 1}`,
											className: "w-full h-48 object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full h-48 flex items-center justify-center border-2 border-dashed border-zinc-700 rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-10 h-10 text-zinc-600" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "image/*",
											onChange: (e) => handleFileChange(index, e),
											className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
										}),
										uploadingImages[index] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-8 h-8 animate-spin text-white" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => removeImage(index),
												className: "p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-full transition-colors",
												title: "Remove image",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
											})
										})
									]
								}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: addImageSlot,
									disabled: imagePreviews.length >= 10,
									className: "col-span-full aspect-video bg-zinc-800 border-2 border-dashed border-zinc-700 rounded-xl flex items-center justify-center cursor-pointer hover:border-brand-500 hover:bg-zinc-700/50 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-8 h-8 text-zinc-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Add image"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-zinc-500 mt-2 text-center",
								children: "Maximum 10 images. Drag to reorder (not implemented yet)."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-display font-medium text-white",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "status",
								value: formData.status,
								onChange: handleChange,
								className: "bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "available",
										children: "Available"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "occupied",
										children: "Occupied"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "hidden",
										children: "Hidden"
									})
								]
							})]
						})
					})
				]
			})
		})]
	});
}
//#endregion
export { routeOptions as n, AdminPropertyForm as t };
