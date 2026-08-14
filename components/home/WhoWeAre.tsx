import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
export default function WhoWeAre({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <section className="bg-[#fdfbf7] py-12 px-6 font-sans sd-gap">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        <div className="relative shrink-0 w-full max-w-[350px] md:max-w-[360px] mx-auto">
          <img
            src={img(images, 'who-we-are-i1', "/img/new_who_are_we.jpeg")}
            alt="सनातन धर्म मानव कल्याण फाउंडेशन"
            className="w-full h-auto rounded-2xl shadow-lg border border-amber-100/50 object-cover"
          />
          <div
            className="absolute -bottom-4 -right-2 md:-right-5 bg-white border border-slate-200 rounded-full py-2 px-4 flex items-center gap-2 shadow-md"
          >
            <svg
              className="w-4 h-4 text-[#1a8738]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-[11px] font-bold text-[#1a8738] tracking-wider uppercase">{t(text, 'who-we-are-k2', "VERIFIED TRUST")}</span>
          </div>
        </div>
        <div className="flex-1 text-left">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Who We Are{' '}
            <span className="block sm:inline text-[#e35300]">{t(text, 'who-we-are-k3', "हमारा परिचय")}</span>
          </h2>
          <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-6">{t(text, 'who-we-are-k4', "सनातन धर्म मानव कल्याण फाउंडेशन।")}</p>
          <div className="space-y-4 text-[14.5px] leading-relaxed text-slate-700 text-justify">
            <p>
              <strong className="text-gray-900 font-bold">{t(text, 'who-we-are-k5', "सनातन धर्म मानव कल्याण फाउंडेशन")}</strong>
              {' '}भारत सरकार के कंपनी अधिनियम, 2013 की{' '}
              <span className="italic">{t(text, 'who-we-are-k6', "धारा 8")}</span>
              {' '}के अंतर्गत पंजीकृत एक{' '}
              <strong className="text-gray-900 font-semibold">{t(text, 'who-we-are-k7', "Professionally Managed")}</strong>
              {' '}गैर-लाभकारी संस्था है, जो सेवा, संस्कार, सामाजिक उत्तरदायित्व एवं मानव कल्याण के मूल्यों पर कार्य करती है।
            </p>
            <p>
              {t(text, 'who-we-are-k8', "हमारा उद्देश्य सनातन संस्कृति एवं भारतीय मूल्यों का संरक्षण, मानव सेवा को प्रोत्साहन तथा समाज के अंतिम व्यक्ति तक सहायता, सम्मान और अवसर पहुंचाना है। संस्था समाज में सकारात्मक एवं स्थायी परिवर्तन लाने के लिए सेवा, जागरूकता, सहयोग और जनभागीदारी को एक सशक्त माध्यम मानती है।")}
            </p>
            <p>
              {t(text, 'who-we-are-k9', "फाउंडेशन अन्न सेवा, चिकित्सा एवं स्वास्थ्य सहायता, शिक्षा एवं संस्कार सहयोग, महिला सुरक्षा एवं सम्मान, आपदा राहत, गौ सेवा, पर्यावरण संरक्षण, सांस्कृतिक जनजागरण तथा विभिन्न मानव कल्याण परियोजनाओं के माध्यम से जरूरतमंद व्यक्तियों, परिवारों एवं समुदायों तक सहायता पहुंचाने का प्रयास कर रहा है।")}
            </p>
            <p>
              हमारी सभी पहल{' '}
              <strong className="text-gray-900 font-semibold">{t(text, 'who-we-are-k10', "पारदर्शिता, उत्तरदायित्व, सत्यापन एवं सेवा भावना")}</strong>
              {' '}के सिद्धांतों पर आधारित हैं, ताकि प्रत्येक सहयोग सही उद्देश्य तक पहुंचे और समाज में विश्वास, सहभागिता एवं सकारात्मक परिवर्तन को सशक्त बनाया जा सके।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
