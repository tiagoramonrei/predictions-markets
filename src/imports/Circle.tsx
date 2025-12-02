export default function Circle() {
  return (
    <div className="relative size-full" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1380)" id="circle">
          <circle cx="8" cy="8" fill="var(--fill-0, #FF812E)" id="circleGrafico" r="4" />
          <circle cx="8" cy="8" fill="var(--fill-0, #FF812E)" fillOpacity="0.2" id="circleGrafico-opacity" r="8" />
        </g>
        <defs>
          <clipPath id="clip0_1_1380">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}