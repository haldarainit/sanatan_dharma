export default function VerificationPortal() {
  return (
    <section
      className="w-full max-w-5xl mx-auto my-12 p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#121d2b] via-[#17212e] to-[#1e1b19] shadow-2xl relative overflow-hidden text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="flex items-start gap-3 mb-2">
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
              className="lucide lucide-shield-check w-7 h-7 text-green-500 shrink-0 mt-1"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-white">Verification Portal</h2>
              <p className="deva text-[#d49b4b] text-base md:text-lg font-semibold mt-2">विश्वास के साथ सत्यापन • भरोसे के साथ पुष्टि</p>
            </div>
          </div>
          <p className="deva text-gray-300 text-[13px] leading-relaxed max-w-xl pl-10 mt-4">
            हमारी संस्था द्वारा जारी स्वयंसेवक पहचान पत्र, सदस्य प्रमाणपत्र, नियुक्ति पत्र, समन्वयक नियुक्तियाँ, दान रसीदें तथा अन्य आधिकारिक दस्तावेज़ों की ऑनलाइन सत्यापन सुविधा उपलब्ध है। प्रत्येक प्रमाणपत्र एवं पहचान विवरण को निर्धारित सत्यापन प्रणाली के माध्यम से वास्तविक समय (Real-Time) में जाँचा जा सकता है।
          </p>
          <p className="deva text-gray-400 text-[13px] leading-relaxed max-w-xl pl-10 mt-3">
            पारदर्शिता, विश्वसनीयता और जनविश्वास हमारे कार्यों की आधारशिला हैं। किसी भी दस्तावेज़ की पुष्टि कर निश्चिंत होकर संस्था से जुड़ें और सेवा कार्यों में सहभागिता करें।
          </p>
        </div>
        <div
          className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-md shadow-lg"
        >
          <form className="space-y-5">
            <div>
              <label
                htmlFor="docType"
                className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2"
              >Document Type</label>
              <select
                id="docType"
                className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-orange-500 transition-all cursor-pointer [&>option]:bg-[#1a2332] [&>option]:text-white"
              >
                <option defaultValue="Volunteer ID" selected>Volunteer ID</option>
                <option defaultValue="Member Certificate">Member Certificate</option>
                <option defaultValue="Coordinator ID">Coordinator ID</option>
                <option defaultValue="Donation Receipt">Donation Receipt</option>
                <option defaultValue="Appointment Letter">Appointment Letter</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="credential"
                className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2"
              >Credential Number</label>
              <input
                id="credential"
                type="text"
                placeholder="e.g. SDV-2024-00128"
                className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all"
                required
                defaultValue=""
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.99] shadow-md mt-2 cursor-pointer sd-btn sd-btn--submit"
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
                className="lucide lucide-search w-4 h-4"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span>Verify Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
