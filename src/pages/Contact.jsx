const teamMembers = [
  {
    name: "Dr. Német Zoltán",
    role: "Ügyvezető, Állatorvos",
    phone: "+36-30-606-8142",
    email: "nemet.zoltan@haruspex.hu",
    image: "/img/user.png"
  },
  {
    name: "Demeter–Jeremiás Anett",
    role: "Laborvezető",
    phone: "+36-30-677-1065",
    email: "anett@haruspex.hu",
    image: "/img/user.png"
  },
  {
    name: "Dr. Demeter Csongor",
    role: "Állatorvos, Laboratóriumi diagnosztika",
    phone: "+36-30-677-1065",
    email: "demeter.csongor@haruspex.hu",
    image: "/img/user.png"
  }
];

function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      {/* Kép - arányos méret */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://placeholder.com/400x300?text=Nincs+kép";
          }}
        />
      </div>
      
      {/* Tartalom */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-purple-600 font-medium mb-4">{member.role}</p>
        
        <div className="space-y-2 text-gray-600 mt-auto">
          <p className="flex items-center gap-2">
            <span>📞</span>
            <a href={`tel:${member.phone}`} className="hover:text-purple-600 transition">
              {member.phone}
            </a>
          </p>
          {/* <p className="flex items-center gap-2">
            <span>📧</span>
            <a href={`mailto:${member.email}`} className="hover:text-purple-600 transition">
              {member.email}
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Kapcsolat</h1>
          <p className="text-lg text-gray-600">
            📍 2161 Csomád, Irtványköz 3B.
          </p>
          
          <p className="text-gray-600 mt-2">
            📧 <a href="mailto:labor@haruspex.hu" className="text-purple-600 hover:underline">
              labor@haruspex.hu
            </a>
          </p>
        </div>

        {/* Csapat kártyák - reszponzív grid */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Munkatársaink</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={teamMembers.length % 2 !== 0 && index === teamMembers.length - 1 
                ? "md:col-span-2 md:w-1/2 md:mx-auto" 
                : ""}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        {/* Térkép */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Megközelítés</h2>
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
        </div>

      </div>
    </div>
  );
}