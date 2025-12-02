function Game() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="game">
      <div aria-hidden="true" className="absolute border-[#32a866] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre font-bold">Tendências</p>
      </div>
    </div>
  );
}

function ButtomTabHome() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-0 relative shrink-0" data-name="buttom-tab-home">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Game />
    </div>
  );
}

function Game1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0" data-name="game">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre font-bold">Entretenimento</p>
      </div>
    </div>
  );
}

function ButtomTabHome1() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-[14px] relative shrink-0" data-name="buttom-tab-home">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Game1 />
    </div>
  );
}

function Game2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="game">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre font-bold">Cultura</p>
      </div>
    </div>
  );
}

function ButtomTabHome2() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-[14px] relative shrink-0" data-name="buttom-tab-home">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Game2 />
    </div>
  );
}

function Game3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="game">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre font-bold">Clima</p>
      </div>
    </div>
  );
}

function ButtomTabHome3() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-[14px] relative shrink-0" data-name="buttom-tab-home">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Game3 />
    </div>
  );
}

function Game4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="game">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre font-bold">Tecnologia</p>
      </div>
    </div>
  );
}

function ButtomTabHome4() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center justify-center px-[20px] py-[14px] relative shrink-0" data-name="buttom-tab-home">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Game4 />
    </div>
  );
}

export default function Tab() {
  return (
    <div className="bg-neutral-900 content-stretch flex items-center relative w-full overflow-x-auto no-scrollbar" data-name="tab">
      <ButtomTabHome />
      <ButtomTabHome1 />
      <ButtomTabHome2 />
      <ButtomTabHome3 />
      <ButtomTabHome4 />
    </div>
  );
}