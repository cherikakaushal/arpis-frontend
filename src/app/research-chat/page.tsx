"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./chat.module.css";

type Message = {
  id: number;
  sender: "user" | "arpis";
  text: string;
};

export default function ResearchChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "arpis",
      text:
        "Greetings. I am ARPIS — your scientific intelligence module. Paste a question, upload a paper, or ask me anything about research.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setTyping(true);

    // Mock ARPIS reply
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "arpis",
          text:
            "Mock analysis online. Based on your query, this would normally reference the uploaded PDF, extract core concepts, and generate a structured scientific answer (placeholder for now).",
        },
      ]);
    }, 1300);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <section className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.orbWrap}>
          <div className={styles.orbCore}></div>
          <div className={styles.orbGlow}></div>
          <div className={styles.orbHalo}></div>
        </div>

        <div className={styles.headerText}>
          <h2 className={styles.title}>Research Chat</h2>
          <p className={styles.subtitle}>
            CERN-level scientific Q&A · mock intelligence mode
          </p>
        </div>
      </div>

      {/* CHAT WINDOW */}
      <div className={styles.chatWindow}>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${styles.messageRow} ${
              m.sender === "user" ? styles.right : styles.left
            }`}
          >
            {m.sender === "arpis" && (
              <div className={styles.avatar}>
                <div className={styles.avatarOrb}></div>
              </div>
            )}

            <div
              className={`${styles.bubble} ${
                m.sender === "user" ? styles.userBubble : styles.arpisBubble
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {typing && (
          <div className={`${styles.messageRow} ${styles.left}`}>
            <div className={styles.avatar}>
              <div className={styles.avatarOrb}></div>
            </div>
            <div className={`${styles.bubble} ${styles.arpisBubble}`}>
              <div className={styles.typingDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* INPUT BAR */}
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          placeholder="Ask ARPIS a research question…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className={styles.sendBtn} onClick={sendMessage}>
          ➤
        </button>
      </div>
    </section>
  );
}
