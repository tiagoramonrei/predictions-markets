import svgPaths from "./svg-275r5ksj64";
import imgImagem from "figma:asset/b8557be30a11c35e72c3a4ac1a0fb0eb28f9c419.png";
import imgImagem1 from "figma:asset/562cec5dc1dde5641c98cbf9e6b84b136f03e611.png";
import imgImagem2 from "figma:asset/b1bfe46866217abae562b18e0aa0645e8b00233b.png";
import imgImagem3 from "figma:asset/0b9c208b4d2c849e91bf8f4c2475b4cdb7bdd8b6.png";
import imgImagem4 from "figma:asset/7359dd6558f66541e46562e3009c906879073d12.png";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="bg-[#1e1e1e] shrink-0 size-[20px]" data-name="icon" />
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.4]">Faça sua escolha</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Bad Bunny</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 234.345 volume</p>
      </div>
    </div>
  );
}

function Subiu() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="subiu">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#19954f] text-[8px] text-nowrap">
        <p className="leading-none whitespace-pre">3%</p>
      </div>
      <div className="h-[6px] relative shrink-0 w-[7px]" data-name="subiu">
        <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(25, 149, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3615f2f0} fill="var(--fill-0, #19954F)" id="subiu" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Porcentagem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <Subiu />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">85%</p>
      </div>
    </div>
  );
}

function HeaderOutcome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem} width="48" />
      </div>
      <Text />
      <Porcentagem />
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
        <p className="leading-none whitespace-pre">R$ 117</p>
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
        <p className="leading-none whitespace-pre">R$ 666</p>
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

function Box() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box">
      <HeaderOutcome />
      <Botoes />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Taylor Swift</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 21.124 volume</p>
      </div>
    </div>
  );
}

function Subiu1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="subiu">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c00a28] text-[8px] text-nowrap">
        <p className="leading-none whitespace-pre">2%</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[6px] relative w-[7px]" data-name="subiu">
            <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(192, 10, 40, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d={svgPaths.p3615f2f0} fill="var(--fill-0, #C00A28)" id="subiu" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Porcentagem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <Subiu1 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">10%</p>
      </div>
    </div>
  );
}

function HeaderOutcome1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem1} width="48" />
      </div>
      <Text1 />
      <Porcentagem1 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">10%</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
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
        <p className="leading-none whitespace-pre">R$ 1.000</p>
      </div>
    </div>
  );
}

function Btn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button2 />
      <Retorno2 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">90%</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
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
        <p className="leading-none whitespace-pre">R$ 111</p>
      </div>
    </div>
  );
}

function Btn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button3 />
      <Retorno3 />
    </div>
  );
}

function Botoes1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn2 />
      <Btn3 />
    </div>
  );
}

function Box1() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box">
      <HeaderOutcome1 />
      <Botoes1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Bruno Mars</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 12.438 volume</p>
      </div>
    </div>
  );
}

function HeaderOutcome2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem2} width="48" />
      </div>
      <Text2 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">5%</p>
      </div>
    </div>
  );
}

function Txt4() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">5%</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt4 />
        </div>
      </div>
    </div>
  );
}

function IconSeta4() {
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

function Retorno4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta4 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 2.000</p>
      </div>
    </div>
  );
}

function Btn4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button4 />
      <Retorno4 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">95%</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt5 />
        </div>
      </div>
    </div>
  );
}

function IconSeta5() {
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

function Retorno5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta5 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 105</p>
      </div>
    </div>
  );
}

function Btn5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button5 />
      <Retorno5 />
    </div>
  );
}

function Botoes2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn4 />
      <Btn5 />
    </div>
  );
}

function Box2() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box">
      <HeaderOutcome2 />
      <Botoes2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Ariana Grande</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 5.312 volume</p>
      </div>
    </div>
  );
}

function HeaderOutcome3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem3} width="48" />
      </div>
      <Text3 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic opacity-[0.32] relative shrink-0 text-[#e3e3e3] text-[20px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`<1%`}</p>
      </div>
    </div>
  );
}

function Txt6() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">1%</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt6 />
        </div>
      </div>
    </div>
  );
}

function IconSeta6() {
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

function Retorno6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta6 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 10.000</p>
      </div>
    </div>
  );
}

function Btn6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button6 />
      <Retorno6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p1b5a55e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 11.6667V14.1667" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa6fc5f0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialLock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Lock">
      <Group />
    </div>
  );
}

function Txt7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="txt">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
      <InterfaceEssentialLock />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#242424] h-[40px] opacity-[0.32] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt7 />
        </div>
      </div>
    </div>
  );
}

function Btn7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button7 />
    </div>
  );
}

function Botoes3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn6 />
      <Btn7 />
    </div>
  );
}

function Box3() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box">
      <HeaderOutcome3 />
      <Botoes3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Drake</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 3.134 volume</p>
      </div>
    </div>
  );
}

function HeaderOutcome4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem4} width="48" />
      </div>
      <Text4 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic opacity-[0.32] relative shrink-0 text-[#e3e3e3] text-[20px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`<1%`}</p>
      </div>
    </div>
  );
}

function Txt8() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">1%</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt8 />
        </div>
      </div>
    </div>
  );
}

function IconSeta7() {
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

function Retorno7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta7 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 10.000</p>
      </div>
    </div>
  );
}

function Btn8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button8 />
      <Retorno7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p1b5a55e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 11.6667V14.1667" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa6fc5f0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialLock1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Lock">
      <Group1 />
    </div>
  );
}

function Txt9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="txt">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre">NÃO</p>
      <InterfaceEssentialLock1 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#242424] h-[40px] opacity-[0.32] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt9 />
        </div>
      </div>
    </div>
  );
}

function Btn9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button9 />
    </div>
  );
}

function Botoes4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn8 />
      <Btn9 />
    </div>
  );
}

function Box4() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box">
      <HeaderOutcome4 />
      <Botoes4 />
    </div>
  );
}

function BaseCards() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start shrink-0 sticky top-0" data-name="baseCards">
      <Box />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p80fedc0} id="Path" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_2"></g>
        </g>
      </svg>
    </div>
  );
}

function BtnMostrarMais() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="btn_mostrar_mais">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mostrar mais (6)</p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="cards">
      <BaseCards />
      <BtnMostrarMais />
    </div>
  );
}

export default function Outcomes() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full" data-name="outcomes">
      <Titulo />
      <Cards />
    </div>
  );
}