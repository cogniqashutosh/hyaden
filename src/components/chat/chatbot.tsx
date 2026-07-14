"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm here to help with anything about Hayden Furniture Depot — hours, delivery, our collections, you name it. What can I help with?",
};

const SUGGESTIONS = [
  "Where are you located?",
  "What are your best sellers?",
  "What are your store hours?",
  "Do you offer delivery?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(e?: React.FormEvent, override?: string) {
    e?.preventDefault();
    const text = (override ?? input).trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10) }),
      });
      if (!res.ok) throw new Error("Chat request failed");
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Sorry, I'm having trouble connecting right now. Please call us at ${site.phone} and we'll be glad to help.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[30rem] max-h-[70vh] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
          >
            <div className="flex shrink-0 items-center justify-between gap-3 bg-espresso px-5 py-4 text-cream">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="font-heading text-sm font-semibold leading-tight">
                    Hayden Depot
                  </p>
                  <p className="text-[11px] text-cream/60">
                    Ask us anything
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([WELCOME])}
                  aria-label="Clear chat"
                  disabled={loading}
                  className="text-cream/70 hover:text-cream transition-colors disabled:opacity-40 p-1"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="text-cream/70 hover:text-cream transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "self-end bg-primary text-primary-foreground"
                      : "self-start bg-secondary text-secondary-foreground"
                  )}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="self-start flex items-center gap-1.5 rounded-2xl bg-secondary px-4 py-3">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                </div>
              )}
              {messages.length === 1 && !loading && (
                <div className="flex flex-col items-start gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(undefined, s)}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-barn-red hover:text-barn-red transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={sendMessage}
              className="flex shrink-0 items-center gap-2 border-t border-border px-4 py-4"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask us anything..."
                aria-label="Chat message"
                className="h-11 rounded-full px-4"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                className="h-11 w-11 rounded-full shrink-0"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-barn-red text-white shadow-lg hover:bg-barn-red/85 transition-colors"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
