import projects from "./data/work";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const pages = ["", "/about", "/work"];
  const projectPages = projects.map((project) => `/work/${project.slug}`);

  return [...pages, ...projectPages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/work/") ? "yearly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}