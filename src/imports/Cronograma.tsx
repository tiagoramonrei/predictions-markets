import svgPaths from "./svg-t4gwuj7mgt";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="bg-[#1e1e1e] shrink-0 size-[20px]" data-name="icon" />
      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.4]">Cronograma e pagamentos</p>
      </div>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconCheck">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconCheck">
          <path clipRule="evenodd" d={svgPaths.p2ce62200} fill="var(--fill-0, #32A866)" fillRule="evenodd" id="icon" />
          <path clipRule="evenodd" d={svgPaths.p6ecc00} fill="var(--fill-0, white)" fillRule="evenodd" id="icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Txt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Regular',sans-serif] grow items-center justify-between leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-nowrap" data-name="txt">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Mercado Aberto</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">14/11/2025 - 10:00</p>
      </div>
    </div>
  );
}

function CronogramaText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cronogramaText">
      <IconCheck />
      <Txt />
    </div>
  );
}

function Line() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
        <g id="line">
          <path d={svgPaths.p1b90f0} fill="var(--fill-0, #32A866)" id="line_2" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="circle">
          <circle cx="10" cy="10" fill="var(--fill-0, #242424)" id="circle_2" r="7" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Txt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Regular',sans-serif] grow items-center justify-between leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-nowrap" data-name="txt">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Fechamento do Mercado</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">31/12/2025 - 23:59</p>
      </div>
    </div>
  );
}

function CronogramaText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cronogramaText">
      <Circle />
      <Txt1 />
    </div>
  );
}

function Line1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20px]" data-name="line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
        <g id="line">
          <path d={svgPaths.p1b90f0} fill="var(--fill-0, #242424)" id="line_2" />
        </g>
      </svg>
    </div>
  );
}

function Circle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="circle">
          <circle cx="10" cy="10" fill="var(--fill-0, #242424)" id="circle_2" r="7" stroke="var(--stroke-0, #171717)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Txt2() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Regular',sans-serif] grow items-center justify-between leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-nowrap" data-name="txt">
      <div className="flex flex-col justify-center relative shrink-0 text-[12px]">
        <p className="leading-[1.4] text-nowrap whitespace-pre">Pagamento Projetado</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">01/01/2026 - 10:00</p>
      </div>
    </div>
  );
}

function CronogramaText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="cronogramaText">
      <Circle1 />
      <Txt2 />
    </div>
  );
}

function IdEvento() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] pb-0 pt-[24px] px-0 relative shrink-0" data-name="idEvento">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">ID Evento: REI4522#</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="text">
      <CronogramaText />
      <Line />
      <CronogramaText1 />
      <Line1 />
      <CronogramaText2 />
      <IdEvento />
    </div>
  );
}

export default function Cronograma() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="cronograma">
      <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
        <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
          <p className="leading-[1.4]">Cronograma e pagamentos</p>
        </div>
      </div>
      <Text />
    </div>
  );
}