import { aboutData } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function About() {
  const { title, description, icon: Icon, imageUrl, stats } = aboutData;

  return (
    <Section id="about">
      <Container>
        <SectionHeading
          title={title}
          subtitle="Get to know more about me and my journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl w-[400px] h-[400px] flex items-center justify-center bg-background ml-8">
            <Image
              src={imageUrl}
              alt="Developer at work"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">About Me</span>
            </div>

            <div className="space-y-4">
              {description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stats.yearsOfExperience}
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stats.projectsCompleted}
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
