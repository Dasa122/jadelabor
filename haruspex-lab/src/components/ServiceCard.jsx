export default function ServiceCard({ title, description, items }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition duration-300 h-full flex flex-col">

      {/* Cím */}
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        {title}
      </h2>

      {/* Leírás */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Lista */}
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 flex-grow">
        {items && items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}