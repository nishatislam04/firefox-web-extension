import {
	getLocalItem,
	reset,
	setLocalItem,
	toggleActiveClass,
	transmitCommand,
} from "./helper.js";

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
	if (e.target.id === "header") {
		const name = "header";
		await toggleItemState(name);
		const item = await getLocalItem(name);

		toggleActiveClass(item[name], e);
		transmitCommand({ command: "header", state: item[name] });
	}

	if (e.target.id === "sidebar") {
		const name = "sidebar";
		await toggleItemState(name);
		const item = await getLocalItem(name);

		toggleActiveClass(item[name], e);
		transmitCommand({ command: "sidebar", state: item[name] });
	}

	if (e.target.id === "footer") {
		const name = "footer";
		await toggleItemState(name);
		const item = await getLocalItem(name);

		toggleActiveClass(item[name], e);
		transmitCommand({ command: "footer", state: item[name] });
	}

	if (e.target.id === "reset") {
		await reset(items);
	}
});

items.forEach(async (item) => {
	const state = await getLocalItem(item);
	if (state[item]) document.querySelector(`#${item}`).classList.add("active");
});
