import { selector } from "./selector.js";

function toggleVisibility(selector, state = true) {
	const element = document.querySelector(selector);
	// if (!element) console.log(selector);

	applyStyles(selector, state);
}

browser.runtime.onMessage.addListener((request) => {
	toggleVisibility(request.command, request.state);
});

function applyStyles(selectorElement, state) {
	const page = selectorElement.split("-")[0];
	const option = selectorElement.split("-")[1];
	const item = selector.find((item) => item.name === page).elements;
	if (option) {
		const elementItem = item[option];
		const element = document.querySelector(elementItem);
		element.style.setProperty("display", state ? "none" : "block", "important");
	} else {
		for (const key in item) {
			console.log(item[key], document.querySelector(item[key]));
			document.querySelector(item[key]).style.setProperty("display", "none", "important");
		}
	}
}
