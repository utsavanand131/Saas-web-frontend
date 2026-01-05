import Section from "../components/ui/Section";

export default function About() {
  return (
    <Section title="About Us" subtitle="Who we are and what we build">
      <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
        We create modern, minimal SaaS interfaces that focus on usability,
        performance, and scalability. Our goal is to help teams launch faster
        with clean, production-ready UI components.
      </p>
    </Section>
  );
}
