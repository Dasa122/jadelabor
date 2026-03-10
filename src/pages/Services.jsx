import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import Accordion from "../components/Accordion";

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
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Szolgáltatásaink"
          subtitle="Kattintson egy szolgáltatásra a részletek megtekintéséhez"
        />

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
    </PageLayout>
  );
}