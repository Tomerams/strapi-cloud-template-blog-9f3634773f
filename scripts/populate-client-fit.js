/*
 * Adds the Dynamic Zone component `dynamic-zone.client-fit` to Hebrew service pages.
 * Usage: STRAPI_URL=... STRAPI_API_TOKEN=... node scripts/populate-client-fit.js --apply
 * Optional: --only=<service-friendly-url>
 */

const apiUrl = process.env.STRAPI_URL;
const token = process.env.STRAPI_API_TOKEN;
const apply = process.argv.includes("--apply");
const only = process.argv.find((argument) => argument.startsWith("--only="))?.slice("--only=".length);

if (!apiUrl || !token) {
  throw new Error("Set STRAPI_URL and STRAPI_API_TOKEN before running this script.");
}

const CONTENT_BY_PRACTICE = {
  "nahalot-moshavim-agricultural-farms": {
    intro: "הליווי מתאים למי שהנחלה או המשק הם נכס משפחתי מרכזי, וכשההחלטה משלבת זכויות מול רמ״י והאגודה, מסמכים, תכנון ויחסים בתוך המשפחה.",
    profiles: ["בעלי נחלות ומשקים לפני מכירה, העברה או הסדרת זכויות", "יורשים ואחים שמתמודדים עם בן ממשיך, צוואה או מחלוקת", "רוכשים שבודקים נחלה או בית בקיבוץ", "משפחות שצריכות לחבר רמ״י, אגודה, תכנון ומיסוי"]
  },
  "real-estate-law": {
    intro: "הליווי מתאים לקונים, מוכרים ובעלי נכסים כשהעסקה או המחלוקת כוללות סיכון ממשי, מסמכים לא פשוטים או החלטה שקשה להחזיר לאחור.",
    profiles: ["קונים ומוכרים לפני עסקה עם תנאים מיוחדים או רישום חסר", "יורשים, בני משפחה או שותפים שצריכים להסדיר נכס משותף", "משקיעים ובעלי עסקים שבוחנים נכס מסחרי או הסכם שיתוף", "מי שגילה בעיה במסמכי הנכס, בהיתר או בהתחייבות קיימת"]
  },
  "planning-and-building-law": {
    intro: "הליווי מתאים לבעלי זכויות שמבינים שהיתר, תוכנית, חריגה או דרישת תשלום עשויים להשפיע ישירות על שווי הנכס ועל היכולת לממש את התוכנית.",
    profiles: ["בעלי קרקע או נכס לפני בנייה, שינוי שימוש או מכירה", "מי שקיבלו החלטה או דרישה מוועדה מקומית או מרשות תכנון", "שכנים ובעלי זכויות שנפגעים מתוכנית או מבנייה סמוכה", "יזמים ובעלי עסקים שצריכים לבחון התאמה בין הפעילות, ההיתר והתכנון"]
  },
  "business-law": {
    intro: "הליווי מיועד לבעלי עסקים וחברות כשההחלטה העסקית תלויה גם בחוזים, זכויות, רגולציה או מערכת יחסים ארוכת טווח עם שותף, ספק או לקוח.",
    profiles: ["בעלי חברות ועסקים לפני הסכם, שותפות, השקעה או מחלוקת", "יזמים שצריכים להסדיר זכויות, אחריות, תשלומים ומנגנוני יציאה", "מנהלים שרוצים לחבר בין ההחלטה המסחרית לסיכון המשפטי", "עסקים שנדרשים לטפל בהתחייבות קיימת לפני שנוצר נזק גדול יותר"]
  },
  "tax-law": {
    intro: "הליווי מתאים למי שעומד לפני עסקה, העברה או קבלת זכויות ורוצה להבין את חבות המס והמסמכים הנדרשים לפני שההתחייבות נוצרת.",
    profiles: ["בעלי דירה, קרקע, נחלה או נכס מסחרי לפני עסקה או העברה", "יורשים ומשפחות שבוחנים חלוקה או העברה בין־דורית", "מי שקיבלו שומה, דרישת תשלום או מידע סותר", "לקוחות שרוצים לתכנן את המס כחלק מהמהלך ולא רק לאחר חתימה"]
  },
  "wills-estates-inheritance": {
    intro: "הליווי מתאים למשפחות וליורשים כשהנכס או העסק המשפחתי מחייבים החלטה זהירה, תיעוד מסודר והבנה של ההשלכות על כל בעלי העניין.",
    profiles: ["יורשים לפני חלוקה, מכירה או רישום של נכס מעיזבון", "משפחות עם נחלה, עסק או נכסים שלא ניתן פשוט לחלק", "מי שמתמודדים עם צוואה, בן ממשיך או מחלוקת בין אחים", "הורים שרוצים להסדיר העברה בין־דורית לפני שמתגלה סכסוך"]
  },
  "public-procurement-law": {
    intro: "הליווי מתאים לעסקים ולגופים שניגשים למכרז או זכו בו, כאשר טעות במסמך, תנאי סף או ניהול ההתקשרות עלולים לעלות בהזדמנות העסקית עצמה.",
    profiles: ["חברות, ספקים וקבלנים לפני הגשת הצעה או הבהרה", "זוכים שצריכים לנהל חוזה, בטוחות, אבני דרך וסיכונים", "מציעים שקיבלו החלטת פסילה, חילוט או דרישה בעייתית", "מנהלים שרוצים לבדוק את תנאי המכרז לפני השקעת זמן וכסף"]
  }
};

const DEFAULT_CONTENT = {
  intro: "הליווי מתאים למי שנדרש לקבל החלטה משפטית עם משמעות כלכלית, משפחתית או עסקית, ורוצה להבין את הסיכון, המסמכים והצעדים הבאים לפני שמתקדמים.",
  profiles: ["בעלי נכס, עסק או זכות שרוצים לקבל החלטה על בסיס תמונה מלאה", "משפחות, שותפים או יורשים שיש ביניהם יותר מבעל עניין אחד", "מי שמזהים פער בין מידע שקיבלו לבין מסמך, רישום או דרישה", "מי שנמצאים לפני חתימה, תשלום או מהלך שקשה להחזיר לאחור"]
};

const request = async (path, options = {}) => {
  const response = await fetch(`${apiUrl}${path}`, {
    ...options,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...options.headers }
  });

  if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  return response.json();
};

const main = async () => {
  const result = await request("/api/services?locale=he&status=draft&pagination[pageSize]=100&populate[sections][populate]=*&populate[practice_areas][fields][0]=friendlyUrl");
  const services = (result.data || []).filter((service) => !only || service.friendlyUrl === only);

  for (const service of services) {
    const existingSections = service.sections || [];
    if (existingSections.some((section) => section.__component === "dynamic-zone.client-fit")) {
      console.log(`skip ${service.friendlyUrl}: already has Client Fit`);
      continue;
    }

    const practiceSlug = service.practice_areas?.[0]?.friendlyUrl;
    const content = CONTENT_BY_PRACTICE[practiceSlug] || DEFAULT_CONTENT;
    const clientFit = {
      __component: "dynamic-zone.client-fit",
      eyebrow: "למי הליווי מתאים",
      heading: `למי מתאים ליווי בנושא ${service.title}`,
      intro: content.intro,
      profiles: content.profiles.map((text) => ({ text })),
      broadReviewTitle: "מתי חשוב לעצור לבדיקה רחבה יותר?",
      broadReviewText: "כשיש כמה בעלי עניין, יותר מרשות אחת, מסמכים שלא תואמים או מועד חתימה ותשלום קרוב.",
      ctaLabel: "בדקו איך נכון להתקדם במקרה שלכם"
    };

    if (!apply) {
      console.log(`dry run ${service.friendlyUrl}: ${clientFit.heading}`);
      continue;
    }

    await request(`/api/services/${service.documentId}?locale=he`, {
      method: "PUT",
      body: JSON.stringify({ data: { sections: [...existingSections, clientFit] } })
    });
    await request(`/api/services/${service.documentId}?locale=he&status=published`, {
      method: "PUT",
      body: JSON.stringify({ data: {} })
    });
    console.log(`updated ${service.friendlyUrl}`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
