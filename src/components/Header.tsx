import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import {
  GENERAL_WHATSAPP_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL_HREF,
} from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo / Name */}
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-2.5 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 rounded-lg"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1D4ED8] text-sm font-extrabold text-white shadow-xs transition-colors group-hover:bg-[#1E40AF]"
            >
              תב
            </span>
            <span className="flex flex-col leading-tight sm:flex-row sm:items-center sm:gap-1.5">
              <span className="text-sm font-bold text-slate-900 sm:text-base">
                תום ברנוי
              </span>
              <span
                className="hidden font-normal text-slate-300 sm:inline"
                aria-hidden="true"
              >
                |
              </span>
              <span className="text-xs font-medium text-slate-600 sm:text-base sm:text-slate-700">
                מורה פרטי למתמטיקה ופיזיקה
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="ניווט ראשי"
            className="hidden items-center gap-6 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#1D4ED8] focus:outline-none focus-visible:text-[#1D4ED8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#15803D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>לתיאום בוואטסאפ</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="פתיחת תפריט ניווט"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile RTL Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-200 ${
          mobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel opening naturally from inline-start (right side in RTL) */}
        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="תפריט ניווט נייד"
          className={`fixed inset-y-0 start-0 flex w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-250 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1D4ED8] text-xs font-extrabold text-white"
              >
                תב
              </span>
              <span className="text-sm font-bold text-slate-900">תום ברנוי</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="סגירת תפריט ניווט"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="ניווט נייד" className="flex flex-1 flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50/70 hover:text-[#1D4ED8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-slate-100 p-5 space-y-3">
            <a
              href={GENERAL_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-base font-semibold text-white shadow-xs transition-colors hover:bg-[#15803D]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>לתיאום בוואטסאפ</span>
            </a>

            <a
              href={PHONE_TEL_HREF}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Phone className="h-4 w-4 text-[#1D4ED8]" aria-hidden="true" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
