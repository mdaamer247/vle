/**
 * digital-security controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::digital-security.digital-security",
	({ strapi }) => ({
		async find(ctx) {
			// Set default populate to include all components
			ctx.query = {
				...ctx.query,
				populate: {
					seo: {
						populate: {
							shareImage: true,
						},
					},
					heroSection: {
						populate: {
							backgroundImage: {
								fields: ["id", "documentId", "alternativeText", "url"],
							},
						},
					},
					pricingSection: {
						populate: {
							billingToggle: true,
							plans: {
								populate: {
									features: true,
									ctaButton: true,
								},
							},
						},
					},
					compatibilitySection: {
						populate: {
							platforms: {
								populate: {
									icon: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					},
					whyMattersSection: {
						populate: {
							statistics: true,
							backgroundImage: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					},
					whiteGloveSection: {
						populate: {
							services: {
								populate: {
									image: {
										fields: ["id", "alternativeText", "url"],
									},
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
