import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
}

const SITE_NAME = "Gissat Eco Solutions";
const BASE_URL = "https://gissat.org"; // update when domain is live

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrValue] = selector
      .replace("meta[", "")
      .replace("]", "")
      .replace(/"/g, "")
      .split("=");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function useSEO({ title, description, canonical }: SEOOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;

    // Page title
    document.title = fullTitle;

    // Meta description
    setMeta('meta[name="description"]', "content", description);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:type"]', "content", "website");

    // Twitter card
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);

    // Canonical
    const href = canonical ?? BASE_URL + window.location.pathname;
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link") as HTMLLinkElement;
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = href;
  }, [title, description, canonical]);
}
