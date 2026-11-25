import { useState } from 'react';
import { ChevronDown, Clock, HelpCircle } from 'lucide-react';
import {
  CANCELLATION_POLICY_ITEMS,
  FAQ_ITEMS,
  type AccordionEntry,
} from '../data/content';

interface AccordionListProps {
  items: AccordionEntry[];
}

function AccordionList({ items }: AccordionListProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs">
      {items.map((item) => {
        const isOpen = Boolean(openIds[item.id]);
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-trigger-${item.id}`;

        return (
          <div key={item.id}>
            <h4>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-start transition-colors hover:bg-slate-50/90 focus:outline-none focus-visible:bg-blue-50/50 sm:px-6 sm:py-5"
              >
                <span className="text-base font-bold text-slate-900 sm:text-[17px]">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                    isOpen
                      ? 'rotate-180 bg-blue-50 text-[#1D4ED8]'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h4>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pt-0.5 text-start text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#1D4ED8]"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            מדיניות ביטולים ושאלות נפוצות
          </h2>
        </div>

        <div className="mt-12 space-y-10">
          {/* Subsection A: Cancellation, Lateness & Preparation Policy */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-start text-lg font-bold text-slate-900 sm:text-xl">
                מדיניות ביטולים, איחורים והכנה לשיעור
              </h3>
            </div>
            <AccordionList items={CANCELLATION_POLICY_ITEMS} />
          </div>

          {/* Subsection B: Frequently Asked Questions */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8]">
                <HelpCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-start text-lg font-bold text-slate-900 sm:text-xl">
                שאלות נפוצות
              </h3>
            </div>
            <AccordionList items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
