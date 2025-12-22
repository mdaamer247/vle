/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
	"api::article.article",
	({ strapi }) => ({
		async find(ctx) {
			try {
				const searchTerm =
					((ctx.query as any)?.searchTerm as string | undefined)?.toString() ||
					"";

				const filters: any = {};

				if (searchTerm) {
					filters.$or = [
						{
							title: {
								$containsi: searchTerm,
							},
						},
						{
							content: {
								$containsi: searchTerm,
							},
						},
					];
				}

				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters,
				});

				// Fetch articles with pagination
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters,
						fields: ["id", "title", "description", "slug"],
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
							categories: {
								fields: ["id", "name", "slug"],
							},
							author: {
								fields: ["id", "name", "email"],
								populate: {
									avatar: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
						start,
						limit: pageSize,
						sort: { id: "desc" },
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
				const searchTerm =
				((ctx.query as any)?.searchTerm as string | undefined)?.toString() ||
				"";

				const filters: any = {
					categories: {
						id: categoryId,
					},
				};

				if (searchTerm) {
					filters.$or = [
						{
							title: {
								$containsi: searchTerm,
							},
						},
						{
							content: {
								$containsi: searchTerm,
							},
						},
					];
				}
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters,
				});

				// Fetch articles with pagination
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters,
						fields: ["id", "title", "description", "slug"],
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
							categories: {
								fields: ["id", "name", "slug"],
							},
							author: {
								fields: ["id", "name", "email"],
								populate: {
									avatar: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
						start,
						limit: pageSize,
						sort: { id: "desc" },
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

				const searchTerm =
				((ctx.query as any)?.searchTerm as string | undefined)?.toString() ||
				"";

				const filters: any = {
					featuredInResourcePage: true,
				};

				if (searchTerm) {
					filters.$or = [
						{
							title: {
								$containsi: searchTerm,
							},
						},
						{
							content: {
								$containsi: searchTerm,
							},
						},
					];
				}
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters,
				});

				// Fetch articles with pagination
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters,
						fields: ["id", "title", "description", "slug"],
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
							categories: {
								fields: ["id", "name", "slug"],
							},
							author: {
								fields: ["id", "name", "email"],
								populate: {
									avatar: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
						start,
						limit: pageSize,
						sort: { id: "desc" },
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
				const searchTerm =
				((ctx.query as any)?.searchTerm as string | undefined)?.toString() ||
				"";

				console.log({searchTerm});

				const filters: any = { 
					recentInResourcePage: true,
				};

				if (searchTerm) {
					filters.$or = [
						{
							title: {
								$containsi: searchTerm,
							},
						},
						{
							content: {
								$containsi: searchTerm,
							},
						},
					];
				}
				// Extract pagination parameters
				const page = parseInt((ctx.query.pagination as any)?.page) || 1;
				const pageSize =
					parseInt((ctx.query.pagination as any)?.pageSize) || 25;
				const start = (page - 1) * pageSize;

				// Get total count for pagination metadata
				const total = await strapi.entityService.count("api::article.article", {
					filters,
				});

				// Fetch articles with pagination
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters,
						fields: ["id", "title", "description", "slug"],
						populate: {
							cover: {
								fields: ["id", "alternativeText", "url"],
							},
							categories: {
								fields: ["id", "name", "slug"],
							},
							author: {
								fields: ["id", "name", "email"],
								populate: {
									avatar: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
						start,
						limit: pageSize,
						sort: { id: "desc" },
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
							categories: {
								fields: ["id", "name", "slug"],
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

		async findBySlug(ctx) {
			const { slug } = ctx.params;

			try {
				const articles = await strapi.entityService.findMany(
					"api::article.article",
					{
						filters: {
							slug: slug,
						},
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
							categories: {
								fields: ["id", "name", "slug"],
							},
						},
					}
				);

				if (!articles || articles.length === 0) {
					return ctx.notFound("Article not found");
				}

				return {
					data: articles[0],
				};
			} catch (error) {
				ctx.throw(500, "Error fetching article by slug", { error });
			}
		},
	})
);
