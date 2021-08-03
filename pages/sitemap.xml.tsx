import { PageType } from "components/Types";

const generateSitemap = (pages: PageType[], origin: string): string => {
  let xml = "";

  pages.map((page) => {
    xml += `
    <url>
        <loc>${origin + page.path}</loc>
        <lastmod>${page.updated}</lastmod>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${xml.trimStart()}
</urlset>`;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps({
  res,
}): Promise<{ [key: string]: unknown }> {
  const data: PageType[] = [];
  data.push({ path: "/", updated: "2020-07-01T00:00:00.000Z" });
  data.push({ path: "/docs/api", updated: "2021-08-03T00:00:00.000Z" });
  data.push({ path: "/docs/mqtt", updated: "2021-08-03T00:00:00.000Z" });
  data.push({ path: "/docs/websocket", updated: "2021-08-03T00:00:00.000Z" });
  data.push({ path: "/faq", updated: "2021-08-03T00:00:00.000Z" });

  const sitemap = generateSitemap(data, "https://system-bridge.timmo.dev");

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

const SitemapIndex = (): null => null;
export default SitemapIndex;
