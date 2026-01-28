import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Mail } from 'lucide-react';
import { influencers, caseStudies } from '../data';
import SEO from '../components/SEO';
import { getAssetPath } from '../utils/paths';

const Home: React.FC = () => {
  const featuredInfluencers = influencers.slice(0, 3);
  const featuredCases = caseStudies.slice(0, 2);

  return (
    <div className="w-full">
      <SEO
        title="Home"
        description="Vertical Influence verbindet erstklassige Creator mit visionären Marken. Wir schaffen Kampagnen, die nicht nur gesehen, sondern gefühlt werden."
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-zinc-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Abstract decorative background */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold tracking-widest uppercase mb-6 text-zinc-500">
            Influencer Management Redefined
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            We build brands through<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900">authentic voices.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10 font-light">
            Vertical Influence verbindet erstklassige Creator mit visionären Marken.
            Wir schaffen Kampagnen, die nicht nur gesehen, sondern gefühlt werden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio" className="group bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center">
              Discover Talent
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/cases" className="px-8 py-4 rounded-full font-medium text-zinc-600 hover:text-black border border-transparent hover:border-zinc-200 transition-all">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-900">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-zinc-500 uppercase text-sm tracking-wide">Exclusive Creators</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-900">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">150M+</h3>
            <p className="text-zinc-500 uppercase text-sm tracking-wide">Monthly Reach</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-zinc-900">
              <Award size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-2">200+</h3>
            <p className="text-zinc-500 uppercase text-sm tracking-wide">Successful Campaigns</p>
          </div>
        </div>
      </section>

      {/* Short About */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Vertical Influence by inSocial</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Als spezialisierte Unit von inSocial fokussieren wir uns auf vertikale Videoformate und High-Impact Personalities.
            Unsere Philosophie ist einfach: Datengetriebene Strategie trifft auf menschliche Kreativität.
            Wir managen nicht nur Influencer, wir bauen Karrieren und Markenbotschafter.
          </p>
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Talent</h2>
              <p className="text-zinc-500 max-w-xl">Curated voices that resonate. Meet some of our top performers.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-sm font-semibold hover:underline">
              View Roster <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInfluencers.map(influencer => (
              <Link to={`/portfolio/${influencer.id}`} key={influencer.id} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-4 shadow-sm">
                  <img src={getAssetPath(influencer.imageUrl)} alt={influencer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-bold group-hover:text-zinc-600 transition-colors">{influencer.name}</h3>
                <p className="text-sm text-zinc-500">{influencer.niche}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/portfolio" className="flex items-center text-sm font-semibold hover:underline">
              View Roster <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
              <p className="text-zinc-500 max-w-xl">Real results driven by authentic storytelling.</p>
            </div>
            <Link to="/cases" className="hidden md:flex items-center text-sm font-semibold hover:underline">
              View All Cases <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCases.map(study => (
              <Link to="/cases" key={study.id} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-200 mb-6 shadow-md">
                  <img src={getAssetPath(study.imageUrl)} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{study.client}</span>
                  <div className="h-px w-8 bg-zinc-200"></div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{study.title}</h3>
                <p className="text-zinc-600 line-clamp-2">{study.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/cases" className="flex items-center text-sm font-semibold hover:underline">
              View All Cases <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to amplify your reach?</h2>
          <p className="text-xl text-zinc-600 mb-10">
            Let's discuss how we can elevate your brand with the right voices.
          </p>
          <a
            href="mailto:hello@vertical-influence.de"
            className="inline-flex items-center justify-center space-x-3 text-2xl md:text-3xl font-bold hover:text-zinc-600 transition-colors border-b-2 border-black hover:border-zinc-600 pb-1"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
            <span>hello@vertical-influence.de</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;