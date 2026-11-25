import { CalendarClock, Check, CreditCard, Sparkles } from 'lucide-react';
import {
  PACKAGE_TERMS,
  PAYMENT_POLICY,
  PRICING_TIERS,
} from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y border-slate-200/70 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            מחירון, חבילות ותנאי תשלום
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            משך כל שיעור הוא 60 דקות. ניתן לבחור בין שיעור בודד לבין חבילות
            ליווי מוזלות:
          </p>
        </div>

        {/* 4 Pricing Tiers */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col rounded-2xl bg-white p-6 pt-7 transition-all duration-200 ${
                tier.featured
                  ? 'border-2 border-[#1D4ED8] shadow-lg shadow-blue-900/10 ring-4 ring-blue-600/10'
                  : 'border border-slate-200/90 shadow-xs hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D4ED8] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{tier.badge}</span>
                  </span>
                </div>
              )}

              <div className="text-start">
                <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    {tier.price}
                  </span>
                </div>

                <div className="mt-2 min-h-7">
                  {tier.perHourNote ? (
                    <span
                      className={`inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${
                        tier.featured
                          ? 'bg-blue-50 text-[#1D4ED8]'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tier.perHourNote}
                    </span>
                  ) : (
                    <span className="inline-block text-xs font-medium text-slate-500">
                      שיעור בן 60 דקות
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="border-t border-slate-100 pt-5">
                  <a
                    href={tier.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 ${
                      tier.featured
                        ? 'bg-[#16A34A] text-white shadow-xs hover:bg-[#15803D]'
                        : 'border border-green-600/30 bg-green-50/70 text-green-800 hover:border-[#16A34A] hover:bg-[#16A34A] hover:text-white'
                    }`}
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    <span>{tier.ctaLabel}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Package Terms & Payment Policy Info Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Package Terms */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-7 lg:col-span-7">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                <CalendarClock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-start text-lg font-bold text-slate-900 sm:text-xl">
                תנאי החבילות
              </h3>
            </div>

            <ul className="space-y-4">
              {PACKAGE_TERMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-start">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    <strong className="font-bold text-slate-900">
                      {item.label}
                    </strong>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Policy */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-7 lg:col-span-5">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                <CreditCard className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-start text-lg font-bold text-slate-900 sm:text-xl">
                מדיניות תשלום
              </h3>
            </div>

            <ul className="space-y-4">
              {PAYMENT_POLICY.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-start">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1D4ED8]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    <strong className="font-bold text-slate-900">
                      {item.label}
                    </strong>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
