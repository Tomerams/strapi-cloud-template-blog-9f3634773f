import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.practice-grid': SectionsPracticeGrid;
      'sections.sectors-grid': SectionsSectorsGrid;
      'sections.team-teaser': SectionsTeamTeaser;
    }
  }
}
