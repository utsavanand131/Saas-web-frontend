import Hero from "../components/home/Hero";
import FeatureGrid from "../components/home/FeatureGrid";
import PricingCards from "../components/home/PricingCards";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Section from "../components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        title="Features"
        subtitle="Everything you need to build and scale your SaaS"
      >
        <FeatureGrid />
      </Section>

      <Section
        title="Pricing"
        subtitle="Simple, transparent pricing"
      >
        <PricingCards />
      </Section>

      <Section
        title="Testimonials"
        subtitle="What our customers are saying"
      >
        <Testimonials />
      </Section>

      <Section
        title="FAQ"
        subtitle="Common questions answered"
      >
        <FAQ />
      </Section>
    </>
  );
}
