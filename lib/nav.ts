export type NavLink = { label: string; href: string }
export type NavItem = { label: string; href?: string; children?: NavLink[] }

/* The scrape only captured the dropdown triggers -- the panels were rendered
   on interaction and never made it into the HTML. This is the menu the old
   server.js injected at runtime, now the single source of truth. */
export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Activities',
    children: [
      { label: 'Current Activities', href: '/activities' },
      { label: 'Future Missions', href: '/future-activities' },
      { label: 'Festival Calendar', href: '/festival-calendar' },
    ],
  },
  {
    label: 'Donation',
    children: [
      { label: 'Donate Now', href: '/donate' },
      { label: 'Start Fundraiser', href: '/start-fundraiser' },
      { label: 'View Fundraisers', href: '/view-fundraisers' },
    ],
  },
  { label: 'Join Us', href: '/membership' },
  {
    label: 'Media',
    children: [
      { label: 'News & Events', href: '/media/news-and-events' },
      { label: 'Photo Gallery', href: '/media/photo-gallery' },
      { label: 'Video Gallery', href: '/media/video-gallery' },
    ],
  },
  {
    label: 'Portal',
    children: [
      { label: 'Portal Sign In', href: '/portal/login' },
      { label: 'My Profile', href: '/portal/profile' },
      { label: 'Verification Center', href: '/portal/verification' },
      { label: 'Announcements', href: '/portal/announcements' },
    ],
  },
  {
    label: 'Partners',
    children: [
      { label: 'Become a CSR Partner', href: '/csr-partner' },
      { label: 'Become a Seva Partner', href: '/seva-partner' },
    ],
  },
  {
    label: 'More',
    children: [
      { label: 'Need Help', href: '/need-help' },
      { label: 'Raise a Complaint', href: '/raise-complaint' },
      { label: 'FAQ', href: '/about#faq' },
      { label: 'Community Voices', href: '/about#voices' },
      { label: 'Legal Documents', href: '/legal-documents' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export const CONTACT = {
  helplines: ['+91 84520 03366', '+91 94541 32567'],
  emails: ['ngo.sanatandharm@gmail.com', 'help@sanatandharmngo.org'],
  whatsapp: '918452003366',
}
