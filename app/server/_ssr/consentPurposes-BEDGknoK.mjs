//#region node_modules/.nitro/vite/services/ssr/assets/consentPurposes-BEDGknoK.js
var CONSENT_PURPOSES = [
	{
		id: "IDENTITY_VERIFICATION",
		title: "Checking who you are",
		wording: "I consent to UniHub collecting and processing my personal data as described in the consent form, including my full name, email address, phone number, WhatsApp number and national ID or passport number, so that my landlord or agent account can be verified before any listing is published.",
		basis: "Consent under s.32 of the Data Protection Act, 2019, supported by legitimate interests under s.30(1)(f).",
		required: true
	},
	{
		id: "LISTING_PUBLICATION",
		title: "Publishing the property listings I submit",
		wording: "I consent to UniHub publishing the property listings I submit, including the listing title, location, category, price, deposit, photographs and amenities, so that students can find student housing near their campuses.",
		basis: "Legitimate interests under s.30(1)(f) of the Data Protection Act, 2019.",
		required: true
	},
	{
		id: "PLATFORM_COMMUNICATIONS",
		title: "Administering my account and contacting me about it",
		wording: "I consent to UniHub processing my registration data, my consent record and the review notes on my application, so that my account can be administered, and to UniHub contacting me about the status of my account, the review of my listings and any change to the UniHub service that affects me.",
		basis: "Consent under s.32 of the Data Protection Act, 2019.",
		required: true
	},
	{
		id: "PUBLIC_CONTACT_DETAILS",
		title: "Showing my contact details on my listings",
		wording: "I consent to UniHub showing my WhatsApp number and my business email address on my published listings, so that students can contact me directly.",
		basis: "Consent under s.32 of the Data Protection Act, 2019.",
		required: false
	}
];
CONSENT_PURPOSES.filter((purpose) => !purpose.required).map((purpose) => purpose.id);
/**
* The ten statements of the consent declaration, in the order they appear
* on the issued form. Statement 3 is shown as three separate ticks because
* it covers three separate purposes; each tick is recorded on its own.
*/
var DECLARATION_ITEMS = [
	{
		id: "AGE_CAPACITY",
		number: "1",
		title: "Age and capacity",
		text: "I confirm that I am 18 years of age or older and have the legal capacity to provide this consent.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "UNDERSTANDING",
		number: "2",
		title: "Understanding",
		text: "I have read and understood this consent form and the UniHub Privacy Policy.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "CORE_CONSENT_IDENTITY",
		number: "3a",
		title: "Core consent — verifying my identity",
		text: CONSENT_PURPOSES[0]?.wording ?? "",
		kind: "consent",
		purpose: "IDENTITY_VERIFICATION",
		required: true
	},
	{
		id: "CORE_CONSENT_PUBLICATION",
		number: "3b",
		title: "Core consent — publishing my listings",
		text: CONSENT_PURPOSES[1]?.wording ?? "",
		kind: "consent",
		purpose: "LISTING_PUBLICATION",
		required: true
	},
	{
		id: "CORE_CONSENT_ACCOUNT",
		number: "3c",
		title: "Core consent — administering my account",
		text: CONSENT_PURPOSES[2]?.wording ?? "",
		kind: "consent",
		purpose: "PLATFORM_COMMUNICATIONS",
		required: true
	},
	{
		id: "PUBLIC_CONTACT_DETAILS",
		number: "4",
		title: "Public contact details",
		text: CONSENT_PURPOSES[3]?.wording ?? "",
		kind: "consent",
		purpose: "PUBLIC_CONTACT_DETAILS",
		required: false
	},
	{
		id: "ACCURACY",
		number: "5",
		title: "Accuracy",
		text: "I confirm that the information I provide (identity, contact details, property details) is accurate and I will keep it updated.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "NATIONAL_ID_PROTECTION",
		number: "6",
		title: "National ID protection",
		text: "I understand that my national ID or passport number is used for verification only and will never be shown publicly or shared with students.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "WITHDRAWAL_RIGHT",
		number: "7",
		title: "Withdrawal right",
		text: "I understand that I may withdraw my consent at any time, which closes my account and removes my listings, and that withdrawing does not affect the lawfulness of processing carried out before the withdrawal.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "INTERNATIONAL_TRANSFER",
		number: "8",
		title: "International transfers",
		text: "I understand that my data is processed on servers outside Kenya (Vercel in the United States, GitHub in the United States) under Standard Contractual Clauses as safeguards.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "NO_AUTOMATED_DECISIONS",
		number: "9",
		title: "No automated decisions",
		text: "I understand that no automated decision-making or profiling is applied to my data.",
		kind: "acknowledgement",
		required: true
	},
	{
		id: "OPPORTUNITY_TO_ASK",
		number: "10",
		title: "Opportunity to ask",
		text: "I have had the opportunity to ask questions and they have been answered to my satisfaction.",
		kind: "acknowledgement",
		required: true
	}
];
DECLARATION_ITEMS.filter((item) => item.kind === "consent");
/** The statements that must be ticked before a grant can be recorded. */
var REQUIRED_DECLARATION_ITEM_IDS = DECLARATION_ITEMS.filter((item) => item.required).map((item) => item.id);
function purposeWording(id) {
	const purpose = CONSENT_PURPOSES.find((purpose) => purpose.id === id);
	if (!purpose) return "Unknown purpose";
	return purpose.wording;
}
function isConsentPurposeId(value) {
	return CONSENT_PURPOSES.some((purpose) => purpose.id === value);
}
function isDeclarationItemId(value) {
	return DECLARATION_ITEMS.some((item) => item.id === value);
}
/**
* The purposes granted by a set of ticked declaration items.
* Acknowledgement statements grant nothing and are not included.
*/
function purposesFromDeclarationItems(itemIds) {
	const purposes = /* @__PURE__ */ new Set();
	for (const item of DECLARATION_ITEMS) {
		if (item.kind !== "consent" || !item.purpose) continue;
		if (itemIds.includes(item.id)) purposes.add(item.purpose);
	}
	return [...purposes];
}
//#endregion
export { isDeclarationItemId as a, isConsentPurposeId as i, DECLARATION_ITEMS as n, purposeWording as o, REQUIRED_DECLARATION_ITEM_IDS as r, purposesFromDeclarationItems as s, CONSENT_PURPOSES as t };
