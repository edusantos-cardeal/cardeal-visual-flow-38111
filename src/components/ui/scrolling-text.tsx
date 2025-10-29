export const ScrollingText = ({
  text
}: {
  text: string;
}) => {
  return <div className="relative w-full overflow-hidden py-8 border-y border-border">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-scroll whitespace-nowrap">
        {Array.from({
        length: 10
      }).map((_, i) => <span key={i} className="text-foreground mx-8 font-normal text-2xl">
            {text}
          </span>)}
      </div>
    </div>;
};