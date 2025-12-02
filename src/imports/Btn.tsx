function IconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#373737] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#373737] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 117</p>
      </div>
    </div>
  );
}

export default function Btn() {
  return (
    <div className="bg-[#32a866] opacity-[0.32] relative rounded-[1000px] size-full" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#32a866] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Comprar</p>
          <Retorno />
        </div>
      </div>
    </div>
  );
}