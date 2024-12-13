let itemName = "";
const homePage = document.querySelector("#popup-content");
const secondaryPage = document.querySelector("#secondary-page");

setAttributes(itemName);

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("icons")) {
		const icon = e.target;
		homePage.style.display = "none";
		secondaryPage.style.display = "block";
		itemName = icon.alt.replace("icon", "").trim() + "-apply-all";
		// document.querySelector(".title").textContent = itemName.toUpperCase();
	}

	if (e.target.id === "back") {
		secondaryPage.style.display = "none";
		homePage.style.display = "grid";
		document.querySelectorAll(".input").forEach((input) => {
			input.checked = false;
			input.setAttribute("data-page", "");
		});
		document.querySelector("#apply-all").setAttribute("data-page", "");
	}

	if (e.target.id === "apply-all") {
		e.target.setAttribute("data-page", itemName);
	}
});

function setAttributes(item) {
	document
		.querySelectorAll(".input")
		.forEach((input) => input.setAttribute("data-page", item));
}
