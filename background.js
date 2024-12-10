import { getLocalItem, reset, setLocalItem, transmitCommand } from "./helper.js";
const items = ["header", "sidebar", "footer"];

async function toggleItemState(key) {
	const item = await getLocalItem(key);

	if (Object.entries(item).length === 0) {
		await setLocalItem({ [key]: true });
	} else {
		await setLocalItem({
			[key]: item[key] === true ? false : true,
		});
	}
}

document.addEventListener("click", async function (e) {
	if (e.target.id === "reset") await reset();
	if (!e.target.dataset.page) return;

	const state = {
		page: e.target.dataset.page,
		option: e.target.id,
	};
	const item = `${state.page}-${state.option}`;
	await toggleItemState(item);
	const toggleState = await getLocalItem(item);
	transmitCommand({ command: item, state: toggleState[`${item}`] });

	return;
});
