import svgPaths from "./svg-5yxjl810rg";
import iconBonusGrande from '../assets/iconBonusGrande.png';

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

function IconBonus() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <img src={iconBonusGrande} alt="" className="block max-w-none size-full" />
    </div>
  );
}

function BoxExplicacao() {
  return (
    <div className="bg-[#242424] relative rounded-[8px] shrink-0 w-full" data-name="boxExplicacao">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start justify-center p-[12px] relative w-full">
          <div className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#e3e3e3] text-[12px] whitespace-pre-wrap">
            <p className="leading-[1.4] mb-0 text-[12px]">
              <span className="font-['DM_Sans:Bold',sans-serif] not-italic font-bold">Ao utilizar créditos:</span>
              <span>
                <br aria-hidden="true" />
                <br aria-hidden="true" />
              </span>
            </p>
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px', 
              margin: 0,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              lineHeight: 1.4,
              color: '#e3e3e3'
            }}>
              <li style={{ marginBottom: '0', marginTop: '0' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', lineHeight: 1.4, color: '#e3e3e3' }}>Se você vender a posição valorizada, recebe apenas a diferença positiva entre o valor atual e o valor no momento da compra.</span>
              </li>
              <li style={{ marginBottom: '0', marginTop: '0' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', lineHeight: 1.4, color: '#e3e3e3' }}>Se a posição for finalizada como vencedora, recebe somente o lucro gerado.</span>
              </li>
              <li style={{ marginBottom: '0', marginTop: '0' }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', lineHeight: 1.4, color: '#e3e3e3' }}>Se você vender a posição desvalorizada ou for finalizada como perdedora, nenhum valor é retornado.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="content">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre font-bold">Entenda seu bônus</p>
      <div className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#e3e3e3] text-[12px] text-center w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Diferente do dinheiro real, os Créditos de Bônus não devolvem o valor utilizado. Eles servem apenas para gerar lucro, caso a sua previsão seja bem-sucedida.</p>
      </div>
      <BoxExplicacao />
      <div className="font-['DM_Sans:Regular',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-center w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Eles também possuem um prazo de validade, que pode variar de acordo com a promoção ou campanha que os disponibilizou.</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-center pb-[40px] pt-[28px] px-[20px] relative w-full">
          <IconBonus />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function ModalBonusBs({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="modal-bs">
      <Header1 onClose={onClose} />
      <Body />
    </div>
  );
}
