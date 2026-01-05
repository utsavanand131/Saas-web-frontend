import Section from "../components/ui/Section";

export default function Contact() {
  return (
    <Section
      title="Contact Us"
      subtitle="Get in touch with our team"
    >
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </Section>
  );
}
