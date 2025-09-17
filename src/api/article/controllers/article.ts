/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async find(ctx) {
			try {
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article");

				// Fetch articles with pagination
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						fields: ["id", "title"],
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
						},
						start,
						limit: pageSize,
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page,
							pageSize,
							pageCount: Math.ceil(total / pageSize),
							total,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching articles", { error });
			}
		},

		async findByCategory(ctx) {
			const { categoryId } = ctx.params;

			try {
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters: {
						category: {
							id: categoryId,
						},
					},
				});

				// Fetch articles with pagination
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
						start,
						limit: pageSize,
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page,
							pageSize,
							pageCount: Math.ceil(total / pageSize),
							total,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching articles by category", { error });
			}
		},

		async findFeatured(ctx) {
			try {
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters: {
						featuredInResourcePage: true,
					},
				});

				// Fetch articles with pagination
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
						start,
						limit: pageSize,
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page,
							pageSize,
							pageCount: Math.ceil(total / pageSize),
							total,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching featured articles", { error });
			}
		},

		async findRecent(ctx) {
			try {
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters: {
						recentInResourcePage: true,
					},
				});

				// Fetch articles with pagination
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
						start,
						limit: pageSize,
					}
				);

				return {
					data: articles,
					meta: {
						pagination: {
							page,
							pageSize,
							pageCount: Math.ceil(total / pageSize),
							total,
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
