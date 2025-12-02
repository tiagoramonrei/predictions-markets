import svgPaths from "./svg-sf6w7dhjrz";

function IconSeta() {
  return (
    <div className="h-[6.666px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%_-7.51%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">111,1 cotas</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">R$94,44</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="info">
      <Retorno />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Chance atual 85%</p>
      </div>
    </div>
  );
}

export default function BoxInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full" data-name="boxInfo">
      <Info />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[9px] relative w-[10.5px]" data-name="desceu">
            <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(173, 9, 36, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8">
                <path d={svgPaths.p79d1d80} fill="var(--fill-0, #AD0924)" id="desceu" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}