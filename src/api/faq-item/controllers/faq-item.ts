/**
 * faq-item controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::faq-item.faq-item",
	({ strapi }) => ({
		async findByCategory(ctx) {
			const { categoryId } = ctx.params;
			console.log(categoryId);

			try {
				const faqItems = await strapi.entityService.findMany(
					"api::faq-item.faq-item",
					{
						filters: {
							faq_category: {
								id: categoryId,
							},
						},
						populate: {
							faq_category: true,
						},
						sort: { order: "asc" },
					}
				);

				return {
					data: faqItems,
					meta: {
						pagination: {
							page: 1,
							pageSize: 25,
							pageCount: Math.ceil(faqItems.length / 25),
							total: faqItems.length,
						},
					},
				};
			} catch (error) {
				ctx.throw(500, "Error fetching FAQ items by category", { error });
			}
		},
	})
);
