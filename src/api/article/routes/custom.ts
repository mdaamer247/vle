/**
 * Custom article routes
 */

export default {
	routes: [
		{
			method: "GET",
			path: "/articles/category/:categoryId",
			handler: "article.findByCategory",
			config: {
				policies: [],
				middlewares: [],
			},
		},
		{
			method: "GET",
			path: "/articles/by/featured",
			handler: "article.findFeatured",
			config: {
				policies: [],
				middlewares: [],
			},
		},
		{
			method: "GET",
			path: "/articles/by/recent",
			handler: "article.findRecent",
			config: {
				policies: [],
				middlewares: [],
			},
		},
	],
};
