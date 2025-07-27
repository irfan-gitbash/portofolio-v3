"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn, scrollToSection } from "@/lib/utils";
import { socialLinks } from "@/lib/data";
import dynamic from "next/dynamic";

// Dynamically import the 3D component to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] lg:h-[500px] bg-secondary/20 rounded-lg animate-pulse" />
  ),
});

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center relative overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={containerRef}
            className={cn(
              "transition-all duration-1000 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Muhammad Irfan Suherman</span>
              <br />
              Full Stack Javascript
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build beautiful, interactive, and responsive web applications
              using modern technologies. I'm a lifelong learner (禪那禪), always
              exploring new tools and ideas. Let's bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <Scene3D />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
