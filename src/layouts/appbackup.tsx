import Header from "./components/Header";
import Button from "./components/ui/Button";
import Collapse from "./components/ui/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import Card from "./components/ui/Card";

type Speaker = {
  name: string;
  role: string;
  imageUrl: string;
};

type CollapseItem = {
  title: string;
  description: string;
};

type CardItem = {
  title: string;
  description: string;
};

function App() {
  const speakers: Speaker[] = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems: CollapseItem[] = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Invofest?",
      description:
        "Diselenggarakan pada 15-17 November 2024 di Universitas Harkat Negeri.",
    },
    {
      title: "Siapa yang bisa ikut?",
      description:
        "Terbuka untuk mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi.",
    },
  ];

  const cardItems: CardItem[] = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional membahas integrasi manusia dan AI untuk masa depan.",
    },
    {
      title: "IT Talkshow",
      description:
        "Diskusi interaktif tentang kolaborasi manusia dan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi untuk mengembangkan kreativitas dan inovasi teknologi.",
    },
    {
      title: "IT Workshop",
      description:
        "Pelatihan praktis AI dan teknologi untuk solusi masa depan.",
    },
  ];

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4">

        <section className="py-20 flex flex-col-reverse md:flex-row items-center gap-10">
          

          <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Join The Biggest IT Festival 2026
            </h1>

            <p className="text-gray-600">
              Eksplor kompetisi, seminar, dan workshop teknologi terbaik untuk masa depanmu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button label="Daftar Sekarang" variant="primary" />
              <Button label="Lihat Event" variant="outline" />
            </div>
          </div>

          
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot Invofest"
              className="w-72 md:w-96"
            />
          </div>
        </section>

        
        <section className="py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Pembicara Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        
        <section className="py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Kegiatan Invofest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cardItems.map((item, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>

                <Button
                  label="Info Selengkapnya"
                  variant="primary"
                  className="mt-4"
                />
              </Card>
            ))}
          </div>
        </section>

        
        <section className="py-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            FAQ
          </h2>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {collapseItems.map((item, index) => (
              <Collapse
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default App;