import { motion } from "framer-motion";
import { skills } from "../data/content";
import { Code2, Terminal, Wrench, Sparkles } from "lucide-react";

const categories = [
  { title: "Frontend", items: skills.frontend, icon: Code2, color: "text-sky-400" },
  { title: "Languages", items: skills.languages, icon: Terminal, color: "text-violet-400" },
  { title: "Tools", items: skills.tools, icon: Wrench, color: "text-emerald-400" },
  { title: "Mindset", items: skills.mindset, icon: Sparkles, color: "text-amber-400" },
];

export default function Skills() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Skills & Tools</h1>
          <p className="mt-2 text-gray-400">Technologies and practices I use to build modern web experiences</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/5 bg-[#111827] p-6">
              <div className="mb-4 flex items-center gap-3">
                <cat.icon className={cat.color} size={22} />
                <h2 className="text-lg font-semibold text-white">{cat.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-gray-300">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-12 rounded-2xl border border-white/5 bg-[#111827] p-8 text-center">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">Core Stack</h3>
          <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,tailwind,python,java,cpp,git,github,vscode&theme=dark&perline=6" alt="Tech stack icons" className="mx-auto max-w-full" />
        </motion.div>
      </div>
    </div>
  );
}
