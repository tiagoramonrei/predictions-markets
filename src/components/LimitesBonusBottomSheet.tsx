import ModalLimitesBonusBs from '../imports/ModalLimitesBonusBs';
import { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface LimitesBonusBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LimitesBonusBottomSheet({ 
  isOpen, 
  onClose 
}: LimitesBonusBottomSheetProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollPositionRef = useRef(0);

  // Bloqueia o scroll quando o bottom sheet está aberto
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      scrollPositionRef.current = window.scrollY;
      
      // Salva os estilos originais
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;
      const originalTouchAction = document.body.style.touchAction;
      
      // Bloqueia o scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
      
      // Inicia a animação de entrada
      setTimeout(() => setIsAnimating(true), 10);
      
      // Cleanup: restaura o scroll quando o componente é desmontado ou isOpen vira false
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
  }, [isOpen]);

  // Previne o scroll no overlay (touchmove)
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
  }, []);

  const handleClose = () => {
    // Anima a saída
    setIsAnimating(false);
    
    // Aguarda a animação terminar antes de fechar
    setTimeout(() => {
      onClose();
    }, 320);
  };

  // Só renderiza se estiver aberto
  if (!isOpen) return null;

  // Calcula a posição do BS
  const bsTransform = !isAnimating ? 'translateY(100%)' : 'translateY(0)';

  // Usa Portal para renderizar fora da hierarquia DOM atual (no body)
  return createPortal(
    <>
      {/* Overlay escuro com fade */}
      <div 
        className="fixed inset-0 bg-black/80 z-[60] transition-opacity duration-[320ms] ease-in-out" 
        style={{ opacity: isAnimating ? 1 : 0, touchAction: 'none' }}
        onClick={handleClose}
        onTouchMove={handleTouchMove}
      />
      
      {/* Bottom Sheet */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-[70] max-w-[499px] mx-auto transition-transform duration-[320ms] ease-in-out"
        style={{ transform: bsTransform }}
      >
        <div 
          className="bg-[#1e1e1e] rounded-tl-[8px] rounded-tr-[8px] shadow-2xl max-h-[90vh]"
          style={{ overscrollBehavior: 'contain', touchAction: 'pan-y' }}
        >
          <ModalLimitesBonusBs onClose={handleClose} />
        </div>
      </div>
    </>,
    document.body
  );
}
