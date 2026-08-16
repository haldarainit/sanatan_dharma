import type { Metadata } from 'next'
import { Noto_Sans_Devanagari, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import GoogleTranslate from '@/components/GoogleTranslate'
import PublicChrome from '@/components/PublicChrome'
import { getSiteSettings } from '@/lib/sanity/data'
import '@/styles/globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const deva = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-deva',
  display: 'swap',
})

/* Every route re-renders at most once a minute so published Sanity edits
   appear without a redeploy. Without this the pages are baked at build time
   and never pick up content changes. */
export const revalidate = 60

export const metadata: Metadata = {
  title: {
    default: 'Sanatan Dharm Manav Kalyan Foundation',
    template: '%s | Sanatan Dharm Manav Kalyan Foundation',
  },
  description:
    'Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <html lang="hi" className={`${jakarta.variable} ${playfair.variable} ${deva.variable}`}>
      <body>
        <PublicChrome>
          <SiteHeader settings={settings} />
        </PublicChrome>
        <main>{children}</main>
        <PublicChrome>
          <SiteFooter settings={settings} />
        </PublicChrome>
        <GoogleTranslate />
      </body>
    </html>
  )
}
