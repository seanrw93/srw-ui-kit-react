import { useState } from 'react'
import './FaqAccordion.scss'

const FAQ = [
  {
    question: 'How much does a professional website cost?',
    answer: 'A professional brochure site starts from £499, depending on the number of pages and required features. The price reflects the time spent understanding your business, crafting the design, and delivering a fast, Google-visible site. Free quote within 24h, no obligation.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: "A brochure site is typically delivered in 7–14 days. An e-commerce store takes 2–3 weeks. You receive an exact delivery date in the quote, and it's always honoured.",
  },
  {
    question: 'Can I update the site myself after delivery?',
    answer: 'Yes. Every site is delivered with a handover session so you can update text, photos, and information without outside help. Monthly maintenance packages are also available if you prefer to delegate.',
  },
  {
    question: 'Will my site appear on Google?',
    answer: 'Yes. Every site is configured with essential SEO foundations: optimised titles and descriptions, clean page structure, fast load times, and full mobile compatibility.',
  },
  {
    question: 'What is the difference between a page builder and a custom site?',
    answer: 'Page builders like Wix or Squarespace are quick to launch but often slow, poorly indexed on Google, and hard to customise. A custom site is built for your specific business, optimised from day one.',
  },
  {
    question: 'What happens after the site goes live?',
    answer: "You receive the finished, hosted, live site along with a brief handover. I'm available by message for questions in the first few days. For ongoing support there's a monthly retainer, no long-term contract.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className="faq-accordion">
      {FAQ.map((item, i) => (
        <div
          key={item.question}
          className={`faq-accordion__item${openIndex === i ? ' faq-accordion__item--open' : ''}`}
        >
          <button
            className="faq-accordion__trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span className="faq-accordion__icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <line
                  className="faq-accordion__icon-v"
                  x1="7" y1="1" x2="7" y2="13"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                />
                <line
                  x1="1" y1="7" x2="13" y2="7"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <div
            className={`faq-accordion__content${openIndex === i ? ' faq-accordion__content--open' : ''}`}
          >
            <div className="faq-accordion__content-inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
