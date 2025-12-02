import svgPaths from "./svg-xqlcm1oucz";
import imgImagem from "figma:asset/9f461ed5c177aabb0fc37cdea7a985be5dd89d45.png";

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[1.2]">Quem será o próximo técnico demitido na Série A?</p>
      </div>
    </div>
  );
}

function IconSetaAccordion() {
  return (
    <div className="relative size-[20px]" data-name="iconSetaAccordion">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="iconSetaAccordion">
            <rect fill="var(--fill-0, #373737)" height="20" rx="10" width="20" />
            <path d={svgPaths.p52c2700} id="iconSetaAccordion_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <Text />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSetaAccordion />
        </div>
      </div>
    </div>
  );
}

function Escolha() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="escolha">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Vojvoda - Santos</p>
      </div>
    </div>
  );
}

function SimNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Sim</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <Escolha />
      <SimNao />
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text1 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Comprou por R$400</p>
      </div>
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre">R$422,22</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">+R$22,22 (5,55%)</p>
      </div>
    </div>
  );
}

function HeaderOutcome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem} width="24" />
      </div>
      <BaseEscolha />
      <BaseValor />
    </div>
  );
}

function Valor() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">444,44</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans_Symbols:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[1.2] whitespace-pre">90 →95%</p>
      </div>
      <div className="h-[6px] relative shrink-0 w-[7px]" data-name="subiu">
        <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(25, 149, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3615f2f0} fill="var(--fill-0, #19954F)" id="subiu" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Valor1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Chance</p>
      </div>
      <Frame />
    </div>
  );
}

function Valor2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno Potencial</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">R$444,44</p>
      </div>
    </div>
  );
}

function Tabela() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="tabela">
      <Valor />
      <Valor1 />
      <Valor2 />
    </div>
  );
}

function Valores() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[28px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[32px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Vender</p>
        </div>
      </div>
    </div>
  );
}

function Valores1() {
  return (
    <div className="basis-0 bg-[#242424] grow h-[28px] min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="valores">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[32px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Ver mercado</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Valores />
      <Valores1 />
    </div>
  );
}

export default function CardComprou() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="cardComprou">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative size-full">
          <Header />
          <HeaderOutcome />
          <Tabela />
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
            <p className="leading-none whitespace-pre">Mercado fecha: 31/12/2025 - 23:59</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}