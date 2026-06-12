import { PLAY_STORE_URL } from "@/lib/links";

export default function CTABanner() {
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E676] via-[#00D66A] to-[#00B85C]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1128] mb-4 sm:mb-5"
            >
              Finni is live. Ready to meet your money buddy?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#0A1128]/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Download Finni AI on the Google Play Store and start making
              sense of your money today.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#0A0F1E",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "16px",
                padding: "16px 40px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                boxShadow: "none",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Get it on Google Play
            </a>
          </div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
