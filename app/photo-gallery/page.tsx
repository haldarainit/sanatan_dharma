import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function PhotoGalleryPage() {
  const { text, images } = await getPageContent("/photo-gallery")
  return (
    <>
    <section
      className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans"
    >
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
      <div className="container-x relative py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
          <Link className="hover:text-saffron-700 transition-colors" href="/">{t(text, 'k1', "Home")}</Link>
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
          <span className="text-[#e35300]">{t(text, 'k2', "Photo Gallery")}</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Photo{' '}
          <span className="text-[#e35300]">{t(text, 'k3', "Gallery")}</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{t(text, 'k4', "🚩 चित्र दीर्घा — सेवा एवं संस्कृति")}</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          {t(text, 'k5', "Visual highlights from our food relief drives, gaushalas, medical camps, tree plantation drives, and cultural celebrations.")}
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-5"
        >
          <div className="flex items-center gap-2">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl bg-saffron-500 text-white shadow-md"
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
                className="lucide lucide-image h-5 w-5"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Seva Photo Highlights</h2>
              <p className="text-xs text-slate-500">{t(text, 'k6', "Click any photo to open full-resolution lightbox viewer")}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-600 text-white shadow-md"
            >All</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Food Relief</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Gau Seva</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Medical Camps</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Cultural &amp; Yagnas</button>
            <button
              type="button"
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Tree Plantation</button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i11', "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Flood Relief Food Distribution Drive"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Food Relief</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Flood Relief Food Distribution Drive</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Mira Road, Thane
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}18 July 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i12', "https://images.pexels.com/photos/8923247/pexels-photo-8923247.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Desi Gau Seva & Fodder Feeding Campaign"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Gau Seva</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Desi Gau Seva &amp; Fodder Feeding Campaign</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Panvel Gaushala, Raigad
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}04 June 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i13', "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Free Health Checkup & Eye Screening Camp"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Medical Camps</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Free Health Checkup &amp; Eye Screening Camp</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Ghatkopar, Mumbai
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}15 June 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i14', "https://images.pexels.com/photos/6765189/pexels-photo-6765189.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Grand Maha Aarti & Cultural Samskriti Yagna"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Cultural &amp; Yagnas</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Grand Maha Aarti &amp; Cultural Samskriti Yagna</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Varanasi Ghats, UP
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}22 May 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i15', "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80")}
                alt="Youth Volunteer Tree Plantation Drive"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Tree Plantation</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Youth Volunteer Tree Plantation Drive</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Nashik Forest Belt
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}10 July 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i16', "https://images.pexels.com/photos/6765190/pexels-photo-6765190.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Sanatan Sena Volunteer Induction Camp"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Cultural &amp; Yagnas</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Sanatan Sena Volunteer Induction Camp</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Pune Regional Center
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}02 June 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i17', "https://images.pexels.com/photos/6765191/pexels-photo-6765191.jpeg?auto=compress&cs=tinysrgb&w=1200")}
                alt="Children Education & Stationery Kit Distribution"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Food Relief</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Children Education &amp; Stationery Kit Distribution</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Palghar Tribal School
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}25 May 2026
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-saffron-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
            style={{ opacity: "1" }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={img(images, 'i18', "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80")}
                alt="Special Medical Mobile Unit in Remote Villages"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
              ></div>
              <span
                className="absolute top-3 left-3 rounded-full bg-saffron-500 px-3 py-0.5 text-[11px] font-bold text-white shadow-md"
              >Medical Camps</span>
              <div
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="lucide lucide-maximize2 h-4 w-4"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" x2="14" y1="3" y2="10"></line>
                  <line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 text-white">
                <h3
                  className="font-bold text-base line-clamp-1 group-hover:text-saffron-300 transition-colors"
                >Special Medical Mobile Unit in Remote Villages</h3>
                <p className="text-xs text-slate-300 flex items-center gap-3">
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
                      className="lucide lucide-map-pin h-3 w-3 text-saffron-400"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {' '}Satara District
                  </span>
                  <span>•</span>
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
                      className="lucide lucide-calendar h-3 w-3 text-slate-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    {' '}11 April 2026
                  </span>
                </p>
              </div>
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
        <p className="deva eyebrow text-saffron-100">{t(text, 'k7', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'k8', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
            {t(text, 'k9', "Donate Now")}
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
            {t(text, 'k10', "Join the Mission")}
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
