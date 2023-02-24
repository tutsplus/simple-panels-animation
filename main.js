const body = document.body;
const panels = document.querySelectorAll(".panel");
const lastPanel = document.querySelector(".panels .panel:last-child");

window.addEventListener("load", () => {
	body.classList.add("loaded");
	lastPanel.addEventListener("transitionend", () => {
		body.classList.add("second-round");
		document
			.querySelector(".second-round .panel:last-child")
			.addEventListener("transitionend", () => {
				body.classList.add("third-round");
			});
	});
});
