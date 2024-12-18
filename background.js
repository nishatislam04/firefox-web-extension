import { elements } from "./elements.js";
import {
	generateElements,
	getLocalItem,
	reset,
	resetState,
	toggleItemState,
	transmitCommand,
} from "./helper.js";

const homePage = document.querySelector("#popup-content");
const secondaryPage = document.querySelector("#secondary-page");

// for generating input options
document.addEventListener("click", (e) => {
	const selectedOption = elements.find((page) => e.target.id === page.webpage);
	if (!selectedOption) return;

	generateElements(selectedOption);
});

document.addEventListener("click", async function (e) {
	if (e.target.id === "reset") await reset();

	if (e.target.id === "apply-all") {
		const page = e.target.dataset.page;
		console.log(page);
		transmitCommand({ command: page, state: true });
		window.close();
	}

	if (e.target.classList.contains("icons")) {
		homePage.style.display = "none";
		secondaryPage.style.display = "block";
	}

	if (e.target.id === "back") {
		secondaryPage.style.display = "none";
		homePage.style.display = "grid";
		resetState();
	}

	if (!e.target.dataset.page) return;

	const state = {
		page: e.target.dataset.page,
		option: e.target.dataset.option,
	};
	const item = `${state.page}-${state.option}`;

	await toggleItemState(item);
	const toggleState = await getLocalItem(item);
	const itemState = toggleState[`${item}`];
	transmitCommand({ command: item, state: itemState });

	return;
});

(async () => await reset())();
