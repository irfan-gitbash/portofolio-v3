"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { type NavItem, navItems } from "@/lib/data";
import { debounce } from "@/lib/utils";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = debounce(() => {
      // Don't run the intersection observer if the user has clicked on a nav item in the last second
      if (Date.now() - timeOfLastClick < 1000) {
        return;
      }

      const sections = navItems.map((item) => {
        return {
          id: item.hash.substring(1),
          element: document.getElementById(item.hash.substring(1)),
          hash: item.hash,
        };
      });

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight * 0.5;

      for (const section of sections) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        
        // Check if we've scrolled to this section
        if (
          scrollPosition >= sectionTop && 
          scrollPosition <= sectionTop + rect.height
        ) {
          setActiveSection(section.hash);
          break;
        }
      }
    }, 100);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timeOfLastClick, pathname]);

  return {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
  };
}