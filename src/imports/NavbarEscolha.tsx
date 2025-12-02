function Txt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white font-bold">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px] font-bold">25%</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:opacity-80 transition-opacity" 
      data-name="Button"
      onClick={onClick}
    >
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
        <p className="leading-none whitespace-pre">R$400</p>
      </div>
    </div>
  );
}

function Btn({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button onClick={onClick} />
      <Retorno />
    </div>
  );
}

function Txt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white font-bold">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px] font-bold">75%</p>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:opacity-80 transition-opacity" 
      data-name="Button"
      onClick={onClick}
    >
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
        <p className="leading-none whitespace-pre">R$133</p>
      </div>
    </div>
  );
}

function Btn1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button1 onClick={onClick} />
      <Retorno1 />
    </div>
  );
}

function Botoes({ onSim, onNao }: { onSim?: () => void; onNao?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="botoes">
      <Btn onClick={onSim} />
      <Btn1 onClick={onNao} />
    </div>
  );
}

export default function NavbarEscolha({ onSim, onNao }: { onSim?: () => void; onNao?: () => void }) {
  return (
    <div className="bg-neutral-900 relative size-full" data-name="navbarEscolha">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[20px] py-[12px] relative size-full">
          <Botoes onSim={onSim} onNao={onNao} />
        </div>
      </div>
    </div>
  );
}
