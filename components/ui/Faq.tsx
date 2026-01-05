"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What materials are your backpacks made from?",
    answer:
      "Our backpacks are crafted from durable, lightweight, and water-resistant materials designed for everyday use and travel.",
  },
  {
    question: "Are your backpacks suitable for school and travel?",
    answer:
      "Yes! Our designs are made to fit school essentials, laptops, and travel gear while remaining comfortable to carry all day.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "We stand by our quality. All backpacks come with a limited warranty covering manufacturing defects.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within 24–48 hours and delivered within 3–7 business days, depending on your location.",
  },
  {
    question: "Can I return or exchange my backpack?",
    answer:
      "Absolutely. If you're not satisfied, you can return or exchange your backpack within 14 days of delivery.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-16 lg:px-32 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know before choosing your perfect backpack.
        </p>
      </div>

      {/* FAQ items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border rounded-xl bg-[#F7F4F1] shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-left text-[#3A2C24]"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition"
        >
          Still have questions? Contact us
        </a>
      </div>
    </section>
  );
}
