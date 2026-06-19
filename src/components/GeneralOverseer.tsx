import generaloverseer from '../assets/generaloverseer.jpg'
import goandwife from '../assets/goandwife.jpg'
import logo from '../assets/logo.jpg'

export default function GeneralOverseer() {
  return (
    <section id="overseer" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-xs tracking-[0.2em] font-semibold uppercase">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3">
            Meet the General Overseer
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-4">
            <img
              src={generaloverseer}
              alt="Apostle 'Kunle Oyenekan"
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
            <div className="grid grid-cols-2 gap-3">
              <img
                src={goandwife}
                alt="Apostle with his wife"
                className="rounded-xl object-cover aspect-square shadow-md"
                loading="lazy"
              />
              <img
                src={logo}
                alt="Church logo"
                className="rounded-xl object-cover aspect-square shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark">
                Apostle 'Kunle Oyenekan
              </h3>
              <p className="text-accent font-medium text-sm tracking-wide mt-1">
                Founder &amp; General Overseer
              </p>
            </div>

            <div className="border-l-3 border-accent pl-5 bg-cream py-4 pr-5 rounded-r-xl">
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;... causing joy in heaven and on earth.&rdquo;<br /><span className="text-accent text-xs font-semibold">&mdash; Luke 15:7</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Birth
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  Born January 23, 1969 in Osogbo to Elder Jacob Tara Oyenekan
                  and Lady Evangelist Christianah Adunni Oyenekan (n&eacute;e
                  Adebo). He hails from Abeokuta (of Anipupo extraction) in Ogun
                  State of Nigeria.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Background
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  Father was a NEPA accountant, mother a business tycoon in
                  cloth materials. He was the fifth child.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Education
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  B.A. (Hons) from University of Lagos (1992/93), PGDE (2011).
                  He attended a Correspondence Morris Cerullo Bible College and
                  James Agunbiade Jesus School Of Power.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Secular Work
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  Worked at NEPA, served as a Part time Lecturer, lecturing
                  Sociology at Ondo State University, Lagos Satellite Campus,
                  Mushin--Lagos, served as HOD and Vice-Principal in secondary
                  schools.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Conversion
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  Converted June/July 1984 at WOSEM of Prophet Timothy Obadare.
                  Later joined RCCG and pastored multiple parishes.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  Marriage
                </span>
                <p className="text-dark text-sm mt-1 leading-relaxed">
                  He married Ronke Oyenekan on February 14,1999 .After the
                  untimely death of Ronke Oyenekan in June 3 2021,he married
                  Tope Oyenekan on April 6,2024.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-xl p-6">
              <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                Call Into Ministry
              </span>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Yielded to the call on March 2004 when he left RCCG. He was used
                of God to start Evangelism &amp; Missions, later known as
                Glorycloud Assembly. The ministry opened when he, his wife and
                children engaged in Evangelism at Orilowo, Ejigbo, Lagos. The
                church base started December 29th to 31st, 2004.
              </p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                He has hosted Singles/Married Seminar, Glory Night, Signs and
                Wonders, Daily Devotional Program With Apostle 'Kunle Oyenekan,
                etc. He is a member of PFN and once served as Chairman of PFN,
                Praise Chapter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
