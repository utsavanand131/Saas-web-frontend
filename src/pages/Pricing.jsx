import PricingCards from "../components/home/PricingCards";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose a plan that fits your needs. No hidden fees.
        </p>
      </header>

      <PricingCards />
    </div>
  );
}
