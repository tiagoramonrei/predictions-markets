import { useEffect } from 'react';
import { motion } from 'motion/react';
import iconAtencaoToasterVerde from '../assets/iconAtencaoToasterVerde.png';
import iconFecharToaster from '../assets/iconFecharToaster.png';

interface LimiteAtualizadoToasterProps {
  onClose?: () => void;
}

function IconFechar({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[20px] cursor-pointer"
      data-name="iconFechar"
      onClick={onClose}
    >
      <img 
        src={iconFecharToaster} 
        alt="Fechar" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default function LimiteAtualizadoToaster({ onClose }: LimiteAtualizadoToasterProps) {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-[16px] left-[20px] right-[20px] z-[80] max-w-[499px] mx-auto"
    >
      <div
        className="bg-[#19954F] relative rounded-[8px] shadow-lg"
        style={{ padding: '16px' }}
      >
        <div className="flex gap-[12px] items-start">
          {/* Ícone de atenção */}
          <div className="relative shrink-0 size-[20px]">
            <img 
              src={iconAtencaoToasterVerde} 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col gap-[4px]">
            {/* Título */}
            <div className="flex items-start justify-between gap-[12px]">
              <h3 className="font-['DM_Sans:Bold',sans-serif] text-[14px] text-white font-bold leading-[1.2]">
                Limite atualizado
              </h3>
              <IconFechar onClose={onClose} />
            </div>

            {/* Texto */}
            <p className="font-['DM_Sans:Regular',sans-serif] text-[12px] text-white leading-[1.4]">
              As condições de venda automática deste Pitaco foram atualizadas.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
