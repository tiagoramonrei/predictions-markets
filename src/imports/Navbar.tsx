function Btn() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-nowrap">
            <p className="leading-none whitespace-pre">Início</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-nowrap">
            <p className="leading-none whitespace-pre">Buscar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black text-nowrap">
            <p className="leading-none whitespace-pre">Últimas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[10px] text-nowrap">
            <p className="leading-none whitespace-pre">R$ 3.400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-[#e3e3e3] relative rounded-[100px] shadow-[0px_0px_20px_0px_rgba(23,23,23,0.32)] size-full" data-name="navbar">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[4px] relative size-full">
          <Btn />
          <Btn1 />
          <Btn2 />
          <Btn3 />
        </div>
      </div>
    </div>
  );
}