export const getAssetPath = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's base path
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
};
