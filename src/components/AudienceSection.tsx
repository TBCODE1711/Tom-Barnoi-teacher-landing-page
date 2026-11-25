import { BookOpen, Calculator, GraduationCap } from 'lucide-react';
import { AUDIENCE_CARDS, type AudienceCardItem } from '../data/content';

const audienceIcons: Record<AudienceCardItem['id'], typeof BookOpen> = {
  'middle-school': BookOpen,
  'high-school': GraduationCap,
  preparatory: Calculator,
};

export function AudienceSection() {
  return (
    <section
      id="audience"
      className="scroll-mt-20 border-y border-slate-200/70 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            למי השיעורים מתאימים?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            השיעורים מתקיימים אונליין בזום בלבד ומותאמים באופן אישי לקצב ולמטרות
            של כל תלמיד ותלמידה:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCE_CARDS.map((card) => {
            const Icon = audienceIcons[card.id];
            return (
              <article
                key={card.id}
                className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8] transition-colors group-hover:bg-[#1D4ED8] group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-[#1E40AF]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-start text-lg font-bold leading-snug text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-start text-base leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
