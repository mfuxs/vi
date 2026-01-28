import { InfluencerSchema, CaseStudySchema } from './schemas';
import creatorsData from './data/creators.json';
import casesData from './data/cases.json';
import { Influencer, CaseStudy } from './types';

// DATA MANAGEMENT
// WICHTIG: Die Daten werden nun aus JSON-Dateien geladen, 
// die über ein Sync-Script (z.B. aus Google Sheets) aktualisiert werden können.

// Validierung der Daten zur Laufzeit (IT-Security Layer)
const validatedInfluencers = creatorsData.map(item => {
  const result = InfluencerSchema.safeParse(item);
  if (!result.success) {
    console.error(`Validation error for influencer ${item.id || 'unknown'}:`, result.error.format());
    return null;
  }
  return result.data;
}).filter((i): i is Influencer => i !== null);

const validatedCaseStudies = casesData.map(item => {
  const result = CaseStudySchema.safeParse(item);
  if (!result.success) {
    console.error(`Validation error for case study ${item.id || 'unknown'}:`, result.error.format());
    return null;
  }
  return result.data;
}).filter((c): c is CaseStudy => c !== null);

export const influencers: Influencer[] = validatedInfluencers;
export const caseStudies: CaseStudy[] = validatedCaseStudies;