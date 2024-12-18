/**
 *
 * @returns
 */
export async function getAllStates() {
	return await browser.storage.local.get(null);
}

/**
 *
 * @param {*} item
 * @returns
 * @description
 */
export async function getLocalItem(item) {
	const data = await browser.storage.local.get(item);
	return data;
}

/**
 *
 * @param {*} item
 * @description
 */
export async function setLocalItem(item) {
	const data = await browser.storage.local.set(item);
	return data;
}

/**
 *
 * @param {*} item
 */
export async function removeLocalItem(item) {
	await browser.storage.local.remove(item);
}

/**
 *
 */
export async function reset(items) {
	await browser.storage.local.clear();
}

/**
 *
 * @param {*} tab
 * @param {*} command
 * @description
 */
export function transmitCommand(command) {
	browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
		const id = tabs[0].id;

		browser.tabs.sendMessage(id, command);
	});
}

/**
 *
 * @param {*} element
 * @param {*} e
 */
export function toggleActiveClass(element, e) {
	if (element) {
		e.target.classList.add("active");
	} else {
		e.target.classList.remove("active");
	}
}

export async function toggleItemState(key) {
	const item = await getLocalItem(key);

	if (Object.entries(item).length === 0) {
		await setLocalItem({ [key]: true });
	} else {
		await setLocalItem({
			[key]: item[key] === true ? false : true,
		});
	}
}

export function resetState() {
	document.querySelectorAll(".input").forEach((input) => {
		input.checked = false;
		input.setAttribute("data-page", "");
	});
	document.querySelector("#apply-all").setAttribute("data-page", "");
}

export function generateElements(data) {
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

	document.querySelector("#apply-all").dataset.page = data.webpage + "-apply-all";
}
