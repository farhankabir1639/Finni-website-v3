"use client";

import React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Eyebrow, Icon, StoreButtons } from "./ui";
import { useReveal } from "./useReveal";
import { ES_FAQ } from "@/lib/esFaq";

function EsHero() {
  return (
    <header
      className="finni-section finni-section--tight"
      style={{ paddingTop: 60, position: "relative", overflow: "hidden", textAlign: "center" }}
    >
      <div className="finni-aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
      </div>
      <div className="finni-container" style={{ position: "relative", zIndex: 1, maxWidth: 1000 }}>
        <div className="reveal">
          <span className="finni-chip" style={{ marginBottom: 30 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: "var(--finni-mint)",
                boxShadow: "0 0 10px var(--finni-mint)",
              }}
            />
            Ya disponible en Google Play · iOS muy pronto
          </span>
          <h1
            className="finni-display"
            style={{ fontSize: "clamp(2.9rem, 8.2vw, 6.4rem)", lineHeight: 0.97, letterSpacing: "-0.035em", margin: "0 0 26px" }}
          >
            Tu dinero, por fin
            <br />
            <span className="finni-gradient-text">en sintonía contigo.</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto 34px", maxWidth: "60ch" }}>
            Registrar y categorizar el dinero siempre ha sido la tarea de presupuesto que te agota. Finni lo resuelve
            con tu voz: una sola conversación se encarga de todo el seguimiento, así solo hablas y obtienes respuestas
            claras y tranquilas.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StoreButtons center />
          </div>
          <div
            style={{
              display: "flex",
              gap: 22,
              marginTop: 26,
              flexWrap: "wrap",
              justifyContent: "center",
              color: "var(--text-3)",
              fontSize: "var(--text-sm)",
            }}
          >
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="lock" size={16} stroke="var(--finni-mint)" /> Cifrado de nivel bancario
            </span>
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="zap" size={16} stroke="var(--finni-mint)" /> Listo en 2 minutos
            </span>
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="shield" size={16} stroke="var(--finni-mint)" /> Nunca vendemos tus datos
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function EsHowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "chat",
      h: "Solo háblale",
      b: "«Gasté $40 en la cena.» «¿Cuánto puedo gastar este fin de semana?» Finni entiende el lenguaje natural: escríbele como le escribirías a un amigo.",
    },
    {
      n: "02",
      icon: "sparkles",
      h: "Finni hace las cuentas",
      b: "Categoriza, registra y proyecta automáticamente. Sin reglas que configurar, sin recibos que escanear, sin etiquetado manual.",
    },
    {
      n: "03",
      icon: "trend",
      h: "Tú vas un paso adelante",
      b: "Avisos amables antes de que gastes de más, una imagen clara de lo que puedes gastar y metas que de verdad avanzan.",
    },
  ];
  return (
    <section className="finni-section">
      <div className="finni-container">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 56 }}>
          <Eyebrow>Cómo funciona</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            Gestión del dinero sin la gestión.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {steps.map((s, i) => (
            <div key={s.n} className="finni-card reveal" style={{ transitionDelay: i * 70 + "ms" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
                <span className="finni-icon">
                  <Icon name={s.icon} />
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-3)" }}>
                  {s.n}
                </span>
              </div>
              <h3 className="finni-display finni-h3" style={{ fontSize: "1.4rem", marginBottom: 10 }}>
                {s.h}
              </h3>
              <p style={{ color: "var(--text-2)", margin: 0, lineHeight: "var(--lh-relaxed)", fontSize: "var(--text-sm)" }}>
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EsFeatures() {
  const feats: [string, string, string][] = [
    ["wallet", "Registro en lenguaje natural", "«Café $5.» Listo. Sin formularios, sin categorías, sin fricción."],
    ["sparkles", "Categorización automática", "Cada transacción se ordena en el momento en que ocurre, con precisión."],
    ["trend", "Disponible para gastar", "Un solo número que te dice exactamente cuánto puedes gastar hoy."],
    ["bell", "Avisos inteligentes", "Recordatorios amables antes de pasarte del presupuesto, nunca después."],
    ["target", "Metas en piloto automático", "Configúralo una vez. Finni mueve el dinero hacia lo que importa."],
    ["lock", "Privado por diseño", "Cifrado de nivel bancario. Nunca vendemos ni compartimos tus datos."],
  ];
  return (
    <section className="finni-section">
      <div className="finni-container">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 52 }}>
          <Eyebrow>Características</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            Todo lo que le pedirías a un amigo que hiciera por ti.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {feats.map(([ic, h, b], i) => (
            <div key={h} className="finni-card reveal" style={{ transitionDelay: (i % 3) * 70 + "ms" }}>
              <span className="finni-icon" style={{ marginBottom: 20 }}>
                <Icon name={ic} />
              </span>
              <h3 className="finni-display" style={{ fontSize: "1.25rem", marginBottom: 9 }}>
                {h}
              </h3>
              <p style={{ color: "var(--text-2)", margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)" }}>
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EsFaq() {
  return (
    <section className="finni-section" id="faq">
      <div className="finni-container" style={{ maxWidth: 780 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center" }}>
            Preguntas frecuentes
          </span>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            Tus preguntas, respondidas.
          </h2>
        </div>
        <div className="reveal" style={{ display: "grid", gap: 12 }}>
          {ES_FAQ.map((item) => (
            <div key={item.q} className="finni-card" style={{ padding: "20px 24px" }}>
              <h3 className="finni-display" style={{ fontSize: "1.1rem", marginBottom: 8 }}>
                {item.q}
              </h3>
              <p style={{ color: "var(--text-2)", fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)", margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EsCTA() {
  return (
    <section className="finni-section" id="download">
      <div className="finni-container">
        <div
          className="finni-card reveal"
          style={{
            padding: "clamp(40px, 6vw, 72px)",
            textAlign: "center",
            background: "radial-gradient(120% 120% at 50% 0%, rgba(124,92,252,0.18), transparent 60%), var(--surface-2)",
            border: "1px solid var(--border-brand)",
          }}
        >
          <h2 className="finni-display finni-h2" style={{ marginBottom: 16, maxWidth: 720, marginInline: "auto" }}>
            Empieza a hablar con tu dinero.
          </h2>
          <p className="finni-lead" style={{ margin: "0 auto 30px", textAlign: "center" }}>
            Descarga Finni gratis en Android hoy mismo; la versión para iOS llegará muy pronto. Listo en dos minutos,
            sin tarjeta.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StoreButtons center />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EsHome() {
  useReveal();
  return (
    <>
      <Nav />
      <EsHero />
      <EsHowItWorks />
      <EsFeatures />
      <EsFaq />
      <EsCTA />
      <Footer />
    </>
  );
}
