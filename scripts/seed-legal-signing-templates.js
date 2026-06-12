'use strict';

const templates = [
  {
    body: `אני החתום/ה מטה, {{clientName}}, ת.ז. {{clientIdNumber}}, מייפה בזאת את כוחה של קרין אמסלם, עורכת דין, לפעול בשמי ובמקומי בקשר לתיק {{caseNumber}} ולעניין {{matterDescription}}.\n\nייפוי כוח זה ניתן לצורך טיפול משפטי, קבלת מידע, הכנת מסמכים, פניה לגורמים רלוונטיים ונקיטת פעולות הנדרשות לקידום הטיפול בתיק, בכפוף לדין ולכל דרישת אימות נוספת שתידרש על ידי גוף חיצוני.`,
    category: 'power_of_attorney',
    isActive: true,
    legalNotes: 'לא להשתמש לייפוי כוח מתמשך, בלתי חוזר או מקרקעין בלי בדיקה משפטית פרטנית.',
    requiredFields: [
      { key: 'clientName', label: 'שם מלא', required: true },
      { key: 'clientIdNumber', label: 'תעודת זהות', required: true },
      { key: 'caseNumber', label: 'מספר תיק', required: false },
      { key: 'matterDescription', label: 'תיאור עניין', required: true },
    ],
    riskLevel: 'medium',
    signatureLevel: 'otp',
    slug: 'general-power-of-attorney',
    title: 'ייפוי כוח כללי לייצוג',
  },
  {
    body: `הסכם שכר טרחה בין משרד עורכת דין קרין אמסלם לבין {{clientName}}, ת.ז. {{clientIdNumber}}.\n\nהמשרד יעניק ללקוח שירות משפטי בנושא {{matterDescription}}. שכר הטרחה יעמוד על {{feeAmount}} בתוספת מע"מ כדין, וישולם לפי התנאים הבאים: {{paymentTerms}}.\n\nהלקוח מאשר כי קרא את ההסכם, הבין את תנאיו, וקיבל הזדמנות לשאול שאלות לפני החתימה.`,
    category: 'fee_agreement',
    isActive: true,
    legalNotes: 'תבנית בסיסית. יש להתאים את תנאי שכר הטרחה לכל תיק.',
    requiredFields: [
      { key: 'clientName', label: 'שם מלא', required: true },
      { key: 'clientIdNumber', label: 'תעודת זהות', required: true },
      { key: 'matterDescription', label: 'נושא הטיפול', required: true },
      { key: 'feeAmount', label: 'שכר טרחה', required: true },
      { key: 'paymentTerms', label: 'תנאי תשלום', required: true },
    ],
    riskLevel: 'medium',
    signatureLevel: 'otp',
    slug: 'legal-fee-agreement',
    title: 'הסכם שכר טרחה',
  },
];

async function seedLegalSigningTemplates(strapi) {
  for (const template of templates) {
    const existing = await strapi.documents('api::legal-document-template.legal-document-template').findFirst({
      filters: { slug: template.slug },
    });

    if (existing?.documentId) {
      await strapi.documents('api::legal-document-template.legal-document-template').update({
        data: template,
        documentId: existing.documentId,
      });
      strapi.log.info(`Updated legal signing template ${template.slug}`);
      continue;
    }

    await strapi.documents('api::legal-document-template.legal-document-template').create({
      data: template,
    });
    strapi.log.info(`Created legal signing template ${template.slug}`);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'info';

  await seedLegalSigningTemplates(app);
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
