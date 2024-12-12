import { elements } from "./elements.js";

function toggleVisibility(selector, state = true) {
	applyStyles(selector, state);
}

function applyStyles(selectorElement, state) {
	const page = selectorElement.split("-")[0];
	const option = selectorElement.split("-")[1];
	const items = elements.find((element) => element.website === page).selectors;

	if (option) {
		const item = items.find((selector) => selector.element === option);
		const elementItem = item.select;
		const element = document.querySelector(elementItem);
		element.style.setProperty("display", state ? "none" : "block", "important");
	} else {
		items.forEach((item) =>
			document
				.querySelector(item.select)
				.style.setProperty("display", "none", "important")
		);
	}
}

browser.runtime.onMessage.addListener((request) => {
	toggleVisibility(request.command, request.state);
});
