export interface Influencer {
  id: string;
  name: string;
  handle: string;
  niche: string; // Displayed specific niche (e.g. "Fashion")
  category: 'Tech' | 'Handwerk' | 'Lifestyle'; // Filter category
  followers: string;
  engagement: string;
  imageUrl: string;
  bio: string;
  platforms: ('Instagram' | 'TikTok' | 'YouTube' | 'Linkedin')[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  tags: string[];
  pdfUrl?: string;
}