export default function Porcentagem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-center leading-[0] not-italic relative size-full text-nowrap" data-name="porcentagem">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">85%</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
    </div>
  );
}