import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";
import { socialLinks } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of the following methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      suhermanirfan23@gmai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(62)896-2997-3589</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Connect With Me</CardTitle>
                <CardDescription>Follow me on social media</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
