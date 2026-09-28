import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Heart,
  Leaf,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";
import { pageHead, faqJsonLd } from "../lib/seo";
import { HOME_FAQS, servicePathForSpecialty, AREA_PAGES } from "../lib/seo-content";
import { FaqSection, ServiceImage } from "../components/SeoSections";
import { BUSINESS_INFO, CORE_SPECIALTIES, SMS_HREF, TESTIMONIALS } from "../lib/business-data";
import { QuoteRequestForm } from "../components/QuoteRequestForm";
import { WorkShowcaseGallery } from "../components/WorkShowcaseGallery";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Cleaning Services in Toronto & the GTA | The Cleaning Sister",
      description:
        "Toronto house cleaning, condo, deep, move-out, Airbnb and office cleaning across the GTA. 7+ years, insured, eco-friendly options. Free quote.",
      path: "/",
      jsonLd: [faqJsonLd(HOME_FAQS)],
    }),
  component: Index,
});

const TRUST_POINTS = [
  { icon: BadgeCheck, title: `${BUSINESS_INFO.yearsInBusiness}+ Years`, sub: "Cleaning the GTA" },
  { icon: ShieldCheck, title: "Insured", sub: "Trained & vetted" },
  { icon: Leaf, title: "Eco-Friendly", sub: "Products available" },
  { icon: Tag, title: "Upfront Pricing", sub: "No hidden fees" },
];

const WHY_US = [
  {
    title: "Transparent, upfront pricing",
    text: "You get a clear quote before we start, with no hidden fees or surprise charges.",
  },
  {
    title: "Trained, vetted & insured",
    text: "Professional cleaners you can trust in your home, backed by insurance.",
  },
  {
    title: "Flexible scheduling",
    text: "Weekly, bi-weekly, monthly or one-time cleans that fit around your life.",
  },
  {
    title: "Eco-friendly products available",
    text: "Prefer greener cleaning? Just ask and we'll use eco-friendly products.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell us about your space",
    text: "Fill out the quote form or send us a text. It takes about a minute.",
  },
  {
    icon: CalendarCheck,
    title: "Get your price & pick a time",
    text: "We send a clear, upfront quote and book a day that works for you.",
  },
  {
    icon: Heart,
    title: "Enjoy your clean home",
    text: "We leave every space clean and organized. You get your time back.",
  },
];

export function Index() {
  const featured = TESTIMONIALS[0]!;
  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush/70 via-secondary to-background rounded-b-[3rem] pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-white/60 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="font-script text-3xl sm:text-4xl text-accent">
              Clean spaces, happy places.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Toronto House Cleaning Services
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              <strong className="text-foreground">The Cleaning Sister</strong> has been cleaning
              homes, condos, Airbnbs and offices across Toronto and the GTA for over{" "}
              {BUSINESS_INFO.yearsInBusiness} years. We care for every home with respect and
              responsibility, leaving every space clean and organized.
            </p>

            <ul className="flex flex-wrap gap-2">
              {CORE_SPECIALTIES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={servicePathForSpecialty(s.id)}
                    className="inline-flex px-3 py-1.5 rounded-full bg-white/80 border border-accent/25 text-xs font-bold text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#quote-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-all"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-foreground font-bold rounded-full border border-border hover:border-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent" /> Text {BUSINESS_INFO.phone}
              </a>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {TRUST_POINTS.map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-foreground">{title}</span>
                    <span className="block text-[11px] text-muted-foreground">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white aspect-[4/3.4] bg-secondary">
              <img
                src="/images/house-cleaning-services-toronto.jpg"
                alt="Sparkling clean kitchen and living room after house cleaning services in Toronto"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <figure className="absolute -bottom-8 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div
                className="flex items-center gap-0.5 text-amber-400 mb-1.5"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-xs text-foreground leading-relaxed line-clamp-3">
                “{featured.quote}”
              </blockquote>
              <figcaption className="mt-1.5 text-[11px] font-bold text-accent">
                {featured.author} · {featured.detail}
              </figcaption>
            </figure>
            <div className="absolute -top-4 -left-2 sm:-left-5 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-xl rotate-[-4deg]">
              <p className="text-2xl font-bold leading-none">{BUSINESS_INFO.yearsInBusiness}+</p>
              <p className="text-[11px] font-semibold text-primary-foreground/80">
                years in the GTA
              </p>
            </div>
          </div>
        </div>
      </section>

      <WorkShowcaseGallery />

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="font-script text-3xl text-accent">What we do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cleaning Services for Every Space
          </h2>
          <p className="text-muted-foreground">
            From regular house cleaning to post-construction clean-ups, one trusted team for your
            home, condo, rental or office.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SPECIALTIES.map((item) => (
            <Link
              key={item.id}
              to={servicePathForSpecialty(item.id)}
              className="group bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <ServiceImage
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  label={item.title}
                  slug={item.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-accent text-xs font-bold px-3 py-1 rounded-full shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  {item.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  Learn more{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
          <a
            href="#quote-section"
            className="rounded-3xl bg-accent text-accent-foreground p-8 flex flex-col justify-center gap-4 shadow-lg shadow-accent/25 hover:-translate-y-1 transition-all"
          >
            <Sparkles className="w-10 h-10" />
            <h3 className="text-2xl font-bold">Not sure what you need?</h3>
            <p className="text-sm text-accent-foreground/90">
              Tell us about your space and we'll recommend the right clean, with an upfront price.
            </p>
            <span className="inline-flex items-center gap-1.5 font-bold">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20 rounded-[3rem] mx-2 sm:mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="font-script text-3xl text-accent">Why choose us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Most Reliable Cleaning Company in Toronto &amp; the GTA
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              We've been serving Toronto families and businesses for over{" "}
              {BUSINESS_INFO.yearsInBusiness} years, working with efficiency and dedication to give
              every client the best service.
            </p>
          </div>
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item) => (
              <li key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <CheckCircle2 className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section id="quote-section" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32">
            <p className="font-script text-3xl text-accent">Get started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Get a Free Cleaning Quote
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ready for affordable, professional cleaning in Toronto and the GTA? Fill out the form
              and we'll get back to you with a customized quote. No obligations, no hidden fees.
            </p>
            <div className="rounded-3xl bg-secondary p-6 space-y-3 text-sm">
              <a
                href={SMS_HREF}
                className="flex items-center gap-3 font-bold text-foreground hover:text-accent"
              >
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </span>
                Text {BUSINESS_INFO.phone}
              </a>
              <p className="text-xs text-muted-foreground pl-[3.25rem] -mt-2">Text messages only</p>
              <p className="flex items-center gap-3 text-foreground">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </span>
                Toronto &amp; the GTA
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <QuoteRequestForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="font-script text-3xl text-accent">Kind words</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.author}
              className={`rounded-3xl p-8 space-y-4 ${
                i % 2 === 0 ? "bg-secondary" : "bg-blush/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent/40" />
              </div>
              <blockquote className="text-base sm:text-lg text-foreground leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-bold text-foreground">{t.author}</span>
                <span className="text-muted-foreground"> · {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="font-script text-3xl text-accent">Simple &amp; fast</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative text-center bg-card border border-border rounded-3xl p-8 shadow-xs"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
              <Icon className="w-10 h-10 text-accent mx-auto mb-4 mt-2" />
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-secondary via-blush/50 to-secondary p-8 sm:p-12">
          <div className="max-w-2xl space-y-3 mb-8">
            <p className="font-script text-3xl text-accent">Where we clean</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Serving Toronto &amp; the Greater Toronto Area
            </h2>
            <p className="text-muted-foreground">
              Find cleaning services in your city. Don't see yours? Text us and we'll let you know
              if we can reach you.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {AREA_PAGES.map((area) => (
              <li key={area.slug}>
                <Link
                  to="/service-areas/$slug"
                  params={{ slug: area.slug }}
                  className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3.5 font-bold text-sm text-foreground shadow-sm hover:text-accent hover:shadow-md transition-all"
                >
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection faqs={HOME_FAQS} />
    </div>
  );
}
