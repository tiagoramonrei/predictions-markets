type ActiveTab = 'disponiveis' | 'encerrados';

interface BaseTabBonusProps {
  activeTab?: ActiveTab;
  onTabChange?: (tab: ActiveTab) => void;
}

function TabDisponiveis({ isActive, onClick }: { isActive: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 ${!isActive ? 'cursor-pointer' : ''}`} 
      data-name="tab"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] ${isActive ? 'py-0' : 'py-[14px]'} relative w-full`}>
          <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 ${!isActive ? 'h-[40px]' : ''}`} data-name="game">
            {isActive && (
              <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
            )}
            <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-white' : 'text-[#d9d9d9]'} text-[12px] text-nowrap`}>
              <p className="leading-none whitespace-pre font-bold">Disponíveis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabEncerrados({ isActive, onClick }: { isActive: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 ${!isActive ? 'cursor-pointer' : ''}`} 
      data-name="tab"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] ${isActive ? 'py-0' : 'py-[14px]'} relative w-full`}>
          <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 ${!isActive ? 'h-[40px]' : ''}`} data-name="game">
            {isActive && (
              <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
            )}
            <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${isActive ? 'text-white' : 'text-[#d9d9d9]'} text-[12px] text-nowrap`}>
              <p className="leading-none whitespace-pre font-bold">Encerrados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BaseTabBonus({ activeTab = 'disponiveis', onTabChange }: BaseTabBonusProps) {
  return (
    <div className="bg-neutral-900 content-stretch flex items-start relative size-full" data-name="baseTab">
      <TabDisponiveis isActive={activeTab === 'disponiveis'} onClick={() => onTabChange?.('disponiveis')} />
      <TabEncerrados isActive={activeTab === 'encerrados'} onClick={() => onTabChange?.('encerrados')} />
    </div>
  );
}
