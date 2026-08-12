import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FFFDF9]">
      <div
        className="relative w-full aspect-[4/5] overflow-hidden rounded-none bg-black shadow-xl sm:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[18/5]"
      >
        <div className="absolute inset-0 h-full w-full animate-slideIn">
          <picture>
            <img
              src="/img/slide-ganga-aarti.jpg"
              alt="Ganga Aarti at sunset"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10"></div>
        </div>
        <div
          className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 text-left sm:px-12 lg:px-16"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <p
              className="deva min-h-[1.5em] text-base font-medium tracking-wide text-white/95 sm:text-lg md:text-2xl lg:text-3xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
            >सनातन, संस्कार और समाज के लिए आगे बढ़िए...</p>
            <h2
              className="deva mt-3 min-h-[1.2em] text-4xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl"
              style={{ textShadow: "0 3px 18px rgba(0,0,0,0.75)" }}
            >अगर हम नहीं, तो कौन?</h2>
            <div className="mt-5 flex min-h-[44px] justify-start sm:mt-7">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center font-bold text-sm text-white h-11 px-6 rounded-full bg-[#FF9933] border border-orange-200/50 shadow-lg hover:bg-[#E6821B] transition-all cursor-pointer sd-btn sd-btn--join-mission"
              >Join Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <button aria-label="Go to item 1" className="h-2 rounded-full transition-all w-8 bg-[#FF6F00]"></button>
        <button
          aria-label="Go to item 2"
          className="h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40"
        ></button>
        <button
          aria-label="Go to item 3"
          className="h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40"
        ></button>
        <button
          aria-label="Go to item 4"
          className="h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40"
        ></button>
        <button
          aria-label="Go to item 5"
          className="h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40"
        ></button>
        <button
          aria-label="Go to item 6"
          className="h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40"
        ></button>
      </div>
    </section>
  )
}
