export const site = {
  name: "Ashrafi Marine Products",
  shortName: "Ashrafi Marine",
  tagline: "Quality dry fish. Reliable wholesale supply.",
  description:
    "Ashrafi Marine Products is a dry fish merchant and wholesale supplier based in Madh Island, Mumbai, serving wholesale buyers, retailers, distributors and commercial buyers across India.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.ashrafimarineproducts.com",
  location: {
    locality: "Madh Island",
    city: "Mumbai",
    region: "Maharashtra",
    country: "India",
    countryCode: "IN",
    display: "Madh Island, Mumbai, Maharashtra, India",
  },
  operatingRegion: "India",
} as const;

export type Contact = {
  id: string;
  name: string;
  role: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsapp: string;
  initials: string;
};

export const contacts: Contact[] = [
  {
    id: "amin",
    name: "Amin Machiwala",
    role: "Business enquiries",
    phoneDisplay: "+91 99300 83206",
    phoneHref: "tel:+919930083206",
    whatsapp: "919930083206",
    initials: "AM",
  },
  {
    id: "rehan",
    name: "Rehan Macchiwala",
    role: "Business enquiries",
    phoneDisplay: "+91 98675 14656",
    phoneHref: "tel:+919867514656",
    whatsapp: "919867514656",
    initials: "RM",
  },
];

export type Product = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  category: "Jawla" | "Mixed" | "Other";
  summary: string;
  description: string;
  highlights: string[];
  image: "productJawla" | "productMixed" | "productOther";
  alt: string;
};

export const products: Product[] = [
  {
    slug: "jawla-dry-fish",
    index: "01",
    name: "Jawla Dry Fish",
    shortName: "Jawla",
    category: "Jawla",
    summary:
      "Dried tiny prawns — also called baby dry shrimp or sookha jheenga — supplied in bulk. Not intended for human consumption.",
    description:
      "Jawla is dried tiny prawn, known in the trade as baby dry shrimp or sookha jheenga. This stock is not intended for human consumption and is supplied in bulk. Share the intended application, quantity and delivery location, and the team will confirm availability and wholesale pricing for your requirement.",
    highlights: ["Dried tiny prawns", "Not for human consumption", "Bulk enquiry"],
    image: "productJawla",
    alt: "Dried tiny prawns (Jawla), also called baby dry shrimp or sookha jheenga",
  },
  {
    slug: "mixed-dry-fish",
    index: "02",
    name: "Mixed Dry Fish",
    shortName: "Mixed",
    category: "Mixed",
    summary:
      "A combined assortment for buyers who prefer to source multiple dry fish varieties through a single business enquiry.",
    description:
      "Mixed dry fish is suited to market traders, retail counters and distributors who need an assortment rather than a single variety. Share the mix, quantity and destination you have in mind, and availability can be confirmed directly with our team.",
    highlights: ["Assorted varieties", "Single enquiry", "Trade-focused"],
    image: "productMixed",
    alt: "An assortment of dried fish varieties displayed at a coastal market",
  },
  {
    slug: "other-dry-fish-varieties",
    index: "03",
    name: "Other Dry Fish Varieties",
    shortName: "Other varieties",
    category: "Other",
    summary:
      "Looking for a specific dry fish variety, grade or pack? Tell us what your business needs and we will check availability.",
    description:
      "Beyond Jawla and mixed lots, requirements vary from buyer to buyer. If you are sourcing a particular dry fish variety, grade or presentation, send through the details and our team will respond with what can be arranged for your requirement.",
    highlights: ["Specific varieties", "Grade on enquiry", "Requirement-led"],
    image: "productOther",
    alt: "A pile of dried small fish on a dark surface, representing dry fish varieties",
  },
];

export const categories = ["All", "Jawla", "Mixed", "Other"] as const;

export const features = [
  {
    index: "01",
    icon: "scale",
    title: "Wholesale-Focused Business",
    copy: "Our enquiry process is built around trade buyers — quantity, variety and destination first, so conversations stay commercial and direct.",
  },
  {
    index: "02",
    icon: "fish",
    title: "Multiple Dry Fish Varieties",
    copy: "Jawla, mixed dry fish and other varieties are available to discuss, with availability confirmed against each specific requirement.",
  },
  {
    index: "03",
    icon: "package",
    title: "Bulk Quantity Enquiries",
    copy: "Requirements can be shared in kilograms or tonnes, making it straightforward to enquire for retail, distribution or larger trade lots.",
  },
  {
    index: "04",
    icon: "map",
    title: "India-Wide Business Operations",
    copy: "Based in Madh Island, Mumbai, we welcome wholesale and bulk enquiries from buyers and businesses across India.",
  },
  {
    index: "05",
    icon: "phone",
    title: "Direct Communication",
    copy: "Speak directly with the business on call or WhatsApp. No layered call centres and no automated sales funnels.",
  },
  {
    index: "06",
    icon: "handshake",
    title: "Customer-Oriented Approach",
    copy: "Every enquiry is treated as its own requirement. Share what you need and the team will respond with the relevant next step.",
  },
] as const;

export const regions = [
  {
    name: "West India",
    states: "Maharashtra · Gujarat · Goa",
  },
  {
    name: "North India",
    states: "Delhi NCR · Punjab · Uttar Pradesh",
  },
  {
    name: "East India",
    states: "West Bengal · Odisha · Assam",
  },
  {
    name: "South India",
    states: "Tamil Nadu · Kerala · Karnataka · Andhra Pradesh · Telangana",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Share your requirement",
    copy: "Send the product, quantity, unit and delivery location through WhatsApp, a call or the enquiry form.",
  },
  {
    index: "02",
    title: "Confirm availability & pricing",
    copy: "The team reviews your requirement and responds with availability and wholesale pricing for that specific enquiry.",
  },
  {
    index: "03",
    title: "Agree the commercial terms",
    copy: "Quantities, pricing and logistics are confirmed directly between your business and ours before any order is placed.",
  },
  {
    index: "04",
    title: "Coordinate the dispatch",
    copy: "Once terms are agreed, dispatch details are coordinated with you for the confirmed destination.",
  },
] as const;

export const faqs = [
  {
    q: "Do you supply dry fish outside Maharashtra?",
    a: "Yes. Ashrafi Marine Products is based in Madh Island, Mumbai, and welcomes wholesale and bulk enquiries from buyers across India. Share your delivery location and the team will confirm what can be arranged.",
  },
  {
    q: "How do I get wholesale pricing?",
    a: "Pricing depends on the product, quantity, grade and destination, so it is shared against your specific requirement. Send the details on WhatsApp or through the enquiry form and the team will respond.",
  },
  {
    q: "What quantity can I enquire about?",
    a: "Bulk enquiries can be shared in kilograms or tonnes. There is no online checkout — every requirement is reviewed and confirmed directly with the business.",
  },
  {
    q: "Can I request a specific dry fish variety?",
    a: "Yes. Jawla, mixed dry fish and other varieties can be discussed. If you are looking for something specific, include the variety, grade and quantity in your message and availability will be checked.",
  },
  {
    q: "Is the website storing my enquiry?",
    a: "No. The enquiry form prepares your details as a WhatsApp message so you can send them directly to the business. Nothing is saved or submitted to a database on this website.",
  },
] as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
] as const;
