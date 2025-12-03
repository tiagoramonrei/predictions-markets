import SubHeader from "../imports/Header";
import Header from "../imports/Header-2015-203";
import Imagem from "../imports/Imagem";
import GraficoResponsivo from "./GraficoResponsivo";
import Outcomes from "../imports/Outcomes-3-2196";
import Regras from "../imports/Regras";
import Cronograma from "../imports/Cronograma";
import Sobre from "../imports/Sobre";
import EstaoGostando from "../imports/EstaoGostando";
import Footer from "../imports/Footer";
import BaseNavBar from "../imports/BaseNavBar";
import Card from "../imports/Card";
import OrderBottomSheet from "./OrderBottomSheet";
import OrderSucess from "../imports/OrderSucess";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

// Interface para dados do outcome selecionado
export interface OutcomeData {
  nome: string;
  imagem: string;
  volume: string;
  porcentagemSim: number;
  porcentagemNao: number;
  isYes: boolean; // true = SIM, false = NÃO
  isMultipleChoice?: boolean;
  initialTab?: 'comprar' | 'vender';
  cotas?: number; // quantidade disponível para vender
}

export default function InternaMercado() {
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
    isSell?: boolean;
  } | null>(null);

  const handleOutcomeSelect = (outcome: OutcomeData) => {
    setSelectedOutcome(outcome);
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
      question: "Quem será o artista mais popular no Spotify este ano?", // Hardcoded for now as requested
      amount,
      returnAmount,
      isSell: false
    });
    
    // Bottom sheet will be closed by its own internal logic or we can force it
    // OrderBottomSheet calls onClose after animation which calls handleCloseBottomSheet
    // But handleBuy calls handleClose immediately in OrderBottomSheet.tsx wrapper
    // So we don't need to call handleCloseBottomSheet here explicitly if OrderBottomSheet handles it.
    // However, handleCloseBottomSheet sets selectedOutcome to null.
  };

  const handleSell = (amount: number, isYes: boolean) => {
    if (!selectedOutcome) return;

    const percentage = isYes ? (selectedOutcome.porcentagemSim / 100) : (selectedOutcome.porcentagemNao / 100);
    const returnAmount = amount * percentage;

    setSuccessToastData({
      artistName: selectedOutcome.nome,
      isYes,
      question: "Quem será o artista mais popular no Spotify este ano?",
      amount,
      returnAmount,
      isSell: true
    });
  };

  const handleCloseToast = () => {
    setSuccessToastData(null);
  };

  useEffect(() => {
    if (successToastData) {
      // Dispara confetes saindo de trás do toaster (bottom center)
      const count = 200;
      const defaults = {
        origin: { y: 0.9 }, // Perto do bottom, onde o toaster aparece
        zIndex: 55, // Abaixo do toaster (z-60) para dar o efeito de "saindo de trás"
        colors: ['#32A866', '#19954F'] // Cores do tema (somente verdes)
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          ticks: 70 // Valor base ajustado para o range 50-80
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        ticks: 50 // Limite inferior do range solicitado
      });

      fire(0.2, {
        spread: 60,
        ticks: 60
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
        ticks: 80 // Limite superior do range solicitado
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
            // O SubHeader tem 68px de altura e ficará sticky no topo
            // Queremos ativar o modo sólido (e mostrar o Card) quando a imagem passar por baixo dele
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
      // Quando solid, o header superior some (80px) e sobra só o subheader (68px)
      // Mas o card fica logo abaixo dele
      const headerHeight = 68; 
      const cardHeight = cardRef.current?.offsetHeight || 0;
      setStickyTop(headerHeight + cardHeight);
    };

    // Atualiza inicialmente
    updateStickyTop();

    // Observa mudanças no tamanho do card
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
      {/* Mensagem para telas maiores que 499px */}
      <div className="hidden min-[500px]:flex items-center justify-center min-h-screen p-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            Esse conteúdo só está disponível na versão mobile.
          </p>
        </div>
      </div>

      {/* Conteúdo mobile - visível apenas até 499px */}
      <div className="max-[499px]:block hidden bg-[#171717]">
        
        {/* Novo Header - Rola junto com a página */}
        <div className="w-full bg-neutral-900 relative z-40">
          <Header />
        </div>

        {/* SubHeader (Antigo Header) - Sticky no topo */}
        <div className="sticky top-0 left-0 right-0 z-30 h-[68px] bg-[#171717]">
          <SubHeader isSolid={headerSolid} category="Entretenimento" />
        </div>

        {/* Card fixo que aparece quando header fica sólido */}
        <div 
          className="fixed left-0 right-0 z-20 transition-all duration-[320ms] ease-in-out"
          style={{
            top: '68px', // Fica logo abaixo do SubHeader sticky
            opacity: headerSolid ? 1 : 0,
            pointerEvents: headerSolid ? 'auto' : 'none',
            visibility: headerSolid ? 'visible' : 'hidden'
          }}
        >
          <Card ref={cardRef} />
        </div>
        
        {/* Conteúdo com height mínima para permitir sticky */}
        <div className="pb-[56px]">
          <div ref={imagemRef} className="relative w-full pt-[28px] px-[20px]">
            <Imagem />
          </div>
          
          {/* Gráfico Responsivo */}
          <div className="py-6 pt-[28px] pr-[0px] pb-[24px] pl-[0px]">
            <GraficoResponsivo />
          </div>
          
          {/* Outcomes */}
          <div className="px-[20px] py-6">
            <Outcomes stickyTop={stickyTop} onSelect={handleOutcomeSelect} />
          </div>
          
          {/* Regras */}
          <div className="px-[20px] py-6">
            <Regras>
              O Spotify publica um relatório anual com seus artistas mais ouvidos (
              <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid font-['DM_Sans:Regular',sans-serif] not-italic underline" href="https://newsroom.spotify.com/2024-12-04/top-songs-artists-podcasts-audiobooks-albums-trends-2024/">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.4] text-[#e3e3e3] text-[12px]" href="https://newsroom.spotify.com/2024-12-04/top-songs-artists-podcasts-audiobooks-albums-trends-2024/">
                  https://newsroom.spotify.com/2024-12-04/top-songs-artists-podcasts-audiobooks-albums-trends-2024/
                </span>
              </a>
              <span>
                ). Este indicador se refere ao artista mais ouvido no Spotify em 2025.
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                {`Se os artistas listados acima forem os mais ouvidos no Spotify em 2025, este indicador será definido como "Sim". Caso contrário, será definido como "Não".`}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                {`Se o Spotify não divulgar quem é o artista mais ouvido em 2025 até 31 de janeiro de 2026, às 23h59 (horário do Brasil), este indicador será definido como "Não".`}
                <br aria-hidden="true" />
                <br aria-hidden="true" />A fonte de informação para este indicador será a informação oficial do Spotify, geralmente divulgada como parte do Spotify Wrapped.
              </span>
            </Regras>
          </div>
          
          {/* Cronograma */}
          <div className="px-[20px] py-6">
            <Cronograma />
          </div>
          
          {/* Sobre */}
          <div className="px-[20px] py-6">
            <Sobre>
              <p className="mb-0">{`Quem será o artista número 1 do Spotify em 2025? A disputa promete ser intensa, com grandes nomes da música global competindo pela liderança em streams, playlists editoriais e impacto cultural. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">{`Tendências de lançamento, força das fanbases, presença em redes sociais e consistência nas paradas ao longo do ano podem mudar completamente o cenário. `}</p>
              <p className="mb-0">&nbsp;</p>
              <p>Esse mercado permite que você antecipe quem dominará o topo antes do resultado oficial, analisando dados, movimentos da indústria e surpresas que podem surgir nos próximos meses. Escolha seu favorito e faça sua previsão.</p>
            </Sobre>
          </div>
          
          {/* Estão Gostando */}
          <div className="pt-6">
            <div className="px-[20px] pb-4">
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full">
                <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
                  <p className="leading-[1.4]">As pessoas também estão gostando</p>
                </div>
              </div>
            </div>
            <EstaoGostando />
          </div>
          
          {/* Footer */}
          <div className="h-[40px] shrink-0" />
          <Footer />
        </div>
        
        {/* Navbar fixa no bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
          <BaseNavBar />
        </div>

        {/* Order Bottom Sheet - Por enquanto sempre visível para visualização */}
        <OrderBottomSheet outcome={selectedOutcome} onClose={handleCloseBottomSheet} onBuy={handleBuy} onSell={handleSell} />
        
        {/* Order Success - Flutuando no footer */}
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
                isSell={successToastData.isSell}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
