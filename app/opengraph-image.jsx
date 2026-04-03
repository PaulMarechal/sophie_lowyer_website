import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sophie Maréchal, avocate à Paris";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(18,29,45,0.22) 0%, rgba(18,29,45,0.75) 100%), linear-gradient(135deg, #dde7f6 0%, #bacdea 38%, #7d95bb 100%)",
          color: "#f7f1e7",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.38), transparent 26%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.18), transparent 18%), radial-gradient(circle at 72% 70%, rgba(73,120,196,0.28), transparent 24%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 36,
            left: 64,
            right: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#162336",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: 42 }}>
            <span>A propos</span>
            <span>Compétences</span>
          </div>
          <div
            style={{
              fontSize: 34,
              textTransform: "none",
              letterSpacing: 0,
              fontWeight: 700,
            }}
          >
            Sophie Maréchal
          </div>
          <div style={{ display: "flex", gap: 42 }}>
            <span>Honoraires</span>
            <span>Contact</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 130,
            top: 148,
            display: "flex",
            flexDirection: "column",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              marginBottom: 22,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(247,241,231,0.82)",
            }}
          >
            Cabinet d&apos;avocat · Paris
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: -3,
            }}
          >
            <span>Sophie Maréchal</span>
            <div
              style={{
                marginTop: 18,
                padding: "26px 34px 30px",
                display: "flex",
                flexDirection: "column",
                borderRadius: 34,
                background: "rgba(97, 140, 211, 0.34)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 24px 60px rgba(25,39,62,0.22)",
              }}
            >
              <span>Droit public &</span>
              <span>droit de</span>
              <span>l&apos;urbanisme</span>
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "rgba(247,241,231,0.9)",
            }}
          >
            Avocate inscrite au barreau de Paris
          </div>
        </div>
      </div>
    ),
    size
  );
}
