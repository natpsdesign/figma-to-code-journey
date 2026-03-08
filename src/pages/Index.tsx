import { ArrowLeft, MoreVertical, Search } from "lucide-react";
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

const participaCommunities = [
  { image: uiDesignImg, name: "UI Design", members: "12K membros" },
  { image: agileImg, name: "Agile", members: "10K membros" },
  { image: uxDesignImg, name: "UX Design", members: "12K membros" },
  { image: frontendImg, name: "Front-End", members: "10K membros" },
];

const interessaCommunities = [
  { image: researchImg, name: "Research", members: "12K membros" },
  { image: uiDesignImg, name: "UI Design", members: "10K membros" },
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
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 text-base font-bold text-section-title">{children}</h2>
);

const Index = () => {
  return (
    <div className="mx-auto flex min-h-[1081px] w-[390px] flex-col rounded-[24px] bg-card overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-sm font-semibold text-foreground">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="3" width="3" height="8" rx="1" fill="#1e2a3a"/><rect x="4.5" y="2" width="3" height="9" rx="1" fill="#1e2a3a"/><rect x="9" y="0.5" width="3" height="10.5" rx="1" fill="#1e2a3a"/><rect x="13.5" y="0" width="3" height="11" rx="1" fill="#1e2a3a" opacity="0.3"/></svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 2C5.09 2 2.88 2.92 1.27 4.47L0 3.2C1.97 1.24 4.6 0 7.5 0C10.4 0 13.03 1.24 15 3.2L13.73 4.47C12.12 2.92 9.91 2 7.5 2ZM3.82 5.98L7.5 10L11.18 5.98C10.12 4.98 8.87 4.5 7.5 4.5C6.13 4.5 4.88 4.98 3.82 5.98Z" fill="#1e2a3a"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0" y="1" width="21" height="10" rx="2" stroke="#1e2a3a" strokeWidth="1"/><rect x="22" y="4" width="2" height="4" rx="1" fill="#1e2a3a" opacity="0.4"/><rect x="1.5" y="2.5" width="18" height="7" rx="1" fill="#1e2a3a"/></svg>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <button aria-label="Voltar">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground">Comunidades</h1>
        <button aria-label="Menu">
          <MoreVertical className="h-6 w-6 text-foreground" />
        </button>
      </header>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Pesquisar</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Comunidades que você participa */}
        <section className="mb-6">
          <SectionTitle>Comunidades que você participa</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {participaCommunities.map((c) => (
              <CommunityCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        {/* Comunidades que podem te interessar */}
        <section className="mb-6">
          <SectionTitle>Comunidades que podem te interessar</SectionTitle>
          <div className="grid grid-cols-2 gap-3">
            {interessaCommunities.map((c) => (
              <CommunityCard key={c.name} {...c} />
            ))}
          </div>
        </section>

        {/* Comunidades em destaque */}
        <section className="mb-6">
          <SectionTitle>Comunidades em destaque</SectionTitle>
          <div className="flex gap-4 pb-2">
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
