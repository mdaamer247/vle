import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAlertDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_alert_details';
  info: {
    description: 'Individual alert detail item';
    displayName: 'Alert Detail';
    icon: 'alert';
    name: 'Alert Detail';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    message: Schema.Attribute.String & Schema.Attribute.Required;
    severity: Schema.Attribute.Enumeration<
      ['critical', 'warning', 'info', 'success']
    > &
      Schema.Attribute.DefaultTo<'critical'>;
    userInitials: Schema.Attribute.String;
  };
}

export interface SharedArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_article_cards';
  info: {
    description: 'Card component for displaying individual articles';
    displayName: 'Article Card';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    readMoreButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_items';
  info: {
    description: 'Individual benefit item with title and description';
    displayName: 'Benefit Item';
    icon: 'checkCircle';
    name: 'Benefit Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    descriptionText: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Enumeration<
      ['checkmark', 'shield', 'clock', 'dollar', 'star']
    > &
      Schema.Attribute.DefaultTo<'checkmark'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits_sections';
  info: {
    description: 'Section displaying key benefits and features';
    displayName: 'Benefits Section';
    icon: 'check';
    name: 'Benefits Section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.benefit-item', true>;
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    desc: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBillingToggle extends Struct.ComponentSchema {
  collectionName: 'components_shared_billing_toggles';
  info: {
    description: 'Toggle between monthly and yearly billing';
    displayName: 'Billing Toggle';
    icon: 'toggle';
    name: 'Billing Toggle';
  };
  attributes: {
    defaultSelection: Schema.Attribute.Enumeration<['monthly', 'yearly']> &
      Schema.Attribute.DefaultTo<'monthly'>;
    monthlyLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Monthly'>;
    yearlyLabel: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Yearly'>;
  };
}

export interface SharedBroadbandFacts extends Struct.ComponentSchema {
  collectionName: 'components_shared_broadband_facts';
  info: {
    description: 'Broadband facts bar with link';
    displayName: 'Broadband Facts';
    icon: 'information';
    name: 'Broadband Facts';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['black', 'dark-grey', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'black'>;
    linkText: Schema.Attribute.String & Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String;
    textColor: Schema.Attribute.Enumeration<
      ['white', 'light-grey', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'Button component for CTAs';
    displayName: 'Button';
    icon: 'cursor';
    name: 'Button';
  };
  attributes: {
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']> &
      Schema.Attribute.DefaultTo<'primary'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedCategoryFilter extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_filters';
  info: {
    description: 'Filter buttons for article categories';
    displayName: 'Category Filter';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    categories: Schema.Attribute.Component<
      'shared.category-filter-item',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedCategoryFilterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_filter_items';
  info: {
    description: 'Individual category filter button';
    displayName: 'Category Filter Item';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedCompatibilitySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_compatibility_sections';
  info: {
    description: 'Multi-device compatibility section';
    displayName: 'Compatibility Section';
    icon: 'mobile';
    name: 'Compatibility Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    platforms: Schema.Attribute.Component<'shared.platform-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactMethod extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_methods';
  info: {
    description: 'Individual contact method item';
    displayName: 'Contact Method';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['email', 'phone', 'chat', 'ticket']> &
      Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactMethodCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_method_cards';
  info: {
    description: 'Individual contact method card with icon, title, description, and contact detail';
    displayName: 'Contact Method Card';
  };
  attributes: {
    contactDetail: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    methodType: Schema.Attribute.Enumeration<
      ['live-chat', 'phone', 'email', 'ticket', 'office']
    >;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactOptionsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_options_sections';
  info: {
    description: 'Section with title, description, and grid of contact method cards';
    displayName: 'Contact Options Section';
  };
  attributes: {
    contactMethods: Schema.Attribute.Component<
      'shared.contact-method-card',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact Options'>;
  };
}

export interface SharedContactSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_sections';
  info: {
    description: 'Contact section for FAQ page';
    displayName: 'Contact Section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCopyrightInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_copyright_infos';
  info: {
    description: 'Copyright information and legal text';
    displayName: 'Copyright Info';
    icon: 'copyright';
    name: 'Copyright Info';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    year: Schema.Attribute.Integer;
  };
}

export interface SharedCountryButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_country_buttons';
  info: {
    description: 'Individual country/region button with flag and name';
    displayName: 'Country Button';
    icon: 'flag';
    name: 'Country Button';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['off-white', 'light-grey', 'white', 'beige']
    > &
      Schema.Attribute.DefaultTo<'off-white'>;
    countryCode: Schema.Attribute.String;
    countryName: Schema.Attribute.String & Schema.Attribute.Required;
    isAvailable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    textColor: Schema.Attribute.Enumeration<
      ['black', 'dark-grey', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'black'>;
  };
}

export interface SharedDigitalSecuritySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_digital_security_sections';
  info: {
    description: 'Digital Security Highlight section with main content and feature cards';
    displayName: 'Digital Security Section';
    icon: 'shield';
    name: 'Digital Security Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['dark', 'black', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'dark'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    featureCards: Schema.Attribute.Component<
      'shared.security-feature-card',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedEmailSubscriptionForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_email_subscription_forms';
  info: {
    description: 'Email subscription form with input field and subscribe button';
    displayName: 'Email Subscription Form';
    icon: 'envelope';
    name: 'Email Subscription Form';
  };
  attributes: {
    actionUrl: Schema.Attribute.String;
    buttonBackgroundColor: Schema.Attribute.Enumeration<
      ['black', 'dark-grey', 'blue', 'orange']
    > &
      Schema.Attribute.DefaultTo<'black'>;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    buttonTextColor: Schema.Attribute.Enumeration<
      ['white', 'black', 'blue', 'orange']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    formStyle: Schema.Attribute.Enumeration<
      ['integrated', 'separate', 'stacked']
    > &
      Schema.Attribute.DefaultTo<'integrated'>;
    inputBackgroundColor: Schema.Attribute.Enumeration<
      ['white', 'light-grey', 'off-white']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_heroes';
  info: {
    displayName: 'FAQ Hero';
  };
  attributes: {
    mainTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'Feature item component for highlighting key features';
    displayName: 'Feature Item';
    icon: 'check';
    name: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeaturePanel extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_panels';
  info: {
    description: 'Feature panel component for showcasing service features';
    displayName: 'Feature Panel';
    icon: 'layout';
    name: 'Feature Panel';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    showProgressBar: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeaturedArticlesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_articles_sections';
  info: {
    description: 'Section displaying featured articles in a grid layout';
    displayName: 'Featured Articles Section';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Featured Articles'>;
  };
}

export interface SharedFooterBottomSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_bottom_sections';
  info: {
    description: 'Bottom section with social media and copyright';
    displayName: 'Footer Bottom Section';
    icon: 'layout';
    name: 'Footer Bottom Section';
  };
  attributes: {
    copyrightInfo: Schema.Attribute.Component<'shared.copyright-info', false>;
    socialMediaLinks: Schema.Attribute.Component<
      'shared.social-media-link',
      true
    >;
  };
}

export interface SharedFooterLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_columns';
  info: {
    description: 'Column of footer links with title and links';
    displayName: 'Footer Link Column';
    icon: 'list';
    name: 'Footer Link Column';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.navigation-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterMiddleSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_middle_sections';
  info: {
    description: 'Middle section with logo and secondary links';
    displayName: 'Footer Middle Section';
    icon: 'layout';
    name: 'Footer Middle Section';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.logo', false>;
    secondaryLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
  };
}

export interface SharedGlobalConnectivitySection
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_global_connectivity_sections';
  info: {
    description: 'Global connectivity section with country coverage and plans';
    displayName: 'Global Connectivity Section';
    icon: 'globe';
    name: 'Global Connectivity Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'light-grey', 'off-white']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    countryButtons: Schema.Attribute.Component<'shared.country-button', true> &
      Schema.Attribute.Required;
    ctaButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    gridColumns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 2;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    description: 'Hero section component for landing pages';
    displayName: 'Hero Section';
    icon: 'star';
    name: 'Hero Section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    featureImages: Schema.Attribute.Media<'images' | 'files', true>;
    featurePanels: Schema.Attribute.Component<'shared.feature-panel', true>;
    highlightedTitle: Schema.Attribute.String;
    mainTitle: Schema.Attribute.String & Schema.Attribute.Required;
    poweredBy: Schema.Attribute.String;
    poweredByLogo: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
  };
}

export interface SharedInsuranceInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_insurance_infos';
  info: {
    description: 'Insurance coverage information';
    displayName: 'Insurance Info';
    icon: 'shield-check';
    name: 'Insurance Info';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLanguageSelector extends Struct.ComponentSchema {
  collectionName: 'components_shared_language_selectors';
  info: {
    description: 'Language selector with flag and dropdown';
    displayName: 'Language Selector';
    icon: 'globe';
    name: 'Language Selector';
  };
  attributes: {
    currentLanguage: Schema.Attribute.String & Schema.Attribute.Required;
    flagIcon: Schema.Attribute.String;
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedLineSelector extends Struct.ComponentSchema {
  collectionName: 'components_shared_line_selectors';
  info: {
    description: 'Interactive slider for selecting number of lines';
    displayName: 'Line Selector';
    icon: 'slider';
    name: 'Line Selector';
  };
  attributes: {
    activeColor: Schema.Attribute.Enumeration<['orange', 'blue', 'green']> &
      Schema.Attribute.DefaultTo<'orange'>;
    defaultLines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<2>;
    handleColor: Schema.Attribute.Enumeration<['orange', 'blue', 'green']> &
      Schema.Attribute.DefaultTo<'orange'>;
    maxLines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    minLines: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    trackColor: Schema.Attribute.Enumeration<
      ['grey', 'light-grey', 'dark-grey']
    > &
      Schema.Attribute.DefaultTo<'grey'>;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    description: 'Logo component with text and optional image';
    displayName: 'Logo';
    icon: 'picture';
    name: 'Logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images'>;
    primaryText: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryText: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMainNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_navigations';
  info: {
    description: 'Main navigation bar with logo and menu items';
    displayName: 'Main Navigation';
    icon: 'menu';
    name: 'Main Navigation';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'shared.button', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    navigationItems: Schema.Attribute.Component<'shared.navigation-link', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMediaLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_logos_items';
  info: {
    description: 'Individual media outlet logo';
    displayName: 'Media Logo';
    icon: 'picture';
    name: 'Media Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedMediaLogos extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_logos';
  info: {
    description: 'Media outlet logos section';
    displayName: 'Media Logos';
    icon: 'picture';
    name: 'Media Logos';
  };
  attributes: {
    logos: Schema.Attribute.Component<'shared.media-logo', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    description: 'Individual navigation link with optional dropdown';
    displayName: 'Navigation Link';
    icon: 'link';
    name: 'Navigation Link';
  };
  attributes: {
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_sections';
  info: {
    description: 'Newsletter subscription section with headline, description, and email form';
    displayName: 'Newsletter Section';
    icon: 'envelope';
    name: 'Newsletter Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['brown', 'terracotta', 'burnt-sienna', 'dark-brown']
    > &
      Schema.Attribute.DefaultTo<'brown'>;
    emailForm: Schema.Attribute.Component<
      'shared.email-subscription-form',
      false
    > &
      Schema.Attribute.Required;
    hasDecorativeElements: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    subtitleColor: Schema.Attribute.Enumeration<
      ['light-gray', 'off-white', 'beige', 'white']
    > &
      Schema.Attribute.DefaultTo<'light-gray'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titleColor: Schema.Attribute.Enumeration<
      ['off-white', 'light-cream', 'white', 'beige']
    > &
      Schema.Attribute.DefaultTo<'off-white'>;
  };
}

export interface SharedPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_plan_features';
  info: {
    description: 'Feature included in a pricing plan';
    displayName: 'Plan Feature';
    icon: 'check';
    name: 'Plan Feature';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPlatformItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_platform_items';
  info: {
    description: 'Individual platform compatibility item';
    displayName: 'Platform Item';
    icon: 'monitor';
    name: 'Platform Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPriceComparison extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_comparisons';
  info: {
    description: 'Price comparison between competitors and VLE Mobile';
    displayName: 'Price Comparison';
    icon: 'dollar';
    name: 'Price Comparison';
  };
  attributes: {
    competitorColor: Schema.Attribute.Enumeration<
      ['dark-grey', 'black', 'grey']
    > &
      Schema.Attribute.DefaultTo<'dark-grey'>;
    competitorLabel: Schema.Attribute.String & Schema.Attribute.Required;
    competitorPrice: Schema.Attribute.String & Schema.Attribute.Required;
    vleColor: Schema.Attribute.Enumeration<['orange', 'blue', 'green']> &
      Schema.Attribute.DefaultTo<'orange'>;
    vleLabel: Schema.Attribute.String & Schema.Attribute.Required;
    vlePrice: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_plans';
  info: {
    description: 'Individual pricing plan card';
    displayName: 'Pricing Plan';
    icon: 'creditCard';
    name: 'Pricing Plan';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'orange', 'blue', 'green']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    ctaButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    textColor: Schema.Attribute.Enumeration<
      ['dark', 'white', 'orange', 'blue']
    > &
      Schema.Attribute.DefaultTo<'dark'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_sections';
  info: {
    description: 'Main pricing section with plans, promotional badge, and broadband facts';
    displayName: 'Pricing Section';
    icon: 'creditCard';
    name: 'Pricing Section';
  };
  attributes: {
    broadbandFacts: Schema.Attribute.Component<'shared.broadband-facts', false>;
    footnote: Schema.Attribute.String;
    pricingPlans: Schema.Attribute.Component<'shared.pricing-plan', true> &
      Schema.Attribute.Required;
    promotionalBadge: Schema.Attribute.Component<
      'shared.promotional-badge',
      false
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPromotionalBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_promotional_badges';
  info: {
    description: 'Promotional badge with special offer text';
    displayName: 'Promotional Badge';
    icon: 'star';
    name: 'Promotional Badge';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['blue', 'orange', 'green', 'red', 'purple']
    > &
      Schema.Attribute.DefaultTo<'blue'>;
    position: Schema.Attribute.Enumeration<
      ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'center']
    > &
      Schema.Attribute.DefaultTo<'top-right'>;
    shape: Schema.Attribute.Enumeration<
      ['blob', 'rectangle', 'circle', 'rounded']
    > &
      Schema.Attribute.DefaultTo<'blob'>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    textColor: Schema.Attribute.Enumeration<
      ['white', 'black', 'blue', 'orange']
    > &
      Schema.Attribute.DefaultTo<'white'>;
  };
}

export interface SharedQuickLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_link_items';
  info: {
    description: 'Individual quick link card with image, title, and description';
    displayName: 'Quick Link Item';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['grey', 'purple', 'green', 'yellow', 'light-grey']
    > &
      Schema.Attribute.DefaultTo<'grey'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuickLinksSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_links_sections';
  info: {
    description: 'Section with title, description, and grid of quick link cards';
    displayName: 'Quick Links Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    quickLinks: Schema.Attribute.Component<'shared.quick-link-item', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Quick Links'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRecentArticlesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_recent_articles_sections';
  info: {
    description: 'Section displaying recent articles in a grid layout';
    displayName: 'Recent Articles Section';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Stay informed about mobile technology and digital security.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Recent Article'>;
  };
}

export interface SharedResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_cards';
  info: {
    description: 'Individual self help resource card with image, title, description, and read more button';
    displayName: 'Resource Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    readMoreButton: Schema.Attribute.Component<'shared.button', false>;
    resourceType: Schema.Attribute.Enumeration<
      [
        'getting-started',
        'troubleshooting',
        'video-tutorials',
        'compatibility-checker',
        'documentation',
        'faq',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedResourceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_resource_hero_sections';
  info: {
    description: 'Hero section for resource page with title and description';
    displayName: 'Resource Hero Section';
  };
  options: {
    timestamps: true;
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Stay informed about mobile technology and digital security.'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Resource Center'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSavingsIndicator extends Struct.ComponentSchema {
  collectionName: 'components_shared_savings_indicators';
  info: {
    description: 'Savings amount indicator with icon';
    displayName: 'Savings Indicator';
    icon: 'gift';
    name: 'Savings Indicator';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['party-popper', 'gift', 'money', 'star']
    > &
      Schema.Attribute.DefaultTo<'party-popper'>;
    savingsAmount: Schema.Attribute.String & Schema.Attribute.Required;
    savingsPeriod: Schema.Attribute.Enumeration<['year', 'month', 'lifetime']> &
      Schema.Attribute.DefaultTo<'year'>;
    textColor: Schema.Attribute.Enumeration<
      ['orange', 'green', 'blue', 'red']
    > &
      Schema.Attribute.DefaultTo<'orange'>;
  };
}

export interface SharedSavingsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_savings_sections';
  info: {
    description: 'Main savings section with price comparison, line selector, and CTA';
    displayName: 'Savings Section';
    icon: 'dollar';
    name: 'Savings Section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    lineSelector: Schema.Attribute.Component<'shared.line-selector', false> &
      Schema.Attribute.Required;
    priceComparison: Schema.Attribute.Component<
      'shared.price-comparison',
      false
    > &
      Schema.Attribute.Required;
    savingsIndicator: Schema.Attribute.Component<
      'shared.savings-indicator',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSecurityFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_security_features';
  info: {
    description: 'Individual security feature with icon and description';
    displayName: 'Security Feature';
    icon: 'shield';
    name: 'Security Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSecurityFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_security_feature_cards';
  info: {
    description: 'Individual card highlighting a security feature';
    displayName: 'Security Feature Card';
    icon: 'shield';
    name: 'Security Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSecurityFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_security_features_sections';
  info: {
    description: 'AI Digital Security features section';
    displayName: 'Security Features Section';
    icon: 'lock';
    name: 'Security Features Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.security-feature', true>;
    insuranceInfo: Schema.Attribute.Component<'shared.insurance-info', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSelfHelpResourcesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_self_help_resources_sections';
  info: {
    description: 'Section with title, description, and grid of self help resource cards';
    displayName: 'Self Help Resources Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    resourceCards: Schema.Attribute.Component<'shared.resource-card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Self Help Resources'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_features_sections';
  info: {
    description: 'Main section with service tabs and their dynamic content';
    displayName: 'Service Features Section';
    icon: 'layout';
    name: 'Service Features Section';
  };
  attributes: {
    serviceTabs: Schema.Attribute.Component<'shared.service-tabs', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    description: 'Individual service item with image and description';
    displayName: 'Service Item';
    icon: 'service';
    name: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_tabs_items';
  info: {
    description: 'Individual service tab item with content';
    displayName: 'Service Tab';
    icon: 'bulletList';
    name: 'Service Tab';
  };
  attributes: {
    content: Schema.Attribute.Component<'shared.tab-content', false> &
      Schema.Attribute.Required;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tabId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServiceTabs extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_tabs';
  info: {
    description: 'Navigation tabs for different service categories';
    displayName: 'Service Tabs';
    icon: 'layout';
    name: 'Service Tabs';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'shared.service-tab', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSmartphoneDisplay extends Struct.ComponentSchema {
  collectionName: 'components_shared_smartphone_displays';
  info: {
    description: 'Smartphone mockup displaying app interface';
    displayName: 'Smartphone Display';
    icon: 'mobile';
    name: 'Smartphone Display';
  };
  attributes: {
    alertDetails: Schema.Attribute.Component<'shared.alert-detail', true>;
    alertMessage: Schema.Attribute.String & Schema.Attribute.Required;
    appName: Schema.Attribute.String & Schema.Attribute.Required;
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    statusBar: Schema.Attribute.Component<'shared.status-bar', false>;
  };
}

export interface SharedSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    description: 'Social media link with icon and URL';
    displayName: 'Social Media Link';
    icon: 'share';
    name: 'Social Media Link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'youtube', 'linkedin']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatisticItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistic_items';
  info: {
    description: 'Individual statistic with text and optional icon';
    displayName: 'Statistic Item';
    icon: 'chart';
    name: 'Statistic Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStatusBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_status_bars';
  info: {
    description: 'Smartphone status bar information';
    displayName: 'Status Bar';
    icon: 'clock';
    name: 'Status Bar';
  };
  attributes: {
    batteryLevel: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<100>;
    hasWifi: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    networkType: Schema.Attribute.Enumeration<['5G', '4G', 'WiFi', '3G']> &
      Schema.Attribute.DefaultTo<'5G'>;
    time: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSupportHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_support_hero_sections';
  info: {
    description: 'Hero section for support center page with title, tagline, and hero image';
    displayName: 'Support Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tagline: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"We're here to help.">;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Support Center'>;
  };
}

export interface SharedTabContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_contents';
  info: {
    description: 'Content for each tab including image, left and right content';
    displayName: 'Tab Content';
    icon: 'layout';
    name: 'Tab Content';
  };
  attributes: {
    centerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    leftContent: Schema.Attribute.Component<'shared.benefits-section', false> &
      Schema.Attribute.Required;
    rightContent: Schema.Attribute.Component<'shared.benefit-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    description: 'Individual customer testimonial with quote, name, title, and photo';
    displayName: 'Testimonial Item';
    icon: 'quote';
    name: 'Testimonial Item';
  };
  attributes: {
    company: Schema.Attribute.String;
    customerName: Schema.Attribute.String & Schema.Attribute.Required;
    customerPhoto: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    customerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials_sections';
  info: {
    description: 'Customer testimonials section with carousel navigation';
    displayName: 'Testimonials Section';
    icon: 'quote';
    name: 'Testimonials Section';
  };
  attributes: {
    backgroundColor: Schema.Attribute.Enumeration<
      ['white', 'light-grey', 'beige', 'off-white']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    showNavigation: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    testimonialBackgroundColor: Schema.Attribute.Enumeration<
      ['beige', 'light-grey', 'off-white', 'white']
    > &
      Schema.Attribute.DefaultTo<'beige'>;
    testimonials: Schema.Attribute.Component<'shared.testimonial-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedUtilityBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_utility_bars';
  info: {
    description: 'Top utility bar with contact info and quick links';
    displayName: 'Utility Bar';
    icon: 'phone';
    name: 'Utility Bar';
  };
  attributes: {
    contactText: Schema.Attribute.String & Schema.Attribute.Required;
    languageSelector: Schema.Attribute.Component<
      'shared.language-selector',
      false
    >;
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
    quickLinks: Schema.Attribute.Component<'shared.navigation-link', true>;
    scheduleCallUrl: Schema.Attribute.String;
  };
}

export interface SharedWhiteGloveSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_white_glove_sections';
  info: {
    description: 'White glove resolution service section';
    displayName: 'White Glove Section';
    icon: 'shield';
    name: 'White Glove Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'shared.service-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_sections';
  info: {
    description: 'Why Choose section with media logos, title, description and play button';
    displayName: 'Why Choose Section';
    icon: 'star';
    name: 'Why Choose Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    mediaLogos: Schema.Attribute.Component<'shared.media-logos', false> &
      Schema.Attribute.Required;
    playButton: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedWhyMattersSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_matters_sections';
  info: {
    description: 'Section explaining why digital security matters with statistics';
    displayName: 'Why Matters Section';
    icon: 'information';
    name: 'Why Matters Section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    statistics: Schema.Attribute.Component<'shared.statistic-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.alert-detail': SharedAlertDetail;
      'shared.article-card': SharedArticleCard;
      'shared.benefit-item': SharedBenefitItem;
      'shared.benefits-section': SharedBenefitsSection;
      'shared.billing-toggle': SharedBillingToggle;
      'shared.broadband-facts': SharedBroadbandFacts;
      'shared.button': SharedButton;
      'shared.category-filter': SharedCategoryFilter;
      'shared.category-filter-item': SharedCategoryFilterItem;
      'shared.compatibility-section': SharedCompatibilitySection;
      'shared.contact-method': SharedContactMethod;
      'shared.contact-method-card': SharedContactMethodCard;
      'shared.contact-options-section': SharedContactOptionsSection;
      'shared.contact-section': SharedContactSection;
      'shared.copyright-info': SharedCopyrightInfo;
      'shared.country-button': SharedCountryButton;
      'shared.digital-security-section': SharedDigitalSecuritySection;
      'shared.email-subscription-form': SharedEmailSubscriptionForm;
      'shared.faq-hero': SharedFaqHero;
      'shared.feature-item': SharedFeatureItem;
      'shared.feature-panel': SharedFeaturePanel;
      'shared.featured-articles-section': SharedFeaturedArticlesSection;
      'shared.footer-bottom-section': SharedFooterBottomSection;
      'shared.footer-link-column': SharedFooterLinkColumn;
      'shared.footer-middle-section': SharedFooterMiddleSection;
      'shared.global-connectivity-section': SharedGlobalConnectivitySection;
      'shared.hero-section': SharedHeroSection;
      'shared.insurance-info': SharedInsuranceInfo;
      'shared.language-selector': SharedLanguageSelector;
      'shared.line-selector': SharedLineSelector;
      'shared.logo': SharedLogo;
      'shared.main-navigation': SharedMainNavigation;
      'shared.media': SharedMedia;
      'shared.media-logo': SharedMediaLogo;
      'shared.media-logos': SharedMediaLogos;
      'shared.navigation-link': SharedNavigationLink;
      'shared.newsletter-section': SharedNewsletterSection;
      'shared.plan-feature': SharedPlanFeature;
      'shared.platform-item': SharedPlatformItem;
      'shared.price-comparison': SharedPriceComparison;
      'shared.pricing-plan': SharedPricingPlan;
      'shared.pricing-section': SharedPricingSection;
      'shared.promotional-badge': SharedPromotionalBadge;
      'shared.quick-link-item': SharedQuickLinkItem;
      'shared.quick-links-section': SharedQuickLinksSection;
      'shared.quote': SharedQuote;
      'shared.recent-articles-section': SharedRecentArticlesSection;
      'shared.resource-card': SharedResourceCard;
      'shared.resource-hero-section': SharedResourceHeroSection;
      'shared.rich-text': SharedRichText;
      'shared.savings-indicator': SharedSavingsIndicator;
      'shared.savings-section': SharedSavingsSection;
      'shared.security-feature': SharedSecurityFeature;
      'shared.security-feature-card': SharedSecurityFeatureCard;
      'shared.security-features-section': SharedSecurityFeaturesSection;
      'shared.self-help-resources-section': SharedSelfHelpResourcesSection;
      'shared.seo': SharedSeo;
      'shared.service-features-section': SharedServiceFeaturesSection;
      'shared.service-item': SharedServiceItem;
      'shared.service-tab': SharedServiceTab;
      'shared.service-tabs': SharedServiceTabs;
      'shared.slider': SharedSlider;
      'shared.smartphone-display': SharedSmartphoneDisplay;
      'shared.social-media-link': SharedSocialMediaLink;
      'shared.statistic-item': SharedStatisticItem;
      'shared.status-bar': SharedStatusBar;
      'shared.support-hero-section': SharedSupportHeroSection;
      'shared.tab-content': SharedTabContent;
      'shared.testimonial-item': SharedTestimonialItem;
      'shared.testimonials-section': SharedTestimonialsSection;
      'shared.utility-bar': SharedUtilityBar;
      'shared.white-glove-section': SharedWhiteGloveSection;
      'shared.why-choose-section': SharedWhyChooseSection;
      'shared.why-matters-section': SharedWhyMattersSection;
    }
  }
}
