import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Let's create something together.</h1>
                <p className="text-lg text-zinc-600 mb-12">
                    Du bist eine Brand und suchst nach strategischem Influencer Marketing? 
                    Oder bist du Creator und suchst ein Management, das dich versteht?
                    Wir freuen uns auf den Austausch.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-zinc-900">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <a href="mailto:hello@vertical-influence.de" className="text-zinc-600 hover:text-black transition-colors">hello@vertical-influence.de</a>
                            <p className="text-sm text-zinc-400 mt-1">We answer within 24h.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-zinc-900">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p className="text-zinc-600">+49 (0) 30 123 456 78</p>
                            <p className="text-sm text-zinc-400 mt-1">Mon-Fri, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white rounded-full shadow-sm text-zinc-900">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Office</h3>
                            <p className="text-zinc-600">
                                Torstraße 101<br />
                                10119 Berlin<br />
                                Germany
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-900">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Jane" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-zinc-900">Last Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-900">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="jane@brand.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-900">I am interested in...</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all">
                            <option>Influencer Campaign</option>
                            <option>Talent Management</option>
                            <option>Content Production</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-zinc-900">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-zinc-800 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
