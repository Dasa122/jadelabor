export default function Footer() {
  return (
    <footer className="bg-dark text-white py-6 mt-12">
      <div className="container mx-auto text-center">

        <p className="mb-2 font-semibold">
          Haruspex–JADE Laboratórium
        </p>

        <p className="text-sm mb-2">
          2161 Csomád, Irtványköz 3B
        </p>

        <p className="text-sm mb-2">
          <strong>E-mail:</strong>{" "}
          <a href="mailto:labor@haruspex.hu" className="underline hover:text-gray-300">
            labor@haruspex.hu
          </a>
        </p>

        <p className="text-sm">
          <strong>Dr. Német Zoltán:</strong> +36-30-606-8142 | 
          <strong> Demeter–Jeremiás Anett:</strong> +36-30-677-1065
        </p>

        <p className="text-xs mt-4 text-gray-400">
          &copy; 2026 Haruspex–JADE Laboratórium. Minden jog fenntartva.
        </p>

      </div>
    </footer>
  );
}