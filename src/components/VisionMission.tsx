import { Cross, Map, Church } from 'lucide-react'

const segments = [
  {
    icon: Cross,
    title: 'Evangelism',
    desc: 'Spreading the Gospel through Open Air Crusades and evangelistic drives.',
  },
  {
    icon: Map,
    title: 'Village Missions',
    desc: 'Reaching rural communities with the love of Christ and practical support.',
  },
  {
    icon: Church,
    title: 'Church Base',
    desc: 'A vibrant local church community rooted in the finished work of Grace.',
  },
]

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">Our Foundation</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3">Vision &amp; Mission</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-600 leading-relaxed">
            Glorycloud Assembly believes in the finished work of Grace, eternal life, holiness, evangelism,
            village missions, and the church base. The core 3 Segments are:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <s.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark font-semibold italic text-lg">
            &ldquo;... causing joy in heaven and on earth.&rdquo;<br /><span className="text-accent text-xs font-semibold">&mdash; Luke 15:7</span>
          </p>
        </div>
      </div>
    </section>
  )
}
