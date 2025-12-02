import svgPaths from "./svg-9pugc0bpft";

function Chip() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 h.</p>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 dia</p>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 sem.</p>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 mês</p>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#164c2e] box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border-2 border-[#32a866] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Todos</p>
      </div>
    </div>
  );
}

function FiltroPeriodo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="filtroPeriodo">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
      <Chip4 />
    </div>
  );
}

function BaseFiltro() {
  return (
    <div className="h-[9.667px] relative shrink-0 w-[12px]" data-name="baseFiltro">
      <div className="absolute inset-[-7.76%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
          <g id="baseFiltro">
            <path d={svgPaths.p36413a40} id="filtro" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M12.0833 2.74996H4.75" id="filtro_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p31e36b80} id="filtro_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M1.41667 8.41665H8.75" id="filtro_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Chip5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[12px] py-[7px] relative rounded-[100px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <BaseFiltro />
    </div>
  );
}

export default function Filtros() {
  return (
    <div className="relative size-full" data-name="filtros">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[20px] py-0 relative size-full">
          <FiltroPeriodo />
          <Chip5 />
        </div>
      </div>
    </div>
  );
}