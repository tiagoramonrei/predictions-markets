import svgPaths from "./svg-1t3nytdreg";

function IconOk() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="iconOk">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconOk">
            <rect fill="var(--fill-0, white)" height="28" rx="14" width="28" />
            <path clipRule="evenodd" d={svgPaths.pca66000} fill="var(--fill-0, #32A866)" fillRule="evenodd" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Escolha() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="escolha">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">Bad Bunny</p>
      </div>
    </div>
  );
}

function SimNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">Sim</p>
      </div>
    </div>
  );
}

function Titulo() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="titulo">
      <IconOk />
      <Escolha />
      <SimNao />
    </div>
  );
}

function IconFechar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconFechar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconFechar">
          <g id="Path"></g>
          <path d={svgPaths.p14beaa80} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p35d38c80} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="header">
      <Titulo />
      <IconFechar />
    </div>
  );
}

function Pergunta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="pergunta">
      <div className="-webkit-box basis-0 flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.2]">Quem será o artista mais popular no Spotify este ano?</p>
      </div>
    </div>
  );
}

function IconSeta() {
  return (
    <div className="h-[10px] relative w-[14px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
          <g id="iconSeta">
            <path d="M14.75 5.75H0.75" id="iconSeta_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.75 10.7502L14.75 5.75024" id="iconSeta_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M9.75 0.75L14.75 5.75" id="iconSeta_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">111,1 cotas</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">R$94,44</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre">Vendeu</p>
      </div>
      <Retorno />
    </div>
  );
}

export default function OrderSucess() {
  return (
    <div className="bg-[#19954f] relative rounded-[8px] size-full" data-name="orderSucess">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[12px] relative size-full">
          <Header />
          <Pergunta />
          <Footer />
        </div>
      </div>
    </div>
  );
}