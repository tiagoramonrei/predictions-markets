import svgPaths from "./svg-9pn170izaz";

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

function Header() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-end relative shrink-0 w-full" data-name="header">
      <Icon />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative w-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
        <g id="Group">
          <circle cx="28.0116" cy="28.0116" id="Oval" r="21.0087" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p113a4380} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p29ec6180} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p364db600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function BoxExplicacao() {
  return (
    <div className="bg-[#242424] relative rounded-[8px] shrink-0 w-full" data-name="boxExplicacao">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e3e3e3] text-[0px] text-[12px] text-center text-nowrap whitespace-pre">
            <span className="font-['DM_Sans:Bold',sans-serif]">Saldo</span>
            <span>{` = dinheiro livre e disponível para pitacar`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="content">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">O que é seu Saldo?</p>
      <div className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#e3e3e3] text-[12px] text-center w-[min-content]">
        <p className="mb-0">É o valor em dinheiro que está livre para usar agora.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Com ele você pode fazer novas compras, participar de novos mercados, realizar saques ou deixar na conta para futuras operações.</p>
        <p className="mb-0">&nbsp;</p>
        <p>O saldo aumenta quando você vende uma posição ou quando um mercado é finalizado e te paga. E diminui quando você faz uma nova compra.</p>
      </div>
      <BoxExplicacao />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-center pb-[40px] pt-[28px] px-[20px] relative w-full">
          <Icon1 />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default function ModalBs() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="modal-bs">
      <Header1 />
      <Body />
    </div>
  );
}