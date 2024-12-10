document.addEventListener("DOMContentLoaded", () => {
	const icons = document.querySelectorAll(".icons");
	const homePage = document.querySelector("#popup-content");
	const secondaryPage = document.querySelector("#secondary-page");
	const backButton = document.querySelector(".back-btn");

	icons.forEach((icon) => {
		icon.addEventListener("click", () => {
			homePage.style.display = "none"; // Hide the home page
			secondaryPage.style.display = "block"; // Show the secondary page
			const secondaryTitle = icon.alt.replace("icon", "").toUpperCase();
			document.querySelector(".title").textContent = secondaryTitle; // Set the sticky bar title
		});
	});

	backButton.addEventListener("click", () => {
		secondaryPage.style.display = "none"; // Hide the secondary page
		homePage.style.display = "grid"; // Show the home page
	});
});
