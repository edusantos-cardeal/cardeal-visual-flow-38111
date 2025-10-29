import { cn } from "@/lib/utils";
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}
export function Marquee({
  children,
  speed = 30,
  className
}: MarqueeProps) {
  return <div className={cn("w-full overflow-hidden py-8", className)}>
      <div className="relative flex max-w-full overflow-hidden">
        <div style={{
        "--duration": `${speed}s`
      } as React.CSSProperties} className="flex w-max animate-marquee bg-slate-50">
          {children}
          {children}
        </div>
      </div>
    </div>;
}