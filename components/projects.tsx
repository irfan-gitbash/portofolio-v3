"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { projectsData, portfolioData, certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        {/* Portfolio and Certifications Tabs */}
        <div className="mt-20">
          <SectionHeading
            title="Projects & Certifications"
            subtitle="My professional work and achievements"
          />

          <Tabs
            defaultValue="portfolio"
            className="w-full max-w-4xl mx-auto mt-8"
          >
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger
                value="portfolio"
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="flex items-center gap-2"
              >
                <Award className="h-4 w-4" />
                Certifications
              </TabsTrigger>
            </TabsList>

            {/* Portfolio Tab Content */}
            <TabsContent value="portfolio" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative w-full h-48 bg-white flex items-center justify-center overflow-hidden">
                      {item.width && item.height ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={item.width}
                          height={item.height || 200}
                          className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="flex justify-between items-center mb-3 text-xs font-medium">
                        {item.role}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {item.duration}
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium bg-secondary/50 px-2.5 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View Details <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Certifications Tab Content */}
            <TabsContent value="certifications" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-0 right-0 bg-primary/90 p-2 rounded-bl-lg">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-sm font-medium">{cert.issuer}</p>
                        <span className="text-xs text-muted-foreground">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {cert.description}
                      </p>
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View Credential{" "}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-12 mb-16">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
