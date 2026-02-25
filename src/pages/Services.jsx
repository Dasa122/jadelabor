import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="container mx-auto py-12 px-4">

      <h1 className="text-4xl font-bold text-center mb-12">
        Szolgáltatásaink
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* 1️⃣ Állategészségügyi diagnosztika */}
        <ServiceCard
          title="Állategészségügyi diagnosztikai szolgáltatások"
          description="Integrációs, döntéstámogató diagnosztika. Nem tömegminták, hanem célzott vizsgálatok."
          items={[
            "Aerob mikrobiológiai tenyésztés (tamponos minták)",
            "Hagyományos baktériumtenyésztés",
            "Korongdiffúziós antibiotikum-érzékenységi vizsgálatok",
            "Parazitológiai diagnosztika (min. 10 g bélsár/trágya)",
            "Eimeria oociszta mennyiségi meghatározás",
            "Eimeria fajazonosítás",
            "Bélférgek kimutatása"
          ]}
        />

        {/* 2️⃣ Víz-mikrobiológiai vizsgálatok */}
        <ServiceCard
          title="Víz-mikrobiológiai vizsgálatok"
          description="Nem akkreditált, gyors és gyakorlatias higiéniai kontroll."
          items={[
            "ATP gyorsdiagnosztika (luminométeres mérés)",
            "Ipari vízrendszerek ellenőrzése",
            "Tisztítási folyamatok validálása",
            "DIP Slide mikrobiológiai tesztek"
          ]}
        />

        {/* 3️⃣ Környezethigiéniai vizsgálatok */}
        <ServiceCard
          title="Környezethigiéniai vizsgálatok"
          description="Felületek és fertőtlenítések ellenőrzése gyors döntéstámogatással."
          items={[
            "ATP felületvizsgálat",
            "Fertőtlenítési hatékonyság ellenőrzése",
            "DIP Slide felületi mintavétel",
            "Higiéniai állapot rendszeres kontrollja"
          ]}
        />

      </div>
    </div>
  );
}