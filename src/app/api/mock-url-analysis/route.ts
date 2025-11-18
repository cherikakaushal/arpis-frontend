import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = body.url || "Unknown URL";

    const mock = {
      url,
      title: "Deep Learning Approaches for Research Paper Understanding",
      authors: ["A. Kumar", "J. Lee", "N. Fernandez"],
      year: 2024,
      abstract:
        "This paper explores transformer-based architectures for extracting insights, summaries, and citation patterns from scientific documents...",
      summary10:
        "Transformer models extract meaningful insights, summarize content, identify patterns, and predict future research trends.",
      keyFindings: [
        "Improved abstract summarization",
        "Better citation prediction",
        "Stronger multi-paper comparison",
      ],
      methodology:
        "Hybrid transformer architecture optimized for scientific datasets.",
      limitations: [
        "Requires high compute resources",
        "Poor performance on poorly scanned PDFs",
      ],
      futureScope: [
        "Automated literature reviews",
        "Domain-focused LLMs",
        "Real-time citation networks",
      ],
    };

    return NextResponse.json(mock);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Invalid JSON or server issue" },
      { status: 500 }
    );
  }
}
