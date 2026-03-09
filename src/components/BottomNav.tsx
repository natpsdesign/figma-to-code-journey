const NavHome = () => (
  <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  </svg>
);

const NavCommunities = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m22 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
  </svg>
);

const NavChat = () => (
  <svg width="23" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="8" y1="9" x2="16" y2="9"/>
    <line x1="8" y1="13" x2="13" y2="13"/>
  </svg>
);

const NavSettings = () => (
  <svg width="19" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const navItems = [
  { Icon: NavHome, label: "Início", active: false },
  { Icon: NavCommunities, label: "Comunidades", active: true },
  { Icon: NavChat, label: "Chats", active: false },
  { Icon: NavSettings, label: "Configurações", active: false },
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
          <item.Icon />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomNav;
