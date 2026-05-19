/**
 * faq controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::faq.faq", ({ strapi }) => ({
	async find(ctx) {
		// Set default populate to include all components and images in contactSection
		ctx.query = {
			...ctx.query,
			populate: {
				heroSection: true,
				contactSection: {
					populate: {
						ctaButton: true,
						images: {
							fields: ["url"],
						},
					},
				},
			},
		};

		return await super.find(ctx);
	},
}));
