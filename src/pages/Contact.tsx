import { motion } from "framer-motion";
import { Mail, GitBranch, MapPin } from "lucide-react";
import { personal } from "../data/content";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-theme sm:text-4xl">Get in Touch</h1>
          <p className="mt-2 text-muted">
            I&apos;m open to opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 lg:col-span-2"
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 rounded-2xl border border-theme bg-surface p-5 transition hover:border-sky-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="font-medium text-theme">{personal.email}</p>
              </div>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-theme bg-surface p-5 transition hover:border-sky-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <GitBranch size={22} />
              </div>
              <div>
                <p className="text-sm text-muted">GitHub</p>
                <p className="font-medium text-theme">github.com/alihaical04-spec</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-theme bg-surface p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm text-muted">Availability</p>
                <p className="font-medium text-theme">{personal.location}</p>
              </div>
            </div>
            <p className="pt-2 text-sm text-muted">
              Prefer email? Reach out anytime — I usually reply within 24–48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-theme bg-surface p-6 sm:p-8 lg:col-span-3"
          >
            <h2 className="mb-6 text-lg font-semibold text-theme">Send a message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
