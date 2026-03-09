interface CommunityCardProps {
  image: string;
  name: string;
  members: string;
}

const CommunityCard = ({ image, name, members }: CommunityCardProps) => {
  return (
    <article className="flex w-[162px] min-h-[72px] items-center gap-3 rounded-lg border border-grey-200 bg-card px-3.5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <img
        src={image}
        alt=""
        className="h-12 w-12 shrink-0 rounded-full border border-card object-cover bg-grey-200"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-[15px] font-semibold leading-[1.4] text-foreground">{name}</span>
        <span className="text-xs leading-[1.4] text-muted-foreground">{members}</span>
      </div>
    </article>
  );
};

export default CommunityCard;
