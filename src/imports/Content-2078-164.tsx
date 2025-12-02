import svgPathsData from "./svg-gm59clt5kl";
import React, { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import imgImagem from "figma:asset/9f461ed5c177aabb0fc37cdea7a985be5dd89d45.png";
import imgImagem1 from "figma:asset/1bfd81d4b769b7a9ec6cf3d17534b7d7b096b973.png";
import OrderBottomSheet from "../components/OrderBottomSheet";
import type { OutcomeData } from "../components/InternaMercado";
import OrderSucess from "./OrderSucess";

// Combinando paths de SVGs necessários
const svgPaths = {
  ...svgPathsData,
  triangle: "M2.21735 0.396903L0.110182 4.0092C-0.200925 4.54252 0.183772 5.21229 0.801205 5.21229H5.01555C5.63298 5.21229 6.01768 4.54252 5.70657 4.0092L3.5994 0.396904C3.2907 -0.1323 2.52605 -0.132302 2.21735 0.396903Z"
};

interface ChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function ChipBase({ label, isActive, onClick }: ChipProps) {
  return (
    <div 
      onClick={onClick}
      className={`box-border content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[16px] py-[7px] relative rounded-[100px] shrink-0 cursor-pointer transition-colors ${
        isActive ? 'bg-[#164c2e]' : ''
      }`} 
      data-name="chip"
    >
      <div 
        aria-hidden="true" 
        className={`absolute border-solid inset-0 pointer-events-none rounded-[100px] ${
          isActive ? 'border-2 border-[#32a866]' : 'border border-[#1e1e1e]'
        }`} 
      />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

function Chips({ currentFilter, onFilterChange }: { currentFilter: string, onFilterChange: (filter: string) => void }) {
  const filters = [
    "Todos",
    "Maior valorização (%)",
    "Maior desvalorização (%)",
    "Maior valor atual (R$)",
    "Menor valor atual (R$)",
    "Próximos a fechar",
    "Ordem alfabética"
  ];

  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-[20px] py-0 relative shrink-0 overflow-x-auto no-scrollbar w-full" data-name="chips">
      {filters.map((filter) => (
        <ChipBase 
          key={filter}
          label={filter}
          isActive={currentFilter === filter}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
}

function IconSetaAccordion({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconSetaAccordion">
      <div className={`absolute inset-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ "--fill-0": isOpen ? "rgba(55, 55, 55, 1)" : "rgba(36, 36, 36, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="iconSetaAccordion">
            <rect fill="var(--fill-0, #242424)" height="20" rx="10" width="20" />
            <path d={svgPaths.p52c2700} id="iconSetaAccordion_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  escolha: string;
  comprouText: string;
  valorGrande: string;
  valorPequeno: string;
  valorPequenoColor: string;
  imgSrc: string;
  cotas: string;
  chance: string;
  chanceColor: string;
  chanceIconDirection: 'up' | 'down';
  retornoPotencial: string;
  fechamentoData: string;
  linkMercado?: string;
  onSellSuccess?: (amount: number, isYes: boolean, outcome: OutcomeData) => void;
  onBuySuccess?: (amount: number, isYes: boolean, outcome: OutcomeData) => void;
}

function Card(props: CardProps) {
  const { 
    title, escolha, comprouText, valorGrande, valorPequeno, valorPequenoColor, imgSrc,
    cotas, chance, chanceColor, chanceIconDirection, retornoPotencial, fechamentoData, linkMercado,
    onSellSuccess, onBuySuccess
  } = props;
  
  const [isOpen, setIsOpen] = useState(false);
  const [showOrderBS, setShowOrderBS] = useState(false);
  const navigate = useNavigate();

  // Helper para extrair porcentagem (Ex: "90 → 85%")
  const getPercentage = (str: string) => {
    const match = str.match(/(\d+)%$/);
    return match ? parseInt(match[1]) : 50;
  };

  const outcomeData: OutcomeData = {
    nome: escolha,
    imagem: imgSrc,
    volume: "R$ 1.2M",
    porcentagemSim: getPercentage(chance),
    porcentagemNao: 100 - getPercentage(chance),
    isYes: true,
    isMultipleChoice: true,
    initialTab: 'vender',
    cotas: parseFloat(cotas.replace(/\./g, "").replace(",", ".")) || 0,
    // @ts-ignore - question property might not be in the strict type but is used by OrderBottomSheetFuncional
    question: title
  };

  const handleVenderClick = () => {
    setShowOrderBS(true);
  };

  const handleCloseBS = () => {
    setShowOrderBS(false);
  };

  const handleBuy = (amount: number, isYes: boolean) => {
    console.log("Buy", amount, isYes);
    handleCloseBS();
    if (onBuySuccess) {
      onBuySuccess(amount, isYes, outcomeData);
    }
  };

  const handleSell = (amount: number, isYes: boolean) => {
     console.log("Sell", amount, isYes);
     handleCloseBS();
     if (onSellSuccess) {
        onSellSuccess(amount, isYes, outcomeData);
     }
  };

  return (
    <>
      <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
        {/* Header Interativo */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" 
          data-name="header"
        >
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
              <p className="leading-[1.2]">{title}</p>
            </div>
          </div>
          <IconSetaAccordion isOpen={isOpen} />
        </div>

        {/* HeaderOutcome */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
          <div className="relative shrink-0 size-[24px]" data-name="imagem">
            <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgSrc} width="24" />
          </div>
          
          {/* BaseEscolha */}
          <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
              <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="escolha">
                <div aria-hidden="true" className="absolute border-[#242424] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                  <p className="leading-[1.2] whitespace-pre font-bold">{escolha}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
                <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                  <p className="leading-[1.2] whitespace-pre font-bold">Sim</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
              <p className="leading-none whitespace-pre">{comprouText}</p>
            </div>
          </div>

          {/* BaseValor */}
          <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
              <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">{valorGrande}</p>
            </div>
            <div className={`flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[10px]`} style={{ color: valorPequenoColor }}>
              <p className="leading-none text-nowrap whitespace-pre">{valorPequeno}</p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="flex flex-col gap-[12px]">
                {/* Tabela de Detalhes */}
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="tabela">
                  {/* Cotas */}
                  <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
                      <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
                    </div>
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
                      <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">{cotas}</p>
                    </div>
                  </div>
                  
                  {/* Chance */}
                  <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="valor">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
                      <p className="leading-none whitespace-pre">Chance</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
                        <p className="leading-[1.2] whitespace-pre font-bold">{chance}</p>
                      </div>
                      {(!chance.includes('→') || chance.split('→')[0].trim() !== chance.split('→')[1].replace('%', '').trim()) && (
                        <div className={`h-[6px] relative shrink-0 w-[7px] ${chanceIconDirection === 'down' ? 'scale-y-[-100%]' : ''}`} data-name="icon">
                          <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]">
                             <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                               <path d={svgPaths.triangle} fill={chanceColor} />
                             </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Retorno Potencial */}
                  <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
                      <p className="leading-none text-nowrap whitespace-pre">Retorno Potencial</p>
                    </div>
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
                      <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">{retornoPotencial}</p>
                    </div>
                  </div>
                </div>

                {/* Data de Fechamento */}
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
                  <p className="leading-none whitespace-pre">{fechamentoData}</p>
                </div>

                {/* Botões de Ação */}
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                  <div 
                    onClick={handleVenderClick}
                    className="basis-0 bg-[#242424] grow h-[28px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" 
                    data-name="valores"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div 
                        onClick={(e) => escolha.includes("Vojvoda") && e.stopPropagation()}
                        className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[32px] py-0 relative w-full"
                      >
                        <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre font-bold">Vender</p>
                      </div>
                    </div>
                  </div>
                  <div 
                    onClick={() => linkMercado && navigate(linkMercado)}
                    className="basis-0 bg-[#242424] grow h-[28px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" 
                    data-name="valores"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[32px] py-0 relative w-full">
                        <p className="font-['DM_Sans:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre font-bold">Ver mercado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <OrderBottomSheet 
        outcome={showOrderBS ? outcomeData : null}
        onClose={handleCloseBS}
        onBuy={handleBuy}
        onSell={handleSell}
      />
    </>
  );
}

// Helpers de Ordenação
const parseMoney = (val: string) => {
  return parseFloat(val.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());
};

const parsePercent = (str: string, color: string) => {
  const match = str.match(/([\d,]+)%/);
  if(!match) return 0;
  let val = parseFloat(match[1].replace(",", "."));
  // Se a cor for vermelha (#d92341), consideramos negativo
  if (color === "#d92341") val = -val;
  return val;
};

const parseDate = (str: string) => {
    // Formato: "Mercado fecha: 31/12/2025 - 23:59"
    const datePart = str.split(": ")[1]; 
    if (!datePart) return new Date();
    const [date, time] = datePart.split(" - ");
    if (!date || !time) return new Date();
    const [day, month, year] = date.split("/");
    return new Date(`${year}-${month}-${day}T${time}:00`);
};

// Dados iniciais
const initialCards: CardProps[] = [
  {
    title: "Quem será o próximo técnico demitido na Série A?",
    escolha: "Vojvoda - Santos",
    comprouText: "Investiu R$400",
    valorGrande: "R$422,22",
    valorPequeno: "+R$22,22 (5,55%)",
    valorPequenoColor: "#32a866",
    imgSrc: imgImagem,
    cotas: "444,44",
    chance: "90 → 95%",
    chanceColor: "#19954F",
    chanceIconDirection: "up",
    retornoPotencial: "R$444,44",
    fechamentoData: "Mercado fecha: 31/12/2025 - 23:59"
  },
  {
    title: "Quem será o artista mais popular no Spotify este ano?",
    escolha: "Bad Bunny",
    comprouText: "Investiu R$100",
    valorGrande: "R$94,43",
    valorPequeno: "-R$5,57 (5,57%)",
    valorPequenoColor: "#d92341",
    imgSrc: imgImagem1,
    cotas: "111,1",
    chance: "90 → 85%",
    chanceColor: "#C00A28",
    chanceIconDirection: "down",
    retornoPotencial: "R$111,1",
    fechamentoData: "Mercado fecha: 31/12/2025 - 23:59",
    linkMercado: "/mercado"
  }
];

export default function Content() {
  const [cards, setCards] = useState(initialCards);
  const [currentFilter, setCurrentFilter] = useState("Todos");
  const [successToastData, setSuccessToastData] = useState<{
    artistName: string;
    isYes: boolean;
    question: string;
    amount: number;
    returnAmount: number;
    actionType: 'buy' | 'sell';
  } | null>(null);

  // Add global styles for the progress animation (igual a Home)
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

  const handleSellSuccess = (amount: number, isYes: boolean, outcome: OutcomeData) => {
    const currentChance = isYes ? outcome.porcentagemSim : outcome.porcentagemNao;
    const price = currentChance / 100;
    
    // Calcula retorno para o toast (valor recebido da venda)
    const returnAmount = amount * price;

    setSuccessToastData({
      artistName: outcome.nome,
      isYes,
      question: (outcome as any).question || outcome.nome,
      amount, 
      returnAmount, 
      actionType: 'sell'
    });

    // Lógica específica para atualização do card (Bad Bunny ou genérico se desejado futuramente)
    if (outcome.nome === "Bad Bunny") {
      setCards(prev => prev.map(card => {
        if (card.escolha !== outcome.nome) return card;

        // Parse cotas atuais (formato pt-BR: 1.234,56 ou 111,1)
        const currentQuotas = parseFloat(card.cotas.replace(/\./g, "").replace(",", "."));
        const remainingQuotas = currentQuotas - amount;

        // Se vendeu tudo (com pequena margem de erro), remove o card
        if (remainingQuotas < 0.01) {
          return null;
        }

        // Atualiza valores para a nova posição reduzida
        // Lógica: Resetar P&L (Investido = Valor Atual)
        const newCurrentValue = remainingQuotas * price;
        const newInvested = newCurrentValue; 
        const newPotentialReturn = remainingQuotas * 1.0;

        const fmtMoney = (v: number) => `R$${v.toFixed(2).replace(".", ",")}`;
        const fmtQuotas = (v: number) => v.toFixed(2).replace(".", ",");

        return {
          ...card,
          cotas: fmtQuotas(remainingQuotas),
          valorGrande: fmtMoney(newCurrentValue),
          comprouText: `Investiu ${fmtMoney(newInvested)}`, // Atualiza texto e valor
          valorPequeno: "-R$0,00 (0,00%)", // Reset P&L
          valorPequenoColor: "#e3e3e3", // Cor neutra
          retornoPotencial: fmtMoney(newPotentialReturn),
          chance: `${currentChance} → ${currentChance}%` // Atualiza chance visual
        };
      }).filter(Boolean) as CardProps[]);
    } else {
      setCards(prev => prev.filter(c => c.escolha !== outcome.nome));
    }
  };

  const handleBuySuccess = (amount: number, isYes: boolean, outcome: OutcomeData) => {
    // Calcula retorno (estimado)
    const percentage = isYes ? (outcome.porcentagemSim / 100) : (outcome.porcentagemNao / 100);
    const returnAmount = amount * percentage;

    setSuccessToastData({
      artistName: outcome.nome,
      isYes,
      question: (outcome as any).question || outcome.nome,
      amount,
      returnAmount,
      actionType: 'buy'
    });
  };

  const filteredCards = [...cards].sort((a, b) => {
    switch (currentFilter) {
      case "Maior valorização (%)":
        return parsePercent(b.valorPequeno, b.valorPequenoColor) - parsePercent(a.valorPequeno, a.valorPequenoColor);
      case "Maior desvalorização (%)":
        return parsePercent(a.valorPequeno, a.valorPequenoColor) - parsePercent(b.valorPequeno, b.valorPequenoColor);
      case "Maior valor atual (R$)":
        return parseMoney(b.valorGrande) - parseMoney(a.valorGrande);
      case "Menor valor atual (R$)":
        return parseMoney(a.valorGrande) - parseMoney(b.valorGrande);
      case "Próximos a fechar":
        return parseDate(a.fechamentoData).getTime() - parseDate(b.fechamentoData).getTime();
      case "Ordem alfabética":
        return a.escolha.localeCompare(b.escolha);
      default:
        return 0;
    }
  });

  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[28px] relative size-full" data-name="content">
      <Chips currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      
      <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-full" data-name="boxPosicao">
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => (
            <motion.div
              key={card.escolha}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              className="w-full"
            >
              <Card {...card} onSellSuccess={handleSellSuccess} onBuySuccess={handleBuySuccess} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
                isSell={successToastData.actionType === 'sell'}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
