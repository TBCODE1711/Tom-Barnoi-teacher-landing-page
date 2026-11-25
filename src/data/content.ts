export const PHONE_DISPLAY = '058-479-1360';
export const PHONE_INTERNATIONAL = '972584791360';
export const PHONE_TEL_HREF = 'tel:+972584791360';

export const GENERAL_WHATSAPP_MESSAGE =
  'היי תום, הגעתי דרך האתר שלך ואשמח לפרטים על שיעור פרטי במתמטיקה/פיזיקה.';

export function createWhatsAppUrl(message: string = GENERAL_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${PHONE_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_WHATSAPP_URL = createWhatsAppUrl();

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'למי זה מתאים', href: '#audience' },
  { label: 'איך הליווי עובד', href: '#how-it-works' },
  { label: 'קצת עליי', href: '#about' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'חבילות ומחירים', href: '#pricing' },
];

export const HERO_TRUST_ITEMS = [
  { id: 'zoom', text: 'שיעורים בזום עם לוח דיגיטלי חי' },
  { id: 'drive', text: 'תיקיית Drive אישית עם הקלטות וסיכומים' },
  { id: 'whatsapp', text: 'מענה לשאלות בוואטסאפ בין השיעורים' },
] as const;

export interface AudienceCardItem {
  id: 'middle-school' | 'high-school' | 'preparatory';
  title: string;
  description: string;
  badge: string;
}

export const AUDIENCE_CARDS: AudienceCardItem[] = [
  {
    id: 'middle-school',
    badge: 'כיתות ח׳–ט׳',
    title: 'תלמידי חטיבת ביניים (כיתות ח\'–ט\') – מתמטיקה ופיזיקה',
    description:
      'בניית בסיס יציב, סגירת פערים מוקדמים והכנה חלקה לקראת המעבר לתיכון.',
  },
  {
    id: 'high-school',
    badge: '3–5 יח״ל',
    title: 'תלמידי תיכון (כיתות י\'–י"ב) – מתמטיקה ופיזיקה (3–5 יח"ל)',
    description:
      'ליווי שוטף לאורך השנה, חיזוק ההבנה והכנה ממוקדת למבחנים ולבחינות הבגרות.',
  },
  {
    id: 'preparatory',
    badge: 'מתמטיקה',
    title: 'תלמידי מכינות קדם-אקדמיות – מתמטיקה בלבד',
    description:
      'התמודדות עם הקצב האינטנסיבי של המכינה, הבנת עומק ושיטות פתרון מסודרות למבחנים.',
  },
];

export interface ProcessStepItem {
  number: number;
  id: 'prep' | 'whiteboard' | 'drive' | 'support';
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: 1,
    id: 'prep',
    title: 'הכנה מראש (עד 48 שעות לפני השיעור)',
    description:
      'שולחים אליי תרגילים מהכיתה או מהספר – ואם אין, פשוט רשימה מפורטת של הנושאים שרוצים לעבור עליהם. כך אני מגיע מוכן ואנחנו מנצלים 100% מזמן השיעור ללמידה נטו.',
  },
  {
    number: 2,
    id: 'whiteboard',
    title: 'שיעור אקטיבי בזום על לוח דיגיטלי',
    description:
      'השיעור מתנהל על גבי לוח דיגיטלי שהתלמיד רואה בזמן אמת. במקום הרצאה חד-צדדית, התלמיד שותף מלא בפתרון התרגילים כדי לוודא שהחומר באמת מובן.',
  },
  {
    number: 3,
    id: 'drive',
    title: 'תיקיית Google Drive אישית ומסודרת',
    description:
      'לכל תלמיד נפתחת תיקייה משותפת שבה נשמרים באופן מסודר כל חומרי הלימוד, קובצי הלוח מכל שיעור והקלטות השיעורים – זמינים לחזרה בכל רגע לפני מבחן.',
  },
  {
    number: 4,
    id: 'support',
    title: 'מענה לשאלות בין השיעורים',
    description:
      'נתקעתם בתרגיל בשיעורי הבית? אפשר לשלוח שאלה חופשי בוואטסאפ ולקבל הכוונה בהתאם לזמינות שלי, כדי שלא תיתקעו לבד עד השיעור הבא.',
  },
];

export const ABOUT_PARAGRAPHS = [
  'סטודנט למדעי המחשב באוניברסיטה הפתוחה ובוגר 5 יחידות במתמטיקה ובפיזיקה.',
  'בגלל שאני סטודנט בעצמי, אני יודע בדיוק איך זה מרגיש להיתקל בחומר חדש שנראה מאיים, להיתקע על תרגיל – ומה באמת צריך כדי שייפול האסימון.',
  'בשיעורים איתי אין סיבוכים מיותרים: אני מפרק כל נושא לשלבים פשוטים וברורים, מסביר בגובה העיניים ובשפה פשוטה, ונותן דרכי עבודה פרקטיות ("תכל\'ס") לגשת לכל שאלה במבחן. חשוב לי לערב את התלמיד לאורך כל הדרך ולעבור על כל פרט בסבלנות עד להבנה מלאה – כי המטרה שלי היא לא רק ציון טוב במבחן הקרוב, אלא לבנות ביטחון עצמי ותחושת מסוגלות שיישארו גם כשפותרים תרגילים לגמרי לבד.',
] as const;

export const ABOUT_HIGHLIGHTS = [
  { id: 'cs', label: 'סטודנט למדעי המחשב – האוניברסיטה הפתוחה' },
  { id: 'bagrut', label: 'בוגר 5 יח"ל מתמטיקה ופיזיקה' },
  { id: 'style', label: 'הסבר בגובה העיניים ובשפה פשוטה' },
] as const;

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  initial: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ortal',
    quote:
      '"הבן שלי התחיל ללמוד עם תום בכיתה י\' כשהוא כמעט ולא הבין כלום בפיזיקה וכבר איבד עניין במקצוע. תום הצליח להתחבר אליו מהר מאוד, עבד איתו בסבלנות ובצורה מסודרת, ולאחר כמה חודשי ליווי ראינו שיפור אדיר – גם בשליטה בחומר וגם בגישה ובביטחון העצמי שלו. הציון שלו קפץ מ-15 ל-75. ממליצה עליו בחום לכל הורה!"',
    author: 'אורטל, אמא לתלמיד כיתה י\'',
    initial: 'א',
  },
  {
    id: 'nofar',
    quote:
      '"למדתי עם תום במהלך החופש הגדול, אחרי שהחסרתי המון שיעורים בכיתה ח\' וצברתי פערים ממש גדולים במתמטיקה. תום עבר איתי על כל החומר מההתחלה, הסביר כל נושא בצורה ממש ברורה ובגובה העיניים, ותמיד וידא שאני באמת מבינה לפני שממשיכים. בזכותו הגעתי לכיתה ט\' כשאני יודעת את כל החומר ומרגישה הרבה יותר בטוחה בשיעורים."',
    author: 'נופר, תלמידת כיתה ט\'',
    initial: 'נ',
  },
];

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  perHourNote?: string;
  badge?: string;
  featured?: boolean;
  ctaLabel: string;
  whatsappUrl: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'trial',
    name: 'שיעור ניסיון (חד-פעמי)',
    price: '80 ש"ח',
    ctaLabel: 'לתיאום שיעור ניסיון',
    whatsappUrl: createWhatsAppUrl(
      'היי תום, הגעתי דרך האתר שלך ואשמח לתאם שיעור ניסיון במתמטיקה/פיזיקה.',
    ),
  },
  {
    id: 'single',
    name: 'שיעור בודד',
    price: '120 ש"ח',
    ctaLabel: 'לתיאום שיעור בודד',
    whatsappUrl: createWhatsAppUrl(
      'היי תום, הגעתי דרך האתר שלך ואשמח לתאם שיעור בודד במתמטיקה/פיזיקה.',
    ),
  },
  {
    id: 'pack-4',
    name: 'חבילת 4 שיעורים',
    price: '420 ש"ח',
    perHourNote: '105 ש"ח לשעה',
    ctaLabel: 'לתיאום 4 שיעורים',
    whatsappUrl: createWhatsAppUrl(
      'היי תום, הגעתי דרך האתר שלך ואשמח לפרטים ותיאום לגבי חבילת 4 שיעורים במתמטיקה/פיזיקה.',
    ),
  },
  {
    id: 'pack-8',
    name: 'חבילת 8 שיעורים',
    price: '800 ש"ח',
    perHourNote: '100 ש"ח לשעה',
    badge: 'המשתלמת ביותר',
    featured: true,
    ctaLabel: 'לתיאום 8 שיעורים',
    whatsappUrl: createWhatsAppUrl(
      'היי תום, הגעתי דרך האתר שלך ואשמח לפרטים ותיאום לגבי חבילת 8 שיעורים במתמטיקה/פיזיקה.',
    ),
  },
];

export interface PolicyPoint {
  label: string;
  text: string;
}

export const PACKAGE_TERMS: PolicyPoint[] = [
  {
    label: 'תוקף חבילת 4 שיעורים:',
    text: 'עד חודש ממועד השיעור הראשון בחבילה.',
  },
  {
    label: 'תוקף חבילת 8 שיעורים:',
    text: 'עד חודשיים ממועד השיעור הראשון בחבילה.',
  },
  {
    label: 'קצב השיעורים:',
    text: 'ניתן לתאם משבצת שבועית קבועה, וכן לתאם שיעורים נוספים מאותה החבילה בהתאם לפניות ביומן (למשל כתגבור לפני מבחנים).',
  },
  {
    label: 'הארכת תוקף החבילה:',
    text: 'ניתן להאריך את תוקף החבילה בתיאום ובבקשה מיוחדת מראש. בנוסף, במקרה של ביטול או דחייה של שיעור מצידי (למשל בעקבות מבחנים או אילוץ אישי), תוקף החבילה יוארך בהתאם באופן אוטומטי.',
  },
  {
    label: 'הפסקת חבילה באמצע:',
    text: 'במידה ותבחרו להפסיק חבילה לפני סיומה, השיעורים שכבר התקיימו יחושבו לפי מחיר של שיעור בודד (120 ש"ח לשיעור), והיתרה תוחזר בהתאם.',
  },
];

export const PAYMENT_POLICY: PolicyPoint[] = [
  {
    label: 'שיעור ניסיון או שיעור בודד:',
    text: 'התשלום יתבצע באותו היום, מיד לאחר סיום השיעור.',
  },
  {
    label: 'חבילות שיעורים:',
    text: 'התשלום עבור החבילה יתבצע מראש ובמלואו, לפני השיעור הראשון בחבילה.',
  },
  {
    label: 'אמצעי תשלום:',
    text: 'ביט או העברה בנקאית.',
  },
];

export interface AccordionEntry {
  id: string;
  title: string;
  content: string;
}

export const CANCELLATION_POLICY_ITEMS: AccordionEntry[] = [
  {
    id: 'cancel-notice',
    title: 'הודעה מראש על ביטול או שינוי',
    content:
      'ניתן לבטל או להזיז שיעור ללא עלות בהודעה של לפחות 24 שעות לפני מועד השיעור.',
  },
  {
    id: 'cancel-single',
    title: 'ביטול בשיעור בודד',
    content:
      'ביטול או אי-הגעה בהתראה של פחות מ-24 שעות יחויבו במחיר שיעור מלא.',
  },
  {
    id: 'cancel-package',
    title: 'ביטול בשיעור כחלק מחבילה',
    content:
      'ביטול או אי-הגעה בהתראה של פחות מ-24 שעות ייחשבו כשיעור שמומש וינוכו מיתרת החבילה.',
  },
  {
    id: 'lateness',
    title: 'איחורים לשיעור',
    content:
      'זמן ההמתנה המקסימלי לשיעור הוא 10 דקות. במידה והתלמיד לא התחבר לאחר 10 דקות, השיעור ייחשב כמבוטל ויחויב במלואו (או ינוכה מיתרת החבילה, בהתאם למדיניות הביטולים). במקרה של איחור במסגרת 10 הדקות, השיעור יסתיים בשעה המקורית שנקבעה.',
  },
  {
    id: 'prep-material',
    title: 'שליחת חומר לפני השיעור',
    content:
      'כדי להבטיח שיעור יעיל וממוקד, יש לשלוח תרגילים או רשימת נושאים לפחות 48 שעות לפני מועד השיעור. במידה ולא יישלח חומר מראש, השיעור יתקיים כרגיל ואלמד בו חומר ותרגול רלוונטיים שאכין בעצמי בהתאם לשיקול דעתי המקצועי ולקצב ההתקדמות של התלמיד.',
  },
];

export const FAQ_ITEMS: AccordionEntry[] = [
  {
    id: 'intro-call',
    title: 'אפשר לעשות שיחת היכרות קצרה לפני שמתחילים?',
    content:
      'בהחלט. למי שמעוניין, אפשר לקיים שיחת טלפון קצרה להיכרות, להבין בדיוק איפה התלמיד עומד ומה המטרות שלו, ולתאם משם שיעור ניסיון.',
  },
  {
    id: 'tech-requirements',
    title: 'מה נדרש מהתלמיד מבחינה טכנית לשיעור בזום?',
    content:
      'דרוש מחשב וחיבור אינטרנט יציב (יחד עם שמע ומיקרופון תקינים). מומלץ מאוד לא להתחבר מהטלפון הנייד כדי שניתן יהיה לראות את הלוח הדיגיטלי בצורה ברורה ונוחה לאורך כל השיעור.',
  },
];
