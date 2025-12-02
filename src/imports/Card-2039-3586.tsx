import svgPaths from "./svg-t8qub42ziu";
import imgImgPergunta1 from "figma:asset/9953e982950dc7fbb131fb802ab5092cf8729af7.png";
import { imgImgPergunta } from "./svg-n2n5e";

function Img() {
  return (
    <div className="overflow-clip relative shrink-0 size-[88px]" data-name="img">
      <div className="absolute h-[157px] left-[calc(50%-0.5px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_31px] mask-size-[88px_88px] rounded-tl-[8px] rounded-tr-[8px] top-[calc(50%+3.5px)] translate-x-[-50%] translate-y-[-50%] w-[133px]" data-name="imgPergunta" style={{ maskImage: `url('${imgImgPergunta}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[119.67%] left-0 max-w-none top-[-7.04%] w-full" src={imgImgPergunta1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path clipRule="evenodd" d={svgPaths.p230af100} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediasRewardsFavorite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group />
    </div>
  );
}

function VolumeFavoritar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite />
    </div>
  );
}

function Pergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[199px]" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2]">O Bitcoin estará com o preço acima de quanto em 01 de dezembro?</p>
      </div>
      <VolumeFavoritar />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="header">
      <Img />
      <div className="flex flex-row items-center self-stretch">
        <Pergunta />
      </div>
    </div>
  );
}

function Escolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">84.000</p>
      </div>
    </div>
  );
}

function PorcentagemSim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre">85%</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <Button />
      <Button1 />
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha />
      <PorcentagemSim />
      <Botoes />
    </div>
  );
}

function Escolha1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <BaseEscolha />
    </div>
  );
}

function Escolha2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">86.000</p>
      </div>
    </div>
  );
}

function PorcentagemSim1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre">84%</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <Button2 />
      <Button3 />
    </div>
  );
}

function BaseEscolha1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha2 />
      <PorcentagemSim1 />
      <Botoes1 />
    </div>
  );
}

function Escolha3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <BaseEscolha1 />
    </div>
  );
}

function BaseEscolha2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <Escolha1 />
      <Escolha3 />
    </div>
  );
}

function CatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Finanças</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mensal</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <Header />
          <BaseEscolha2 />
          <Footer />
        </div>
      </div>
    </div>
  );
}