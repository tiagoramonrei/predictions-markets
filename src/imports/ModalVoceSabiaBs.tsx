import svgPaths from "./svg-5yxjl810rg";
import iconInfo from "../assets/iconInfo.png";
import iconExemplo from "../assets/iconExemplo.png";

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

function ExemploBox() {
  return (
    <div className="relative w-full" data-name="boxExemploWrapper">
      {/* Label "Exemplo:" - flutuando para fora do card */}
      <div 
        className="absolute left-[16px] bg-[#373737] rounded-[8px] z-10"
        style={{ 
          top: '-12px',
          paddingTop: '4px',
          paddingBottom: '4px',
          paddingLeft: '8px',
          paddingRight: '8px'
        }}
      >
        <p className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white">Exemplo:</p>
      </div>
      
      <div 
        className="bg-[#242424] rounded-[8px] shrink-0 w-full overflow-visible px-[16px] flex flex-col gap-[12px]" 
        data-name="boxExemplo"
        style={{
          paddingTop: '20px',
          paddingBottom: '16px'
        }}
      >
        {/* Pergunta */}
        <p className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white leading-[1.4]">
          Qual será a temperatura máxima amanhã em São Paulo?
        </p>
        
        {/* Card do exemplo */}
        <div className="flex items-center justify-between gap-[12px]">
          {/* Lado esquerdo - Escolha */}
          <div className="flex items-center gap-[8px]">
            <div className="relative shrink-0 w-[24px] h-[24px]">
              <img src={iconExemplo} alt="" className="block size-full object-contain" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-[8px]">
                <span className="font-['DM_Sans:Bold',sans-serif] text-[14px] text-white font-bold">22 graus</span>
                <span className="text-[#e3e3e3] text-[14px]">|</span>
                <span className="font-['DM_Sans:Bold',sans-serif] text-[14px] text-white font-bold">Sim</span>
              </div>
              <span className="font-['DM_Sans:Regular',sans-serif] text-[10px]" style={{ color: 'rgba(227, 227, 227, 0.56)' }}>Aporte R$100</span>
            </div>
          </div>
          
          {/* Lado direito - Limites */}
          <div className="bg-transparent border border-[#373737] rounded-[8px] px-[12px] py-[12px] flex flex-col gap-[4px] text-right">
            <div className="flex items-center justify-end gap-[4px]">
              <span className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white">Limite de Perda:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] text-[10px] text-[#32a866] font-bold">0,89</span>
            </div>
            <div className="flex items-center justify-end gap-[4px]">
              <span className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white">Limite de Ganho:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] text-[10px] text-[#32a866] font-bold">0,92</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.4] not-italic relative shrink-0 text-center w-full" data-name="content">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-[16px] text-white font-bold">Controle seus ganhos e perdas!</p>
      <div className="font-['DM_Sans:Regular',sans-serif] min-w-full relative shrink-0 text-[#e3e3e3] text-[12px] w-[min-content]">
        <p>Você pode definir preços para vender automaticamente seu Pitaco, sem precisar acompanhar o mercado o tempo todo.</p>
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
          <ExemploBox />
          {/* Texto de restrição */}
          <p 
            className="font-['DM_Sans:Regular',sans-serif] text-[10px] leading-[1.4] text-center w-full"
            style={{ color: 'rgba(227, 227, 227, 0.56)' }}
          >
            No exemplo acima, se o preço cair até 0,89, o Pitaco é vendido automaticamente. E se o preço subir até 0,92, o lucro é garantido automaticamente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ModalVoceSabiaBs({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="modal-bs">
      <Header1 onClose={onClose} />
      <Body />
    </div>
  );
}
