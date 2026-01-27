import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] bg-zinc-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Let's create something together.</h1>
        <p className="text-xl text-zinc-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Du bist eine Brand und suchst nach strategischem Influencer Marketing? 
            Oder bist du Creator und suchst ein Management, das dich versteht?
            Wir freuen uns auf den Austausch.
        </p>

        <a href="mailto:hello@vertical-influence.de" className="inline-flex items-center justify-center text-3xl md:text-5xl font-bold text-black hover:text-zinc-600 transition-colors">
            <Mail className="w-8 h-8 md:w-12 md:h-12 mr-4 md:mr-6" />
            hello@vertical-influence.de
        </a>
      </div>
    </div>
  );
};

export default Contact;