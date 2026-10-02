import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      // Create a free account at https://formspree.io and paste the form endpoint here
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      // Fallback: open mailto if Formspree is not configured
      const mailto = `mailto:alihaical04@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailto;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center"
      >
        <CheckCircle className="mb-4 text-emerald-500" size={48} />
        <h3 className="text-xl font-semibold text-theme">Message sent!</h3>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-sky-500 hover:text-sky-400"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-theme bg-surface px-4 py-3 text-sm text-theme outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-theme bg-surface px-4 py-3 text-sm text-theme outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-muted">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-xl border border-theme bg-surface px-4 py-3 text-sm text-theme outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-theme bg-surface px-4 py-3 text-sm text-theme outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500">
          <AlertCircle size={18} />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
