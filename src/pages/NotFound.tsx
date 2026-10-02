import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-7xl font-extrabold text-sky-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-theme">Page not found</h1>
        <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          <Home size={16} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
