import type { Metadata } from "next";
import { EsHome } from "@/components/finni/EsHome";
import { ES_FAQ } from "@/lib/esFaq";

const languages = {
  en: "/",
  es: "/es",
  "x-default": "/",
};

export const metadata: Metadata = {
  title: "Finni — Tu dinero, por fin en sintonía contigo.",
  description:
    "Finni es la app de finanzas personales que se siente como enviarle un mensaje a un amigo. Registra tus gastos en lenguaje natural y obtén respuestas claras y tranquilas. Ya disponible en Google Play.",
  alternates: { canonical: "/es", languages },
  openGraph: {
    title: "Finni — Tu dinero, por fin en sintonía contigo.",
    description:
      "La app de finanzas personales que se siente como enviarle un mensaje a un amigo. Ya disponible en Google Play, iOS muy pronto.",
    url: "/es",
    locale: "es_ES",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: ES_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <EsHome />
    </>
  );
}
