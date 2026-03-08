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
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-card">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-xs font-semibold text-foreground">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span>●●●●</span>
          <span>📶</span>
          <span>🔋</span>
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
        <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Pesquisar</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Comunidades que você participa */}
        <section className="mb-6">
          <SectionTitle>Comunidades que você participa</SectionTitle>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {participaCommunities.slice(0, 2).map((c) => (
              <CommunityCard key={c.name + "1"} {...c} />
            ))}
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {participaCommunities.slice(2).map((c) => (
              <CommunityCard key={c.name + "2"} {...c} />
            ))}
          </div>
        </section>

        {/* Comunidades que podem te interessar */}
        <section className="mb-6">
          <SectionTitle>Comunidades que podem te interessar</SectionTitle>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {interessaCommunities.slice(0, 2).map((c) => (
              <CommunityCard key={c.name + "3"} {...c} />
            ))}
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {interessaCommunities.slice(2).map((c) => (
              <CommunityCard key={c.name + "4"} {...c} />
            ))}
          </div>
        </section>

        {/* Comunidades em destaque */}
        <section className="mb-6">
          <SectionTitle>Comunidades em destaque</SectionTitle>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
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
