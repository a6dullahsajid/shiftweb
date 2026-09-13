import { ImageResponse } from "next/og";
import projects from "../../data/work";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const ogImages = {
  kickxwear: "/kickxwear-og-image.png",
  oasistrends: "/oasistrends-og-image.png",
  vanlife: "/vanlife-og-image.png",
  spendwise: "/spendwise-og-image.png",
  portexa: "/portexa-og-image.png",
};

export default async function Image({ params }) {
  const { project } = await params;

  const imagePath =
    ogImages[project] || "/opengraph-image.png";
  const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imagePath}` || `http://localhost:3000${imagePath}`;  

  return new ImageResponse(
    <img
      src={imageUrl}
      width="1200"
      height="630"
      style={{
        width: "1200px",
        height: "630px",
      }}
    />,
    size
  );
}