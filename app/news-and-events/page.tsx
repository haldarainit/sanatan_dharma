import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function NewsAndEventsPage() {
  return (
    <>
    <section
      className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans"
    >
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
      <div className="container-x relative py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
          <Link className="hover:text-saffron-700 transition-colors" href="/">Home</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right h-3.5 w-3.5"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span className="text-[#e35300]">News &amp; Field Updates</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          News &amp; Field{' '}
          <span className="text-[#e35300]">Updates</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">🚩 समाचार, कार्यक्रम एवं प्रेस विज्ञप्ति</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          Read real-time updates on our ground relief missions, press releases, medical camps, and upcoming community seva events.
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div
          className="relative overflow-hidden rounded-3xl border border-saffron-300/80 bg-gradient-to-r from-[#0D1B2A] via-[#1E3A5F] to-[#0D1B2A] text-white shadow-xl"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full bg-saffron-500 px-3 py-0.5 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-megaphone h-3.5 w-3.5"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z"></path>
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                  </svg>
                  {' '}Featured Story
                </span>
                <span className="text-xs text-saffron-300 font-semibold">28 July 2026</span>
              </div>
              <h2
                className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white hover:text-saffron-300 transition-colors"
              >
                Nationwide Annadanam Drive Serves Over 25,000 Hot Meals in Monsoon Affected Regions
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sanatan Sena volunteer teams mobilized 14 mobile kitchens to deliver nutritious meals, clean drinking water, and essential medicines across flood-hit municipal zones.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-3.5 w-3.5 text-saffron-400"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {' '}Mumbai, Thane &amp; Raigad
                </span>
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-saffron-500 to-amber-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:opacity-95 transition-all flex items-center gap-1.5 sd-btn sd-btn--view-details"
                >
                  <span>Read Full Story</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-64 md:h-full min-h-[300px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80"
                alt="Nationwide Annadanam Drive Serves Over 25,000 Hot Meals in Monsoon Affected Regions"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0D1B2A]/80 md:to-transparent"
              ></div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4"
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-filter h-4 w-4 text-saffron-600"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Filter News:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-600 text-white shadow-md"
            >All</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Field Seva</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Press Releases</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Upcoming Events</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Environment &amp; Gau Seva</button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="group flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80"
                  alt="Nationwide Annadanam Drive Serves Over 25,000 Hot Meals in Monsoon Affected Regions"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Field Seva</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}28 July 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-3.5 w-3.5 text-slate-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}4 min read
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >
                  Nationwide Annadanam Drive Serves Over 25,000 Hot Meals in Monsoon Affected Regions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Sanatan Sena volunteer teams mobilized 14 mobile kitchens to deliver nutritious meals, clean drinking water, and essential medicines across flood-hit municipal zones.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-3 w-3 text-saffron-500"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {' '}Mumbai, Thane &amp; Raigad
              </span>
              <button
                type="button"
                className="text-xs font-bold text-saffron-700 hover:text-saffron-800 flex items-center gap-1"
              >
                <span>Read Article</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3.5 w-3.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8923247/pexels-photo-8923247.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Press Release: Foundation Expands Free Gaushala Medical & Fodder Support Scheme"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Press Releases</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}20 July 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-3.5 w-3.5 text-slate-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}3 min read
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >
                  Press Release: Foundation Expands Free Gaushala Medical &amp; Fodder Support Scheme
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Central Board announces ₹1.5 Crore grant allocation for 85 partner gaushalas in UP, Rajasthan, and MP to supply green fodder and veterinary care.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-3 w-3 text-saffron-500"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {' '}New Delhi Press Club
              </span>
              <button
                type="button"
                className="text-xs font-bold text-saffron-700 hover:text-saffron-800 flex items-center gap-1"
              >
                <span>Read Article</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3.5 w-3.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Upcoming: Mega Free Medical & Eye Checkup Camp in Pune District"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Upcoming Events</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}12 August 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-3.5 w-3.5 text-slate-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}2 min read
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Upcoming: Mega Free Medical &amp; Eye Checkup Camp in Pune District</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Partnering with super-specialty hospitals to offer free blood tests, eye cataract screenings, specs distribution, and general health checkups for 3,000+ residents.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-3 w-3 text-saffron-500"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {' '}Shivajinagar Ground, Pune
              </span>
              <button
                type="button"
                className="text-xs font-bold text-saffron-700 hover:text-saffron-800 flex items-center gap-1"
              >
                <span>Read Article</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3.5 w-3.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Prakriti Seva: 10,000 Sacred Neem & Banyan Saplings Planted Across Rural Belts"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Environment &amp; Gau Seva</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}05 July 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-3.5 w-3.5 text-slate-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}3 min read
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >
                  Prakriti Seva: 10,000 Sacred Neem &amp; Banyan Saplings Planted Across Rural Belts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  Community youth and school students joined hands to plant oxygen-rich indigenous trees along village roads and temple groves.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin h-3 w-3 text-saffron-500"
                >
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {' '}Nashik &amp; Ahmednagar
              </span>
              <button
                type="button"
                className="text-xs font-bold text-saffron-700 hover:text-saffron-800 flex items-center gap-1"
              >
                <span>Read Article</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3.5 w-3.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container-x my-12 sd-gap">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 via-saffron-500 to-maroon-600 px-6 py-14 text-center text-white shadow-xl sm:px-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <p className="deva eyebrow text-saffron-100">आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          Be part of positive change. Your contribution brings hope, support and dignity to lives across India.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 sd-btn sd-btn--donate-now"
            style={{ backgroundColor: "#FF9933", '--btn-hover': "#e37d17" }}
            href="/donate"
          >
            <span className="shrink-0 [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
            </span>
            Donate Now
          </Link>
          <Link
            className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 sd-btn sd-btn--join-mission"
            style={{ backgroundColor: "#1E3A8A", '--btn-hover': "#021e6e" }}
            href="/membership"
          >
            <span className="shrink-0 [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            Join the Mission
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
