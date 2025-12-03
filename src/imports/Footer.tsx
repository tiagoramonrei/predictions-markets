import svgPaths from "./svg-fw2buucxl5";
import imgGetItOnGooglePlayBadgeWebColorPortugueseBr1 from "figma:asset/12be12a52911f261f7711148aceffb2d4d5d93c4.png";
import SocialMediaIcons from "./SocialMedia";

function Links() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" data-name="links">
      <p className="relative shrink-0">Home</p>
      <p className="relative shrink-0">Cadastro</p>
      <p className="relative shrink-0">Login</p>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start min-h-px min-w-px relative w-[50vw]" data-name="btns">
      <p className="leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Geral</p>
      <Links />
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] gap-[16px] items-start leading-[1.4] not-italic relative shrink-0 text-[12px] text-white" data-name="links">
      <p className="relative shrink-0 text-nowrap whitespace-pre">Termo de uso</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Privacidade</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Dúvidas</p>
    </div>
  );
}

function Btns1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="btns">
      <p className="leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Legal</p>
      <Links1 />
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[335px]" data-name="base">
      <Btns />
      <Btns1 />
    </div>
  );
}

function IconHand() {
  return (
    <div className="absolute inset-[3.33%_4.17%_5%_4.17%]" data-name="icon-hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="icon-hand">
          <path d={svgPaths.p38dc7780} fill="var(--fill-0, #20D490)" id="hand" />
          <rect fill="var(--fill-0, #20D490)" height="3.3" id="dedos" rx="1.65" width="12.1" x="8.8" y="8.80005" />
          <rect fill="var(--fill-0, #20D490)" height="3.3" id="dedos_2" rx="1.65" width="12.1" x="9.9" y="12.1" />
          <rect fill="var(--fill-0, #20D490)" height="3.3" id="dedos_3" rx="1.65" width="12.1" x="8.8" y="15.4001" />
          <rect fill="var(--fill-0, #20D490)" height="3.3" id="dedos_4" rx="1.65" width="12.1" x="7.7" y="18.7" />
          <path d={svgPaths.p331f9780} fill="var(--fill-0, #3A7B4B)" id="hand_2" />
          <path d={svgPaths.p3a122b70} fill="var(--fill-0, #2D5F3A)" id="hand_3" opacity="0.46" />
        </g>
      </svg>
    </div>
  );
}

function Component22Icons() {
  return (
    <div className="[grid-area:1_/_1] ml-[8px] mt-[8px] relative size-[24px]" data-name="22-Icons">
      <IconHand />
    </div>
  );
}

function IconAutorizado() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="icon-autorizado">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[40px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, #1E1E1E)" id="circle" r="20" />
          </svg>
        </div>
      </div>
      <Component22Icons />
    </div>
  );
}

function Numero() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Numero">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[40px]">
        <div className="absolute inset-0" style={{ "--stroke-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" id="Ellipse 608" r="19" stroke="var(--stroke-0, #373737)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['DM_Sans:Bold',sans-serif] leading-[1.4] ml-[20px] mt-[9px] not-italic relative text-[#373737] text-[16px] text-center translate-x-[-50%] w-[40px]">18+</p>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0" data-name="icons">
      <IconAutorizado />
      <Numero />
    </div>
  );
}

function Autorizado() {
  return (
    <div className="flex flex-col gap-[8px] items-start justify-center relative w-full" data-name="autorizado">
      <Icons />
      <div className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="mb-0">O Rei do Pitaco (MMD TECNOLOGIA, ENTRETENIMENTO E MARKETING LTDA), com sede na Rua Joaquim Antunes, n° 470, Pinheiros, Município de São Paulo/SP, CEP 05.415-001, é autorizado no Brasil através da Portaria SPA/MF no. 2.091/2024, em total conformidade com as leis nacionais.</p>
        <p className="mb-0">&nbsp;</p>
        <p>É proibido utilizar recursos do Bolsa Família ou do BPC/LOAS para realizar apostas.</p>
      </div>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-white w-full">Confira nossa autorização</p>
    </div>
  );
}

function Btns2() {
  return (
    <div className="flex flex-col gap-[12px] items-start relative w-full" data-name="btns">
      <p className="leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Autorizado</p>
      <Autorizado />
    </div>
  );
}

function BotoesFooter() {
  return (
    <div className="flex flex-col gap-[24px] items-start relative w-full" data-name="botoes-footer">
      <Base />
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-center relative shrink-0" data-name="links">
      <div className="h-[32px] pointer-events-none relative rounded-[2px] shrink-0 w-[108px]" data-name="GetItOnGooglePlay_Badge_Web_color_Portuguese-BR 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[2px] size-full" src={imgGetItOnGooglePlayBadgeWebColorPortugueseBr1} />
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 rounded-[2px]" />
      </div>
    </div>
  );
}

function Autorizado1() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-start justify-between relative shrink-0" data-name="autorizado">
      <p className="leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Aplicativos do Rei</p>
      <Links2 />
    </div>
  );
}

function LogosConfianca() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[40px] relative shrink-0 w-full" data-name="logos-confianca">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <Autorizado1 />
    </div>
  );
}

function LogoReiPitacoNew() {
  return (
    <div className="h-[16px] relative shrink-0 w-[145.333px]" data-name="logo-rei-pitaco-new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 16">
        <g id="logo-rei-pitaco-new">
          <path d={svgPaths.pdf73980} fill="var(--fill-0, white)" id="letras" />
          <path d={svgPaths.p2dad1a00} fill="var(--fill-0, white)" id="letras_2" />
          <path d={svgPaths.p2b1cdf00} fill="var(--fill-0, white)" id="letras_3" />
          <path d={svgPaths.p1f40dd00} fill="var(--fill-0, white)" id="letras_4" />
          <path d={svgPaths.p3f1a5b80} fill="var(--fill-0, white)" id="letras_5" />
          <path d={svgPaths.p11a21900} fill="var(--fill-0, white)" id="letras_6" />
          <path d={svgPaths.p397fd000} fill="var(--fill-0, white)" id="letras_7" />
          <path d={svgPaths.p3632f180} fill="var(--fill-0, white)" id="letras_8" />
          <path d={svgPaths.p40188c0} fill="var(--fill-0, white)" id="letras_9" />
          <path d={svgPaths.pa463400} fill="var(--fill-0, white)" id="letras_10" />
          <path d={svgPaths.p112c6500} fill="var(--fill-0, white)" id="letras_11" />
          <path d={svgPaths.p34430a00} fill="var(--fill-0, white)" id="letras_12" />
          <path d={svgPaths.p2fae7d00} fill="var(--fill-0, white)" id="letras_13" />
          <path d={svgPaths.p1ab1b700} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="logo">
      <LogoReiPitacoNew />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="social media">
      <SocialMediaIcons />
    </div>
  );
}

function Btns3() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-center justify-between relative shrink-0 w-full" data-name="btns">
      <SocialMedia />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="footer">
      <Logo />
      <Btns3 />
    </div>
  );
}

export default function Footer1() {
  return (
    <div className="bg-neutral-900 relative w-full" data-name="footer">
      <div className="w-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-[20px] py-[40px] relative w-full">
          <BotoesFooter />
          <Footer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}