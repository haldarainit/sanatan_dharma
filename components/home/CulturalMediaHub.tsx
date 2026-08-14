import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
export default function CulturalMediaHub({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <div
      className="py-16 md:py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#181d26] via-[#0d1015] to-[#08090c] text-white flex flex-col justify-center items-center p-6 font-sans"
    >
      <header className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-3 text-white">Cultural Media Hub</h1>
        <p className="text-[#d99b26] text-xs md:text-sm font-bold tracking-[0.25em] uppercase">{t(text, 'cultural-media-hub-k1', "Sanatan Stories • Culture • Inspiration")}</p>
        <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto mt-4">
          {t(text, 'cultural-media-hub-k2', "Watch inspiring Sanatan stories, cultural films, devotional music, awareness videos and meaningful content that connects hearts with culture and values.")}
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        <div
          className="group relative bg-gradient-to-b from-[#22262e] to-[#191c22] hover:from-[#2a2f3a] hover:to-[#20242c] border border-white/5 hover:border-[#d99b26]/40 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#d99b26]/5 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f3b333] to-[#d08819] flex items-center justify-center text-[#0d1015] mb-8 shadow-md"
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
                className="lucide lucide-film w-6 h-6 stroke-[2.2]"
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
            </div>
            <h2 className="font-serif text-xl font-bold text-white mb-1.5">Films &amp; Documentaries</h2>
            <p className="text-gray-400 text-sm mb-8">{t(text, 'cultural-media-hub-k3', "24 productions")}</p>
          </div>
          <div
            className="flex items-center gap-2 text-[#f0a92a] font-semibold text-sm group-hover:text-[#f7ba43] transition-colors"
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
              className="lucide lucide-play w-3.5 h-3.5 fill-current"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            <span>{t(text, 'cultural-media-hub-k4', "Watch trailer")}</span>
          </div>
        </div>
        <div
          className="group relative bg-gradient-to-b from-[#22262e] to-[#191c22] hover:from-[#2a2f3a] hover:to-[#20242c] border border-white/5 hover:border-[#d99b26]/40 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#d99b26]/5 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f3b333] to-[#d08819] flex items-center justify-center text-[#0d1015] mb-8 shadow-md"
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
                className="lucide lucide-tv w-6 h-6 stroke-[2.2]"
              >
                <rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <h2 className="font-serif text-xl font-bold text-white mb-1.5">Web Series</h2>
            <p className="text-gray-400 text-sm mb-8">{t(text, 'cultural-media-hub-k5', "6 ongoing seasons")}</p>
          </div>
          <div
            className="flex items-center gap-2 text-[#f0a92a] font-semibold text-sm group-hover:text-[#f7ba43] transition-colors"
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
              className="lucide lucide-play w-3.5 h-3.5 fill-current"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            <span>{t(text, 'cultural-media-hub-k6', "Watch trailer")}</span>
          </div>
        </div>
        <div
          className="group relative bg-gradient-to-b from-[#22262e] to-[#191c22] hover:from-[#2a2f3a] hover:to-[#20242c] border border-white/5 hover:border-[#d99b26]/40 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#d99b26]/5 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f3b333] to-[#d08819] flex items-center justify-center text-[#0d1015] mb-8 shadow-md"
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
                className="lucide lucide-music w-6 h-6 stroke-[2.2]"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </div>
            <h2 className="font-serif text-xl font-bold text-white mb-1.5">Bhakti &amp; Bhajan</h2>
            <p className="text-gray-400 text-sm mb-8">{t(text, 'cultural-media-hub-k7', "180+ tracks")}</p>
          </div>
          <div
            className="flex items-center gap-2 text-[#f0a92a] font-semibold text-sm group-hover:text-[#f7ba43] transition-colors"
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
              className="lucide lucide-play w-3.5 h-3.5 fill-current"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            <span>{t(text, 'cultural-media-hub-k8', "Watch trailer")}</span>
          </div>
        </div>
        <div
          className="group relative bg-gradient-to-b from-[#22262e] to-[#191c22] hover:from-[#2a2f3a] hover:to-[#20242c] border border-white/5 hover:border-[#d99b26]/40 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#d99b26]/5 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f3b333] to-[#d08819] flex items-center justify-center text-[#0d1015] mb-8 shadow-md"
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
                className="lucide lucide-megaphone w-6 h-6 stroke-[2.2]"
              >
                <path d="m3 11 18-5v12L3 14v-3z"></path>
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
              </svg>
            </div>
            <h2 className="font-serif text-xl font-bold text-white mb-1.5">Cultural Campaigns</h2>
            <p className="text-gray-400 text-sm mb-8">{t(text, 'cultural-media-hub-k9', "12 active initiatives")}</p>
          </div>
          <div
            className="flex items-center gap-2 text-[#f0a92a] font-semibold text-sm group-hover:text-[#f7ba43] transition-colors"
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
              className="lucide lucide-play w-3.5 h-3.5 fill-current"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            <span>{t(text, 'cultural-media-hub-k10', "Watch trailer")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
