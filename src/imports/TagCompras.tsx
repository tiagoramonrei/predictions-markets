import React from 'react';

function Tag({ onClick, cotas = "111,1 cotas" }: { onClick?: () => void; cotas?: string }) {
  return (
    <div onClick={onClick} className="bg-[rgba(50,168,102,0.32)] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-opacity" data-name="tag">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Sim</p>
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
  );
}

export default function TagCompras({ onClick, cotas }: { onClick?: () => void; cotas?: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative w-full" data-name="tagCompras">
      <Tag onClick={onClick} cotas={cotas} />
    </div>
  );
}
