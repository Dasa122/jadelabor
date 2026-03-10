import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  return (
    <motion.div className="min-h-screen" {...pageTransition}>
      {/* Hero section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white py-24 px-4 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.img
              src={`${import.meta.env.BASE_URL}img/image0_2.png`} alt="Haruspex Logo"
              className="h-28 md:h-36 drop-shadow-2xl"
              variants={fadeInLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.img
              src={`${import.meta.env.BASE_URL}img/jade-logo.png`} alt="JA-DE Logo"
              className="h-28 md:h-36 drop-shadow-2xl"
              variants={fadeInRight}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            Haruspex–JADE Laboratórium
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 italic mb-8"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            „Hagyományos módszerek – mai döntésekhez"
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/szolgaltatasok"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-300 no-underline shadow-lg hover:scale-105"
            >
              Szolgáltatásaink
            </Link>
            <Link
              to="/kapcsolat"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-full font-medium transition-all duration-300 no-underline hover:scale-105"
            >
              Kapcsolat
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Service overview cards */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Vizsgálati területeink
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/szolgaltatasok#allategeszsegugy"
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline block h-full"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">🧫</span>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition mb-2">
                Állategészségügyi diagnosztika
              </h3>
              <p className="text-gray-600">
                Integrációs, döntéstámogató vizsgálatok – mikrobiológiai
                tenyésztés, antibiotikum-érzékenység, parazitológia.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              to="/szolgaltatasok#viz-mikrobiology"
              className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline block h-full"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">💧</span>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition mb-2">
                Víz-mikrobiológiai vizsgálatok
              </h3>
              <p className="text-gray-600">
                Gyors higiéniai és mikrobiológiai kontroll – DIP Slide tesztek,
                vízhigiéniai ellenőrzés.
              </p>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About teaser */}
      <div className="bg-gray-50 py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Rólunk</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            A Haruspex–JADE Laboratórium 2025-ben alakult azzal a céllal, hogy
            magas színvonalú mikrobiológiai diagnosztikát és átfogó
            állategészségügyi támogatást nyújtson partnerei számára.
          </p>
          <Link
            to="/rolunk#bemutatkozas"
            className="text-purple-600 hover:text-purple-800 font-medium underline"
          >
            Bemutatkozás →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}