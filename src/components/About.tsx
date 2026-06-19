import generaloverseer from '../assets/generaloverseer.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">
              Since 2004
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 leading-tight">
              About Glorycloud Assembly
            </h2>
            <div className="w-12 h-0.5 bg-accent mt-5 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              Glorycloud Assembly (aka Evangelism &amp; Missions, Inc.) was founded when Apostle 'Kunle Oyenekan,
              his wife, and children engaged in evangelism at Orilowo, Ejigbo, Lagos. The church base started on
              <strong> December 29th to 31st, 2004</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The ministry believes in the finished work of Grace, eternal life, holiness, evangelism,
              village missions, and the local church base. Our three core segments are:
            </p>
            <ul className="space-y-3 mt-6">
              {[
                { num: '01', title: 'Evangelism', desc: 'Open Air Crusades and outreach programs' },
                { num: '02', title: 'Village Missions', desc: 'Reaching rural communities' },
                { num: '03', title: 'Church Base', desc: 'A vibrant local church community' },
              ].map((item) => (
                <li key={item.num} className="flex items-center gap-4">
                  <span className="text-accent font-bold text-lg font-serif">{item.num}</span>
                  <div>
                    <span className="text-dark font-semibold">{item.title}</span>
                    <span className="text-gray-500 text-sm ml-2">&mdash; {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={generaloverseer}
                alt="Apostle 'Kunle Oyenekan"
                className="w-full h-96 sm:h-[28rem] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-accent text-white text-sm font-bold px-6 py-3 rounded-lg shadow-lg shadow-accent/30">
                Apostle 'Kunle Oyenekan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
