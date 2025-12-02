import svgPaths from "./svg-fd28c1dz0e";
import { useNavigate } from "react-router-dom";

function Group() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-1.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[5px]" data-name="Group">
      <div className="absolute inset-[-7.5%_-15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
          <g id="Group">
            <path d={svgPaths.p27040a80} id="Path" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconVoltar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-voltar">
      <Group />
    </div>
  );
}

function Voltar() {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-[800px] shrink-0 size-[20px]" data-name="voltar">
      <div className="flex flex-row items-center justify-center size-full">
        <div 
            className="box-border content-stretch flex items-center justify-center px-[12.8px] py-[8px] relative size-[20px] cursor-pointer"
            onClick={() => navigate(-1)}
          >
          <IconVoltar />
        </div>
      </div>
    </div>
  );
}

function Title({ category = "Esportes" }: { category?: string }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-0 pr-[120px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
            <p className="[white-space-collapse:collapse] leading-[1.4]" style={{ fontWeight: 'bold' }}>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterfaceEssentialShare() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p9871b80} id="Path" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M10 2V11.1667" id="Path_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7.50085 4.5L10 2L12.5 4.5" id="Path_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path clipRule="evenodd" d={svgPaths.p230af100} fillRule="evenodd" id="Path_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediasRewardsFavorite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="icons">
      <InterfaceEssentialShare />
      <SocialMediasRewardsFavorite />
    </div>
  );
}

function Header({ category }: { category?: string }) {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="header">
      <Voltar />
      <Title category={category} />
      <Icons />
    </div>
  );
}

export default function Header1({ isSolid = false, category = "Esportes" }: { isSolid?: boolean; category?: string }) {
  return (
    <div className="relative size-full" data-name="header">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-[20px] py-[24px] relative size-full">
          <div className="absolute flex h-[68px] items-center justify-center left-0 top-0 w-full">
            <div className="flex-none w-full relative h-[68px]">
              <div 
                className="absolute inset-0 border-b border-[#1E1E1E]" 
                data-name="solid"
                style={{
                  background: '#171717',
                }}
              />
            </div>
          </div>
          <Header category={category} />
        </div>
      </div>
    </div>
  );
}