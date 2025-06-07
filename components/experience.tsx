"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experienceData, educationData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company?: string;
  school?: string;
  location: string;
  date: string;
  description: string;
  icon: React.ElementType;
  index: number;
}

function TimelineItem({
  title,
  company,
  school,
  location,
  date,
  description,
  icon: Icon,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="mb-12 ml-6 last:mb-0"
    >
      <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5 ring-8 ring-background">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </span>
      <div className="border border-border bg-card p-5 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="text-xl font-semibold">
            {title}
            {company && <span className="block sm:inline text-base font-normal text-muted-foreground sm:before:content-['_·_']">{company}</span>}
            {school && <span className="block sm:inline text-base font-normal text-muted-foreground sm:before:content-['_·_']">{school}</span>}
          </h3>
          <span className="text-sm font-medium bg-secondary px-2.5 py-0.5 rounded-full">
            {date}
          </span>
        </div>
        <div className="mb-2 text-sm font-normal text-muted-foreground">
          {location}
        </div>
        <p className="text-base font-normal text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background"
        />

        <Tabs defaultValue="experience" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-6">
            <div className="relative border-l border-muted">
              {experienceData.map((item, index) => (
                <TimelineItem 
                  key={`${item.company}-${index}`}
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  date={item.date}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-6">
            <div className="relative border-l border-muted">
              {educationData.map((item, index) => (
                <TimelineItem
                  key={`${item.school}-${index}`}
                  title={item.degree}
                  school={item.school}
                  location={item.school}
                  date={item.date}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  );
}