import { siteConfig } from "@/config/site"; // Import your site config
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export function ContactInfo() {
  const contactChannels = [
    {
      title: "Email",
      value: siteConfig.authorEmail,
      icon: <Mail size={24} />,
      href: `mailto:${siteConfig.authorEmail}`,
    },
    {
      title: "Instagram",
      value: "oladapo.dev",
      icon: <Instagram size={24} />,
      href: siteConfig.links.instagram,
    },
    {
      title: "LinkedIn",
      value: "Oladapo Ezekiel",
      icon: <Linkedin size={24} />,
      href: siteConfig.links.linkedin,
    },
    {
      title: "GitHub",
      value: "Dapo11",
      icon: <Github size={24} />,
      href: siteConfig.links.github,
    },
    {
      title: "X (Twitter)",
      value: "@Dapsky_mono",
      icon: <Twitter size={24} />,
      href: siteConfig.links.twitter,
    },
    {
      title: "Facebook",
      value: "Oladapo Ezekiel",
      icon: <Facebook size={24} />,
      href: siteConfig.links.facebook,
    },
  ];

  return (
    <div className="space-y-4">
      {contactChannels.map((channel) => (
        <a
          key={channel.title}
          href={channel.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-6 border rounded-xl bg-card hover:bg-muted/50 transition-colors"
        >
          <div className="p-3 bg-muted rounded-lg">{channel.icon}</div>
          <div>
            <h3 className="font-semibold">{channel.title}</h3>
            <p className="text-sm text-muted-foreground">{channel.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
