// Content for the individual service pages (/services/:slug) and service-area pages
// (/service-areas/:slug). Each page targets a specific search ("house cleaning toronto",
// "deep cleaning mississauga", ...), so keep titles, descriptions and copy unique per page.

export interface Faq {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  /** Short name used in navigation, links and schema. */
  name: string;
  /** Matching option value in the quote form's service dropdown. */
  formValue: string;
  /** id of the CORE_SPECIALTIES card that links to this page. */
  specialtyId?: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line, location-neutral summary used on cards (city pages, etc.). */
  summary: string;
  h1: string;
  intro: string[];
  idealFor: string[];
  included: { area: string; tasks: string[] }[];
  whyUs: { title: string; text: string }[];
  faqs: Faq[];
  /** Gallery photo shown on the page (and used as its social sharing image). Optional until a real photo exists. */
  image?: string;
  imageAlt?: string;
}

export interface AreaPage {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  /** Matching option value in the quote form's city dropdown. */
  formValue: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  localNotes: { title: string; text: string }[];
  neighborhoods: string[];
  nearby: string[];
  faqs: Faq[];
}

const AREAS_LINE =
  "Toronto, North York, Etobicoke, Scarborough, Mississauga, Brampton, Vaughan, Markham, Richmond Hill and Oakville";

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    formValue: "House Cleaning",
    specialtyId: "house-cleaning",
    metaTitle: "House Cleaning in Toronto & the GTA | The Cleaning Sister",
    metaDescription:
      "Weekly, bi-weekly or monthly house cleaning in Toronto and the GTA. 7+ years of experience, insured, eco-friendly products available. Free quote.",
    summary: "Regular weekly, bi-weekly or monthly cleaning that keeps your home fresh.",
    h1: "House Cleaning Services in Toronto & the GTA",
    intro: [
      "Coming home to a clean house changes your whole week. The Cleaning Sister has been cleaning homes across Toronto and the GTA for over seven years, with efficiency, dedication and the kind of care you'd expect from family.",
      `We offer weekly, bi-weekly and monthly house cleaning, plus one-time cleans when you need to catch up. Every visit covers the kitchen, bathrooms, bedrooms and living areas, and you can add extras like inside the fridge or oven. We serve ${AREAS_LINE}.`,
    ],
    idealFor: [
      "Busy families and working professionals",
      "Homeowners who want their weekends back",
      "Pet owners fighting fur and dust",
      "Anyone hosting guests or holidays",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, backsplash and sink sanitized",
          "Stovetop and appliance fronts wiped",
          "Outside of cabinets wiped",
          "Floors vacuumed and mopped",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Toilets, tubs and showers scrubbed",
          "Sinks, mirrors and fixtures shined",
          "Floors washed",
          "Garbage emptied",
        ],
      },
      {
        area: "Bedrooms & living areas",
        tasks: [
          "Dusting of surfaces and decor",
          "Beds made (linen change on request)",
          "Carpets and rugs vacuumed",
          "Hard floors mopped",
        ],
      },
      {
        area: "Throughout",
        tasks: [
          "Light switches and door handles wiped",
          "Baseboards dusted",
          "Mirrors and glass cleaned",
          "Garbage and recycling taken out",
        ],
      },
    ],
    whyUs: [
      {
        title: "7+ years in the GTA",
        text: "We've cleaned hundreds of Toronto homes and know what it takes to leave every room spotless.",
      },
      {
        title: "Trained, vetted & insured",
        text: "Professional cleaners you can trust in your home, with insurance for your peace of mind.",
      },
      {
        title: "Upfront pricing",
        text: "Clear quotes with no hidden fees, and flexible weekly, bi-weekly, monthly or one-time scheduling.",
      },
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Toronto?",
        answer:
          "It depends on the size of your home, its condition and how often you'd like us to come. Request a free quote and we'll send you a clear, upfront price with no hidden fees.",
      },
      {
        question: "Do you bring your own cleaning supplies?",
        answer:
          "Yes, we bring our own supplies and equipment. Eco-friendly cleaning products are available if you prefer them.",
      },
      {
        question: "How often should I book a house cleaning?",
        answer:
          "Most families choose weekly or bi-weekly cleaning to stay on top of everyday mess. Monthly works well for smaller homes, and we also do one-time cleans.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "No. Many clients give us access and head to work. We'll agree on what works best for you when we book.",
      },
    ],
    image: "/images/house-cleaning-toronto.jpg",
    imageAlt: "Spotless white soaking tub and fresh towels after a house cleaning in Toronto",
  },
  {
    slug: "condo-apartment-cleaning",
    name: "Condo & Apartment Cleaning",
    formValue: "Condo & Apartment Cleaning",
    specialtyId: "condo-apartment-cleaning",
    metaTitle: "Condo & Apartment Cleaning in Toronto | The Cleaning Sister",
    metaDescription:
      "Condo and apartment cleaning in Toronto, North York, Etobicoke & Mississauga. Regular or one-time cleans, move-in/out and Airbnb condos. Free quote.",
    summary: "Detailed cleaning for condos and apartments, from studios to penthouses.",
    h1: "Condo & Apartment Cleaning in Toronto",
    intro: [
      "Toronto is a condo city, and condos come with their own rules: concierge check-in, elevator bookings, visitor parking and compact spaces where every smudge shows. The Cleaning Sister cleans condos and apartments across Toronto and the GTA and works smoothly with your building.",
      "Choose regular condo cleaning to keep your place guest-ready, or book a one-time deep clean, a move-in or move-out clean, or Airbnb turnovers for your rental unit.",
    ],
    idealFor: [
      "Downtown and midtown condo owners",
      "Renters in apartments and basement units",
      "Landlords and property managers",
      "Condo Airbnb hosts",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Counters, sink and backsplash sanitized",
          "Appliance fronts and stovetop cleaned",
          "Inside microwave",
          "Floors cleaned",
        ],
      },
      {
        area: "Bathroom",
        tasks: [
          "Toilet, tub and shower scrubbed",
          "Glass shower doors and mirrors",
          "Vanity and fixtures shined",
          "Floors washed",
        ],
      },
      {
        area: "Living & bedrooms",
        tasks: [
          "Dusting of surfaces, shelves and TV area",
          "Balcony door glass and tracks wiped",
          "Floors vacuumed and mopped",
          "Beds made",
        ],
      },
      {
        area: "Building-friendly",
        tasks: [
          "We follow concierge and building rules",
          "Elevator booking for move cleans",
          "Quiet, respectful of neighbours",
          "Garbage taken to the chute",
        ],
      },
    ],
    whyUs: [
      {
        title: "Condo experience",
        text: "We clean Toronto condos every week and know how to work with concierge desks and building rules.",
      },
      {
        title: "Small space, big detail",
        text: "Glass, stainless steel and high-gloss finishes left streak-free, because in a condo everything shows.",
      },
      {
        title: "Flexible timing",
        text: "Weekday, evening or weekend slots that work around your schedule and your building's hours.",
      },
    ],
    faqs: [
      {
        question: "Do you clean condos in downtown Toronto?",
        answer:
          "Yes. We clean condos and apartments across downtown, midtown and the rest of Toronto, plus North York, Etobicoke, Scarborough, Mississauga and the GTA.",
      },
      {
        question: "What do you need from me to clean my condo?",
        answer:
          "Just let us know how we'll get in (you, a key, or the concierge) and any building rules like elevator bookings or parking. We'll take care of the rest.",
      },
      {
        question: "How much does condo cleaning cost?",
        answer:
          "It depends on the size of your unit and the type of clean. Request a free quote with the number of bedrooms and bathrooms and we'll send an upfront price.",
      },
    ],
    image: "/images/condo-apartment-cleaning-toronto.jpg",
    imageAlt: "Clean, bright condo living room with a lake view in Toronto",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    formValue: "Deep Cleaning",
    specialtyId: "deep-cleaning",
    metaTitle: "Deep Cleaning in Toronto & the GTA | The Cleaning Sister",
    metaDescription:
      "Top-to-bottom deep cleaning in Toronto and the GTA: baseboards, grout, soap scum, appliances and hidden corners. Insured, 7+ years. Free quote.",
    summary: "A detailed top-to-bottom clean for built-up grime and hidden corners.",
    h1: "Deep Cleaning Services in Toronto & the GTA",
    intro: [
      "Some messes need more than a regular clean. Our deep cleaning service tackles the built-up grime, soap scum, greasy cabinet fronts and dusty baseboards that pile up over time, so your home feels truly clean again.",
      "A deep clean is a great first visit before starting regular service, a spring or fall refresh, or a reset before hosting family. We deep clean homes, condos and apartments across Toronto and the GTA.",
    ],
    idealFor: [
      "A first clean before regular service",
      "Spring and fall cleaning",
      "Before hosting family or holidays",
      "Homes that haven't been cleaned in a while",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Cabinet fronts degreased",
          "Inside microwave",
          "Stovetop, hood and backsplash scrubbed",
          "Inside fridge or oven (on request)",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Soap scum and hard water removed",
          "Grout and tiles scrubbed",
          "Behind and around the toilet",
          "Exhaust fan and vents dusted",
        ],
      },
      {
        area: "Detail work",
        tasks: [
          "Baseboards and trim washed",
          "Doors, frames and switches wiped",
          "Light fixtures dusted",
          "Window sills and tracks",
        ],
      },
      {
        area: "Floors",
        tasks: [
          "Under and behind furniture (where movable)",
          "Edges and corners",
          "Carpets vacuumed thoroughly",
          "Hard floors washed",
        ],
      },
    ],
    whyUs: [
      {
        title: "Nothing skipped",
        text: "We work room by room with a detailed checklist so the hidden spots get cleaned too.",
      },
      {
        title: "Eco-friendly options",
        text: "Ask for eco-friendly products and we'll use them throughout your home.",
      },
      {
        title: "Honest quotes",
        text: "Deep cleans take longer, so we quote upfront based on your home, with no surprises after.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between regular and deep cleaning?",
        answer:
          "Regular cleaning keeps up with everyday mess. Deep cleaning adds detailed work like baseboards, grout, cabinet fronts, light fixtures and built-up grime that regular visits don't cover.",
      },
      {
        question: "How long does a deep clean take?",
        answer:
          "It depends on the size and condition of your home. Most deep cleans take several hours; we'll give you an estimate with your quote.",
      },
      {
        question: "Should I book a deep clean before regular cleaning?",
        answer:
          "It's a good idea. A deep clean gets everything to a fresh starting point, which makes regular visits faster and more effective.",
      },
    ],
    image: "/images/deep-cleaning-toronto.jpg",
    imageAlt: "Sparkling clean bathroom and laundry area after a deep cleaning in Toronto",
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In & Move-Out Cleaning",
    formValue: "Move-In / Move-Out Cleaning",
    specialtyId: "move-in-move-out-cleaning",
    metaTitle: "Move-In & Move-Out Cleaning Toronto | The Cleaning Sister",
    metaDescription:
      "Move-in and move-out cleaning in Toronto and the GTA for tenants, landlords, buyers, sellers and realtors. Inside cabinets, fridge and oven. Free quote.",
    summary: "Empty-home cleaning for tenants, landlords, buyers, sellers and realtors.",
    h1: "Move-In & Move-Out Cleaning in Toronto & the GTA",
    intro: [
      "Moving is stressful enough. Let The Cleaning Sister handle the cleaning so you can hand over the keys, or move in, with confidence. We clean empty homes, condos and apartments from top to bottom, including the insides of cabinets, closets and appliances.",
      "We work with tenants who want their deposit back, landlords preparing for new tenants, and buyers, sellers and realtors across Toronto and the GTA who need a home ready for closing day or listing photos.",
    ],
    idealFor: [
      "Tenants moving out",
      "Landlords between tenants",
      "Home buyers and sellers",
      "Realtors preparing listings",
    ],
    included: [
      {
        area: "Kitchen",
        tasks: [
          "Inside all cabinets and drawers",
          "Inside fridge and freezer",
          "Inside oven and microwave",
          "Counters, sink and backsplash",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Inside vanity and medicine cabinet",
          "Toilet, tub and shower scrubbed",
          "Mirrors and fixtures",
          "Floors washed",
        ],
      },
      {
        area: "Rooms & closets",
        tasks: [
          "Inside closets and shelves",
          "Baseboards and doors wiped",
          "Light switches and outlets",
          "Window sills and tracks",
        ],
      },
      {
        area: "Finishing",
        tasks: [
          "All floors vacuumed and mopped",
          "Garbage removed",
          "Final walkthrough of every room",
          "Ready for keys or photos",
        ],
      },
    ],
    whyUs: [
      {
        title: "Deposit-ready",
        text: "We clean to the standard landlords and property managers look for at the final walkthrough.",
      },
      {
        title: "Fits your moving date",
        text: "We schedule around your move-out, closing day or listing date, including weekends.",
      },
      {
        title: "Realtor friendly",
        text: "Spotless, photo-ready homes that help listings stand out and buyers feel at home.",
      },
    ],
    faqs: [
      {
        question: "Does a move-out clean include inside the appliances?",
        answer:
          "Yes. Move-in and move-out cleans include inside the fridge, oven, microwave, cabinets and drawers.",
      },
      {
        question: "Should the home be empty?",
        answer:
          "It's best when furniture and belongings are already moved out so we can clean every surface, closet and corner.",
      },
      {
        question: "Can you clean on the same day I move out?",
        answer:
          "Often, yes. Text us your move date and address and we'll do our best to fit you in.",
      },
    ],
    image: "/images/move-in-move-out-cleaning-toronto.jpg",
    imageAlt: "Clean empty kitchen ready for move-in after a move-out cleaning in Toronto",
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb & Short-Term Rental Cleaning",
    formValue: "Airbnb / Short-Term Rental Cleaning",
    specialtyId: "airbnb-cleaning",
    metaTitle: "Airbnb Cleaning in Toronto & GTA | The Cleaning Sister",
    metaDescription:
      "Airbnb and short-term rental cleaning in Toronto and the GTA. Fast turnovers, fresh linens, restocking and issue reports between guests. Free quote.",
    summary: "Fast, reliable turnovers between guests with fresh linens and restocking.",
    h1: "Airbnb & Short-Term Rental Cleaning in Toronto",
    intro: [
      "Your guests notice everything, and so do your reviews. The Cleaning Sister provides Airbnb and short-term rental turnover cleaning across Toronto and the GTA, so every guest walks into a spotless, guest-ready space.",
      "We work around your booking calendar, change the linens, reset the kitchen and bathrooms, restock essentials and let you know right away about any damage or missing items. Hosts tell us their guests mention the cleanliness in their reviews.",
    ],
    idealFor: [
      "Airbnb and VRBO hosts",
      "Condo short-term rentals",
      "Property managers with multiple units",
      "Hosts who manage from out of town",
    ],
    included: [
      {
        area: "Bedrooms",
        tasks: [
          "Linens changed and beds made",
          "Dusting and tidying",
          "Floors vacuumed",
          "Staging to match your listing photos",
        ],
      },
      {
        area: "Bathrooms",
        tasks: [
          "Full sanitize of toilet, tub and shower",
          "Fresh towels folded and staged",
          "Toiletries restocked",
          "Mirrors and fixtures shined",
        ],
      },
      {
        area: "Kitchen",
        tasks: [
          "Dishes washed and put away",
          "Counters and appliances wiped",
          "Fridge checked for leftovers",
          "Coffee and essentials restocked",
        ],
      },
      {
        area: "Host support",
        tasks: [
          "Garbage and recycling out",
          "Damage and low supplies reported",
          "Same-day turnovers",
          "Photos after cleaning on request",
        ],
      },
    ],
    whyUs: [
      {
        title: "Review-ready",
        text: "Guests of our hosts regularly mention how clean the place is in their reviews.",
      },
      {
        title: "Built around check-ins",
        text: "We plan every clean between check-out and check-in so back-to-back bookings never slip.",
      },
      {
        title: "Your eyes on site",
        text: "We report damage, maintenance issues and low supplies before your next guest arrives.",
      },
    ],
    faqs: [
      {
        question: "Can you do same-day Airbnb turnovers in Toronto?",
        answer:
          "Yes. We schedule turnovers between check-out and check-in so your rental is ready for the next guest.",
      },
      {
        question: "Do you change linens and towels?",
        answer:
          "Yes. We change linens, make the beds, and fold and stage fresh towels for each guest.",
      },
      {
        question: "How is Airbnb cleaning priced?",
        answer:
          "We quote a flat price per turnover based on the size of the unit and what's included. Request a free quote to get yours.",
      },
    ],
    image: "/images/airbnb-cleaning-toronto.jpg",
    imageAlt: "Guest-ready bedroom with fresh white linens after an Airbnb cleaning in Toronto",
  },
  {
    slug: "commercial-office-cleaning",
    name: "Office & Commercial Cleaning",
    formValue: "Office / Commercial Cleaning",
    specialtyId: "commercial-office-cleaning",
    metaTitle: "Office & Commercial Cleaning Toronto | The Cleaning Sister",
    metaDescription:
      "Office and commercial cleaning in Toronto and the GTA. Desks, meeting rooms, washrooms and kitchens cleaned before or after hours. Free quote.",
    summary: "Clean, healthy offices and commercial spaces on your schedule.",
    h1: "Office & Commercial Cleaning in Toronto & the GTA",
    intro: [
      "A clean workplace keeps your team healthy and makes a great first impression on clients. The Cleaning Sister cleans offices, clinics, studios, retail stores and other commercial spaces across Toronto and the GTA.",
      "We clean before you open, after you close or on weekends, and we follow the same checklist every visit so your space always looks its best.",
    ],
    idealFor: [
      "Small and mid-size offices",
      "Clinics and professional practices",
      "Retail stores and studios",
      "Property managers and landlords",
    ],
    included: [
      {
        area: "Work areas",
        tasks: [
          "Desks and surfaces dusted and wiped",
          "Meeting room tables and chairs",
          "Door handles and switches sanitized",
          "Glass doors and partitions",
        ],
      },
      {
        area: "Washrooms",
        tasks: [
          "Toilets, sinks and counters sanitized",
          "Mirrors and fixtures",
          "Supplies checked and refilled (your stock)",
          "Floors washed",
        ],
      },
      {
        area: "Kitchenettes",
        tasks: [
          "Counters, tables and sink",
          "Microwave and appliance fronts",
          "Garbage and recycling",
          "Floors cleaned",
        ],
      },
      {
        area: "Floors & entrances",
        tasks: ["Carpets vacuumed", "Hard floors mopped", "Entrance mats", "Lobby and reception"],
      },
    ],
    whyUs: [
      {
        title: "After-hours service",
        text: "Cleaning scheduled around your business so it never interrupts your team or clients.",
      },
      {
        title: "Consistent checklist",
        text: "The same detailed checklist every visit for reliable, predictable results.",
      },
      {
        title: "Insured professionals",
        text: "Trained, vetted and insured cleaners you can trust with your workplace.",
      },
    ],
    faqs: [
      {
        question: "What kinds of businesses do you clean?",
        answer:
          "Offices, clinics, studios, retail stores and other commercial spaces across Toronto and the GTA. Not sure if we're a fit? Just ask.",
      },
      {
        question: "Can you clean after business hours?",
        answer: "Yes. We can clean early mornings, evenings or weekends.",
      },
      {
        question: "How is office cleaning priced?",
        answer:
          "It depends on the size of the space, what needs cleaning and how often. Request a free quote and we'll build a plan and price for your business.",
      },
    ],
    image: "/images/office-commercial-cleaning-toronto.jpg",
    imageAlt: "Clean office meeting room and floors after commercial cleaning in Toronto",
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    formValue: "Post-Construction Cleaning",
    specialtyId: "post-construction-cleaning",
    metaTitle: "Post-Construction Cleaning Toronto | The Cleaning Sister",
    metaDescription:
      "Post-construction and post-renovation cleaning in Toronto and the GTA. Drywall dust, debris and residue removed so your space is move-in ready.",
    summary: "Dust, debris and residue cleared after renovations and new builds.",
    h1: "Post-Construction & Renovation Cleaning in Toronto",
    intro: [
      "Renovations leave behind a layer of fine dust that settles on every surface, inside cabinets and in window tracks. The Cleaning Sister's post-construction cleaning clears it all away so you can finally enjoy your new space.",
      "We clean after kitchen and bathroom renos, basement finishing, condo upgrades and new builds for homeowners, contractors and builders across Toronto and the GTA.",
    ],
    idealFor: [
      "Homeowners after a renovation",
      "Contractors and builders",
      "New builds before move-in",
      "Condo and basement upgrades",
    ],
    included: [
      {
        area: "Dust removal",
        tasks: [
          "Fine dust wiped from every surface",
          "Walls and baseboards",
          "Vents and light fixtures",
          "Inside cabinets and drawers",
        ],
      },
      {
        area: "Windows & glass",
        tasks: [
          "Windows and glass cleaned",
          "Sills and tracks vacuumed",
          "Sticker and label residue removed",
          "Mirrors polished",
        ],
      },
      {
        area: "Kitchen & baths",
        tasks: [
          "Countertops and backsplashes",
          "New fixtures shined",
          "Tubs, showers and tiles",
          "Appliances wiped inside and out",
        ],
      },
      {
        area: "Floors",
        tasks: [
          "Debris swept and vacuumed",
          "Hard floors washed",
          "Edges and corners",
          "Ready for move-in",
        ],
      },
    ],
    whyUs: [
      {
        title: "Detail after dust",
        text: "We go over every surface, because construction dust hides everywhere.",
      },
      {
        title: "Contractor friendly",
        text: "We coordinate with your contractor or builder so the space is ready on time.",
      },
      {
        title: "Move-in ready",
        text: "You walk into a clean, fresh space, not a job site.",
      },
    ],
    faqs: [
      {
        question: "When should post-construction cleaning be booked?",
        answer:
          "Once the contractors have finished and removed their tools and large debris. We then handle the dust and detailed cleaning.",
      },
      {
        question: "Do you remove construction debris?",
        answer:
          "We remove dust, small debris and residue. Large construction waste should be removed by your contractor first.",
      },
      {
        question: "How is post-construction cleaning priced?",
        answer:
          "It depends on the size of the space and how much dust and residue there is. Text us or request a free quote with a few details.",
      },
    ],
    image: "/images/post-construction-cleaning-toronto.jpg",
    imageAlt:
      "Bright, dust-free space with polished floors after post-construction cleaning in Toronto",
  },
];

function areaFaqs(city: string, extra: Faq): Faq[] {
  return [
    {
      question: `Do you offer house cleaning in ${city}?`,
      answer: `Yes. The Cleaning Sister offers house cleaning, condo and apartment cleaning, deep cleaning, move-in and move-out cleaning, Airbnb cleaning, office cleaning and post-construction cleaning in ${city}.`,
    },
    extra,
    {
      question: `How do I get a cleaning quote in ${city}?`,
      answer:
        "Fill out the free quote form on this page or text (437) 215-0588. We'll send you a clear, upfront price with no hidden fees.",
    },
  ];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "toronto",
    city: "Toronto",
    state: "ON",
    stateName: "Ontario",
    formValue: "Toronto",
    metaTitle: "House Cleaning in Toronto, ON | The Cleaning Sister",
    metaDescription:
      "Trusted Toronto house and condo cleaning for 7+ years: regular, deep, move-out and Airbnb cleaning. Insured, eco-friendly options. Text (437) 215-0588.",
    h1: "House & Condo Cleaning in Toronto, ON",
    intro: [
      "The Cleaning Sister is a Toronto cleaning company that has been keeping homes, condos and offices spotless for over seven years. We're based in the city and clean everywhere from downtown condo towers to family homes in midtown and the west end.",
      "Whether you need regular weekly cleaning, a one-time deep clean, a move-out clean for your landlord or quick Airbnb turnovers, we bring the same care and attention to detail to every Toronto home.",
    ],
    localNotes: [
      {
        title: "Condo living",
        text: "We work with concierge desks, elevator bookings and building rules in condos across downtown, Liberty Village and CityPlace.",
      },
      {
        title: "Airbnb turnovers",
        text: "Toronto's short-term rentals stay busy year-round. We turn units over quickly so hosts never miss a booking.",
      },
      {
        title: "Four-season cleaning",
        text: "Winter salt, slush and summer dust all end up indoors. We keep entryways and floors clean in every season.",
      },
    ],
    neighborhoods: [
      "Downtown Toronto",
      "Liberty Village",
      "The Annex",
      "Leslieville",
      "High Park",
      "Midtown",
      "The Beaches",
      "Yorkville",
    ],
    nearby: ["north-york", "etobicoke", "scarborough", "mississauga", "vaughan"],
    faqs: areaFaqs("Toronto", {
      question: "Do you clean condos in downtown Toronto?",
      answer:
        "Yes. Condo cleaning is one of our specialties. Let us know about any building rules like elevator bookings or visitor parking and we'll take care of the rest.",
    }),
  },
  {
    slug: "north-york",
    city: "North York",
    state: "ON",
    stateName: "Ontario",
    formValue: "North York",
    metaTitle: "House Cleaning in North York, ON | The Cleaning Sister",
    metaDescription:
      "House, condo and deep cleaning in North York: Willowdale, Don Mills, York Mills and more. Insured cleaners, upfront pricing. Free quote today.",
    h1: "House Cleaning Services in North York",
    intro: [
      "From the condo towers along Yonge Street to family homes in Don Mills and York Mills, The Cleaning Sister keeps North York homes clean and comfortable.",
      "We offer regular house cleaning, condo cleaning, deep cleans, move-in and move-out cleaning and office cleaning across North York, with flexible weekly, bi-weekly and monthly schedules.",
    ],
    localNotes: [
      {
        title: "Yonge & Sheppard condos",
        text: "Busy professionals in North York condos count on us for regular cleaning that fits around work.",
      },
      {
        title: "Family homes",
        text: "Larger homes in Don Mills, York Mills and Bayview Village get a thorough, room-by-room clean.",
      },
      {
        title: "Move-in season",
        text: "North York sees plenty of moves. Our move-in and move-out cleans help tenants and landlords hand over clean homes.",
      },
    ],
    neighborhoods: [
      "Willowdale",
      "Don Mills",
      "York Mills",
      "Bayview Village",
      "Downsview",
      "Yonge & Sheppard",
    ],
    nearby: ["toronto", "vaughan", "richmond-hill", "scarborough"],
    faqs: areaFaqs("North York", {
      question: "Do you offer recurring cleaning in North York?",
      answer:
        "Yes. Choose weekly, bi-weekly or monthly cleaning, or book a one-time clean whenever you need it.",
    }),
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    state: "ON",
    stateName: "Ontario",
    formValue: "Etobicoke",
    metaTitle: "House Cleaning in Etobicoke, ON | The Cleaning Sister",
    metaDescription:
      "Etobicoke house and condo cleaning: Humber Bay Shores, Mimico, The Kingsway and more. Regular, deep and move-out cleaning. Text for a free quote.",
    h1: "House & Condo Cleaning in Etobicoke",
    intro: [
      "The Cleaning Sister cleans homes and condos all over Etobicoke, from the lakefront condos at Humber Bay Shores to the family homes of The Kingsway and Islington Village.",
      "Book regular cleaning to keep your home fresh, a deep clean for a full reset, or a move-in or move-out clean when it's time for a change.",
    ],
    localNotes: [
      {
        title: "Lakefront condos",
        text: "Humber Bay Shores and Mimico condos get streak-free glass, shining kitchens and spotless bathrooms.",
      },
      {
        title: "Classic family homes",
        text: "The Kingsway and Islington homes have plenty of detail; our deep cleans cover baseboards, trim and more.",
      },
      {
        title: "Close to home",
        text: "Etobicoke is right next door to our west-end base, so scheduling is easy.",
      },
    ],
    neighborhoods: [
      "Humber Bay Shores",
      "Mimico",
      "The Kingsway",
      "Islington Village",
      "Long Branch",
      "Etobicoke Centre",
    ],
    nearby: ["toronto", "mississauga", "north-york", "brampton"],
    faqs: areaFaqs("Etobicoke", {
      question: "Do you clean lakefront condos in Etobicoke?",
      answer: "Yes. We clean condos in Humber Bay Shores, Mimico and across Etobicoke.",
    }),
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    state: "ON",
    stateName: "Ontario",
    formValue: "Scarborough",
    metaTitle: "House Cleaning in Scarborough, ON | The Cleaning Sister",
    metaDescription:
      "Reliable house cleaning in Scarborough: Agincourt, Guildwood, Birch Cliff and more. Regular, deep, move-out and Airbnb cleaning. Free quote.",
    h1: "House Cleaning Services in Scarborough",
    intro: [
      "Scarborough families trust The Cleaning Sister for detailed, friendly home cleaning. We clean houses, townhomes, condos and apartments from Birch Cliff to Agincourt.",
      "Our services include regular house cleaning, deep cleaning, move-in and move-out cleaning, Airbnb turnovers and office cleaning.",
    ],
    localNotes: [
      {
        title: "Busy family homes",
        text: "Recurring cleaning keeps up with kids, pets and busy schedules so you can enjoy your weekends.",
      },
      {
        title: "Townhomes and condos",
        text: "Whether it's a townhouse in Agincourt or a condo near Scarborough Town Centre, we clean it top to bottom.",
      },
      {
        title: "Moving made easier",
        text: "Our move-out cleans help tenants get their deposit back and landlords get ready for new tenants.",
      },
    ],
    neighborhoods: [
      "Agincourt",
      "Guildwood",
      "Birch Cliff",
      "Cliffside",
      "Malvern",
      "Scarborough Village",
    ],
    nearby: ["toronto", "markham", "north-york"],
    faqs: areaFaqs("Scarborough", {
      question: "Do you clean townhomes in Scarborough?",
      answer: "Yes. We clean houses, townhomes, condos and apartments across Scarborough.",
    }),
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    state: "ON",
    stateName: "Ontario",
    formValue: "Mississauga",
    metaTitle: "House Cleaning in Mississauga, ON | The Cleaning Sister",
    metaDescription:
      "Mississauga house, condo and deep cleaning: Port Credit, Square One, Erin Mills, Meadowvale and more. Insured, 7+ years. Free quote today.",
    h1: "House & Condo Cleaning in Mississauga",
    intro: [
      "The Cleaning Sister brings seven years of cleaning experience to Mississauga homes, condos and offices. From the condo towers around Square One to family homes in Erin Mills and Meadowvale, we leave every space spotless.",
      "Choose regular cleaning, a one-time deep clean, move-in or move-out cleaning, Airbnb turnovers or office cleaning.",
    ],
    localNotes: [
      {
        title: "City Centre condos",
        text: "Condos near Square One and along Hurontario get detailed cleaning that works with building rules.",
      },
      {
        title: "Suburban family homes",
        text: "Erin Mills, Meadowvale and Churchill Meadows homes get a thorough clean from kitchen to basement.",
      },
      {
        title: "Offices and businesses",
        text: "Mississauga offices and clinics count on us for after-hours commercial cleaning.",
      },
    ],
    neighborhoods: [
      "Port Credit",
      "City Centre (Square One)",
      "Erin Mills",
      "Meadowvale",
      "Streetsville",
      "Churchill Meadows",
    ],
    nearby: ["etobicoke", "brampton", "oakville", "toronto"],
    faqs: areaFaqs("Mississauga", {
      question: "Do you clean offices in Mississauga?",
      answer:
        "Yes. We clean offices, clinics and other commercial spaces in Mississauga, including after hours.",
    }),
  },
  {
    slug: "brampton",
    city: "Brampton",
    state: "ON",
    stateName: "Ontario",
    formValue: "Brampton",
    metaTitle: "House Cleaning in Brampton, ON | The Cleaning Sister",
    metaDescription:
      "House cleaning, deep cleaning and move-in/out cleaning in Brampton: Bramalea, Springdale, Mount Pleasant and more. Upfront pricing. Free quote.",
    h1: "House Cleaning Services in Brampton",
    intro: [
      "Brampton's growing neighbourhoods are full of busy families, and The Cleaning Sister is here to help. We clean houses, townhomes and basement apartments across Brampton with the same care we'd give our own homes.",
      "Book regular cleaning, a deep clean, a move-in or move-out clean, or post-construction cleaning for your new build or renovation.",
    ],
    localNotes: [
      {
        title: "New builds",
        text: "Moving into a new home in Mount Pleasant or Springdale? Our post-construction and move-in cleans get it ready.",
      },
      {
        title: "Basement apartments",
        text: "We clean basement units for tenants and landlords, including move-out cleans between rentals.",
      },
      {
        title: "Big family homes",
        text: "Larger homes get a room-by-room clean on a schedule that suits your family.",
      },
    ],
    neighborhoods: [
      "Bramalea",
      "Springdale",
      "Mount Pleasant",
      "Heart Lake",
      "Downtown Brampton",
      "Castlemore",
    ],
    nearby: ["mississauga", "vaughan", "etobicoke"],
    faqs: areaFaqs("Brampton", {
      question: "Do you clean new builds in Brampton?",
      answer:
        "Yes. Our post-construction and move-in cleaning removes dust and residue so your new home is ready to enjoy.",
    }),
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    state: "ON",
    stateName: "Ontario",
    formValue: "Vaughan",
    metaTitle: "House Cleaning in Vaughan, ON | The Cleaning Sister",
    metaDescription:
      "House and deep cleaning in Vaughan: Woodbridge, Maple, Kleinburg, Thornhill and the VMC. Insured cleaners with 7+ years of experience. Free quote.",
    h1: "House Cleaning Services in Vaughan",
    intro: [
      "The Cleaning Sister keeps Vaughan homes spotless, from the new condos at the Vaughan Metropolitan Centre to family homes in Woodbridge, Maple and Kleinburg.",
      "We offer regular house cleaning, deep cleaning, move-in and move-out cleaning, Airbnb turnovers, office cleaning and post-construction cleaning across Vaughan.",
    ],
    localNotes: [
      {
        title: "Large family homes",
        text: "Woodbridge and Kleinburg homes get a detailed clean, from grand kitchens to finished basements.",
      },
      {
        title: "New condos at the VMC",
        text: "New condo owners at the Vaughan Metropolitan Centre get move-in cleans and regular upkeep.",
      },
      {
        title: "Renovation clean-up",
        text: "Renovating in Maple or Thornhill? Our post-construction cleaning clears the dust when the work is done.",
      },
    ],
    neighborhoods: [
      "Woodbridge",
      "Maple",
      "Kleinburg",
      "Thornhill",
      "Concord",
      "Vaughan Metropolitan Centre",
    ],
    nearby: ["north-york", "richmond-hill", "brampton", "markham"],
    faqs: areaFaqs("Vaughan", {
      question: "Do you do post-renovation cleaning in Vaughan?",
      answer: "Yes. We clean up dust and residue after renovations and new builds across Vaughan.",
    }),
  },
  {
    slug: "markham",
    city: "Markham",
    state: "ON",
    stateName: "Ontario",
    formValue: "Markham",
    metaTitle: "House Cleaning in Markham, ON | The Cleaning Sister",
    metaDescription:
      "Markham house, condo and office cleaning: Unionville, Cornell, Markham Village and more. Regular and deep cleaning, upfront pricing. Free quote.",
    h1: "House Cleaning Services in Markham",
    intro: [
      "Markham families and businesses rely on The Cleaning Sister for thorough, friendly cleaning. We clean houses, townhomes and condos from historic Unionville to newer communities like Cornell and Cathedraltown.",
      "Book regular or one-time cleaning, deep cleaning, move-in and move-out cleaning, or office cleaning for your Markham business.",
    ],
    localNotes: [
      {
        title: "Family homes",
        text: "Recurring cleaning helps busy Markham families keep up with school, work and activities.",
      },
      {
        title: "Offices and tech firms",
        text: "Markham's many offices trust us for clean desks, meeting rooms and kitchenettes.",
      },
      {
        title: "Newer communities",
        text: "Cornell and Cathedraltown homeowners use our move-in and deep cleans to start fresh.",
      },
    ],
    neighborhoods: [
      "Unionville",
      "Markham Village",
      "Cornell",
      "Cathedraltown",
      "Milliken",
      "Berczy Village",
    ],
    nearby: ["richmond-hill", "scarborough", "vaughan", "north-york"],
    faqs: areaFaqs("Markham", {
      question: "Do you clean offices in Markham?",
      answer:
        "Yes. We clean offices and commercial spaces in Markham, before or after business hours.",
    }),
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    state: "ON",
    stateName: "Ontario",
    formValue: "Richmond Hill",
    metaTitle: "House Cleaning in Richmond Hill, ON | The Cleaning Sister",
    metaDescription:
      "House cleaning and deep cleaning in Richmond Hill: Oak Ridges, Mill Pond, Bayview Hill and more. Insured, eco-friendly options. Free quote.",
    h1: "House Cleaning Services in Richmond Hill",
    intro: [
      "The Cleaning Sister cleans homes and condos across Richmond Hill, from Oak Ridges to Bayview Hill and the condos near Richmond Hill Centre.",
      "Our regular, deep, move-in and move-out cleaning services keep your home fresh without giving up your weekends.",
    ],
    localNotes: [
      {
        title: "Spacious homes",
        text: "Larger Richmond Hill homes get a detailed room-by-room clean with nothing skipped.",
      },
      {
        title: "Eco-friendly options",
        text: "Prefer greener products? Ask for our eco-friendly cleaning products for your home.",
      },
      {
        title: "Seasonal deep cleans",
        text: "Spring and fall deep cleans get your home ready for the season ahead.",
      },
    ],
    neighborhoods: [
      "Oak Ridges",
      "Mill Pond",
      "Bayview Hill",
      "Richmond Hill Centre",
      "Langstaff",
      "Jefferson",
    ],
    nearby: ["markham", "vaughan", "north-york"],
    faqs: areaFaqs("Richmond Hill", {
      question: "Do you use eco-friendly products in Richmond Hill homes?",
      answer: "Eco-friendly cleaning products are available on request for any clean.",
    }),
  },
  {
    slug: "oakville",
    city: "Oakville",
    state: "ON",
    stateName: "Ontario",
    formValue: "Oakville",
    metaTitle: "House Cleaning in Oakville, ON | The Cleaning Sister",
    metaDescription:
      "Oakville house cleaning, deep cleaning and move-in/out cleaning: Glen Abbey, Bronte, Old Oakville and more. Trusted GTA cleaners. Free quote.",
    h1: "House Cleaning Services in Oakville",
    intro: [
      "The Cleaning Sister serves Oakville homeowners with detailed, reliable house cleaning. From Old Oakville and Bronte by the lake to Glen Abbey and Joshua Creek, we treat every home with respect.",
      "Choose regular cleaning, a deep clean, move-in or move-out cleaning, or post-construction cleaning after your renovation.",
    ],
    localNotes: [
      {
        title: "Detail-focused cleaning",
        text: "Beautiful Oakville homes deserve careful cleaning of every finish, fixture and floor.",
      },
      {
        title: "Selling your home?",
        text: "Our move-out and deep cleans help Oakville listings look their best for photos and showings.",
      },
      {
        title: "After renovations",
        text: "Post-construction cleaning clears the dust after kitchen, bathroom and basement projects.",
      },
    ],
    neighborhoods: [
      "Glen Abbey",
      "Bronte",
      "Old Oakville",
      "River Oaks",
      "Joshua Creek",
      "West Oak Trails",
    ],
    nearby: ["mississauga", "etobicoke", "brampton"],
    faqs: areaFaqs("Oakville", {
      question: "Can you clean before I list my Oakville home?",
      answer:
        "Yes. Our deep and move-out cleans get your home photo-ready for listings and showings.",
    }),
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((page) => page.slug === slug);
}

export function servicePathForSpecialty(specialtyId: string) {
  const page = SERVICE_PAGES.find((p) => p.specialtyId === specialtyId);
  return page ? `/services/${page.slug}` : "/services";
}

export const HOME_FAQS: Faq[] = [
  {
    question: "What areas does The Cleaning Sister serve?",
    answer:
      "We serve Toronto and the GTA, including North York, Etobicoke, Scarborough, Mississauga, Brampton, Vaughan, Markham, Richmond Hill and Oakville.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "Regular house cleaning, condo and apartment cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, office and commercial cleaning, and post-construction cleaning.",
  },
  {
    question: "How much does a cleaning cost?",
    answer:
      "It depends on the size and condition of your space, the type of cleaning and how often you'd like us to come. Request a free quote and we'll send transparent, upfront pricing with no hidden fees.",
  },
  {
    question: "Are your cleaners insured?",
    answer: "Yes. Our cleaners are trained, vetted and insured professionals.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer: "Eco-friendly cleaning products are available on request.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "Fill out the free quote form or text us at (437) 215-0588. We'll get back to you with a price and find a time that works for you.",
  },
];
