import { SITE_NAME } from "@/lib/consts";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import GradientButton from "./GradientButton";

// TODO: use images
const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebook />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: <FaYoutube />,
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <FaGithub />,
  },
];

export default function Footer() {
  return (
    <div className="mt-32 flex items-center justify-between gap-5 max-[700px]:flex-col">
      <h2 className="hero-gradient inline text-2xl font-bold">{SITE_NAME}</h2>
      <div className="flex space-x-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <GradientButton className="text-lg font-semibold">
        Book a meeting
      </GradientButton>
    </div>
  );
}
