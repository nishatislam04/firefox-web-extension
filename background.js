import { elements } from "./elements.js";
import { getLocalItem, reset, toggleItemState, transmitCommand } from "./helper.js";

function generateElements(data) {
	const container = document.querySelector(".options-container");

	const page = data.webpage;
	const html = data.items
		.map(
			(item, index) => `<label class="input-item" for=${item}-${index} data-option=${item
				.split(" ")
				.join("")} data-page='${page}'>
        <input id=${item}-${index} type="checkbox" class="input"  />
        ${item}
      </label>`
		)
		.join("");
	document.querySelectorAll(".input-item").forEach((input) => input.remove());
	container.insertAdjacentHTML("beforebegin", html);
}

// for generating input options
document.addEventListener("click", (e) => {
	const selectedOption = elements.find((page) => e.target.id === page.webpage);
	if (!selectedOption) return;

	generateElements(selectedOption);
});

document.addEventListener("click", async function (e) {
	if (e.target.id === "reset") await reset();
	if (!e.target.dataset.page) return;

	if (e.target.id === "apply-all") {
		const page = e.target.dataset.page;
		transmitCommand({ command: page, state: true });
		window.close();
	}

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

(async function () {
	await reset();
})();
