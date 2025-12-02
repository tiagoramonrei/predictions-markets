import svgPaths from "./svg-n7thraeaen";

function Icone() {
  return (
    <div className="h-[24px] relative shrink-0 w-[35.811px]" data-name="icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 24">
        <g id="icone">
          <path d={svgPaths.p3276b700} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function LogoRei() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="logoRei">
      <Icone />
    </div>
  );
}

function TxtSaldo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-none not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre" data-name="txt-saldo">
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 font-bold">Portfólio</p>
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 font-bold">R$3.400</p>
    </div>
  );
}

function TxtCoroas() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start justify-center pl-[8px] pr-0 py-0 relative shrink-0" data-name="txt-coroas">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.32)] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre font-bold">Saldo</p>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre font-bold">R$240,90</p>
    </div>
  );
}

function SaldoCoroas() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="saldo/coroas">
      <TxtSaldo />
      <TxtCoroas />
    </div>
  );
}

function IconDeposito() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconDeposito">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconDeposito">
          <g id="Path"></g>
          <path d="M11.9896 8.97492V8.00008" id="Path_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M11.9896 15V16" id="Path_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.pda13940} id="Path_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p1e071c8} id="Path_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.p12b07380} id="Path_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M17.6002 15.6L17.6002 20.6" id="Path_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function BaseDeposito() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0 w-[40px]" data-name="baseDeposito">
      <IconDeposito />
    </div>
  );
}

function IconMenu() {
  return (
    <div className="relative shrink-0 size-[24.01px]" data-name="iconMenu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="iconMenu">
          <path d="M5.50276 12.0052H18.5078" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M5.50276 16.0068H18.5078" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M5.50239 8.0035H18.5075" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <g id="Rectangle"></g>
        </g>
      </svg>
    </div>
  );
}

function BaseMenu() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0 size-[40px]" data-name="baseMenu">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
      <IconMenu />
    </div>
  );
}

function Botoes() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="botoes">
      <BaseDeposito />
      <BaseMenu />
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="btns">
      <SaldoCoroas />
      <Botoes />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="content">
      <LogoRei />
      <Btns />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-neutral-900 relative w-full" data-name="header">
      <div className="w-full">
        <div className="box-border content-stretch flex gap-[8px] items-start p-[20px] pb-[4px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}
