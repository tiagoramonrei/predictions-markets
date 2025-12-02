import svgPaths from "./svg-s5glg21btd";
import imgImgPergunta from "figma:asset/ba0d593222b68fd51f04625ff6e359ca9c5e01d5.png";
import imgImagem from "figma:asset/735acebeb55fe5d1e1bdb442e6b8d402afc9d636.png";
import imgImagem1 from "figma:asset/79e08ded9a8bae94b7c905246e2d45c4cbf8d3e3.png";
import imgImgPergunta1 from "figma:asset/bc688497b76579f23b3b302970e9862ac262e20c.png";
import imgImgPergunta2 from "figma:asset/2828559ede8afba16dbb25b42ef7170b973a7acf.png";
import imgImagem2 from "figma:asset/d56a3c4f950b59c3daf5e7e55fb9edd807afd68b.png";
import imgImagem3 from "figma:asset/092705a898191803e1925faaacb32031fe6ab00c.png";
import imgImgPergunta3 from "figma:asset/51831c4fa7459723d45a3d44a343400360f6fba3.png";

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
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite />
    </div>
  );
}

function Txt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">85%</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1e1e1e] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
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
        <p className="leading-none whitespace-pre">R$117</p>
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
      <p className="relative shrink-0 text-[#d92341] text-[16px]">15%</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1e1e1e] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
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
        <p className="leading-none whitespace-pre">R$666</p>
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
        <p className="leading-none whitespace-pre">Entretenimento</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Anual</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[1.2]">ARC Raiders será o jogo do ano na The Game Awards 25?</p>
      </div>
      <VolumeFavoritar />
      <Botoes />
      <Footer />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[199.86%] left-0 max-w-none top-[-22.66%] w-full" src={imgImgPergunta} />
        </div>
      </div>
      <Card />
    </div>
  );
}

function Group1() {
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

function SocialMediasRewardsFavorite1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group1 />
    </div>
  );
}

function VolumeFavoritar1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite1 />
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

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha />
      <PorcentagemSim />
      <Botoes1 />
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

function Button4() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <Button4 />
      <Button5 />
    </div>
  );
}

function BaseEscolha1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha2 />
      <PorcentagemSim1 />
      <Botoes2 />
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

function CatFreq1() {
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

function Footer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="footer">
      <CatFreq1 />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-neutral-900 relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[inherit] w-[335px]">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[1.2]">Qual empresa terá o melhor modelo de IA até o final 25?</p>
        </div>
        <VolumeFavoritar1 />
        <BaseEscolha2 />
        <Footer1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[253.79%] left-0 max-w-none top-[-66.67%] w-full" src={imgImgPergunta1} />
        </div>
      </div>
      <Card1 />
    </div>
  );
}

function Group2() {
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

function SocialMediasRewardsFavorite2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group2 />
    </div>
  );
}

function VolumeFavoritar2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite2 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">85%</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#1e1e1e] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt2 />
        </div>
      </div>
    </div>
  );
}

function IconSeta2() {
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

function Retorno2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta2 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button6 />
      <Retorno2 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">15%</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1e1e1e] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt3 />
        </div>
      </div>
    </div>
  );
}

function IconSeta3() {
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

function Retorno3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta3 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$666</p>
      </div>
    </div>
  );
}

function Btn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button7 />
      <Retorno3 />
    </div>
  );
}

function Botoes3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn2 />
      <Btn3 />
    </div>
  );
}

function CatFreq2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Entretenimento</p>
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

function Footer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full" data-name="footer">
      <CatFreq2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[1.2]">Bad Bunny será o artista mais popular no Spotify este ano?</p>
      </div>
      <VolumeFavoritar2 />
      <Botoes3 />
      <Footer2 />
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgImgPergunta2} />
      </div>
      <Card2 />
    </div>
  );
}

function Group3() {
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

function SocialMediasRewardsFavorite3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group3 />
    </div>
  );
}

function VolumeFavoritar3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite3 />
    </div>
  );
}

function Escolha4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Timothée Chalamet</p>
      </div>
    </div>
  );
}

function PorcentagemSim2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre">85%</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <Button8 />
      <Button9 />
    </div>
  );
}

function BaseEscolha3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha4 />
      <PorcentagemSim2 />
      <Botoes4 />
    </div>
  );
}

function Escolha5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem2} width="24" />
      </div>
      <BaseEscolha3 />
    </div>
  );
}

function Escolha6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Leonardo DiCaprio</p>
      </div>
    </div>
  );
}

function PorcentagemSim3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre">15%</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">SIM</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <Button10 />
      <Button11 />
    </div>
  );
}

function BaseEscolha4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha6 />
      <PorcentagemSim3 />
      <Botoes5 />
    </div>
  );
}

function Escolha7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem3} width="24" />
      </div>
      <BaseEscolha4 />
    </div>
  );
}

function BaseEscolha5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <Escolha5 />
      <Escolha7 />
    </div>
  );
}

function CatFreq3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Cultura</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Anual</p>
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="footer">
      <CatFreq3 />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-neutral-900 relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[335px]" data-name="card">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[inherit] w-[335px]">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
          <p className="leading-[1.2]">Quem será escolhido o melhor ator do Oscars de 2026?</p>
        </div>
        <VolumeFavoritar3 />
        <BaseEscolha5 />
        <Footer3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[191.29%] left-0 max-w-none top-[-3.6%] w-full" src={imgImgPergunta3} />
        </div>
      </div>
      <Card3 />
    </div>
  );
}

function Destaques() {
  return (
    <div className="relative shrink-0 w-full" data-name="destaques">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[20px] py-0 relative w-full">
          <CardHeader />
          <CardHeader1 />
          <CardHeader2 />
          <CardHeader3 />
        </div>
      </div>
    </div>
  );
}

function Atual() {
  return (
    <div className="h-0 relative shrink-0 w-[16px]" data-name="atual">
      <div className="absolute bottom-0 left-0 right-0 top-[-6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 6">
          <g id="atual">
            <line id="line" stroke="var(--stroke-0, #E5F7ED)" strokeLinecap="round" strokeWidth="6" x1="3" x2="13" y1="3" y2="3" />
            <line id="linePreenchido" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeWidth="6" x1="3" x2="7" y1="3" y2="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bullets() {
  return (
    <div className="relative shrink-0 w-full" data-name="bullets">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[8px] items-end px-[20px] py-0 relative w-full">
          <Atual />
          <div className="relative shrink-0 size-[6px]" data-name="circle">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(250, 250, 250, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #FAFAFA)" id="circle" opacity="0.56" r="3" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[6px]" data-name="circle">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(250, 250, 250, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #FAFAFA)" id="circle" opacity="0.56" r="3" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[6px]" data-name="circle">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(250, 250, 250, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #FAFAFA)" id="circle" opacity="0.56" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Base() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[28px] pt-0 px-0 relative size-full" data-name="base" style={{ backgroundImage: "linear-gradient(-3.28706e-06deg, rgba(45, 95, 58, 0.36) 0%, rgba(45, 95, 58, 0.36) 54%, rgba(25, 149, 79, 0.6) 100%), linear-gradient(90deg, rgb(25, 149, 79) 0%, rgb(25, 149, 79) 100%)" }}>
      <Destaques />
      <Bullets />
    </div>
  );
}