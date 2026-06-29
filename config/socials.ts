import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Dapo11",
    icon: Icons.gitHub,
    link: "https://github.com/Dapo11",
  },
  {
    name: "LinkedIn",
    username: "Oladapo Ezekiel",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/oladapo-ibiwoye-151825268/",
  },
  {
    name: "Twitter",
    username: "@Dapsky_mono",
    icon: Icons.twitter,
    link: "https://x.com/Dapsky_mono",
  },
  {
    name: "Gmail",
    username: "Oladapo",
    icon: Icons.gmail,
    link: "ollyeze02@gmail.com",
  },
];
