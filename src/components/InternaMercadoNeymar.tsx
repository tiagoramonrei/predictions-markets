import SubHeader from "../imports/Header";
import Header from "../imports/Header-2015-203";
import GraficoResponsivo from "./GraficoResponsivo";
import Outcomes from "../imports/Outcomes-3-2196";
import Regras from "../imports/Regras";
import Cronograma from "../imports/Cronograma";
import Sobre from "../imports/Sobre";
import EstaoGostando from "../imports/EstaoGostando";
import Footer from "../imports/Footer";
import BaseNavBar from "../imports/BaseNavBar";
import NavbarEscolha from "../imports/NavbarEscolha";
import OrderBottomSheet from "./OrderBottomSheet";
import OrderSucess from "../imports/OrderSucess";
import { useState, useEffect, useRef, forwardRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import IconSeta from "../imports/IconSeta";

// Import Neymar image
import imgNeymar from "figma:asset/be255199d065fa90a7975aceb740cc11bea84626.png";
import imgIconSeta1 from "figma:asset/d26624b03ae04266c576ea99de534f0ed606d083.png";

// Interface para dados do outcome selecionado
export interface OutcomeData {
  nome: string;
  imagem: string;
  volume: string;
  porcentagemSim: number;
  porcentagemNao: number;
  isYes: boolean; // true = SIM, false = NÃO
  isMultipleChoice?: boolean;
}

function CardHeaderNeymar() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">
        <p className="leading-[1.2] font-bold">Neymar vai continuar jogando no Santos em 2026?</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[12px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 420.100 volume</p>
      </div>
    </div>
  );
}

function ImagemNeymar() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="cardHeader">
      <div className="h-[88px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        <img alt="" className="absolute inset-0 max-w-none object-[center_20%] object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgNeymar} />
      </div>
      <CardHeaderNeymar />
    </div>
  );
}

function Frame() {
  return (
    <div 
      className="bg-[#242424] content-stretch flex gap-[9px] items-center justify-center relative rounded-[1000px] shrink-0 size-[20px] cursor-pointer hover:bg-[#2f2f2f] transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="scale-50 flex items-center justify-center size-full">
        <img src={imgIconSeta1} alt="" className="size-full object-contain" />
      </div>
    </div>
  );
}

const CardNeymar = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="relative w-full bg-[#171717]" data-name="card">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="w-full">
        <div className="box-border content-stretch flex gap-[20px] items-start p-[20px] relative w-full">
          <div className="-webkit-box basis-0 flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-white" style={{ fontWeight: 'bold' }}>
            <p className="leading-[1.2]">Neymar vai continuar jogando no Santos em 2026?</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
});
CardNeymar.displayName = 'CardNeymar';

export default function InternaMercadoNeymar() {
  const [headerSolid, setHeaderSolid] = useState(false);
  const [stickyTop, setStickyTop] = useState(200);
  const imagemRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<OutcomeData | null>(null);
  const [successToastData, setSuccessToastData] = useState<{
    artistName: string;
    isYes: boolean;
    question: string;
    amount: number;
    returnAmount: number;
  } | null>(null);

  const handleOutcomeSelect = (outcome: OutcomeData) => {
    setSelectedOutcome(outcome);
  };

  const handleSimClick = () => {
    handleOutcomeSelect({
      nome: "Neymar vai continuar jogando no Santos em 2026?",
      imagem: imgNeymar,
      volume: "R$ 420.100",
      porcentagemSim: 25,
      porcentagemNao: 75,
      isYes: true,
      isMultipleChoice: false
    });
  };

  const handleNaoClick = () => {
    handleOutcomeSelect({
      nome: "Neymar vai continuar jogando no Santos em 2026?",
      imagem: imgNeymar,
      volume: "R$ 420.100",
      porcentagemSim: 25,
      porcentagemNao: 75,
      isYes: false,
      isMultipleChoice: false
    });
  };

  const handleCloseBottomSheet = () => {
    setSelectedOutcome(null);
  };

  const handleBuy = (amount: number, isYes: boolean) => {
    if (!selectedOutcome) return;

    const percentage = isYes ? (selectedOutcome.porcentagemSim / 100) : (selectedOutcome.porcentagemNao / 100);
    const returnAmount = amount / percentage;

    setSuccessToastData({
      artistName: selectedOutcome.nome,
      isYes,
      question: "Neymar vai continuar jogando no Santos em 2026?",
      amount,
      returnAmount
    });
  };

  const handleCloseToast = () => {
    setSuccessToastData(null);
  };

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

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        ticks: 50
      });

      fire(0.2, {
        spread: 60,
        ticks: 60
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        ticks: 80
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
        ticks: 65
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
        ticks: 65
      });
    }
  }, [successToastData]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imagemRef.current) {
            const imagemRect = imagemRef.current.getBoundingClientRect();
            const threshold = 68 + 5;
            
            if (imagemRect.bottom <= threshold) {
              setHeaderSolid(true);
            } else if (imagemRect.bottom > threshold + 5) {
              setHeaderSolid(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateStickyTop = () => {
      const headerHeight = 68; 
      const cardHeight = cardRef.current?.offsetHeight || 0;
      setStickyTop(headerHeight + cardHeight);
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#171717]">
      <div className="hidden min-[500px]:flex items-center justify-center min-h-screen p-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            Esse conteúdo só está disponível na versão mobile.
          </p>
        </div>
      </div>

      <div className="max-[499px]:block hidden bg-[#171717]">
        
        <div className="w-full bg-neutral-900 relative z-40">
          <Header />
        </div>

        <div className="sticky top-0 left-0 right-0 z-30 h-[68px] bg-[#171717]">
          <SubHeader isSolid={headerSolid} category="Esporte" />
        </div>

        <div 
          className="fixed left-0 right-0 z-20 transition-all duration-[320ms] ease-in-out"
          style={{
            top: '68px',
            opacity: headerSolid ? 1 : 0,
            pointerEvents: headerSolid ? 'auto' : 'none',
            visibility: headerSolid ? 'visible' : 'hidden'
          }}
        >
          <CardNeymar ref={cardRef} />
        </div>
        
        <div className="pb-[150px] min-h-[200vh]">
          <div ref={imagemRef} className="relative w-full pt-[28px] px-[20px]">
            <ImagemNeymar />
          </div>
          
          <div className="py-6 pt-[28px] pr-[0px] pb-[24px] pl-[0px]">
            <GraficoResponsivo mode="binary" />
          </div>
          
          <div className="px-[20px] py-6 hidden">
            <Outcomes stickyTop={stickyTop} onSelect={handleOutcomeSelect} />
          </div>
          
          <div className="px-[20px] py-6">
            <Regras>
              <span>
                O Santos FC publica oficialmente, por meio de seus canais oficiais (site, redes sociais ou comunicados à imprensa), todas as informações referentes ao elenco profissional e contratos de jogadores. Este indicador se refere a Neymar permanecer registrado como jogador do Santos durante qualquer momento do ano de 2026.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                Se Neymar estiver regularmente registrado no BID da CBF como atleta do Santos em qualquer data entre 1º de janeiro e 31 de dezembro de 2026, este indicador será definido como “Sim”. Caso Neymar não esteja registrado no Santos em nenhuma data desse período, o indicador será definido como “Não”.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                Se o Santos não divulgar informações oficiais sobre Neymar até 31 de janeiro de 2027, às 23h59 (horário de Brasília), este indicador será definido como “Não”.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                A fonte de informação para este indicador será o Boletim Informativo Diário (BID) da CBF e os comunicados oficiais do Santos FC.
              </span>
            </Regras>
          </div>
          
          <div className="px-[20px] py-6">
            <Cronograma />
          </div>
          
          <div className="px-[20px] py-6">
            <Sobre>
              <p className="mb-0">A permanência de Neymar no Santos em 2026 é um dos mais comentados do futebol brasileiro. O retorno do craque ao clube mobilizou torcedores, imprensa e o próprio mercado esportivo, criando uma expectativa enorme sobre os próximos passos da carreira dele.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Renovação de contrato, condição física, propostas do exterior, calendário esportivo e decisões estratégicas do Santos podem influenciar diretamente o futuro do jogador. Ao longo do ano, qualquer mudança de cenário — de declarações públicas a movimentações de bastidores — pode alterar completamente as probabilidades.</p>
              <p className="mb-0">&nbsp;</p>
              <p>Este mercado permite que você antecipe o desfecho antes do anúncio oficial, analisando desempenho, contexto esportivo, notícias e sinais vindos do clube e do atleta. Faça sua previsão e escolha se Neymar continuará ou não vestindo a camisa do Santos em 2026.</p>
            </Sobre>
          </div>
          
          <div className="py-6">
            <div className="px-[20px] pb-4">
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
                  <p className="leading-[1.4]">As pessoas também estão gostando</p>
                </div>
              </div>
            </div>
            <EstaoGostando variant="neymar" />
          </div>
          
          <div className="mt-6">
            <Footer />
          </div>
        </div>

        <div className="fixed bottom-[56px] left-0 right-0 z-50">
          <NavbarEscolha onSim={handleSimClick} onNao={handleNaoClick} />
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
          <BaseNavBar />
        </div>

        <OrderBottomSheet outcome={selectedOutcome} onClose={handleCloseBottomSheet} onBuy={handleBuy} />
        
        <AnimatePresence>
          {successToastData && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-[16px] left-[20px] right-[20px] z-[60]"
            >
              <OrderSucess 
                artistName={successToastData.artistName}
                isYes={successToastData.isYes}
                question={successToastData.question}
                amount={successToastData.amount}
                returnAmount={successToastData.returnAmount}
                onClose={handleCloseToast}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}