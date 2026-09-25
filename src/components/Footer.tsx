import { GitBranch, Mail } from "lucide-react";
import { personal } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0f19]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-sky-400"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 transition hover:text-sky-400"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
