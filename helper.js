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
export async function reset() {
	await browser.storage.local.clear();
}

/**
 *
 * @param {*} tab
 * @param {*} command
 * @description
 */
export function transmitCommand(tabs, command) {
	browser.tabs.sendMessage(tabs[0].id, command);
}
