import { PLAY_STORE_URL } from "./links";

// Spanish FAQ — shared by the visible /es section and the FAQPage JSON-LD.
// Plain module (no "use client") so a Server Component can also read it.
export const ES_FAQ: { q: string; a: string }[] = [
  {
    q: "¿Qué es Finni?",
    a: "Finni es una app de finanzas personales que funciona como enviarle un mensaje a un amigo. Registras tus gastos en lenguaje natural por voz o texto, y Finni los categoriza automáticamente, te muestra cuánto puedes gastar sin problema y te envía avisos amables antes de que gastes de más. Es gratis en Android (Google Play), y muy pronto en iOS.",
  },
  {
    q: "¿Cómo funciona Finni?",
    a: "Solo dile a Finni lo que gastaste en lenguaje cotidiano, por ejemplo: «Gasté $12 en el almuerzo». Finni lo registra y categoriza al instante, guarda un historial completo de tus gastos y lo convierte en información clara y recomendaciones personalizadas de presupuesto. Sin formularios, sin categorías manuales, sin hojas de cálculo.",
  },
  {
    q: "¿Finni es gratis?",
    a: "Sí. Finni es gratis de descargar en Google Play y gratis para empezar a usar, sin tarjeta de crédito.",
  },
  {
    q: "¿Mis datos financieros están seguros?",
    a: "Sí. Tus datos financieros están cifrados y almacenados de forma segura, y Finni nunca vende tu información personal.",
  },
  {
    q: "¿En qué plataformas está disponible Finni?",
    a: "Finni ya está disponible en Android a través de Google Play. La versión para iOS llegará muy pronto.",
  },
  {
    q: "¿Finni me ayuda a presupuestar y a alcanzar mis metas de ahorro?",
    a: "Sí. Finni analiza tus gastos para darte recomendaciones personalizadas de presupuesto y te permite fijar metas de ahorro que controla automáticamente, para que veas tu progreso sin trabajo manual.",
  },
  {
    q: "¿Dónde puedo descargar Finni?",
    a: `Finni está disponible en Google Play: ${PLAY_STORE_URL}. La versión para iOS llegará muy pronto.`,
  },
];
