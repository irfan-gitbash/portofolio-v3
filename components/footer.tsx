import Link from "next/link";
import { Container } from "@/components/ui/container";
import { socialLinks, navItems } from "@/lib/data";
import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 border-t">
      <Container>
        <div className="flex flex-col items-center space-y-8">
          <div className="text-2xl font-bold">
            Portfolio<span className="text-primary">.</span>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <Link
                    href={item.hash}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              Made with{" "}
              <Heart className="h-4 w-4 fill-destructive text-destructive" />{" "}
              Muhammad irfan Suherman
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {year} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
