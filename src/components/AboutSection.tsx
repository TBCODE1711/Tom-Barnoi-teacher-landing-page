import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, ABOUT_PARAGRAPHS } from '../data/content';

const highlightIcons = {
  cs: GraduationCap,
  bagrut: Award,
  style: CheckCircle2,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-slate-200/70 bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative Content */}
          <div className="text-start lg:col-span-7">
            <div
              aria-hidden="true"
              className="mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
            />
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              נעים להכיר, אני תום ברנוי
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
              <p className="text-lg font-semibold text-slate-900">
                {ABOUT_PARAGRAPHS[0]}
              </p>
              <p>{ABOUT_PARAGRAPHS[1]}</p>
              <p>{ABOUT_PARAGRAPHS[2]}</p>
            </div>
          </div>

          {/* Academic-Tech Highlights Card (No cheesy stock photos) */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <div className="relative border-b border-slate-100 bg-gradient-to-bl from-[#1D4ED8] to-[#1E3A8A] px-6 py-7 text-white">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 math-grid-bg-dark"
                />
                <div className="relative flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-xl font-extrabold text-white backdrop-blur-xs"
                  >
                    תב
                  </div>
                  <div className="text-start">
                    <p className="text-lg font-extrabold">תום ברנוי</p>
                    <p className="text-sm text-blue-100">
                      מורה פרטי למתמטיקה ופיזיקה אונליין
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3.5">
                  {ABOUT_HIGHLIGHTS.map((item) => {
                    const Icon = highlightIcons[item.id];
                    return (
                      <li
                        key={item.id}
                        className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-[#F8FAFC] p-4"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="self-center text-start text-sm font-semibold text-slate-800 sm:text-[15px]">
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
