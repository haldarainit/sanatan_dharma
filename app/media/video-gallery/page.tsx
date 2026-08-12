import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function MediaVideoGalleryPage() {
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
          <span className="text-[#e35300]">Video Gallery &amp; Documentaries</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Video Gallery &amp;{' '}
          <span className="text-[#e35300]">Documentaries</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">🚩 वीडियो दीर्घा — सीधे धरातल से</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          Watch ground coverage, volunteer documentaries, live event streams, and video stories of impact from across India.
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D1B2A] via-[#1A2E40] to-[#0D1B2A] text-white shadow-2xl border border-saffron-500/30"
        >
          <div className="grid lg:grid-cols-[1.3fr_1fr] items-center">
            <div className="relative h-64 sm:h-80 lg:h-96 w-full cursor-pointer overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sanatan Seva Ground Documentary: Reaching the Unreachable in Flood Zones"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-[#0D1B2A]/40 group-hover:bg-[#0D1B2A]/20 transition-colors grid place-items-center"
              >
                <div
                  className="grid h-16 w-16 place-items-center rounded-full bg-saffron-500 text-white shadow-2xl group-hover:scale-110 transition-transform"
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
                    className="lucide lucide-play h-8 w-8 fill-white ml-1"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </div>
              </div>
              <span
                className="absolute bottom-4 right-4 rounded-lg bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-mono font-bold text-white"
              >12:45</span>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full bg-saffron-500/30 border border-saffron-400/40 px-3 py-0.5 text-xs font-bold text-saffron-300"
                >Featured Documentary</span>
                <span className="text-xs text-slate-300 font-semibold">22 July 2026</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                Sanatan Seva Ground Documentary: Reaching the Unreachable in Flood Zones
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                An inspiring 12-minute documentary capturing our volunteer cadres setting up food kitchens and emergency medical stations in rural flood regions.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
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
                    className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400"
                  >
                    <path
                      d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  {' '}45,200 Views
                </span>
                <button
                  type="button"
                  className="rounded-xl bg-gradient-to-r from-saffron-500 to-amber-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:opacity-95 transition-all flex items-center gap-2 sd-btn sd-btn--watch-video"
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
                    className="lucide lucide-play h-4 w-4 fill-white"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                  {' '}Watch Full Video
                </button>
              </div>
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
              className="lucide lucide-film h-4 w-4 text-saffron-600"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 3v18"></path>
              <path d="M3 7.5h4"></path>
              <path d="M3 12h18"></path>
              <path d="M3 16.5h4"></path>
              <path d="M17 3v18"></path>
              <path d="M17 7.5h4"></path>
              <path d="M17 16.5h4"></path>
            </svg>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Browse Playlist:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-600 text-white shadow-md"
            >All</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Documentaries</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Ground Relief Drives</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Spiritual Events</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Volunteer Stories</button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sanatan Seva Ground Documentary: Reaching the Unreachable in Flood Zones"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Documentaries</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >12:45</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}45,200 Views
                  </span>
                  <span>22 July 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >
                  Sanatan Seva Ground Documentary: Reaching the Unreachable in Flood Zones
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  An inspiring 12-minute documentary capturing our volunteer cadres setting up food kitchens and emergency medical stations in rural flood regions.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
            </div>
          </div>
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8923247/pexels-photo-8923247.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Gau Seva Abhiyan 2026 — Protecting Indigenous Indian Cow Breeds"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Ground Relief Drives</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >06:18</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}28,900 Views
                  </span>
                  <span>10 June 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Gau Seva Abhiyan 2026 — Protecting Indigenous Indian Cow Breeds</h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Watch how our monthly green fodder subsidy and veterinary healthcare team supports over 85 registered Gaushalas.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
            </div>
          </div>
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6765189/pexels-photo-6765189.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Live Highlights: Maha Aarti & Vedic Samskriti Convention"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Spiritual Events</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >18:30</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}62,100 Views
                  </span>
                  <span>15 May 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Live Highlights: Maha Aarti &amp; Vedic Samskriti Convention</h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Recap of the evening spiritual discourse, Vedic chanting, and mass prayer assembly held at Varanasi Ghats.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
            </div>
          </div>
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6765190/pexels-photo-6765190.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Voices of Seva: Why I Joined the Sanatan Sena Volunteer Cadre"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Volunteer Stories</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >04:50</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}19,400 Views
                  </span>
                  <span>02 June 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Voices of Seva: Why I Joined the Sanatan Sena Volunteer Cadre</h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Young professionals, doctors, and students share their personal experiences serving in community relief drives.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
            </div>
          </div>
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Free Mobile Eye Surgery & Glasses Distribution Camp"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Ground Relief Drives</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >08:15</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}14,800 Views
                  </span>
                  <span>28 April 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Free Mobile Eye Surgery &amp; Glasses Distribution Camp</h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Highlights from our cataract screening and free spectacle distribution drive in rural Maharashtra.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
            </div>
          </div>
          <div
            className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-saffron-200/80 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Prakriti Seva: Planting 10,000 Oxygen Trees in Tribal Belts"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors grid place-items-center"
                >
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full bg-saffron-500 text-white shadow-lg group-hover:scale-110 transition-transform"
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
                      className="lucide lucide-play h-5 w-5 fill-white ml-0.5"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
                <span
                  className="absolute top-3 left-3 rounded-full bg-saffron-600/90 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white"
                >Documentaries</span>
                <span
                  className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-mono font-bold text-white"
                >07:22</span>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
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
                      className="lucide lucide-eye h-3 w-3 text-saffron-500"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {' '}21,300 Views
                  </span>
                  <span>14 March 2026</span>
                </div>
                <h3
                  className="font-serif text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors line-clamp-2"
                >Prakriti Seva: Planting 10,000 Oxygen Trees in Tribal Belts</h3>
                <p className="text-xs text-slate-600 line-clamp-2">
                  Short video film showing our environmental squad planting Neem, Peepal, and Banyan saplings.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-xs font-bold text-saffron-700 flex items-center gap-1">
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
                  className="lucide lucide-play h-3 w-3 fill-saffron-700"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {' '}Watch Video
              </span>
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
