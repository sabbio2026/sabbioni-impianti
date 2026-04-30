import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sabbioni Impianti S.R.L. — Impianti tecnici in tutto il Centro Italia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial Black, Impact, sans-serif",
          position: "relative",
        }}
      >
        {/* Top green bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#8DC63F", display: "flex" }} />

        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
          <div style={{ fontSize: 128, fontWeight: 900, color: "#1A1F6B", letterSpacing: "-4px" }}>
            SABBIONI
          </div>
          <div style={{ fontSize: 128, fontWeight: 900, color: "#8DC63F", letterSpacing: "-4px", marginTop: -8 }}>
            IMPIANTI
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#1A1F6B", marginTop: 4, letterSpacing: "0px" }}>
            S.R.L.
          </div>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 26, color: "#64748B", fontWeight: 400, marginTop: 28, display: "flex" }}>
          Impianti tecnici in tutto il Centro Italia dal 1990
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
          {["OS30 SOA", "F-GAS", "30+ anni"].map((tag) => (
            <div
              key={tag}
              style={{
                border: "2px solid rgba(141,198,63,0.3)",
                background: "rgba(141,198,63,0.08)",
                color: "#5A9222",
                padding: "8px 22px",
                borderRadius: 10,
                fontSize: 22,
                fontWeight: 700,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom navy bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 10, background: "#1A1F6B", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
