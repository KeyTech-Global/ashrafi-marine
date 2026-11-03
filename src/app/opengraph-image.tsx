import { ImageResponse } from "next/og";

export const alt =
  "Ashrafi Marine Products — dry fish wholesale, Madh Island, Mumbai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #04121D 0%, #071C2C 55%, #0C3242 100%)",
          padding: "64px 72px",
          position: "relative",
          color: "#F8FAFA",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 26,
            border: "1px solid rgba(197,164,109,0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(8,127,131,0.38) 0%, rgba(8,127,131,0) 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 26,
            borderBottom: "1px solid rgba(248,250,250,0.16)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 999,
                border: "1px solid rgba(197,164,109,0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C5A46D",
                fontSize: 18,
                letterSpacing: 2,
              }}
            >
              AM
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  letterSpacing: 8,
                  color: "#F8FAFA",
                }}
              >
                ASHRAFI
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  letterSpacing: 5,
                  color: "rgba(248,250,250,0.55)",
                }}
              >
                MARINE PRODUCTS
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 3,
              color: "#C5A46D",
              display: "flex",
            }}
          >
            MADH ISLAND · MUMBAI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            paddingTop: 8,
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: 5,
              color: "#C5A46D",
              display: "flex",
            }}
          >
            DRY FISH WHOLESALE · SERVING INDIA
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontSize: 70,
              lineHeight: 1.06,
              letterSpacing: -1.5,
            }}
          >
            <div style={{ display: "flex" }}>Quality dry fish.</div>
            <div style={{ display: "flex", color: "#DCC39A" }}>
              Reliable wholesale supply.
            </div>
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 21,
              color: "rgba(248,250,250,0.62)",
              display: "flex",
            }}
          >
            Jawla · Mixed dry fish · Other varieties · Bulk enquiries
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid rgba(248,250,250,0.16)",
            fontSize: 13,
            letterSpacing: 2.5,
            color: "rgba(248,250,250,0.5)",
            position: "relative",
          }}
        >
          <div style={{ display: "flex" }}>
            WHOLESALE PRICING ON ENQUIRY
          </div>
          <div style={{ display: "flex", color: "#F8FAFA" }}>
            +91 99300 83206
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
