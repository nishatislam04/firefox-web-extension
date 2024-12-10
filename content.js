import { selector } from "./selector.js";

function toggleVisibility(selector, state) {
	const element = document.querySelector(selector);
	element.style.setProperty("display", state ? "none" : "block", "important");
}

browser.runtime.onMessage.addListener((request) => {
	toggleVisibility(selector[request.command], request.state);
});
