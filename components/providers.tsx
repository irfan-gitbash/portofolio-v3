"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
          <Toaster />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}