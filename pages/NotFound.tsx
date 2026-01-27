import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold text-zinc-100 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">Page not found</h2>
      <p className="text-zinc-500 max-w-md mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all group">
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;