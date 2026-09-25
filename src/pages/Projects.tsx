import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Projects</h1>
          <p className="mt-2 text-gray-400">A selection of work that demonstrates my frontend skills and approach</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#111827] p-6 transition hover:border-sky-500/20">
              {project.featured && (
                <span className="mb-3 w-fit rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">Featured</span>
              )}
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-300">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-white">
                  <GitBranch size={16} /> Code
                </a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-sky-400">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
