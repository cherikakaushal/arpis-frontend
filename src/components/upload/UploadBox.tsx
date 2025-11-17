"use client";

import { useState, DragEvent, ChangeEvent } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setFile(file);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFile(file);
  };

  return (
    <div>
      {/* UPLOAD BOX */}
      <div
        className="w3-center"
        style={{
          border: "2px dashed rgba(255,255,255,0.15)",
          padding: "50px 30px",
          borderRadius: "20px",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          transition: "0.25s",
          background: "rgba(255,255,255,0.03)",
          boxShadow: isDragging
            ? "0 0 30px rgba(41,244,255,0.4)"
            : "0 0 12px rgba(0,0,0,0.4)",
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FiUploadCloud
          style={{ fontSize: "2.6rem", marginBottom: "14px", color: "#29f4ff" }}
        />

        <p style={{ fontSize: "1rem", marginBottom: "6px" }}>
          Drag & drop your PDF here
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.7,
            marginBottom: "18px",
          }}
        >
          or select a file
        </p>

        <label
          className="w3-button w3-round-large"
          style={{
            background: "#29f4ff",
            color: "#000",
            fontWeight: 600,
            padding: "8px 18px",
          }}
        >
          Select File
          <input
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={handleFileInput}
          />
        </label>
      </div>

      {/* FILE PREVIEW + BUTTON */}
      {file && (
        <div
          className="arpis-glass-card w3-animate-opacity"
          style={{
            marginTop: "25px",
            padding: "20px",
            borderLeft: "3px solid var(--arpis-cyan)",
          }}
        >
          <div style={{ fontSize: "1rem", marginBottom: "6px" }}>
            <strong>{file.name}</strong>
          </div>

          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--arpis-text-muted)",
              marginBottom: "16px",
            }}
          >
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </div>

          <button
            onClick={() => {
              // Save file name in localStorage for the loader + results
              localStorage.setItem("arpis_uploaded_file_name", file.name);

              // Navigate to analyzer
              window.location.href = "/analyze";
            }}
            className="w3-button w3-round-large"
            style={{
              background: "var(--arpis-purple)",
              color: "#fff",
              padding: "10px 22px",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.03em",
              cursor: "pointer",
              border: "none",
            }}
          >
            Analyze Paper →
          </button>
        </div>
      )}
    </div>
  );
}
