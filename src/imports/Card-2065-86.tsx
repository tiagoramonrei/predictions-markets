import imgIconBonus1 from "figma:asset/98dcb13e337d143c0ce1c7482337d8f4e5e35474.png";

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[303px]">
        <p className="leading-[1.2]">Movimentação financeira</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Bônus</p>
      </div>
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text />
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre">+R$10</p>
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
      <div className="relative shrink-0 size-[24px]" data-name="iconBonus 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBonus1} />
      </div>
      <BaseEscolha />
      <BaseValor />
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
        </div>
      </div>
    </div>
  );
}