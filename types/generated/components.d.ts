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
    description: 'Defines the client profiles and matters suited to this service';
    displayName: 'Client Fit';
    icon: 'user';
  };
  attributes: {
    broadReviewText: Schema.Attribute.Text;
    broadReviewTitle: Schema.Attribute.String;
    cardLabel: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text & Schema.Attribute.Required;
    modalTitle: Schema.Attribute.String;
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
    description: 'A concise map of the fields and parties connected to the matter';
    displayName: 'Expertise Connections';
    icon: 'relation';
  };
  attributes: {
    connectionLabel: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['network', 'compact']> &
      Schema.Attribute.DefaultTo<'network'>;
    linkLabel: Schema.Attribute.String;
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
    description: 'Manual selection of related services from Strapi';
    displayName: 'Related Services';
    icon: 'link';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['grid', 'list']> &
      Schema.Attribute.DefaultTo<'grid'>;
    linkLabel: Schema.Attribute.String;
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

export interface GovernmentPageAssurance extends Struct.ComponentSchema {
  collectionName: 'components_government_page_assurance_fab969';
  info: {
    displayName: 'Government Submission Assurance';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.assurance-translation',
      false
    >;
  };
}

export interface GovernmentPageAssuranceTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_assurance_translation_c60f40';
  info: {
    displayName: 'Government Submission Assurance Translation';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'government-page.assurance-translation-items-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageAssuranceTranslationItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_assurance_translation_items__822050';
  info: {
    displayName: 'Government Submission Assurance Translation Items Item';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_government_page_case_study_b5151a';
  info: {
    displayName: 'Government Submission Case Study';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.case-study-translation',
      false
    >;
  };
}

export interface GovernmentPageCaseStudyTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_case_study_translation_bceddf';
  info: {
    displayName: 'Government Submission Case Study Translation';
    icon: 'write';
  };
  attributes: {
    client: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    imageAlt: Schema.Attribute.Text;
    imageUrl: Schema.Attribute.Text;
    meta: Schema.Attribute.Text;
    quote: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageChallenges extends Struct.ComponentSchema {
  collectionName: 'components_government_page_challenges_d61fdd';
  info: {
    displayName: 'Government Submission Challenges';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.challenges-translation',
      false
    >;
  };
}

export interface GovernmentPageChallengesTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_challenges_translation_79aed0';
  info: {
    displayName: 'Government Submission Challenges Translation';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'government-page.challenges-translation-items-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageChallengesTranslationItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_challenges_translation_items_b9f5d8';
  info: {
    displayName: 'Government Submission Challenges Translation Items Item';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageComparison extends Struct.ComponentSchema {
  collectionName: 'components_government_page_comparison_ead76a';
  info: {
    displayName: 'Government Submission Comparison';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.comparison-translation',
      false
    >;
  };
}

export interface GovernmentPageComparisonTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_comparison_translation_3f94e6';
  info: {
    displayName: 'Government Submission Comparison Translation';
    icon: 'write';
  };
  attributes: {
    columns: Schema.Attribute.Component<'government-page.text-item', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<
      'government-page.comparison-translation-rows-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageComparisonTranslationRowsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_comparison_translation_rows__2814fe';
  info: {
    displayName: 'Government Submission Comparison Translation Rows Item';
    icon: 'write';
  };
  attributes: {
    label: Schema.Attribute.Text;
    solo: Schema.Attribute.Text;
    withTeam: Schema.Attribute.Text;
  };
}

export interface GovernmentPageCta extends Struct.ComponentSchema {
  collectionName: 'components_government_page_cta_803ca2';
  info: {
    displayName: 'Government Submission Cta';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.cta-translation',
      false
    >;
  };
}

export interface GovernmentPageCtaTranslation extends Struct.ComponentSchema {
  collectionName: 'components_government_page_cta_translation_033358';
  info: {
    displayName: 'Government Submission Cta Translation';
    icon: 'write';
  };
  attributes: {
    buttonText: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageDiscovery extends Struct.ComponentSchema {
  collectionName: 'components_government_page_discovery_dfe7e9';
  info: {
    displayName: 'Government Submission Discovery';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.discovery-translation',
      false
    >;
  };
}

export interface GovernmentPageDiscoveryTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_discovery_translation_847e07';
  info: {
    displayName: 'Government Submission Discovery Translation';
    icon: 'write';
  };
  attributes: {
    checklistItems: Schema.Attribute.Component<
      'government-page.text-item',
      true
    >;
    checklistTitle: Schema.Attribute.Text;
    ctaLabel: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    note: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<
      'government-page.discovery-translation-steps-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageDiscoveryTranslationStepsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_discovery_translation_steps__d50419';
  info: {
    displayName: 'Government Submission Discovery Translation Steps Item';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_government_page_faq_240190';
  info: {
    displayName: 'Government Submission Faq';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.faq-translation',
      false
    >;
  };
}

export interface GovernmentPageFaqTranslation extends Struct.ComponentSchema {
  collectionName: 'components_government_page_faq_translation_c1a7f0';
  info: {
    displayName: 'Government Submission Faq Translation';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'government-page.faq-translation-items-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageFaqTranslationItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_faq_translation_items_item_cbab1a';
  info: {
    displayName: 'Government Submission Faq Translation Items Item';
    icon: 'write';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface GovernmentPageFooterForm extends Struct.ComponentSchema {
  collectionName: 'components_government_page_footer_form_c335db';
  info: {
    displayName: 'Government Submission Footer Form';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.footer-form-translation',
      false
    >;
  };
}

export interface GovernmentPageFooterFormTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_footer_form_translation_cb5a1b';
  info: {
    displayName: 'Government Submission Footer Form Translation';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    formId: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageHero extends Struct.ComponentSchema {
  collectionName: 'components_government_page_hero_ffa011';
  info: {
    displayName: 'Government Submission Hero';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.hero-translation',
      false
    >;
  };
}

export interface GovernmentPageHeroTranslation extends Struct.ComponentSchema {
  collectionName: 'components_government_page_hero_translation_46543c';
  info: {
    displayName: 'Government Submission Hero Translation';
    icon: 'write';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    form: Schema.Attribute.Component<
      'government-page.hero-translation-form',
      false
    >;
    imageAlt: Schema.Attribute.Text;
    imageUrl: Schema.Attribute.Text;
    lead: Schema.Attribute.Text;
    note: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<
      'government-page.hero-translation-stats-item',
      true
    >;
    title: Schema.Attribute.Text;
    titleAccent: Schema.Attribute.Text;
  };
}

export interface GovernmentPageHeroTranslationForm
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_hero_translation_form_06815e';
  info: {
    displayName: 'Government Submission Hero Translation Form';
    icon: 'write';
  };
  attributes: {
    formId: Schema.Attribute.Text;
    namePlaceholder: Schema.Attribute.Text;
    phonePlaceholder: Schema.Attribute.Text;
    submitLabel: Schema.Attribute.Text;
    successIcon: Schema.Attribute.Text;
    successMessage: Schema.Attribute.Text;
    successTitle: Schema.Attribute.Text;
    validation: Schema.Attribute.Component<
      'government-page.hero-translation-form-validation',
      false
    >;
  };
}

export interface GovernmentPageHeroTranslationFormValidation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_hero_translation_form_valida_d13030';
  info: {
    displayName: 'Government Submission Hero Translation Form Validation';
    icon: 'write';
  };
  attributes: {
    agentSubmissionError: Schema.Attribute.Text;
    agentSuccess: Schema.Attribute.Text;
    nameRequired: Schema.Attribute.Text;
    phoneInvalid: Schema.Attribute.Text;
    phoneRequired: Schema.Attribute.Text;
    submissionError: Schema.Attribute.Text;
  };
}

export interface GovernmentPageHeroTranslationStatsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_hero_translation_stats_item_e75968';
  info: {
    displayName: 'Government Submission Hero Translation Stats Item';
    icon: 'write';
  };
  attributes: {
    label: Schema.Attribute.Text;
    value: Schema.Attribute.Text;
  };
}

export interface GovernmentPageMetadata extends Struct.ComponentSchema {
  collectionName: 'components_government_page_metadata_b38fff';
  info: {
    displayName: 'Government Submission Metadata';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    openGraphDescription: Schema.Attribute.Text;
    openGraphTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageMethod extends Struct.ComponentSchema {
  collectionName: 'components_government_page_method_99dac0';
  info: {
    displayName: 'Government Submission Method';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.method-translation',
      false
    >;
  };
}

export interface GovernmentPageMethodTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_method_translation_8d4605';
  info: {
    displayName: 'Government Submission Method Translation';
    icon: 'write';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'government-page.text-item', true>;
    eyebrow: Schema.Attribute.Text;
    steps: Schema.Attribute.Component<
      'government-page.method-translation-steps-item',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageMethodTranslationStepsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_method_translation_steps_ite_0e1e78';
  info: {
    displayName: 'Government Submission Method Translation Steps Item';
    icon: 'write';
  };
  attributes: {
    body: Schema.Attribute.Text;
    step: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageObstacles extends Struct.ComponentSchema {
  collectionName: 'components_government_page_obstacles_a07e4a';
  info: {
    displayName: 'Government Submission Obstacles';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.obstacles-translation',
      false
    >;
  };
}

export interface GovernmentPageObstaclesTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_obstacles_translation_ed253a';
  info: {
    displayName: 'Government Submission Obstacles Translation';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'government-page.text-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPagePrograms extends Struct.ComponentSchema {
  collectionName: 'components_government_page_programs_c84a18';
  info: {
    displayName: 'Government Submission Programs';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.programs-translation',
      false
    >;
  };
}

export interface GovernmentPageProgramsTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_programs_translation_143200';
  info: {
    displayName: 'Government Submission Programs Translation';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    programs: Schema.Attribute.Component<
      'government-page.programs-translation-programs-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageProgramsTranslationProgramsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_programs_translation_program_532c4f';
  info: {
    displayName: 'Government Submission Programs Translation Programs Item';
    icon: 'write';
  };
  attributes: {
    badge: Schema.Attribute.Text;
    bestFor: Schema.Attribute.Text;
    commitment: Schema.Attribute.Text;
    ctaText: Schema.Attribute.Text;
    durationMonths: Schema.Attribute.Text;
    includes: Schema.Attribute.Component<'government-page.text-item', true>;
    note: Schema.Attribute.Text;
    programKey: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageSolutionStrip extends Struct.ComponentSchema {
  collectionName: 'components_government_page_solution_strip_83b6ad';
  info: {
    displayName: 'Government Submission Solution Strip';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.solution-strip-translation',
      false
    >;
  };
}

export interface GovernmentPageSolutionStripTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_solution_strip_translation_2bc1ec';
  info: {
    displayName: 'Government Submission Solution Strip Translation';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'government-page.solution-strip-translation-items-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageSolutionStripTranslationItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_solution_strip_translation_i_f39c2f';
  info: {
    displayName: 'Government Submission Solution Strip Translation Items Item';
    icon: 'write';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageSuitability extends Struct.ComponentSchema {
  collectionName: 'components_government_page_suitability_16c0bf';
  info: {
    displayName: 'Government Submission Suitability';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.suitability-translation',
      false
    >;
  };
}

export interface GovernmentPageSuitabilityTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_suitability_translation_346931';
  info: {
    displayName: 'Government Submission Suitability Translation';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    fitsItems: Schema.Attribute.Component<'government-page.text-item', true>;
    fitsTitle: Schema.Attribute.Text;
    notFitsItems: Schema.Attribute.Component<'government-page.text-item', true>;
    notFitsTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_government_page_testimonials_8c4dee';
  info: {
    displayName: 'Government Submission Testimonials';
    icon: 'write';
  };
  attributes: {
    translation: Schema.Attribute.Component<
      'government-page.testimonials-translation',
      false
    >;
  };
}

export interface GovernmentPageTestimonialsTranslation
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_testimonials_translation_7942db';
  info: {
    displayName: 'Government Submission Testimonials Translation';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'government-page.testimonials-translation-items-item',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GovernmentPageTestimonialsTranslationItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_government_page_testimonials_translation_ite_77f22b';
  info: {
    displayName: 'Government Submission Testimonials Translation Items Item';
    icon: 'write';
  };
  attributes: {
    avatar: Schema.Attribute.Text;
    meta: Schema.Attribute.Text;
    name: Schema.Attribute.Text;
    quote: Schema.Attribute.Text;
  };
}

export interface GovernmentPageTextItem extends Struct.ComponentSchema {
  collectionName: 'components_government_page_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text;
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
    disclaimer: Schema.Attribute.Text;
    enabledTools: Schema.Attribute.Enumeration<
      ['all', 'chatgpt', 'claude', 'perplexity', 'gemini', 'copilot', 'grok']
    > &
      Schema.Attribute.DefaultTo<'all'>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['split', 'compact']> &
      Schema.Attribute.DefaultTo<'split'>;
    openInToolLabel: Schema.Attribute.String;
    prompt: Schema.Attribute.Text;
    toolsAriaLabel: Schema.Attribute.String;
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
    eyebrow: Schema.Attribute.String;
    formId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'contact-us-home-page-dynamic'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['form', 'compact', 'split']> &
      Schema.Attribute.DefaultTo<'form'>;
    loadingAriaLabel: Schema.Attribute.String;
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
    additionalServicesLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    focusedByLegalNeedLabel: Schema.Attribute.String;
    groupQuickAccessDescription: Schema.Attribute.Text;
    groupWithMoreDescription: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    moreOnPracticePageLabel: Schema.Attribute.String;
    practiceAreaLabel: Schema.Attribute.String;
    practiceBadgeLabel: Schema.Attribute.String;
    serviceBadgeLabel: Schema.Attribute.String;
    servicesLabel: Schema.Attribute.String;
    viewAllServicesLabel: Schema.Attribute.String;
    viewPracticeAreaLabel: Schema.Attribute.String;
    viewServiceLabel: Schema.Attribute.String;
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

export interface WebsiteTextsAboutPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_about_page_8a25ed';
  info: {
    displayName: 'About Page';
    icon: 'write';
  };
  attributes: {
    fallbackMetaTitle: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsAboutPageClient extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_about_page_client_a65046';
  info: {
    displayName: 'About Page Client';
    icon: 'write';
  };
  attributes: {
    aboutTheFirm: Schema.Attribute.Text;
    agriculturalEstatesMoshavCommunitiesAndRealEstate: Schema.Attribute.Text;
    areasOfFocus: Schema.Attribute.Text;
    contactUs: Schema.Attribute.Text;
    corePracticeAreas: Schema.Attribute.Text;
    focusDescription: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    leaveYourDetailsAndWeWillContactYouWith: Schema.Attribute.Text;
    locations: Schema.Attribute.Text;
    officeLocation: Schema.Attribute.Text;
    officeLocationMap: Schema.Attribute.Text;
    openInGoogleMaps: Schema.Attribute.Text;
    ourOffice: Schema.Attribute.Text;
    relevantLinks: Schema.Attribute.Text;
    selectedServices: Schema.Attribute.Text;
    theTeamLeadingYourMatter: Schema.Attribute.Text;
    viewFullProfile: Schema.Attribute.Text;
    viewPracticeArea: Schema.Attribute.Text;
    viewService: Schema.Attribute.Text;
    weWillBeGladToContactYou: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsAccessibilityPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_accessibility_page_5479d6';
  info: {
    displayName: 'Accessibility Page';
    icon: 'write';
  };
  attributes: {
    home: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsAppModal extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_app_modal_8d68e4';
  info: {
    displayName: 'App Modal';
    icon: 'write';
  };
  attributes: {
    close: Schema.Attribute.Text;
    defaultTitle: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsArticleAuthorBadge extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_article_author_badge_68f918';
  info: {
    displayName: 'Article Author Badge';
    icon: 'write';
  };
  attributes: {
    by: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsArticlesDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_articles_detail_page_f0be16';
  info: {
    displayName: 'Articles Detail Page';
    icon: 'write';
  };
  attributes: {
    anArticleProvidesAFrameworkASoundDecisionRequires: Schema.Attribute.Text;
    articles: Schema.Attribute.Text;
    bookAConsultation: Schema.Attribute.Text;
    fromInsightToAction: Schema.Attribute.Text;
    haveAnInitialDirectionNowApplyItToYour: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    leadPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
    leaveYourDetailsAndWeWillContactYouTo: Schema.Attribute.Text;
    minRead: Schema.Attribute.Text;
    relatedLegalServices: Schema.Attribute.Text;
    writtenBy: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsArticlesGrid extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_articles_grid_0e8c3f';
  info: {
    displayName: 'Articles Grid';
    icon: 'write';
  };
  attributes: {
    fallbackInitial: Schema.Attribute.Text;
    minutesRead: Schema.Attribute.Text;
    readArticle: Schema.Attribute.Text;
    readMore: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsArticlesHero extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_articles_hero_cabd23';
  info: {
    displayName: 'Articles Hero';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsArticlesPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_articles_page_12906b';
  info: {
    displayName: 'Articles Page';
    icon: 'write';
  };
  attributes: {
    articles: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsConsultDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_consult_detail_page_eebe5c';
  info: {
    displayName: 'Consult Detail Page';
    icon: 'write';
  };
  attributes: {
    fallbackTitle: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsConsultPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_consult_page_aabe7e';
  info: {
    displayName: 'Consult Page';
    icon: 'write';
  };
  attributes: {
    awaitingPracticeAreaAssignment: Schema.Attribute.Text;
    consultationGuides: Schema.Attribute.Text;
    consultationGuides2: Schema.Attribute.Text;
    fallbackMetaDescription: Schema.Attribute.Text;
    fallbackMetaTitle: Schema.Attribute.Text;
    focusedConsultationGuidesByPracticeAreaAndServiceHelping: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    hubEyebrow: Schema.Attribute.Text;
    unassignedPracticeArea: Schema.Attribute.Text;
    viewGuide: Schema.Attribute.Text;
    viewMainPracticeArea: Schema.Attribute.Text;
    viewPracticeArea: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsContactUsForm extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_contact_us_form_288a9d';
  info: {
    displayName: 'Contact Us Form';
    icon: 'write';
  };
  attributes: {
    anErrorOccurredPleaseTryAgain: Schema.Attribute.Text;
    call: Schema.Attribute.Text;
    contactUs: Schema.Attribute.Text;
    email: Schema.Attribute.Text;
    fullName: Schema.Attribute.Text;
    fullNameIsRequired: Schema.Attribute.Text;
    helloIWouldLikeMoreInformation: Schema.Attribute.Text;
    invalidEmailAddress: Schema.Attribute.Text;
    invalidPhoneNumber: Schema.Attribute.Text;
    leaveYourDetailsAndWeWillContactYouShortly: Schema.Attribute.Text;
    message: Schema.Attribute.Text;
    optional: Schema.Attribute.Text;
    phone: Schema.Attribute.Text;
    phoneIsRequired: Schema.Attribute.Text;
    phoneIsRequired2: Schema.Attribute.Text;
    send: Schema.Attribute.Text;
    sendFailed: Schema.Attribute.Text;
    sending: Schema.Attribute.Text;
    sent: Schema.Attribute.Text;
    sentSuccessfully: Schema.Attribute.Text;
    sentWeLlBeInTouch: Schema.Attribute.Text;
    sentWeWillContactYouShortly: Schema.Attribute.Text;
    theContactRequestCouldNotBeSubmitted: Schema.Attribute.Text;
    theContactRequestWasSubmittedSuccessfully: Schema.Attribute.Text;
    websiteInquiry: Schema.Attribute.Text;
    weLlGetBackToYouShortlyYouCan: Schema.Attribute.Text;
    weUseYourDetailsOnlyToRespondWeNever: Schema.Attribute.Text;
    writeToUs: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsCookieConsent extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_cookie_consent_bf6b26';
  info: {
    displayName: 'Cookie Consent';
    icon: 'write';
  };
  attributes: {
    accept: Schema.Attribute.Text;
    detailsPrefix: Schema.Attribute.Text;
    dialogLabel: Schema.Attribute.Text;
    linksJoiner: Schema.Attribute.Text;
    privacyPolicy: Schema.Attribute.Text;
    reject: Schema.Attribute.Text;
    termsAndConditions: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsFooter extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_footer_1f9dff';
  info: {
    displayName: 'Footer';
    icon: 'write';
  };
  attributes: {
    accessibilityStatement: Schema.Attribute.Text;
    boutiqueLegalCounselForRealEstateTransactionsAndLitigation: Schema.Attribute.Text;
    call: Schema.Attribute.Text;
    consultation: Schema.Attribute.Text;
    consultationPages: Schema.Attribute.Text;
    email: Schema.Attribute.Text;
    footerLinks: Schema.Attribute.Text;
    karinAmsalemLawFirm: Schema.Attribute.Text;
    officeContactDetails: Schema.Attribute.Text;
    openOfficeLocationInMaps: Schema.Attribute.Text;
    privacyPolicy: Schema.Attribute.Text;
    reviewUsOnGoogle: Schema.Attribute.Text;
    sendAWhatsAppMessageTo: Schema.Attribute.Text;
    socialMedia: Schema.Attribute.Text;
    termsAndConditions: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsGlobalContactCta extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_global_contact_cta_763962';
  info: {
    displayName: 'Global Contact Cta';
    icon: 'write';
  };
  attributes: {
    bookConsultation: Schema.Attribute.Text;
    contactUs: Schema.Attribute.Text;
    phone: Schema.Attribute.Text;
    quickContact: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsGoogleReviewsMini extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_google_reviews_mini_f20da4';
  info: {
    displayName: 'Google Reviews Mini';
    icon: 'write';
  };
  attributes: {
    clientReviewsOnGoogle: Schema.Attribute.Text;
    clientReviewsOnGoogle2: Schema.Attribute.Text;
    reviews: Schema.Attribute.Text;
    verifiedReviewer: Schema.Attribute.Text;
    viewAllGoogleReviews: Schema.Attribute.Text;
    viewAllGoogleReviews2: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsGoogleReviewsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_google_reviews_section_3d7b38';
  info: {
    displayName: 'Google Reviews Section';
    icon: 'write';
  };
  attributes: {
    clientReviewsOnGoogle: Schema.Attribute.Text;
    googleReviews: Schema.Attribute.Text;
    placeName: Schema.Attribute.Text;
    ratingOutOfFive: Schema.Attribute.Text;
    reviews: Schema.Attribute.Text;
    verifiedReviewer: Schema.Attribute.Text;
    viewAllGoogleReviews: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsHeader extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_header_296e3b';
  info: {
    displayName: 'Header';
    icon: 'write';
  };
  attributes: {
    about: Schema.Attribute.Text;
    articles: Schema.Attribute.Text;
    bookAConsultation: Schema.Attribute.Text;
    bookConsultation: Schema.Attribute.Text;
    closeNavigationMenu: Schema.Attribute.Text;
    contactUs: Schema.Attribute.Text;
    dashboard: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    languageName: Schema.Attribute.Text;
    login: Schema.Attribute.Text;
    mainNavigation: Schema.Attribute.Text;
    mobileNavigation: Schema.Attribute.Text;
    openNavigationMenu: Schema.Attribute.Text;
    practiceAreas: Schema.Attribute.Text;
    press: Schema.Attribute.Text;
    sectors: Schema.Attribute.Text;
    services: Schema.Attribute.Text;
    signOut: Schema.Attribute.Text;
    successCases: Schema.Attribute.Text;
    team: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsHero extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_hero_e7fe62';
  info: {
    displayName: 'Hero';
    icon: 'write';
  };
  attributes: {
    completeDiscretion: Schema.Attribute.Text;
    contactUs: Schema.Attribute.Text;
    exploreOurPracticeAreas: Schema.Attribute.Text;
    exploreOurPracticeAreas2: Schema.Attribute.Text;
    focusedInitialConsultation: Schema.Attribute.Text;
    kALawsLogo: Schema.Attribute.Text;
    keyBenefits: Schema.Attribute.Text;
    responseWithin24Hours: Schema.Attribute.Text;
    successIsNeverAccidental: Schema.Attribute.Text;
    weAreHereToAdvocateForYou: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsHomePage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_home_page_a24d0c';
  info: {
    displayName: 'Home Page';
    icon: 'write';
  };
  attributes: {
    videoDescription: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_landing_page_bd71c1';
  info: {
    displayName: 'Landing Page';
    icon: 'write';
  };
  attributes: {
    benefit: Schema.Attribute.Text;
    bottomEyebrow: Schema.Attribute.Text;
    bottomFormSubtitle: Schema.Attribute.Text;
    defaultTeamName: Schema.Attribute.Text;
    defaultTeamRole: Schema.Attribute.Text;
    faqEyebrow: Schema.Attribute.Text;
    faqTitle: Schema.Attribute.Text;
    formSubtitle: Schema.Attribute.Text;
    formTitle: Schema.Attribute.Text;
    galleryImageAlt: Schema.Attribute.Text;
    galleryLabel: Schema.Attribute.Text;
    googleReviewMeta: Schema.Attribute.Text;
    heroFormCue: Schema.Attribute.Text;
    leaveDetails: Schema.Attribute.Text;
    personalConversation: Schema.Attribute.Text;
    personalGuidance: Schema.Attribute.Text;
    promptResponse: Schema.Attribute.Text;
    trustLabels: Schema.Attribute.Component<'website-texts.text-item', true>;
    videoAriaLabel: Schema.Attribute.Text;
    videoDescription: Schema.Attribute.Text;
    videoEyebrow: Schema.Attribute.Text;
    videoTitle: Schema.Attribute.Text;
    visualDescription: Schema.Attribute.Text;
    visualEyebrow: Schema.Attribute.Text;
    visualTitle: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsLocationsDetailPage
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_locations_detail_page_33e012';
  info: {
    displayName: 'Locations Detail Page';
    icon: 'write';
  };
  attributes: {
    bookAConsultation: Schema.Attribute.Text;
    haveATransactionDisputeOrDocumentToReview: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    initialConversation: Schema.Attribute.Text;
    leadPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
    leaveYourDetailsAndWeWillContactYouTo: Schema.Attribute.Text;
    locations: Schema.Attribute.Text;
    tellUsBrieflyWhatIsAtStakeAndWhere: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsLocationsPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_locations_page_151f55';
  info: {
    displayName: 'Locations Page';
    icon: 'write';
  };
  attributes: {
    exploreTheAreasServedByKALawsAndThe: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    localKnowledgeOfPropertyRightsAuthoritiesAndPlanningConsiderations: Schema.Attribute.Text;
    selectAnAreaOrTypeOfCounsel: Schema.Attribute.Text;
    serviceAreas: Schema.Attribute.Text;
    serviceAreasKALaws: Schema.Attribute.Text;
    viewServiceArea: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsLogin extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_login_2db25b';
  info: {
    displayName: 'Login';
    icon: 'write';
  };
  attributes: {
    email: Schema.Attribute.Text;
    linkSent: Schema.Attribute.Text;
    sendError: Schema.Attribute.Text;
    sending: Schema.Attribute.Text;
    sendLink: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsNotFound extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_not_found_b82321';
  info: {
    displayName: 'Not Found';
    icon: 'write';
  };
  attributes: {
    about: Schema.Attribute.Text;
    articles: Schema.Attribute.Text;
    badge: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    oldLinkTip: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    urlTip: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_our_services_f36aad';
  info: {
    displayName: 'Our Services';
    icon: 'write';
  };
  attributes: {
    additionalServices: Schema.Attribute.Text;
    defaultTitle: Schema.Attribute.Text;
    emptyState: Schema.Attribute.Text;
    legalService: Schema.Attribute.Text;
    loading: Schema.Attribute.Text;
    loadMore: Schema.Attribute.Text;
    matchingServices: Schema.Attribute.Text;
    noMatchingService: Schema.Attribute.Text;
    readMore: Schema.Attribute.Text;
    searchLabel: Schema.Attribute.Text;
    searchPlaceholder: Schema.Attribute.Text;
    showAll: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_our_team_043c59';
  info: {
    displayName: 'Our Team';
    icon: 'write';
  };
  attributes: {
    viewProfile: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPageIntroVideo extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_page_intro_video_75a137';
  info: {
    displayName: 'Page Intro Video';
    icon: 'write';
  };
  attributes: {
    defaultAriaLabel: Schema.Attribute.Text;
    defaultEyebrow: Schema.Attribute.Text;
    defaultTitle: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPageLeadSection extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_page_lead_section_623d9c';
  info: {
    displayName: 'Page Lead Section';
    icon: 'write';
  };
  attributes: {
    defaultEyebrow: Schema.Attribute.Text;
    defaultFormSubtitle: Schema.Attribute.Text;
    defaultFormTitle: Schema.Attribute.Text;
    defaultPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
  };
}

export interface WebsiteTextsPagesHero extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_pages_hero_f4d66e';
  info: {
    displayName: 'Pages Hero';
    icon: 'write';
  };
  attributes: {
    defaultEyebrow: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPracticeAreas extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_practice_areas_bf3993';
  info: {
    displayName: 'Practice Areas';
    icon: 'write';
  };
  attributes: {
    cardDescription: Schema.Attribute.Text;
    practiceArea: Schema.Attribute.Text;
    viewPracticeArea: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPracticeAreasDetailPage
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_practice_areas_detail_page_833a48';
  info: {
    displayName: 'Practice Areas Detail Page';
    icon: 'write';
  };
  attributes: {
    aBriefIntroductionToOurFirm: Schema.Attribute.Text;
    aBriefIntroductionToThisPracticeArea: Schema.Attribute.Text;
    aClearOverviewOfTheKeyQuestionsRisksAnd: Schema.Attribute.Text;
    aShortIntroductionToOurApproachAndHowThe: Schema.Attribute.Text;
    aShortOverviewOfTheCommonQuestionsWhenTo: Schema.Attribute.Text;
    beforeYouBegin: Schema.Attribute.Text;
    bookAConsultation: Schema.Attribute.Text;
    focusedInitialConversation: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    inTheFirstConversationWeWillUnderstandWhatHappened: Schema.Attribute.Text;
    introductionToTheFirm: Schema.Attribute.Text;
    leadPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
    leaveYourDetailsAndWeWillContactYouTo: Schema.Attribute.Text;
    meetTheFirm: Schema.Attribute.Text;
    morePracticeAreas: Schema.Attribute.Text;
    notSureWhichLegalPathFitsYourCase: Schema.Attribute.Text;
    practiceAreaIntroduction: Schema.Attribute.Text;
    practiceAreas: Schema.Attribute.Text;
    relatedServices: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPracticeAreasPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_practice_areas_page_cb7fc6';
  info: {
    displayName: 'Practice Areas Page';
    icon: 'write';
  };
  attributes: {
    exploreKALawsPracticeAreasIncludingRealEstateInheritance: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    practiceAreas: Schema.Attribute.Text;
    practiceAreasKALaws: Schema.Attribute.Text;
    theFirmSCorePracticeAreasAndHowThey: Schema.Attribute.Text;
    whichPracticeAreaDoYouNeed: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPressMentions extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_press_mentions_387077';
  info: {
    displayName: 'Press Mentions';
    icon: 'write';
  };
  attributes: {
    eyebrow: Schema.Attribute.Text;
    latestCoverage: Schema.Attribute.Text;
    mediaSource: Schema.Attribute.Text;
    mediaTypes: Schema.Attribute.Component<
      'website-texts.press-mentions-media-types',
      false
    >;
    press: Schema.Attribute.Text;
    readCoverage: Schema.Attribute.Text;
    viewAllCoverage: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPressMentionsMediaTypes
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_press_mentions_media_types_e63c2d';
  info: {
    displayName: 'Press Mentions Media Types';
    icon: 'write';
  };
  attributes: {
    article: Schema.Attribute.Text;
    interview: Schema.Attribute.Text;
    opinion: Schema.Attribute.Text;
    panel: Schema.Attribute.Text;
    podcast: Schema.Attribute.Text;
    radio: Schema.Attribute.Text;
    tv: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPressPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_press_page_b0fde5';
  info: {
    displayName: 'Press Page';
    icon: 'write';
  };
  attributes: {
    home: Schema.Attribute.Text;
    mediaCoverageInterviewsAndProfessionalPublicationsFeaturingAttorneyKarin: Schema.Attribute.Text;
    press: Schema.Attribute.Text;
    pressKarinAmsalemAttorney: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsPrivacyPolicyPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_privacy_policy_page_05c07e';
  info: {
    displayName: 'Privacy Policy Page';
    icon: 'write';
  };
  attributes: {
    home: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsRecentPosts extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_recent_posts_951931';
  info: {
    displayName: 'Recent Posts';
    icon: 'write';
  };
  attributes: {
    minRead: Schema.Attribute.Text;
    noArticlesToDisplayYet: Schema.Attribute.Text;
    read: Schema.Attribute.Text;
    readMore: Schema.Attribute.Text;
    recentArticles: Schema.Attribute.Text;
    viewAllArticles: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsRelatedServiceContent
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_related_service_content_239ec2';
  info: {
    displayName: 'Related Service Content';
    icon: 'write';
  };
  attributes: {
    practiceArea: Schema.Attribute.Text;
    relatedArticles: Schema.Attribute.Text;
    relatedPractices: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsRichContent extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_rich_content_687b08';
  info: {
    displayName: 'Rich Content';
    icon: 'write';
  };
  attributes: {
    onThisPage: Schema.Attribute.Text;
    pageNavigationLabel: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsScrollComponent extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_scroll_component_81c15e';
  info: {
    displayName: 'Scroll Component';
    icon: 'write';
  };
  attributes: {
    scrollBackward: Schema.Attribute.Text;
    scrollForward: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSectors extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_sectors_7da00c';
  info: {
    displayName: 'Sectors';
    icon: 'write';
  };
  attributes: {
    sector: Schema.Attribute.Text;
    viewFullDetails: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSectorsDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_sectors_detail_page_a649fd';
  info: {
    displayName: 'Sectors Detail Page';
    icon: 'write';
  };
  attributes: {
    bookAConsultation: Schema.Attribute.Text;
    focusedBusinessConversation: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    leadPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
    leaveYourDetailsAndWeWillContactYouTo: Schema.Attribute.Text;
    moreSectors: Schema.Attribute.Text;
    sectors: Schema.Attribute.Text;
    tellUsWhatIsAtStakeWeWillUnderstand: Schema.Attribute.Text;
    understandTheRisksAgreementsAndLegalDecisionsThatCharacterize: Schema.Attribute.Text;
    wantToReviewADecisionBeforeMovingForward: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSectorsPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_sectors_page_926749';
  info: {
    displayName: 'Sectors Page';
    icon: 'write';
  };
  attributes: {
    exploreTheSectorsServedByKALawsAndHow: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    industrySectorsKALaws: Schema.Attribute.Text;
    legalCounselDiffersFromOneIndustryToAnotherExplore: Schema.Attribute.Text;
    sectors: Schema.Attribute.Text;
    whichSectorDoYouOperateIn: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsServicesDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_services_detail_page_270cf8';
  info: {
    displayName: 'Services Detail Page';
    icon: 'write';
  };
  attributes: {
    aBriefIntroductionToOurFirm: Schema.Attribute.Text;
    aShortIntroductionToOurProcessHowTheInitial: Schema.Attribute.Text;
    beforeYouBegin: Schema.Attribute.Text;
    bookAConsultation: Schema.Attribute.Text;
    exploreMoreServices: Schema.Attribute.Text;
    focusedConsultation: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    introductionToTheFirm: Schema.Attribute.Text;
    keyQuestionsToClarifyDocumentsToPrepareAndThe: Schema.Attribute.Text;
    leadPoints: Schema.Attribute.Component<'website-texts.text-item', true>;
    leaveYourDetailsAndWeWillContactYouTo: Schema.Attribute.Text;
    mainPracticeArea: Schema.Attribute.Text;
    ourServices: Schema.Attribute.Text;
    practiceHubDescription: Schema.Attribute.Text;
    tellUsBrieflyWhatIsAtStakeWeWill: Schema.Attribute.Text;
    viewPracticeArea: Schema.Attribute.Text;
    wantToUnderstandTheRightNextStep: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsServicesPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_services_page_328db9';
  info: {
    displayName: 'Services Page';
    icon: 'write';
  };
  attributes: {
    chooseTheTopicThatBestDescribesYourTransactionDispute: Schema.Attribute.Text;
    exploreKALawsLegalServicesInRealEstateTransactions: Schema.Attribute.Text;
    heroHighlights: Schema.Attribute.Component<'website-texts.text-item', true>;
    home: Schema.Attribute.Text;
    legalServicesKALaws: Schema.Attribute.Text;
    ourServices: Schema.Attribute.Text;
    selectTheRelevantLegalIssue: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSignature extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_signature_7c6ca5';
  info: {
    displayName: 'Signature';
    icon: 'write';
  };
  attributes: {
    clear: Schema.Attribute.Text;
    defaultAcceptanceText: Schema.Attribute.Text;
    document: Schema.Attribute.Text;
    documentToSign: Schema.Attribute.Text;
    electronicConsent: Schema.Attribute.Text;
    failed: Schema.Attribute.Text;
    loading: Schema.Attribute.Text;
    readConsent: Schema.Attribute.Text;
    received: Schema.Attribute.Text;
    receivedDescription: Schema.Attribute.Text;
    sentSuccess: Schema.Attribute.Text;
    signAndSend: Schema.Attribute.Text;
    signature: Schema.Attribute.Text;
    statuses: Schema.Attribute.Component<
      'website-texts.signature-statuses',
      false
    >;
    unavailable: Schema.Attribute.Text;
    validationError: Schema.Attribute.Text;
    verificationAndSignature: Schema.Attribute.Text;
    verificationCode: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSignatureStatuses extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_signature_statuses_11a0ea';
  info: {
    displayName: 'Signature Statuses';
    icon: 'write';
  };
  attributes: {
    completed: Schema.Attribute.Text;
    lawyer_review: Schema.Attribute.Text;
    opened: Schema.Attribute.Text;
    sent: Schema.Attribute.Text;
    signed: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsStructuredData extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_structured_data_98fd63';
  info: {
    displayName: 'Structured Data';
    icon: 'write';
  };
  attributes: {
    aboutKarinAmsalem: Schema.Attribute.Text;
    aboutTopics: Schema.Attribute.Component<'website-texts.text-item', true>;
    articles: Schema.Attribute.Text;
    attorneyAtLaw: Schema.Attribute.Text;
    israel: Schema.Attribute.Text;
    knowsAbout: Schema.Attribute.Component<'website-texts.text-item', true>;
    legalServiceDescription: Schema.Attribute.Text;
    northDistrict: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSuccessCasePageClient
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_success_case_page_client_d68c3a';
  info: {
    displayName: 'Success Case Page Client';
    icon: 'write';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    editorialNote: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    legalStrategy: Schema.Attribute.Text;
    outcome: Schema.Attribute.Text;
    practiceAreas: Schema.Attribute.Text;
    relatedLinks: Schema.Attribute.Text;
    relatedServices: Schema.Attribute.Text;
    whyItMatters: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSuccessCasesDetailPage
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_success_cases_detail_page_a69744';
  info: {
    displayName: 'Success Cases Detail Page';
    icon: 'write';
  };
  attributes: {
    fallbackMetaDescription: Schema.Attribute.Text;
    fallbackMetaTitle: Schema.Attribute.Text;
    successStoryNotFoundKALaws: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSuccessCasesPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_success_cases_page_e8e827';
  info: {
    displayName: 'Success Cases Page';
    icon: 'write';
  };
  attributes: {
    exploreSelectedKALawsSuccessStoriesAndTheLegal: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    successStoriesKALaws: Schema.Attribute.Text;
    successStoriesWillAppearHereOnceTheyArePublished: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsSuccessCasesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_success_cases_section_a8dbcf';
  info: {
    displayName: 'Success Cases Section';
    icon: 'write';
  };
  attributes: {
    defaultArchiveLabel: Schema.Attribute.Text;
    defaultEyebrow: Schema.Attribute.Text;
    defaultTitle: Schema.Attribute.Text;
    labels: Schema.Attribute.Component<
      'website-texts.success-cases-section-labels',
      false
    >;
  };
}

export interface WebsiteTextsSuccessCasesSectionLabels
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_success_cases_section_labels_7db1ad';
  info: {
    displayName: 'Success Cases Section Labels';
    icon: 'write';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    legalMove: Schema.Attribute.Text;
    readCase: Schema.Attribute.Text;
    readFullCase: Schema.Attribute.Text;
    result: Schema.Attribute.Text;
    whyItMatters: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsTeamMembersDetailPage
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_team_members_detail_page_0ef7a7';
  info: {
    displayName: 'Team Members Detail Page';
    icon: 'write';
  };
  attributes: {
    articlesBy: Schema.Attribute.Text;
    home: Schema.Attribute.Text;
    ourTeam: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsTeamMembersHero extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_team_members_hero_ba9f2a';
  info: {
    displayName: 'Team Members Hero';
    icon: 'write';
  };
  attributes: {
    callName: Schema.Attribute.Text;
    defaultImageAlt: Schema.Attribute.Text;
    emailName: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsTeamMembersPage extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_team_members_page_1964ec';
  info: {
    displayName: 'Team Members Page';
    icon: 'write';
  };
  attributes: {
    home: Schema.Attribute.Text;
    meetTheKALawsTeamAndLearnAboutTheir: Schema.Attribute.Text;
    ourTeam: Schema.Attribute.Text;
    ourTeamKALaws: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsTermsAndConditionsPage
  extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_terms_and_conditions_page_264565';
  info: {
    displayName: 'Terms And Conditions Page';
    icon: 'write';
  };
  attributes: {
    home: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsTextItem extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsVideo extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_video_848784';
  info: {
    displayName: 'Video';
    icon: 'write';
  };
  attributes: {
    playTitle: Schema.Attribute.Text;
    youtubeConsent: Schema.Attribute.Text;
  };
}

export interface WebsiteTextsWebMcpContactTool extends Struct.ComponentSchema {
  collectionName: 'components_website_texts_web_mcp_contact_tool_af5952';
  info: {
    displayName: 'Web Mcp Contact Tool';
    icon: 'write';
  };
  attributes: {
    submissionError: Schema.Attribute.Text;
    submissionSuccess: Schema.Attribute.Text;
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
      'government-page.assurance': GovernmentPageAssurance;
      'government-page.assurance-translation': GovernmentPageAssuranceTranslation;
      'government-page.assurance-translation-items-item': GovernmentPageAssuranceTranslationItemsItem;
      'government-page.case-study': GovernmentPageCaseStudy;
      'government-page.case-study-translation': GovernmentPageCaseStudyTranslation;
      'government-page.challenges': GovernmentPageChallenges;
      'government-page.challenges-translation': GovernmentPageChallengesTranslation;
      'government-page.challenges-translation-items-item': GovernmentPageChallengesTranslationItemsItem;
      'government-page.comparison': GovernmentPageComparison;
      'government-page.comparison-translation': GovernmentPageComparisonTranslation;
      'government-page.comparison-translation-rows-item': GovernmentPageComparisonTranslationRowsItem;
      'government-page.cta': GovernmentPageCta;
      'government-page.cta-translation': GovernmentPageCtaTranslation;
      'government-page.discovery': GovernmentPageDiscovery;
      'government-page.discovery-translation': GovernmentPageDiscoveryTranslation;
      'government-page.discovery-translation-steps-item': GovernmentPageDiscoveryTranslationStepsItem;
      'government-page.faq': GovernmentPageFaq;
      'government-page.faq-translation': GovernmentPageFaqTranslation;
      'government-page.faq-translation-items-item': GovernmentPageFaqTranslationItemsItem;
      'government-page.footer-form': GovernmentPageFooterForm;
      'government-page.footer-form-translation': GovernmentPageFooterFormTranslation;
      'government-page.hero': GovernmentPageHero;
      'government-page.hero-translation': GovernmentPageHeroTranslation;
      'government-page.hero-translation-form': GovernmentPageHeroTranslationForm;
      'government-page.hero-translation-form-validation': GovernmentPageHeroTranslationFormValidation;
      'government-page.hero-translation-stats-item': GovernmentPageHeroTranslationStatsItem;
      'government-page.metadata': GovernmentPageMetadata;
      'government-page.method': GovernmentPageMethod;
      'government-page.method-translation': GovernmentPageMethodTranslation;
      'government-page.method-translation-steps-item': GovernmentPageMethodTranslationStepsItem;
      'government-page.obstacles': GovernmentPageObstacles;
      'government-page.obstacles-translation': GovernmentPageObstaclesTranslation;
      'government-page.programs': GovernmentPagePrograms;
      'government-page.programs-translation': GovernmentPageProgramsTranslation;
      'government-page.programs-translation-programs-item': GovernmentPageProgramsTranslationProgramsItem;
      'government-page.solution-strip': GovernmentPageSolutionStrip;
      'government-page.solution-strip-translation': GovernmentPageSolutionStripTranslation;
      'government-page.solution-strip-translation-items-item': GovernmentPageSolutionStripTranslationItemsItem;
      'government-page.suitability': GovernmentPageSuitability;
      'government-page.suitability-translation': GovernmentPageSuitabilityTranslation;
      'government-page.testimonials': GovernmentPageTestimonials;
      'government-page.testimonials-translation': GovernmentPageTestimonialsTranslation;
      'government-page.testimonials-translation-items-item': GovernmentPageTestimonialsTranslationItemsItem;
      'government-page.text-item': GovernmentPageTextItem;
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
      'website-texts.about-page': WebsiteTextsAboutPage;
      'website-texts.about-page-client': WebsiteTextsAboutPageClient;
      'website-texts.accessibility-page': WebsiteTextsAccessibilityPage;
      'website-texts.app-modal': WebsiteTextsAppModal;
      'website-texts.article-author-badge': WebsiteTextsArticleAuthorBadge;
      'website-texts.articles-detail-page': WebsiteTextsArticlesDetailPage;
      'website-texts.articles-grid': WebsiteTextsArticlesGrid;
      'website-texts.articles-hero': WebsiteTextsArticlesHero;
      'website-texts.articles-page': WebsiteTextsArticlesPage;
      'website-texts.consult-detail-page': WebsiteTextsConsultDetailPage;
      'website-texts.consult-page': WebsiteTextsConsultPage;
      'website-texts.contact-us-form': WebsiteTextsContactUsForm;
      'website-texts.cookie-consent': WebsiteTextsCookieConsent;
      'website-texts.footer': WebsiteTextsFooter;
      'website-texts.global-contact-cta': WebsiteTextsGlobalContactCta;
      'website-texts.google-reviews-mini': WebsiteTextsGoogleReviewsMini;
      'website-texts.google-reviews-section': WebsiteTextsGoogleReviewsSection;
      'website-texts.header': WebsiteTextsHeader;
      'website-texts.hero': WebsiteTextsHero;
      'website-texts.home-page': WebsiteTextsHomePage;
      'website-texts.landing-page': WebsiteTextsLandingPage;
      'website-texts.locations-detail-page': WebsiteTextsLocationsDetailPage;
      'website-texts.locations-page': WebsiteTextsLocationsPage;
      'website-texts.login': WebsiteTextsLogin;
      'website-texts.not-found': WebsiteTextsNotFound;
      'website-texts.our-services': WebsiteTextsOurServices;
      'website-texts.our-team': WebsiteTextsOurTeam;
      'website-texts.page-intro-video': WebsiteTextsPageIntroVideo;
      'website-texts.page-lead-section': WebsiteTextsPageLeadSection;
      'website-texts.pages-hero': WebsiteTextsPagesHero;
      'website-texts.practice-areas': WebsiteTextsPracticeAreas;
      'website-texts.practice-areas-detail-page': WebsiteTextsPracticeAreasDetailPage;
      'website-texts.practice-areas-page': WebsiteTextsPracticeAreasPage;
      'website-texts.press-mentions': WebsiteTextsPressMentions;
      'website-texts.press-mentions-media-types': WebsiteTextsPressMentionsMediaTypes;
      'website-texts.press-page': WebsiteTextsPressPage;
      'website-texts.privacy-policy-page': WebsiteTextsPrivacyPolicyPage;
      'website-texts.recent-posts': WebsiteTextsRecentPosts;
      'website-texts.related-service-content': WebsiteTextsRelatedServiceContent;
      'website-texts.rich-content': WebsiteTextsRichContent;
      'website-texts.scroll-component': WebsiteTextsScrollComponent;
      'website-texts.sectors': WebsiteTextsSectors;
      'website-texts.sectors-detail-page': WebsiteTextsSectorsDetailPage;
      'website-texts.sectors-page': WebsiteTextsSectorsPage;
      'website-texts.services-detail-page': WebsiteTextsServicesDetailPage;
      'website-texts.services-page': WebsiteTextsServicesPage;
      'website-texts.signature': WebsiteTextsSignature;
      'website-texts.signature-statuses': WebsiteTextsSignatureStatuses;
      'website-texts.structured-data': WebsiteTextsStructuredData;
      'website-texts.success-case-page-client': WebsiteTextsSuccessCasePageClient;
      'website-texts.success-cases-detail-page': WebsiteTextsSuccessCasesDetailPage;
      'website-texts.success-cases-page': WebsiteTextsSuccessCasesPage;
      'website-texts.success-cases-section': WebsiteTextsSuccessCasesSection;
      'website-texts.success-cases-section-labels': WebsiteTextsSuccessCasesSectionLabels;
      'website-texts.team-members-detail-page': WebsiteTextsTeamMembersDetailPage;
      'website-texts.team-members-hero': WebsiteTextsTeamMembersHero;
      'website-texts.team-members-page': WebsiteTextsTeamMembersPage;
      'website-texts.terms-and-conditions-page': WebsiteTextsTermsAndConditionsPage;
      'website-texts.text-item': WebsiteTextsTextItem;
      'website-texts.video': WebsiteTextsVideo;
      'website-texts.web-mcp-contact-tool': WebsiteTextsWebMcpContactTool;
    }
  }
}
