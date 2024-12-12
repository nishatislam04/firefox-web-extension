import { elements } from "./elements.js";
import { getLocalItem, reset, toggleItemState, transmitCommand } from "./helper.js";

function generateElements(data) {
	const container = document.querySelector(".options-container");

	const page = data.website;
	const html = data.items
		.map(
			(item) => `<label class="input-item" id=${page} data-option=${item
				.split(" ")
				.join("")} data-page='${page}'>
        <input type="checkbox" class="input"  />
        ${item}
      </label>`
		)
		.join("");
	document.querySelectorAll(".input-item").forEach((input) => input.remove());
	container.insertAdjacentHTML("beforebegin", html);
}
const webpages = ["nextjs", "laravel", "mdn", "tailwindcss"];

// for generating input options
document.addEventListener("click", (e) => {
	const selectedOption = webpages.find((page) => page === e.target.id);
	if (!selectedOption) return;
	const data = elements.find((element) => element.website === selectedOption);
	generateElements(data);
});

document.addEventListener("click", async function (e) {
	if (e.target.id === "reset") await reset();
	if (!e.target.dataset.page) return;

	if (e.target.id === "apply-all") {
		const page = e.target.dataset.page;
		return transmitCommand({ command: page, state: true });
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
