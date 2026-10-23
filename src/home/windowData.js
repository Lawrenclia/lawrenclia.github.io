// Content verified against public GitHub profile and project READMEs, 2026-10-23.
export const desktopWindows = [
  {
    id: "about",
    title: "About Me",
    route: "about.html",
    icon: "UserRound",
    accent: "coral",
    position: { left: "5%", top: "8%" },
    size: { width: "39%", height: "44%" },
    initialZIndex: 60,
    content: {
      name: "Lawrenclia",
      school: "Shanghai Jiao Tong University",
      major: "Computer Science & Technology",
      detail: "Haoxiang Jiang · IEEE Pilot Class",
      interests: ["C++", "Python", "Vibe coding"]
    }
  },
  {
    id: "projects",
    title: "Projects",
    route: "projects.html",
    icon: "FolderCode",
    accent: "blue",
    position: { left: "36%", top: "20%" },
    size: { width: "53%", height: "48%" },
    initialZIndex: 50,
    content: {
      projects: [
        {
          name: "CS3611 Computer Networks",
          stack: ["C++", "Networking"],
          href: "https://github.com/Lawrenclia/CS3611_ComputerNetworks_Project",
          tone: "network"
        },
        {
          name: "CS1605 Course Project",
          stack: ["C++", "Teamwork"],
          href: "https://github.com/Lawrenclia/CS1605",
          tone: "code"
        },
        {
          name: "ACMOJ Solutions",
          stack: ["C++", "Algorithms"],
          href: "https://github.com/Lawrenclia/CS2602",
          tone: "terminal"
        }
      ]
    }
  },
  {
    id: "research",
    title: "Languages & Tools",
    route: "notes.html",
    icon: "Telescope",
    accent: "violet",
    position: { left: "8%", top: "52%" },
    size: { width: "43%", height: "35%" },
    initialZIndex: 30,
    content: {
      focus: [
        { title: "C++ & Python", description: "My main programming languages." },
        { title: "C# & Java", description: "Currently learning and experimenting." }
      ],
      readingLabel: "Making",
      reading: ["AI-assisted tools", "LaTeX", "Animation"]
    }
  },
  {
    id: "experience",
    title: "At a Glance",
    route: "about.html#experience",
    icon: "Milestone",
    accent: "green",
    position: { left: "57%", top: "6%" },
    size: { width: "36%", height: "34%" },
    initialZIndex: 20,
    content: {
      timeline: [
        {
          period: "Now",
          title: "IEEE Pilot Class · SJTU"
        },
        {
          period: "Build",
          title: "Tools, networks & desktop pets"
        },
        {
          period: "Share",
          title: "Open-source projects & study notes"
        }
      ]
    }
  },
  {
    id: "contact",
    title: "Contact",
    route: "about.html#contact",
    icon: "Send",
    accent: "pink",
    position: { left: "62%", top: "58%" },
    size: { width: "30%", height: "29%" },
    initialZIndex: 40,
    content: {
      links: [
        { label: "GitHub", href: "https://github.com/Lawrenclia", icon: "Github" },
        { label: "chianghx23@gmail.com", href: "mailto:chianghx23@gmail.com", icon: "Mail" },
        { label: "chianghx@sjtu.edu.cn", href: "mailto:chianghx@sjtu.edu.cn", icon: "Mail" }
      ]
    }
  }
];
