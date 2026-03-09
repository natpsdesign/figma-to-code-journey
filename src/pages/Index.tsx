import CommunityCard from "@/components/CommunityCard";
import FeaturedCard from "@/components/FeaturedCard";
import BottomNav from "@/components/BottomNav";

import uiDesignImg from "@/assets/community-ui-design.png";
import agileImg from "@/assets/community-agile.png";
import uxDesignImg from "@/assets/community-ux-design.png";
import frontendImg from "@/assets/community-frontend.png";
import researchImg from "@/assets/community-research.png";
import uxWriterImg from "@/assets/community-ux-writer.png";
import interestResearchImg from "@/assets/interest-research.png";
import interestUxWriterImg from "@/assets/interest-ux-writer.png";
import interestUiDesignImg from "@/assets/interest-ui-design.png";
import interestFrontendImg from "@/assets/interest-frontend.png";
import interestPesquisaImg from "@/assets/interest-pesquisa.png";
import featuredUxImg from "@/assets/featured-ux-designers.jpg";
import avatarUxDesigners from "@/assets/avatar-ux-designers.png";
import featuredRecifeImg from "@/assets/featured-design-recife.jpg";
import avatarDesignRecife from "@/assets/avatar-design-recife.png";
import cybersecurityCover from "@/assets/destaque-cybersecurity.png";
import cybersecurityAvatar from "@/assets/avatar-cybersecurity.png";

const participaCommunities = [
  { image: uiDesignImg, name: "UI Design", members: "12K membros" },
  { image: uxDesignImg, name: "UX Design", members: "12K membros" },
  { image: agileImg, name: "Agile", members: "10K membros" },
  { image: frontendImg, name: "Front-End", members: "10K membros" },
  { image: researchImg, name: "Pesquisa", members: "5K membros" },
  { image: researchImg, name: "Pesquisa", members: "5K membros" },
];

const interessaCommunities = [
  { image: interestResearchImg, name: "Research", members: "12K membros" },
  { image: interestUxWriterImg, name: "UX Writer", members: "12K membros" },
  { image: interestUiDesignImg, name: "UI Design", members: "10K membros" },
  { image: interestFrontendImg, name: "Front-End", members: "10K membros" },
  { image: interestPesquisaImg, name: "Pesquisa", members: "5K membros" },
];

const featuredCommunities = [
  {
    coverImage: featuredUxImg,
    avatarImage: avatarUxDesigners,
    name: "UX Designers",
    description: "Nosso propósito é fortalecer o ecossistema de design",
    members: "9.7K",
  },
  {
    coverImage: featuredRecifeImg,
    avatarImage: avatarDesignRecife,
    name: "Design Recife",
    description: "Um ambiente seguro para trocar feedbacks",
    members: "9.7K",
  },
  {
    coverImage: cybersecurityCover,
    avatarImage: cybersecurityAvatar,
    name: "Cybersecurity",
    description: "Lorem ipsum dolor sit amet consectetur. Vitae orci.",
    members: "9.7K",
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 px-6 text-base font-bold text-primary">{children}</h2>
);

/* Inline SVG icons matching Figma */
const SignalIcon = () => (
  <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="6" width="3" height="4" rx="0.5" fill="#9a9daa"/>
    <rect x="4.5" y="4" width="3" height="6" rx="0.5" fill="#9a9daa"/>
    <rect x="9" y="2" width="3" height="8" rx="0.5" fill="#9a9daa"/>
    <rect x="13.5" y="0" width="3" height="10" rx="0.5" fill="#9a9daa" opacity="0.3"/>
  </svg>
);

const WifiIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 2C5.09 2 2.88 2.92 1.27 4.47L0 3.2C1.97 1.24 4.6 0 7.5 0C10.4 0 13.03 1.24 15 3.2L13.73 4.47C12.12 2.92 9.91 2 7.5 2ZM3.82 5.98L7.5 10L11.18 5.98C10.12 4.98 8.87 4.5 7.5 4.5C6.13 4.5 4.88 4.98 3.82 5.98Z" fill="#9a9daa"/>
  </svg>
);

const BatteryIcon = () => (
  <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="1.5" width="20" height="9" rx="1.5" stroke="#9a9daa" strokeWidth="1"/>
    <rect x="22" y="4" width="2" height="4" rx="1" fill="#9a9daa" opacity="0.4"/>
    <rect x="2" y="3" width="17" height="6" rx="1" fill="#9a9daa"/>
  </svg>
);

const ArrowBackIcon = () => (
  <svg width="19" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5m7-7-7 7 7 7"/>
  </svg>
);

const MoreVertIcon = () => (
  <svg width="5" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v.01M12 12v.01M12 19v.01"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const Index = () => {
  return (
    <div className="relative mx-auto flex h-[1081px] w-[390px] flex-col rounded-[24px] bg-card overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex h-6 items-center justify-between px-6">
        <span className="w-[30px] text-center font-poppins text-sm leading-[21px] text-muted-foreground">9:41</span>
        <div className="flex items-center gap-1">
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* Header */}
      <header className="relative flex shrink-0 items-center justify-between px-6 pt-[50px] pb-4">
        <button className="flex h-10 w-10 items-center justify-center text-foreground" aria-label="Voltar">
          <ArrowBackIcon />
        </button>
        <h1 className="text-lg font-bold text-primary">Comunidades</h1>
        <button className="flex h-10 w-10 items-center justify-center text-foreground" aria-label="Opções">
          <MoreVertIcon />
        </button>
      </header>

      {/* Search */}
      <div className="shrink-0 px-6 mb-5">
        <div className="flex items-center gap-4 rounded-[32px] border-[1.2px] border-border bg-card px-4 py-3">
          <SearchIcon />
          <input
            type="search"
            placeholder="Pesquisar"
            className="flex-1 min-w-0 border-none bg-transparent text-sm text-foreground outline-none placeholder:text-grey-400"
            aria-label="Pesquisar comunidades"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-[88px]">
        {/* Comunidades que você participa */}
        <section className="mb-6">
          <SectionTitle>Comunidades que você participa</SectionTitle>
          <div className="overflow-x-auto overflow-y-hidden px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="grid gap-[10px]"
              style={{
                gridTemplateRows: "repeat(2, auto)",
                gridAutoFlow: "column",
                gridAutoColumns: "162px",
                width: "max-content",
              }}
            >
              {participaCommunities.map((c, i) =>
                c.image === "__search__" ? (
                  <article
                    key="search"
                    className="flex w-[162px] min-h-[72px] items-center justify-center rounded-lg border-[1.5px] border-dashed border-grey-300 bg-grey-200 px-3.5 py-3 cursor-pointer"
                  >
                    <button className="flex flex-col items-center gap-1.5 border-none bg-transparent cursor-pointer p-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      <span className="text-[13px] font-semibold text-primary">Pesquisar</span>
                    </button>
                  </article>
                ) : (
                  <CommunityCard key={`${c.name}-${i}`} {...c} />
                )
              )}
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
                gridTemplateRows: "repeat(2, auto)",
                gridAutoFlow: "column",
                gridAutoColumns: "162px",
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
        <section className="mb-2">
          <SectionTitle>Comunidades em destaque</SectionTitle>
          <div className="flex gap-4 overflow-x-auto overflow-y-hidden pl-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredCommunities.map((c) => (
              <FeaturedCard key={c.name} {...c} />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNav />
      </div>
    </div>
  );
};

export default Index;
