interface Challenge {
  id: string;
  title: string;
  skills: string[];
  level: "Junior" | "Intermediate" | "Senior";
  challengeLink: string;
  startDate: string;
  endDate: string;
  image?: string;
  companyName: string;
}

export const challenges: Challenge[] = [
  {
    id: "1",
    title: "Design a Dashboard for SokoFund",
    skills: ["UX/UI Design", "User Research"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-01-01",
    endDate: "2024-01-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "2",
    title: "Build an Analytics Dashboard",
    skills: ["React", "TypeScript", "Data Visualization"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-01-05",
    endDate: "2024-01-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "3",
    title: "Create a Mobile App Prototype",
    skills: ["Mobile Design", "Prototyping", "User Testing"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-01-10",
    endDate: "2024-01-25",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "4",
    title: "Implement Payment Integration",
    skills: ["Backend", "API Integration", "Security"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "5",
    title: "Develop a Chat Application",
    skills: ["WebSockets", "React", "Node.js"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-02-10",
    endDate: "2024-02-25",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "6",
    title: "Optimize Website Performance",
    skills: ["Web Performance", "Lighthouse", "Optimization"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-03-01",
    endDate: "2024-03-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "7",
    title: "Design a Landing Page",
    skills: ["UX/UI Design", "Figma", "Responsive Design"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-03-05",
    endDate: "2024-03-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "8",
    title: "Build a RESTful API",
    skills: ["Node.js", "Express", "API Design"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-03-10",
    endDate: "2024-03-25",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "9",
    title: "Create a Data Visualization Tool",
    skills: ["D3.js", "React", "Data Analysis"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-04-01",
    endDate: "2024-04-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "10",
    title: "Develop a Task Management App",
    skills: ["React Native", "Firebase", "State Management"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-04-05",
    endDate: "2024-04-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "11",
    title: "Design a Brand Identity",
    skills: ["Branding", "Illustrator", "Logo Design"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-05-01",
    endDate: "2024-05-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "12",
    title: "Build a Blog Platform",
    skills: ["Next.js", "Markdown", "SEO"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-05-05",
    endDate: "2024-05-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "13",
    title: "Create an E-commerce Website",
    skills: ["React", "Redux", "Payment Integration"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-06-01",
    endDate: "2024-06-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "14",
    title: "Develop a Weather App",
    skills: ["API Integration", "React", "Responsive Design"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-06-05",
    endDate: "2024-06-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "15",
    title: "Design a Mobile Game Interface",
    skills: ["Game Design", "UI/UX", "Prototyping"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-07-01",
    endDate: "2024-07-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "16",
    title: "Build a Portfolio Website",
    skills: ["HTML", "CSS", "JavaScript"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2024-07-05",
    endDate: "2024-07-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "17",
    title: "Create a Social Media Dashboard",
    skills: ["React", "Chart.js", "API Integration"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-08-01",
    endDate: "2024-08-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "18",
    title: "Develop a Fitness Tracking App",
    skills: ["React Native", "Firebase", "Health APIs"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-08-05",
    endDate: "2024-08-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "19",
    title: "Design a Travel Booking Platform",
    skills: ["UX/UI Design", "Figma", "User Research"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-09-01",
    endDate: "2024-09-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "20",
    title: "Build a Real-Time Chat App",
    skills: ["WebSockets", "Node.js", "React"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-09-05",
    endDate: "2024-09-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "21",
    title: "Create a Recipe Sharing Platform",
    skills: ["React", "Firebase", "Responsive Design"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-10-01",
    endDate: "2024-10-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "22",
    title: "Design a Music Streaming App",
    skills: ["UI/UX Design", "Prototyping", "User Testing"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-10-05",
    endDate: "2024-10-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "23",
    title: "Build a Job Board Website",
    skills: ["React", "Node.js", "MongoDB"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-11-01",
    endDate: "2024-11-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "24",
    title: "Develop a Language Learning App",
    skills: ["React Native", "Firebase", "Gamification"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-11-05",
    endDate: "2024-11-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "25",
    title: "Design a Financial Dashboard",
    skills: ["Data Visualization", "React", "Chart.js"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2024-12-01",
    endDate: "2024-12-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "26",
    title: "Build a Video Streaming Platform",
    skills: ["React", "Node.js", "Video APIs"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2024-12-05",
    endDate: "2024-12-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "27",
    title: "Create a Project Management Tool",
    skills: ["React", "Redux", "Firebase"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-01-01",
    endDate: "2025-01-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "28",
    title: "Design a Food Delivery App",
    skills: ["UI/UX Design", "Figma", "User Research"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-01-05",
    endDate: "2025-01-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "29",
    title: "Build a Cryptocurrency Tracker",
    skills: ["React", "API Integration", "Data Visualization"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-02-01",
    endDate: "2025-02-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "30",
    title: "Develop a Virtual Event Platform",
    skills: ["React", "WebRTC", "Firebase"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2025-02-05",
    endDate: "2025-02-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "31",
    title: "Design a Healthcare App",
    skills: ["UI/UX Design", "Prototyping", "User Testing"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2025-03-01",
    endDate: "2025-03-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "32",
    title: "Build a Quiz Application",
    skills: ["React", "Node.js", "MongoDB"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-03-05",
    endDate: "2025-03-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "33",
    title: "Create a Travel Planner App",
    skills: ["React Native", "Firebase", "API Integration"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-04-01",
    endDate: "2025-04-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "34",
    title: "Design a News Aggregator",
    skills: ["UI/UX Design", "Figma", "Responsive Design"],
    level: "Junior",
    challengeLink: "#",
    startDate: "2025-04-05",
    endDate: "2025-04-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "35",
    title: "Build a Stock Market Simulator",
    skills: ["React", "Data Visualization", "API Integration"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2025-05-01",
    endDate: "2025-05-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "36",
    title: "Develop a Car Rental Platform",
    skills: ["React", "Node.js", "MongoDB"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-05-05",
    endDate: "2025-05-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "37",
    title: "Design a Fashion E-commerce Site",
    skills: ["UI/UX Design", "Figma", "Responsive Design"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-06-01",
    endDate: "2025-06-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "38",
    title: "Build a Learning Management System",
    skills: ["React", "Node.js", "MongoDB"],
    level: "Senior",
    challengeLink: "#",
    startDate: "2025-06-05",
    endDate: "2025-06-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "39",
    title: "Create a Pet Adoption Platform",
    skills: ["React", "Firebase", "Responsive Design"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-07-01",
    endDate: "2025-07-15",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  },
  {
    id: "40",
    title: "Design a Real Estate Listing Site",
    skills: ["UI/UX Design", "Figma", "Responsive Design"],
    level: "Intermediate",
    challengeLink: "#",
    startDate: "2025-07-05",
    endDate: "2025-07-20",
    image: "/images/site-template.svg",
    companyName: "Umurava"
  }
];