/**
 * resource-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::resource-page.resource-page",
	({ strapi }) => ({
		async find(ctx) {
			// Set default populate to include all components
			ctx.query = {
				...ctx.query,
				populate: {
					heroSection: {
						populate: {
							backgroundImage: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					},
					featuredArticlesSection: true,
					recentArticlesSection: true,
					categoryFilter: {
						populate: {
							categories: {
								populate: {
									category: {
										fields: ["id", "name"],
									},
								},
							},
						},
					},
					seo: true,
				},
			};

			const resourcePage = await super.find(ctx);

			// Fetch featured articles
			const featuredArticles = await strapi.entityService.findMany(
				"api::article.article",
				{
					filters: {
						featuredInResourcePage: true,
					},
					populate: {
						cover: {
							fields: ["id", "alternativeText", "url"],
						},
						author: {
							fields: ["id", "name"],
						},
						category: {
							fields: ["id", "name"],
						},
					},
				}
			);

			// Fetch recent articles
			const recentArticles = await strapi.entityService.findMany(
				"api::article.article",
				{
					filters: {
						recentInResourcePage: true,
					},
					populate: {
						cover: {
							fields: ["id", "alternativeText", "url"],
						},
						author: {
							fields: ["id", "name"],
						},
						category: {
							fields: ["id", "name"],
						},
					},
				}
			);

			// Add the articles to the response
			if (resourcePage.data) {
				resourcePage.data.featuredArticles = featuredArticles;
				resourcePage.data.recentArticles = recentArticles;
			}

			return resourcePage;
		},
	})
);
