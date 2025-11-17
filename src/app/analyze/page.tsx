"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const messages = [
  "Reading the research paper…",
  "Extracting abstract and metadata…",
  "Mapping methodologies…",
  "Identifying key findings…",
  "Detecting limitations…",
  "Generating structured summary…",
  "Preparing final insights…",
];

export default function AnalyzePage() {
  const [messageIndex, setMessageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1200);

    const redirect = setTimeout(() => {
      router.push("/results");
    }, 6500);

    return () => {
      clearInterval(interval);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div
      className="w3-animate-opacity"
      style={{
        display: "flex",
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div className="arpis-orb-loader"></div>

      <p
        style={{
          marginTop: "24px",
          fontSize: "1.2rem",
          color: "var(--arpis-text-muted)",
        }}
      >
        {messages[messageIndex]}
      </p>
    </div>
  );
}
