import imgImgPergunta from "figma:asset/a2b24a8fb5ea40a4ed76866da12ed2a00f072ba4.png";

function Card() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">
        <p className="leading-[1.2]">Quem será o artista mais popular no Spotify este ano?</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 2.234.345 volume</p>
      </div>
    </div>
  );
}

export default function CardHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgImgPergunta} />
      </div>
      <Card />
    </div>
  );
}