"use client";

import { useState } from "react";
import styles from "./AIQueryBox.module.css";
import { FiSend } from "react-icons/fi";

export default function AIQueryBox({ paper }: any) {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  const mockReply = (q: string) => {
    // FAKE AI response bank
    const responses = [
      "This concept refers to simplifying the research idea using the extracted methodology.",
      "Based on this paper, the primary focus is optimization and structured improvement.",
      "The study highlights several important challenges that need further work.",
      "This paper’s key contribution is building a more stable research architecture.",
      "In simple words: it tries to make the system faster, smarter, and more accurate.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const ask = () => {
    if (!question.trim()) return;

    const answer = mockReply(question);

    setHistory((prev) => [...prev, { q: question, a: answer }]);
    setQuestion("");
  };

  return (
    <div className={styles.wrapper}>
      {/* Search Bar */}
      <div className={styles.inputBox}>
        <input
          id="arpis-search"
          type="text"
          placeholder="Ask ARPIS about this paper..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask()}
        />
        <button onClick={ask}>
          <FiSend size={18} />
        </button>
      </div>

      {/* Answer List */}
      <div className={styles.qaList}>
        {history.map((item, index) => (
          <div key={index} className={styles.qaCard}>
            <p className={styles.q}><strong>Q:</strong> {item.q}</p>
            <p className={styles.a}><strong>A:</strong> {item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
