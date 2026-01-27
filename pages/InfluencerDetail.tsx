import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { influencers } from '../data';
import { ArrowLeft, Instagram, Youtube, Linkedin, Mail, Users, BarChart3, ExternalLink } from 'lucide-react';

const InfluencerDetail: React.FC = () => {
  const { id } = useParams();
  const influencer = influencers.find(i => i.id === id);

  if (!influencer) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Influencer not found</h2>
          <Link to="/portfolio" className="text-zinc-500 hover:text-black underline flex items-center justify-center">
             <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Helper to get platform URL
  const getPlatformUrl = (platform: string, handle: string) => {
    const cleanHandle = handle.replace('@', '');
    switch(platform) {
      case 'Instagram': return `https://instagram.com/${cleanHandle}`;
      case 'TikTok': return `https://tiktok.com/@${cleanHandle}`;
      case 'YouTube': return `https://youtube.com/@${cleanHandle}`;
      case 'Linkedin': return `https://linkedin.com/in/${cleanHandle}`;
      default: return '#';
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <Link to="/portfolio" className="inline-flex items-center text-zinc-500 hover:text-black transition-colors font-medium group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Image Section - Sticky only on Desktop (lg) */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm lg:sticky lg:top-24 self-start">
               <img 
                 src={influencer.imageUrl} 
                 alt={influencer.name} 
                 className="w-full h-full object-cover" 
               />
               <div className="absolute top-4 right-4 flex gap-2">
                 <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-sm">
                    {influencer.category}
                 </span>
               </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center pt-4">
               {/* Header Info */}
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

               {/* Key Stats */}
               <div className="grid grid-cols-2 gap-6 p-6 bg-zinc-50 rounded-2xl mb-10 border border-zinc-100">
                  <div className="flex flex-col">
                    <div className="flex items-center text-zinc-400 mb-2">
                        <Users size={16} className="mr-2" />
                        <p className="text-xs uppercase tracking-widest font-bold">Followers</p>
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-zinc-900">{influencer.followers}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-zinc-400 mb-2">
                         <BarChart3 size={16} className="mr-2" />
                        <p className="text-xs uppercase tracking-widest font-bold">Engagement</p>
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-zinc-900">{influencer.engagement}</p>
                  </div>
               </div>

               {/* Description / Bio */}
               <div className="mb-10">
                 <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-zinc-900 border-b border-zinc-100 pb-2">About</h3>
                 <p className="text-lg text-zinc-600 leading-relaxed font-light">
                   {influencer.bio}
                 </p>
               </div>

               {/* Social Platforms */}
               <div className="mb-12">
                 <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-zinc-900 border-b border-zinc-100 pb-2">Social Profiles</h3>
                 <div className="flex flex-wrap gap-4">
                     {influencer.platforms.map(platform => (
                        <a 
                          key={platform} 
                          href={getPlatformUrl(platform, influencer.handle)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 px-6 py-4 bg-white border border-zinc-200 rounded-xl shadow-sm hover:border-black hover:shadow-md transition-all group"
                        >
                           {platform === 'Instagram' && <Instagram size={24} className="group-hover:text-pink-600 transition-colors" />}
                           {platform === 'YouTube' && <Youtube size={24} className="group-hover:text-red-600 transition-colors" />}
                           {platform === 'TikTok' && (
                               <svg className="w-[24px] h-[24px] group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                           )}
                           {platform === 'Linkedin' && <Linkedin size={24} className="group-hover:text-blue-700 transition-colors" />}
                           <span className="font-semibold text-lg">{platform}</span>
                           <ExternalLink size={14} className="text-zinc-300 group-hover:text-zinc-600 ml-1" />
                        </a>
                     ))}
                 </div>
               </div>

               {/* CTA */}
               <div className="pt-8 border-t border-zinc-100">
                 <h3 className="text-2xl font-bold mb-6">Interested in working with {influencer.name.split(' ')[0]}?</h3>
                 <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all text-lg group shadow-lg hover:shadow-xl">
                    <Mail size={22} className="mr-3" />
                    Request Booking
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