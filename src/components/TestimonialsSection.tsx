import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            מה מספרים ההורים והתלמידים?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 shadow-xs sm:p-8"
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                </div>

                <blockquote className="text-start text-base leading-relaxed text-slate-700 sm:text-[17px]">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-200/80 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1D4ED8]/10 text-sm font-bold text-[#1D4ED8]"
                >
                  {item.initial}
                </span>
                <span className="text-start text-sm font-bold text-slate-900 sm:text-base">
                  {item.author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
