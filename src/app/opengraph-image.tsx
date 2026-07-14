import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HERNA — Heritage of Nations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#040404",
          color: "#F2F0EA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#D4AF37" }}>
          HERNA HOLDING
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: -2,
          }}
        >
          HERITAGE OF NATIONS
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#A8A8A8" }}>
          Building the Future. Honoring the Legacy.
        </div>
      </div>
    ),
    { ...size },
  );
}
