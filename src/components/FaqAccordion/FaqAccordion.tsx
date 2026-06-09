import { useState } from 'react'
import './FaqAccordion.scss'

const FAQ = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Ut enim ad minim veniam quis nostrud?',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Quis nostrud exercitation ullamco laboris?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    question: 'Nemo enim ipsam voluptatem quia voluptas?',
    answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  },
  {
    question: 'Temporibus autem quibusdam et aut officiis?',
    answer: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
  {
    question: 'Itaque earum rerum hic tenetur a sapiente?',
    answer: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
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
