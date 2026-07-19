"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

export function WeddingWishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setWishes((prev) => [newWish, ...prev]);
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="wishes" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FadeInUp>
          <SectionHeading subtitle="Guest Book" title="Wedding Wishes" />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-card mb-10 rounded-2xl p-6 sm:p-8"
            aria-label="Leave a wedding wish"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="wish-name" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wider text-gold-dark">
                  Your Name
                </label>
                <input
                  id="wish-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gold/20 bg-ivory/80 px-4 py-3 font-sans text-sm text-warm-brown placeholder:text-warm-brown/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="wish-message" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wider text-gold-dark">
                  Your Message
                </label>
                <textarea
                  id="wish-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Write your wishes for Ammar Fauzan..."
                  className="w-full resize-none rounded-xl border border-gold/20 bg-ivory/80 px-4 py-3 font-sans text-sm text-warm-brown placeholder:text-warm-brown/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button type="submit" size="md">
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                Submit
              </Button>
              {submitted && (
                <p className="font-sans text-sm text-gold-dark" role="status">
                  Thank you for your wishes!
                </p>
              )}
            </div>
          </form>
        </FadeInUp>

        {wishes.length > 0 && (
          <div className="space-y-4" aria-live="polite">
            {wishes.map((wish, index) => (
              <FadeInUp key={wish.id} delay={index * 0.05}>
                <article className="rounded-xl border border-gold/10 bg-ivory/60 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                    <h4 className="font-serif text-lg text-warm-brown">{wish.name}</h4>
                    <span className="ml-auto font-sans text-xs text-warm-brown/40">
                      {wish.createdAt}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-warm-brown/70">
                    {wish.message}
                  </p>
                </article>
              </FadeInUp>
            ))}
          </div>
        )}

        {wishes.length === 0 && (
          <p className="text-center font-sans text-sm text-warm-brown/45">
            Be the first to leave a wish for Ammar Fauzan.
          </p>
        )}
      </div>
    </section>
  );
}
