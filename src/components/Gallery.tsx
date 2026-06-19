import generaloverseer from '../assets/generaloverseer.jpg'
import gallery1 from '../assets/gallery1.jpg'
import goandwife from '../assets/goandwife.jpg'
import cross from '../assets/cross.jpg'
import logo from '../assets/logo.jpg'
import gallery2 from '../assets/gallery2.mp4'

const items = [
  {
    src: generaloverseer,
    label: 'Apostle ',
    sub: 'General Overseer',
  },
  {
    src: gallery1,
    label: 'Church Gathering',
    sub: 'Worship & fellowship',
  },
  {
    src: goandwife,
    label: 'Apostle & Family',
    sub: 'Marriage & ministry',
  },
  {
    src: cross,
    label: 'The Cross',
    sub: 'Symbol of our faith',
  },
  {
    src: logo,
    label: 'Church Logo',
    sub: 'Glorycloud Assembly',
  },
  {
    src: gallery2,
    isVideo: true,
    label: 'Ministry Moment',
    sub: 'A glimpse into our worship',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">Moments</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3">Photo Gallery</h2>
          </div>
          <div className="w-24 h-0.5 bg-accent hidden sm:block" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl ${item.isVideo ? 'col-span-2 row-span-2' : ''}`}
            >
              {item.isVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={gallery1}
                  className="w-full h-full object-cover aspect-video"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-white/60 text-xs">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
