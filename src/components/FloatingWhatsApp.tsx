import { GENERAL_WHATSAPP_URL } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="לשליחת הודעה לתום ברנוי בוואטסאפ"
      title="לתיאום בוואטסאפ"
      className="group fixed bottom-4 end-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg shadow-green-900/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#15803D] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 sm:bottom-5 sm:end-5 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute end-full me-3 hidden whitespace-nowrap rounded-lg border border-slate-700/80 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 sm:block"
      >
        לתיאום בוואטסאפ
      </span>
    </a>
  );
}
