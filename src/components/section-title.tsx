import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-5 sm:gap-6 ${className}`}>
      <span
        aria-hidden="true"
        className="h-[56px] w-[3px] shrink-0 bg-[#1a1a1a] sm:h-[70px] lg:h-[80px]"
      />
      <h2 className="text-[28px] font-medium uppercase leading-[1.07] tracking-[-0.03em] text-[#1a1a1a] sm:text-[36px] lg:text-[44px]">
        {children}
      </h2>
    </div>
  );
}
