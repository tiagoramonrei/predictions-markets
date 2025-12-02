export default function Bullets() {
  return (
    <div className="relative size-full" data-name="bullets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 6">
        <g id="bullets">
          <g id="atual">
            <line id="line" opacity="0.32" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeWidth="6" x1="23" x2="33" y1="3" y2="3" />
            <line id="linePreenchido" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeWidth="6" x1="23" x2="27" y1="3" y2="3" />
          </g>
          <circle cx="47" cy="3" fill="var(--fill-0, #171717)" id="circle" opacity="0.32" r="3" />
          <circle cx="61" cy="3" fill="var(--fill-0, #171717)" id="circle_2" opacity="0.32" r="3" />
          <circle cx="75" cy="3" fill="var(--fill-0, #171717)" id="circle_3" opacity="0.32" r="3" />
        </g>
      </svg>
    </div>
  );
}