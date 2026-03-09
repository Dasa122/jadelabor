import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export default function Forms() {
  return (
    <motion.div className="min-h-screen bg-gray-50 py-12 px-4" {...pageTransition}>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Űrlapok
        </motion.h1>
        <motion.p
          className="text-center text-gray-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Letölthető dokumentumok a mintabeküldéshez
        </motion.p>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <span className="text-5xl flex-shrink-0">📋</span>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Kísérő levél a trágya és tampon beküldéshez
              </h2>
              <p className="text-gray-600 mb-4">
                Kérjük, a minták beküldésekor mellékelje a kitöltött kísérő levelet.
                Ez biztosítja a minták azonosíthatóságát és a vizsgálat gyors elvégzését.
              </p>
              <a
                href="/docs/kisero-level.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 hover:scale-105 transition-all duration-300 no-underline"
              >
                📄 PDF letöltése
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
