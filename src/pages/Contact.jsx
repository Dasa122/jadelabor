import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";

const teamMembers = [
  {
    name: "Dr. Német Zoltán",
    role: "Ügyvezető, Állatorvos",
    phone: "+36-30-606-8142",
    email: "nemet.zoltan@haruspex.hu",
    image: `${import.meta.env.BASE_URL}img/Nemet_Zoltan.jpg`
  },
  {
    name: "Demeter–Jeremiás Anett",
    role: "Laborvezető",
    phone: "+36-30-677-1065",
    email: "anett@haruspex.hu",
    image: `${import.meta.env.BASE_URL}img/Demeter_Aramias_Anett.jpg`
  },
  {
    name: "Dr. Demeter Csongor",
    role: "Üzletfejlesjtési menedzser",
    phone: "+36-30-677-1065",
    email: "demeter.csongor@haruspex.hu",
    image: `${import.meta.env.BASE_URL}img/Demeter_Csongor.jpg`,

    imageStyle: { clipPath: "inset(0 0 25% 0)", marginBottom: "-100%" }
  }
];

function ContactInfo() {
  return (
    <div className="inline-flex flex-col gap-2 text-gray-600">
      <p className="flex items-center gap-2 justify-center">
        <span>📍</span> 2161 Csomád, Irtványköz 3B.
      </p>
      <p className="flex items-center gap-2 justify-center">
        <span>📧</span>
        <a href="mailto:labor@haruspex.hu" className="text-purple-600 hover:underline">
          labor@haruspex.hu
        </a>
      </p>
    </div>
  );
}

function TeamGrid({ members }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {members.map((member, index) => (
        <motion.div
          key={index}
          className={members.length % 2 !== 0 && index === members.length - 1
            ? "md:col-span-2 md:w-1/2 md:mx-auto"
            : ""}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <TeamCard member={member} />
        </motion.div>
      ))}
    </div>
  );
}

function MapEmbed() {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>Megközelítés</SectionHeading>
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3275593617363!2d19.235929666039247!3d47.66003258319756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d21a7d8e3ae5%3A0xbf5742749f97fdae!2zSXJ0dsOhbnkga8O2eg!5e0!3m2!1sen!2shu!4v1773158695928!5m2!1sen!2shu"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Kapcsolat"
          subtitle={'Haruspex–JADE Laboratórium · „Hagyományos módszerek – mai döntésekhez"'}
        />
        <div className="text-center mb-12">
          <ContactInfo />
        </div>

        <SectionHeading>Munkatársaink</SectionHeading>
        <TeamGrid members={teamMembers} />
        <MapEmbed />
      </div>
    </PageLayout>
  );
}