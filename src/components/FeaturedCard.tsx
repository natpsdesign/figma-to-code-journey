interface FeaturedCardProps {
  coverImage: string;
  avatarImage: string;
  name: string;
  description: string;
  members: string;
}

const FeaturedCard = ({ coverImage, avatarImage, name, description, members }: FeaturedCardProps) => {
  return (
    <div className="min-w-[260px] rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative h-36">
        <img src={coverImage} alt={name} className="h-full w-full object-cover" />
        <img
          src={avatarImage}
          alt={name}
          className="absolute -bottom-5 left-4 h-12 w-12 rounded-full border-2 border-card object-cover"
        />
      </div>
      <div className="px-4 pt-7 pb-4">
        <p className="text-base font-bold text-foreground">{name}</p>
        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
            {members}
          </span>
          <button className="rounded-full bg-primary px-5 py-1 text-xs font-semibold text-primary-foreground">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
