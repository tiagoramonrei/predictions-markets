import imgLoadingAnima from "figma:asset/905f098b527169db8617a747c06509da2180719d.png";

export default function BtnLoading() {
  return (
    <div
      className="bg-[#19954F] relative rounded-[1000px] size-full"
      data-name="btnLoading"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[24px] py-0 relative size-full">
          <p
            className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre"
            style={{ fontWeight: "bold" }}
          >
            Comprando
          </p>
          <div
            className="relative shrink-0 size-[16px]"
            data-name="loadingAnima"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full animate-spin"
              src={imgLoadingAnima}
            />
          </div>
        </div>
      </div>
    </div>
  );
}