import type { Metadata } from 'next'
import { getHeroSlides, getMissions, getSiteSettings } from '@/lib/sanity/data'
import { getPageContent } from '@/lib/sanity/content'
import Hero from '@/components/home/Hero'
import ImpactTicker from '@/components/home/ImpactTicker'
import TrustCredentials from '@/components/home/TrustCredentials'
import WhoWeAre from '@/components/home/WhoWeAre'
import OurMissions from '@/components/home/OurMissions'
import FutureMissionsSection from '@/components/home/FutureMissionsSection'
import LongTermCommitment from '@/components/home/LongTermCommitment'
import SevaActivities from '@/components/home/SevaActivities'
import StartFundraising from '@/components/home/StartFundraising'
import ActiveFundraisers from '@/components/home/ActiveFundraisers'
import JoinTheMission from '@/components/home/JoinTheMission'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import VerificationPortal from '@/components/home/VerificationPortal'
import CulturalMediaHub from '@/components/home/CulturalMediaHub'
import NityaSevaSankalp from '@/components/home/NityaSevaSankalp'
import DonationHub from '@/components/home/DonationHub'
import CsrPartnerships from '@/components/home/CsrPartnerships'
import FestivalCalendarPreview from '@/components/home/FestivalCalendarPreview'
import OfficialAnnouncements from '@/components/home/OfficialAnnouncements'
import CommunityVoices from '@/components/home/CommunityVoices'
import Faq from '@/components/home/Faq'
import JoinUsCta from '@/components/home/JoinUsCta'
import NewsletterCta from '@/components/home/NewsletterCta'

export const metadata: Metadata = {
  title: 'Sanatan Dharm Manav Kalyan Foundation',
  description:
    'Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.',
}

export default async function HomePage() {
  const [slides, missions, content, settings] = await Promise.all([
    getHeroSlides(),
    getMissions(),
    getPageContent('/'),
    getSiteSettings(),
  ])
  const { text, images } = content

  return (
    <>
      <Hero slides={slides} text={text} images={images} />
      <ImpactTicker text={text} images={images} />
      <TrustCredentials text={text} images={images} />
      <WhoWeAre text={text} images={images} />
      <OurMissions text={text} images={images} />
      <FutureMissionsSection missions={missions} text={text} images={images} />
      <LongTermCommitment text={text} images={images} />
      <SevaActivities text={text} images={images} />
      <StartFundraising text={text} images={images} />
      <ActiveFundraisers text={text} images={images} />
      <JoinTheMission text={text} images={images} />
      <WhyChooseUs text={text} images={images} />
      <VerificationPortal text={text} images={images} />
      <CulturalMediaHub text={text} images={images} />
      <NityaSevaSankalp text={text} images={images} />
      <DonationHub text={text} images={images} upi={settings.upi} />
      <CsrPartnerships text={text} images={images} />
      <FestivalCalendarPreview text={text} images={images} />
      <OfficialAnnouncements text={text} images={images} />
      <CommunityVoices text={text} images={images} />
      <Faq text={text} images={images} />
      <JoinUsCta text={text} images={images} />
      <NewsletterCta text={text} images={images} />
    </>
  )
}
