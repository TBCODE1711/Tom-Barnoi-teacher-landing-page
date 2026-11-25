import { Phone } from 'lucide-react';
import {
  GENERAL_WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FinalCtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-bl from-[#0F172A] via-[#1E3A8A] to-[#1D4ED8] py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 math-grid-bg-dark"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
          רוצים לבנות בסיס חזק ולהרגיש בטוחים לפני המבחן הבא?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
          שלחו לי הודעה קצרה בוואטסאפ עם הכיתה, המקצוע (מתמטיקה או פיזיקה) ומה
          המטרה שלכם – ונמצא יחד משבצת נוחה לשיעור ניסיון או לשיחת היכרות קצרה.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-5">
          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#16A34A] px-8 py-4 text-base font-bold text-white shadow-lg shadow-slate-950/25 transition-all hover:-translate-y-0.5 hover:bg-[#15803D] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3A8A] sm:w-auto sm:text-lg"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>לשליחת הודעה בוואטסאפ</span>
          </a>

          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-blue-100 sm:text-base">
            <Phone className="h-4 w-4 text-blue-200" aria-hidden="true" />
            <span>טלפון / וואטסאפ:</span>
            <a
              href={PHONE_TEL_HREF}
              dir="ltr"
              className="inline-block font-bold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-blue-100 hover:decoration-white"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
