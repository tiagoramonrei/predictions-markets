import svgPaths from "./svg-l7zk759slo";

function Titulo() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="titulo">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">
        <p className="leading-none">Quem será o artista mais popular no Spotify este ano?</p>
      </div>
    </div>
  );
}

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
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="header">
      <Titulo />
      <Icon />
    </div>
  );
}

export default function BaseHeader() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="baseHeader">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative size-full">
          <Header />
        </div>
      </div>
    </div>
  );
}