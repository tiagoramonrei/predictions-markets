import imgLogoApostas1 from "figma:asset/99eed0bd90191b97f64d164157e4a657e339be39.png";
import imgLogoCassino1 from "figma:asset/36f76a8094ebf23c2ec64b34692c326ece7a0f87.png";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.4]">Não deixe de conhecer</p>
      </div>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="titulo">
      <div aria-hidden="true" className="absolute border-[#373737] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[40px]" data-name="logoApostas 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoApostas1} />
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[1.2] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
        <p className="mb-0">Apostas</p>
        <p>Esportivas</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-[#242424] grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Titulo1 />
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[12px] w-full">
            <p className="leading-none">Os melhores esportes e campeonatos para você apostar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="titulo">
      <div aria-hidden="true" className="absolute border-[#373737] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[40px]" data-name="logoCassino 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoCassino1} />
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[1.2] min-w-full not-italic relative shrink-0 text-[14px] text-white w-[min-content]">
        <p className="mb-0">{`Jogos `}</p>
        <p>de Cassino</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-[#242424] grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
          <Titulo2 />
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[12px] w-full">
            <p className="leading-none">Slots, Roleta AoVivo, Crash Game e muito outros jogos estão te esperando.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApostasCassino() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="apostas/cassino">
      <Card />
      <Card1 />
    </div>
  );
}

export default function ApostasAndCassino() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="apostasAndCassino">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
          <Titulo />
          <ApostasCassino />
        </div>
      </div>
    </div>
  );
}