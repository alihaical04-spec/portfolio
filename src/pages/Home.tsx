import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Mail, Sparkles } from "lucide-react";
import { personal, projects } from "../data/content";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
              <Sparkles size={14} />
              Frontend Web Developer · Vibe Coding
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400 sm:text-xl">{personal.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Contact Me
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-white"><GitBranch size={20} /></a>
              <a href={`mailto:${personal.email}`} className="text-gray-400 transition hover:text-white"><Mail size={20} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Projects</h2>
              <p className="mt-2 text-gray-400">Selected work that showcases my frontend skills</p>
            </div>
            <Link to="/projects" className="hidden text-sm font-medium text-sky-400 hover:text-sky-300 sm:block">View all →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl border border-white/5 bg-[#111827] p-6 transition hover:border-sky-500/30 hover:bg-[#151c2c]">
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-400">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-300">{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white">Let&apos;s build something great</h2>
          <p className="mt-3 text-gray-400">Open to frontend roles, freelance projects, and collaborations.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
