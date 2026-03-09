import CommunityCard from "@/components/CommunityCard";
import FeaturedCard from "@/components/FeaturedCard";
import BottomNav from "@/components/BottomNav";

import uiDesignImg from "@/assets/community-ui-design.png";
import agileImg from "@/assets/community-agile.png";
import uxDesignImg from "@/assets/community-ux-design.png";
import frontendImg from "@/assets/community-frontend.png";
import researchImg from "@/assets/community-research.png";
import uxWriterImg from "@/assets/community-ux-writer.png";
import featuredUxImg from "@/assets/featured-ux-designers.jpg";
import featuredRecifeImg from "@/assets/featured-design-recife.jpg";

import arrowBack from "@/assets/arrow-back.svg";
import moreVert from "@/assets/more-vert.svg";
import searchIcon from "@/assets/search.svg";
import sinal from "@/assets/sinal.svg";
import wifi from "@/assets/wifi.svg";
import bateria from "@/assets/bateria.svg";

const participaCommunities = [
  { image: uiDesignImg, name: "UI Design", members: "12K membros" },
  { image: agileImg, name: "Agile", members: "10K membros" },
  { image: researchImg, name: "Pesquisa", members: "5K membros" },
  { image: uxDesignImg, name: "UX Design", members: "12K membros" },
  { image: frontendImg, name: "Front-End", members: "10K membros" },
];

const interessaCommunities = [
  { image: researchImg, name: "Research", members: "12K membros" },
  { image: uiDesignImg, name: "UI Design", members: "10K membros" },
  { image: researchImg, name: "Pesquisa", members: "5K membros" },
  { image: uxWriterImg, name: "UX Writer", members: "12K membros" },
  { image: frontendImg, name: "Front-End", members: "10K membros" },
];

const featuredCommunities = [
  {
    coverImage: featuredUxImg,
    avatarImage: uxDesignImg,
    name: "UX Designers",
    description: "Nosso propósito é fortalecer o ecossistema de design",
    members: "9.7K",
  },
  {
    coverImage: featuredRecifeImg,
    avatarImage: uxDesignImg,
    name: "Design Recife",
    description: "Um ambiente seguro para trocar feedbacks",
    members: "9.7K",
  },
  {
    coverImage: featuredUxImg,
    avatarImage: agileImg,
    name: "Cybersecurity",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae orci.",
    members: "9.7K",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 px-6 text-base font-bold text-primary">{children}</h2>
);

const Index = () => {
  return (
    <div className="relative mx-auto flex min-h-[1081px] w-[390px] flex-col rounded-[24px] bg-card overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex h-6 items-center justify-between px-6">
        <span className="w-[30px] text-center font-poppins text-sm text-muted-foreground">9:41</span>
        <div className="flex items-center gap-1">
          <img src={sinal} alt="" className="block h-[10px] w-[17px] object-contain" />
          <img src={wifi} alt="" className="block h-[10px] w-[15px] object-contain" />
          <img src={bateria} alt="" className="block h-3 w-[21px] object-contain" />
        </div>
      </div>

      {/* Header */}
      <header className="relative flex shrink-0 items-center justify-between px-6 pt-[50px] pb-4">
        <button className="flex h-10 w-10 items-center justify-center" aria-label="Voltar">
          <img src={arrowBack} alt="" className="block h-[18px] w-[19px]" />
        </button>
        <h1 className="text-lg font-bold text-primary">Comunidades</h1>
        <button className="flex h-10 w-10 items-center justify-center" aria-label="Opções">
          <img src={moreVert} alt="" className="block h-[18px] w-[5px]" />
        </button>
      </header>

      {/* Search */}
      <div className="shrink-0 px-6 mb-5">
        <div className="flex items-center gap-4 rounded-[32px] border border-border bg-card px-4 py-3">
          <img src={searchIcon} alt="" className="shrink-0 h-3.5 w-3.5" />
          <input
            type="search"
            placeholder="Pesquisar"
            className="flex-1 min-w-0 border-none bg-transparent text-sm text-foreground outline-none placeholder:text-grey-400"
            aria-label="Pesquisar comunidades"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-6">
        {/* Comunidades que você participa */}
        <section className="mb-6">
          <SectionTitle>Comunidades que você participa</SectionTitle>
          <div className="overflow-x-auto overflow-y-hidden px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="grid gap-[10px]"
              style={{
                gridTemplateColumns: "repeat(4, 162px)",
                gridTemplateRows: "auto auto",
                width: "max-content",
              }}
            >
              {participaCommunities.map((c, i) => (
                <CommunityCard key={`${c.name}-${i}`} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Comunidades que podem te interessar */}
        <section className="mb-6">
          <SectionTitle>Comunidades que podem te interessar</SectionTitle>
          <div className="overflow-x-auto overflow-y-hidden px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="grid gap-[10px]"
              style={{
                gridTemplateColumns: "repeat(4, 162px)",
                gridTemplateRows: "auto auto",
                width: "max-content",
              }}
            >
              {interessaCommunities.map((c, i) => (
                <CommunityCard key={`${c.name}-${i}`} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Comunidades em destaque */}
        <section className="mb-6">
          <SectionTitle>Comunidades em destaque</SectionTitle>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden pl-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredCommunities.map((c) => (
              <FeaturedCard key={c.name} {...c} />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
