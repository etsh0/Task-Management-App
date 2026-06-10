export default function Role({
  text,
  owner = false,
}: {
  text: string;
  owner?: boolean;
}) {
  return (
    <>
      <div
        className={`text-[10px] text-center rounded-xl py-1 px-3 uppercase w-fit ${owner ? 'bg-primary text-white' : 'bg-surface-highest text-[#51617E]'}`}
      >
        {text}
      </div>
    </>
  );
}
