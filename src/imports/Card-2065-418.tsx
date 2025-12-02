import imgIconSetaAccordion from "figma:asset/c8d624a4a89d9ff6206d8750ea5c10a380cc8626.png";
import imgImgPergunta from "figma:asset/1d8214c297d60a5ff93eb828dc94b213f4bfa048.png";
import imgImgPergunta1 from "figma:asset/798f2785013feeb0c0248810dd266517434e3db2.png";

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-nowrap text-white w-full">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden">Casimiro estreará programa semanal fixo em TV aberta até 2026?</p>
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

function Img() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="img">
      <div className="absolute left-[-17.45px] size-[61.636px] top-[-1.91px]" data-name="imgPergunta">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImgPergunta} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImgPergunta1} />
        </div>
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
      <SimNao />
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text1 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Liquidado - Perdeu</p>
      </div>
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre">-R$200</p>
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
      <Img />
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
        <p className="leading-[1.2] text-nowrap whitespace-pre">235,3</p>
      </div>
    </div>
  );
}

function Valor1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Valor</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">R$200</p>
      </div>
    </div>
  );
}

function Valor2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Tabela() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="tabela">
      <Valor />
      <Valor1 />
      <Valor2 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
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