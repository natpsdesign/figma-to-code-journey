import { Home, Users, MessageCircle, LayoutGrid } from "lucide-react";

const navItems = [
  { icon: Home, label: "Início", active: false },
  { icon: Users, label: "Comunidades", active: true },
  { icon: MessageCircle, label: "Chats", active: false },
  { icon: LayoutGrid, label: "Configurações", active: false },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t border-border bg-card px-2 py-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex flex-col items-center gap-0.5 px-3 py-1"
        >
          <item.icon
            className={`h-5 w-5 ${item.active ? "text-primary" : "text-muted-foreground"}`}
          />
          <span
            className={`text-[10px] font-medium ${
              item.active
                ? "text-primary border-b-2 border-primary pb-0"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
