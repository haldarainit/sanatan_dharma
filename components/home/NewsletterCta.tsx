export default function NewsletterCta() {
  return (
    <section className="container-x my-12 sd-gap">
      <div className="card overflow-hidden p-0">
        <div className="grid gap-0 md:grid-cols-2">
          <div
            className="bg-gradient-to-br from-saffron-500 via-saffron-600 to-saffron-700 p-8 text-white sm:p-10"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider"
            >Newsletter</div>
            <h3 className="deva mt-4 font-display text-2xl font-bold sm:text-3xl">सेवा, संस्कार और सनातन से जुड़े रहें</h3>
            <p className="deva mt-3 text-sm text-white/85">
              सनातन पर्वों, सेवा अभियानों, आध्यात्मिक प्रेरणाओं एवं विशेष कार्यक्रमों की नियमित जानकारी प्राप्त करने के लिए Subscribe करें।
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <form className="space-y-4">
              <div>
                <label className="field-label">Email Address</label>
                <div className="relative">
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
                    className="lucide lucide-mail pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-saffron-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="field pl-10"
                    defaultValue=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 w-full sd-btn sd-btn--join-mission"
                style={{ backgroundColor: "#16A34A", '--btn-hover': "#00872e" }}
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
                    className="lucide lucide-send"
                  >
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                    ></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </span>
                Subscribe Now
              </button>
              <p className="text-center text-xs text-ink/50">We respect your privacy. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
