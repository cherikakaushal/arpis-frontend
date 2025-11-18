import { NextResponse } from "next/server";

/** Clean helper → removes HTML tags */
function clean(text: string | null) {
  return text?.replace(/<[^>]*>/g, "").trim() || "";
}

/** Extract using safe regex */
function extract(pattern: RegExp, html: string) {
  const m = html.match(pattern);
  return m ? clean(m[1]) : "";
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) throw new Error("Missing URL");

    // Fetch RAW HTML (NOT JSON)
    const html = await fetch(`https://r.jina.ai/${url}`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    }).then((res) => res.text());

    // Parse common fields
    let title =
      extract(/<title>(.*?)<\/title>/i, html) ||
      extract(/"name":\s*"(.*?)"/, html);

    let authors =
      extract(/"author":\s*\[(.*?)\]/, html)
        .replace(/"/g, "")
        .replace(/\s+/g, ", ")
        .trim();

    let year = extract(/"datePublished":\s*"(.*?)"/, html)
      .substring(0, 4);

    let citations = extract(/"citationCount":\s*(\d+)/, html);

    // Detect platform
    let platform = "Unknown";
    if (url.includes("arxiv")) platform = "arXiv";
    if (url.includes("scholar.google")) platform = "Google Scholar";
    if (url.includes("pubmed")) platform = "PubMed";
    if (url.includes("ieee")) platform = "IEEE Xplore";

    return NextResponse.json({
      success: true,
      platform,
      title,
      authors,
      year,
      citations,
      source: url
    });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message
    });
  }
}
