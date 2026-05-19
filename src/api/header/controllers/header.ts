/**
 * header controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::header.header",
	({ strapi }) => ({
		async find(ctx) {
			// Set default populate to include all components
			ctx.query = {
				...ctx.query,
				populate: {
					utilityBar: {
						populate: {
							quickLinks: true,
							languageSelector: true,
						},
					},
					mainNavigation: {
						populate: {
							logo: {
								populate: {
									logoImage: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
							navigationItems: true,
							ctaButtons: true,
						},
					},
				},
			};

			return await super.find(ctx);
		},
	})
);
