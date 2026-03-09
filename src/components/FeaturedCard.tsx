interface FeaturedCardProps {
  coverImage: string;
  avatarImage: string;
  name: string;
  description: string;
  members: string;
}

const FeaturedCard = ({ coverImage, avatarImage, name, description, members }: FeaturedCardProps) => {
  return (
    <article className="flex w-[196px] shrink-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
      {/* Header with cover and avatar */}
      <div className="relative h-[110px] w-full overflow-hidden rounded-t-lg">
        <img src={coverImage} alt="" className="h-full w-full object-cover bg-grey-300" />
        <img
          src={avatarImage}
          alt=""
          className="absolute left-[15px] top-[78px] h-10 w-10 rounded-full border border-card object-cover bg-card"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-1 px-4 pt-5 pb-3">
        <h3 className="text-base font-semibold leading-[1.5] text-foreground">{name}</h3>
        <p className="text-xs leading-[1.5] text-muted-foreground">{description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-2xl border border-primary bg-card py-1 px-3 text-xs font-semibold leading-[1.5] text-foreground">
            {members}
          </span>
          <button className="rounded-2xl bg-primary py-1 px-3 text-xs font-semibold leading-[1.5] text-primary-foreground">
            Entrar
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;
