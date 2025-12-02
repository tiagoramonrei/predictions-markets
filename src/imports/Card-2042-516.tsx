import svgPaths from "./svg-dtkqxljvic";
import imgImgFelipe from "figma:asset/896a962ce24595c3bdf6eb13da4868ceb0e34ed7.png";

function Pergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[199px]" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2]">Felipe Neto lançará partido político ou filiação oficial até 2026?</p>
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
      <div className="relative shrink-0 size-[88px]" data-name="imgFelipe">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgFelipe} />
      </div>
      <Pergunta />
      <IconFavorito />
    </div>
  );
}

function Txt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">35%</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt />
        </div>
      </div>
    </div>
  );
}

function IconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button />
      <Retorno />
    </div>
  );
}

function Txt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">65%</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt1 />
        </div>
      </div>
    </div>
  );
}

function IconSeta1() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta1 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button1 />
      <Retorno1 />
    </div>
  );
}

function Botoes() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn />
      <Btn1 />
    </div>
  );
}

function CatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esportes</p>
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
          <Botoes />
          <Footer />
        </div>
      </div>
    </div>
  );
}