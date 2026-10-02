import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "../data/content";

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-theme bg-surface p-6 transition hover:border-sky-500/30 hover:bg-[var(--color-card-hover)]"
    >
      {project.featured && (
        <span className="mb-3 w-fit rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-500">
          Featured
        </span>
      )}
      <h2 className="text-xl font-semibold text-theme group-hover:text-sky-500 transition-colors">
        {project.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-theme"
        >
          <GitBranch size={16} /> Code
        </a>
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-sky-500"
          >
            <ExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </motion.article>
  );
}
