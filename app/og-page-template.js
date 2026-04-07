import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export const ogImageContentType = "image/png";
export const ogImageRuntime = "edge";

export function createPageOgImage({
  eyebrow,
  title,
  subtitle,
  accent,
}) {
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
            "linear-gradient(180deg, rgba(18,29,45,0.94) 0%, rgba(24,38,60,1) 100%)",
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
              "radial-gradient(circle at 18% 20%, rgba(103,156,226,0.18), transparent 24%), radial-gradient(circle at 80% 18%, rgba(221,196,154,0.12), transparent 18%), radial-gradient(circle at 72% 78%, rgba(73,120,196,0.18), transparent 22%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 34,
            left: 56,
            right: 56,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(247,241,231,0.88)",
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
            left: 90,
            top: 130,
            right: 90,
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              marginBottom: 24,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(247,241,231,0.72)",
            }}
          >
            {eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "fit-content",
                maxWidth: 1020,
                padding: "22px 28px 26px",
                borderRadius: 34,
                background: "rgba(97, 140, 211, 0.22)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 24px 60px rgba(25,39,62,0.18)",
                fontSize: 76,
                lineHeight: 0.96,
                letterSpacing: -2.5,
              }}
            >
              {title}
            </div>

            {accent ? (
              <div
                style={{
                  display: "flex",
                  width: "fit-content",
                  padding: "10px 18px 14px",
                  borderRadius: 22,
                  background: "rgba(97, 140, 211, 0.28)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#f7f1e7",
                  fontSize: 34,
                  lineHeight: 1.1,
                }}
              >
                {accent}
              </div>
            ) : null}
          </div>

          <div
            style={{
              marginTop: 28,
              maxWidth: 920,
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(247,241,231,0.88)",
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
