import svgPaths from "./svg-5yxjl810rg";
import iconBonusColor from '../assets/iconBonusColor.png';

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p972d1e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p11ac7c00} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Header({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-end relative shrink-0 w-full" data-name="header">
      <div onClick={onClose} className="cursor-pointer">
        <Icon />
      </div>
    </div>
  );
}

function Header1({ onClose }: { onClose?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative w-full">
          <Header onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

function IconBonusColor() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Gift">
      <img src={iconBonusColor} alt="" className="block max-w-none size-full object-contain" />
    </div>
  );
}

function Content({ bonusAmount }: { bonusAmount: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.4] not-italic relative shrink-0 text-center w-full" data-name="content">
      <div className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-[16px] text-white whitespace-pre text-center">
        <p className="mb-0 font-bold">Você ganhou</p>
        <p className="font-bold">{bonusAmount} créditos de bônus</p>
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] min-w-full relative shrink-0 text-[12px] text-[#e3e3e3] text-center whitespace-pre-wrap">
        <p className="mb-0">Parabéns!</p>
        <p className="mb-0">Um novo bônus já está pronto para você usar.</p>
        <p>Confira agora.</p>
      </div>
    </div>
  );
}

function Body({ bonusAmount }: { bonusAmount: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-center pb-[40px] pt-[28px] px-[20px] relative w-full">
          <IconBonusColor />
          <Content bonusAmount={bonusAmount} />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup({ onVerBonus }: { onVerBonus?: () => void }) {
  return (
    <div 
      className="border-solid content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative shrink-0 w-full" 
      style={{ borderTop: '1px solid #242424' }}
      data-name="Button Group"
    >
      <button
        onClick={onVerBonus}
        className="bg-[#19954f] content-stretch flex items-center justify-center px-[16px] py-[14px] relative rounded-[1000px] shrink-0 w-full cursor-pointer border-none hover:bg-[#157a42] transition-colors"
        data-name="Button"
      >
        <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-white whitespace-pre font-bold">
          Ver bônus
        </p>
      </button>
    </div>
  );
}

interface ModalBonusWelcomeBsProps {
  onClose?: () => void;
  onVerBonus?: () => void;
  bonusAmount?: number;
}

export default function ModalBonusWelcomeBs({ onClose, onVerBonus, bonusAmount = 50 }: ModalBonusWelcomeBsProps) {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="modal-bs">
      <Header1 onClose={onClose} />
      <Body bonusAmount={bonusAmount} />
      <ButtonGroup onVerBonus={onVerBonus} />
    </div>
  );
}
