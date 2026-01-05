import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block py-2 text-slate-700 hover:text-indigo-600 transition-colors";

  const activeLink = "text-indigo-600 font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-slate-900">
          SaaS
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {["features", "pricing", "about", "contact"].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                isActive ? activeLink : linkBase
              }
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-4 space-y-2">
              <button
                className="absolute top-4 right-6 text-slate-700"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {["features", "pricing", "about", "contact"].map((path) => (
                <NavLink
                  key={path}
                  to={`/${path}`}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 text-indigo-600 font-medium"
                      : "block py-2 text-slate-700 hover:text-indigo-600"
                  }
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
