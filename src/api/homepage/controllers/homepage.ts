/**
 * homepage controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
	"api::homepage.homepage",
	({ strapi }) => ({
		async find(ctx) {
			// Set default populate to include all components
			ctx.query = {
				...ctx.query,
				populate: {
					heroSection: {
						populate: {
							poweredByLogo: {
								fields: ["id", "alternativeText", "url"],
							},
							ctaButton: true,
							featurePanels: {
								populate: {
									image: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					},
					serviceFeaturesSection: {
						populate: {
							serviceTabs: {
								populate: {
									tabs: {
										populate: {
											content: {
												populate: {
													centerImage: {
														fields: ["id", "alternativeText", "url"],
													},
													leftContent: {
														populate: {
															ctaButton: true,
															benefits: true,
														},
													},
													rightContent: true,
												},
											},
										},
									},
								},
							},
						},
					},
					whyChooseSection: {
						populate: {
							mediaLogos: {
								populate: {
									logos: {
										populate: {
											logo: {
												fields: ["id", "alternativeText", "url"],
											},
										},
									},
								},
							},
							playButton: true,
							backgroundVideo: {
								fields: ["id", "alternativeText", "url"],
							},
							backgroundImage: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					},
					pricingSection: {
						populate: {
							promotionalBadge: true,
							pricingPlans: {
								populate: {
									ctaButton: true,
								},
							},
							broadbandFacts: true,
						},
					},
					digitalSecuritySection: {
						populate: {
							ctaButton: true,
							featureCards: true,
							backgroundImage: {
								fields: ["id", "alternativeText", "url"],
							},
						},
					},
					savingsSection: {
						populate: {
							priceComparison: true,
							lineSelector: true,
							savingsIndicator: true,
							ctaButton: true,
						},
					},
					testimonialsSection: {
						populate: {
							testimonials: {
								populate: {
									customerPhoto: {
										fields: ["id", "alternativeText", "url"],
									},
								},
							},
						},
					},
					globalConnectivitySection: {
						populate: {
							ctaButton: true,
							countryButtons: true,
						},
					},
					newsletterSection: {
						populate: {
							emailForm: true,
						},
					},
				},
			};

			return await super.find(ctx);
		},
	})
);
