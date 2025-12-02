import imgImgPergunta from "figma:asset/ba0d593222b68fd51f04625ff6e359ca9c5e01d5.png";

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-white w-[min-content]">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden text-nowrap">ARC Raiders será o jogo do ano na The Game Awards 25?</p>
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
          <div className="relative rounded-[100px] shrink-0 size-[48px]" data-name="imgPergunta">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImgPergunta} />
          </div>
          <Text />
          <Porcentagem />
        </div>
      </div>
    </div>
  );
}

export default function BaseEscolha() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="baseEscolha">
      <HeaderOutcome />
    </div>
  );
}