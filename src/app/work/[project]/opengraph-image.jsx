import { ImageResponse } from "next/og";

import projects from "../../data/work";

export const alt = "Shift Web project case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function OpenGraphImage({ params }) {
  const { project } = await params;
  const data = projects.find((item) => item.slug === project);

  if (!data) {
    return new Response("Project not found", { status: 404 });
  }

  const imageUrl = new URL(data.image.src, siteUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          background: "#233DFF",
          color: "white",
          display: "flex",
          height: "100%",
          padding: "64px",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          src={imageUrl}
          alt=""
          style={{
            height: "100%",
            objectFit: "contain",
            objectPosition: "right center",
            position: "absolute",
            right: "48px",
            top: 0,
            width: "58%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "48%",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            SHIFT WEB
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
              {data.title}
            </div>
            <div style={{ color: "#CBD5E1", display: "flex", fontSize: 24 }}>
              {data.cardTitle}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}