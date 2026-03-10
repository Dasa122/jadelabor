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
    image: `${import.meta.env.BASE_URL}img/user.png`
  },
  {
    name: "Demeter–Jeremiás Anett",
    role: "Laborvezető",
    phone: "+36-30-677-1065",
    email: "anett@haruspex.hu",
    image: `${import.meta.env.BASE_URL}img/user.png`
  },
  {
    name: "Dr. Demeter Csongor",
    role: "Állatorvos, Laboratóriumi diagnosztika",
    phone: "+36-30-677-1065",
    email: "demeter.csongor@haruspex.hu",
    image: `${import.meta.env.BASE_URL}img/user.png`
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
          src="https://www.google.com/maps/embed/v1/place?q=2161%20Csom%C3%A1d%2C%20Irtv%C3%A1nyk%C3%B6z%203B.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
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