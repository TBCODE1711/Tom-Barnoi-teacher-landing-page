import { GENERAL_WHATSAPP_URL, PHONE_DISPLAY } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] pt-10 pb-22 text-slate-300 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-start">
          <p className="text-sm font-semibold text-white sm:text-base">
            תום ברנוי | מורה פרטי למתמטיקה ופיזיקה אונליין
          </p>

          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#22C55E]" />
            <span>וואטסאפ:</span>
            <span dir="ltr" className="inline-block font-semibold">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>

        <div className="mt-6 border-t border-slate-800/90 pt-6 text-center text-xs text-slate-400 sm:text-sm">
          © 2026 תום ברנוי. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}
