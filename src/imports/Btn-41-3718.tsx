export default function Btn() {
  return (
    <div className="bg-[#32a866] opacity-[0.32] relative rounded-[1000px] size-full" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#32a866] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[24px] py-0 relative size-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Comprar</p>
        </div>
      </div>
    </div>
  );
}
