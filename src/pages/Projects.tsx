import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects, projectCategories } from "../data/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category.includes(activeCategory);
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-theme sm:text-4xl">Projects</h1>
          <p className="mt-2 text-muted">
            A selection of work that demonstrates my frontend skills and approach
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-sky-500 text-white"
                    : "border border-theme bg-surface text-muted hover:text-theme"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-theme bg-surface py-2 pl-9 pr-4 text-sm text-theme outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:w-64"
            />
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-muted">
              No projects match your filters.
            </p>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-sm text-muted"
        >
          More projects coming soon. Check my{" "}
          <a
            href="https://github.com/alihaical04-spec"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-500 hover:text-sky-400"
          >
            GitHub
          </a>{" "}
          for the latest work.
        </motion.p>
      </div>
    </div>
  );
}
