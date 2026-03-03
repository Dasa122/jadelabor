export default function About() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Rólunk</h1>
      
      <div className="space-y-4 text-gray-700">
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

        <h2 className="text-xl font-semibold mt-6">Főbb szakterületeink:</h2>

        <div>
          <h3 className="font-semibold">Mikrobiológia</h3>
          <p>
            Hagyományos baktériumtenyésztésen alapuló vizsgálatok, valamint
            korongdiffúziós antibiotikum-érzékenységi tesztek végzése.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Parazitológia</h3>
          <p>
            Elsősorban Eimeria oociszták mennyiségi meghatározása és fajazonosítása,
            továbbá különböző bélférgek jelenlétének kimutatása.
          </p>
        </div>

        <p>
          Számunkra a szakmai hitelesség mellett a közvetlen partneri kapcsolat
          kiemelt jelentőségű. Ennek megfelelően munkatársaink személyesen is
          elérhetők, és készséggel állnak partnereink rendelkezésére szakmai kérdések
          és diagnosztikai döntések támogatásában.
        </p>
      </div>
    </div>
  );
}