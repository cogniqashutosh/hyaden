import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/data/site";
import { categories } from "@/lib/data/products";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the friendly virtual assistant for Hayden Furniture Depot, a locally owned furniture and home décor showroom in Coeur d'Alene, Idaho.

Store facts you can share:
- Address: ${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}
- Phone: ${site.phone}
- Email: ${site.email}
- Hours: ${site.hours.map((h) => `${h.days}: ${h.time}`).join("; ")}
- Categories we carry: ${categories.map((c) => c.name).join(", ")}
- We offer both in-store pickup and delivery.

Guidelines:
- Be warm, concise, and helpful — a couple of short sentences, not an essay.
- If asked about specific stock, exact pricing, or anything you're not certain about, suggest calling ${site.phone} or visiting the showroom rather than guessing.
- You ONLY discuss Hayden Furniture Depot: our products, categories, store info, delivery/pickup, and visiting the showroom.
- If asked anything unrelated to the store — general knowledge, people, news, politics, coding, other businesses, or any other topic — do NOT answer it, not even briefly or partially. Politely decline in one sentence and redirect to how you can help with furniture or the showroom. Do not repeat, summarize, or acknowledge the content of the off-topic question.
- Never invent products, prices, or promises about delivery dates.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidMessage(m: unknown): m is ChatMessage {
  if (typeof m !== "object" || m === null) return false;
  const { role, content } = m as ChatMessage;
  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.length > 0 &&
    content.length <= 2000
  );
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat isn't configured yet. Please call or email us instead." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || !messages.every(isValidMessage) || messages.length === 0) {
    return NextResponse.json({ error: "Invalid messages." }, { status: 400 });
  }

  const trimmed = messages.slice(-10) as ChatMessage[];

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
        temperature: 0.6,
        max_tokens: 400,
      }),
    });

    if (!groqRes.ok) {
      return NextResponse.json({ error: "Chat request failed." }, { status: 502 });
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I didn't quite catch that — could you rephrase?";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Chat request failed." }, { status: 502 });
  }
}
