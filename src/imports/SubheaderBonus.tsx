import iconBonusMedio from "../assets/iconBonusMedio.png";
import arrowGreen from "../assets/arrowGreen.png";

// Ícone de Bônus
function IconBonus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconBonus">
      <img src={iconBonusMedio} alt="Bônus" className="block size-full object-contain" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pl-0 pr-[120px] py-0 relative" data-name="title">
      <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-white text-ellipsis whitespace-nowrap">
        <p className="leading-[1.4] overflow-hidden font-bold">Bônus</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="header">
      <IconBonus />
      <Title />
    </div>
  );
}

function BtnEntendaBonus({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center relative shrink-0 cursor-pointer" 
      data-name="btn"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[#32a866] whitespace-nowrap">
        <p className="leading-none whitespace-pre font-bold">Entenda seu bônus</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0" style={{ width: '16px', height: '16px' }}>
        <img src={arrowGreen} alt="" style={{ width: '16px', height: '16px', display: 'block' }} />
      </div>
    </div>
  );
}

export default function SubheaderBonus({ onEntendaBonusClick }: { onEntendaBonusClick?: () => void }) {
  return (
    <div className="relative size-full" data-name="subheader">
      <div className="size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[20px] py-[24px] relative size-full">
          <Header />
          <BtnEntendaBonus onClick={onEntendaBonusClick} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
