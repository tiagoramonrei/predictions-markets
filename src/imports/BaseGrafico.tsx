import svgPaths from "./svg-b06764kyd1";

function Txt() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="txt">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">+R$ 200</p>
      </div>
    </div>
  );
}

function Subiu() {
  return (
    <div className="h-[9px] relative shrink-0 w-[10.5px]" data-name="subiu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
        <g id="subiu">
          <path d={svgPaths.p10bdb280} fill="var(--fill-0, #19954F)" id="subiu_2" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
          <Txt />
          <Subiu />
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-[278px] top-0" data-name="data">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Out 28, 2025</p>
      </div>
    </div>
  );
}

function LinhaGrafico() {
  return (
    <div className="absolute contents left-[calc(50%+2.01px)] top-0 translate-x-[-50%]" data-name="linhaGrafico">
      <div className="absolute flex h-[132px] items-center justify-center right-px top-0 w-0" style={{ "--transform-inner-width": "132", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[132px]" data-name="lineEscolha">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 1">
                <line id="lineEscolha" stroke="var(--stroke-0, white)" strokeOpacity="0.32" x2="132" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[93px] left-0 top-[40px] w-[335px]" data-name="fill">
        <div className="absolute bottom-0 left-0 right-0 top-[0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 93">
            <path d={svgPaths.p1b2d4380} fill="url(#paint0_linear_2056_60)" id="fill" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2056_60" x1="167.5" x2="167.5" y1="-0.0656726" y2="108.934">
                <stop stopColor="#32A866" stopOpacity="0.16" />
                <stop offset="1" stopColor="#1E1E1E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[78px] left-0 top-[39px] w-[335px]" data-name="lineGrafico-gray">
        <div className="absolute inset-[-1.28%_-0.3%]" style={{ "--stroke-0": "rgba(55, 55, 55, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 80">
            <path d={svgPaths.p297d0300} id="lineGrafico-gray" stroke="var(--stroke-0, #373737)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[78px] left-0 top-[39px] w-[335px]" data-name="lineGrafico-gray">
        <div className="absolute inset-[-1.28%_-0.3%]" style={{ "--stroke-0": "rgba(50, 168, 102, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 337 80">
            <path d={svgPaths.p297d0300} id="lineGrafico-gray" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[330.47px] size-[8.54px] top-[34.73px]" data-name="circleGrafico">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.26981" cy="4.26981" fill="var(--fill-0, #32A866)" id="circleGrafico" r="4.26981" />
        </svg>
      </div>
      <Data />
    </div>
  );
}

function Grafico() {
  return (
    <div className="h-[132px] relative shrink-0 w-[335px]" data-name="grafico">
      <LinhaGrafico />
    </div>
  );
}

export default function BaseGrafico() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full" data-name="baseGrafico">
      <Header />
      <Grafico />
    </div>
  );
}