import { z } from 'zod';

export const PlatformStatsSchema = z.object({
  tiktok: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
  tiktokHandle: z.string().optional(),
  instagramHandle: z.string().optional(),
  youtubeHandle: z.string().optional(),
});

export const InfluencerSchema = z.object({
  id: z.string(),
  name: z.string(),
  handle: z.string(),
  niche: z.string(),
  category: z.string(),
  followers: z.string(),
  imageUrl: z.string(),
  imageName: z.string().optional(),
  canvaLink: z.string().optional(),
  bio: z.string(),
  platforms: z.array(z.string()),
  platformStats: PlatformStatsSchema.optional(),
  demographics: z.object({
    gender: z.object({
      male: z.string().optional(),
      female: z.string().optional(),
    }).optional(),
    age: z.array(z.object({
      range: z.string(),
      percentage: z.string(),
    })).optional(),
    topCountries: z.array(z.object({
      country: z.string(),
      percentage: z.string(),
    })).optional(),
  }).optional(),
});

export const CaseStudyStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const CaseStudySchema = z.object({
  id: z.string(),
  client: z.string(),
  title: z.string(),
  description: z.string(),
  stats: z.array(CaseStudyStatSchema),
  imageUrl: z.string(),
  tags: z.array(z.string()),
  pdfUrl: z.string().optional(),
});

export type Influencer = z.infer<typeof InfluencerSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
