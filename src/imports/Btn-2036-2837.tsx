import imgLoadingAnima from "figma:asset/905f098b527169db8617a747c06509da2180719d.png";

export default function Btn() {
  return (
    <div className="bg-[#19954f] relative rounded-[1000px] size-full" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[24px] py-0 relative size-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="leading-[1.2] whitespace-pre">Vendendo</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="loadingAnima">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLoadingAnima} />
          </div>
        </div>
      </div>
    </div>
  );
}