import {
  ClipboardList,
  FolderKanban,
  MessageSquareText,
  MonitorPlay,
} from 'lucide-react';
import { PROCESS_STEPS, type ProcessStepItem } from '../data/content';

const stepIcons: Record<ProcessStepItem['id'], typeof ClipboardList> = {
  prep: ClipboardList,
  whiteboard: MonitorPlay,
  drive: FolderKanban,
  support: MessageSquareText,
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            שיטת עבודה מסודרת שמביאה תוצאות
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            כדי להפיק את המקסימום מכל שיעור ולשמור על התקדמות עקבית, העבודה
            מתנהלת בארבעה שלבים פשוטים:
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROCESS_STEPS.map((step) => {
            const Icon = stepIcons[step.id];
            return (
              <li
                key={step.id}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-6 transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md sm:p-7"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8] text-base font-extrabold text-white shadow-xs">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold text-[#1E40AF]">
                      שלב {step.number} מתוך 4
                    </span>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-500 shadow-2xs ring-1 ring-slate-200/80 transition-colors group-hover:text-[#1D4ED8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="text-start text-lg font-bold text-slate-900 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-start text-base leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
