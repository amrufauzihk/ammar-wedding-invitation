import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  subtitle,
  title,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-3",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {subtitle && (
        <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl font-light text-warm-brown sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className={cn("ornament-divider w-24", align === "center" && "mx-auto")} />
    </div>
  );
}
