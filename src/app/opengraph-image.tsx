import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Finni — Your money, finally on speaking terms.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          background: "linear-gradient(135deg, #0B1020 0%, #070A12 60%)",
          color: "#F7FAFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#3FE0C0",
            fontWeight: 600,
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: 99, background: "#3FE0C0" }} />
          Now live on Google Play · iOS coming soon
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            marginTop: 28,
            marginBottom: 8,
          }}
        >
          finni
        </div>

        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, color: "#9D85FF", letterSpacing: "-0.02em" }}>
          Your money, finally on speaking terms.
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#94A3B8", marginTop: 28, maxWidth: 900 }}>
          The personal finance app that feels like texting a friend.
        </div>

        <div
          style={{
            display: "flex",
            width: 240,
            height: 10,
            borderRadius: 99,
            marginTop: 40,
            background: "linear-gradient(90deg, #9D85FF 0%, #7C5CFC 50%, #3FE0C0 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
