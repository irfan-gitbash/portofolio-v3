import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  ...props 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "text-center mb-16", 
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
    </div>
  );
}