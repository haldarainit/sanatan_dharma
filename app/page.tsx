import type { Metadata } from 'next'
import { getHeroSlides, getMissions } from '@/lib/sanity/data'
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
  const [slides, missions] = await Promise.all([getHeroSlides(), getMissions()])

  return (
    <>
      <Hero slides={slides} />
      <ImpactTicker />
      <TrustCredentials />
      <WhoWeAre />
      <OurMissions />
      <FutureMissionsSection missions={missions} />
      <LongTermCommitment />
      <SevaActivities />
      <StartFundraising />
      <ActiveFundraisers />
      <JoinTheMission />
      <WhyChooseUs />
      <VerificationPortal />
      <CulturalMediaHub />
      <NityaSevaSankalp />
      <DonationHub />
      <CsrPartnerships />
      <FestivalCalendarPreview />
      <OfficialAnnouncements />
      <CommunityVoices />
      <Faq />
      <JoinUsCta />
      <NewsletterCta />
    </>
  )
}
