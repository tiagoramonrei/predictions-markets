import OrderBottomSheetFuncional, { TaxaExplicativaModal } from './OrderBottomSheetFuncional';
import { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { OutcomeData } from '../App';

export default function OrderBottomSheet({ outcome, onClose, onBuy, onSell }: { outcome: OutcomeData | null; onClose?: () => void; onBuy?: (amount: number, isYes: boolean) => void; onSell?: (amount: number, isYes: boolean, returnAmount: number) => void }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTaxaModal, setShowTaxaModal] = useState(false);
  const scrollPositionRef = useRef(0);

  // Bloqueia o scroll quando o bottom sheet está aberto
  useEffect(() => {
    if (outcome) {
      // Salva a posição atual do scroll
      scrollPositionRef.current = window.scrollY;
      
      // Salva os estilos originais
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;
      const originalTouchAction = document.body.style.touchAction;
      
      // Bloqueia o scroll - solução mais robusta para mobile
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
      
      // Inicia a animação de entrada
      setTimeout(() => setIsAnimating(true), 10);
      
      // Cleanup: restaura o scroll quando o componente é desmontado ou outcome vira null
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        document.body.style.touchAction = originalTouchAction;
        
        // Restaura a posição do scroll
        window.scrollTo(0, scrollPositionRef.current);
        setIsAnimating(false);
      };
    }
  }, [outcome]);

  // Previne o scroll no overlay (touchmove)
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
  }, []);

  // Só renderiza se houver outcome selecionado
  if (!outcome) return null;

  const handleClose = () => {
    // Anima a saída
    setIsAnimating(false);
    
    // Aguarda a animação terminar antes de fechar
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 320);
  };

  const handleBuy = (amount: number, isYes: boolean) => {
    if (onBuy) {
      onBuy(amount, isYes);
    }
    handleClose();
  };

  const handleSell = (amount: number, isYes: boolean, returnAmount: number) => {
    if (onSell) {
      onSell(amount, isYes, returnAmount);
    }
    handleClose();
  };

  // Calcula a posição do BS de Order:
  // - Se não está animando (fechando): translateY(100%) - fora da tela
  // - Se está animando e modal da Taxa está aberto: translateY(100%) - desce
  // - Se está animando e modal da Taxa está fechado: translateY(0) - visível
  const orderBSTransform = !isAnimating ? 'translateY(100%)' : (showTaxaModal ? 'translateY(100%)' : 'translateY(0)');

  // Usa Portal para renderizar fora da hierarquia DOM atual (no body)
  // Isso garante que o z-index funcione globalmente, ignorando contextos de empilhamento dos pais
  return createPortal(
    <>
      {/* Overlay escuro com fade - sempre visível */}
      <div 
        className="fixed inset-0 bg-black/80 z-[60] transition-opacity duration-[320ms] ease-in-out" 
        style={{ opacity: isAnimating ? 1 : 0, touchAction: 'none' }}
        onClick={showTaxaModal ? () => setShowTaxaModal(false) : handleClose}
        onTouchMove={handleTouchMove}
      />
      
      {/* Bottom Sheet de Order - sempre montado para preservar estado, controla visibilidade via transform */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-[70] max-w-[499px] mx-auto transition-transform duration-[320ms] ease-in-out"
        style={{ transform: orderBSTransform }}
      >
        <div 
          className="bg-[#1e1e1e] rounded-tl-[8px] rounded-tr-[8px] shadow-2xl"
          style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}
        >
          <OrderBottomSheetFuncional 
            outcome={outcome} 
            onClose={handleClose} 
            onBuy={handleBuy} 
            onSell={handleSell}
            onTaxaClick={() => setShowTaxaModal(true)}
          />
        </div>
      </div>
      
      {/* Modal explicativo da Taxa */}
      <TaxaExplicativaModal isOpen={showTaxaModal} onClose={() => setShowTaxaModal(false)} />
    </>,
    document.body
  );
}