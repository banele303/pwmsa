"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageCircle, X, Send, RotateCcw, ChevronDown, Bot, User } from "lucide-react";

// ─── Knowledge base ──────────────────────────────────────────────────────────
const KB: Array<{ patterns: RegExp[]; answer: string }> = [
  {
    patterns: [/hello|hi\b|hey|howzit|good morning|good afternoon|good evening/i],
    answer:
      "Hello! 👋 Welcome to PWMSA — the Progressive Women's Movement of South Africa. I'm here to help you learn about our work, campaigns, leadership, or how to get involved.\n\nWhat would you like to know?",
  },
  {
    patterns: [/what is pwmsa|who are (you|pwmsa)|about pwmsa|tell me about/i],
    answer:
      "PWMSA — the **Progressive Women's Movement of South Africa** — was established on **08 August 2006** in Bloemfontein. We are a broad-based women's movement committed to advancing women's emancipation, promoting gender equality, and achieving social justice across South Africa.\n\nOur work spans advocacy, mobilisation, partnerships and grassroots engagement — ensuring women participate meaningfully in the social, political and economic life of the country.",
  },
  {
    patterns: [/when (was|were)|founded|established|history|1956/i],
    answer:
      "PWMSA was established on **08 August 2006 in Bloemfontein**, building on the longstanding tradition of organised women's activism and the legacy of the historic **1956 Women's March** against pass laws.\n\nThe date of our founding was chosen deliberately to honour that powerful legacy of women's collective action.",
  },
  {
    patterns: [/pillar|focus area|strategic|programme/i],
    answer:
      "PWMSA's work is anchored by **6 strategic pillars**:\n\n1️⃣ **Eradication of GBV & Femicide** — prevention, survivor support, legal enforcement\n2️⃣ **Economic Empowerment** — entrepreneurship, equal pay, access to finance\n3️⃣ **Political Participation & Leadership** — representation, mentorship, governance\n4️⃣ **Education & Skills Development** — access, digital literacy, bursaries\n5️⃣ **Social Justice & Human Rights** — rural women, disability, intersectionality\n6️⃣ **Organisational Development** — building strong provincial structures\n\nVisit our [Pillars page](/pillars) to read more.",
  },
  {
    patterns: [/gbv|gender.?based violence|femicide|rape|abuse|assault/i],
    answer:
      "The eradication of Gender-Based Violence and Femicide is PWMSA's **number one priority**. We:\n\n• Support GBV survivors with access to legal, medical and psychological services\n• Advocate for stronger legislative enforcement of existing GBV laws\n• Mobilise communities to become safe spaces\n• Partner with law enforcement and civil society to close gaps in the GBV response\n• Run public awareness campaigns targeting men, youth and community leaders\n\n🆘 If you or someone you know is in danger, please contact the **Gender-Based Violence Command Centre: 0800 428 428** (24/7, free).",
  },
  {
    patterns: [/economic|empower|entrepreneur|business|finance|job|employ|income/i],
    answer:
      "Economic empowerment is central to PWMSA's mandate. We advocate for:\n\n• Equal pay for equal work across all sectors\n• Women entrepreneurs through mentorship and access to finance\n• Gender-responsive procurement policies in public and private sectors\n• Transformation in financial services to improve women's access to credit\n• Workplace equality including parental rights and anti-harassment policies\n• Skills training for women in underserved communities",
  },
  {
    patterns: [/political|parliament|leader|represent|government|decision.?making|vote/i],
    answer:
      "PWMSA actively promotes women's political participation and leadership. We:\n\n• Advocate for gender parity in all legislative and executive bodies\n• Run leadership development programmes to prepare women for public office\n• Mentor the next generation of women leaders\n• Monitor and report on gender equality mandates in government\n• Lobby for institutional reforms removing barriers to women's political participation",
  },
  {
    patterns: [/campaign|march|event|protest|action|clean.?up|jukskei|soweto/i],
    answer:
      "PWMSA runs several active campaigns:\n\n🌊 **Jukskei River Clean-up** — Environmental justice in Alexander, Gauteng\n✊ **GBVF March in Soweto** — Led by GP-PWMSA Coordinator Mopipone\n💼 **Enterprise Development in Mpumalanga** — Empowering women entrepreneurs\n🏛️ **Women's Parliament 2026** — CEO presented Declaration Report in Northern Cape\n👩‍🎓 **Youth Representation Programme** — Led by Ms Phumelela Zigoxo\n⚖️ **Justice Advocacy** — Holding perpetrators and institutions accountable\n\nView all campaigns at [/campaigns](/campaigns).",
  },
  {
    patterns: [/committee|member|leadership|nwc|national working|convenor|ceo/i],
    answer:
      "PWMSA's **National Working Committee (NWC)** includes:\n\n👩 **Angie Motshega** — National Convenor\n👩 **Zingiswa Losingie** — National Convenor\n👩 **Getrude Mtswene** — National Working Committee\n👩 **ALulama Nare** — NWC & Chief Executive Officer\n👩 **Vuyelwa Hani** — National Working Committee\n\nLearn more at [/committee](/committee).",
  },
  {
    patterns: [/angie|motshega/i],
    answer:
      "**Angie Motshega** is a National Convenor of PWMSA. With decades of experience in politics, education, and women's advocacy, she brings visionary leadership to the movement and is one of South Africa's most respected voices in the gender equality space.",
  },
  {
    patterns: [/zingiswa|losingie/i],
    answer:
      "**Zingiswa Losingie** is a National Convenor of PWMSA. Drawing on her background in trade unionism and civil society organising, she brings deep grassroots credibility and is committed to building a women's movement that speaks for all women.",
  },
  {
    patterns: [/alulama|nare|ceo|chief executive/i],
    answer:
      "**ALulama Nare** serves as both a National Working Committee member and the **Chief Executive Officer** of PWMSA. She provides strategic and operational leadership, overseeing all programmes, partnerships and organisational development.",
  },
  {
    patterns: [/contact|reach|phone|call|email|whatsapp|sophia|koko/i],
    answer:
      "You can reach PWMSA through:\n\n📞 **061 942 0421**\n📞 **+27 79 554 4302**\n📧 **info@pwmsa.org.za**\n💬 WhatsApp: +27 79 554 4302\n\nOur contact person is **Sophia Hlonipha Koko**.\nOffice hours: Mon–Fri 08:00–17:00 | Sat 09:00–13:00\n\nOr use our [contact form](/contact).",
  },
  {
    patterns: [/partner|sponsor|fund|donate|support|collaborate|invest/i],
    answer:
      "We welcome partners from all sectors! PWMSA offers **4 partnership types**:\n\n🏢 **Corporate & Business** — brand visibility, BBBEE recognition\n🏛️ **Government & Institutional** — joint programmes, grassroots reach\n❤️ **NGO & Civil Society** — coalition membership, shared campaigns\n💰 **Donor & Funding** — named recognition, tax certificates\n\nSubmit an enquiry at [/partner](/partner) — our team responds within 3 business days.",
  },
  {
    patterns: [/news|statement|press|media|release|article/i],
    answer:
      "Stay up to date with PWMSA's latest news at [/news](/news). Recent highlights:\n\n• Women's Parliament 2026 — Declaration Report presented in Northern Cape\n• GBVF March in Soweto demanding justice\n• Youth Representative Ms Phumelela Zigoxo addresses national conference\n• Enterprise Development launch in Mpumalanga\n• Jukskei River community clean-up",
  },
  {
    patterns: [/province|provincial|gauteng|western cape|kwazulu|eastern cape|limpopo|mpumalanga|north west|free state|northern cape/i],
    answer:
      "PWMSA operates across **all 9 provinces of South Africa**. Our provincial structures mobilise women at the grassroots level, coordinate campaigns, and implement national programmes locally. Each province has a dedicated coordinator working with community structures.",
  },
  {
    patterns: [/privacy|popia|data|information|personal/i],
    answer:
      "PWMSA is committed to protecting your privacy in compliance with the **Protection of Personal Information Act (POPIA)**. We collect only what's necessary, use it only for stated purposes, and never sell your data.\n\nRead our full [Privacy Policy](/privacy-policy) for details.",
  },
  {
    patterns: [/volunteer|join|member|membership|involved|help/i],
    answer:
      "We'd love to have you involved! Here's how:\n\n• **Volunteer** for our campaigns and community events\n• **Become a member** through your local provincial structure\n• **Partner** as an organisation or company\n• **Donate** to support our programmes\n• **Spread the word** on social media\n\nContact us at [info@pwmsa.org.za](mailto:info@pwmsa.org.za) or [get in touch](/contact).",
  },
  {
    patterns: [/mandate|mission|vision|purpose|goal|objective/i],
    answer:
      "PWMSA's mandate is to:\n\n✅ Unite women around a common agenda\n✅ Strengthen relationships between women's organisations\n✅ Challenge discrimination in all spheres of life\n✅ Promote gender equality and women's emancipation\n✅ Mobilise around GBV, economic and political challenges\n✅ Advance economic opportunities for women\n✅ Support education and skills development for young women\n✅ Strengthen collective responses to GBV and Femicide",
  },
  {
    patterns: [/thank|thanks|appreciate|helpful|great|awesome|perfect/i],
    answer:
      "You're welcome! 😊 It's our pleasure to share information about PWMSA's work. Is there anything else I can help you with — campaigns, leadership, partnerships, or anything else?",
  },
  {
    patterns: [/bye|goodbye|see you|later|done|nothing|no thanks/i],
    answer:
      "Thank you for connecting with PWMSA! 🌟 Remember, together we are **United in Solidarity for Equality & Justice**. Feel free to chat again anytime. Have a wonderful day! 💛",
  },
];

const QUICK_QUESTIONS = [
  "What is PWMSA?",
  "Tell me about GBV work",
  "Who leads PWMSA?",
  "How can I partner?",
  "What are your campaigns?",
  "How do I contact you?",
];

function getBotAnswer(input: string): string {
  for (const entry of KB) {
    if (entry.patterns.some((p) => p.test(input.trim()))) {
      return entry.answer;
    }
  }
  return "I don't have specific information on that, but I'd love to help!\n\nYou can reach our team directly:\n📞 061 942 0421\n📧 info@pwmsa.org.za\n\nOr ask me about our **pillars**, **campaigns**, **leadership**, **contact details**, or how to **partner with PWMSA**.";
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
  streaming?: boolean;
};

const STORAGE_KEY = "pwmsa_chat_v2";

function ts() {
  return new Date().toLocaleTimeString("en-ZA", { hour: "2-digit", minute: "2-digit" });
}
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: "👋 Hello! I'm the **PWMSA Assistant**. I can help you learn about our work on gender equality, GBV eradication, economic empowerment, our leadership team, campaigns, and how to get involved.\n\nWhat would you like to know?",
  time: ts(),
};

// ─── Mini markdown renderer ───────────────────────────────────────────────────
function RenderText({ text, streaming }: { text: string; streaming?: boolean }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
        const rendered = parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (m) {
            return (
              <a key={j} href={m[2]} className="underline underline-offset-2 font-semibold opacity-90 hover:opacity-100">
                {m[1]}
              </a>
            );
          }
          return <span key={j}>{part}</span>;
        });
        return (
          <span key={i}>
            {rendered}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
      {/* Blinking cursor while streaming */}
      {streaming && (
        <span className="inline-block w-0.5 h-4 bg-current ml-0.5 align-middle animate-[blink_0.8s_step-end_infinite]" />
      )}
    </>
  );
}

// ─── Main widget ──────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [typing, setTyping] = useState(false); // thinking dots before stream
  const [minimised, setMinimised] = useState(false);
  const [pulse, setPulse] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoFired = useRef(false);

  // ── Restore from localStorage ──────────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed: Message[] = saved ? JSON.parse(saved) : [];
      // Strip any leftover streaming flags
      const clean = parsed.map((m) => ({ ...m, streaming: false }));
      setMessages(clean.length ? clean : [WELCOME]);
    } catch {
      setMessages([WELCOME]);
    }
  }, []);

  // ── Persist (only completed messages) ─────────────────────────────────────
  useEffect(() => {
    if (!messages.length || isStreaming) return;
    try {
      const toSave = messages.map((m) => ({ ...m, streaming: false }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {}
  }, [messages, isStreaming]);

  // ── Auto-open after 12 s (once per session) ────────────────────────────────
  useEffect(() => {
    if (sessionStorage.getItem("pwmsa_ao")) return;
    const pulse1 = setTimeout(() => { setPulse(true); setTimeout(() => setPulse(false), 3000); }, 8000);
    const open1  = setTimeout(() => {
      if (!autoFired.current) { autoFired.current = true; sessionStorage.setItem("pwmsa_ao", "1"); setOpen(true); }
    }, 12000);
    return () => { clearTimeout(pulse1); clearTimeout(open1); };
  }, []);

  // ── Scroll to bottom ───────────────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // ── Focus input on open ────────────────────────────────────────────────────
  useEffect(() => {
    if (open && !minimised) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open, minimised]);

  // ── Cleanup stream on unmount ──────────────────────────────────────────────
  useEffect(() => () => { if (streamRef.current) clearInterval(streamRef.current); }, []);

  // ── Stream a bot response character by character ───────────────────────────
  const streamResponse = useCallback((fullText: string) => {
    const id = uid();
    let charIndex = 0;

    // Add empty streaming message
    setMessages((prev) => [
      ...prev,
      { id, role: "bot", text: "", time: ts(), streaming: true },
    ]);
    setIsStreaming(true);

    // Adaptive speed: ~25 chars/s for short, faster for long
    const speed = Math.max(12, Math.min(30, Math.floor(2000 / fullText.length)));

    streamRef.current = setInterval(() => {
      charIndex++;
      const chunk = fullText.slice(0, charIndex);
      const done = charIndex >= fullText.length;

      setMessages((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, text: chunk, streaming: !done } : m
        )
      );

      if (done) {
        clearInterval(streamRef.current!);
        streamRef.current = null;
        setIsStreaming(false);
      }
    }, speed);
  }, []);

  // ── Send a message ─────────────────────────────────────────────────────────
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming || typing) return;

      // Add user message
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "user", text: trimmed, time: ts() },
      ]);
      setInput("");

      // Show thinking dots for 500–900 ms, then stream
      setTyping(true);
      const thinkDelay = 500 + Math.random() * 400;
      setTimeout(() => {
        setTyping(false);
        streamResponse(getBotAnswer(trimmed));
      }, thinkDelay);
    },
    [isStreaming, typing, streamResponse]
  );

  const clearHistory = () => {
    if (streamRef.current) clearInterval(streamRef.current);
    streamRef.current = null;
    setIsStreaming(false);
    setTyping(false);
    setMessages([WELCOME]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Toggle button ────────────────────────────────────────────────── */}
      <button
        onClick={() => { setOpen((v) => !v); setMinimised(false); }}
        aria-label={open ? "Close chat" : "Chat with PWMSA Assistant"}
        className={`fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#715832] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#4a3720] focus:outline-none focus:ring-4 focus:ring-[#e8ce52]/50 ${
          pulse && !open ? "ring-4 ring-[#e8ce52] ring-offset-2 scale-110 animate-pulse" : ""
        }`}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#e8ce52] rounded-full border-2 border-white" />
        )}
      </button>

      {/* ── Chat window ──────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-label="PWMSA Chat Assistant"
        aria-modal="true"
        className={`fixed bottom-24 right-4 sm:right-5 z-50 flex flex-col transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
        }`}
        style={{
          width: "min(420px, calc(100vw - 2rem))",
          height: minimised ? "auto" : "min(600px, calc(100svh - 9rem))",
        }}
      >
        <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">

          {/* ── Header ─────────────────────────────────────────────────── */}
          <div className="bg-[#715832] px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-[#e8ce52] flex items-center justify-center">
                <Bot size={18} className="text-[#715832]" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#715832]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">PWMSA Assistant</p>
              <p className="text-amber-200 text-xs">
                {typing ? "Thinking…" : isStreaming ? "Responding…" : "Online · Replies instantly"}
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              <button onClick={clearHistory} title="Clear history" className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                <RotateCcw size={14} />
              </button>
              <button onClick={() => setMinimised((v) => !v)} title={minimised ? "Expand" : "Minimise"} className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                <ChevronDown size={16} className={`transition-transform duration-300 ${minimised ? "rotate-180" : ""}`} />
              </button>
              <button onClick={() => setOpen(false)} title="Close" className="p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* ── Collapsible body ───────────────────────────────────────── */}
          {!minimised && (
            <>
              {/* ── Messages ─────────────────────────────────────────── */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50 scroll-smooth">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Avatar */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.role === "bot" ? "bg-[#e8ce52]" : "bg-[#715832]"}`}>
                      {msg.role === "bot"
                        ? <Bot size={13} className="text-[#715832]" />
                        : <User size={13} className="text-white" />}
                    </div>

                    <div className={`flex flex-col gap-0.5 max-w-[82%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "bot"
                            ? "bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm"
                            : "bg-[#715832] text-white rounded-tr-sm"
                        }`}
                      >
                        <RenderText text={msg.text || " "} streaming={msg.streaming} />
                      </div>
                      {!msg.streaming && (
                        <span className="text-[10px] text-gray-400 px-1">{msg.time}</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Thinking dots (before stream starts) */}
                {typing && (
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#e8ce52] flex items-center justify-center shrink-0">
                      <Bot size={13} className="text-[#715832]" />
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                      <div className="flex gap-1 items-center h-4">
                        <span className="w-2 h-2 bg-[#715832]/30 rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 bg-[#715832]/30 rounded-full animate-bounce [animation-delay:160ms]" />
                        <span className="w-2 h-2 bg-[#715832]/30 rounded-full animate-bounce [animation-delay:320ms]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* ── Quick questions ───────────────────────────────────── */}
              {messages.length <= 2 && !isStreaming && (
                <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Suggested questions</p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-xs bg-[#e8ce52]/20 border border-[#e8ce52]/40 text-[#715832] px-3 py-1.5 rounded-full font-medium hover:bg-[#e8ce52]/40 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Input ─────────────────────────────────────────────── */}
              <form onSubmit={handleSubmit} className="px-3 py-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about PWMSA…"
                  disabled={typing || isStreaming}
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8ce52] focus:border-transparent transition disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing || isStreaming}
                  aria-label="Send"
                  className="w-10 h-10 rounded-xl bg-[#715832] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#4a3720] transition-colors shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>

              {/* ── Footer ────────────────────────────────────────────── */}
              <div className="bg-white border-t border-gray-50 px-4 py-1.5 text-center">
                <p className="text-[10px] text-gray-400">
                  PWMSA · Progressive Women&apos;s Movement of South Africa
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Blink keyframe injected inline */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </>
  );
}
