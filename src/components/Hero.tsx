import { ArrowDown, FolderOpen, MessageCircle, Video } from 'lucide-react';
import { GENERAL_WHATSAPP_URL, HERO_TRUST_ITEMS } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

const trustIcons = {
  zoom: Video,
  drive: FolderOpen,
  whatsapp: MessageCircle,
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      {/* Subtle math-grid background with soft radial fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 math-grid-bg [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      />

      {/* Subtle geometric coordinate / parabola vector accents */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 500"
        fill="none"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full w-full max-w-6xl opacity-40"
      >
        <path
          d="M-60 420 Q 260 60 620 260 T 1260 120"
          stroke="#1D4ED8"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <circle
          cx="180"
          cy="140"
          r="90"
          stroke="#1D4ED8"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
        <circle
          cx="1040"
          cy="340"
          r="120"
          stroke="#1E40AF"
          strokeOpacity="0.07"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            שיעורים פרטיים במתמטיקה ובפיזיקה – להבין באמת, לא רק לשנן נוסחאות
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            ליווי שבועי מסודר אונליין בזום לתלמידי חטיבה, תיכון ומכינות. פירוק
            החומר לשלבים פשוטים, תרגול אקטיבי ובניית ביטחון אמיתי לקראת המבחנים
            והבגרויות.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#16A34A] px-7 py-4 text-base font-bold text-white shadow-md shadow-green-600/20 transition-all hover:-translate-y-0.5 hover:bg-[#15803D] hover:shadow-lg hover:shadow-green-600/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 sm:w-auto sm:text-lg"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>לשיחת היכרות ותיאום בוואטסאפ</span>
            </a>

            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition-all hover:border-[#1D4ED8]/40 hover:bg-blue-50/40 hover:text-[#1D4ED8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 sm:w-auto"
            >
              <span>לצפייה בחבילות ובמחירים</span>
              <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm backdrop-blur-xs sm:mt-16 sm:p-5">
          <ul className="grid grid-cols-1 divide-y divide-slate-100 md:grid-cols-3 md:divide-x md:divide-y-0">
            {HERO_TRUST_ITEMS.map((item) => {
              const Icon = trustIcons[item.id];
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3.5 py-3.5 first:pt-1 last:pb-1 md:justify-center md:px-5 md:py-1.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-start text-sm font-semibold text-slate-800 sm:text-[15px]">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
