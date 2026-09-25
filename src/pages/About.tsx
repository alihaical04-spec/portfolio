import { motion } from "framer-motion";
import { personal } from "../data/content";

export default function About() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">About Me</h1>
          <p className="mt-2 text-gray-400">A bit about who I am and how I work</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-10 space-y-6 text-gray-300 leading-relaxed">
          {personal.bio.split("\n\n").map((para, i) => (
            <p key={i} className="text-base sm:text-lg">{para}</p>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">
            <h3 className="text-sm font-medium text-sky-400">Role</h3>
            <p className="mt-1 text-lg font-semibold text-white">{personal.role}</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#111827] p-6">
            <h3 className="text-sm font-medium text-sky-400">Status</h3>
            <p className="mt-1 text-lg font-semibold text-white">{personal.location}</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#111827] p-6 sm:col-span-2">
            <h3 className="text-sm font-medium text-sky-400">Philosophy</h3>
            <p className="mt-1 text-lg font-semibold text-white">Vibe Coding — stay in flow, write expressive code, ship with energy.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
