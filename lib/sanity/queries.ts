import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteName, logo, donateLabel, helplines, emails, whatsapp, footerAbout, cin,
  upiId, upiName,
  social[]{ network, url }
}`

/* A route may be split across several documents so an editor is not scrolling
   one enormous list -- the homepage is one document per section. They are
   merged back together by key when the page is rendered. */
export const pageQuery = groq`*[_type == "page" && path == $path] | order(order asc, _id asc){
  title, path, order, seoTitle, seoDescription,
  blocks[]{ _type, key, section, text, alt, currentSrc, image }
}`

export const heroSlidesQuery = groq`*[_type == "heroSlide"] | order(order asc){
  order, image, imageMobile, alt, line1, line2, ctaLabel, ctaHref, noOverlay, currentSrc
}`

export const missionsQuery = groq`*[_type == "mission"] | order(order asc){
  order, title, tagline, note, paras, image, currentSrc, href
}`

export const peopleQuery = groq`*[_type == "person"] | order(order asc){
  order, title, role, category, image, currentSrc
}`

export const membershipQuery = groq`*[_type == "membershipCategory"] | order(order asc){
  order, slug, cardTitle, cardText, image, currentSrc,
  formTitle, headingEn, headingHi, notice, aboutTitle, about,
  roles, interests, skills, declaration, feeLine, levelNote, idCardNote,
  pledge, autoUpdateNote, fees[]{ level, base, withId }
}`

export const donationTiersQuery = groq`*[_type == "donationTier"] | order(order asc){
  order, amount, hi, tag
}`

export const faqQuery = groq`*[_type == "faqItem" && page == $page] | order(order asc){ q, a }`

export const statusRowsQuery = groq`*[_type == "statusRow" && table == $table] | order(order asc){
  status, meaning
}`
