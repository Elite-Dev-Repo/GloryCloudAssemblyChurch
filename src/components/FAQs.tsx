import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'When was the church founded?',
    a: "Glorycloud Assembly (aka Evangelism & Missions, Inc.) was founded in December 2004. The church base officially started from December 29th to 31st, 2004, after God used Apostle 'Kunle Oyenekan to begin evangelism at Orilowo, Ejigbo, Lagos.",
  },
  {
    q: 'Where is the church located?',
    a: 'The official address of Glorycloud Assembly is 30–32, Association Road, Off Oluwaseyi Bus Stop, Off Agbado-Ijoko Road, Ijoko, Ogun State, Nigeria.',
  },
  {
    q: 'What are the core values of the church?',
    a: 'Glorycloud Assembly believes in the finished work of Grace, eternal life, holiness, evangelism, village missions, and the church base. The core 3 Segments are: Evangelism, Village Missions, and Church Base.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">Questions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3">FAQs</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-dark text-sm sm:text-base">{faq.q}</span>
                  {isOpen
                    ? <Minus size={18} className="text-accent shrink-0" />
                    : <Plus size={18} className="text-accent shrink-0" />
                  }
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-stone pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
