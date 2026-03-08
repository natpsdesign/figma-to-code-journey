interface CommunityCardProps {
  image: string;
  name: string;
  members: string;
}

const CommunityCard = ({ image, name, members }: CommunityCardProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 min-w-[170px]">
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{members}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
