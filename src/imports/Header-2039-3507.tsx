import svgPaths from "./svg-ha7i26tron";
import imgImgPergunta1 from "figma:asset/9953e982950dc7fbb131fb802ab5092cf8729af7.png";
import { imgImgPergunta } from "./svg-1iffv";

function Img() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="img">
      <div className="[grid-area:1_/_1] h-[157px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23px_31px] mask-size-[88px_88px] ml-[-23px] mt-[-31px] relative rounded-tl-[8px] rounded-tr-[8px] w-[133px]" data-name="imgPergunta" style={{ maskImage: `url('${imgImgPergunta}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <img alt="" className="absolute h-[119.67%] left-0 max-w-none top-[-7.04%] w-full" src={imgImgPergunta1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path clipRule="evenodd" d={svgPaths.p230af100} fillRule="evenodd" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediasRewardsFavorite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group />
    </div>
  );
}

function VolumeFavoritar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 2.234.345 volume</p>
      </div>
      <SocialMediasRewardsFavorite />
    </div>
  );
}

function Pergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[199px]" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2]">O Bitcoin estará com o preço acima de quanto em 01 de dezembro?</p>
      </div>
      <VolumeFavoritar />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="header">
      <Img />
      <div className="flex flex-row items-center self-stretch">
        <Pergunta />
      </div>
    </div>
  );
}