import { Heart } from "lucide-react";
import { GROOM_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-beige/30 px-4 py-10 text-center">
      <p className="flex items-center justify-center gap-2 font-sans text-sm text-warm-brown/70">
        Made with
        <Heart className="h-3.5 w-3.5 fill-gold/40 text-gold" aria-hidden="true" />
        for {GROOM_NAME}
      </p>
      <p className="mt-2 font-sans text-xs text-warm-brown/40">
        © {new Date().getFullYear()} — Digital Wedding Invitation
      </p>
    </footer>
  );
}
