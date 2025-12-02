import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import OrderSucess from "../imports/OrderSucess";
import OrderBottomSheet from "./OrderBottomSheet";

import svgPaths from "./svg-76yj887p1q";
import imgImgPergunta from "figma:asset/ba0d593222b68fd51f04625ff6e359ca9c5e01d5.png";
import imgGemini from "figma:asset/461bb2736d8af00c79d5e53b9602e3f7d82da44b.png";
import imgOpenAi from "figma:asset/f59c1fad2703647eebc0b78fdc965f264cf5b875.png";
import imgImgPergunta1 from "figma:asset/bc688497b76579f23b3b302970e9862ac262e20c.png";
import imgImgPergunta2 from "figma:asset/2828559ede8afba16dbb25b42ef7170b973a7acf.png";
import imgTimothee from "figma:asset/d43ec0304225d66c2b31243d08f92fc8dadd29c2.png";
import imgLeonardo from "figma:asset/840908a0aec6adc0e8118894660f3fe6164e8c49.png";
import imgImgPergunta3 from "figma:asset/51831c4fa7459723d45a3d44a343400360f6fba3.png";
import imgBadBunny from "figma:asset/ace2b2254084b0d52658c208affa2d3af8c88f48.png";
import imgTaylorSwift from "figma:asset/85690053487b583dbde681f669fd99e3a351a7e9.png";
import imgSpotifyHeader from "figma:asset/a2b24a8fb5ea40a4ed76866da12ed2a00f072ba4.png";

// Type definition for outcome data (compatible with OrderBottomSheetFuncional)
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

// Helper Components from Figma Import

function Group() {
  return (
    <div
      className="absolute contents inset-0"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group">
          <g id="Path"></g>
          <path
            clipRule="evenodd"
            d={svgPaths.p230af100}
            fillRule="evenodd"
            id="Path_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SocialMediasRewardsFavorite() {
  return null;
}

function IconSeta() {
  return (
    <div
      className="h-[6.667px] relative w-[9.333px]"
      data-name="iconSeta"
    >
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 11 8"
        >
          <g id="iconSeta">
            <path
              d="M9.83333 3.83333H0.5"
              id="Path"
              stroke="var(--stroke-0, #E3E3E3)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 7.16667L9.83333 3.83333"
              id="Path_2"
              stroke="var(--stroke-0, #E3E3E3)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 0.5L9.83333 3.83333"
              id="Path_3"
              stroke="var(--stroke-0, #E3E3E3)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CardTemplate({
  imgSrc,
  title,
  volume,
  children,
  category,
  frequency,
  moreChoicesText,
  imgHeightClass = "h-[88px]", // Default fallback
  imgPositionClass = "top-[-22.66%]", // Default fallback
}: {
  imgSrc: string;
  title: string;
  volume: string;
  children: React.ReactNode;
  category: string;
  frequency?: string;
  moreChoicesText?: string;
  imgHeightClass?: string;
  imgPositionClass?: string;
}) {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="cardHeader"
    >
      <div
        className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full overflow-hidden"
        data-name="imgPergunta"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
          <ImageWithFallback
            src={imgSrc}
            alt=""
            className={`absolute left-0 max-w-none w-full ${imgPositionClass} ${imgHeightClass}`}
          />
        </div>
      </div>

      <div
        className="bg-[#1E1E1E] box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
        data-name="card"
      >
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full h-[40px]">
          <p className="leading-[1.2] line-clamp-2 font-bold">
            {title}
          </p>
        </div>

        <div
          className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full"
          data-name="volume/favoritar"
        >
          <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[12px]">
            <p className="opacity-[0.56] leading-none">
              R$ 135.789,86 montante negociado
            </p>
          </div>
          <SocialMediasRewardsFavorite />
        </div>

        {children}

        <div
          className="content-stretch flex gap-[10px] items-center opacity-[0.56] relative shrink-0 w-full"
          data-name="footer"
        >
          <div
            className="content-stretch flex gap-[10px] items-center relative shrink-0"
            data-name="cat/freq"
          >
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
              <p className="leading-none whitespace-pre">
                {category}
              </p>
            </div>
          </div>

          {moreChoicesText && (
            <div className="basis-0 flex flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-right">
              <p className="leading-none">{moreChoicesText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Slide 1 Content
function Slide1Content({
  onSelect,
}: {
  onSelect: (data: OutcomeData) => void;
}) {
  const handleSelect = (
    e: React.MouseEvent,
    isYes: boolean,
  ) => {
    e.stopPropagation(); // Prevent navigating if card has navigation

    const formattedVolume = "R$ 135.789,86";

    onSelect({
      nome: "ARC Raiders será o jogo do ano na The Game Awards 25?",
      volume: formattedVolume,
      porcentagemSim: 60,
      porcentagemNao: 40,
      imagem: imgImgPergunta,
      isYes: isYes,
      question:
        "ARC Raiders será o jogo do ano na The Game Awards 25?",
    });
  };

  return (
    <div
      className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
      data-name="botoes"
    >
      {/* Yes Button */}
      <div
        className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer"
        onClick={(e) => handleSelect(e, true)}
      >
        <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
                <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#32A866] font-bold">
                  SIM
                </p>
                <p className="relative shrink-0 text-white text-[16px] font-bold">
                  60%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-full">
          <p className="text-[#e3e3e3] text-[10px] leading-none">
            R$100
          </p>
          <div className="flex-none scale-y-[-100%]">
            <IconSeta />
          </div>
          <p className="text-[#e3e3e3] text-[10px] leading-none">
            R$166
          </p>
        </div>
      </div>

      {/* No Button */}
      <div
        className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer"
        onClick={(e) => handleSelect(e, false)}
      >
        <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
              <div className="basis-0 content-stretch flex font-['DM_Sans:Bold',sans-serif] grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
                <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-[#D92341] font-bold">
                  NÃO
                </p>
                <p className="relative shrink-0 text-white text-[16px] font-bold">
                  40%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-full">
          <p className="text-[#e3e3e3] text-[10px] leading-none">
            R$100
          </p>
          <div className="flex-none scale-y-[-100%]">
            <IconSeta />
          </div>
          <p className="text-[#e3e3e3] text-[10px] leading-none">
            R$250
          </p>
        </div>
      </div>
    </div>
  );
}

// Slide 2 Content (Choice)
function Slide2Content({
  onSelect,
}: {
  onSelect: (data: OutcomeData) => void;
}) {
  const totalVolume = 978422.0;

  const ChoiceRow = ({
    icon,
    name,
    percent,
  }: {
    icon: string;
    name: string;
    percent: string;
  }) => (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]">
        <img
          alt=""
          className="block max-w-none size-full"
          height="24"
          src={icon}
          width="24"
        />
      </div>
      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
          <p className="font-['DM_Sans:Bold',sans-serif] text-[12px] text-white leading-[1.2] font-bold">
            {name}
          </p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          <p className="leading-[1.1] whitespace-pre font-bold">
            {percent}
          </p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const percentVal = parseInt(percent);
              // Volume fixo da escolha, independente de ser sim/não
              const choiceVolume =
                totalVolume * (percentVal / 100);
              const formattedVolume = `R$ ${choiceVolume.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

              onSelect({
                nome: name,
                volume: formattedVolume,
                porcentagemSim: percentVal, // Visual: mantem percentual da escolha
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: true,
                question:
                  "Qual empresa terá o melhor modelo de IA até o final 25?",
                isMultipleChoice: true, // Flag para volume fixo
              });
            }}
          >
            <p className="text-[10px] text-[#32A866] font-bold">
              SIM
            </p>
          </div>
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const percentVal = parseInt(percent);
              // Volume fixo da escolha
              const choiceVolume =
                totalVolume * (percentVal / 100);
              const formattedVolume = `R$ ${choiceVolume.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

              onSelect({
                nome: name,
                volume: formattedVolume,
                porcentagemSim: percentVal,
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: false,
                question:
                  "Qual empresa terá o melhor modelo de IA até o final 25?",
                isMultipleChoice: true, // Flag para volume fixo
              });
            }}
          >
            <p className="text-[10px] text-[#D92341] font-bold">
              NÃO
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <ChoiceRow icon={imgGemini} name="Gemini" percent="60%" />
      <ChoiceRow
        icon={imgOpenAi}
        name="Open Ai"
        percent="15%"
      />
    </div>
  );
}

// Slide 3 Content (Updated with Bad Bunny / Taylor Swift data)
function Slide3Content({
  onSelect,
}: {
  onSelect: (data: OutcomeData) => void;
}) {
  const volumes: Record<string, string> = {
    "Bad Bunny": "R$ 234.345",
    "Taylor Swift": "R$ 21.124",
  };

  const ChoiceRow = ({
    icon,
    name,
    percent,
  }: {
    icon: string;
    name: string;
    percent: string;
  }) => (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]">
        <img
          alt=""
          className="block max-w-none size-full"
          height="24"
          src={icon}
          width="24"
        />
      </div>
      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
          <p className="font-['DM_Sans:Bold',sans-serif] text-[12px] text-white leading-[1.2] font-bold">
            {name}
          </p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          <p className="leading-[1.1] whitespace-pre font-bold">
            {percent}
          </p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const volume = volumes[name] || "R$ 0";
              const percentVal = parseInt(percent);

              onSelect({
                nome: name,
                volume: volume,
                porcentagemSim: percentVal,
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: true,
                question:
                  "Quem será o artista mais popular no Spotify este ano?",
                isMultipleChoice: true, // Flag para volume fixo
              });
            }}
          >
            <p className="text-[10px] text-[#32A866] font-bold">
              SIM
            </p>
          </div>
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const volume = volumes[name] || "R$ 0";
              const percentVal = parseInt(percent);

              onSelect({
                nome: name,
                volume: volume,
                porcentagemSim: percentVal,
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: false,
                question:
                  "Quem será o artista mais popular no Spotify este ano?",
                isMultipleChoice: true, // Flag para volume fixo
              });
            }}
          >
            <p className="text-[10px] text-[#D92341] font-bold">
              NÃO
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <ChoiceRow
        icon={imgBadBunny}
        name="Bad Bunny"
        percent="85%"
      />
      <ChoiceRow
        icon={imgTaylorSwift}
        name="Taylor Swift"
        percent="15%"
      />
    </div>
  );
}

// Slide 4 Content (Choice with different data)
function Slide4Content({
  onSelect,
}: {
  onSelect: (data: OutcomeData) => void;
}) {
  const volumes: Record<string, string> = {
    "Timothée Chalamet": "R$ 655.856",
    "Leonardo DiCaprio": "R$ 364.364",
  };

  const ChoiceRow = ({
    icon,
    name,
    percent,
  }: {
    icon: string;
    name: string;
    percent: string;
  }) => (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]">
        <img
          alt=""
          className="block max-w-none size-full"
          height="24"
          src={icon}
          width="24"
        />
      </div>
      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
        <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
          <p className="font-['DM_Sans:Bold',sans-serif] text-[12px] text-white leading-[1.2] font-bold truncate">
            {name}
          </p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          <p className="leading-[1.1] whitespace-pre font-bold">
            {percent}
          </p>
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const volume = volumes[name] || "R$ 0";
              const percentVal = parseInt(percent);

              onSelect({
                nome: name,
                volume: volume,
                porcentagemSim: percentVal,
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: true,
                question:
                  "Quem será escolhido o melhor ator do Oscars de 2026?",
                isMultipleChoice: true,
              });
            }}
          >
            <p className="text-[10px] text-[#32A866] font-bold">
              SIM
            </p>
          </div>
          <div
            className="bg-[#242424] flex items-center justify-center px-[12px] h-[24px] rounded-[10px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const volume = volumes[name] || "R$ 0";
              const percentVal = parseInt(percent);

              onSelect({
                nome: name,
                volume: volume,
                porcentagemSim: percentVal,
                porcentagemNao: 100 - percentVal,
                imagem: icon,
                isYes: false,
                question:
                  "Quem será escolhido o melhor ator do Oscars de 2026?",
                isMultipleChoice: true,
              });
            }}
          >
            <p className="text-[10px] text-[#D92341] font-bold">
              NÃO
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <ChoiceRow
        icon={imgTimothee}
        name="Timothée Chalamet"
        percent="45%"
      />
      <ChoiceRow
        icon={imgLeonardo}
        name="Leonardo DiCaprio"
        percent="25%"
      />
    </div>
  );
}

export default function DestaquesCarousel() {
  const navigate = useNavigate();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedOutcome, setSelectedOutcome] =
    useState<OutcomeData | null>(null);
  const [successToastData, setSuccessToastData] = useState<{
    artistName: string;
    isYes: boolean;
    question: string;
    amount: number;
    returnAmount: number;
  } | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (successToastData) {
      // Dispara confetes saindo de trás do toaster (bottom center)
      const count = 200;
      const defaults = {
        origin: { y: 0.9 }, // Perto do bottom, onde o toaster aparece
        zIndex: 55, // Abaixo do toaster (z-60) para dar o efeito de "saindo de trás"
        colors: ["#32A866", "#19954F"], // Cores do tema (somente verdes)
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          ticks: 70, // Valor base ajustado para o range 50-80
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        ticks: 50, // Limite inferior do range solicitado
      });

      fire(0.2, {
        spread: 60,
        ticks: 60,
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        ticks: 80, // Limite superior do range solicitado
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        ticks: 65,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        ticks: 65,
      });
    }
  }, [successToastData]);

  // Add global styles for the progress animation
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes progressFill {
        from { width: 0%; }
        to { width: 100%; }
      }
      .animate-progress {
        animation: progressFill 8s linear;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleSelection = (data: OutcomeData) => {
    setSelectedOutcome(data);
  };

  return (
    <div
      className="w-full pb-[0px] pt-[0px] relative"
      style={{
        backgroundImage:
          "linear-gradient(-3.28706e-06deg, rgba(45, 95, 58, 0.36) 0%, rgba(45, 95, 58, 0.36) 54%, rgba(25, 149, 79, 0.6) 100%), linear-gradient(90deg, rgb(25, 149, 79) 0%, rgb(25, 149, 79) 100%)",
      }}
    >
      <div
        className="px-0 pt-0 pb-[28px]"
        style={{
          backgroundImage:
            "linear-gradient(-3.07684e-06deg, rgba(18, 59, 36, 0.6) 0%, rgba(22, 76, 46, 0.6) 54%, rgba(22, 76, 46, 0.6) 100%), linear-gradient(90deg, rgb(22, 76, 46) 0%, rgb(22, 76, 46) 100%)",
        }}
      >
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnInteraction: false, // Keep autoplaying even if user interacts
              stopOnMouseEnter: false,
            }),
          ]}
        >
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem className="basis-full">
              <div className="px-[20px]">
                <CardTemplate
                  imgSrc={imgImgPergunta}
                  imgHeightClass="h-[199.86%] object-cover"
                  imgPositionClass="top-[-22.66%]"
                  title="ARC Raiders será o jogo do ano na The Game Awards 25?"
                  volume="R$ 135.789,86 volume"
                  category="Entretenimento"
                  frequency="Anual"
                >
                  <Slide1Content onSelect={handleSelection} />
                </CardTemplate>
              </div>
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem className="basis-full">
              <div className="px-[20px]">
                <CardTemplate
                  imgSrc={imgImgPergunta1}
                  imgHeightClass="h-[253.79%] object-cover"
                  imgPositionClass="top-[-66.67%]"
                  title="Qual empresa terá o melhor modelo de IA até o final 25?"
                  volume="R$ 978.422 volume"
                  category="Tecnologia"
                  frequency="Mercado Único"
                  moreChoicesText="Mais 6 escolhas"
                >
                  <Slide2Content onSelect={handleSelection} />
                </CardTemplate>
              </div>
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem className="basis-full">
              <div
                className="px-[20px] cursor-pointer"
                onClick={() => navigate("/mercado")}
              >
                <CardTemplate
                  imgSrc={imgSpotifyHeader}
                  imgHeightClass="h-full object-cover"
                  imgPositionClass="top-0"
                  title="Quem será o artista mais popular no Spotify este ano?"
                  volume="R$ 2.234.345 volume"
                  category="Entretenimento"
                  frequency="Mercado Único"
                  moreChoicesText="Mais 6 escolhas"
                >
                  <Slide3Content onSelect={handleSelection} />
                </CardTemplate>
              </div>
            </CarouselItem>

            {/* Slide 4 */}
            <CarouselItem className="basis-full">
              <div className="px-[20px]">
                <CardTemplate
                  imgSrc={imgImgPergunta3}
                  imgHeightClass="h-[191.29%] object-cover"
                  imgPositionClass="top-[-3.6%]"
                  title="Quem será escolhido o melhor ator do Oscars de 2026?"
                  volume="R$ 1.457.458 volume"
                  category="Cultura"
                  frequency="Anual"
                  moreChoicesText="Mais 6 escolhas"
                >
                  <Slide4Content onSelect={handleSelection} />
                </CardTemplate>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Custom Pagination / Bullets */}
        <div
          style={{
            bottom: "0px",
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "20px",
            textAlign: "left",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              margin: "0px",
              padding: "0px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className={`relative transition-all duration-300 ease-in-out ${i === current ? "w-[16px]" : "w-[6px]"} h-[6px]`}
                onClick={() => api?.scrollTo(i)}
              >
                {i === current ? (
                  <div
                    key={current}
                    className="w-full h-full relative rounded-full overflow-hidden"
                  >
                    {/* Background line */}
                    <div className="absolute inset-0 bg-[#164C2E] opacity-20 bg-[rgb(23,23,23)]"></div>
                    {/* Progress line */}
                    <div className="absolute top-0 left-0 h-full bg-[#164C2E] animate-progress bg-[rgb(23,23,23)]"></div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#171717] rounded-full opacity-[0.32]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <OrderBottomSheet
        outcome={selectedOutcome}
        onClose={() => setSelectedOutcome(null)}
        onBuy={(amount, isYes) => {
          if (!selectedOutcome) return;
          const percentage = isYes
            ? selectedOutcome.porcentagemSim / 100
            : selectedOutcome.porcentagemNao / 100;
          const returnAmount = amount / percentage;

          setSuccessToastData({
            artistName: selectedOutcome.nome,
            isYes,
            question:
              selectedOutcome.question || selectedOutcome.nome,
            amount,
            returnAmount,
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
        document.body,
      )}
    </div>
  );
}
