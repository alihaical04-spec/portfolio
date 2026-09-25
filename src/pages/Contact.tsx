import { motion } from "framer-motion";
import { Mail, GitBranch, MapPin } from "lucide-react";
import { personal } from "../data/content";

export default function Contact() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h1>
          <p className="mt-2 text-gray-400">I&apos;m open to opportunities, collaborations, and interesting conversations.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-12 space-y-4">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111827] p-5 transition hover:border-sky-500/30 hover:bg-[#151c2c]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400"><Mail size={22} /></div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-white">{personal.email}</p>
            </div>
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111827] p-5 transition hover:border-sky-500/30 hover:bg-[#151c2c]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400"><GitBranch size={22} /></div>
            <div>
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="font-medium text-white">github.com/alihaical04-spec</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111827] p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400"><MapPin size={22} /></div>
            <div>
              <p className="text-sm text-gray-400">Availability</p>
              <p className="font-medium text-white">{personal.location}</p>
            </div>
          </div>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10 text-center text-sm text-gray-500">
          Prefer email? Reach out anytime — I usually reply within 24–48 hours.
        </motion.p>
      </div>
    </div>
  );
}
