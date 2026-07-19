"use client";

import { useState } from "react";
import { Check, Copy, Gift, QrCode } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GIFT_INFO } from "@/lib/constants";

export function GiftSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(GIFT_INFO.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="gift" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FadeInUp>
          <SectionHeading subtitle="Love & Gratitude" title="Gift Section" />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="mx-auto mb-10 max-w-xl text-center font-sans text-sm leading-relaxed text-warm-brown/65">
            Your presence is the greatest gift. However, should you wish to honor us with a
            blessing, we gratefully accept your contribution.
          </p>
        </FadeInUp>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeInUp delay={0.15}>
            <article className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Gift className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="font-serif text-xl text-warm-brown">Bank Transfer</h3>
              </div>
              <dl className="space-y-3 font-sans text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-gold-dark">Bank</dt>
                  <dd className="mt-0.5 text-warm-brown">{GIFT_INFO.bankName}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-gold-dark">Account Name</dt>
                  <dd className="mt-0.5 text-warm-brown">{GIFT_INFO.accountName}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-gold-dark">Account Number</dt>
                  <dd className="mt-0.5 font-medium tracking-wider text-warm-brown">
                    {GIFT_INFO.accountNumber}
                  </dd>
                </div>
              </dl>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={handleCopy}
                aria-label="Copy account number"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    Copy Account Number
                  </>
                )}
              </Button>
            </article>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <article className="glass-card flex h-full flex-col items-center justify-center rounded-2xl p-6 sm:p-8">
              <QrCode className="mb-4 h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="mb-6 font-serif text-xl text-warm-brown">{GIFT_INFO.qrisLabel}</h3>
              <div className="flex h-44 w-44 items-center justify-center rounded-xl border-2 border-dashed border-gold/30 bg-beige/50">
                <div className="grid grid-cols-5 gap-1 p-4">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-sm ${
                        [0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 20, 22, 23, 24].includes(i)
                          ? "bg-warm-brown/70"
                          : "bg-transparent"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 font-sans text-xs text-warm-brown/45">
                Replace with your QRIS image
              </p>
            </article>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
