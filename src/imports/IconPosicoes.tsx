import svgPaths from "./svg-z4mn2p32d0";

function Dinheiro() {
  return (
    <div className="absolute bottom-1/4 left-[35.83%] right-[35%] top-[22.5%]" data-name="dinheiro">
      <div className="absolute inset-[-7.14%_-12.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
          <g id="dinheiro">
            <path d={svgPaths.p17f78080} id="dinheiro_2" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.6667 1.91667V0.75" id="dinheiro_3" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M3.6667 11.2505V10.0838" id="dinheiro_4" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Seta() {
  return (
    <div className="absolute inset-[5%_74.75%_66.65%_5%]" data-name="seta">
      <div className="absolute inset-[-13.23%_-18.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <g id="seta">
            <path d="M2.775 0.75L2.775 6.42" id="seta_2" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M4.80016 2.775L2.77516 0.75" id="seta_3" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M0.75 2.775L2.775 0.75" id="seta_4" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Seta1() {
  return (
    <div className="relative size-full" data-name="seta">
      <div className="absolute inset-[-13.23%_-18.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <g id="seta">
            <path d="M2.775 0.75L2.775 6.42" id="seta_2" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M4.80016 2.775L2.77516 0.75" id="seta_3" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M0.75 2.775L2.775 0.75" id="seta_4" stroke="var(--stroke-0, currentColor)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function IconPosicoes() {
  return (
    <div className="relative size-full" data-name="iconPosicoes">
      <Dinheiro />
      <Seta />
      <div className="absolute bottom-[5%] flex items-center justify-center left-3/4 right-[4.75%] top-[66.65%]">
        <div className="flex-none h-[5.67px] scale-y-[-100%] w-[4.05px]">
          <Seta1 />
        </div>
      </div>
    </div>
  );
}
