const steps = [
  {
    emoji: "🗣️",
    title: "Just tell it",
    description:
      "Type what you spent like you're texting a friend. Finni gets it.",
  },
  {
    emoji: "🤖",
    title: "Finni figures it out",
    description:
      "It automatically sorts your spending, spots patterns, and keeps track — so you don&apos;t have to.",
  },
  {
    emoji: "💡",
    title: "You get smarter",
    description:
      "Get tips, nudges, and insights that actually make sense for your life.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="how-it-works-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12 sm:mb-16"
        >
          How does Finni work?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="feature-card"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div className="mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#00E676]/20 to-[#00E676]/5 flex items-center justify-center border border-[#00E676]/20">
                  <span className="text-2xl sm:text-3xl">{step.emoji}</span>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[#8892A4] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
