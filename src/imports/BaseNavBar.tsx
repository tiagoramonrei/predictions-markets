import svgPaths from "./svg-ezne90g909";
import IconHistorico from "./IconHistorico";
import IconPosicoes from "./IconPosicoes";
import IconCentral from "./IconCentral";
import { useNavigate, useLocation } from "react-router-dom";

function IconHome() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconHome">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconHome">
          <path clipRule="evenodd" d={svgPaths.p1da80} fillRule="evenodd" id="iconHome_2" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Btn({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const textColor = isActive ? "text-[#32A866]" : "text-white";

  return (
    <div 
      className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer ${textColor}`}
      data-name="btn"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className={`box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[12px] py-[10px] relative size-full ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <IconHome />
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-inherit">
            <p className="leading-none whitespace-pre font-bold">Início</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const textColor = isActive ? "text-[#32A866]" : "text-white";
  
  return (
    <div 
      className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer ${textColor}`}
      data-name="btn"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className={`box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[12px] py-[10px] relative size-full ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <div className="relative shrink-0 size-[20px]">
            <IconHistorico />
          </div>
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-inherit">
            <p className="leading-none whitespace-pre font-bold">Histórico</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const textColor = isActive ? "text-[#32A866]" : "text-white";

  return (
    <div 
      className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer ${textColor}`}
      data-name="btn"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className={`box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[12px] py-[10px] relative size-full ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <div className="relative shrink-0 size-[20px]">
            <IconPosicoes />
          </div>
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-inherit">
            <p className="leading-none whitespace-pre font-bold">Pitacos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn3({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const textColor = isActive ? "text-[#32A866]" : "text-white";

  return (
    <div 
      className={`basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer ${textColor}`}
      data-name="btn"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className={`box-border content-stretch flex flex-col gap-[2px] items-center justify-center px-[12px] py-[10px] relative size-full ${isActive ? 'opacity-100' : 'opacity-50'}`}>
          <div className="relative shrink-0 size-[20px]">
            <IconCentral />
          </div>
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-inherit">
            <p className="leading-none whitespace-pre font-bold">Carteira</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BaseNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-neutral-900 relative size-full" data-name="navbar">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 shadow-[0px_0px_20px_0px_rgba(23,23,23,0.32)] top-[-1px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start px-[4px] py-0 relative size-full">
          <Btn isActive={location.pathname === "/"} onClick={() => navigate("/")} />
          <Btn1 isActive={location.pathname === "/historico"} onClick={() => navigate("/historico")} />
          <Btn2 isActive={location.pathname === "/posicoes"} onClick={() => navigate("/posicoes")} />
          <Btn3 isActive={location.pathname === "/central"} onClick={() => navigate("/central")} />
        </div>
      </div>
    </div>
  );
}
