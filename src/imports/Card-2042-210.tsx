import svgPaths from "./svg-4dubs06unj";
import imgImgLider from "figma:asset/6ede92b8313ee860090f8b0372e8bb27cd58e03a.png";
import imgImagem from "figma:asset/0cc26368f4fe88dee71ab4a2abf4b8c4e70f111f.png";
import imgImagem1 from "figma:asset/e3ee253053ff6e519092909b5742bc97fe169585.png";

function Pergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[199px]" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2]">Quem será o próximo líder a deixar o poder em 2025?</p>
      </div>
    </div>
  );
}

function IconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={svgPaths.p23f200} fillRule="evenodd" id="favorito" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[88px]" data-name="imgLider">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLider} />
      </div>
      <Pergunta />
      <IconFavorito />
    </div>
  );
}

function Escolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Nenhum</p>
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
        <p className="leading-[1.2] whitespace-pre">Maduro - Venezuela</p>
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
        <p className="leading-none whitespace-pre">Politica</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Único</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$2.234.345 vol.</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mais 6</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq />
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