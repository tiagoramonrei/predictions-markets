import svgPaths from "./svg-micex7516m";

function IconCentral() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconCentral">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconCentral">
          <path d={svgPaths.p10c0fb00} id="iconCentral_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.p4ef0a80} fillRule="evenodd" id="iconCentral_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[120px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden font-bold">Central</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="header">
      <IconCentral />
      <Title />
    </div>
  );
}

export default function Subheader() {
  return (
    <div className="relative size-full" data-name="subheader">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[20px] py-[24px] relative size-full">
          <Header />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
