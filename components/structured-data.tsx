import { getJsonLdGraph } from "@/lib/seo-config";

export function StructuredData() {
  const json = getJsonLdGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
