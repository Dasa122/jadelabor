export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-full overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full object-cover object-top ${member.imageClass || ''}`}
          style={member.imageStyle || {}}
        />
      </div>

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
        </div>
      </div>
    </div>
  );
}
