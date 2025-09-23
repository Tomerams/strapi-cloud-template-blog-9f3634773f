import type { Schema, Struct } from '@strapi/strapi';

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
    heading: Schema.Attribute.String;
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
    alternates: Schema.Attribute.String;
    canonicalUrl: Schema.Attribute.String;
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
    metaBasics: Schema.Attribute.Component<'seo.meta-basics', false>;
    openGraph: Schema.Attribute.Component<'seo.open-graph', false>;
    robots: Schema.Attribute.Component<'seo.robots', false>;
  };
}

export interface UtilitiesHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_utilities_header_links';
  info: {
    displayName: 'headerLinks';
    icon: 'attachment';
  };
  attributes: {};
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
      'dynamic-zone.rich-content': DynamicZoneRichContent;
      'sections.banner': SectionsBanner;
      'sections.blog': SectionsBlog;
      'sections.practice-grid': SectionsPracticeGrid;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.team-teaser': SectionsTeamTeaser;
      'seo.canonical-and-alternates': SeoCanonicalAndAlternates;
      'seo.meta-basics': SeoMetaBasics;
      'seo.meta-keywords': SeoMetaKeywords;
      'seo.open-graph': SeoOpenGraph;
      'seo.robots': SeoRobots;
      'seo.seo': SeoSeo;
      'utilities.header-links': UtilitiesHeaderLinks;
      'utilities.services': UtilitiesServices;
    }
  }
}
