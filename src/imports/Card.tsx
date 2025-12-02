import { forwardRef } from 'react';
import IconSeta from './IconSeta';

function Frame() {
  return (
    <div 
      className="bg-[#242424] content-stretch flex gap-[9px] items-center justify-center relative rounded-[1000px] shrink-0 size-[20px] cursor-pointer hover:bg-[#2f2f2f] transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <IconSeta />
    </div>
  );
}

const Card = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative w-full bg-[#171717]" data-name="card">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="w-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <div className="-webkit-box basis-0 flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-white" style={{ fontWeight: 'bold' }}>
            <p className="leading-[1.2]">Quem será o artista mais popular no Spotify este ano?</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;