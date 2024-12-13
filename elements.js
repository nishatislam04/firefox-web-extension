export const elements = [
	{
		webpage: "nextjs",
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
		webpage: "laravel",
		items: ["header", "left sidebar", "footer"],
		icon: "./icons/laravel.svg",
		selectors: [
			{
				element: "header",
				select:
					"body div.items-center.justify-center.bg-gradient-to-b.from-red-500.to-red-600.p-2.text-center.text-white.text-sm.h-9",
			},
			{ element: "leftsidebar", select: "div#docsScreen div aside" },
			{ element: "footer", select: "footer" },
		],
	},
	{
		webpage: "mdn",
		items: ["header", "sidebar", "bottom feedback", "footer"],
		icon: "./icons/mdn.svg",
		selectors: [
			{ element: "header", select: "div#root div div.sticky-header-container" },
			{
				element: "sidebar",
				select: "div.main-wrapper div.sidebar-container",
			},

			{
				element: "bottomfeedback",
				select: "main aside.article-footer",
			},
			{
				element: "footer",
				select: "footer#nav-footer",
			},
		],
	},
	{
		webpage: "tailwindcss",
		items: ["header", "left sidebar", "right sidebar", "footer"],
		icon: "./icons/laravel.svg",
		selectors: [
			{
				element: "header",
				select: "div#__next div.sticky.top-0.z-40.w-full",
			},
			{
				element: "leftsidebar",
				select: "div#__next div div.max-w-8xl.mx-auto.px-4 div.hidden",
			},
			{ element: "rightsidebar", select: "div#__next div div div div div.fixed.z-20" },
			{ element: "footer", select: "footer" },
		],
	},
];
