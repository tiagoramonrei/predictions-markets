import svgPaths from "./svg-cvp093bg6z";

function Title() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">Cotas adquiridas</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',sans-serif] leading-[1.4] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#32a866] text-[14px] w-[min-content]">230,58</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">Retorno potencial</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',sans-serif] leading-[1.4] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#32a866] text-[14px] w-[min-content]">R$230,58</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="content">
      <Title1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00335" cy="8.00354" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p19df2600} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pb554400} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a194920} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0">
        <p className="leading-none text-nowrap whitespace-pre">Taxa</p>
      </div>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none overflow-ellipsis overflow-hidden relative shrink-0 whitespace-pre">-R$4,00</p>
    </div>
  );
}

function TxtTaxa() {
  return (
    <div className="box-border content-stretch flex gap-[2px] h-full items-center pl-[12px] pr-0 py-0 relative shrink-0" data-name="txtTaxa">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Icon />
      <Title2 />
    </div>
  );
}

function Saldo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="saldo">
      <Title />
      <Content />
      <div className="flex flex-row items-center self-stretch">
        <TxtTaxa />
      </div>
    </div>
  );
}

export default function BoxSaldo() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="boxSaldo">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative size-full">
          <Saldo />
        </div>
      </div>
    </div>
  );
}