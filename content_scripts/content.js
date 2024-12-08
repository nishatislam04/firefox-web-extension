const items = ["header", "sidebar", "footer"];
const selector = {
	header: ".header_header__zJOD0.header_sticky__2ak2z",
	sidebar: "main div.relative div.sticky",
	footer: ".jsx-1021054789.footer_root__6F7g2",
};

function toggleVisibility(selector, state) {
	const element = document.querySelector(selector);

	if (element) element.style.display = !state ? "block" : "none";
}

browser.runtime.onMessage.addListener((request) => {
	switch (request.command) {
		case "header":
			toggleVisibility(selector.header, request.state);
			break;
		case "sidebar":
			toggleVisibility(selector.sidebar, request.state);
			break;
		case "footer":
			toggleVisibility(selector.footer, request.state);
			break;
	}
});

items.forEach(async (item) => {
	const state = await getLocalItem(item);

	if (state[item]) toggleVisibility(selector[item], true);
});
