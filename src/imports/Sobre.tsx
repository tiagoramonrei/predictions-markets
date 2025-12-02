import { useState, ReactNode } from "react";
import svgPaths from "./svg-9q0t42xpgz";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.4]">Sobre esse mercado</p>
      </div>
    </div>
  );
}

export default function Sobre({ children }: { children?: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full" data-name="sobre">
      <Titulo />
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="conteudo">
        <div className={`content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full ${isExpanded ? '' : 'h-[120px] overflow-clip'}`} data-name="text">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[1.4] not-italic relative shrink-0 text-[#e3e3e3] text-[12px] w-full">
            {children}
          </div>
          {!isExpanded && (
            <div className="absolute bg-gradient-to-t bottom-0 from-[#171717] h-[120px] left-1/2 to-[rgba(23,23,23,0)] translate-x-[-50%] w-full" data-name="degrade" />
          )}
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full cursor-pointer" 
          data-name="btn_mostrar_mais"
        >
          <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[10px] text-nowrap" style={{ fontWeight: 'bold' }}>
            <p className="leading-none whitespace-pre">{isExpanded ? 'Mostrar menos' : 'Mostrar tudo'}</p>
          </div>
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className={`flex-none transition-transform ${isExpanded ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`}>
              <div className="relative size-[16px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Group">
                    <path d={svgPaths.p80fedc0} id="Path" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Path_2"></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}