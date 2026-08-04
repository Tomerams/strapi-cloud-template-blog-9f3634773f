import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneChecklist extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_checklists';
  info: {
    description: '\u05DE\u05D4 \u05D1\u05D5\u05D3\u05E7\u05D9\u05DD \u05D0\u05D5 \u05DE\u05DB\u05D9\u05E0\u05D9\u05DD \u05DC\u05E4\u05E0\u05D9 \u05E9\u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD';
    displayName: 'Practical Checklist';
    icon: 'check';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'dynamic-zone.content-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    noteText: Schema.Attribute.Text;
    noteTitle: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['light', 'accent']> &
      Schema.Attribute.DefaultTo<'light'>;
  };
}

export interface DynamicZoneClientFit extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_client_fits';
  info: {
    description: '\u05D4\u05D2\u05D3\u05E8\u05EA \u05E1\u05D5\u05D2\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05D4\u05DE\u05E7\u05E8\u05D9\u05DD \u05E9\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05EA\u05D0\u05D9\u05DD \u05DC\u05D4\u05DD';
    displayName: 'Client Fit';
    icon: 'user';
  };
  attributes: {
    broadReviewText: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u05DB\u05E9\u05D9\u05E9 \u05DB\u05DE\u05D4 \u05D1\u05E2\u05DC\u05D9 \u05E2\u05E0\u05D9\u05D9\u05DF, \u05D9\u05D5\u05EA\u05E8 \u05DE\u05E8\u05E9\u05D5\u05EA \u05D0\u05D7\u05EA, \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05E9\u05DC\u05D0 \u05EA\u05D5\u05D0\u05DE\u05D9\u05DD \u05D0\u05D5 \u05DE\u05D5\u05E2\u05D3 \u05D7\u05EA\u05D9\u05DE\u05D4 \u05D5\u05EA\u05E9\u05DC\u05D5\u05DD \u05E7\u05E8\u05D5\u05D1.'>;
    broadReviewTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05DE\u05EA\u05D9 \u05D7\u05E9\u05D5\u05D1 \u05DC\u05E2\u05E6\u05D5\u05E8 \u05DC\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05D9\u05D5\u05EA\u05E8?'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05D1\u05D3\u05E7\u05D5 \u05D0\u05D9\u05DA \u05E0\u05DB\u05D5\u05DF \u05DC\u05D4\u05EA\u05E7\u05D3\u05DD \u05D1\u05DE\u05E7\u05E8\u05D4 \u05E9\u05DC\u05DB\u05DD'>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05DC\u05DE\u05D9 \u05D4\u05DC\u05D9\u05D5\u05D5\u05D9 \u05DE\u05EA\u05D0\u05D9\u05DD'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u05DB\u05E9\u05D4\u05D4\u05D7\u05DC\u05D8\u05D4 \u05D3\u05D5\u05E8\u05E9\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05EA\u05E9\u05D5\u05D1\u05D4 \u05DB\u05DC\u05DC\u05D9\u05EA'>;
    intro: Schema.Attribute.Text & Schema.Attribute.Required;
    profiles: Schema.Attribute.Component<'dynamic-zone.client-profile', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface DynamicZoneClientProfile extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_client_profiles';
  info: {
    displayName: 'Client Profile';
    icon: 'user';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneContentItem extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_content_items';
  info: {
    description: '\u05E4\u05E8\u05D9\u05D8 \u05EA\u05D5\u05DB\u05DF \u05E7\u05E6\u05E8 \u05DC\u05EA\u05E8\u05D7\u05D9\u05E9 \u05D0\u05D5 \u05DC\u05E8\u05E9\u05D9\u05DE\u05EA \u05D1\u05D3\u05D9\u05E7\u05D4';
    displayName: 'Content Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneContextPanel extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_context_panels';
  info: {
    description: '\u05D4\u05E7\u05E9\u05E8 \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D0\u05D5 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05E9\u05DE\u05E1\u05D1\u05D9\u05E8 \u05DE\u05D3\u05D5\u05E2 \u05D4\u05E0\u05D5\u05E9\u05D0 \u05D3\u05D5\u05E8\u05E9 \u05D4\u05E1\u05EA\u05DB\u05DC\u05D5\u05EA \u05E8\u05D7\u05D1\u05D4';
    displayName: 'Context Panel';
    icon: 'information';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    highlight: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['soft', 'dark', 'centered']> &
      Schema.Attribute.DefaultTo<'soft'>;
  };
}

export interface DynamicZoneExpertiseConnections
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_expertise_connections';
  info: {
    description: '\u05DE\u05E4\u05D4 \u05E7\u05E6\u05E8\u05D4 \u05E9\u05DC \u05D4\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD \u05D5\u05D4\u05D2\u05D5\u05E8\u05DE\u05D9\u05DD \u05E9\u05DE\u05EA\u05D7\u05D1\u05E8\u05D9\u05DD \u05DC\u05E1\u05D5\u05D2\u05D9\u05D4';
    displayName: 'Expertise Connections';
    icon: 'relation';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['network', 'compact']> &
      Schema.Attribute.DefaultTo<'network'>;
    nodes: Schema.Attribute.Component<'dynamic-zone.expertise-node', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface DynamicZoneExpertiseNode extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_expertise_nodes';
  info: {
    description: '\u05E6\u05D5\u05DE\u05EA \u05D1\u05DE\u05E4\u05EA \u05E7\u05E9\u05E8\u05D9 \u05D4\u05DE\u05D5\u05DE\u05D7\u05D9\u05D5\u05EA';
    displayName: 'Expertise Node';
    icon: 'connector';
  };
  attributes: {
    connectsTo: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DynamicZoneRelatedServices extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_related_services';
  info: {
    description: '\u05D1\u05D7\u05D9\u05E8\u05D4 \u05D9\u05D3\u05E0\u05D9\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E7\u05E9\u05D5\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05DA Strapi';
    displayName: 'Related Services';
    icon: 'link';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'list']> &
      Schema.Attribute.DefaultTo<'grid'>;
    linkLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05DC\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA'>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface DynamicZoneRichContent extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_rich_contents';
  info: {
    displayName: 'richContent';
    icon: 'apps';
  };
  attributes: {
    richContent: Schema.Attribute.Blocks;
  };
}

export interface DynamicZoneScenarioGrid extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_scenario_grids';
  info: {
    description: '\u05DE\u05E6\u05D1\u05D9\u05DD \u05E9\u05DB\u05D9\u05D7\u05D9\u05DD \u05E9\u05D1\u05D4\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D6\u05D4\u05D5\u05EA \u05D0\u05EA \u05E2\u05E6\u05DE\u05D5';
    displayName: 'Scenario Grid';
    icon: 'grid';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['white', 'soft']> &
      Schema.Attribute.DefaultTo<'white'>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'dynamic-zone.content-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    layout: Schema.Attribute.Enumeration<['grid', 'timeline', 'split']> &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface LandingPagesCardItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_pages_card_items';
  info: {
    displayName: 'Card Item';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPagesStepItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_pages_step_items';
  info: {
    displayName: 'Step Item';
    icon: 'walk';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPagesTextItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_pages_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsAskAiTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_ask_ai_teasers';
  info: {
    displayName: 'AskAiTeaser';
    icon: 'magic';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05D4\u05DF \u05DE\u05D9\u05D3\u05E2 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9 \u05D1\u05DC\u05D1\u05D3 \u05D5\u05D0\u05D9\u05E0\u05DF \u05DE\u05D7\u05DC\u05D9\u05E4\u05D5\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E9\u05E4\u05D8\u05D9. \u05D0\u05D9\u05DF \u05DC\u05D4\u05D6\u05D9\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD \u05D0\u05D5 \u05DE\u05E1\u05DE\u05DB\u05D9\u05DD \u05E8\u05D2\u05D9\u05E9\u05D9\u05DD.'>;
    enabledTools: Schema.Attribute.Enumeration<
      ['all', 'chatgpt', 'claude', 'perplexity', 'gemini', 'copilot', 'grok']
    > &
      Schema.Attribute.DefaultTo<'all'>;
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05E9\u05D0\u05DC\u05D5 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u05D1\u05D3\u05E7\u05D5 \u05DE\u05D4 \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05E2\u05DC \u05E7\u05E8\u05D9\u05DF \u05D0\u05DE\u05E1\u05DC\u05DD'>;
    intro: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u05E4\u05EA\u05D7\u05D5 \u05DB\u05DC\u05D9 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05E2\u05DD \u05E9\u05D0\u05DC\u05D4 \u05E7\u05E6\u05E8\u05D4 \u05E2\u05DC \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA, \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D4\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC \u05D4\u05DE\u05E9\u05E8\u05D3.'>;
    layout: Schema.Attribute.Enumeration<['split', 'compact']> &
      Schema.Attribute.DefaultTo<'split'>;
    prompt: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u05E1\u05E4\u05E8 \u05DC\u05D9 \u05DC\u05DE\u05D4 \u05E2\u05D5\u05E8\u05DB\u05EA \u05D4\u05D3\u05D9\u05DF \u05E7\u05E8\u05D9\u05DF \u05D0\u05DE\u05E1\u05DC\u05DD \u05E0\u05D7\u05E9\u05D1\u05EA \u05D8\u05D5\u05D1\u05D4 \u05D1\u05EA\u05D7\u05D5\u05DE\u05D4, \u05D1\u05D3\u05D2\u05E9 \u05E2\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA, \u05E9\u05D9\u05E8\u05D5\u05EA, \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05D5\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05D9\u05E9\u05D9.'>;
  };
}

export interface SectionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_banners';
  info: {
    displayName: 'banner';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsBlog extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'blog';
    icon: 'apps';
  };
  attributes: {
    archiveLinkLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'compact', 'featured']> &
      Schema.Attribute.DefaultTo<'grid'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
  };
}

export interface SectionsContactSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_sections';
  info: {
    displayName: 'ContactSection';
    icon: 'phone';
  };
  attributes: {
    eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8'>;
    formId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'contact-us-home-page-dynamic'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u05DC\u05EA\u05D9\u05D0\u05D5\u05DD \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5'>;
    intro: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D5\u05E0\u05D7\u05D6\u05D5\u05E8 \u05D0\u05DC\u05D9\u05DB\u05DD \u05D1\u05D4\u05E7\u05D3\u05DD \u05E2\u05DD \u05D4\u05DB\u05D5\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05EA.'>;
    layout: Schema.Attribute.Enumeration<['form', 'compact', 'split']> &
      Schema.Attribute.DefaultTo<'form'>;
    showPhoneCta: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showWhatsappCta: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SectionsPostsTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_posts_teasers';
  info: {
    displayName: 'PostsTeaser';
    icon: 'bulletList';
  };
  attributes: {
    archiveLinkLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'compact', 'featured']> &
      Schema.Attribute.DefaultTo<'grid'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    selectionMode: Schema.Attribute.Enumeration<['latest', 'manual']> &
      Schema.Attribute.DefaultTo<'latest'>;
  };
}

export interface SectionsPracticeGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_practice_grids';
  info: {
    displayName: 'PracticeGrid';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface SectionsPressTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_press_teasers';
  info: {
    displayName: 'PressTeaser';
    icon: 'newspaper';
  };
  attributes: {
    archiveLinkLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u05DC\u05DB\u05DC \u05D4\u05E4\u05E8\u05E1\u05D5\u05DE\u05D9\u05DD'>;
    eyebrow: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Press'>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u05E4\u05E8\u05E1\u05D5\u05DE\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD'>;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'compact', 'featured']> &
      Schema.Attribute.DefaultTo<'grid'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    pressMentions: Schema.Attribute.Relation<
      'oneToMany',
      'api::press-mention.press-mention'
    >;
    selectionMode: Schema.Attribute.Enumeration<
      ['latest', 'manual', 'featured']
    > &
      Schema.Attribute.DefaultTo<'latest'>;
  };
}

export interface SectionsReviewsTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_reviews_teasers';
  info: {
    displayName: 'ReviewsTeaser';
    icon: 'star';
  };
  attributes: {
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['carousel', 'grid', 'compact']> &
      Schema.Attribute.DefaultTo<'carousel'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    showRatingSummary: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    source: Schema.Attribute.Enumeration<['google', 'manual']> &
      Schema.Attribute.DefaultTo<'google'>;
  };
}

export interface SectionsSectorsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_sectors_grids';
  info: {
    displayName: 'SectorsGrid';
    icon: 'dashboard';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface SectionsServicesTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_teasers';
  info: {
    displayName: 'ServicesTeaser';
    icon: 'attachment';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface SectionsSuccessCasesTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_success_cases_teasers';
  info: {
    displayName: 'successCasesTeaser';
    icon: 'apps';
  };
  attributes: {
    archiveLinkLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'compact', 'featured']> &
      Schema.Attribute.DefaultTo<'grid'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    selectionMode: Schema.Attribute.Enumeration<['latest', 'manual']> &
      Schema.Attribute.DefaultTo<'latest'>;
    successCases: Schema.Attribute.Relation<
      'oneToMany',
      'api::success-case.success-case'
    >;
  };
}

export interface SectionsTeamTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_teasers';
  info: {
    displayName: 'TeamTeaser';
    icon: 'book';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface SeoCanonicalAndAlternates extends Struct.ComponentSchema {
  collectionName: 'components_seo_canonical_and_alternates';
  info: {
    displayName: 'canonicalAndAlternates';
    icon: 'bell';
  };
  attributes: {
    alternates: Schema.Attribute.Component<'seo.hreflang-alternate', true>;
    canonicalUrl: Schema.Attribute.String;
  };
}

export interface SeoFaq extends Struct.ComponentSchema {
  collectionName: 'components_seo_faqs';
  info: {
    displayName: 'faq';
    icon: 'clock';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface SeoHreflangAlternate extends Struct.ComponentSchema {
  collectionName: 'components_seo_hreflang_alternates';
  info: {
    displayName: 'hreflangAlternate';
    icon: 'arrowUp';
  };
  attributes: {
    localeCode: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SeoMetaBasics extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_basics';
  info: {
    displayName: 'metaBasics';
    icon: 'apps';
  };
  attributes: {
    hideFromSearch: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    metaKeywords: Schema.Attribute.Component<'seo.meta-keywords', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    titleTemplate: Schema.Attribute.String;
  };
}

export interface SeoMetaKeywords extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_keywords';
  info: {
    displayName: 'metaKeywords';
    icon: 'archive';
  };
  attributes: {
    keyword: Schema.Attribute.String;
  };
}

export interface SeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'code';
  };
  attributes: {
    ogDescription: Schema.Attribute.String;
    ogImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    ogLocale: Schema.Attribute.String;
    ogSiteName: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'product', 'event']
    >;
  };
}

export interface SeoRobots extends Struct.ComponentSchema {
  collectionName: 'components_seo_robots';
  info: {
    displayName: 'robots';
    icon: 'code';
  };
  attributes: {
    advancedDirectives: Schema.Attribute.Enumeration<
      ['noimageindex', 'nosnippet', 'nocache']
    >;
    follow: Schema.Attribute.Boolean;
    index: Schema.Attribute.Boolean;
    maxImagePreview: Schema.Attribute.Enumeration<
      ['none', 'standard', 'large']
    >;
    maxSnippet: Schema.Attribute.Integer;
    maxVideoPreview: Schema.Attribute.Integer;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'alien';
  };
  attributes: {
    canonicalAndAlternates: Schema.Attribute.Component<
      'seo.canonical-and-alternates',
      false
    >;
    faq: Schema.Attribute.Component<'seo.faq', true>;
    metaBasics: Schema.Attribute.Component<'seo.meta-basics', false>;
    openGraph: Schema.Attribute.Component<'seo.open-graph', false>;
    robots: Schema.Attribute.Component<'seo.robots', false>;
  };
}

export interface UtilitiesServices extends Struct.ComponentSchema {
  collectionName: 'components_utilities_services';
  info: {
    displayName: 'services';
    icon: 'database';
  };
  attributes: {
    serviceText: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.checklist': DynamicZoneChecklist;
      'dynamic-zone.client-fit': DynamicZoneClientFit;
      'dynamic-zone.client-profile': DynamicZoneClientProfile;
      'dynamic-zone.content-item': DynamicZoneContentItem;
      'dynamic-zone.context-panel': DynamicZoneContextPanel;
      'dynamic-zone.expertise-connections': DynamicZoneExpertiseConnections;
      'dynamic-zone.expertise-node': DynamicZoneExpertiseNode;
      'dynamic-zone.related-services': DynamicZoneRelatedServices;
      'dynamic-zone.rich-content': DynamicZoneRichContent;
      'dynamic-zone.scenario-grid': DynamicZoneScenarioGrid;
      'landing-pages.card-item': LandingPagesCardItem;
      'landing-pages.step-item': LandingPagesStepItem;
      'landing-pages.text-item': LandingPagesTextItem;
      'sections.ask-ai-teaser': SectionsAskAiTeaser;
      'sections.banner': SectionsBanner;
      'sections.blog': SectionsBlog;
      'sections.contact-section': SectionsContactSection;
      'sections.posts-teaser': SectionsPostsTeaser;
      'sections.practice-grid': SectionsPracticeGrid;
      'sections.press-teaser': SectionsPressTeaser;
      'sections.reviews-teaser': SectionsReviewsTeaser;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.services-teaser': SectionsServicesTeaser;
      'sections.success-cases-teaser': SectionsSuccessCasesTeaser;
      'sections.team-teaser': SectionsTeamTeaser;
      'seo.canonical-and-alternates': SeoCanonicalAndAlternates;
      'seo.faq': SeoFaq;
      'seo.hreflang-alternate': SeoHreflangAlternate;
      'seo.meta-basics': SeoMetaBasics;
      'seo.meta-keywords': SeoMetaKeywords;
      'seo.open-graph': SeoOpenGraph;
      'seo.robots': SeoRobots;
      'seo.seo': SeoSeo;
      'utilities.services': UtilitiesServices;
    }
  }
}
