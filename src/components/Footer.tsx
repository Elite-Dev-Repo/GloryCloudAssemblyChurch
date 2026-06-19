import { Phone, MapPin, MessageCircle, Video, Globe } from 'lucide-react'
import logo from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white/70 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt=""
                className="h-10 w-10 rounded-full object-cover ring-1 ring-accent/30"
                loading="lazy"
              />
              <div>
                <p className="text-white font-semibold">Glorycloud Assembly</p>
                <p className="text-accent text-xs">Evangelism &amp; Missions, Inc.</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed italic">
              &ldquo;... causing joy in heaven and on earth.&rdquo;<br /><span className="text-accent text-xs font-semibold">&mdash; Luke 15:7</span>
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              Address
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              30&ndash;32, Association Road
              <br />
              Off Oluwaseyi Bus Stop
              <br />
              Off Agbado-Ijoko Rd
              <br />
              Ijoko, Ogun State, Nigeria
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              Contact
            </h4>
            <a href="tel:08028165361" className="text-white/50 hover:text-white text-sm transition flex items-center gap-2">
              <Phone size={12} /> 0802 816 5361
            </a>

            <div className="mt-5">
              <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                <MessageCircle size={14} className="text-accent" />
                Daily Devotional
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Send your name and WhatsApp number to 0802 816 5361 to join.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Social Media</h4>
            <div className="space-y-2">
              <a
                href="https://youtube.com/@ApostleKunleOyenekan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition"
              >
                <Video size={14} /> YouTube: Apostle Kunle Oyenekan
              </a>
              <div className="text-white/50 text-sm flex items-start gap-2">
                <Globe size={14} className="mt-0.5 shrink-0" />
                <div>
                  <span>Facebook Pages:</span>
                  <ul className="text-white/40 text-xs mt-1 space-y-0.5 ml-4 list-disc">
                    <li>Oyenekan Adekunle</li>
                    <li>Oyenekan Kunle</li>
                    <li>Glorycloud Assembly Ijoko</li>
                    <li>Glorycloud Assembly Osogbo</li>
                    <li>Glorycloud Assembly Worldwide</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Glorycloud Assembly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
