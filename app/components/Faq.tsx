"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Karsa a replacement for my insurance?",
    answer:
      "No. Membership covers your relationship with our care team — visits, messaging, and coordination. We recommend keeping insurance for hospital stays, specialists outside our network, and prescriptions.",
  },
  {
    question: "Can I use my HSA or FSA to pay?",
    answer:
      "Yes. Membership fees are HSA and FSA eligible for most plans. We provide an itemized receipt each month for reimbursement.",
  },
  {
    question: "How fast can I get an appointment?",
    answer:
      "Most members are seen within the same week of joining, and same-day for urgent, non-emergency needs via telehealth or in-home visit.",
  },
  {
    question: "What if I need to see a specialist?",
    answer:
      "Your care team manages the referral and follows up on results, so you're never coordinating between offices on your own.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "There's no long-term contract. You can pause or cancel your membership from your account at any time.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white px-3 py-20 sm:px-4 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-karsa-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-karsa-deep">
            Questions
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-karsa-green sm:text-4xl lg:text-[2.75rem]">
            Good to know before you join.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[22px] px-6 transition-colors duration-300 sm:px-7 ${
                  isOpen ? "bg-karsa-limesoft" : "bg-karsa-mint/60 hover:bg-karsa-mint"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-bold text-karsa-deep sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-karsa-deep text-white" : "bg-white text-karsa-deep"
                    }`}
                  >
                    <Plus size={15} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm leading-6 text-karsa-ink/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
