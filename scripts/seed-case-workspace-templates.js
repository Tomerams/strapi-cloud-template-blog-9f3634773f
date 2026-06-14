'use strict';

const templates = [
  {
    defaultApprovalStatus: 'draft',
    defaultRiskLevel: 'medium',
    defaultStatus: 'new',
    description: 'תבנית עבודה לעסקת מכירת דירה: לקוח, נכס, עסקה, מסמכים, משימות וסימולציות במקום אחד.',
    fieldSchema: {
      property: [
        { key: 'propertyAddress', label: 'כתובת נכס', type: 'text' },
        { key: 'block', label: 'גוש', type: 'text' },
        { key: 'parcel', label: 'חלקה', type: 'text' },
        { key: 'rightType', label: 'סוג זכות', type: 'select', options: ['בעלות', 'חכירה', 'בר רשות', 'זכויות אגודה', 'זכויות רמ"י'] },
        { key: 'registeredAreaSqm', label: 'שטח רשום', type: 'number' },
        { key: 'builtAreaSqm', label: 'שטח בנוי', type: 'number' },
        { key: 'improvementLevyPotential', label: 'יש היטל השבחה פוטנציאלי', type: 'boolean' },
        { key: 'mortgage', label: 'יש משכנתה', type: 'boolean' },
        { key: 'hasBuildingRights', label: 'יש זכויות בנייה לבדיקה', type: 'boolean' },
      ],
      transaction: [
        { key: 'transactionType', label: 'סוג עסקה', type: 'select', options: ['מכירה', 'רכישה', 'העברה', 'מתנה', 'ירושה'], required: true },
        { key: 'originalPurchasePrice', label: 'מחיר רכישה מקורי', type: 'number' },
        { key: 'originalPurchaseDate', label: 'תאריך רכישה מקורי', type: 'date' },
        { key: 'salePrice', label: 'מחיר עסקה', type: 'number' },
        { key: 'saleDate', label: 'תאריך עסקה', type: 'date' },
        { key: 'sellerCount', label: 'מספר מוכרים', type: 'number', defaultValue: 1 },
        { key: 'sellerShares', label: 'שיעור בעלות', type: 'text' },
        { key: 'buyerCount', label: 'מספר רוכשים', type: 'number', defaultValue: 1 },
        { key: 'additionalConsideration', label: 'יש תמורות נוספות', type: 'boolean' },
        { key: 'conditionalPayments', label: 'יש תשלומים מותנים', type: 'boolean' },
        { key: 'movablesIncluded', label: 'כולל מיטלטלין', type: 'boolean' },
        { key: 'buildingRightsIncluded', label: 'כולל זכויות בנייה', type: 'boolean' },
        { key: 'combinationDeal', label: 'עסקת קומבינציה / שירותי בנייה', type: 'boolean' },
      ],
    },
    isActive: true,
    itemTemplates: [
      { itemType: 'document', title: 'נסח טאבו / אישור זכויות', status: 'missing', required: true, clientVisible: true },
      { itemType: 'document', title: 'הסכם רכישה מקורי', status: 'missing', required: true, clientVisible: true },
      { itemType: 'document', title: 'מסמכי משכנתה / סילוק', status: 'missing', required: false, clientVisible: true },
      { itemType: 'task', title: 'בדיקת זכויות ורישומים', status: 'open', owner: 'lawyer', clientVisible: false },
      { itemType: 'task', title: 'בדיקת חשיפת מס שבח והיטל השבחה', status: 'open', owner: 'lawyer', clientVisible: false },
      { itemType: 'scenario', title: 'סימולציית מס ראשונית', status: 'draft', owner: 'lawyer', clientVisible: false },
    ],
    workspaceType: 'sale_apartment',
    sections: [
      { key: 'overview', label: 'תמונת מצב' },
      { key: 'client-data', label: 'לקוח' },
      { key: 'property', label: 'נכס' },
      { key: 'transaction', label: 'עסקה' },
      { key: 'tax-simulations', label: 'סימולציות' },
      { key: 'documents', label: 'מסמכים' },
      { key: 'tasks', label: 'משימות' },
      { key: 'notes', label: 'הערות' },
      { key: 'reports', label: 'דוחות' },
    ],
    slug: 'real-estate-sale-apartment',
    title: 'מכירת דירה',
    version: 1,
    workflowSteps: ['קליטה', 'איסוף מסמכים', 'בדיקת זכויות', 'בדיקת מס', 'טיוטת הסכם', 'חתימה', 'דיווח ורישום'],
  },
  {
    defaultApprovalStatus: 'draft',
    defaultRiskLevel: 'high',
    defaultStatus: 'new',
    description: 'תבנית עבודה לנחלות ומשקים: זכויות רמ"י, אגודה, חריגות בנייה, דמי רכישה ומסמכי משפחה.',
    fieldSchema: {
      property: [
        { key: 'propertyAddress', label: 'כתובת / שם מושב', type: 'text' },
        { key: 'block', label: 'גוש', type: 'text' },
        { key: 'parcel', label: 'חלקה', type: 'text' },
        { key: 'rightType', label: 'סוג זכות', type: 'select', options: ['בר רשות', 'חכירה', 'זכויות אגודה', 'זכויות רמ"י'] },
        { key: 'registeredAreaSqm', label: 'שטח רשום', type: 'number' },
        { key: 'builtAreaSqm', label: 'שטח בנוי', type: 'number' },
        { key: 'hasBuildingRights', label: 'נדרשת בדיקת זכויות בנייה', type: 'boolean' },
        { key: 'improvementLevyPotential', label: 'יש חשיפת היטל השבחה', type: 'boolean' },
      ],
      transaction: [
        { key: 'transactionType', label: 'סוג עסקה', type: 'select', options: ['מכירה', 'רכישה', 'העברה', 'מתנה', 'ירושה'], required: true },
        { key: 'salePrice', label: 'מחיר עסקה', type: 'number' },
        { key: 'saleDate', label: 'תאריך עסקה', type: 'date' },
        { key: 'sellerShares', label: 'שיעור בעלות / יורשים', type: 'text' },
        { key: 'buildingRightsIncluded', label: 'כולל זכויות בנייה', type: 'boolean' },
        { key: 'combinationDeal', label: 'כולל רכיב בנייה / קומבינציה', type: 'boolean' },
      ],
    },
    isActive: true,
    itemTemplates: [
      { itemType: 'document', title: 'אישור זכויות רמ"י / הסכם משבצת', status: 'missing', required: true, clientVisible: true },
      { itemType: 'document', title: 'אישור אגודה / מסמכי אגודה', status: 'missing', required: true, clientVisible: true },
      { itemType: 'document', title: 'תיק בניין והיתרים', status: 'missing', required: true, clientVisible: true },
      { itemType: 'task', title: 'בדיקת דמי רכישה / דמי הסכמה', status: 'open', owner: 'lawyer', clientVisible: false },
      { itemType: 'task', title: 'בדיקת חריגות בנייה ושימושים', status: 'open', owner: 'lawyer', clientVisible: false },
      { itemType: 'scenario', title: 'סימולציית מיסוי נחלה', status: 'draft', owner: 'lawyer', clientVisible: false },
    ],
    workspaceType: 'sale_moshav_estate',
    sections: [
      { key: 'overview', label: 'תמונת מצב' },
      { key: 'client-data', label: 'לקוח' },
      { key: 'property', label: 'נחלה' },
      { key: 'transaction', label: 'עסקה' },
      { key: 'tax-simulations', label: 'סימולציות' },
      { key: 'documents', label: 'מסמכים' },
      { key: 'tasks', label: 'משימות' },
      { key: 'notes', label: 'הערות' },
      { key: 'reports', label: 'דוחות' },
    ],
    slug: 'moshav-estate-sale',
    title: 'מכירת נחלה',
    version: 1,
    workflowSteps: ['קליטה', 'מסמכי זכויות', 'אגודה ורמ"י', 'תכנון ובנייה', 'מיסוי', 'הסכם', 'דיווח והעברה'],
  },
];

async function seedCaseWorkspaceTemplates(strapi) {
  for (const template of templates) {
    const existing = await strapi.documents('api::case-workspace-template.case-workspace-template').findFirst({
      filters: { slug: template.slug },
    });

    if (existing?.documentId) {
      await strapi.documents('api::case-workspace-template.case-workspace-template').update({
        data: template,
        documentId: existing.documentId,
      });
      strapi.log.info(`Updated case workspace template ${template.slug}`);
      continue;
    }

    await strapi.documents('api::case-workspace-template.case-workspace-template').create({ data: template });
    strapi.log.info(`Created case workspace template ${template.slug}`);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'info';
  await seedCaseWorkspaceTemplates(app);
  await app.destroy();
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
