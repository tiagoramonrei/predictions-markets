import svgPaths from "./svg-vrudki1plq";
import imgImagem from "figma:asset/b8557be30a11c35e72c3a4ac1a0fb0eb28f9c419.png";

function IconReplace() {
  return (
    <div className="h-[8px] relative w-[11.142px]" data-name="iconReplace">
      <div className="absolute inset-[-9.37%_-6.73%]">
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
      <div className="flex h-[11.142px] items-center justify-center relative shrink-0 w-[8px]" style={{ "--transform-inner-width": "11.140625", "--transform-inner-height": "8" } as React.CSSProperties}>
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
        <p className="leading-none text-nowrap whitespace-pre">Comprou com chance 90%</p>
      </div>
    </div>
  );
}

function Porcentagem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="porcentagem">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">111,1</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
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
    <div className="basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px not-italic opacity-40 px-0 py-[12px] relative shrink-0 text-nowrap text-white whitespace-pre" data-name="txt">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[52px] relative shrink-0 text-[48px]">0</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px]">cotas</p>
    </div>
  );
}

function Valor() {
  return (
    <div className="relative shrink-0 w-full" data-name="valor">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[20px] py-0 relative w-full">
          <Txt />
        </div>
      </div>
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="baseValor">
      <Valor />
    </div>
  );
}

function Valores() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">25%</p>
        </div>
      </div>
    </div>
  );
}

function Valores1() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">50%</p>
        </div>
      </div>
    </div>
  );
}

function Valores2() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">75%</p>
        </div>
      </div>
    </div>
  );
}

function Valores3() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Max</p>
        </div>
      </div>
    </div>
  );
}

function Valor1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="valor">
      <Valores />
      <Valores1 />
      <Valores2 />
      <Valores3 />
    </div>
  );
}

function BaseValor1() {
  return (
    <div className="relative shrink-0 w-full" data-name="baseValor">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] py-0 relative w-full">
          <Valor1 />
        </div>
      </div>
    </div>
  );
}

function Tecla() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Tecla1() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Tecla2() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Tecla3() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Tecla4() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Tecla5() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">6</p>
    </div>
  );
}

function Tecla6() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">7</p>
    </div>
  );
}

function Tecla7() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">8</p>
    </div>
  );
}

function Tecla8() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">9</p>
    </div>
  );
}

function Tecla9() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">0</p>
    </div>
  );
}

function Tecla10() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[106.333px]" data-name="tecla">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">,</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p1b9f2bc0} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.256" />
          <path d={svgPaths.p1c471d00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25714" />
          <path clipRule="evenodd" d={svgPaths.p39f1d880} fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25714" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialBackspaceDeleteButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/backspace-delete-button">
      <Group1 />
    </div>
  );
}

function Tecla11() {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[106.333px]" data-name="tecla">
      <InterfaceEssentialBackspaceDeleteButton />
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="numbers">
      <Tecla />
      <Tecla1 />
      <Tecla2 />
      <Tecla3 />
      <Tecla4 />
      <Tecla5 />
      <Tecla6 />
      <Tecla7 />
      <Tecla8 />
      <Tecla9 />
      <Tecla10 />
      <Tecla11 />
    </div>
  );
}

function Teclado() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="teclado">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
          <Numbers />
        </div>
      </div>
    </div>
  );
}

function BaseTeclado() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="baseTeclado">
      <Teclado />
    </div>
  );
}

function BaseContent() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <BaseEscolha />
      <BaseValor />
      <BaseValor1 />
      <BaseTeclado />
    </div>
  );
}

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

function Btn() {
  return (
    <div className="bg-[#32a866] h-[48px] opacity-[0.32] relative rounded-[1000px] shrink-0 w-full" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#32a866] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-between px-[24px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Vender</p>
          <Info />
        </div>
      </div>
    </div>
  );
}

function BaseFooter() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="baseFooter">
      <div aria-hidden="true" className="absolute border-[#242424] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[20px] relative w-full">
          <Btn />
        </div>
      </div>
    </div>
  );
}

export default function OrderBsOpc() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="orderBS-opc02">
      <BaseHeader />
      <BaseTab />
      <BaseContent />
      <BaseFooter />
    </div>
  );
}