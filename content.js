import { elements } from "./elements.js";

function applyStyles(selectorElement, state = true) {
	const splitCommand = selectorElement.split("-");
	const page = splitCommand[0];
	const option = splitCommand[1].toLowerCase();

	const items = elements.find((element) => element.webpage === page).selectors;

	if (splitCommand.length > 2) {
		console.log(items);
		items.forEach((item) =>
			document
				.querySelector(item.select)
				.style.setProperty("display", "none", "important")
		);
	}

	const item = items.find((selector) => selector.element.toLowerCase() === option);

	const elementItem = item.select;
	const element = document.querySelector(elementItem);

	element.style.setProperty("display", state ? "none" : "block", "important");
}

browser.runtime.onMessage.addListener((request) => {
	console.log(request);
	applyStyles(request.command, request.state);
});
