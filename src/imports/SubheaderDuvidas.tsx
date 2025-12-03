import iconDuvidas from "../assets/iconDuvidas.png";

function IconDuvidas() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconDuvidas">
      <img src={iconDuvidas} alt="Dúvidas" className="block size-full" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[120px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="[white-space-collapse:collapse] leading-[1.4] overflow-ellipsis overflow-hidden font-bold">Dúvidas Frequentes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="header">
      <IconDuvidas />
      <Title />
    </div>
  );
}

export default function SubheaderDuvidas() {
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
