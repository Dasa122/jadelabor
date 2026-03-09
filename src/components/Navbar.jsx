import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="nav-link text-white bg-transparent border-0 cursor-pointer flex items-center gap-1 px-3 py-2 hover:text-gray-300 transition"
      >
        {label}
        <motion.svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full mt-1 bg-gray-800 rounded-lg shadow-xl min-w-[240px] py-2 z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link className="flex items-center gap-2 no-underline" to="/">
            <img src="./img/image1_2.png" alt="Text" style={{ height: '36px' }} />
            <img src="./img/image0_2.png" alt="Logo" style={{ height: '36px' }} />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            <Link className="nav-link text-white px-3 py-2 hover:text-gray-300 transition no-underline" to="/">Kezdőoldal</Link>

            <Dropdown label="Rólunk">
              <Link className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition no-underline" to="/rolunk#bemutatkozas">Bemutatkozás</Link>
              <Link className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition no-underline" to="/rolunk#policy">Policy</Link>
              <Link className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition no-underline" to="/rolunk#engedelyek">Engedélyek</Link>
            </Dropdown>

            <Dropdown label="Szolgáltatásaink">
              <Link className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition no-underline" to="/szolgaltatasok#allategeszsegugy">Állategészségügyi diagnosztika</Link>
              <Link className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white transition no-underline" to="/szolgaltatasok#viz-mikrobiology">Víz-mikrobiológiai vizsgálatok</Link>
            </Dropdown>

            <Link className="nav-link text-white px-3 py-2 hover:text-gray-300 transition no-underline" to="/urlapok">Űrlapok</Link>
            <Link className="nav-link text-white px-3 py-2 hover:text-gray-300 transition no-underline" to="/kapcsolat">Kapcsolat</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white bg-transparent border-0 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden pb-4 border-t border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            >
            <Link className="block px-3 py-2 text-white hover:bg-gray-800 no-underline" to="/">Kezdőoldal</Link>
            <div className="px-3 py-1 text-gray-400 text-xs uppercase tracking-wide mt-2">Rólunk</div>
            <Link className="block px-6 py-2 text-gray-300 hover:bg-gray-800 no-underline" to="/rolunk#bemutatkozas">Bemutatkozás</Link>
            <Link className="block px-6 py-2 text-gray-300 hover:bg-gray-800 no-underline" to="/rolunk#policy">Policy</Link>
            <Link className="block px-6 py-2 text-gray-300 hover:bg-gray-800 no-underline" to="/rolunk#engedelyek">Engedélyek</Link>
            <div className="px-3 py-1 text-gray-400 text-xs uppercase tracking-wide mt-2">Szolgáltatásaink</div>
            <Link className="block px-6 py-2 text-gray-300 hover:bg-gray-800 no-underline" to="/szolgaltatasok#allategeszsegugy">Állategészségügyi diagnosztika</Link>
            <Link className="block px-6 py-2 text-gray-300 hover:bg-gray-800 no-underline" to="/szolgaltatasok#viz-mikrobiology">Víz-mikrobiológiai vizsgálatok</Link>
            <Link className="block px-3 py-2 text-white hover:bg-gray-800 no-underline mt-2" to="/urlapok">Űrlapok</Link>
            <Link className="block px-3 py-2 text-white hover:bg-gray-800 no-underline" to="/kapcsolat">Kapcsolat</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}