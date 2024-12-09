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

	items.forEach((item) => document.querySelector(`#${item}`).classList.remove("active"));
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
