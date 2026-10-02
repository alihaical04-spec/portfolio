import { motion } from "framer-motion";
import { personal, timeline } from "../data/content";

export default function About() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-theme sm:text-4xl">About Me</h1>
          <p className="mt-2 text-muted">A bit about who I am and how I work</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 space-y-6 text-muted leading-relaxed"
        >
          {personal.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-base sm:text-lg">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          <div className="rounded-2xl border border-theme bg-surface p-6">
            <h3 className="text-sm font-medium text-sky-500">Role</h3>
            <p className="mt-1 text-lg font-semibold text-theme">{personal.role}</p>
          </div>
          <div className="rounded-2xl border border-theme bg-surface p-6">
            <h3 className="text-sm font-medium text-sky-500">Status</h3>
            <p className="mt-1 text-lg font-semibold text-theme">{personal.location}</p>
          </div>
          <div className="rounded-2xl border border-theme bg-surface p-6 sm:col-span-2">
            <h3 className="text-sm font-medium text-sky-500">Philosophy</h3>
            <p className="mt-1 text-lg font-semibold text-theme">
              Vibe Coding — stay in flow, write expressive code, ship with energy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-xl font-bold text-theme">Journey</h2>
          <div className="mt-6 space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative border-l-2 border-sky-500/30 pl-6">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-sky-500 bg-[var(--color-bg)]" />
                <p className="text-xs font-medium text-sky-500">{item.year}</p>
                <h3 className="mt-1 font-semibold text-theme">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
