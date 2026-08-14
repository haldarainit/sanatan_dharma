import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
export default function ImpactTicker({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <div
      className="relative mt-6 overflow-hidden bg-gradient-to-r from-saffron-600 via-saffron-500 to-saffron-600 py-3 text-white shadow-inner rounded-none"
    >
      <div className="flex animate-marquee whitespace-nowrap text-sm font-semibold">
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k1', "सेवा ही सनातन, समर्पण ही हमारा धर्म")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k2', "हमारी संस्था भारत सरकार के अंतर्गत Section 8 Company के रूप में पंजीकृत है")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k3', "सेवा • सुरक्षा • संस्कार • धर्म — मानव कल्याण हमारा कर्म")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k4', "Sanatani Sena सदस्यता एवं स्वयंसेवक पंजीकरण प्रारंभ")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k5', "हमारी संस्था 12A Registration के अंतर्गत पंजीकृत है")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k6', "अन्न सेवा एवं भोजन सहायता अभियान जारी")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k7', "चिकित्सा एवं स्वास्थ्य सहायता मिशन सक्रिय")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k8', "शिक्षा एवं संस्कार सहायता अभियान संचालित")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k9', "हमारी संस्था 80G Registration के अंतर्गत पंजीकृत है — पात्र दान पर Tax Exemption का लाभ")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k10', "महिला सुरक्षा एवं सम्मान अभियान सक्रिय")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k11', "गौ सेवा एवं संरक्षण अभियान में सहयोग करें")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k12', "पर्यावरण संरक्षण एवं वृक्षारोपण अभियान जारी")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k13', "Festival Calendar में आगामी सनातन पर्व, उत्सव एवं सेवा अभियानों की जानकारी देखें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k14', "Sanatan Seva Network के माध्यम से Professionals समाज सेवा में योगदान दे सकते हैं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k15', "Vigilance Department से जुड़कर जागरूकता एवं जनहित कार्यों में योगदान दें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k16', "Fraud Awareness & Help Center के माध्यम से जागरूकता एवं सहायता अभियान संचालित हैं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k17', "Certificate Verification एवं Volunteer ID Verification सुविधा उपलब्ध है")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k18', "पारदर्शिता, जवाबदेही और विश्वास — हमारी कार्यप्रणाली की आधारशिला हैं")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k19', "Other Ways to Support — वस्तु, सामग्री, वाहन, भवन, भूमि देकर सेवा अभियानों को मजबूत बनाएं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k20', "Join Us के माध्यम से Sanatani Sena, Vigilance Department एवं Membership Program से जुड़ें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k21', "CSR Partnership, Employee Volunteering एवं Cause Sponsorship हेतु संपर्क करें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k22', "सेवा ही सनातन, समर्पण ही हमारा धर्म")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k23', "हमारी संस्था भारत सरकार के अंतर्गत Section 8 Company के रूप में पंजीकृत है")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k24', "सेवा • सुरक्षा • संस्कार • धर्म — मानव कल्याण हमारा कर्म")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k25', "Sanatani Sena सदस्यता एवं स्वयंसेवक पंजीकरण प्रारंभ")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k26', "हमारी संस्था 12A Registration के अंतर्गत पंजीकृत है")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k27', "अन्न सेवा एवं भोजन सहायता अभियान जारी")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k28', "चिकित्सा एवं स्वास्थ्य सहायता मिशन सक्रिय")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k29', "शिक्षा एवं संस्कार सहायता अभियान संचालित")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k30', "हमारी संस्था 80G Registration के अंतर्गत पंजीकृत है — पात्र दान पर Tax Exemption का लाभ")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k31', "महिला सुरक्षा एवं सम्मान अभियान सक्रिय")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k32', "गौ सेवा एवं संरक्षण अभियान में सहयोग करें")}</span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k33', "पर्यावरण संरक्षण एवं वृक्षारोपण अभियान जारी")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k34', "Festival Calendar में आगामी सनातन पर्व, उत्सव एवं सेवा अभियानों की जानकारी देखें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k35', "Sanatan Seva Network के माध्यम से Professionals समाज सेवा में योगदान दे सकते हैं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k36', "Vigilance Department से जुड़कर जागरूकता एवं जनहित कार्यों में योगदान दें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k37', "Fraud Awareness & Help Center के माध्यम से जागरूकता एवं सहायता अभियान संचालित हैं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k38', "Certificate Verification एवं Volunteer ID Verification सुविधा उपलब्ध है")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">{t(text, 'impact-ticker-k39', "पारदर्शिता, जवाबदेही और विश्वास — हमारी कार्यप्रणाली की आधारशिला हैं")}</span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k40', "Other Ways to Support — वस्तु, सामग्री, वाहन, भवन, भूमि देकर सेवा अभियानों को मजबूत बनाएं")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k41', "Join Us के माध्यम से Sanatani Sena, Vigilance Department एवं Membership Program से जुड़ें")}
        </span>
        <span className="mx-6 inline-flex items-center gap-2">
          {t(text, 'impact-ticker-k42', "CSR Partnership, Employee Volunteering एवं Cause Sponsorship हेतु संपर्क करें")}
        </span>
      </div>
    </div>
  )
}
