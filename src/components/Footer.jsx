import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-lg mb-1">Haruspex–JADE Laboratórium</p>
            <p className="text-gray-400 text-sm italic">
              „Hagyományos módszerek – mai döntésekhez"
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold mb-2 text-gray-300">Oldalak</p>
            <div className="flex flex-col gap-1 text-sm">
              <Link to="/rolunk" className="text-gray-400 hover:text-white transition no-underline">Rólunk</Link>
              <Link to="/szolgaltatasok" className="text-gray-400 hover:text-white transition no-underline">Szolgáltatásaink</Link>
              <Link to="/urlapok" className="text-gray-400 hover:text-white transition no-underline">Űrlapok</Link>
              <Link to="/kapcsolat" className="text-gray-400 hover:text-white transition no-underline">Kapcsolat</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-2 text-gray-300">Elérhetőség</p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>📍 2161 Csomád, Irtványköz 3B</p>
              <p>
                📧{" "}
                <a href="mailto:labor@haruspex.hu" className="underline hover:text-white transition">
                  labor@haruspex.hu
                </a>
              </p>
              <p>📞 Dr. Német Zoltán: +36-30-606-8142</p>
              <p>📞 Demeter–Jeremiás Anett: +36-30-677-1065</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2026 Haruspex–JADE Laboratórium. Minden jog fenntartva.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            A weblapot készítette:{" "}
            <a
              href="https://github.com/Dasa122"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Kővágó Gergő (Dasa122)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}