/**
 * Custom FAQ item routes
 */

export default {
	routes: [
		{
			method: "GET",
			path: "/faq-items/category/:categoryId",
			handler: "faq-item.findByCategory",
			config: {
				policies: [],
				middlewares: [],
			},
		},
	],
};
