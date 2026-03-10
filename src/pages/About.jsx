import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import InfoCard from "../components/InfoCard";
import { tabContent } from "../animations";

const tabs = [
  { id: "bemutatkozas", label: "Bemutatkozás" },
  { id: "policy", label: "Policy" },
  { id: "engedelyek", label: "Engedélyek" },
];

function TabNav({ tabs, activeTab, onSelect }) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 mb-10"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`px-5 py-2.5 rounded-full font-medium transition-all border ${
            activeTab === tab.id
              ? "bg-purple-600 text-white border-purple-600 shadow-md"
              : "bg-white text-gray-600 border-gray-300 hover:border-purple-400 hover:text-purple-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </motion.div>
  );
}

function Bemutatkozas() {
  const specialties = [
    { icon: "🧫", title: "Mikrobiológia", text: "Hagyományos baktériumtenyésztésen alapuló vizsgálatok, valamint korongdiffúziós antibiotikum-érzékenységi tesztek végzése." },
    { icon: "🔬", title: "Parazitológia", text: "Elsősorban Eimeria oociszták mennyiségi meghatározása és fajazonosítása, továbbá különböző bélférgek jelenlétének kimutatása." },
  ];

  return (
    <motion.div className="space-y-6 text-gray-700 leading-relaxed" {...tabContent}>
      <p>
        A Haruspex–JADE Laboratórium 2025-ben alakult azzal a céllal, hogy magas
        színvonalú mikrobiológiai diagnosztikát és átfogó állategészségügyi
        támogatást nyújtson partnerei számára. Küldetésünk, hogy célzott,
        megbízható szolgáltatásokkal támogassuk a hazai integrációkat és
        állattartókat, stabil szakmai hátteret biztosítva a mindennapi
        döntésekhez.
      </p>

      <p>
        Csapatunkat szakállatorvos, egészségügyi szakember és tudományos fokozattal
        rendelkező munkatársak alkotják, akik többéves gyakorlati tapasztalattal
        rendelkeznek a laboratóriumi diagnosztika területén. Szakértelmünk kiterjed
        a mikrobiológiai és parazitológiai vizsgálatok széles körére; munkánk során
        kiemelt figyelmet fordítunk a precizitásra, valamint a gyors és értelmezhető
        eredményközlésre.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Főbb szakterületeink</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {specialties.map((item, i) => (
          <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} delay={0.1 * i} />
        ))}
      </div>

      <p className="mt-6">
        Számunkra a szakmai hitelesség mellett a közvetlen partneri kapcsolat
        kiemelt jelentőségű. Ennek megfelelően munkatársaink személyesen is
        elérhetők, és készséggel állnak partnereink rendelkezésére szakmai kérdések
        és diagnosztikai döntések támogatásában.
      </p>
    </motion.div>
  );
}

function PolicyCard({ icon, title, text, delay = 0 }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <h4 className="font-semibold text-gray-800 mb-2">
        {icon} {title}
      </h4>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}

function Policy() {
  const cards = [
    { icon: "📋", title: "Tervezett munkavégzés, kontrollált mintaszám", text: "Laboratóriumunk nem tömeges feldolgozásra épül. Tudatosan tervezett mintaszámmal dolgozunk annak érdekében, hogy minden minta a szükséges figyelmet, időt és szakmai kontrollt kapja." },
    { icon: "🧪", title: "Aszeptikus munkavégzés és kontamináció-kontroll", text: "Szigorú aszeptikus protokolljaink és belső ellenőrzési pontjaink biztosítják, hogy a minták keresztfertőződésének kockázata minimálisra csökkenjen. Az általunk kiadott eredmények minden esetben a vizsgált minta valós állapotát tükrözik, legyen szó állategészségügyi vagy higiéniai vizsgálatról." },
    { icon: "🛡️", title: "Magas szakmai standardok és biológiai biztonság", text: "Folyamatosan karbantartott biológiai biztonsági irányelveink (Biosafety Policy) garantálják a munkatársak, a minták és a környezet védelmét. A biztonság számunkra nem adminisztratív teher, hanem a szakmai felelősségvállalás része." },
    { icon: "🔍", title: "Átláthatóság és nyomon követhetőség", text: "Minden vizsgálati folyamat dokumentált. Digitális nyilvántartási és validálási rendszereink révén a minták útja a beérkezéstől az eredményközlésig visszakövethető, ellenőrizhető és auditálható." },
    { icon: "📚", title: "Szakmai etika és folyamatos fejlődés", text: "Munkatársaink elkötelezettek a laboratóriumi etika, a biztonságos munkavégzés és a szakmai tudás folyamatos frissítése iránt. Az innováció számunkra nem öncél, hanem a minőség fenntartásának eszköze." },
  ];

  return (
    <motion.div className="space-y-6 text-gray-700 leading-relaxed" {...tabContent}>
      <h2 className="text-2xl font-bold text-gray-800">
        Policy – Laboratóriumi minőség- és biztonságpolitika
      </h2>

      <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 rounded-r-lg italic text-gray-600">
        <p>„Láthatatlan precizitás – látható biztonság.</p>
        <p>A mi laborunk az Ön döntéseinek alapja."</p>
      </blockquote>

      <p>
        A mikrobiológiai diagnosztika területén a pontosság nem lehetőség, hanem
        alapkövetelmény. A Haruspex–JADE Laboratóriumban a laboratóriumi politika
        nem egy formális dokumentum, hanem a mindennapi működésünket meghatározó
        szakmai keretrendszer. Minden vizsgálatunkat erre az alapra építjük, a
        minták beérkezésétől az eredmények közléséig.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-8">
        Mit jelent ez partnereink számára?
      </h3>

      <div className="space-y-5 mt-4">
        {cards.map((card, i) => (
          <PolicyCard key={i} icon={card.icon} title={card.title} text={card.text} delay={0.08 * i} />
        ))}
      </div>

      <motion.div
        className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <h4 className="font-semibold text-gray-800 mb-3">
          Küldetésünk a minőség mögött
        </h4>
        <p className="text-gray-600">
          Tisztában vagyunk azzal, hogy partnereink döntései a mi adatainkra
          épülnek. Éppen ezért laboratóriumi politikánk középpontjában a
          megbízhatóság, a pontosság és a szakmai integritás áll. A sterilitás, a
          módszertani fegyelem és az eredmények hitelessége terén nem kötünk
          kompromisszumot.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Engedelyek() {
  return (
    <motion.div className="space-y-6 text-gray-700 leading-relaxed" {...tabContent}>
      <h2 className="text-2xl font-bold text-gray-800">Engedélyek</h2>
      <p>
        A Haruspex–JADE Laboratórium a vonatkozó jogszabályi előírásoknak
        megfelelően működik. Az alábbi dokumentum tartalmazza a Hasruspex Kft.
        engedélyeit.
      </p>
      <motion.div
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <span className="text-4xl">📄</span>
        <div>
          <p className="font-semibold text-gray-800 mb-1">Hasruspex Kft. – Engedélyek</p>
          <a
            href="/docs/hasruspex-engedelyek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 underline font-medium"
          >
            PDF letöltése →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("bemutatkozas");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && tabs.find(t => t.id === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <PageHeader title="Rólunk" subtitle="Haruspex–JADE Laboratórium" />

        <TabNav tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "bemutatkozas" && <Bemutatkozas key="bemutatkozas" />}
            {activeTab === "policy" && <Policy key="policy" />}
            {activeTab === "engedelyek" && <Engedelyek key="engedelyek" />}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageLayout>
  );
}