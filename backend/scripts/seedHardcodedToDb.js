import dotenv from "dotenv";
import connectDB, { getDB } from "../config/db.js";
import defaultContent from "../data/defaultContent.js";

dotenv.config();

const now = () => new Date().toISOString();

const defaultTeamMembers = [
  {
    name: "Anthony W. Akoi",
    role: "Executive & Strategy Lead",
    bio: "Sets the company vision, builds partnerships, oversees strategy and administration, and ensures every project delivers a seamless, professional experience.",
    featured: true,
    image: "/Images/Anthony.png",
    linkedin: "https://www.linkedin.com/in/anthony-w-akoi-2b87b61a8",
  },
  {
    name: "Jerry G. Toe",
    role: "Creative & Technical Specialist",
    bio: "Leads creative execution and technical operations, managing media equipment, production setup, and creative administration to ensure professional delivery of all projects.",
    featured: false,
    image: "/Images/Jerry.jpg",
    linkedin: "https://www.linkedin.com/in/jerry-g-toe-37512a396",
  },
  {
    name: "Martha Belede Pristalyn Lincoln",
    role: "Marketing & Sales Manager",
    bio: "Drives marketing strategy, branding, social media management, and sales initiatives to grow market presence and secure consistent client acquisition.",
    featured: false,
    image: "/Images/Martha.png",
    linkedin: "https://www.linkedin.com/in/martha-b-p-lincoln-7b2511306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Hendrix Mayamiko Majora",
    role: "Operations & Project Manager",
    bio: "Oversees daily operations, coordinates teams and resources, and ensures all podcast and photography projects are delivered on time and to professional standards.",
    featured: false,
    image: "/Images/Hendrix.png",
    linkedin: "https://www.linkedin.com/in/hendrix-majora",
  },
  {
    name: "Benedette Naame",
    role: "Finance Officer",
    bio: "Manages budgeting, financial records, invoicing, and payments while supporting operational efficiency and long-term business growth through strategic insight.",
    featured: false,
    image: "/Images/Benedith.jpg",
    linkedin: "https://www.linkedin.com/in/benedette-naame-658150172",
  },
  {
    name: "Blessing Andyietta Jaliba",
    role: "Lead Podcast Presenter",
    bio: "Leads and hosts the AhJbm podcast, shaping its editorial direction through engaging conversations, storytelling, and community-focused discussions.",
    featured: false,
    image: "/Images/Blessing.jpg",
    linkedin: null,
  },
];

const defaultProjects = [
  {
    title: "Annual Church Conference 2024",
    category: "Conference",
    date: "March 2024",
    location: "Temara, Morocco",
    attendees: "500+",
    description: "Three-day spiritual conference coverage.",
    coverImage: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&h=750&fit=crop",
        alt: "Conference opening",
      },
      {
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=750&fit=crop",
        alt: "Conference session",
      },
    ],
    tags: ["Conference", "Event Coverage"],
  },

  {
    title: "Wedding Ceremony Highlights",
    category: "Wedding",
    date: "June 2024",
    location: "Monrovia, Liberia",
    attendees: "200+",
    description: "Elegant ceremony coverage with candid storytelling and detail shots.",
    coverImage: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=1200&h=750&fit=crop",
        alt: "Wedding couple",
      },
      {
        src: "https://images.unsplash.com/photo-1523438097201-512ae7d59ae1?w=1200&h=750&fit=crop",
        alt: "Wedding details",
      },
    ],
    tags: ["Wedding", "Portraits", "Candid"],
  },

  {
    title: "Community Youth Workshop Coverage",
    category: "Community",
    date: "August 2024",
    location: "Monrovia, Liberia",
    attendees: "80+",
    description: "Documentary-style coverage of youth learning, engagement, and teamwork.",
    coverImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&h=750&fit=crop",
        alt: "Workshop participants",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=750&fit=crop",
        alt: "Team collaboration",
      },
    ],
    tags: ["Community", "Youth", "Documentary"],
  },

  {
    title: "Brand Campaign — Product Lifestyle Shoot",
    category: "Commercial",
    date: "October 2024",
    location: "Studio Session",
    attendees: null,
    description: "Clean, modern lifestyle images for marketing and social media campaigns.",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=750&fit=crop",
        alt: "Product lifestyle hero shot",
      },
      {
        src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&h=750&fit=crop",
        alt: "Product styling details",
      },
    ],
    tags: ["Commercial", "Branding", "Product"],
  },

  {
    title: "Portrait Session — Creative Headshots",
    category: "Portrait",
    date: "November 2024",
    location: "Outdoor Session",
    attendees: null,
    description: "Natural-light portraits and professional headshots for personal branding.",
    coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=750&fit=crop",
        alt: "Portrait hero shot",
      },
      {
        src: "https://images.unsplash.com/photo-1520975958225-8d3d5d9e7d73?w=1200&h=750&fit=crop",
        alt: "Headshot close-up",
      },
    ],
    tags: ["Portrait", "Headshots", "Personal Branding"],
  },

  {
    title: "Corporate Event — Conference & Networking",
    category: "Corporate",
    date: "January 2025",
    location: "Event Hall",
    attendees: "300+",
    description: "Professional corporate event coverage including speakers, panels, and networking moments.",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=750&fit=crop",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=750&fit=crop",
        alt: "Corporate event audience",
      },
      {
        src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=1200&h=750&fit=crop",
        alt: "Networking moment",
      },
    ],
    tags: ["Corporate", "Event Coverage", "Conference"],
  },
];
const defaultEvents = [
  {
    title: "Annual Leadership Conference 2024",
    date: "March 2024",
    description: "Three-day conference featuring speakers and workshops.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
  },
  {
    title: "Wedding Ceremony & Reception",
    date: "June 2024",
    description: "Full-day wedding coverage including ceremony highlights and reception moments.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&h=600&fit=crop",
  },
  {
    title: "Community Youth Workshop",
    date: "August 2024",
    description: "Documentary coverage of youth training, collaboration, and hands-on activities.",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Campaign Photoshoot",
    date: "October 2024",
    description: "Commercial shoot for product marketing and social media content.",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
  },
  {
    title: "Portrait Day (Creative Headshots)",
    date: "November 2024",
    description: "Natural-light portrait sessions and professional headshots for personal branding.",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Networking Night",
    date: "January 2025",
    description: "Corporate event coverage: keynote moments, networking interactions, and brand visibility.",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  },
];

const defaultServices = [
  {
    iconKey: "multimedia",
    title: "Multimedia Production",
    tagline: "Inform • Educate • Inspire",
    price: null,
    description:
      "We create high-quality multimedia content that informs, educates, and inspires. This includes video productions, digital storytelling, and community-based visual projects that highlight local voices, issues, and achievements.",
    features: [
      "Video productions and digital storytelling",
      "Community-based visual projects",
      "Highlighting local voices, issues, and achievements",
    ],
    highlighted: true,
  },
  {
    iconKey: "photography",
    title: "Professional Photography",
    tagline: "Events • Campaigns • Community",
    price: null,
    description:
      "We provide photography services for events, campaigns, and community initiatives. Our work captures meaningful moments, promotes positive narratives, and visually documents community growth and activities.",
    features: [
      "Event and campaign coverage",
      "Meaningful moments and positive narratives",
      "Visual documentation of community growth",
    ],
    highlighted: false,
  },
  {
    iconKey: "talkshow",
    title: "Family Talk Shows",
    tagline: "Parenting • Youth • Values",
    price: null,
    description:
      "Our family talk show programs foster open, constructive discussions on topics such as parenting, youth challenges, digital lifestyles, social values, and community well-being. These platforms encourage intergenerational understanding and social cohesion.",
    features: [
      "Open, constructive family-centered discussions",
      "Youth challenges, digital lifestyles, and social values",
      "Intergenerational understanding and social cohesion",
    ],
    highlighted: false,
  },
  {
    iconKey: "podcast",
    title: "Podcast Production",
    tagline: "Stories • Education • Awareness",
    price: null,
    description:
      "We produce engaging podcasts that amplify community perspectives, youth stories, educational themes, and technology awareness. Our podcasts serve as accessible channels for knowledge-sharing and dialogue.",
    features: [
      "Community perspectives and youth stories",
      "Educational themes and technology awareness",
      "Accessible knowledge-sharing and dialogue",
    ],
    highlighted: false,
  },
  {
    iconKey: "training",
    title: "IT Training & Digital Literacy",
    tagline: "Youth-Focused",
    price: null,
    description:
      "We deliver structured IT training programs aimed at equipping young people with essential digital skills. Training emphasizes practical, hands-on learning to enhance employability, creativity, and responsible technology use.",
    features: [
      "Basic computer skills",
      "Digital literacy",
      "Media and content creation tools",
      "Online platforms and productivity tools",
    ],
    highlighted: false,
  },
];

const defaultBlogs = [
  {
    title: "How to Capture Authentic Moments at Live Events",
    category: "Event Photography",
    date: "February 10, 2026",
    readTime: "6 min read",
    excerpt:
      "From arrival shots to closing scenes—learn a simple workflow for documenting events with natural, story-driven images that feel real and timeless.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "A Simple Shot List That Makes Every Event Gallery Better",
    category: "Photography Tips",
    date: "February 6, 2026",
    readTime: "5 min read",
    excerpt:
      "Stop guessing what to photograph. Use this practical shot list to cover details, people, atmosphere, and key moments—without missing anything important.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "Lighting for Indoor Events: Quick Fixes That Work",
    category: "Lighting",
    date: "February 2, 2026",
    readTime: "7 min read",
    excerpt:
      "Indoor venues can be tricky. Here are fast, reliable lighting approaches—from window light to bounce flash—that keep skin tones clean and photos sharp.",
    image: "https://images.unsplash.com/photo-1520975693411-3bdfc6a1f3d0?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "Editing Workflow: From 1,000 Photos to a Clean Final Gallery",
    category: "Post-Production",
    date: "January 28, 2026",
    readTime: "8 min read",
    excerpt:
      "A beginner-friendly editing pipeline: cull faster, correct color consistently, and export galleries that look professional—without spending all night editing.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "Portrait Tips for Headshots: Posing That Looks Natural",
    category: "Portraits",
    date: "January 24, 2026",
    readTime: "6 min read",
    excerpt:
      "Awkward poses are optional. Use these simple prompts, angles, and framing tricks to create confident, natural-looking headshots for any client.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "Community Storytelling Through Photography",
    category: "Community",
    date: "January 18, 2026",
    readTime: "7 min read",
    excerpt:
      "Photography can preserve culture, celebrate progress, and build connection. Here’s how to create respectful, uplifting community stories through images.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    title: "Pre-Event Planning: Questions to Ask Before You Shoot",
    category: "Client Prep",
    date: "January 12, 2026",
    readTime: "5 min read",
    excerpt:
      "The best shoots start before the event begins. These key questions help align expectations, avoid surprises, and ensure you capture what matters most.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    title: "Building a Consistent Look: Color, Contrast, and Style",
    category: "Branding",
    date: "January 7, 2026",
    readTime: "6 min read",
    excerpt:
      "Want your work to feel instantly recognizable? Learn how to develop a consistent editing style that matches your brand and keeps galleries cohesive.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=500&fit=crop",
    featured: false,
  },
];

const defaultContactRecord = {
  name: "AHJBM Photography",
  specialty: "Event & Documentary Photography",
  email: "akoianthonyw@gmail.com",
  phone: "+212 617 827 666",
  instagram: "@Athony W. Akoi",
  location: "Temara, Morocco",
};

const withTimestamps = (docs) =>
  docs.map((doc) => ({
    ...doc,
    createdAt: doc.createdAt || now(),
    updatedAt: now(),
  }));

const seedCollectionIfEmpty = async (name, docs) => {
  const collection = getDB().collection(name);
  const count = await collection.countDocuments();
  if (count > 0) {
    console.log(`Skipping ${name}: already has ${count} document(s).`);
    return;
  }
  if (!docs.length) return;
  await collection.insertMany(withTimestamps(docs));
  console.log(`Seeded ${name}: ${docs.length} document(s).`);
};

const seedContentIfEmpty = async () => {
  const collection = getDB().collection("site_content");
  const existing = await collection.findOne({});
  if (existing) {
    console.log("Skipping site_content: already exists.");
    return;
  }
  await collection.insertOne({
    ...defaultContent,
    updatedAt: now(),
  });
  console.log("Seeded site_content.");
};

const run = async () => {
  await connectDB();

  await seedContentIfEmpty();
  await seedCollectionIfEmpty("teams", defaultTeamMembers);
  await seedCollectionIfEmpty("projects", defaultProjects);
  await seedCollectionIfEmpty("events", defaultEvents);
  await seedCollectionIfEmpty("services", defaultServices);
  await seedCollectionIfEmpty("blogs", defaultBlogs);
  await seedCollectionIfEmpty("contacts", [defaultContactRecord]);

  console.log("Hardcoded data seed completed.");
  process.exit(0);
};

run().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});

