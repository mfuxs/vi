import { Influencer, CaseStudy } from './types';

// DATA MANAGEMENT
// WICHTIG: Hier können Influencer und Cases bearbeitet, hinzugefügt oder gelöscht werden.
// Das Design passt sich automatisch an.

export const influencers: Influencer[] = [
  {
    id: '1',
    name: 'Lena Meyer',
    handle: '@lena.vibe',
    niche: 'Fashion & Lifestyle',
    category: 'Lifestyle',
    followers: '1.2M',
    engagement: '4.5%',
    imageUrl: 'https://picsum.photos/seed/lena/800/1000',
    bio: 'Authentizität trifft High Fashion. Lena inspiriert täglich Millionen mit ihrem einzigartigen Stil.',
    platforms: ['Instagram', 'TikTok']
  },
  {
    id: '2',
    name: 'David Koch',
    handle: '@davidk.fit',
    niche: 'Fitness & Health',
    category: 'Lifestyle',
    followers: '850K',
    engagement: '6.2%',
    imageUrl: 'https://picsum.photos/seed/david/800/1000',
    bio: 'Performance Coach und Lifestyle Athlet. David motiviert zur besten Version deiner selbst.',
    platforms: ['Instagram', 'YouTube']
  },
  {
    id: '3',
    name: 'Jonas der Macher',
    handle: '@jonas.baut',
    niche: 'DIY & Handwerk',
    category: 'Handwerk',
    followers: '920K',
    engagement: '8.5%',
    imageUrl: 'https://picsum.photos/seed/jonas/800/1000',
    bio: 'Vom Dachstuhl bis zum Designmöbel. Jonas zeigt, wie modernes Handwerk funktioniert.',
    platforms: ['YouTube', 'TikTok']
  },
  {
    id: '4',
    name: 'Tech Marcus',
    handle: '@marcus.tech',
    niche: 'Consumer Tech',
    category: 'Tech',
    followers: '450K',
    engagement: '8.1%',
    imageUrl: 'https://picsum.photos/seed/marcus/800/1000',
    bio: 'Gadget Reviews und Tech-News. Marcus bringt Komplexität auf den Punkt.',
    platforms: ['YouTube', 'TikTok']
  },
  {
    id: '5',
    name: 'Sophie & Clara',
    handle: '@twin.travels',
    niche: 'Travel',
    category: 'Lifestyle',
    followers: '2.1M',
    engagement: '3.8%',
    imageUrl: 'https://picsum.photos/seed/twins/800/1000',
    bio: 'Die Welt entdecken, ein Abenteuer nach dem anderen. Nachhaltiges Reisen im Fokus.',
    platforms: ['TikTok', 'Instagram']
  },
  {
    id: '6',
    name: 'Lisa Repariert',
    handle: '@lisa.fixit',
    niche: 'Restaurierung & KFZ',
    category: 'Handwerk',
    followers: '350K',
    engagement: '9.2%',
    imageUrl: 'https://picsum.photos/seed/lisa/800/1000',
    bio: 'Alte Motoren und klassisches Handwerk. Lisa bringt Leben in alte Maschinen zurück.',
    platforms: ['Instagram', 'YouTube']
  },
  {
    id: '7',
    name: 'Isabella Rossi',
    handle: '@bella.bakes',
    niche: 'Food & Genuss',
    category: 'Lifestyle',
    followers: '1.5M',
    engagement: '5.0%',
    imageUrl: 'https://picsum.photos/seed/bella/800/1000',
    bio: 'Kulinarische Kunstwerke und einfache Rezepte für den Alltag.',
    platforms: ['Instagram', 'TikTok']
  },
  {
    id: '8',
    name: 'Code with Sarah',
    handle: '@sarah.dev',
    niche: 'Software & AI',
    category: 'Tech',
    followers: '280K',
    engagement: '7.5%',
    imageUrl: 'https://picsum.photos/seed/sarah/800/1000',
    bio: 'Deep Dives in die Welt der Programmierung und künstlichen Intelligenz.',
    platforms: ['YouTube', 'Linkedin']
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    client: 'GlowUp Cosmetics',
    title: 'Summer Glow Campaign',
    description: 'Eine 360-Grad Kampagne zur Einführung der neuen Summer-Collection. Fokus auf TikTok Challenges und High-Gloss Instagram Content.',
    stats: [
      { label: 'Total Reach', value: '15M+' },
      { label: 'Engagement', value: '1.2M' },
      { label: 'Sales Uplift', value: '+24%' }
    ],
    imageUrl: 'https://picsum.photos/seed/case1/1600/900',
    tags: ['Beauty', 'Product Launch']
  },
  {
    id: '2',
    client: 'WerkzeugPro',
    title: 'Meisterklasse',
    description: 'Launch der neuen Pro-Serie für Handwerker. Authentische Integrationen in DIY-Projekte von Top-Handwerks-Influencern.',
    stats: [
      { label: 'Impressions', value: '3.5M' },
      { label: 'Profi-Feedback', value: 'Top Rated' },
      { label: 'Shop Clicks', value: '45k' }
    ],
    imageUrl: 'https://picsum.photos/seed/case4/1600/900',
    tags: ['Handwerk', 'B2C']
  },
  {
    id: '3',
    client: 'UrbanSneakers',
    title: 'Walk The City',
    description: 'Influencer-Events in 5 deutschen Großstädten kombiniert mit lokalem Content-Creation Hub.',
    stats: [
      { label: 'Impressions', value: '8.5M' },
      { label: 'User Gen Content', value: '5k+' },
      { label: 'CTR', value: '3.5%' }
    ],
    imageUrl: 'https://picsum.photos/seed/case2/1600/900',
    tags: ['Fashion', 'Event']
  },
  {
    id: '4',
    client: 'GreenEnergy Co.',
    title: 'Sustainable Future',
    description: 'Awareness Kampagne für nachhaltige Energielösungen mit Fokus auf Storytelling und Education.',
    stats: [
      { label: 'Views', value: '3M' },
      { label: 'Avg Watch Time', value: '45s' },
      { label: 'Positive Sentiment', value: '98%' }
    ],
    imageUrl: 'https://picsum.photos/seed/case3/1600/900',
    tags: ['Tech', 'Education']
  }
];