import { ImageResponse } from "next/og";

export const alt = "Réplique : répondez à vos clients en un clic";
export const size = { width: 1200, height: 630 };
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
          background: "#f7f3ec",
          color: "#1f4d3a",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          Réplique
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Répondez à vos clients en un clic.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 34,
              color: "#1a1a17",
            }}
          >
            Les questions qui reviennent, avec la réponse prête.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              background: "#c94a18",
              color: "white",
              fontSize: 34,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 8,
            }}
          >
            79 € par mois
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 28,
              fontSize: 30,
              color: "#1a1a17",
            }}
          >
            Sans engagement · remboursé 30 jours
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}