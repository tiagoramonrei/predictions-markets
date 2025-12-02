import svgPaths from "./svg-22j31omhh8";

function CircleLegenda() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="circleLegenda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="circleLegenda">
          <circle cx="4" cy="6" fill="var(--fill-0, #FF812E)" id="legenda" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Txt() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="txt">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3]">
        <p className="leading-none text-nowrap whitespace-pre">Bad Bunny</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-none text-nowrap whitespace-pre">83%</p>
      </div>
    </div>
  );
}

function NomeLegenda() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-start pl-0 pr-[12px] py-0 relative shrink-0" data-name="nomeLegenda">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <CircleLegenda />
      <Txt />
    </div>
  );
}

function CircleLegenda1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="circleLegenda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="circleLegenda">
          <circle cx="4" cy="6" fill="var(--fill-0, #87C0FF)" id="legenda" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Txt1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="txt">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3]">
        <p className="leading-none text-nowrap whitespace-pre">Taylor Swift</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-none text-nowrap whitespace-pre">8%</p>
      </div>
    </div>
  );
}

function NomeLegenda1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-start pl-0 pr-[12px] py-0 relative shrink-0" data-name="nomeLegenda">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <CircleLegenda1 />
      <Txt1 />
    </div>
  );
}

function CircleLegenda2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[8px]" data-name="circleLegenda">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
        <g id="circleLegenda">
          <circle cx="4" cy="6" fill="var(--fill-0, #FEC502)" id="legenda" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Txt2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="txt">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3]">
        <p className="leading-none text-nowrap whitespace-pre">Bruno Mars</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-white">
        <p className="leading-none text-nowrap whitespace-pre">3%</p>
      </div>
    </div>
  );
}

function NomeLegenda2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="nomeLegenda">
      <CircleLegenda2 />
      <Txt2 />
    </div>
  );
}

function NomesLegenda() {
  return (
    <div className="relative shrink-0 w-full" data-name="nomesLegenda">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start pb-[20px] pt-0 px-[20px] relative w-full">
          <NomeLegenda />
          <NomeLegenda1 />
          <NomeLegenda2 />
        </div>
      </div>
    </div>
  );
}

function LinhaBase() {
  return (
    <div className="absolute contents left-0 top-[15px]" data-name="linhaBase">
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[19px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">100%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[59px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">80%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[99px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">60%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[139px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">40%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[179px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">20%</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] right-[16px] text-[#e3e3e3] text-[8px] text-nowrap text-right top-[219px] translate-y-[-50%]">
        <p className="leading-none whitespace-pre">0%</p>
      </div>
      <div className="absolute h-0 left-0 top-[20px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[60px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[100px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[140px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[180px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[220px] w-[331px]" data-name="lineDash">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineDash" stroke="var(--stroke-0, #242424)" strokeDasharray="4 4" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[236px] w-[331px]" data-name="lineBase">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331 1">
            <line id="lineBase" stroke="var(--stroke-0, #242424)" x2="331" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChipGrafico1() {
  return (
    <div className="absolute bg-[#87c0ff] box-border content-stretch flex gap-[4px] items-center left-[171px] px-[4px] py-[2px] rounded-[4px] top-[196px]" data-name="chipGrafico3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-black text-nowrap">
        <p className="leading-none whitespace-pre">Taylor Swift 8%</p>
      </div>
    </div>
  );
}

function ChipGrafico() {
  return (
    <div className="absolute bg-[#ff812e] box-border content-stretch flex gap-[4px] items-center left-[171px] px-[4px] py-[2px] rounded-[4px] top-[36px]" data-name="chipGrafico2">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-black text-nowrap">
        <p className="leading-none whitespace-pre">Bad Bunny 83%</p>
      </div>
    </div>
  );
}

function ChipGrafico2() {
  return (
    <div className="absolute bg-[#fec502] box-border content-stretch flex gap-[4px] items-center left-[171px] px-[4px] py-[2px] rounded-[4px] top-[210px]" data-name="chipGrafico3">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-black text-nowrap">
        <p className="leading-none whitespace-pre">Bruno Mars 3%</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[171px] top-0" data-name="data">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[8px] text-nowrap">
        <p className="leading-none whitespace-pre">Out 28, 2025</p>
      </div>
    </div>
  );
}

function LinhaGrafico() {
  return (
    <div className="absolute contents left-[2.5px] top-0" data-name="linhaGrafico">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[163px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "236", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[236px]" data-name="lineEscolha">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 1">
                <line id="lineEscolha" stroke="var(--stroke-0, #242424)" x2="236" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[70px] items-center justify-center left-[2.5px] top-[138px] w-[328px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[70px] relative w-[328px]" data-name="lineGrafico1-gray">
            <div className="absolute inset-[-1.32%_-0.3%_-0.19%_-0.3%]" style={{ "--stroke-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 72">
                <path d={svgPaths.p2fb5e200} id="lineGrafico1-gray" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[70px] items-center justify-center left-[2.5px] top-[138px] w-[161px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[70px] relative w-[161px]" data-name="lineGrafico1">
            <div className="absolute inset-[0.19%_-0.62%_-0.19%_-0.62%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 70">
                <path d={svgPaths.p15fbb380} id="lineGrafico1" stroke="var(--stroke-0, #87C0FF)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[159px] size-[8px] top-[200px]" data-name="circleGrafico1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #87C0FF)" id="circleGrafico1" r="4" />
        </svg>
      </div>
      <div className="absolute h-[78px] left-[2.5px] top-[39px] w-[328px]" data-name="lineGrafico2-gray">
        <div className="absolute inset-[-1.28%_-0.3%]" style={{ "--stroke-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 80">
            <path d={svgPaths.p153ef00} id="lineGrafico2-gray" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[78px] left-[2.5px] top-[39px] w-[161px]" data-name="lineGrafico2">
        <div className="absolute inset-[0.2%_-0.62%_-1.28%_-0.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 79">
            <path d={svgPaths.p1a4bfc00} id="lineGrafico2" stroke="var(--stroke-0, #FF812E)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[159px] size-[8px] top-[40px]" data-name="circleGrafico2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FF812E)" id="circleGrafico2" r="4" />
        </svg>
      </div>
      <div className="absolute h-[16px] left-[2.5px] top-[201px] w-[328px]" data-name="lineGrafico3-gray">
        <div className="absolute inset-[-3.25%_-0.3%_-6.25%_-0.3%]" style={{ "--stroke-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 18">
            <path d={svgPaths.p126db600} id="lineGrafico3-gray" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[16px] left-[2.5px] top-[201px] w-[161px]" data-name="lineGrafico3">
        <div className="absolute inset-[-3.25%_-0.62%_-6.25%_-0.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 18">
            <path d={svgPaths.p270c1540} id="lineGrafico3" stroke="var(--stroke-0, #FEC502)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[159px] size-[8px] top-[210px]" data-name="circleGrafico3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #FEC502)" id="circleGrafico3" r="4" />
        </svg>
      </div>
      <ChipGrafico1 />
      <ChipGrafico />
      <ChipGrafico2 />
      <Data />
    </div>
  );
}

function LegendaMes() {
  return (
    <div className="absolute content-stretch flex font-['DM_Sans:Regular',sans-serif] items-center justify-between leading-[0] left-0 not-italic text-[#e3e3e3] text-[10px] text-center top-[244px] w-[331px]" data-name="legendaMes">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-none">Out</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-none">Nov</p>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 hora</p>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 dia</p>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 semana</p>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">1 mês</p>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
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
    <div className="box-border content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="chip">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <BaseFiltro />
    </div>
  );
}

function Filtros() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[20px] py-0 top-[278px] w-[375px]" data-name="filtros">
      <FiltroPeriodo />
      <Chip5 />
    </div>
  );
}

function Grafico() {
  return (
    <div className="h-[298px] relative shrink-0 w-[375px]" data-name="grafico">
      <LinhaBase />
      <LinhaGrafico />
      <LegendaMes />
      <Filtros />
    </div>
  );
}

export default function GraficoEscolha() {
  return (
    <div className="bg-neutral-900 content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="graficoEscolha">
      <NomesLegenda />
      <Grafico />
    </div>
  );
}