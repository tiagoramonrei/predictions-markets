import svgPaths from "./svg-vkwudybz94";
import imgImagem from "figma:asset/b8557be30a11c35e72c3a4ac1a0fb0eb28f9c419.png";

function IconReplace() {
  return (
    <div className="h-[8px] relative w-[11.143px]" data-name="iconReplace">
      <div className="absolute inset-[-9.37%_-6.73%_-9.38%_-6.73%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <g id="iconReplace">
            <path d={svgPaths.p22485500} id="iconReplace_2" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p339deb40} id="iconReplace_3" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p33faed40} id="iconReplace_4" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p1b4ada80} id="iconReplace_5" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">SIM</p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "11.140625", "--transform-inner-height": "8" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IconReplace />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p972d1e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p11ac7c00} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Titulo />
      <Icon />
    </div>
  );
}

function BaseHeader() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="baseHeader">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center relative shrink-0 w-[80px]" data-name="game">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-[14px] relative w-full">
          <Game />
        </div>
      </div>
    </div>
  );
}

function Game1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 w-[80px]" data-name="game">
      <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Vender</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="tab">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Game1 />
        </div>
      </div>
    </div>
  );
}

function BaseTab() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-start relative shrink-0 w-full" data-name="baseTab">
      <Tab />
      <Tab1 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Bad Bunny</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 234.345 volume</p>
      </div>
    </div>
  );
}

function Porcentagem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">85%</p>
      </div>
    </div>
  );
}

function HeaderOutcome() {
  return (
    <div className="relative shrink-0 w-full" data-name="headerOutcome">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
          <div className="relative shrink-0 size-[48px]" data-name="imagem">
            <img alt="" className="block max-w-none size-full" height="48" src={imgImagem} width="48" />
          </div>
          <Text />
          <Porcentagem />
        </div>
      </div>
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="baseEscolha">
      <HeaderOutcome />
    </div>
  );
}

function Txt() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start not-italic p-[20px] relative text-center text-white w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[14px] w-full">Você não possui posições nesta escolha.</p>
          <p className="font-['DM_Sans:Regular',sans-serif] leading-none relative shrink-0 text-[12px] w-full">Compre primeiro para poder vender mais tarde.</p>
        </div>
      </div>
    </div>
  );
}

function BaseTxt() {
  return (
    <div className="relative shrink-0 w-full" data-name="baseTxt">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-0 px-[20px] relative w-full">
          <Txt />
        </div>
      </div>
    </div>
  );
}

function BaseContent() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <BaseEscolha />
      <BaseTxt />
    </div>
  );
}

export default function OrderBsOpc() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="orderBS-opc02">
      <BaseHeader />
      <BaseTab />
      <BaseContent />
    </div>
  );
}