"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "We start with an in-depth consultation to understand your vision. Then we develop concepts, present design proposals, and iterate until you're completely satisfied. Finally, we oversee the execution from start to finish.",
  },
  {
    question: "How long do projects typically take?",
    answer:
      "Timeline varies based on project scope. Residential projects typically take 3-6 months, commercial projects 4-8 months. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you work with a specific style?",
    answer:
      "We specialize in contemporary luxury design but adapt to your preferences. Our portfolio ranges from minimalist modern to classic opulent, always reflecting your personal style.",
  },
  {
    question: "What is included in your services?",
    answer:
      "Our services include space planning, material selection, furniture curation, lighting design, project management, and full execution oversight. We handle everything end-to-end.",
  },
  {
    question: "Do you source materials internationally?",
    answer:
      "Yes, we work with premium suppliers worldwide to source the finest materials and furnishings. We curate selections that meet our quality standards.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us for a free consultation. We'll discuss your project, timeline, budget, and vision to determine if we're the right fit for your design needs.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-3 xs:px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 text-left"
              >
                <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-base">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-3 xs:px-4 sm:px-6 py-3 sm:py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed text-sm xs:text-base sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
