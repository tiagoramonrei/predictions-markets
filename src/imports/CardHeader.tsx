import svgPaths from "./svg-76yj887p1q";
import imgImagem from "figma:asset/735acebeb55fe5d1e1bdb442e6b8d402afc9d636.png";
import imgImagem1 from "figma:asset/79e08ded9a8bae94b7c905246e2d45c4cbf8d3e3.png";
import imgImgPergunta from "figma:asset/bc688497b76579f23b3b302970e9862ac262e20c.png";

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
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite />
    </div>
  );
}

function Escolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white w-[62px]">
        <p className="leading-[1.2]">Gemini</p>
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
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
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
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem} width="24" />
      </div>
      <BaseEscolha />
    </div>
  );
}

function Escolha2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Open Ai</p>
      </div>
    </div>
  );
}

function PorcentagemSim1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre">15%</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
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
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem1} width="24" />
      </div>
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
        <p className="leading-none whitespace-pre">Tecnologia</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="footer">
      <CatFreq />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-neutral-900 relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[inherit] w-[335px]">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[1.2]">Qual empresa terá o melhor modelo de IA até o final 25?</p>
        </div>
        <VolumeFavoritar />
        <BaseEscolha2 />
        <Footer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

export default function CardHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[253.79%] left-0 max-w-none top-[-66.67%] w-full" src={imgImgPergunta} />
        </div>
      </div>
      <Card />
    </div>
  );
}