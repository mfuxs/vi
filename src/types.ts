export interface Influencer {
  id: string;
  name: string;
  handle: string;
  niche: string; // Displayed specific niche (e.g. "Fashion")
  category: string; // Filter category
  followers: string;
  imageUrl: string;
  imageName?: string;
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
  demographics?: {
    gender?: {
      male?: string;
      female?: string;
    };
    age?: {
      range: string;
      percentage: string;
    }[];
    topCountries?: {
      country: string;
      percentage: string;
    }[];
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