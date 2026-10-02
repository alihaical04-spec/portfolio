import { motion } from "framer-motion";
import { skills } from "../data/content";
import { Code2, Terminal, Wrench, Sparkles } from "lucide-react";

const categories = [
  { title: "Frontend", items: skills.frontend, icon: Code2, color: "text-sky-500", bg: "bg-sky-500/10" },
  { title: "Languages", items: skills.languages, icon: Terminal, color: "text-violet-500", bg: "bg-violet-500/10" },
  { title: "Tools", items: skills.tools, icon: Wrench, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Mindset", items: skills.mindset, icon: Sparkles, color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function Skills() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-theme sm:text-4xl">Skills</h1>
          <p className="mt-2 text-muted">Technologies and approaches I work with every day</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-theme bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.bg} ${cat.color}`}>
                  <cat.icon size={20} />
                </div>
                <h2 className="text-lg font-semibold text-theme">{cat.title}</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-theme bg-surface-2 px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <img
            src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,python,java,cpp,git,github,vscode&theme=dark&perline=6"
            alt="Tech stack icons"
            className="max-w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
