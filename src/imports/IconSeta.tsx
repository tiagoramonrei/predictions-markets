import imgIconSeta1 from "figma:asset/d26624b03ae04266c576ea99de534f0ed606d083.png";

export default function IconSeta() {
  return (
    <div className="bg-[#242424] content-stretch flex gap-[9px] items-center justify-center relative rounded-[1000px] size-full" data-name="iconSeta">
      <div className="h-[10.667px] relative shrink-0 w-[8px]" data-name="iconSeta 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconSeta1} />
      </div>
    </div>
  );
}