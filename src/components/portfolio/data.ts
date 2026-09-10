import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiMysql,
  SiGit, SiGithub, SiLeetcode, SiCodechef, SiC, SiOpenjdk,
} from "react-icons/si";
import { FaLinkedin, FaJava } from "react-icons/fa6";
const SiCss3 = SiCss;

export const PROFILE = {
  name: "AKASH A",
  role: "Software Engineer",
  typingRoles: ["Java Developer", "Software Engineer", "Frontend Developer", "Problem Solver"],
  summary:
    "Aspiring Java Developer and Software Engineer with a strong foundation in Core Java, Object-Oriented Programming, Data Structures, Algorithms, and Web Development. Skilled in frontend technologies including HTML, CSS, JavaScript, and MySQL. Passionate about building scalable, efficient, and user-friendly applications.",
  about:
    "I am a final-year Computer Science and Engineering student with strong knowledge in Java, Web Development, Data Structures, Algorithms, and Problem Solving. I enjoy building practical software solutions and continuously improving my technical and professional skills.",
  location: "Ariyalur, Tamil Nadu, India",
  email: "akashakash12224@gmail.com",
  phone: "+91 90428 05406",
  socials: {
    linkedin: "https://linkedin.com/in/akash-a-9748102ba",
    github: "https://github.com/Akash001cse",
    leetcode: "https://leetcode.com/u/AkashA_003/",
    codechef: "https://www.codechef.com/users/akash_003_cse",
  },
  githubUsername: "Akash001cse",
};

export const ABOUT_HIGHLIGHTS = [
  "Core Java & OOP", "Frontend Development", "Data Structures & Algorithms",
  "Problem Solving", "Teamwork", "Communication", "Adaptability",
];

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", level: 88, icon: SiOpenjdk },
      { name: "C", level: 78, icon: SiC },
      { name: "JavaScript", level: 80, icon: SiJavascript },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML", level: 90, icon: SiHtml5 },
      { name: "CSS", level: 85, icon: SiCss3 },
      { name: "JavaScript", level: 80, icon: SiJavascript },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MySQL", level: 82, icon: SiMysql }],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "VS Code", level: 90, icon: SiReact },
      { name: "Git", level: 84, icon: SiGit },
      { name: "GitHub", level: 84, icon: SiGithub },
      { name: "Excel", level: 75, icon: SiReact },
      { name: "PowerPoint", level: 75, icon: SiReact },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Adaptability", level: 88, icon: FaJava },
      { name: "Communication", level: 86, icon: FaJava },
      { name: "Teamwork", level: 90, icon: FaJava },
      { name: "Time Management", level: 84, icon: FaJava },
    ],
  },
];

export const PROJECTS = [
  {
    title: "College Campus Chatbot",
    image: "/assets/projects/chatbot.jpg",
    role: "Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed an AI-powered chatbot for student campus queries including schedules, faculty information, announcements, and events.",
    overview:
      "An interactive AI-powered assistant that handles common student queries instantly, reducing the load on administrative staff and improving the campus experience.",
    achievements: ["Reduced response time by 40%", "Automated 50+ common question types", "Responsive UI Design"],
    features: ["Natural query handling", "Schedule & faculty lookup", "Event announcements", "Responsive UI"],
    challenges: "Mapping diverse student questions to accurate answers without a heavy backend.",
    solutions: "Built a keyword + intent matching layer with a structured knowledge base in JavaScript.",
    github: "https://github.com/Akash001cse/Campus-Chatbot",
  },
  {
    title: "Online Attendance Management System",
    image: "/assets/projects/attendance.jpg",
    role: "Developer",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Built an online attendance management system that lets faculty record, track, and manage student attendance with an easy-to-use web interface.",
    overview:
      "A streamlined web application for managing daily student attendance, generating reports, and reducing manual paperwork for faculty.",
    achievements: ["Digitised classroom attendance", "Faster attendance entry", "Clean responsive UI"],
    features: ["Student & class management", "Daily attendance entry", "Report generation", "Responsive layout"],
    challenges: "Designing a simple, error-proof workflow for large classes.",
    solutions: "Used clear form validation, keyboard-friendly inputs, and organised list views.",
    github: "https://github.com/Akash001cse/Attendance-management-system-",
  },
];

export const EXPERIENCE = [
  {
    title: "Java Development Intern",
    company: "Vijesha IT Services LLP",
    duration: "Jul 2026 – Dec 2026",
    description:
      "Selected for a competitive 6-month Java Development Training & Internship covering Core Java, OOP, Design Patterns, Backend Development, Real-World Projects.",
    points: ["Core Java", "OOP", "Design Patterns", "Backend Development", "Real-World Projects"],
  },
  {
    title: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Mar 2026 – Apr 2026",
    description: "Developed web application features using HTML, CSS, JavaScript, Git, and GitHub.",
    points: ["HTML / CSS / JavaScript", "Git & GitHub", "Feature development"],
  },
];

export const ACHIEVEMENTS = [
  { value: 100, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 100, suffix: "-Day", label: "CodeChef Streak" },
  { value: 8.8, suffix: "", label: "CGPA", decimals: 1 },
  { value: 6, suffix: "-Month", label: "Java Internship" },
  { value: 1, suffix: "", label: "Competitive Programming Enthusiast", text: "Active" },
];

export const CERTIFICATIONS = [
  { name: "Java Programming (Core Java & OOP)", image: "/assets/certificates/java.jpg" },
  { name: "Frontend Development", image: "/assets/certificates/frontend.jpg" },
  { name: "GitHub & Version Control", image: "/assets/certificates/github.jpg" },
  { name: "AI Tools Workshop (BE10X)", image: "/assets/certificates/ai-tools.jpg" },
  { name: "C Programming", image: "/assets/certificates/c-programming.jpg" },
];

export const GALLERY_CATEGORIES = [
  "All", "Workshops", "Hackathons", "Industrial Visits", "Symposiums", "Internship Activities",
];

export const GALLERY_ITEMS: { id: string; category: string; caption: string; image: string }[] = [
  { id: "w1", category: "Workshops", caption: "TCS iON Career Edge - Young Professional", image: "/assets/gallery/workshop-tcs.jpg" },
  { id: "w2", category: "Workshops", caption: "Embedded Systems & IoT Workshop 2026", image: "/assets/gallery/workshop-iot.jpg" },
  { id: "h1a", category: "Hackathons", caption: "DEVSTORM Hackathon — MSME Guindy, Chennai", image: "/assets/gallery/hackathon-devstorm-1.jpg" },
  { id: "h2", category: "Hackathons", caption: "AI Vibe Coding Hackathon — SRM COMSCI'26", image: "/assets/gallery/hackathon-srm.jpg" },
  { id: "iv1", category: "Industrial Visits", caption: "TN Smart & Advanced Manufacturing Center", image: "/assets/gallery/iv-tnsamc.jpg" },
  { id: "iv2", category: "Industrial Visits", caption: "Techvolt Software Pvt. Ltd. — Coimbatore", image: "/assets/gallery/iv-techvolt.jpg" },
  { id: "s1", category: "Symposiums", caption: "ZORPHIX — Chennai Institute of Technology", image: "/assets/gallery/symposium-zorphix.jpg" },
  { id: "in1", category: "Internship Activities", caption: "Vijesha's Battle of the Bytes — Winner", image: "/assets/gallery/internship-vijesha.jpg" },
  { id: "in2", category: "Internship Activities", caption: "Cognifyz Technologies — Internship Completion", image: "/assets/gallery/internship-cognifyz.jpg" },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    school: "Adhi College of Engineering and Technology",
    period: "2023 – 2027",
    detail: "CGPA: 8.8",
  },
  { degree: "Class XII (HSC)", school: "Government Higher Secondary School", period: "2022 – 2023", detail: "" },
  { degree: "Class X (SSLC)", school: "Government High School", period: "2020 – 2021", detail: "" },
];

export const CODING_PROFILES = [
  { name: "LinkedIn", icon: FaLinkedin, url: PROFILE.socials.linkedin, stat: "Professional Network", color: "#0A66C2" },
  { name: "GitHub", icon: SiGithub, url: PROFILE.socials.github, stat: "Open Source & Projects", color: "#6e5494" },
  { name: "LeetCode", icon: SiLeetcode, url: PROFILE.socials.leetcode, stat: "100+ Problems Solved", color: "#FFA116" },
  { name: "CodeChef", icon: SiCodechef, url: PROFILE.socials.codechef, stat: "100-Day Streak", color: "#5B4638" },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
  { id: "gallery", label: "Gallery" },
  { id: "education", label: "Education" },
  { id: "profiles", label: "Coding Profiles" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
