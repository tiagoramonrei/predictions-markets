import imgIconSetaAccordion from "figma:asset/c8d624a4a89d9ff6206d8750ea5c10a380cc8626.png";
import imgImagem from "figma:asset/9f461ed5c177aabb0fc37cdea7a985be5dd89d45.png";
import imgIconSetaIrMercado from "figma:asset/e49bc6748ca1004de584dd1aac26aa2efb00e9ed.png";

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
    <div className="bg-[#373737] content-stretch flex gap-[9px] items-center justify-center relative rounded-[1000px] size-[20px]" data-name="iconSetaAccordion">
      <div className="h-[5px] relative shrink-0 w-[8.333px]" data-name="iconSetaAccordion">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconSetaAccordion} />
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
        <p className="leading-none whitespace-pre">Comprou</p>
      </div>
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre">-R$400</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
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
        <p className="leading-[1.2] text-nowrap whitespace-pre">615,38</p>
      </div>
    </div>
  );
}

function Valor1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">90%</p>
      </div>
    </div>
  );
}

function Valor2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Pode ganhar</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">R$615</p>
      </div>
    </div>
  );
}

function IconVerMercado() {
  return (
    <div className="bg-[#242424] content-stretch flex gap-[12.6px] items-center justify-center relative rounded-[1400px] size-[28px]" data-name="iconVerMercado">
      <div className="flex h-[7px] items-center justify-center relative shrink-0 w-[12px]" style={{ "--transform-inner-width": "7", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <div className="h-[12px] relative w-[7px]" data-name="iconSetaIrMercado">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconSetaIrMercado} />
          </div>
        </div>
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
      <div className="flex items-center justify-center relative shrink-0 size-[28px]" style={{ "--transform-inner-width": "28", "--transform-inner-height": "28" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <IconVerMercado />
        </div>
      </div>
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
        </div>
      </div>
    </div>
  );
}