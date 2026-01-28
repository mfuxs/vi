import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../utils/paths';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    robots?: string;
    schema?: any;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description = "Premium Influencer Management für Marken, die den Unterschied machen wollen. Data-driven. Authentic. Vertical.",
    image = "images/share-image.jpg",
    url = window.location.href,
    robots = "index, follow",
    schema
}) => {
    const siteTitle = "Vertical Influence";
    const fullTitle = `${title} | ${siteTitle}`;
    const fullImage = image.startsWith('http') ? image : `${window.location.origin}${getAssetPath(image)}`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
