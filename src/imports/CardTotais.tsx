import svgPaths from "./svg-z13utlvb28";
import { useNavigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import OrderBottomSheet from "../components/OrderBottomSheet";
import OrderSucess from "./OrderSucess";
import imgImgPergunta from "figma:asset/9953e982950dc7fbb131fb802ab5092cf8729af7.png";
import imgImgPergunta1 from "figma:asset/77c725e63dbee2a09eff3890f168ef37f04c9524.png";
import imgImgPergunta2 from "figma:asset/633cd73f495c9b5c1857c4594e6170fc94e024d3.png";
import imgImagem from "figma:asset/0cc26368f4fe88dee71ab4a2abf4b8c4e70f111f.png";
import imgImagem1 from "figma:asset/065ca6711a3eca5fd95f4ec7f173ed5f1a9e85b4.png";
import imgImgPergunta3 from "figma:asset/e70f06c914d227cea1bb34880c1982837171b960.png";
import imgImgPergunta4 from "figma:asset/1d8214c297d60a5ff93eb828dc94b213f4bfa048.png";
import imgImgPergunta5 from "figma:asset/798f2785013feeb0c0248810dd266517434e3db2.png";
import imgImagem2 from "figma:asset/b56641d75ea5dc11d6fbc5730e830d740cd1329a.png";
import imgImagem3 from "figma:asset/50882ac1ab781e7116eedf88af570ea8311d0c1e.png";
import imgImgPergunta6 from "figma:asset/c21fb3cf21c9bb4f6e5054a01b804e05f8298f08.png";
import imgImgPergunta7 from "figma:asset/aaa4b789609dbb1cf01e310a30f73f4a927e0781.png";
import imgNenhum from "figma:asset/49700c649bca78f49561401caa7e05e89a96668c.png";
import imgBitcoinGold from "figma:asset/a45e169be48c8271438e628b2b414ffbc170e022.png";
import imgImgCardNeymar from "figma:asset/507d98dfcdfe754b3dcec99e575f68c14c734318.png";
import svgPathsNeymar from "./svg-yxm5x0ywlk";
import imgImgRussiaUcrania1 from "figma:asset/ab8290588cf8c18de0e913b8ba0905bd490c62f4.png";
import svgPathsRussia from "./svg-cvxhapv8dp";
import svgPathsLider from "./svg-4dubs06unj";
import imgImgLider from "figma:asset/6ede92b8313ee860090f8b0372e8bb27cd58e03a.png";
import imgLiderNenhum from "figma:asset/0cc26368f4fe88dee71ab4a2abf4b8c4e70f111f.png";
import imgImgFelipe from "figma:asset/896a962ce24595c3bdf6eb13da4868ceb0e34ed7.png";
import svgPathsFelipe from "./svg-dtkqxljvic";
import imgTecnicoDorival from "figma:asset/69e58d4d498388f7b3247b1219748da3fa106d04.png";
import svgPathsTecnico from "./svg-dgw4ecu9al";
import imgImgTecnico from "figma:asset/0f242c261a707627d1665e21ef04dd13a537139e.png";
import imgTecnicoVojvoda from "figma:asset/9f461ed5c177aabb0fc37cdea7a985be5dd89d45.png";
import imgImgCasemiro from "figma:asset/85684de1d898b684366e28e3f7d1e7c73e0d6f56.png";
import svgPathsCasimiro from "./svg-l190b13r97";
import imgLiderMaduro from "figma:asset/e3ee253053ff6e519092909b5742bc97fe169585.png";
import svgPathsMaisa from "./svg-3f3cowrcu0";
import imgImgMaisa from "figma:asset/53fc2d8d53b9d30b0de06b7ac771683fec312c28.png";
import ApostasAndCassino from "./ApostasAndCassino-2108-82";

interface OutcomeData {
  nome: string;
  volume: string;
  porcentagemSim: number;
  porcentagemNao: number;
  imagem: string;
  isYes: boolean;
  question?: string;
  isMultipleChoice?: boolean;
  cotas?: number;
}

const SelectionContext = createContext<((data: OutcomeData) => void) | null>(null);

function InteractiveSmallButton({ type, onClick }: { type: 'sim' | 'nao', onClick: (e: any) => void }) {
  const baseClass = "box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px] cursor-pointer transition-colors";
  const bgClass = "bg-[#242424]";
  
  return (
    <div className={`${baseClass} ${bgClass}`} onClick={onClick}>
      <p className={`font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap whitespace-pre font-bold ${type === 'sim' ? 'text-[#32A866]' : 'text-[#D92341]'}`}>
        {type === 'sim' ? 'SIM' : 'NÃO'}
      </p>
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
        <p className="leading-none">R$ 850.400 montante negociado</p>
      </div>
    </div>
  );
}

const maskImgPergunta = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2088%2088%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22mask%22%20width%3D%2288%22%20height%3D%2288%22%20rx%3D%2244%22%20fill%3D%22var(--fill-0%2C%20%23D9D9D9)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
const p23f200 = "M13.9989 19.7672L17.8387 21.8752C18.5863 22.2852 19.4594 21.6222 19.3168 20.7532L18.5835 16.2872L21.6909 13.1262C22.2959 12.5102 21.9627 11.4372 21.1261 11.3102L16.8335 10.6582L14.9141 6.59325C14.5408 5.80225 13.46 5.80225 13.0866 6.59325L11.1663 10.6582L6.87371 11.3102C6.03798 11.4372 5.70388 12.5102 6.3089 13.1262L9.41631 16.2872L8.68302 20.7532C8.54038 21.6222 9.41344 22.2862 10.1611 21.8752L14.0008 19.7672H13.9989Z";

function Img() {
  return (
    <div className="overflow-clip relative shrink-0 size-[72px]" data-name="img">
      <img alt="" className="size-full object-cover" src={imgBitcoinGold} />
    </div>
  );
}

function Pergunta() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">O Bitcoin estará com o preço acima de quanto em 01 de dezembro?</p>
      </div>
    </div>
  );
}

function IconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <Img />
      <Pergunta />
    </div>
  );
}

function Escolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">84.000</p>
      </div>
    </div>
  );
}

function PorcentagemSim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">85%</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "84.000",
        volume: "R$ 320.500",
        porcentagemSim: 85,
        porcentagemNao: 15,
        imagem: imgImgPergunta,
        isYes: type === 'sim',
        question: "O Bitcoin estará com o preço acima de quanto em 01 de dezembro?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha />
      <PorcentagemSim />
      <Botoes />
    </div>
  );
}

function Escolha1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <BaseEscolha />
    </div>
  );
}

function Escolha2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">86.000</p>
      </div>
    </div>
  );
}

function PorcentagemSim1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">84%</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes1() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "86.000",
        volume: "R$ 210.200",
        porcentagemSim: 84,
        porcentagemNao: 16,
        imagem: imgImgPergunta,
        isYes: type === 'sim',
        question: "O Bitcoin estará com o preço acima de quanto em 01 de dezembro?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha2 />
      <PorcentagemSim1 />
      <Botoes1 />
    </div>
  );
}

function Escolha3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <BaseEscolha1 />
    </div>
  );
}

function BaseEscolha2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <Escolha1 />
      <Escolha3 />
    </div>
  );
}

function CatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Finanças</p>
      </div>
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none whitespace-pre">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq />
    </div>
  );
}

function VolumeFavoritarCard() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 2.234.345 montante negociado</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <Header />
          <VolumeFavoritarCard />
          <BaseEscolha2 />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="card">
      <Card />
    </div>
  );
}

function Group1() {
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

function SocialMediasRewardsFavorite1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group1 />
    </div>
  );
}

function VolumeFavoritar1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 420.100 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Neymar vai continuar jogando no Santos em 2026?</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo1 />
    </div>
  );
}

function Txt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">25%</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt />
        </div>
      </div>
    </div>
  );
}

function IconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button4 />
      <Retorno />
    </div>
  );
}

function Txt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">75%</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt1 />
        </div>
      </div>
    </div>
  );
}

function IconSeta1() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta1 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button5 />
      <Retorno1 />
    </div>
  );
}

function Botoes2() {
  const onSelect = useContext(SelectionContext);
  const simClass = "bg-[#242424]";
  const naoClass = "bg-[#242424]";

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Neymar vai continuar jogando no Santos em 2026?",
        volume: "R$ 420.100",
        porcentagemSim: 25,
        porcentagemNao: 75,
        imagem: imgImgPergunta1,
        isYes: isYes,
        question: "Neymar vai continuar jogando no Santos em 2026?"
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <div className={`${simClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors`} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt />
            </div>
          </div>
        </div>
        <Retorno />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <div className={`${naoClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors`} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt1 />
            </div>
          </div>
        </div>
        <Retorno1 />
      </div>
    </div>
  );
}

function CatFreq1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esporte</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq1 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Header1 />
          <Botoes2 />
          <Footer1 />
        </div>
      </div>
    </div>
  );
}

function NeymarPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Neymar vai continuar jogando no Santos em 2026?</p>
      </div>
    </div>
  );
}

function NeymarIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NeymarHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgCardNeymar">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgCardNeymar} />
      </div>
      <NeymarPergunta />
    </div>
  );
}

function NeymarTxt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">25%</p>
    </div>
  );
}

function NeymarButton() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <NeymarTxt />
        </div>
      </div>
    </div>
  );
}

function NeymarIconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NeymarRetorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <NeymarIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$400</p>
      </div>
    </div>
  );
}

function NeymarBtn({ onClick }: { onClick: (e: any) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={onClick}>
      <NeymarButton />
      <NeymarRetorno />
    </div>
  );
}

function NeymarTxt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">75%</p>
    </div>
  );
}

function NeymarButton1() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <NeymarTxt1 />
        </div>
      </div>
    </div>
  );
}

function NeymarRetorno1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <NeymarIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$133</p>
      </div>
    </div>
  );
}

function NeymarBtn1({ onClick }: { onClick: (e: any) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={onClick}>
      <NeymarButton1 />
      <NeymarRetorno1 />
    </div>
  );
}

function NeymarBotoes() {
  const onSelect = useContext(SelectionContext);

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Neymar vai continuar jogando no Santos em 2026?",
        volume: "R$ 420.100 volume",
        porcentagemSim: 25,
        porcentagemNao: 75,
        imagem: imgImgCardNeymar,
        isYes: isYes,
        question: "Neymar vai continuar jogando no Santos em 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <NeymarBtn onClick={(e) => { e.stopPropagation(); handleSelect(true); }} />
      <NeymarBtn1 onClick={(e) => { e.stopPropagation(); handleSelect(false); }} />
    </div>
  );
}

function NeymarCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esporte</p>
      </div>
    </div>
  );
}

function NeymarFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <NeymarCatFreq />
    </div>
  );
}

function Card3() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full cursor-pointer" data-name="card" onClick={() => navigate('/neymar')}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <NeymarHeader />
          <VolumeFavoritar2 />
          <NeymarBotoes />
          <NeymarFooter />
        </div>
      </div>
    </div>
  );
}

function Group2() {
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

function SocialMediasRewardsFavorite2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group2 />
    </div>
  );
}

function VolumeFavoritar2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 315.500 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo2 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white font-bold">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px] font-bold">15%</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt2 />
        </div>
      </div>
    </div>
  );
}

function IconSeta2() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta2 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button6 />
      <Retorno2 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white font-bold">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px] font-bold">85%</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt3 />
        </div>
      </div>
    </div>
  );
}

function IconSeta3() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta3 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button7 />
      <Retorno3 />
    </div>
  );
}

function Botoes3() {
  const onSelect = useContext(SelectionContext);
  const simClass = "bg-[#242424]";
  const naoClass = "bg-[#242424]";

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?",
        volume: "R$ 315.500",
        porcentagemSim: 15,
        porcentagemNao: 85,
        imagem: imgImgPergunta2,
        isYes: isYes,
        question: "Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?"
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <div className={`${simClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors`} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt2 />
            </div>
          </div>
        </div>
        <Retorno2 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <div className={`${naoClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors`} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt3 />
            </div>
          </div>
        </div>
        <Retorno3 />
      </div>
    </div>
  );
}

function CatFreq2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Politica</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq2 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Header2 />
          <Botoes3 />
          <Footer2 />
        </div>
      </div>
    </div>
  );
}

function RussiaPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?</p>
      </div>
    </div>
  );
}

function RussiaIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RussiaHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgRussiaUcrania 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgRussiaUcrania1} />
      </div>
      <RussiaPergunta />
    </div>
  );
}

function RussiaTxt() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">15%</p>
    </div>
  );
}

function RussiaButton() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <RussiaTxt />
        </div>
      </div>
    </div>
  );
}

function RussiaIconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RussiaRetorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <RussiaIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function RussiaBtn({ onClick }: { onClick: (e: any) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={onClick}>
      <RussiaButton />
      <RussiaRetorno />
    </div>
  );
}

function RussiaTxt1() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">85%</p>
    </div>
  );
}

function RussiaButton1() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <RussiaTxt1 />
        </div>
      </div>
    </div>
  );
}

function RussiaRetorno1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <RussiaIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function RussiaBtn1({ onClick }: { onClick: (e: any) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={onClick}>
      <RussiaButton1 />
      <RussiaRetorno1 />
    </div>
  );
}

function RussiaBotoes() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?",
        volume: "R$ 315.500 volume",
        porcentagemSim: 15,
        porcentagemNao: 85,
        imagem: imgImgRussiaUcrania1,
        isYes: isYes,
        question: "Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <RussiaBtn onClick={(e) => { e.stopPropagation(); handleSelect(true); }} />
      <RussiaBtn1 onClick={(e) => { e.stopPropagation(); handleSelect(false); }} />
    </div>
  );
}

function RussiaCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Politica</p>
      </div>
    </div>
  );
}

function RussiaFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <RussiaCatFreq />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <RussiaHeader />
          <VolumeFavoritar3 />
          <RussiaBotoes />
          <RussiaFooter />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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

function SocialMediasRewardsFavorite3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group3 />
    </div>
  );
}

function VolumeFavoritar3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 125.800 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Quem será o próximo líder a deixar o poder em 2025?</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo3 />
    </div>
  );
}

function Escolha4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Nenhum</p>
      </div>
    </div>
  );
}

function PorcentagemSim2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">85%</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes4() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "Nenhum",
        volume: "R$ 65.800",
        porcentagemSim: 85,
        porcentagemNao: 15,
        imagem: imgNenhum,
        isYes: type === 'sim',
        question: "Quem será o próximo líder a deixar o poder em 2025?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha4 />
      <PorcentagemSim2 />
      <Botoes4 />
    </div>
  );
}

function Escolha5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem} width="24" />
      </div>
      <BaseEscolha3 />
    </div>
  );
}

function Escolha6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink min-w-0 text-[12px] text-nowrap text-white overflow-hidden">
        <p className="leading-[1.2] truncate font-bold">Maduro - Venezuela</p>
      </div>
    </div>
  );
}

function PorcentagemSim3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">15%</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes5() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "Maduro - Venezuela",
        volume: "R$ 25.400",
        porcentagemSim: 15,
        porcentagemNao: 85,
        imagem: imgImagem1,
        isYes: type === 'sim',
        question: "Quem será o próximo líder a deixar o poder em 2025?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha6 />
      <PorcentagemSim3 />
      <Botoes5 />
    </div>
  );
}

function Escolha7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem1} width="24" />
      </div>
      <BaseEscolha4 />
    </div>
  );
}

function BaseEscolha5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <Escolha5 />
      <Escolha7 />
    </div>
  );
}

function CatFreq3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Politica</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq3 />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas escolhas</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <Header3 />
          <BaseEscolha5 />
          <Footer3 />
        </div>
      </div>
    </div>
  );
}

function LiderPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Quem será o próximo líder a deixar o poder em 2025?</p>
      </div>
    </div>
  );
}

function LiderIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LiderHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgLider">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgLider} />
      </div>
      <LiderPergunta />
    </div>
  );
}

function LiderEscolhaNenhum() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden font-bold">Nenhum</p>
      </div>
    </div>
  );
}

function LiderPorcentagemSimNenhum() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">85%</p>
      </div>
    </div>
  );
}

function LiderButtonSimNenhum() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre font-bold">SIM</p>
    </div>
  );
}

function LiderButtonNaoNenhum() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre font-bold">NÃO</p>
    </div>
  );
}

function LiderBotoesNenhum() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Nenhum",
        volume: "R$ 65.800",
        porcentagemSim: 85,
        porcentagemNao: 15,
        imagem: imgNenhum, 
        isYes: isYes,
        question: "Quem será o próximo líder a deixar o poder em 2025?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <div className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <LiderButtonSimNenhum />
      </div>
      <div className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <LiderButtonNaoNenhum />
      </div>
    </div>
  );
}

function LiderBaseEscolhaNenhum() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <LiderEscolhaNenhum />
      <LiderPorcentagemSimNenhum />
      <LiderBotoesNenhum />
    </div>
  );
}

function LiderRowNenhum() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgLiderNenhum} width="24" />
      </div>
      <LiderBaseEscolhaNenhum />
    </div>
  );
}

function LiderEscolhaMaduro() {
  return (  
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden font-bold">Maduro - Venezuela</p>
      </div>
    </div>    
  );
}

function LiderPorcentagemSimMaduro() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">15%</p>
      </div>
    </div>
  );
}

function LiderButtonSimMaduro() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre font-bold">SIM</p>
    </div>
  );
}

function LiderButtonNaoMaduro() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre font-bold">NÃO</p>
    </div>
  );
}

function LiderBotoesMaduro() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Maduro - Venezuela",
        volume: "R$ 25.400",
        porcentagemSim: 15,
        porcentagemNao: 85,
        imagem: imgLiderMaduro,
        isYes: isYes,
        question: "Quem será o próximo líder a deixar o poder em 2025?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <div className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <LiderButtonSimMaduro />
      </div>
      <div className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <LiderButtonNaoMaduro />
      </div>
    </div>
  );
}

function LiderBaseEscolhaMaduro() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <LiderEscolhaMaduro />
      <LiderPorcentagemSimMaduro />
      <LiderBotoesMaduro />
    </div>
  );
}

function LiderRowMaduro() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgLiderMaduro} width="24" />
      </div>
      <LiderBaseEscolhaMaduro />
    </div>
  );
}

function LiderBaseEscolha2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <LiderRowNenhum />
      <LiderRowMaduro />
    </div>
  );
}

function LiderCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Politica</p>
      </div>
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none whitespace-pre">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function LiderFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <LiderCatFreq />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <LiderHeader />
          <VolumeFavoritar4 />
          <LiderBaseEscolha2 />
          <LiderFooter />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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

function SocialMediasRewardsFavorite4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group4 />
    </div>
  );
}

function VolumeFavoritar4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 98.200 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Maisa Silva será anunciada como apresentadora em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo4 />
    </div>
  );
}

function Txt4() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">55%</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt4 />
        </div>
      </div>
    </div>
  );
}

function IconSeta4() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta4 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button12 />
      <Retorno4 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">45%</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt5 />
        </div>
      </div>
    </div>
  );
}

function IconSeta5() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta5 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button13 />
      <Retorno5 />
    </div>
  );
}

function Botoes6() {
  const onSelect = useContext(SelectionContext);
  const simClass = "bg-[#242424]";
  const naoClass = "bg-[#242424]";

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?",
        volume: "R$ 98.200",
        porcentagemSim: 55,
        porcentagemNao: 45,
        imagem: imgImgPergunta4,
        isYes: isYes,
        question: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?"
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <div className={`${simClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt4 />
            </div>
          </div>
        </div>
        <Retorno4 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <div className={`${naoClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt5 />
            </div>
          </div>
        </div>
        <Retorno5 />
      </div>
    </div>
  );
}

function CatFreq4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Entretenimento</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer4() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq4 />
    </div>
  );
}

function MaisaPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Maisa Silva será anunciada como apresentadora em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function MaisaIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaisaHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgMaisa">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgMaisa} />
      </div>
      <MaisaPergunta />
    </div>
  );
}

function MaisaTxtSim() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">55%</p>
    </div>
  );
}

function MaisaButtonSim() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <MaisaTxtSim />
        </div>
      </div>
    </div>
  );
}

function MaisaIconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaisaRetornoSim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <MaisaIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function MaisaBtnSim() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?",
        volume: "R$ 98.200",
        porcentagemSim: 55,
        porcentagemNao: 45,
        imagem: imgImgMaisa,
        isYes: true,
        question: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <MaisaButtonSim />
      <MaisaRetornoSim />
    </div>
  );
}

function MaisaTxtNao() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">45%</p>
    </div>
  );
}

function MaisaButtonNao() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <MaisaTxtNao />
        </div>
      </div>
    </div>
  );
}

function MaisaRetornoNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <MaisaIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function MaisaBtnNao() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?",
        volume: "R$ 98.200",
        porcentagemSim: 55,
        porcentagemNao: 45,
        imagem: imgImgMaisa,
        isYes: false,
        question: "Maisa Silva será anunciada como apresentadora em TV aberta até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <MaisaButtonNao />
      <MaisaRetornoNao />
    </div>
  );
}

function MaisaBotoes() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <MaisaBtnSim />
      <MaisaBtnNao />
    </div>
  );
}

function MaisaCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Entretenimento</p>
      </div>
    </div>
  );
}

function MaisaFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <MaisaCatFreq />
    </div>
  );
}

function CardMaisa() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <MaisaHeader />
          <VolumeFavoritar5 />
          <MaisaBotoes />
          <MaisaFooter />
        </div>
      </div>
    </div>
  );
}

function Group5() {
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

function SocialMediasRewardsFavorite5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group5 />
    </div>
  );
}

function VolumeFavoritar5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 245.600 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Casimiro estreará programa semanal fixo em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo5 />
    </div>
  );
}

function Txt6() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">45%</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt6 />
        </div>
      </div>
    </div>
  );
}

function IconSeta6() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta6 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button14 />
      <Retorno6 />
    </div>
  );
}

function Txt7() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">55%</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt7 />
        </div>
      </div>
    </div>
  );
}

function IconSeta7() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta7 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button15 />
      <Retorno7 />
    </div>
  );
}

function Botoes7() {
  const onSelect = useContext(SelectionContext);
  const simClass = "bg-[#242424]";
  const naoClass = "bg-[#242424]";

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
        volume: "R$ 245.600",
        porcentagemSim: 45,
        porcentagemNao: 55,
        imagem: imgImgPergunta5,
        isYes: isYes,
        question: "Casimiro estreará programa semanal fixo em TV aberta até 2026?"
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <div className={`${simClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt6 />
            </div>
          </div>
        </div>
        <Retorno6 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <div className={`${naoClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt7 />
            </div>
          </div>
        </div>
        <Retorno7 />
      </div>
    </div>
  );
}

function CatFreq5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Entretenimento</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq5 />
    </div>
  );
}

function CasimiroPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Casimiro estreará programa semanal fixo em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function CasimiroIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CasimiroHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgCasemiro">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgCasemiro} />
      </div>
      <CasimiroPergunta />
    </div>
  );
}

function CasimiroTxtSim() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">45%</p>
    </div>
  );
}

function CasimiroButtonSim() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <CasimiroTxtSim />
        </div>
      </div>
    </div>
  );
}

function CasimiroIconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CasimiroRetornoSim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <CasimiroIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function CasimiroBtnSim() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
        volume: "R$ 245.600",
        porcentagemSim: 45,
        porcentagemNao: 55,
        imagem: imgImgCasemiro,
        isYes: true,
        question: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <CasimiroButtonSim />
      <CasimiroRetornoSim />
    </div>
  );
}

function CasimiroTxtNao() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">55%</p>
    </div>
  );
}

function CasimiroButtonNao() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <CasimiroTxtNao />
        </div>
      </div>
    </div>
  );
}

function CasimiroRetornoNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <CasimiroIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function CasimiroBtnNao() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
        volume: "R$ 245.600",
        porcentagemSim: 45,
        porcentagemNao: 55,
        imagem: imgImgCasemiro,
        isYes: false,
        question: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <CasimiroButtonNao />
      <CasimiroRetornoNao />
    </div>
  );
}

function CasimiroBotoes() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <CasimiroBtnSim />
      <CasimiroBtnNao />
    </div>
  );
}

function CasimiroCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esportes</p>
      </div>
    </div>
  );
}

function CasimiroFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CasimiroCatFreq />
    </div>
  );
}

function CardCasimiro() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <CasimiroHeader />
          <VolumeFavoritar6 />
          <CasimiroBotoes />
          <CasimiroFooter />
        </div>
      </div>
    </div>
  );
}

function Group6() {
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

function SocialMediasRewardsFavorite6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group6 />
    </div>
  );
}

function VolumeFavoritar6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 45.900 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Quem será o próximo técnico demitido na Série A?</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo6 />
    </div>
  );
}

function Escolha8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink min-w-0 text-[12px] text-nowrap text-white overflow-hidden">
        <p className="leading-[1.2] truncate font-bold">Vojvoda - Santos</p>
      </div>
    </div>
  );
}

function PorcentagemSim4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">45%</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes8() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "Vojvoda - Santos",
        volume: "R$ 15.400",
        porcentagemSim: 45,
        porcentagemNao: 55,
        imagem: imgImagem2,
        isYes: type === 'sim',
        question: "Quem será o próximo técnico demitido na Série A?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha8 />
      <PorcentagemSim4 />
      <Botoes8 />
    </div>
  );
}

function Escolha9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem2} width="24" />
      </div>
      <BaseEscolha6 />
    </div>
  );
}

function Escolha10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden font-bold">Dorival - Corinthians</p>
      </div>
    </div>
  );
}

function PorcentagemSim5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">35%</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre">SIM</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px]" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre">NÃO</p>
    </div>
  );
}

function Botoes9() {
  const onSelect = useContext(SelectionContext);

  const handleClick = (type: 'sim' | 'nao') => {
    if (onSelect) {
      onSelect({
        nome: "Dorival - Corinthians",
        volume: "R$ 12.200",
        porcentagemSim: 35,
        porcentagemNao: 65,
        imagem: imgImagem3,
        isYes: type === 'sim',
        question: "Quem será o próximo técnico demitido na Série A?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <InteractiveSmallButton type="sim" onClick={(e) => { e.stopPropagation(); handleClick('sim'); }} />
      <InteractiveSmallButton type="nao" onClick={(e) => { e.stopPropagation(); handleClick('nao'); }} />
    </div>
  );
}

function BaseEscolha7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Escolha10 />
      <PorcentagemSim5 />
      <Botoes9 />
    </div>
  );
}

function Escolha11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="24" src={imgImagem3} width="24" />
      </div>
      <BaseEscolha7 />
    </div>
  );
}

function BaseEscolha8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <Escolha9 />
      <Escolha11 />
    </div>
  );
}

function CatFreq6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esportes</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq6 />
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none">Mais 6 escolhas escolhas</p>
      </div>
    </div>
  );
}

function TecnicoPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Quem será o próximo técnico demitido na Série A?</p>
      </div>
    </div>
  );
}

function TecnicoIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TecnicoHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgTecnico">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgTecnico} />
      </div>
      <TecnicoPergunta />
    </div>
  );
}

function TecnicoEscolhaVojvoda() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden font-bold">Vojvoda - Santos</p>
      </div>
    </div>
  );
}

function TecnicoPorcentagemVojvoda() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">45%</p>
      </div>
    </div>
  );
}

function TecnicoButtonSim({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px] cursor-pointer" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#32A866] whitespace-pre font-bold">SIM</p>
    </div>
  );
}

function TecnicoButtonNao({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#242424] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[12px] py-0 relative rounded-[10px] shrink-0 w-[48px] cursor-pointer" data-name="Button">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-[#D92341] whitespace-pre font-bold">NÃO</p>
    </div>
  );
}

function TecnicoBotoesVojvoda() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Vojvoda - Santos",
        volume: "R$ 15.400",
        porcentagemSim: 45,
        porcentagemNao: 55,
        imagem: imgTecnicoVojvoda,
        isYes: isYes,
        question: "Quem será o próximo técnico demitido na Série A?",
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <TecnicoButtonSim onClick={(e) => { e.stopPropagation(); handleSelect(true); }} />
      <TecnicoButtonNao onClick={(e) => { e.stopPropagation(); handleSelect(false); }} />
    </div>
  );
}

function TecnicoBaseEscolhaVojvoda() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <TecnicoEscolhaVojvoda />
      <TecnicoPorcentagemVojvoda />
      <TecnicoBotoesVojvoda />
    </div>
  );
}

function TecnicoRowVojvoda() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full rounded-full" height="24" src={imgTecnicoVojvoda} width="24" />
      </div>
      <TecnicoBaseEscolhaVojvoda />
    </div>
  );
}

function TecnicoEscolhaDorival() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="escolha">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden font-bold">Dorival - Corinthians</p>
      </div>
    </div>
  );
}

function TecnicoPorcentagemDorival() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="porcentagemSim">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[1.1] whitespace-pre font-bold">35%</p>
      </div>
    </div>
  );
}

function TecnicoBotoesDorival() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Dorival - Corinthians",
        volume: "R$ 12.200",
        porcentagemSim: 35,
        porcentagemNao: 65,
        imagem: imgTecnicoDorival,
        isYes: isYes,
        question: "Quem será o próximo técnico demitido na Série A?",
        isMultipleChoice: true
      });
    }
  };
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="botoes">
      <TecnicoButtonSim onClick={(e) => { e.stopPropagation(); handleSelect(true); }} />
      <TecnicoButtonNao onClick={(e) => { e.stopPropagation(); handleSelect(false); }} />
    </div>
  );
}

function TecnicoBaseEscolhaDorival() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <TecnicoEscolhaDorival />
      <TecnicoPorcentagemDorival />
      <TecnicoBotoesDorival />
    </div>
  );
}

function TecnicoRowDorival() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="escolha">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full rounded-full" height="24" src={imgTecnicoDorival} width="24" />
      </div>
      <TecnicoBaseEscolhaDorival />
    </div>
  );
}

function TecnicoLista() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="baseEscolha">
      <TecnicoRowVojvoda />
      <TecnicoRowDorival />
    </div>
  );
}

function TecnicoCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esportes</p>
      </div>
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
        <p className="leading-none whitespace-pre">Mais 6 escolhas</p>
      </div>
    </div>
  );
}

function TecnicoFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <TecnicoCatFreq />
    </div>
  );
}

function CardTecnico() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <TecnicoHeader />
          <VolumeFavoritar7 />
          <TecnicoLista />
          <TecnicoFooter />
        </div>
      </div>
    </div>
  );
}

function Group7() {
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

function SocialMediasRewardsFavorite7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social,Medias,Rewards/Favorite">
      <Group7 />
    </div>
  );
}

function VolumeFavoritar7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 180.300 montante negociado</p>
      </div>
    </div>
  );
}

function Titulo7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="titulo">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Felipe Neto lançará partido político ou filiação oficial até 2026?</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="header">
      <Titulo7 />
    </div>
  );
}

function Txt8() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">35%</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt8 />
        </div>
      </div>
    </div>
  );
}

function IconSeta8() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta8 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function Btn8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button20 />
      <Retorno8 />
    </div>
  );
}

function Txt9() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">65%</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt9 />
        </div>
      </div>
    </div>
  );
}

function IconSeta9() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta9 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function Btn9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button21 />
      <Retorno9 />
    </div>
  );
}

function Botoes10() {
  const onSelect = useContext(SelectionContext);
  const simClass = "bg-[#242424]";
  const naoClass = "bg-[#242424]";

  const handleSelect = (isYes: boolean) => {
    if (onSelect) {
      onSelect({
        nome: "Felipe Neto lançará partido político ou filiação oficial até 2026?",
        volume: "R$ 180.300",
        porcentagemSim: 35,
        porcentagemNao: 65,
        imagem: imgImgPergunta7,
        isYes: isYes,
        question: "Felipe Neto lançará partido político ou filiação oficial até 2026?"
      });
    }
  };

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(true); }}>
        <div className={`${simClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt8 />
            </div>
          </div>
        </div>
        <Retorno8 />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(false); }}>
        <div className={`${naoClass} h-[40px] relative rounded-[10px] shrink-0 w-full transition-colors  `} data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <Txt9 />
            </div>
          </div>
        </div>
        <Retorno9 />
      </div>
    </div>
  );
}

function CatFreq7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Entretenimento</p>
      </div>
      <div className="relative shrink-0 size-[4px]" data-name="circle">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, white)" id="circle" r="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Mercado Único</p>
      </div>
    </div>
  );
}

function Footer7() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <CatFreq7 />
    </div>
  );
}

function FelipeNetoPergunta() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink grow basis-0 min-w-0" data-name="pergunta">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[1.2] font-bold">Felipe Neto lançará partido político ou filiação oficial até 2026?</p>
      </div>
    </div>
  );
}

function FelipeNetoIconFavorito() {
  return (
    <div className="absolute bottom-0 left-0 size-[28px]" data-name="iconFavorito">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(36, 36, 36, 1)", "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="iconFavorito">
            <rect fill="var(--fill-0, #242424)" height="26" rx="13" width="26" x="1" y="1" />
            <rect height="26" rx="13" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="2" width="26" x="1" y="1" />
            <path clipRule="evenodd" d={p23f200} fillRule="evenodd" id="favorito" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FelipeNetoHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 size-[72px]" data-name="imgFelipe">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgFelipe} />
      </div>
      <FelipeNetoPergunta />
    </div>
  );
}

function FelipeNetoTxtSim() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">SIM</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">35%</p>
    </div>
  );
}

function FelipeNetoButtonSim() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <FelipeNetoTxtSim />
        </div>
      </div>
    </div>
  );
}

function FelipeNetoIconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FelipeNetoRetornoSim() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <FelipeNetoIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$670</p>
      </div>
    </div>
  );
}

function FelipeNetoBtnSim() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Felipe Neto lançará partido político ou filiação oficial até 2026?",
        volume: "R$ 180.300",
        porcentagemSim: 35,
        porcentagemNao: 65,
        imagem: imgImgFelipe,
        isYes: true,
        question: "Felipe Neto lançará partido político ou filiação oficial até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <FelipeNetoButtonSim />
      <FelipeNetoRetornoSim />
    </div>
  );
}

function FelipeNetoTxtNao() {
  return (
    <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">NÃO</p>
      <p className="relative shrink-0 text-white text-[16px] font-bold">65%</p>
    </div>
  );
}

function FelipeNetoButtonNao() {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <FelipeNetoTxtNao />
        </div>
      </div>
    </div>
  );
}

function FelipeNetoRetornoNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <FelipeNetoIconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$117</p>
      </div>
    </div>
  );
}

function FelipeNetoBtnNao() {
  const onSelect = useContext(SelectionContext);
  const handleSelect = () => {
    if (onSelect) {
      onSelect({
        nome: "Felipe Neto lançará partido político ou filiação oficial até 2026?",
        volume: "R$ 180.300",
        porcentagemSim: 35,
        porcentagemNao: 65,
        imagem: imgImgFelipe,
        isYes: false,
        question: "Felipe Neto lançará partido político ou filiação oficial até 2026?",
        isMultipleChoice: false
      });
    }
  };

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="btn" onClick={(e) => { e.stopPropagation(); handleSelect(); }}>
      <FelipeNetoButtonNao />
      <FelipeNetoRetornoNao />
    </div>
  );
}

function FelipeNetoBotoes() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <FelipeNetoBtnSim />
      <FelipeNetoBtnNao />
    </div>
  );
}

function FelipeNetoCatFreq() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="cat/freq">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Esportes</p>
      </div>
    </div>
  );
}

function FelipeNetoFooter() {
  return (
    <div className="content-stretch flex gap-[10px] items-end opacity-[0.56] relative shrink-0 w-full" data-name="footer">
      <FelipeNetoCatFreq />
    </div>
  );
}

function VolumeFavoritarFelipeNeto() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="volume/favoritar">
      <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none">R$ 180.300 montante negociado</p>
      </div>
    </div>
  );
}

function CardFelipeNeto() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative size-full">
          <FelipeNetoHeader />
          <VolumeFavoritarFelipeNeto />
          <FelipeNetoBotoes />
          <FelipeNetoFooter />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p80fedc0} id="Path" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_2"></g>
        </g>
      </svg>
    </div>
  );
}



export default function CardTotais() {
  const [selectedOutcome, setSelectedOutcome] = useState<OutcomeData | null>(null);
  const [successToastData, setSuccessToastData] = useState<{
    artistName: string;
    isYes: boolean;
    question: string;
    amount: number;
    returnAmount: number;
  } | null>(null);

  // Confetti effect
  useEffect(() => {
    if (successToastData) {
      const count = 200;
      const defaults = {
        origin: { y: 0.9 },
        zIndex: 55,
        colors: ['#32A866', '#19954F']
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          ticks: 70
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55, ticks: 50 });
      fire(0.2, { spread: 60, ticks: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, ticks: 80 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, ticks: 65 });
      fire(0.1, { spread: 120, startVelocity: 45, ticks: 65 });
    }
  }, [successToastData]);

  const handleSelect = (data: OutcomeData) => {
    setSelectedOutcome(data);
  };

  return (
    <SelectionContext.Provider value={handleSelect}>
      <div className="relative size-full" data-name="cardTotais">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[28px] px-[20px] relative size-full">
            <Card1 />
            <Card3 />
            <Card5 />
            <Card7 />
            <ApostasAndCassino />
            <CardMaisa />
            <CardCasimiro />
            <CardTecnico />
            <CardFelipeNeto />
          </div>
        </div>

        <OrderBottomSheet 
          outcome={selectedOutcome} 
          onClose={() => setSelectedOutcome(null)} 
          onBuy={(amount, isYes) => {
            if (!selectedOutcome) return;
            const percentage = isYes ? (selectedOutcome.porcentagemSim / 100) : (selectedOutcome.porcentagemNao / 100);
            const safePercentage = percentage > 0 ? percentage : 0.5;
            const returnAmount = amount / safePercentage;
            
            setSuccessToastData({
              artistName: selectedOutcome.nome,
              isYes,
              question: selectedOutcome.question || selectedOutcome.nome,
              amount,
              returnAmount
            });
          }} 
        />

        {createPortal(
          <AnimatePresence>
            {successToastData && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-[16px] left-[20px] right-[20px] z-[80] max-w-[499px] mx-auto"
              >
                <OrderSucess 
                  artistName={successToastData.artistName}
                  isYes={successToastData.isYes}
                  question={successToastData.question}
                  amount={successToastData.amount}
                  returnAmount={successToastData.returnAmount}
                  onClose={() => setSuccessToastData(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </SelectionContext.Provider>
  );
}
