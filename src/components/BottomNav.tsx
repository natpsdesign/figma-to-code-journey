import navHome from "@/assets/nav-home.svg";
import navCommunities from "@/assets/nav-communities.svg";
import navChat from "@/assets/nav-chat.svg";
import navSettings from "@/assets/nav-settings.svg";

const navItems = [
  { icon: navHome, label: "Início", active: false, width: 20, height: 22 },
  { icon: navCommunities, label: "Comunidades", active: true, width: 22, height: 22 },
  { icon: navChat, label: "Chats", active: false, width: 23, height: 22 },
  { icon: navSettings, label: "Configurações", active: false, width: 19, height: 18 },
];

const BottomNav = () => {
  return (
    <nav
      className="shrink-0 flex items-end justify-center gap-8 h-[88px] px-6 py-4 border-t border-grey-200 rounded-b-[24px] shadow-[0_-2px_4px_rgba(0,0,0,0.08)]"
      style={{
        background: "linear-gradient(180deg, hsl(var(--card)) 50%, rgba(242,242,242,0.2) 100%)",
      }}
      aria-label="Navegação principal"
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex flex-col items-center gap-1 no-underline text-xs leading-[1.5] ${
            item.active
              ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
              : "text-muted-foreground font-normal"
          }`}
        >
          <img
            src={item.icon}
            alt=""
            style={{ width: item.width, height: item.height }}
            className="block"
          />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
