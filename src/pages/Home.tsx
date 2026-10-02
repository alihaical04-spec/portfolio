import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Mail, Sparkles } from "lucide-react";
import { personal, projects } from "../data/content";
import ProjectCard from "../components/ProjectCard";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-500">
              <Sparkles size={14} />
              Frontend Web Developer · Vibe Coding
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-theme sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {personal.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-theme bg-surface px-5 py-3 text-sm font-semibold text-theme transition hover:bg-surface-2"
              >
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition hover:text-theme"
                aria-label="GitHub"
              >
                <GitBranch size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-muted transition hover:text-theme"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-theme px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-theme sm:text-3xl">Featured Projects</h2>
              <p className="mt-2 text-muted">Selected work that showcases my frontend skills</p>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-medium text-sky-500 hover:text-sky-400 sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-theme px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-theme">Let&apos;s build something great</h2>
          <p className="mt-3 text-muted">
            Open to frontend roles, freelance projects, and collaborations.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
