export const personal = {
  name: "Rahat Ali",
  role: "Frontend Web Developer",
  tagline:
    "Crafting beautiful, performant interfaces with React, TypeScript & Tailwind CSS. Expert in Vibe Coding.",
  email: "alihaical04@gmail.com",
  github: "https://github.com/alihaical04-spec",
  location: "Available for remote opportunities",
  bio: `I'm a passionate Frontend Web Developer who loves turning ideas into clean, modern web experiences. I specialize in building responsive, accessible, and high-performance user interfaces using React, TypeScript, and Tailwind CSS.

My approach combines solid engineering with creative flow — what I call **Vibe Coding**. I focus on writing elegant, maintainable code that feels good to build and even better to use.

When I'm not coding, I'm exploring new UI patterns, refining my craft, and staying curious about the evolving frontend ecosystem.`,
};

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Tailwind CSS"],
  languages: ["Python", "Java", "C++"],
  tools: ["Git", "GitHub", "VS Code", "Vite", "Netlify"],
  mindset: ["Vibe Coding", "Clean Code", "Responsive Design", "Accessibility", "Modern UI/UX"],
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string[];
  github: string;
  live: string;
  featured: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Dashboard",
    description:
      "A clean, responsive admin dashboard with stats cards, interactive charts, data tables, and dark mode support. Built to showcase real-world UI patterns and data visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    category: ["react", "typescript", "ui"],
    github: "https://github.com/alihaical04-spec",
    live: "#",
    featured: true,
    year: 2026,
  },
  {
    id: 2,
    title: "E-Commerce Product Experience",
    description:
      "Product listing and detail pages with cart functionality, filters, wishlist, and beautiful product cards. Focus on smooth UX and performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    category: ["react", "typescript", "ui"],
    github: "https://github.com/alihaical04-spec",
    live: "#",
    featured: true,
    year: 2026,
  },
  {
    id: 3,
    title: "Weather & Forecast App",
    description:
      "Real-time weather application with clean UI, city search, and multi-day forecast views. Demonstrates API integration, loading states, and error handling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Fetch API"],
    category: ["react", "typescript"],
    github: "https://github.com/alihaical04-spec",
    live: "#",
    featured: true,
    year: 2026,
  },
  {
    id: 4,
    title: "Task Manager with Drag & Drop",
    description:
      "Interactive task board with drag-and-drop columns, filters, and local persistence. Built for smooth interactions and productivity workflows.",
    tech: ["React", "TypeScript", "Tailwind CSS", "dnd-kit"],
    category: ["react", "typescript", "ui"],
    github: "https://github.com/alihaical04-spec",
    live: "#",
    featured: false,
    year: 2026,
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "This multi-page portfolio website itself — modern design, dark/light mode, smooth animations, project filtering, and fully responsive. Built with best practices.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    category: ["react", "typescript", "ui"],
    github: "https://github.com/alihaical04-spec/portfolio",
    live: "https://hikalwebsite.netlify.app/",
    featured: true,
    year: 2026,
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
  { id: "ui", label: "UI / Design" },
];

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export const timeline = [
  {
    year: "2024 – Present",
    title: "Frontend Web Developer",
    description: "Building modern, responsive web applications with React, TypeScript, and Tailwind CSS. Focused on clean code and great user experience.",
  },
  {
    year: "Learning Journey",
    title: "Self-taught & Continuous Growth",
    description: "Mastering HTML, CSS, JavaScript, TypeScript, React, and modern tooling. Exploring Vibe Coding and best practices every day.",
  },
];
