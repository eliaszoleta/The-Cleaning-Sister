export interface BusinessInfo {
  name: string;
  /** Brand line from the logo. */
  tagline: string;
  owner: string;
  logoUrl: string;
  phone: string;
  phoneRaw: string;
  /** The business asks customers to text, not call. */
  textOnly: boolean;
  email: string;
  address: string;
  addressLine2: string;
  city: string;
  province: string;
  yearsInBusiness: number;
  instagramUrl: string;
  instagramHandle: string;
  /** Add the Facebook / Google Business Profile links here once they exist; they show up site-wide. */
  facebookUrl?: string;
  googleBusinessUrl?: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "The Cleaning Sister",
  tagline: "Clean Spaces, Happy Places",
  owner: "Daiana da Silva",
  logoUrl: "/logo.png",
  phone: "(437) 215-0588",
  phoneRaw: "4372150588",
  textOnly: true,
  email: "thecleaningsisterss2@gmail.com",
  address: "541 Blackthorn Ave",
  addressLine2: "Toronto, ON",
  city: "Toronto",
  province: "ON",
  yearsInBusiness: 7,
  instagramUrl: "https://www.instagram.com/thecleaningsisters2/",
  instagramHandle: "@thecleaningsisters2",
};

/** sms: link for "Text us" buttons (the phone line is text-only). */
export const SMS_HREF = `sms:+1${BUSINESS_INFO.phoneRaw}`;

/** Social / review profiles that exist (used for schema sameAs and footer links). */
export const SOCIAL_LINKS = [
  { label: "Instagram", url: BUSINESS_INFO.instagramUrl },
  BUSINESS_INFO.facebookUrl && { label: "Facebook", url: BUSINESS_INFO.facebookUrl },
  BUSINESS_INFO.googleBusinessUrl && { label: "Google", url: BUSINESS_INFO.googleBusinessUrl },
].filter((link): link is { label: string; url: string } => Boolean(link));

export interface Specialty {
  /** Same as the service page slug. */
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
}

// Services from the client's application, Canva site and logo.
export const CORE_SPECIALTIES: Specialty[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    badge: "Most Popular",
    summary:
      "Regular weekly, bi-weekly or monthly cleaning that keeps your home fresh all the time.",
    description:
      "Kitchens, bathrooms, bedrooms and living areas cleaned top to bottom on a schedule that fits your family.",
    features: [
      "Kitchen and bathrooms sanitized",
      "Dusting, vacuuming and mopping",
      "Weekly, bi-weekly or monthly",
      "Same trusted cleaner every visit",
    ],
    image: "/images/house-cleaning-toronto.jpg",
    imageAlt: "Spotless white soaking tub and fresh towels after a house cleaning in Toronto",
  },
  {
    id: "condo-apartment-cleaning",
    title: "Condo & Apartment Cleaning",
    badge: "Condo Pros",
    summary: "Detailed cleaning for Toronto condos and apartments, from studios to penthouses.",
    description:
      "We know condo life: concierge check-ins, elevator bookings and small spaces that need to shine.",
    features: [
      "Kitchen, bathroom and living areas",
      "Balcony doors and glass wiped",
      "Floors vacuumed and mopped",
      "Works with building rules",
    ],
    image: "/images/condo-apartment-cleaning-toronto.jpg",
    imageAlt: "Clean, bright condo living room with a lake view in Toronto",
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    badge: "Top to Bottom",
    summary:
      "A detailed top-to-bottom clean for built-up grime, baseboards, grout and hidden corners.",
    description:
      "Perfect for a first clean, spring cleaning or before hosting. We reach the spots regular cleaning skips.",
    features: [
      "Baseboards, doors and trim",
      "Grout, tiles and soap scum",
      "Inside microwave and appliance fronts",
      "Light fixtures and vents dusted",
    ],
    image: "/images/deep-cleaning-toronto.jpg",
    imageAlt: "Sparkling clean bathroom and laundry area after a deep cleaning in Toronto",
  },
  {
    id: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    badge: "Moving Day",
    summary: "Empty-home cleaning for tenants, landlords, buyers, sellers and realtors.",
    description:
      "Get your deposit back or hand over the keys to a spotless home. We clean inside cabinets, appliances and closets.",
    features: [
      "Inside cabinets and drawers",
      "Inside fridge and oven",
      "Bathrooms scrubbed and sanitized",
      "Ready for the final walkthrough",
    ],
    image: "/images/move-in-move-out-cleaning-toronto.jpg",
    imageAlt: "Clean empty kitchen ready for move-in after a move-out cleaning in Toronto",
  },
  {
    id: "airbnb-cleaning",
    title: "Airbnb & Short-Term Rental Cleaning",
    badge: "Host Favourite",
    summary:
      "Fast, reliable turnovers between guests so your reviews keep mentioning how clean it is.",
    description:
      "Fresh linens, restocked essentials and a guest-ready space for every check-in in Toronto and the GTA.",
    features: [
      "Linens changed and beds made",
      "Bathrooms and kitchen reset",
      "Essentials restocked",
      "Damage or issues reported to you",
    ],
    image: "/images/airbnb-cleaning-toronto.jpg",
    imageAlt: "Guest-ready bedroom with fresh white linens after an Airbnb cleaning in Toronto",
  },
  {
    id: "commercial-office-cleaning",
    title: "Office & Commercial Cleaning",
    badge: "Businesses",
    summary:
      "Clean, healthy offices and commercial spaces on a schedule that works around your hours.",
    description:
      "Desks, meeting rooms, kitchens and washrooms kept clean for your team and your clients.",
    features: [
      "Desks and meeting rooms",
      "Washrooms and kitchenettes sanitized",
      "Floors and entrances",
      "Before or after business hours",
    ],
    image: "/images/office-commercial-cleaning-toronto.jpg",
    imageAlt: "Clean office meeting room and floors after commercial cleaning in Toronto",
  },
  {
    id: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    badge: "After Renos",
    summary:
      "Dust, debris and residue cleared after renovations and new builds so you can move in.",
    description:
      "Drywall dust gets everywhere. We clean it off every surface, inside and out, after your contractors leave.",
    features: [
      "Fine dust removed from every surface",
      "Windows, sills and frames",
      "Cabinets inside and out",
      "Floors cleaned edge to edge",
    ],
    image: "/images/post-construction-cleaning-toronto.jpg",
    imageAlt:
      "Bright, dust-free space with polished floors after post-construction cleaning in Toronto",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

// From the client's existing Canva website.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've tried several cleaning services in Toronto and The Cleaning Sister is by far the best. They're consistent, thorough, and the team is always friendly. My house has never looked better!",
    author: "Happy homeowner",
    detail: "House Cleaning · Toronto",
  },
  {
    quote:
      "We use The Cleaning Sister for our vacation rental turnovers and they never disappoint. Quick, reliable, and our guests always mention how clean the place is in their reviews.",
    author: "Amanda C.",
    detail: "Airbnb Host · via Facebook",
  },
];

export interface GalleryProject {
  id: string;
  /** Service page slug this photo belongs to (also picks the placeholder icon). */
  serviceSlug: string;
  title: string;
  category: string;
  location: string;
  /** Photo path in public/gallery/. Leave empty to show a "photo coming soon" panel. */
  imageUrl?: string;
  seoAlt: string;
  seoDescription: string;
  highlights: string[];
  description: string;
}

// Home page gallery. Swap in real job photos (public/gallery/<service>-<area>.jpg) as they come in.
export const WORK_GALLERY: GalleryProject[] = [
  {
    id: "bedroom-house-cleaning",
    serviceSlug: "house-cleaning",
    title: "Bedroom Refresh",
    category: "House Cleaning",
    location: "North York, ON",
    imageUrl: "/gallery/bedroom-house-cleaning-north-york.jpg",
    seoAlt: "Clean, tidy bedroom with fresh bedding after house cleaning in North York",
    seoDescription: "Dusted surfaces, made bed and freshly vacuumed floors and rugs.",
    highlights: ["Beds made with care", "Dusting and tidying", "Floors and rugs vacuumed"],
    description: "A calm, tidy bedroom you can actually relax in after a long day.",
  },
  {
    id: "condo-vacuuming",
    serviceSlug: "condo-apartment-cleaning",
    title: "Condo Floor Care",
    category: "Condo & Apartment Cleaning",
    location: "Mississauga, ON",
    imageUrl: "/gallery/condo-vacuuming-mississauga.jpg",
    seoAlt: "Vacuuming carpet during a condo cleaning in Mississauga",
    seoDescription: "Carpets and hard floors vacuumed edge to edge.",
    highlights: ["Carpets and rugs vacuumed", "Hard floors mopped", "Corners and edges"],
    description: "Fresh floors throughout the condo, including the spots under furniture.",
  },
  {
    id: "bathroom-house-cleaning",
    serviceSlug: "house-cleaning",
    title: "Sparkling Bathroom",
    category: "House Cleaning",
    location: "Brampton, ON",
    imageUrl: "/gallery/bathroom-house-cleaning-brampton.jpg",
    seoAlt: "Spotless white bathtub and towels after house cleaning in Brampton",
    seoDescription: "Tub, fixtures and floors scrubbed and shined.",
    highlights: ["Tub and fixtures scrubbed", "Towels folded", "Floors cleaned"],
    description: "A bathroom that looks, feels and smells clean.",
  },
  {
    id: "deep-cleaning",
    serviceSlug: "deep-cleaning",
    title: "Deep Clean, Top to Bottom",
    category: "Deep Cleaning",
    location: "Etobicoke, ON",
    imageUrl: "/gallery/deep-cleaning-etobicoke.jpg",
    seoAlt: "Deep cleaning carpet with a vacuum in Etobicoke",
    seoDescription: "Built-up dust and dirt lifted from floors, baseboards and corners.",
    highlights: ["Baseboards and trim", "Under furniture", "High-traffic areas"],
    description: "The detailed clean that reaches the places regular cleaning skips.",
  },
  {
    id: "airbnb-linens",
    serviceSlug: "airbnb-cleaning",
    title: "Fresh Linens for Every Guest",
    category: "Airbnb Cleaning",
    location: "Vaughan, ON",
    imageUrl: "/gallery/airbnb-fresh-linens-vaughan.jpg",
    seoAlt: "Freshly washed and folded linens for an Airbnb turnover in Vaughan",
    seoDescription: "Linens and towels washed, folded and staged for the next guest.",
    highlights: ["Linens washed and folded", "Beds made", "Towels staged"],
    description: "Guest-ready turnovers that keep your reviews glowing.",
  },
  {
    id: "office-cleaning",
    serviceSlug: "commercial-office-cleaning",
    title: "Office Meeting Room",
    category: "Office Cleaning",
    location: "Markham, ON",
    imageUrl: "/gallery/office-cleaning-markham.jpg",
    seoAlt: "Clean office meeting room and floors after office cleaning in Markham",
    seoDescription: "Tables, chairs and floors cleaned for the next meeting.",
    highlights: ["Tables and chairs wiped", "Floors cleaned", "Trash removed"],
    description: "A clean, welcoming workspace for your team and visitors.",
  },
];
