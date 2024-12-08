(() => {
	/**
	 * Check and set a global guard variable.
	 * If this content script is injected into the same page again,
	 * it will do nothing next time.
	 */
	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function toggleHeader() {
		const header = document.querySelector(".header_header__zJOD0.header_sticky__2ak2z");
		if (!header) return;

		header.style.display = header.style.display === "none" ? "block" : "none";
	}
	function toggleSidebar() {
		const sidebar = document.querySelector("main div.relative div.sticky");
		if (!sidebar) return;

		sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
	}
	function toggleFooter() {
		const footer = document.querySelector(".jsx-1021054789.footer_root__6F7g2");
		if (!footer) return;

		footer.style.display = footer.style.display === "none" ? "block" : "none";
	}

	/**
	 * Listen for messages from the background script.
	 * Call "insertBeast()" or "removeExistingBeasts()".
	 */
	browser.runtime.onMessage.addListener((request) => {
		switch (request.command) {
			case "toggleHeader":
				toggleHeader();
				break;
			case "toggleSidebar":
				toggleSidebar();
				break;
			case "toggleFooter":
				toggleFooter();
				break;
		}
	});
})();
