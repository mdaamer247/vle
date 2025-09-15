/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async findByCategory(ctx) {
			const { categoryId } = ctx.params;

			try {
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters: {
							category: {
								id: categoryId,
							},
						},
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page: 1,
							pageSize: 25,
							pageCount: Math.ceil(articles.length / 25),
							total: articles.length,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching articles by category", { error });
			}
		},

		async findFeatured(ctx) {
			try {
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters: {
							featuredInResourcePage: true,
						},
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page: 1,
							pageSize: 25,
							pageCount: Math.ceil(articles.length / 25),
							total: articles.length,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching featured articles", { error });
			}
		},

		async findRecent(ctx) {
			try {
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters: {
							recentInResourcePage: true,
						},
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page: 1,
							pageSize: 25,
							pageCount: Math.ceil(articles.length / 25),
							total: articles.length,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching recent articles", { error });
			}
		},

		async findById(ctx) {
			const { articleId } = ctx.params;

			try {
				const article = await strapi.entityService.findOne(
					"api::article.article",
					articleId,
					{
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url", "width", "height"],
							},
							author: {
								fields: ["id", "name", "email"],
								populate: {
									avatar: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
							category: {
								fields: ["id", "name", "slug"],
							},
							socialMedia: {
								fields: ["platform", "url"],
								populate: {
									icon: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					}
				);

				if (!article) {
					return ctx.notFound("Article not found");
				}

				return {
					data: article,
				};
			} catch (error) {
				ctx.throw(500, "Error fetching article by ID", { error });
			}
		},
	})
);
