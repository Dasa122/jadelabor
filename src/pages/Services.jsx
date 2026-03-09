import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

function Accordion({ id, icon, title, subtitle, children, isOpen, onToggle }) {
  return (
    <div id={id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left bg-white hover:bg-gray-50 transition border-0 cursor-pointer"
      >
        <span className="text-4xl flex-shrink-0">{icon}</span>
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <motion.svg
          className="w-5 h-5 text-gray-400 flex-shrink-0"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AllategeszsegugyContent() {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p className="text-sm text-purple-600 font-medium">
        Profil: integrációs, döntéstámogató diagnosztika · Fókusz: célzott, szakmailag indokolt vizsgálatok
      </p>

      <h3 className="text-lg font-bold text-gray-800 mt-4">Vizsgálati területek</h3>

      {/* Mikrobiológiai diagnosztika */}
      <div className="bg-gray-50 rounded-xl p-5 space-y-3">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          🧫 Mikrobiológiai diagnosztika
        </h4>
        <p>
          Aerob baktériumtenyésztésen alapuló vizsgálatok, elsősorban tamponos
          minták feldolgozásával. A klasszikus tenyésztési módszerek lehetővé
          teszik a kórokozók megbízható kimutatását és az eredmények
          értelmezését a gyakorlati állategészségügyi döntésekhez.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-2">Hagyományos baktériumtenyésztés</h5>
            <p className="text-sm text-gray-600">
              Különböző klinikai és környezeti eredetű minták bakteriológiai
              vizsgálata bevált tenyésztési eljárások alkalmazásával.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-2">Antibiotikum-érzékenységi vizsgálatok</h5>
            <p className="text-sm text-gray-600">
              Korongdiffúziós módszerrel végzett antibiotikum-érzékenységi
              tesztek a célzott és megalapozott terápiás döntések támogatására.
            </p>
          </div>
        </div>
      </div>

      {/* Parazitológiai diagnosztika */}
      <div className="bg-gray-50 rounded-xl p-5 space-y-3">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          🔬 Parazitológiai diagnosztika
        </h4>
        <p>
          Parazitológiai vizsgálatok végzése minimum 10 g bélsár- vagy
          trágyaminta felhasználásával, a parazitás fertőzések megbízható
          kimutatására.
        </p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">▸</span>
            <span>Eimeria oociszták mennyiségi meghatározása</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">▸</span>
            <span>Eimeria fajazonosítás morfológiai alapon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">▸</span>
            <span>Különböző bélférgek jelenlétének kimutatása</span>
          </li>
        </ul>
      </div>

      {/* Szemlélet */}
      <div className="border-l-4 border-purple-500 pl-5 py-2 mt-4">
        <h4 className="font-semibold text-gray-800 mb-2">Szemléletünk</h4>
        <ul className="space-y-1 text-gray-600">
          <li>✓ Bevált, klasszikus diagnosztikai módszerek alkalmazása</li>
          <li>✓ Gyors, értelmezhető és gyakorlatias eredményközlés</li>
          <li>✓ Közvetlen szakmai konzultáció lehetősége partnereink számára</li>
        </ul>
      </div>
    </div>
  );
}

function VizMikrobiologiaContent() {
  return (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p>
        Víz-mikrobiológiai vizsgálataink célja a higiéniai állapot gyors és
        gyakorlatias ellenőrzése, valamint a technológiai folyamatok folyamatos
        kontrollja.
      </p>

      <div className="bg-gray-50 rounded-xl p-5 space-y-3">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          💧 Mikrobiológiai vizsgálatok – DIP Slide tesztek
        </h4>
        <p>
          Mikrobiológiai ellenőrzésre DIP Slide teszteket alkalmazunk folyékony
          minták vizsgálatához. A módszer egyszerű, gyors és jól használható a
          mikrobiális terhelés kvalitatív és félkvantitatív becslésére.
        </p>

        <h5 className="font-semibold text-gray-800 mt-4">Mintavételi módok:</h5>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">▸</span>
            <span>A DIP Slide lemez közvetlen bemártása a folyékony mintába</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 mt-1">▸</span>
            <span>Mintavétel vattapálcával, majd a minta felvitele a lemez felületére</span>
          </li>
        </ul>

        <p className="mt-3 text-gray-600">
          A mintavételt követően a teszteket a vizsgálat típusának megfelelő
          hőmérsékleten és inkubációs időtartamig inkubáljuk, majd az
          eredményeket a telepszám és teleptípus alapján értékeljük.
        </p>
      </div>

      <div className="border-l-4 border-blue-500 pl-5 py-2 mt-4">
        <h4 className="font-semibold text-gray-800 mb-2">Vizsgálatok célja</h4>
        <ul className="space-y-1 text-gray-600">
          <li>✓ Vízhigiéniai állapot ellenőrzése</li>
          <li>✓ Mikrobiális szennyezettség korai felismerése</li>
          <li>✓ Gyors visszajelzés biztosítása a technológiai döntések támogatásához</li>
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const location = useLocation();
  const [openIds, setOpenIds] = useState(new Set());

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "allategeszsegugy" || hash === "viz-mikrobiology") {
      setOpenIds((prev) => new Set(prev).add(hash));
    }
    if (hash) window.scrollTo(0, 0);
  }, [location.hash]);

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <motion.div className="min-h-screen bg-gray-50 py-12 px-4" {...pageTransition}>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Szolgáltatásaink
        </motion.h1>
        <motion.p
          className="text-center text-gray-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Kattintson egy szolgáltatásra a részletek megtekintéséhez
        </motion.p>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Accordion
              id="allategeszsegugy"
              icon="🧫"
              title="Állategeszégügyi diagnosztikai szolgáltatások"
              subtitle="Integrációs, döntéstámogató vizsgálatok"
              isOpen={openIds.has("allategeszsegugy")}
              onToggle={() => toggle("allategeszsegugy")}
            >
              <AllategeszsegugyContent />
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <Accordion
              id="viz-mikrobiology"
              icon="💧"
              title="Víz-mikrobiológiai vizsgálatok"
              subtitle="Gyors higiéniai és mikrobiológiai kontroll"
              isOpen={openIds.has("viz-mikrobiology")}
              onToggle={() => toggle("viz-mikrobiology")}
            >
              <VizMikrobiologiaContent />
            </Accordion>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}