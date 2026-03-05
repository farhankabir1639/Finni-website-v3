import InsightsMockup from "./InsightsMockup";

const benefits = [
  "No more manually entering receipts",
  "AI that understands plain English (or your language)",
  "Feels like texting, not doing taxes",
  "Built for real life, not finance bros",
];

export default function WhyFinni() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
      aria-labelledby="why-finni-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2
              id="why-finni-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 text-white"
            >
              Budgeting apps are boring. Finni isn&apos;t.
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00E676] flex items-center justify-center mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0A0F1E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-[#E2E8F0] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="drop-shadow-2xl">
              <InsightsMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
