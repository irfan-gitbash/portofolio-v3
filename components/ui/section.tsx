import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ 
  children, 
  className, 
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "py-20 md:py-24", 
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}