import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/src/assets/cross.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20">
        <div className="absolute left-1/2 -translate-x-1/2 max-sm:top-0 top-8 bg-white/10 p-2 rounded-full flex items-center gap-2 justify-center" >
        <div className="p-2 rounded-full bg-white animate-bounce">
        
          </div>
          <p className=" text-white max-sm:text-[10px] font-semibold text-md uppercase tracking-wide ">
            Evangelism &amp; Missions, Inc.
          </p>
      </div>

        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-4">
            Glorycloud
            <br />

            <span className="text-white">Assembly</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-md leading-relaxed">
            Evangelism &amp; Missions, Inc. &mdash; causing joy in heaven and on earth.<br /><span className="text-accent text-xs font-semibold">&mdash; Luke 15:7</span>
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-accent-light hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95 transition-all"
            >
              Explore <ArrowRight size={16} />
            </a>
            <a
              href="#footer"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 hover:border-white/60 hover:scale-105 active:scale-95 transition-all"
            >
              Contact <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
