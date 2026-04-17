import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";

function DownloadCard({ icon, title, description, href, buttonText }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.4 }}
    >
      <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <span className="text-5xl flex-shrink-0">{icon}</span>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 hover:scale-105 transition-all duration-300 no-underline"
          >
            📄 {buttonText}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Forms() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <PageHeader title="Űrlapok" subtitle="Letölthető dokumentumok a mintabeküldéshez" />

        <DownloadCard
          icon="📋"
          title="Kísérő levél a trágya és tampon beküldéshez"
          description="Kérjük, a minták beküldésekor mellékelje a kitöltött kísérő levelet. Ez biztosítja a minták azonosíthatóságát és a vizsgálat gyors elvégzését."
          href="/docs/Kisero_level_ tragya_es_tampon_bekuldeshez.doc"
          buttonText="DOC letöltése"
        />
      </div>
    </PageLayout>
  );
}
