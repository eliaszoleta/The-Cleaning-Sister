import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Heart,
  Leaf,
  MessageCircle,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_INFO, SMS_HREF } from "../lib/business-data";
import { BUSINESS_ID, breadcrumbJsonLd, pageHead } from "../lib/seo";
import { absoluteUrl } from "../lib/site-config";
import {
  AreaLinkList,
  Breadcrumbs,
  DecorBubbles,
  QuoteSection,
  ServiceLinkGrid,
} from "../components/SeoSections";

const ABOUT_IMAGE = "/images/the-cleaning-sister-toronto-gta.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us | The Cleaning Sister, Toronto & GTA Cleaners",
      description:
        "Meet The Cleaning Sister: a Toronto cleaning company serving the GTA for 7+ years with efficiency, dedication and respect for every home.",
      path: "/about",
      image: ABOUT_IMAGE,
      imageAlt: "Sparkling clean bathroom",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl("/about"),
          name: "About The Cleaning Sister",
          about: { "@id": BUSINESS_ID },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Respect for every home",
    text: "We care for every home with respect and responsibility, treating your space like our own.",
  },
  {
    icon: BadgeCheck,
    title: "Efficiency & dedication",
    text: `${BUSINESS_INFO.yearsInBusiness}+ years of experience means we work efficiently without cutting corners.`,
  },
  {
    icon: ShieldCheck,
    title: "Trust & safety",
    text: "Trained, vetted and insured cleaners, and transparent pricing with no hidden fees.",
  },
  {
    icon: Leaf,
    title: "Greener options",
    text: "Eco-friendly cleaning products are available for any clean, just ask.",
  },
];

function AboutPage() {
  return (
    <div className="py-10 md:py-16 space-y-16 md:space-y-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About" }]} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-script text-3xl text-accent">Clean spaces, happy places.</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              About The Cleaning Sister
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We're a Toronto cleaning company that has been serving Toronto and the GTA for over{" "}
              {BUSINESS_INFO.yearsInBusiness} years. Homes, condos, Airbnbs, offices and renovation
              clean-ups: whatever the space, we leave it clean, fresh and organized.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-accent/30"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-foreground font-bold rounded-full hover:text-accent"
              >
                <MessageCircle className="w-4 h-4 text-accent" /> Text {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] overflow-hidden ring-8 ring-blush shadow-xl aspect-4/3">
              <img
                src={ABOUT_IMAGE}
                alt="Sparkling clean bathroom with fresh towels"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground py-16 rounded-[3rem] mx-2 sm:mx-4">
        <DecorBubbles className="opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Our Story</h2>
          <figure className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl space-y-5">
            <Quote className="w-8 h-8 text-accent" />
            <blockquote className="space-y-4 text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              <p>
                We have been a cleaning company serving Toronto and the GTA for over seven years,
                working with efficiency and dedication to provide the best service to our clients.
              </p>
              <p>
                We care for every home with respect and responsibility, leaving every space clean
                and organized.
              </p>
            </blockquote>
            <figcaption className="pt-4 border-t border-white/10 text-sm">
              <p className="font-bold text-white">{BUSINESS_INFO.owner}</p>
              <p className="text-primary-foreground/70">Owner, {BUSINESS_INFO.name}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <p className="font-script text-3xl text-accent">What we stand for</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-3xl border border-border shadow-xs space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceLinkGrid title="How We Can Help" />

      <AreaLinkList title="Where We Clean" />

      <QuoteSection heading="Let's Make Your Space Shine" />
    </div>
  );
}
