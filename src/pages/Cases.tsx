import React from 'react';
import { caseStudies } from '../data';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';

const Cases: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <SEO
        title="Case Studies"
        description="Ausgewählte Kampagnen und Erfolgsgeschichten. Sehen Sie, wie wir Markenbotschaften in kulturelle Momente verwandeln."
      />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-zinc-500 max-w-2xl">
            Ergebnisse, die für sich sprechen. Hier zeigen wir, wie wir Markenbotschaften in kulturelle Momente verwandeln.
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>

              {/* Image Side */}
              <div className="w-full md:w-3/5">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={getAssetPath(item.imageUrl)}
                    alt={item.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{item.client}</span>
                  <div className="h-px w-10 bg-zinc-200"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{item.title}</h2>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  {item.description}
                </p>

                <div className="grid grid-cols-3 gap-4 border-y border-zinc-100 py-6">
                  {item.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                      <p className="text-xs text-zinc-500 uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-50 border border-zinc-100 text-zinc-500 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.pdfUrl ? (
                  <a href={getAssetPath(item.pdfUrl)} target="_blank" rel="noopener noreferrer" className="flex items-center text-black font-semibold hover:underline decoration-2 underline-offset-4 group">
                    Download Case Study (PDF)
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <button className="flex items-center text-black font-semibold hover:underline decoration-2 underline-offset-4 group">
                    View Full Case
                    <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cases;
