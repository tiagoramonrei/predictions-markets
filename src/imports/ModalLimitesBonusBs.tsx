import svgPaths from "./svg-5yxjl810rg";
import iconInfo from "../assets/iconInfo.png";

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

// Ícone de informação usando iconInfo.png
function IconInfo() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <img src={iconInfo} alt="" className="block size-full object-contain" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.4] not-italic relative shrink-0 text-center w-full" data-name="content">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-[16px] text-white whitespace-pre font-bold">Limites indisponíveis para bônus!</p>
      <div className="font-['DM_Sans:Regular',sans-serif] min-w-full relative shrink-0 text-[#e3e3e3] text-[12px] w-[min-content]">
        <p>Compras feitas com bônus não permitem definir limite de ganho ou de perda. Esses limites estão disponíveis apenas para Pitacos feitos com saldo real.</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-center pb-[40px] pt-[28px] px-[20px] relative w-full">
          <IconInfo />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function ModalLimitesBonusBs({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="modal-bs">
      <Header1 onClose={onClose} />
      <Body />
    </div>
  );
}
