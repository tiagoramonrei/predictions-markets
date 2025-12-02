import { useNavigate } from "react-router-dom";

type ActiveTab = 'carteira' | 'posicoes' | 'historico';

interface BaseTabProps {
  activeTab?: ActiveTab;
}

function Game({ isActive }: { isActive: boolean }) {
  return (
    <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 ${!isActive ? 'h-[40px]' : ''}`} data-name="game">
      {isActive && (
        <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      )}
      <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-white' : 'text-[#d9d9d9]'} text-[12px] text-nowrap`}>
        <p className="leading-none whitespace-pre font-bold">Carteira</p>
      </div>
    </div>
  );
}

function Tab({ isActive }: { isActive: boolean }) {
  const navigate = useNavigate();
  return (
    <div 
      className={`basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 ${!isActive ? 'cursor-pointer' : ''}`} 
      data-name="tab"
      onClick={() => !isActive && navigate('/central')}
    >
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] ${isActive ? 'py-0' : 'py-[14px]'} relative w-full`}>
          <Game isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function Game1({ isActive }: { isActive: boolean }) {
  return (
    <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 ${!isActive ? 'h-[40px]' : ''}`} data-name="game">
      {isActive && (
        <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      )}
      <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-white' : 'text-[#d9d9d9]'} text-[12px] text-nowrap`}>
        <p className="leading-none whitespace-pre font-bold">Posições</p>
      </div>
    </div>
  );
}

function Tab1({ isActive }: { isActive: boolean }) {
  const navigate = useNavigate();
  return (
    <div 
      className={`basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 ${!isActive ? 'cursor-pointer' : ''}`} 
      data-name="tab"
      onClick={() => !isActive && navigate('/posicoes')}
    >
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] ${isActive ? 'py-0' : 'py-[14px]'} relative w-full`}>
          <Game1 isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function Game2({ isActive }: { isActive: boolean }) {
  return (
    <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 ${!isActive ? 'h-[40px]' : ''}`} data-name="game">
      {isActive && (
        <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      )}
      <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-white' : 'text-[#d9d9d9]'} text-[12px] text-nowrap`}>
        <p className="leading-none whitespace-pre font-bold">Histórico</p>
      </div>
    </div>
  );
}

function Tab2({ isActive }: { isActive: boolean }) {
  const navigate = useNavigate();
  return (
    <div 
      className={`basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 ${!isActive ? 'cursor-pointer' : ''}`} 
      data-name="tab"
      onClick={() => !isActive && navigate('/historico')}
    >
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] ${isActive ? 'py-0' : 'py-[14px]'} relative w-full`}>
          <Game2 isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

export default function BaseTab({ activeTab = 'carteira' }: BaseTabProps) {
  return (
    <div className="bg-neutral-900 content-stretch flex items-start relative size-full" data-name="baseTab">
      <Tab isActive={activeTab === 'carteira'} />
      <Tab1 isActive={activeTab === 'posicoes'} />
      <Tab2 isActive={activeTab === 'historico'} />
    </div>
  );
}
