import { Icons } from "@/components/icons";
import { HomeIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Ansh Kumar",
  initials: "AK",
  url: "https://localhost:3000",
  location: "Jharkhand, India",
  locationLink: "https://www.google.com/maps/place/jharkhand",
  description:
    "Self-taught developer obsessed with cyber aesthetics, retro UI, and creative coding.Shipping projects while learning in public.",
  summary:
    "A self-taught developer from Ranchi, India passionate about technology and design.I enjoy building projects, experimenting with new ideas, and learning through creation.Most of my time is spent coding, exploring Linux, and improving my development skills.I like clean interfaces, creative web experiences, and turning concepts into reality.Currently learning, building, and growing one project at a time.",
  avatarUrl: "/resume/me.jpg",
  githubUsername: "ANSH2012",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "Docker",
    "Kubernetes",
    "Java",
    "C",
    "Bun",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/writings", icon: PencilLine, label: "My Writings" },
  ],
  contact: {
    email: "anshhackz0@gmail.com",
    tel: "NA",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ANSH2012",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://guns.lol/4nsh",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PlayerDude011",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ansh18",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stealth Startup",
      href: "",
      badges: [],
      location: "Remote",
      title: "Independent Researcher",
      logoUrl: "/resume/stealth.png",
      start: "November 2025",
      end: "till now",
      description:
        "Exploring a potential startup concept through independent research, problem discovery, and early MVP ideation",
    },
    {
      company: "Cupertino Focus",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Co-Founder",
      logoUrl: "/resume/cf.jpeg",
      start: "January 2024",
      end: "May 2024",
      description:
        "I have written an article on Cupertino-Focus, recounting my experience and things I learned along the way...",
    },
  ],
  education: [
    {
      school: "JVM SHYAMALI",
      href: "https://www.jvmshyamali.com/home",
      degree: "NA",
      logoUrl: "/resume/jvm.jpg",
      start: "2016",
      end: "on going",
    },
  ],
    projectsHeading: "What I\u2019ve Built",
  projects: [
    {
      title: "Sub-Stash",
      href: "https://sub-stash.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Sub-Stash is a web-based subscription management platform that helps users track recurring expenses, monitor bank deductions, and avoid surprise charges with spending analytics, multi-currency support, and automated reminders.",
      technologies: ["React", "Vite", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://sub-stash.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ANSH2012",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resume/sub-stash.png",
      video: "",
    },
    {
      title: "RetrOS",
      href: "https://retro-os-theta.vercel.app",
      dates: "August 2025 - November 2025",
      active: true,
      description:
        "RetrOS is a browser-based operating system sandbox inspired by classic Mac OS, reimagined with a modern twist and featuring a fully functional desktop environment",
      technologies: ["Javascript", "Redis Database"],
      links: [
        {
          type: "Website",
          href: "https://retro-os-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ANSH2012/Retro-OS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resume/retro-os.png",
      video: "",
    },
    {
      title: "Flappy Bird AI",
      href: "https://flapai.vercel.app/",
      dates: "November 2025",
      active: true,
      description:
        "Flappy Bird game with a self-learning AI that learns to play the game using a Genetic Algorithm and Neural Networks.",
      technologies: ["Javascript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://flapai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ANSH2012/Flappy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resume/flappy-bird.png",
      video: "",
    },
  ],
} as const;
