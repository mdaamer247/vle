/**
 * support-center controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::support-center.support-center",
	({ strapi }) => ({
		async find(ctx) {
			// Set default populate to include all components
			ctx.query = {
				...ctx.query,
				populate: {
					heroSection: {
						populate: {
							heroImage: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					},
					quickLinksSection: {
						populate: {
							quickLinks: {
								populate: {
									image: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					},
					contactOptionsSection: {
						populate: {
							contactMethods: {
								populate: {
									icon: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					},
					selfHelpResourcesSection: {
						populate: {
							resourceCards: {
								populate: {
									image: {
										fields: ["id", "alternativeText", "url"],
									},
									readMoreButton: true,
								},
							},
						},
					},
				},
			};

			return await super.find(ctx);
		},
	})
);
