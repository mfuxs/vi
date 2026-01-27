import { Influencer, CaseStudy } from './types';

// DATA MANAGEMENT
// WICHTIG: Hier können Influencer und Cases bearbeitet, hinzugefügt oder gelöscht werden.
// Das Design passt sich automatisch an.

export const influencers: Influencer[] = [
  {
    "id": "1",
    "name": "Affeaufbike",
    "handle": "@affeaufbike",
    "niche": "Travel / Outdoor",
    "category": "Lifestyle",
    "followers": "1.4M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/affeaufbike.jpeg",
    "bio": "Adventurer and author known for her solo motorcycle world tours and authentic storytelling.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "2",
    "name": "Beac_basti",
    "handle": "@beac_basti",
    "niche": "Entertainment / Craftsmanship",
    "category": "Handwerk",
    "followers": "1.3M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/beac_basti.jpeg",
    "bio": "Known for humor-filled tutorials, streaming room upgrades, and relatable life hacks.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "3",
    "name": "Benberg.er",
    "handle": "@benberg.er",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "338.8K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/benberg_er.jpeg",
    "bio": "Skilled carpenter and engaging creator blending hands-on woodworking tutorials with candid takes on trade apprenticeships and industry challenges.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "4",
    "name": "Bens_hardware",
    "handle": "@bens_hardware",
    "niche": "Tech",
    "category": "Tech",
    "followers": "674.8K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/bens_hardware.jpeg",
    "bio": "Tech creator specializing in PC builds, hardware reviews, and gaming setup tutorials with a focus on making tech accessible and engaging.\r\n",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "5",
    "name": "BigBangBash",
    "handle": "@bigbangbash",
    "niche": "DIY/Experimente",
    "category": "Handwerk",
    "followers": "2.6M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/bigbangbash.jpeg",
    "bio": "Creator known for humorous DIY projects, quirky experiments, and viral gadgets with a strong social media presence.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "6",
    "name": "Bruderholz",
    "handle": "@bruderholz",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "15K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/bruderholz.png",
    "bio": "Laurin and Yannes Bock, creative woodworking duo crafting unique, handcrafted cutting boards with a focus on sustainability and quality materials.",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "7",
    "name": "Claudelle.loves ",
    "handle": "@claudelle.loves",
    "niche": "Lifestyle / Health",
    "category": "Lifestyle",
    "followers": "213K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/claudelle_loves.jpeg",
    "bio": "Actress and wellness creator sharing insights on healthy living, self-care, and personal growth.",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "8",
    "name": "Dachdeckerin Sina",
    "handle": "@dachdeckerinsina",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "103.6K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/dachdeckerin_sina.png",
    "bio": "Roofer sharing insights into her trade journey, aiming to inspire young people, especially women, to pursue careers in the trades.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "9",
    "name": "Der moebelbock",
    "handle": "@dermoebelbock",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "37.4K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/der_moebelbock.jpeg",
    "bio": "Carpenter and creator focusing on creative woodworking projects; co-founder of BruderHolz with his brother Laurin Bock.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "10",
    "name": "Der.Holzbock",
    "handle": "@der.holzbock",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "603K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/der_holzbock.jpeg",
    "bio": "Laurin Bock, known as @derholzbock.official, is a master carpenter and creator who shares practical woodworking tips and promotes craftsmanship. He co-founded BruderHolz with his brother Yannes, focusing on handcrafted wooden products.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "11",
    "name": "Jenni vom Dach",
    "handle": "@jennivomdach",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "116K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/jenni_vom_dach.jpeg",
    "bio": "German master roofer and creator from Munich. She shares authentic insights into her profession, highlighting the craftsmanship and artistry involved in roofing. Her content resonates with a wide audience, showcasing the intricate details of her work and the skills required. ",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "12",
    "name": "Nikolaj.lu",
    "handle": "@nikolaj.lu",
    "niche": "Entertainment / Comedy",
    "category": "Lifestyle",
    "followers": "1.8M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/nikolaj_lu.jpeg",
    "bio": "Creator who humorously contrasts rural and urban life. With over 1.1 million followers on TikTok and 256,000 on Instagram, he shares relatable skits about village life, driving lessons, and family dynamics. His content blends observational humor with everyday experiences, resonating with a wide audience.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "13",
    "name": "Schreinerin Mara",
    "handle": "@schreinerinmara",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "35.1K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/schreinerin_mara.jpeg",
    "bio": "German carpenter and DIY creator known for transforming old buildings into dream spaces; advocates for women in trades and co-hosts the \"Baustellen-Beichten\" podcast.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "14",
    "name": "Tischlerimkopf",
    "handle": "@tischlerimkopf",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "64.7K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/tischlerimkopf.png",
    "bio": "Master carpenter who shares practical woodworking tutorials and insights into the craft. Active on TikTok, Instagram, and YouTube, he offers tips on tools, techniques, and the realities of the trade, aiming to inspire both professionals and DIY enthusiasts.",
    "platforms": [
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "15",
    "name": "Der Landwerker",
    "handle": "@derlandwerker",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "59.5K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/der_landwerker.png",
    "bio": "",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "16",
    "name": "Alaeddin68",
    "handle": "@alaeddin68",
    "niche": "Entertainment / Comedy",
    "category": "Lifestyle",
    "followers": "1.4M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/alaeddin68.jpeg",
    "bio": "Comedy creator known for his humorous TikToks and Instagram content, sharing relatable life hacks and sketches. ",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "17",
    "name": "Anna_mclean",
    "handle": "@anna_mclean",
    "niche": "Travel / DIY",
    "category": "Handwerk",
    "followers": "346.9K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/anna_mclean.jpeg",
    "bio": "Content creator specializing in DIY, home improvement, lifestyle projects and hacks. With over 1.1 million followers on TikTok, he shares humorous and relatable tutorials on topics like drywall installation, acoustic paneling, and custom furniture builds. His engaging approach resonates with audiences seeking practical and entertaining home project inspiration.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "18",
    "name": "Bianci0409",
    "handle": "@bianci0409",
    "niche": "Lifestyle",
    "category": "Lifestyle",
    "followers": "351K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/bianci0409.jpeg",
    "bio": "Momfluencer sharing authentic family moments, lifestyle insights, and candid discussions with her brother Julian Claßen.",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "19",
    "name": "Bluebrywow",
    "handle": "@bluebrywow",
    "niche": "Tech",
    "category": "Tech",
    "followers": "1.4M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/bluebrywow.jpeg",
    "bio": "Tech creator known for smartphone hacks, app tips, and viral gadget content, with a strong presence on TikTok and Instagram.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "20",
    "name": "Crackingchris",
    "handle": "@crackingchris",
    "niche": "Health / Sports ",
    "category": "Lifestyle",
    "followers": "1.1M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/crackingchris.jpeg",
    "bio": "Physiotherapist and creator sharing manual therapy techniques, self-help tips, and humorous content on body wellness.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "21",
    "name": "Dasistjay",
    "handle": "@dasistjay",
    "niche": "Tech",
    "category": "Tech",
    "followers": "1.4M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/dasistjay.jpeg",
    "bio": "Tech creator producing engaging short-form videos on smartphones, gadgets, and digital trends. He shares tech insights and tutorials across TikTok, Instagram, and YouTube.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "22",
    "name": "Der Schaeng",
    "handle": "@derschaeng",
    "niche": "Entertainment / Comedy",
    "category": "Lifestyle",
    "followers": "417K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/der_schaeng.jpeg",
    "bio": "Creates comedic skits and relatable everyday content with a local twist, known for his witty take on German culture.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "23",
    "name": "FahrlehrerLukas",
    "handle": "@fahrlehrerlukas",
    "niche": "Infotainment / Education",
    "category": "Lifestyle",
    "followers": "1.3M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/fahrlehrerlukas.jpeg",
    "bio": "Lukas, known as @fahrlehrerlukas, is a driving instructor and content creator from Heidelberg. He shares humorous and educational videos on driving lessons, exam tips, and everyday traffic situations across TikTok, Instagram, and YouTube. His engaging content has garnered him a substantial following, making him a popular figure in driving education.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "24",
    "name": "iliasbsd",
    "handle": "@iliasbsd",
    "niche": "Tech",
    "category": "Tech",
    "followers": "286.4K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/iliasbsd.jpeg",
    "bio": "Ilias, known as @iliasbsd, is a tech creator producing engaging short-form videos on smartphones, gadgets, and digital trends. He shares tech insights and tutorials across TikTok, Instagram, and YouTube.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "25",
    "name": "JenlovesTech",
    "handle": "@jenlovestech",
    "niche": "Tech",
    "category": "Tech",
    "followers": "25.4K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/jenlovestech.jpeg",
    "bio": "Jen, known as @jen_loves_tech, is a leading female tech creator in the German market, offering clear and relatable gadget reviews and smartphone tips that stand out in a male-dominated tech space.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "26",
    "name": "Julienco_",
    "handle": "@julienco_",
    "niche": "Entertainment / Comedy",
    "category": "Lifestyle",
    "followers": "13.2M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/julienco_.jpeg",
    "bio": "One of Germany’s leading creators, famous for his humorous lifestyle content, pranks, and vlogs. With millions of followers across Instagram and TikTok, he has built a strong, authentic connection with a wide audience. Julienco is recognized for blending entertainment with personal storytelling, making him a prominent figure in the German social media landscape. Beyond content creation, he is also an entrepreneur, launching successful ventures like Juizy Wow.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "27",
    "name": "Kirafin",
    "handle": "@kirafin",
    "niche": "Entertainment",
    "category": "Lifestyle",
    "followers": "1.9M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/kirafin.jpeg",
    "bio": "Creator and social media strategist with over 1.3M TikTok followers. Known for humorous pranks, challenges, and trend analysis, he stands out with his sharp, satirical style. ",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "28",
    "name": "Lucylacht",
    "handle": "@lucylacht",
    "niche": "DIY/Lifestyle",
    "category": "Handwerk",
    "followers": "2.4M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/lucylacht.jpeg",
    "bio": "known for her positive and creative content, including DIY projects, lifestyle, fitness, and relationship topics. She first gained attention with her tufting rug DIYs and has since built a loyal community. She combines authenticity and approachability to stand out in the content space.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "29",
    "name": "Mariusfuxs",
    "handle": "@mariusfuxs",
    "niche": "Tech",
    "category": "Tech",
    "followers": "349.5K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/mariusfuxs.jpeg",
    "bio": "Tech creator and entrepreneur who gained prominence on TikTok with over 297,000 followers. He specializes in simplifying complex tech topics, offering gadget reviews, automation tips, and digital lifestyle insights. Marius has expanded his influence through YouTube and Instagram, where he shares in-depth content and engages with his audience. ",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "30",
    "name": "Michafritz",
    "handle": "@michafritz",
    "niche": "Education / Politics",
    "category": "Lifestyle",
    "followers": "320K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/michafritz.jpeg",
    "bio": "Michael Fritz (@michafritz) is a conceptual activist and co-founder of Viva con Agua, a global network improving access to clean water and sanitation for millions since 2006. The organization operates on a unique \"All Profit\" model, ensuring shared benefits for everyone involved.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "31",
    "name": "Moris.odndhl",
    "handle": "@moris.odndhl",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "828.7K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/moris_odndhl.jpeg",
    "bio": "German roofer and comedian who blends craftsmanship with humor. As a journeyman roofer and aspiring master, he creates comedic sketches that depict everyday situations in the roofing and construction industry. ",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "32",
    "name": "Muhammed_kaan",
    "handle": "@muhammed_kaan",
    "niche": "Tech",
    "category": "Tech",
    "followers": "450.7K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/muhammed_kaan.jpeg",
    "bio": "Tech creator and entrepreneur who shares practical technology tips, app recommendations, and gadget deals. He engages his audience through platforms like TikTok, Instagram, and YouTube, offering insights into the latest tech trends and tools. In addition to his content creation, Muhammed developed \"mukaan.de\", which provides users with curated tech tips and deals directly on their smartphones.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "33",
    "name": "Paulascakefactory",
    "handle": "@paulascakefactory",
    "niche": "Craftsmanship",
    "category": "Handwerk",
    "followers": "12.5K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/paulascakefactory.jpeg",
    "bio": "Paula, known as @paulascakefactory, is a German pastry chef and content creator specializing in vintage-style cakes. She shares baking tutorials and offers digital guides and recipes through her online shop, catering to both aspiring and experienced bakers.",
    "platforms": [
      "Instagram"
    ]
  },
  {
    "id": "34",
    "name": "Paulherter",
    "handle": "@paulherter",
    "niche": "Tech",
    "category": "Tech",
    "followers": "211.6K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/paulherter.jpeg",
    "bio": "Tech creator and podcaster known for accessible insights on smart technology and digital trends; co-host of the \"AirTech\" podcast.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "35",
    "name": "Rafaelneugart",
    "handle": "@rafaelneugart",
    "niche": "Lifestyle / Comedy",
    "category": "Lifestyle",
    "followers": "2.3M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/rafaelneugart.png",
    "bio": "Creator celebrated for his dynamic blend of comedy, adventure, and lifestyle content. With over 1.4 million subscribers on YouTube and more than 850,000 followers on Instagram, he captivates a broad audience with his engaging videos and authentic storytelling. ",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "36",
    "name": "RGBCEM",
    "handle": "@rgbcem",
    "niche": "Tech",
    "category": "Tech",
    "followers": "1.1M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/rgbcem.jpeg",
    "bio": "German creator specializing in tech and gaming content, sharing practical PC tips and gaming setup guides with engaging and humorous style.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "37",
    "name": "Schliingeel",
    "handle": "@schliingeel",
    "niche": "Entertainment / Education",
    "category": "Lifestyle",
    "followers": "2.3M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/schliingeel.jpeg",
    "bio": "German content creator known for engaging and humorous videos featuring optical illusions, fun facts, and relatable scenarios; active on TikTok, Instagram, and YouTube.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "38",
    "name": "Sinyas.thecookingdad",
    "handle": "@sinyas.thecookingdad",
    "niche": "Cooking",
    "category": "Lifestyle",
    "followers": "688K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/sinyas_thecookingdad.png",
    "bio": "German creator known for engaging cooking tutorials, blending humor and music.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "39",
    "name": "Sliiema",
    "handle": "@sliiema",
    "niche": "Tech",
    "category": "Tech",
    "followers": "377.4K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/sliiema.jpeg",
    "bio": "Creator specializing in tech with an interest in fitness, and fashion. He shares engaging content across platforms like TikTok, Instagram, and Twitch, offering insights into technology trends.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "40",
    "name": "Sophiatokk",
    "handle": "@sophiatokk",
    "niche": "Entertainment",
    "category": "Lifestyle",
    "followers": "258.4K",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/sophiatokk.jpeg",
    "bio": "German content creator known for humorous and relatable videos on everyday topics.",
    "platforms": [
      "TikTok",
      "Instagram"
    ]
  },
  {
    "id": "41",
    "name": "Spybas",
    "handle": "@spybas",
    "niche": "Entertainment / Education",
    "category": "Lifestyle",
    "followers": "1.5M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/spybas.jpeg",
    "bio": "Creator who combines humor with educational content across TikTok, Instagram, and YouTube. With over 1.2 million followers on TikTok, he engages audiences through comedic skits, experiments, and relatable life scenarios, aiming to make scientific topics accessible and entertaining.",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "42",
    "name": "TikTokTechnik",
    "handle": "@tiktoktechnik",
    "niche": "Tech",
    "category": "Tech",
    "followers": "1.8M",
    "engagement": "5.0%",
    "imageUrl": "/vi/images/creators/tiktoktechnik.jpeg",
    "bio": "Tech creator known for delivering concise and practical tips on smartphones, apps, and gadgets. With over 1.2 million followers on TikTok and a significant presence on Instagram, he shares content that includes iPhone hacks, app recommendations, and gadget reviews. His engaging and informative style resonates with a broad audience seeking accessible tech insights.\r\n",
    "platforms": [
      "TikTok",
      "Instagram",
      "YouTube"
    ]
  },
  {
    "id": "43",
    "name": "Mike Imos",
    "handle": "@mikeimos",
    "niche": "Craftsmanship ",
    "category": "Handwerk",
    "followers": "163K",
    "engagement": "5.0%",
    "imageUrl": "https://ui-avatars.com/api/?name=Mike%20Imos&background=random&size=200",
    "bio": "",
    "platforms": [
      "TikTok"
    ]
  },
  {
    "id": "44",
    "name": "Dachdeckerin Fabienne",
    "handle": "@dachdeckerinfabienne",
    "niche": "Craftsmanship ",
    "category": "Handwerk",
    "followers": "33K",
    "engagement": "5.0%",
    "imageUrl": "https://ui-avatars.com/api/?name=Dachdeckerin%20Fabienne&background=random&size=200",
    "bio": "",
    "platforms": [
      "TikTok"
    ]
  },
  {
    "id": "45",
    "name": "Rene Lang",
    "handle": "@renelang",
    "niche": "Craftsmanship ",
    "category": "Handwerk",
    "followers": "146K",
    "engagement": "5.0%",
    "imageUrl": "https://ui-avatars.com/api/?name=Rene%20Lang&background=random&size=200",
    "bio": "",
    "platforms": [
      "TikTok"
    ]
  }
];

export const caseStudies: CaseStudy[] = [

  {
    "id": "1",
    "client": "HOMAG",
    "title": "Benberger x HOMAG",
    "description": "Detaillierte Case Study als PDF verfügbar.",
    "stats": [],
    "imageUrl": "https://placehold.co/1600x900/18181b/ffffff?text=Benberger%20x%20HOMAG",
    "tags": [
      "PDF Case"
    ],
    "pdfUrl": "/vi/cases/benberger_x_homag.pdf"
  },
  {
    "id": "2",
    "client": "PDR",
    "title": "PDR x Vertical Influence",
    "description": "Detaillierte Case Study als PDF verfügbar.",
    "stats": [],
    "imageUrl": "https://placehold.co/1600x900/18181b/ffffff?text=PDR%20x%20Vertical%20Influence",
    "tags": [
      "PDF Case"
    ],
    "pdfUrl": "/vi/cases/pdr_x_vertical_influence_3.pdf"
  },
  {
    "id": "3",
    "client": "Juizy Wow",
    "title": "Wow Da Phone",
    "description": "Detaillierte Case Study als PDF verfügbar.",
    "stats": [],
    "imageUrl": "https://placehold.co/1600x900/18181b/ffffff?text=Wow%20Da%20Phone",
    "tags": [
      "PDF Case"
    ],
    "pdfUrl": "/vi/cases/wow_da_phone.pdf"
  },
  {
    "id": "4",
    "client": "Wow",
    "title": "Wow Case Study",
    "description": "Detaillierte Case Study als PDF verfügbar.",
    "stats": [],
    "imageUrl": "https://placehold.co/1600x900/18181b/ffffff?text=Wow%20Case%20Study",
    "tags": [
      "PDF Case"
    ],
    "pdfUrl": "/vi/cases/6597.pdf"
  }

];
