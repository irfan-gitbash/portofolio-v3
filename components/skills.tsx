"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData[0].category);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <Section id="skills">
      <Container>
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools that I work with"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(category.category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all font-medium flex items-center gap-2",
                activeTab === category.category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              <category.icon className="h-4 w-4" />
              {category.category}
            </button>
          ))}
        </div>

        {skillsData.map((category) => (
          <div
            key={category.category}
            className={cn(
              "transition-all",
              activeTab === category.category ? "block" : "hidden"
            )}
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  className="bg-secondary/50 border border-border rounded-lg px-5 py-3 text-center"
                >
                  <div className="text-base font-medium">{skill}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}