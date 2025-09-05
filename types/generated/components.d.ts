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
      'sections.practice-grid': SectionsPracticeGrid;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.team-teaser': SectionsTeamTeaser;
      'utilities.header-links': UtilitiesHeaderLinks;
      'utilities.services': UtilitiesServices;
    }
  }
}
