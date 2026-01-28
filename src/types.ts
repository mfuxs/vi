export interface Influencer {
  id: string;
  name: string;
  handle: string;
  niche: string; // Displayed specific niche (e.g. "Fashion")
  category: string; // Filter category
  followers: string;
  imageUrl: string;
  bio: string;
  platforms: string[];
  platformStats?: {
    tiktok?: string;
    instagram?: string;
    youtube?: string;
    tiktokHandle?: string;
    instagramHandle?: string;
    youtubeHandle?: string;
  };
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