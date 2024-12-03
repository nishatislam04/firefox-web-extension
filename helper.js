/**
 *
 * @param {*} item
 * @returns
 * @description
 */
export function onGot(item) {
	return item;
}

/**
 *
 * @param {*} error
 * @returns
 * @description
 */
export function onError(error) {
	console.log(`Error: ${error}`);
	return `Error: ${error}`;
}

/**
 *
 */
export function setItem() {
	browser.storage.local
		.get(["header-nextjs", "sidebar-nextjs", "footer-nextjs"])
		.then((data) => {});
}

/**
 *
 * @param {*} item
 * @returns
 * @description
 */
export function getLocalItem(item) {
	return browser.storage.local.get(item);
}

/**
 *
 * @param {*} item
 * @description
 */
export function setLocalItem(item) {
	browser.storage.local.set(item).then(setItem, onError);
}

/**
 *
 * @param {*} state
 * @returns
 * @description
 */
export function calculateState(state) {
	return state && state === true ? false : true;
}

/**
 *
 * @param {*} tab
 * @param {*} command
 * @description
 */
export function transmitCommand(tabs, command) {
	browser.tabs.sendMessage(tabs[0].id, {
		command,
	});
}

export function getAllStates() {
	const data = browser.storage.local.get([
		"header-nextjs",
		"sidebar-nextjs",
		"footer-nextjs",
	]);

	return data;
}
