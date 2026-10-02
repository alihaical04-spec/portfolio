import { GitBranch, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { personal, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-theme bg-theme">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-theme">
              {personal.name.split(" ")[0]}
              <span className="text-sky-500">.</span>
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">
              Frontend Web Developer · Vibe Coding
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted transition hover:text-sky-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition hover:text-sky-500"
              aria-label="GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-muted transition hover:text-sky-500"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-theme pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & Tailwind · Vibe Coding
        </div>
      </div>
    </footer>
  );
}
