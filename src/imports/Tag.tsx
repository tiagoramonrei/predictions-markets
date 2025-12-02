import React from 'react';

export default function Tag({ onClick, cotas = "200 cotas" }: { onClick?: () => void; cotas?: string }) {
  return (
    <div className="bg-[rgba(217,35,65,0.32)] relative rounded-[4px] h-[16px] w-full" data-name="tag">
      <div className="flex flex-row items-center size-full">
        <div onClick={onClick} className="box-border content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full cursor-pointer transition-opacity">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
            <p className="leading-none whitespace-pre">Não</p>
          </div>
          <div className="relative shrink-0 size-[2px]" data-name="circle">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
                <circle cx="1" cy="1" fill="var(--fill-0, white)" id="circle" r="1" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
            <p className="leading-none whitespace-pre">{cotas}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
