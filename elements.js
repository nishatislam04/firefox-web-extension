export const elements = [
	{
		website: "nextjs",
		items: ["header", "left sidebar", "right sidebar", "footer", "feedback bottom"],
		icon: "./icons/nextjs.svg",
		selectors: [
			{ element: "header", select: ".header_header__zJOD0.header_sticky__2ak2z" },
			{ element: "leftsidebar", select: "main div.relative div.sticky" },
			{ element: "rightsidebar", select: "main div.relative nav.order-last" },
			{ element: "footer", select: ".jsx-1021054789.footer_root__6F7g2" },
			{
				element: "feedbackbottom",
				select: ".feedback_inlineWrapper__DQQFm.feedback_inlineWrapperClosed__v8oY3",
			},
		],
	},

	{
		website: "laravel",
		items: ["header", "left sidebar", "footer"],
		icon: "./icons/laravel.svg",
		selector: [{ element: "", select: "" }],
	},
	{
		website: "mdn",
		items: ["header", "left sidebar", "right sidebar", "bottom feedback", "footer"],
		icon: "./icons/mdn.svg",
		selector: [{ element: "", select: "" }],
	},
	{
		website: "tailwindcss",
		items: ["header", "left sidebar", "right sidebar", "footer"],
		icon: "./icons/laravel.svg",
		selector: [{ element: "", select: "" }],
	},
];
