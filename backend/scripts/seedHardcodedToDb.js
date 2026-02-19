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
    tags: ["Conference", "Worship"],
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
];

const defaultServices = [
  {
    title: "Event Photography",
    tagline: "Live Coverage",
    price: "Custom Pricing",
    description: "Comprehensive live event coverage with documentary style.",
    features: ["Candid moments", "Professional editing"],
    highlighted: true,
  },
];

const defaultBlogs = [
  {
    title: "5 Tips for Capturing Authentic Event Moments",
    category: "Photography Tips",
    date: "January 15, 2026",
    readTime: "5 min read",
    excerpt: "Learn how to document live events while preserving authentic moments.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    featured: true,
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

