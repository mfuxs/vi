import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { influencers } from '../data';
import { ArrowLeft, Instagram, Youtube, Linkedin, Mail, Users, ExternalLink, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';
import { useLanguage } from '../context/LanguageContext';

const InfluencerDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const influencer = influencers.find(i => i.id === id);

  if (!influencer) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('influencer_not_found')}</h2>
          <Link to="/portfolio" className="text-zinc-500 hover:text-black underline flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" /> {t('influencer_back_to_portfolio')}
          </Link>
        </div>
      </div>
    );
  }

  // Helper to get platform URL
  const getPlatformUrl = (platform: string, influencer: any) => {
    let handle = influencer.handle;
    
    if (platform === 'Instagram' && influencer.platformStats?.instagramHandle) {
      handle = influencer.platformStats.instagramHandle;
    } else if (platform === 'TikTok' && influencer.platformStats?.tiktokHandle) {
      handle = influencer.platformStats.tiktokHandle;
    } else if (platform === 'YouTube' && influencer.platformStats?.youtubeHandle) {
      handle = influencer.platformStats.youtubeHandle;
    }

    const cleanHandle = handle.replace('@', '');
    switch (platform) {
      case 'Instagram': return `https://instagram.com/${cleanHandle}`;
      case 'TikTok': return `https://tiktok.com/@${cleanHandle}`;
      case 'YouTube': return `https://youtube.com/@${cleanHandle}`;
      case 'Linkedin': return `https://linkedin.com/in/${cleanHandle}`;
      default: return '#';
    }
  };

  const influencerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": influencer.name,
    "alternateName": influencer.handle,
    "description": influencer.bio,
    "image": window.location.origin + getAssetPath(influencer.imageUrl || `images/creators/${influencer.handle.replace('@', '').toLowerCase()}.webp`),
    "jobTitle": influencer.niche,
    "worksFor": {
      "@type": "Organization",
      "name": "Vertical Influence"
    }
  };

  const displayImage = influencer.imageUrl || `images/creators/${influencer.handle.replace('@', '').toLowerCase()}.webp`;

  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title={`${influencer.name} (${influencer.niche})`}
        description={influencer.bio || `${influencer.name}, Content Creator in ${influencer.niche}.`}
        image={displayImage}
        schema={influencerSchema}
      />
      
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <Link to="/portfolio" className="inline-flex items-center text-zinc-500 hover:text-black transition-colors font-medium group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> {t('influencer_back_to_portfolio')}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Image Section */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm lg:sticky lg:top-24 self-start">
            <img
              src={getAssetPath(displayImage)}
              alt={influencer.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // If the webp doesn't exist, we could try others or a placeholder
                const img = e.target as HTMLImageElement;
                if (!img.src.includes('placeholder')) {
                  img.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(influencer.name) + '&size=600&background=f4f4f5&color=a1a1aa';
                }
              }}
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-sm">
                {influencer.category}
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center pt-4">
            <span className="inline-block text-zinc-500 font-semibold mb-2">{influencer.niche}</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">{influencer.name}</h1>
            <a
              href={`https://instagram.com/${influencer.handle.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-400 font-medium mb-8 hover:text-zinc-900 transition-colors inline-flex items-center w-max"
            >
              {influencer.handle}
              <ExternalLink size={18} className="ml-2 opacity-50" />
            </a>

            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col items-center text-center">
                <div className="flex items-center text-zinc-400 mb-1 space-x-2">
                  <Users size={16} />
                  <span className="text-xs uppercase tracking-widest font-bold">{t('influencer_total')}</span>
                </div>
                <p className="text-2xl font-bold text-zinc-900">{influencer.followers}</p>
              </div>

              {influencer.platformStats?.tiktok && (
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col items-center text-center">
                  <div className="flex items-center text-zinc-400 mb-1 space-x-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
                    <span className="text-xs uppercase tracking-widest font-bold">TikTok</span>
                  </div>
                  <p className="text-2xl font-bold text-zinc-900">{influencer.platformStats.tiktok}</p>
                </div>
              )}

              {influencer.platformStats?.instagram && (
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col items-center text-center">
                  <div className="flex items-center text-zinc-400 mb-1 space-x-2">
                    <Instagram size={16} />
                    <span className="text-xs uppercase tracking-widest font-bold">IG</span>
                  </div>
                  <p className="text-2xl font-bold text-zinc-900">{influencer.platformStats.instagram}</p>
                </div>
              )}

              {influencer.platformStats?.youtube && (
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col items-center text-center">
                  <div className="flex items-center text-zinc-400 mb-1 space-x-2">
                    <Youtube size={16} />
                    <span className="text-xs uppercase tracking-widest font-bold">YT</span>
                  </div>
                  <p className="text-2xl font-bold text-zinc-900">{influencer.platformStats.youtube}</p>
                </div>
              )}
            </div>

            {/* About */}
            {influencer.bio && (
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-zinc-900 border-b border-zinc-100 pb-2">{t('influencer_about')}</h3>
                <p className="text-lg text-zinc-600 leading-relaxed font-light">
                  {influencer.bio}
                </p>
              </div>
            )}

            {/* Demographics */}
            {influencer.demographics && (influencer.demographics.gender || influencer.demographics.age || influencer.demographics.topCountries) && (
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-zinc-900 border-b border-zinc-100 pb-2">{t('demographics_title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <div className="space-y-6">
                    {influencer.demographics.gender && (influencer.demographics.gender.female || influencer.demographics.gender.male) && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">{t('demographics_gender')}</p>
                        <div className="space-y-2">
                          {influencer.demographics.gender.female && (
                            <div className="w-full">
                              <div className="flex justify-between text-xs mb-1"><span>{t('demographics_female')}</span><span>{influencer.demographics.gender.female}</span></div>
                              <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-900 rounded-full" style={{ width: influencer.demographics.gender.female }}></div>
                              </div>
                            </div>
                          )}
                          {influencer.demographics.gender.male && (
                            <div className="w-full">
                              <div className="flex justify-between text-xs mb-1"><span>{t('demographics_male')}</span><span>{influencer.demographics.gender.male}</span></div>
                              <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-400 rounded-full" style={{ width: influencer.demographics.gender.male }}></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {influencer.demographics.age && influencer.demographics.age.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">{t('demographics_age')}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {influencer.demographics.age.map(a => (
                            <div key={a.range} className="bg-white p-3 rounded-lg border border-zinc-100 shadow-sm">
                              <p className="text-[10px] text-zinc-400 uppercase font-bold">{a.range}</p>
                              <p className="text-lg font-bold">{a.percentage}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {influencer.demographics.topCountries && influencer.demographics.topCountries.length > 0 && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">{t('demographics_countries')}</p>
                      <div className="space-y-3">
                        {influencer.demographics.topCountries.map(c => (
                          <div key={c.country} className="flex items-center justify-between group">
                            <span className="text-sm font-medium">{c.country}</span>
                            <div className="flex items-center flex-grow mx-4">
                               <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-zinc-300 group-hover:bg-zinc-900 transition-colors" style={{ width: c.percentage }}></div>
                               </div>
                            </div>
                            <span className="text-sm font-bold">{c.percentage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Social & Media Kit */}
            {((influencer.platforms && influencer.platforms.length > 0) || influencer.canvaLink) && (
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4 border-b border-zinc-100 pb-2">
                  <h3 className="text-lg font-bold uppercase tracking-wide text-zinc-900">{t('influencer_social_profiles')}</h3>
                  {influencer.canvaLink && (
                    <a href={influencer.canvaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-zinc-500 hover:text-black transition-colors group">
                      <FileText size={16} className="mr-2" />
                      {t('influencer_view_media_kit')}
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
                {influencer.platforms && influencer.platforms.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {influencer.platforms.map(platform => (
                      <a key={platform} href={getPlatformUrl(platform, influencer)} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:border-black hover:shadow-md transition-all group">
                        {platform === 'Instagram' && <Instagram size={24} className="group-hover:text-pink-600 transition-colors" />}
                        {platform === 'YouTube' && <Youtube size={24} className="group-hover:text-red-600 transition-colors" />}
                        {platform === 'TikTok' && (
                          <svg className="w-[24px] h-[24px] group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" /></svg>
                        )}
                        {platform === 'Linkedin' && <Linkedin size={24} className="group-hover:text-blue-700 transition-colors" />}
                        <span className="font-semibold text-lg">{platform}</span>
                        <ExternalLink size={14} className="text-zinc-300 group-hover:text-zinc-600 ml-1" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-2xl font-bold mb-6">{t('influencer_interested_in_working')} {influencer.name.split(' ')[0]}?</h3>
              <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all text-lg group shadow-lg hover:shadow-xl">
                <Mail size={22} className="mr-3" />
                {t('influencer_request_booking')}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetail;
