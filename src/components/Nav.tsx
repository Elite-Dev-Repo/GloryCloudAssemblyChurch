import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.jpg'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Overseer', href: '#overseer' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#footer' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt=""
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-dark font-medium text-sm tracking-wide hidden sm:block">
            Glorycloud Assembly
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-dark text-sm transition tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-dark" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-600 hover:text-dark text-sm transition"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
