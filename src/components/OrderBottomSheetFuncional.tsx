import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../imports/svg-5505oo64wo";
import svgPathsModal from "../imports/svg-5yxjl810rg";
import svgPathsSell from "../imports/svg-vrudki1plq";
import svgPathsTaylor from "../imports/svg-wjbrcz9efd";
import svgPathsSaldo from "../imports/svg-cvp093bg6z";
import type { OutcomeData } from './InternaMercado';
import BtnLoading from "../imports/BtnLoading";
import imgLoadingAnima from "figma:asset/905f098b527169db8617a747c06509da2180719d.png";
import imgBitcoinGold from "figma:asset/a45e169be48c8271438e628b2b414ffbc170e022.png";
import imgNenhum from "figma:asset/49700c649bca78f49561401caa7e05e89a96668c.png";
import imgMaduro from "figma:asset/065ca6711a3eca5fd95f4ec7f173ed5f1a9e85b4.png";
import imgDorival from "figma:asset/50882ac1ab781e7116eedf88af570ea8311d0c1e.png";
import imgVojvoda from "figma:asset/b56641d75ea5dc11d6fbc5730e830d740cd1329a.png";

// Modal explicativo da Taxa (exportado para usar no OrderBottomSheet)
export function TaxaExplicativaModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[70] max-w-[499px] mx-auto"
        >
          <div className="bg-[#1e1e1e] rounded-tl-[8px] rounded-tr-[8px] w-full">
            {/* Header com X */}
            <div className="box-border flex justify-end items-center pl-[20px] pr-[12px] py-[12px]">
              <button 
                onClick={onClose}
                className="size-[32px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="box-border flex flex-col gap-[28px] items-center justify-center pb-[40px] pt-[28px] px-[20px]">
              {/* Ícone de interrogação - mesmo do ModalBs */}
              <div className="relative shrink-0 size-[56px]">
                <div className="absolute inset-[-0.02%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
                    <g>
                      <circle cx="28.0117" cy="28.0116" r="21.0087" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path d={svgPathsModal.p355cb480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path d={svgPathsModal.p7688200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path d={svgPathsModal.p2d15c600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Conteúdo */}
              <div className="flex flex-col gap-[12px] items-center text-center w-full">
                <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] text-[16px] text-white font-bold">
                  O que é essa Taxa?
                </p>
                <div className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] text-[12px] text-[#e3e3e3]">
                  <p className="mb-4">Cobramos uma taxa fixa de 2% em cada compra ou venda realizada nos mercados. Ela é aplicada sobre o valor da transação e já aparece descontada no seu retorno.</p>
                  <p>Essa cobrança ajuda a manter a operação, a liquidez e o funcionamento do sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BtnLoadingSell() {
  return (
    <div className="bg-[#19954f] relative rounded-[1000px] size-full" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[24px] py-0 relative size-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>
            Vendendo
          </p>
          <div className="relative shrink-0 size-[16px]" data-name="loadingAnima">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full animate-spin" src={imgLoadingAnima} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Componentes visuais do Figma (sem alteração)
function Titulo({ outcome }: { outcome: OutcomeData }) {
  const question = (outcome as any).question || outcome.nome;
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="titulo">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">
        <p className="leading-none">{question}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group">
          <g id="Path"></g>
          <path d="M10.6667 10.6667L21.3333 21.3333" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M21.3333 10.6667L10.6667 21.3333" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Icon({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative shrink-0 size-[32px] cursor-pointer" data-name="Icon" onClick={onClose}>
      <Group />
    </div>
  );
}

function Header({ onClose, outcome }: { onClose: () => void; outcome: OutcomeData }) {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="header">
      <Titulo outcome={outcome} />
      <Icon onClose={onClose} />
    </div>
  );
}

function BaseHeader({ onClose, outcome }: { onClose: () => void; outcome: OutcomeData }) {
  return (
    <div className="bg-[#1e1e1e] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="baseHeader">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative w-full">
          <Header onClose={onClose} outcome={outcome} />
        </div>
      </div>
    </div>
  );
}

function Game({ isActive }: { isActive: boolean }) {
  const borderClass = isActive ? 'border-[#32a866] border-[0px_0px_2px]' : '';
  const textColor = isActive ? 'text-white' : 'text-[#d9d9d9]';
  
  return (
    <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 w-[80px]`} data-name="game">
      <div aria-hidden="true" className={`absolute ${borderClass} border-solid inset-0 pointer-events-none`} />
      <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap ${textColor}`} style={{ fontWeight: 'bold' }}>
        <p className="leading-none whitespace-pre">Comprar</p>
      </div>
    </div>
  );
}

function Tab({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="tab" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] relative w-full ${isActive ? 'py-0' : 'py-[14px]'}`}>
          <Game isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function Game1({ isActive }: { isActive: boolean }) {
  const borderClass = isActive ? 'border-[#32a866] border-[0px_0px_2px]' : '';
  const textColor = isActive ? 'text-white' : 'text-[#d9d9d9]';
  
  return (
    <div className={`content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 w-[80px]`} data-name="game">
      <div aria-hidden="true" className={`absolute ${borderClass} border-solid inset-0 pointer-events-none`} />
      <div className={`flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap ${textColor}`} style={{ fontWeight: 'bold' }}>
        <p className="leading-none whitespace-pre">Vender</p>
      </div>
    </div>
  );
}

function Tab1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0 cursor-pointer" data-name="tab" onClick={onClick}>
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex h-[40px] items-center justify-center px-[20px] relative w-full ${isActive ? 'py-0' : 'py-[14px]'}`}>
          <Game1 isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function BaseTab({ activeTab, onTabChange }: { activeTab: 'comprar' | 'vender'; onTabChange: (tab: 'comprar' | 'vender') => void }) {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex items-start relative shrink-0 w-full" data-name="baseTab">
      <Tab isActive={activeTab === 'comprar'} onClick={() => onTabChange('comprar')} />
      <Tab1 isActive={activeTab === 'vender'} onClick={() => onTabChange('vender')} />
    </div>
  );
}

function Text({ outcome }: { outcome: OutcomeData }) {
  const displayName = outcome.isMultipleChoice 
    ? outcome.nome 
    : ((outcome as any).question || outcome.nome);

  // Para perguntas sim/não (não múltipla escolha), mostrar apenas SIM/NÃO em 16px
  if (!outcome.isMultipleChoice) {
    return (
      <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
        <div className="font-['DM_Sans:Bold',sans-serif] text-[16px]">
          <p className={`leading-none whitespace-nowrap font-bold ${outcome.isYes ? 'text-[#32a866]' : 'text-[#d92341]'}`}>{outcome.isYes ? 'SIM' : 'NÃO'}</p>
        </div>
      </div>
    );
  }

  // Para múltipla escolha, mostrar pergunta + SIM/NÃO
  return (
    <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
      <div className="w-full font-['DM_Sans:Bold',sans-serif] text-[16px] text-white">
        <p className="leading-[1.2] truncate font-bold">
          {displayName}
        </p>
      </div>
      <div className="font-['DM_Sans:Regular',sans-serif] text-[#e3e3e3] text-[10px]">
        <p className={`leading-none whitespace-nowrap font-['DM_Sans:Bold',sans-serif] text-[12px] ${outcome.isYes ? 'text-[#32a866]' : 'text-[#d92341]'}`} style={{ fontWeight: 'bold' }}>{outcome.isYes ? 'SIM' : 'NÃO'}</p>
      </div>
    </div>
  );
}

function Porcentagem({ isYes, outcome }: { isYes: boolean; outcome: OutcomeData }) {
  const percentage = isYes ? `${outcome.porcentagemSim}%` : `${outcome.porcentagemNao}%`;
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontWeight: 'bold' }}>
        <div className="flex flex-col gap-[2px] items-end justify-center leading-[0] not-italic relative shrink-0">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.2] text-nowrap whitespace-pre">{percentage}</p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[12px]">
            <p className="leading-none text-nowrap whitespace-pre" style={{ fontWeight: 'normal' }}>Chance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getOutcomeImage(outcome: OutcomeData) {
  const name = outcome.nome?.toLowerCase() || "";
  const question = (outcome as any).question?.toLowerCase() || "";
  
  if (name.includes("bitcoin") || question.includes("bitcoin")) return imgBitcoinGold;
  if (name.includes("maduro") || question.includes("maduro")) return imgMaduro;
  if (name.includes("nenhum") || question.includes("nenhum")) return imgNenhum;
  if (name.includes("dorival") || question.includes("dorival")) return imgDorival;
  if (name.includes("vojvoda") || question.includes("vojvoda")) return imgVojvoda;
  
  return outcome.imagem;
}

function HeaderOutcome({ isYes, outcome }: { isYes: boolean; outcome: OutcomeData }) {
  return (
    <div className="relative shrink-0 w-full" data-name="headerOutcome">
      <div className="flex flex-col items-start w-full gap-[16px]">
        <div className="flex flex-row items-center w-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
            <div className="relative rounded-[100px] shrink-0 size-[48px]" data-name="imgPergunta">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" 
                src={getOutcomeImage(outcome)} 
              />
            </div>
            <Text outcome={outcome} />
            <Porcentagem isYes={isYes} outcome={outcome} />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTES DA TELA DE VENDER (SIM) ---

function TextSell({ outcome }: { outcome: OutcomeData }) {
  const displayName = outcome.isMultipleChoice 
    ? outcome.nome 
    : ((outcome as any).question || outcome.nome);

  // Para perguntas sim/não (não múltipla escolha), mostrar apenas SIM em 16px
  if (!outcome.isMultipleChoice) {
    return (
      <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
        <div className="font-['DM_Sans:Bold',sans-serif] text-[16px]">
          <p className="leading-none whitespace-nowrap font-bold text-[#32a866]">SIM</p>
        </div>
      </div>
    );
  }

  // Para múltipla escolha, mostrar pergunta + SIM
  return (
    <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
      <div className="w-full font-['DM_Sans:Bold',sans-serif] text-[16px] text-white">
        <p className="leading-[1.2] truncate font-bold">
          {displayName}
        </p>
      </div>
      <div className="font-['DM_Sans:Bold',sans-serif] text-[#32A866] text-[12px]">
        <p className="leading-none whitespace-nowrap font-bold">SIM</p>
      </div>
    </div>
  );
}

function CotasHeld({ cotas }: { cotas: number }) {
  const formatted = (cotas ?? 0).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="porcentagem">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">{formatted}</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[12px]">
        <p className="leading-none text-nowrap whitespace-pre">Qtd de Cotas</p>
      </div>
    </div>
  );
}

function HeaderOutcomeSell({ outcome, cotas }: { outcome: OutcomeData; cotas: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="headerOutcome">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-row items-center w-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
            <div className="relative rounded-[100px] shrink-0 size-[48px]" data-name="imgPergunta">
              <img 
                alt="" 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" 
                src={getOutcomeImage(outcome)} 
              />
            </div>
            <TextSell outcome={outcome} />
            <CotasHeld cotas={cotas} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TxtSellValue({ valor }: { valor: string }) {
  const numericValue = parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
  const isActive = numericValue > 0;
  const opacity = isActive ? 'opacity-100' : 'opacity-40';
  const textColor = isActive ? 'text-[#32A866]' : 'text-white';

  return (
    <div className={`basis-0 box-border content-stretch flex gap-[4px] grow items-center justify-center min-h-px min-w-px not-italic px-0 py-[12px] relative shrink-0 text-nowrap whitespace-pre ${textColor}`} data-name="txt">
      <p className={`font-['DM_Sans:Bold',sans-serif] leading-[52px] relative shrink-0 text-[48px] ${opacity}`} style={{ fontWeight: 'bold' }}>{valor}</p>
      <p className={`font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] ${opacity}`}>cotas</p>
    </div>
  );
}

function BaseValorSell({ valor }: { valor: string }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="baseValor">
      <div className="relative shrink-0 w-full" data-name="valor">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[20px] py-0 relative w-full">
            <TxtSellValue valor={valor} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PorcentagemBtn({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-name="valores" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

function PercentagesSell({ onPct25, onPct50, onPct75, onMax }: { onPct25: () => void; onPct50: () => void; onPct75: () => void; onMax: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="baseValor">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center py-0 relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="valor">
            <PorcentagemBtn text="25%" onClick={onPct25} />
            <PorcentagemBtn text="50%" onClick={onPct50} />
            <PorcentagemBtn text="75%" onClick={onPct75} />
            <PorcentagemBtn text="Max" onClick={onMax} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryValueSell({ label, value, color = "#32a866" }: { label: string; value: string; color?: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">{label}</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] w-[min-content]" style={{ color }}>{value}</p>
    </div>
  );
}

function ChanceValue({ chanceAnterior, chanceAtual, isSimulation }: { chanceAnterior: number; chanceAtual: number; isSimulation?: boolean }) {
  const isDecreasing = chanceAtual < chanceAnterior;
  const color = isSimulation ? "#ffffff" : (isDecreasing ? "#D92341" : "#32a866");
  
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex items-center gap-[4px]">
        {isSimulation ? (
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[14px]" style={{ color }}>{chanceAtual}%</p>
        ) : (
          <>
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[14px]" style={{ color }}>{chanceAnterior}%</p>
            <span className="text-[14px]" style={{ color }}>→</span>
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[14px]" style={{ color }}>{chanceAtual}%</p>
          </>
        )}
      </div>
    </div>
  );
}

function RetornoValue({ retorno, isDecreasing, isSimulation }: { retorno: number; isDecreasing: boolean; isSimulation?: boolean }) {
  const formatarReal = (num: number): string => {
    return num.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  const color = isSimulation ? "#ffffff" : (isDecreasing ? "#D92341" : "#32a866");
  
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">Retorno</p>
      </div>
      <div className="flex items-center gap-[4px]">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[14px]" style={{ color }}>R${formatarReal(retorno)}</p>
        {isDecreasing && !isSimulation && (
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-1]">
              <svg className="block size-[8px]" fill="none" viewBox="0 0 8 8">
                <path d="M4 0L7.4641 6H0.535898L4 0Z" fill={color} />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BoxSell({ chanceAnterior, chanceAtual, retorno, taxa, isDecreasing, isSimulation, onTaxaClick, showPriceChange }: { chanceAnterior: number; chanceAtual: number; retorno: number; taxa: number; isDecreasing: boolean; isSimulation?: boolean; onTaxaClick?: () => void; showPriceChange?: boolean }) {
  const formatarReal = (num: number): string => {
    return num.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  
  // Retorno líquido = retorno bruto - taxa
  const retornoLiquido = retorno - Math.abs(taxa);
  
  // Sempre verde (#32A866) - sem distinção de positivo/negativo
  const retornoColor = isSimulation ? 'text-white' : 'text-[#32A866]';

  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="boxSell">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
          {/* Lado esquerdo - Preço Médio e Taxa */}
          <div className="flex flex-col gap-[8px] items-start justify-center shrink-0">
            <div className="flex gap-[4px] items-start text-[10px] text-white text-nowrap">
              <span className="font-['DM_Sans:Regular',sans-serif] leading-none">Preço Médio:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] leading-none font-bold">
                {showPriceChange ? `${Math.round(chanceAnterior)} → ${Math.round(chanceAtual)} centavos` : `${Math.round(chanceAnterior)} centavos`}
              </span>
            </div>
            <div className="flex gap-[4px] items-start text-[10px] text-white text-nowrap cursor-pointer" onClick={onTaxaClick}>
              <span className="font-['DM_Sans:Regular',sans-serif] leading-none">Taxa:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] leading-none font-bold">R${formatarReal(Math.abs(taxa))}</span>
            </div>
          </div>
          {/* Lado direito - Retorno */}
          <div className="basis-0 grow flex flex-col items-end justify-center min-h-px min-w-px text-nowrap">
            <span className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white leading-none">{isSimulation ? 'Retorno Simulado' : 'Retorno'}</span>
            <div className="flex items-center justify-end">
              <span className={`font-['DM_Sans:Bold',sans-serif] text-[16px] ${retornoColor} leading-[1.4] font-bold`}>R${formatarReal(retornoLiquido)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseValorSell1({ onPct25, onPct50, onPct75, onMax, chanceAnterior, chanceAtual, retorno, taxa, valor, isDecreasing, isSimulation, onTaxaClick, showPriceChange }: { 
  onPct25: () => void; 
  onPct50: () => void; 
  onPct75: () => void; 
  onMax: () => void; 
  chanceAnterior: number; 
  chanceAtual: number; 
  retorno: number; 
  taxa: number; 
  valor: string;
  isDecreasing: boolean;
  isSimulation?: boolean;
  onTaxaClick?: () => void;
  showPriceChange?: boolean;
}) {
  const numericValue = parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
  const hasValue = numericValue > 0;
  
  return (
    <div className="relative shrink-0 w-full" data-name="baseValor">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] py-0 relative w-full">
          {hasValue && <BoxSell chanceAnterior={chanceAnterior} chanceAtual={chanceAtual} retorno={retorno} taxa={taxa} isDecreasing={isDecreasing} isSimulation={isSimulation} onTaxaClick={onTaxaClick} showPriceChange={showPriceChange} />}
          <PercentagesSell onPct25={onPct25} onPct50={onPct50} onPct75={onPct75} onMax={onMax} />
        </div>
      </div>
    </div>
  );
}

function BaseContentVenderSim({ 
  outcome, valor, onPct25, onPct50, onPct75, onMax, cotasDisponiveis,
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, 
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace,
  chanceAnterior, chanceAtual, retorno, taxa, isDecreasing, isSimulation, onTaxaClick, showPriceChange
}: {
  outcome: OutcomeData;
  valor: string;
  cotasDisponiveis: number;
  onPct25: () => void;
  onPct50: () => void;
  onPct75: () => void;
  onMax: () => void;
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
  chanceAnterior: number;
  chanceAtual: number;
  retorno: number;
  taxa: number;
  isDecreasing: boolean;
  isSimulation?: boolean;
  onTaxaClick?: () => void;
  showPriceChange?: boolean;
}) {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="baseEscolha">
        <HeaderOutcomeSell outcome={outcome} cotas={cotasDisponiveis} />
      </div>
      <BaseValorSell valor={valor} />
      <BaseValorSell1 
        onPct25={onPct25} 
        onPct50={onPct50} 
        onPct75={onPct75} 
        onMax={onMax}
        chanceAnterior={chanceAnterior}
        chanceAtual={chanceAtual}
        retorno={retorno}
        taxa={taxa}
        valor={valor}
        isDecreasing={isDecreasing}
        isSimulation={isSimulation}
        onTaxaClick={onTaxaClick}
        showPriceChange={showPriceChange}
      />
      <BaseTeclado 
        onPress1={onPress1}
        onPress2={onPress2}
        onPress3={onPress3}
        onPress4={onPress4}
        onPress5={onPress5}
        onPress6={onPress6}
        onPress7={onPress7}
        onPress8={onPress8}
        onPress9={onPress9}
        onPress0={onPress0}
        onPressComma={onPressComma}
        onBackspace={onBackspace}
      />
    </div>
  );
}

function IconSetaDown() {
  return (
    <div className="h-[6.666px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%_-7.51%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InfoSell({ cotas, valor, chanceAtual }: { cotas: number; valor: number; chanceAtual: number }) {
  // Formata valor
  const formatarReal = (num: number): string => {
    return num.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };
  
  const formatarCotas = (num: number): string => {
    return num.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  };

  const displayValor = valor > 0 ? valor : cotas * (chanceAtual / 100);

  return (
    <div className="flex items-center gap-[8px]">
      <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="info">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="retorno">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
            <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>{formatarCotas(cotas)} cotas</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
               <IconSetaDown />
            </div>
          </div>
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
            <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>R${formatarReal(displayValor)}</p>
          </div>
        </div>
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>Chance atual {chanceAtual}%</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center relative shrink-0">
        <div className="h-[9px] relative w-[10.5px]">
          <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8">
              <path d="M5.39908 7.40465L8.55984 1.98621C9.0265 1.18622 8.44945 0.18156 7.5233 0.18156H1.20179C0.275641 0.18156 -0.301405 1.18622 0.165256 1.9862L3.32601 7.40465C3.78906 8.19845 4.93602 8.19845 5.39908 7.40465Z" fill="#AD0924" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnSell({ cotas, valor, chanceAtual, isActive, onClick, isLoading }: { cotas: number; valor: number; chanceAtual: number; isActive: boolean; onClick: () => void; isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className="h-[48px] relative shrink-0 w-full" data-name="btn">
        <BtnLoadingSell />
      </div>
    );
  }

  const opacityClass = isActive ? '' : 'opacity-[0.32]';

  return (
    <div 
      className={`bg-[#19954F] ${opacityClass} relative rounded-[1000px] shrink-0 w-full transition-all ${isActive ? 'cursor-pointer hover:bg-[#158243]' : 'cursor-not-allowed'}`} 
      data-name="btn"
      onClick={isActive ? onClick : undefined}
    >
       <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Vender</p>
        </div>
      </div>
    </div>
  );
}

// --- FIM COMPONENTES DA TELA DE VENDER ---


// --- COMPONENTES DA TELA DE VENDER (NÃO - TAYLOR) ---

function TextSellNo({ outcome }: { outcome: OutcomeData }) {
  const displayName = outcome.isMultipleChoice 
    ? outcome.nome 
    : ((outcome as any).question || outcome.nome);

  // Para perguntas sim/não (não múltipla escolha), mostrar apenas NÃO em 16px
  if (!outcome.isMultipleChoice) {
    return (
      <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
        <div className="font-['DM_Sans:Bold',sans-serif] text-[16px]">
          <p className="leading-none whitespace-nowrap font-bold text-[#d92341]">NÃO</p>
        </div>
      </div>
    );
  }

  // Para múltipla escolha, mostrar pergunta + NÃO
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">{displayName}</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#D92341] text-[12px]">
        <p className="leading-none text-nowrap whitespace-pre font-bold">NÃO</p>
      </div>
    </div>
  );
}

function PorcentagemSellNo({ cotas }: { cotas: number }) {
  return <CotasHeld cotas={cotas} />;
}

function HeaderOutcomeSellNo({ outcome, cotas }: { outcome: OutcomeData; cotas: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="headerOutcome">
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-row items-center w-full">
          <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
            <div className="relative shrink-0 size-[48px]" data-name="imagem">
              <img alt="" className="block max-w-none size-full rounded-full object-cover" height="48" src={getOutcomeImage(outcome)} width="48" />
            </div>
            <TextSellNo outcome={outcome} />
            <PorcentagemSellNo cotas={cotas} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TxtSellNoValue({ valor }: { valor: string }) {
  const numericValue = parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
  const isActive = numericValue > 0;
  const opacity = isActive ? 'opacity-100' : 'opacity-40';
  
  return (
    <div className={`box-border content-stretch flex gap-[4px] items-center justify-center not-italic ${opacity} px-0 py-[12px] relative shrink-0 text-nowrap ${isActive ? 'text-[#32A866]' : 'text-white'} w-full whitespace-pre`} data-name="txt">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[52px] relative shrink-0 text-[48px]" style={{ fontWeight: 'bold' }}>{valor}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px]">cotas</p>
    </div>
  );
}

function BaseValorSellNo({ valor }: { valor: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="baseValor">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] py-0 relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="valor">
             <TxtSellNoValue valor={valor} />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSetaWhite() {
  return (
    <div className="h-[6.666px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%_-7.51%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RetornoSellNo({ valor, cotas, chanceAtual }: { valor: number; cotas: number; chanceAtual: number }) {
  const formatarReal = (num: number): string => {
    return num.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const formatarCotas = (num: number): string => {
    return num.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  };

  const chanceDecimal = Math.max(chanceAtual, 0) / 100;
  const displayValor = valor > 0 ? valor : cotas * chanceDecimal;
  const cotasParaMostrar = cotas > 0 
    ? cotas 
    : (chanceDecimal > 0 ? displayValor / chanceDecimal : 0);

  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>{formatarCotas(cotasParaMostrar)} cotas</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSetaWhite />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>R${formatarReal(displayValor)}</p>
      </div>
    </div>
  );
}

function InfoSellNo({ valor, cotas, chanceAtual }: { valor: number; cotas: number; chanceAtual: number }) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0" data-name="info">
        <RetornoSellNo valor={valor} cotas={cotas} chanceAtual={chanceAtual} />
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
          <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>Chance atual {chanceAtual}%</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="h-[9px] relative w-[10.5px]">
          <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8">
              <path d="M3.32603 0.595354L0.165273 6.01379C-0.301387 6.81378 0.275658 7.81844 1.20181 7.81844H7.52332C8.44947 7.81844 9.02651 6.81378 8.55985 6.0138L5.3991 0.595355C4.93604 -0.198451 3.78908 -0.198452 3.32603 0.595354Z" fill="#2D5F3A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnSellNo({ isActive, onClick, isLoading, valor, cotas, chanceAtual }: { isActive: boolean; onClick: () => void; isLoading?: boolean; valor: number; cotas: number; chanceAtual: number }) {
  if (isLoading) {
    return (
      <div className="h-[48px] relative shrink-0 w-full" data-name="btn">
        <BtnLoadingSell />
      </div>
    );
  }

  const opacityClass = isActive ? '' : 'opacity-[0.32]';

  return (
    <div 
      className={`bg-[#19954F] ${opacityClass} h-[48px] relative rounded-[1000px] shrink-0 w-full transition-all ${isActive ? 'cursor-pointer hover:bg-[#158243]' : 'cursor-not-allowed'}`} 
      data-name="btn"
      onClick={isActive ? onClick : undefined}
    >
       <div aria-hidden="true" className="absolute border border-[#32a866] border-solid inset-0 pointer-events-none rounded-[1000px]" />
       <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Vender</p>
        </div>
      </div>
    </div>
  );
}

function BaseContentVenderNaoTaylor({ 
  outcome, valor, onPct25, onPct50, onPct75, onMax, cotasDisponiveis,
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, 
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace,
  chanceAnterior, chanceAtual, retorno, taxa, isDecreasing, isSimulation, onTaxaClick, showPriceChange
}: {
  outcome: OutcomeData;
  valor: string;
  cotasDisponiveis: number;
  onPct25: () => void;
  onPct50: () => void;
  onPct75: () => void;
  onMax: () => void;
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
  chanceAnterior: number;
  chanceAtual: number;
  retorno: number;
  taxa: number;
  isDecreasing: boolean;
  isSimulation?: boolean;
  onTaxaClick?: () => void;
  showPriceChange?: boolean;
}) {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="baseEscolha">
        <HeaderOutcomeSellNo outcome={outcome} cotas={cotasDisponiveis} />
      </div>
      <BaseValorSellNo valor={valor} />
      <BaseValorSell1 
        onPct25={onPct25} 
        onPct50={onPct50} 
        onPct75={onPct75} 
        onMax={onMax}
        chanceAnterior={chanceAnterior}
        chanceAtual={chanceAtual}
        retorno={retorno}
        taxa={taxa}
        valor={valor}
        isDecreasing={isDecreasing}
        isSimulation={isSimulation}
        onTaxaClick={onTaxaClick}
        showPriceChange={showPriceChange}
      />
      <BaseTeclado 
        onPress1={onPress1}
        onPress2={onPress2}
        onPress3={onPress3}
        onPress4={onPress4}
        onPress5={onPress5}
        onPress6={onPress6}
        onPress7={onPress7}
        onPress8={onPress8}
        onPress9={onPress9}
        onPress0={onPress0}
        onPressComma={onPressComma}
        onBackspace={onBackspace}
      />
    </div>
  );
}

// --- FIM COMPONENTES DA TELA DE VENDER (NÃO - TAYLOR) ---

function BaseEscolha({ isYes, outcome }: { isYes: boolean; outcome: OutcomeData }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="baseEscolha">
      <HeaderOutcome isYes={isYes} outcome={outcome} />
    </div>
  );
}

function Txt({ valor }: { valor: string }) {
  const numericValue = parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
  const isActive = numericValue > 0;
  const textColor = isActive ? 'text-[#32a866]' : 'text-white';
  const opacity = isActive ? 'opacity-100' : 'opacity-40';

  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="txt">
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex gap-[4px] items-center justify-center not-italic pl-0 py-[12px] relative text-nowrap w-full whitespace-pre ${textColor} ${opacity}`}>
          <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px]">R$</p>
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[52px] relative shrink-0 text-[48px]" style={{ fontWeight: 'bold' }}>{valor}</p>
        </div>
      </div>
    </div>
  );
}

function Valor({ valor }: { valor: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="valor">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[20px] py-0 relative w-full">
          <Txt valor={valor} />
        </div>
      </div>
    </div>
  );
}

function BaseValor({ valor }: { valor: string }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="baseValor">
      <Valor valor={valor} />
    </div>
  );
}

function Valores({ onClick }: { onClick: () => void }) {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-name="valores" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>+R$10</p>
        </div>
      </div>
    </div>
  );
}

function Valores1({ onClick }: { onClick: () => void }) {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-name="valores" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>+R$50</p>
        </div>
      </div>
    </div>
  );
}

function Valores2({ onClick }: { onClick: () => void }) {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-name="valores" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>+R$100</p>
        </div>
      </div>
    </div>
  );
}

function Valores3({ onClick }: { onClick: () => void }) {
  return (
    <div className="basis-0 bg-[#242424] grow h-[40px] min-h-px min-w-px relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors" data-name="valores" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>Max</p>
        </div>
      </div>
    </div>
  );
}

function Valor1({ onAdd10, onAdd50, onAdd100, onMax }: { onAdd10: () => void; onAdd50: () => void; onAdd100: () => void; onMax: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="valor">
      <Valores onClick={onAdd10} />
      <Valores1 onClick={onAdd50} />
      <Valores2 onClick={onAdd100} />
      <Valores3 onClick={onMax} />
    </div>
  );
}

function SummaryValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap" data-name="title">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[10px] text-white">
        <p className="leading-none text-nowrap whitespace-pre">{label}</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#32a866] text-[14px] w-[min-content]">{value}</p>
    </div>
  );
}

function TaxIcon() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-[-0.02%]" data-name="Group">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <circle cx="8.00335" cy="8.00354" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPathsSaldo.p19df2600} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPathsSaldo.pb554400} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPathsSaldo.p2a194920} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <g id="Path_4"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TaxInfo({ value, onClick }: { value: string; onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex h-full items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="txtTaxa"
      onClick={onClick}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#242424]" />
      <div className="flex gap-[2px] items-center" style={{ paddingLeft: '12px' }}>
        <TaxIcon />
        <div className="content-stretch flex flex-col h-[20px] items-start not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white" data-name="title">
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] relative shrink-0">
            <p className="leading-none text-nowrap whitespace-pre">Taxa</p>
          </div>
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-none overflow-ellipsis overflow-hidden relative shrink-0 whitespace-pre">{value}</p>
        </div>
      </div>
    </div>
  );
}

function BoxSaldo({ retorno, taxa, chanceAnterior, chanceAtual, cotas }: { retorno: number; taxa: number; chanceAnterior: number; chanceAtual: number; cotas: number }) {
  const formatarReal = (num: number): string => {
    return num.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="boxSaldo">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative w-full">
          {/* Lado esquerdo - Preço Médio, Qtde de Cotas e Taxa */}
          <div className="flex flex-col gap-[8px] items-start justify-center shrink-0">
            <div className="flex gap-[4px] items-start text-[10px] text-white text-nowrap">
              <span className="font-['DM_Sans:Regular',sans-serif] leading-none">Preço Médio:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] leading-none font-bold">{Math.round(chanceAnterior)} centavos</span>
            </div>
            <div className="flex gap-[4px] items-start text-[10px] text-white text-nowrap">
              <span className="font-['DM_Sans:Regular',sans-serif] leading-none">Qtde de Cotas:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] leading-none font-bold">{formatarReal(cotas)}</span>
            </div>
            <div className="flex gap-[4px] items-start text-[10px] text-white text-nowrap">
              <span className="font-['DM_Sans:Regular',sans-serif] leading-none">Taxa:</span>
              <span className="font-['DM_Sans:Bold',sans-serif] leading-none font-bold">R${formatarReal(Math.abs(taxa))}</span>
            </div>
          </div>
          {/* Lado direito - Retorno potencial */}
          <div className="basis-0 grow flex flex-col items-end justify-center min-h-px min-w-px text-nowrap">
            <span className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white leading-none">Retorno potencial</span>
            <span className="font-['DM_Sans:Bold',sans-serif] text-[16px] text-[#32a866] leading-[1.4] font-bold">R${formatarReal(retorno)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseValor1({ onAdd10, onAdd50, onAdd100, onMax, retorno, taxa, valor, chanceAnterior, chanceAtual, cotas }: { onAdd10: () => void; onAdd50: () => void; onAdd100: () => void; onMax: () => void; retorno: number; taxa: number; valor: string; chanceAnterior: number; chanceAtual: number; cotas: number }) {
  const numericValue = parseFloat(valor.replace(/\./g, '').replace(',', '.')) || 0;
  const hasValue = numericValue > 0;
  
  return (
    <div className="relative shrink-0 w-full" data-name="baseValor">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center px-[20px] py-0 relative w-full">
          {hasValue && <BoxSaldo retorno={retorno} taxa={taxa} chanceAnterior={chanceAnterior} chanceAtual={chanceAtual} cotas={cotas} />}
          <Valor1 onAdd10={onAdd10} onAdd50={onAdd50} onAdd100={onAdd100} onMax={onMax} />
        </div>
      </div>
    </div>
  );
}

function Tecla({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Tecla1({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Tecla2({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Tecla3({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Tecla4({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">5</p>
    </div>
  );
}

function Tecla5({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">6</p>
    </div>
  );
}

function Tecla6({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">7</p>
    </div>
  );
}

function Tecla7({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">8</p>
    </div>
  );
}

function Tecla8({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">9</p>
    </div>
  );
}

function Tecla9({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4.043px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">0</p>
    </div>
  );
}

function Tecla10({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14.15px] text-center text-nowrap text-white whitespace-pre">,</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p3a634280} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.256" />
          <path d={svgPaths.p7dae900} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25714" />
          <path clipRule="evenodd" d={svgPaths.p2c5bec00} fillRule="evenodd" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25714" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialBackspaceDeleteButton() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Interface, Essential/backspace-delete-button">
      <Group1 />
    </div>
  );
}

function Tecla11({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#242424] content-stretch flex h-[38px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 flex-1 basis-0 min-w-0 cursor-pointer hover:bg-[#2a2a2a] transition-colors active:bg-[#323232]" data-name="tecla" onClick={onClick}>
      <InterfaceEssentialBackspaceDeleteButton />
    </div>
  );
}

function Numbers({ 
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, 
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace 
}: {
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
}) {
  return (
    <div className="flex flex-col gap-[8px] w-full" data-name="numbers">
      {/* Linha 1: 1, 2, 3 */}
      <div className="flex gap-[8px] w-full">
        <Tecla onClick={onPress1} />
        <Tecla1 onClick={onPress2} />
        <Tecla2 onClick={onPress3} />
      </div>
      {/* Linha 2: 4, 5, 6 */}
      <div className="flex gap-[8px] w-full">
        <Tecla3 onClick={onPress4} />
        <Tecla4 onClick={onPress5} />
        <Tecla5 onClick={onPress6} />
      </div>
      {/* Linha 3: 7, 8, 9 */}
      <div className="flex gap-[8px] w-full">
        <Tecla6 onClick={onPress7} />
        <Tecla7 onClick={onPress8} />
        <Tecla8 onClick={onPress9} />
      </div>
      {/* Linha 4: 0, vírgula, backspace */}
      <div className="flex gap-[8px] w-full">
        <Tecla9 onClick={onPress0} />
        <Tecla10 onClick={onPressComma} />
        <Tecla11 onClick={onBackspace} />
      </div>
    </div>
  );
}

function Teclado({ 
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, 
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace 
}: {
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
}) {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="teclado">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full [&_[data-name='tecla']]:!h-[28px]">
          <Numbers 
            onPress1={onPress1}
            onPress2={onPress2}
            onPress3={onPress3}
            onPress4={onPress4}
            onPress5={onPress5}
            onPress6={onPress6}
            onPress7={onPress7}
            onPress8={onPress8}
            onPress9={onPress9}
            onPress0={onPress0}
            onPressComma={onPressComma}
            onBackspace={onBackspace}
          />
        </div>
      </div>
    </div>
  );
}

function BaseTeclado({ 
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6, 
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace 
}: {
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="baseTeclado">
      <Teclado 
        onPress1={onPress1}
        onPress2={onPress2}
        onPress3={onPress3}
        onPress4={onPress4}
        onPress5={onPress5}
        onPress6={onPress6}
        onPress7={onPress7}
        onPress8={onPress8}
        onPress9={onPress9}
        onPress0={onPress0}
        onPressComma={onPressComma}
        onBackspace={onBackspace}
      />
    </div>
  );
}

// Componente para tela de "Vender" (vazio/sem posições)
function TxtVender() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border border-[#242424] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start not-italic p-[20px] relative text-center text-white w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[14px] w-full" style={{ fontWeight: 'bold' }}>Você não possui posições nesta escolha.</p>
          <p className="font-['DM_Sans:Regular',sans-serif] leading-none relative shrink-0 text-[12px] w-full">Compre primeiro para poder vender mais tarde.</p>
        </div>
      </div>
    </div>
  );
}

function BaseTxtVender() {
  return (
    <div className="relative shrink-0 w-full" data-name="baseTxt">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[20px] pt-0 px-[20px] relative w-full">
          <TxtVender />
        </div>
      </div>
    </div>
  );
}

function BaseContentVender({ isYes, outcome }: { isYes: boolean; outcome: OutcomeData }) {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <BaseEscolha isYes={isYes} outcome={outcome} />
      <BaseTxtVender />
    </div>
  );
}

function BaseContent({
  valor, onAdd10, onAdd50, onAdd100, onMax,
  onPress1, onPress2, onPress3, onPress4, onPress5, onPress6,
  onPress7, onPress8, onPress9, onPress0, onPressComma, onBackspace,
  retorno, taxa, isYes, outcome, chanceAnterior, chanceAtual, cotas
}: {
  valor: string;
  onAdd10: () => void;
  onAdd50: () => void;
  onAdd100: () => void;
  onMax: () => void;
  onPress1: () => void;
  onPress2: () => void;
  onPress3: () => void;
  onPress4: () => void;
  onPress5: () => void;
  onPress6: () => void;
  onPress7: () => void;
  onPress8: () => void;
  onPress9: () => void;
  onPress0: () => void;
  onPressComma: () => void;
  onBackspace: () => void;
  retorno: number;
  taxa: number;
  isYes: boolean;
  outcome: OutcomeData;
  chanceAnterior: number;
  chanceAtual: number;
  cotas: number;
}) {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[20px] items-start px-0 py-[20px] relative shrink-0 w-full" data-name="baseContent">
      <BaseEscolha isYes={isYes} outcome={outcome} />
      <BaseValor valor={valor} />
      <BaseValor1 onAdd10={onAdd10} onAdd50={onAdd50} onAdd100={onAdd100} onMax={onMax} retorno={retorno} taxa={taxa} valor={valor} chanceAnterior={chanceAnterior} chanceAtual={chanceAtual} cotas={cotas} />
      <BaseTeclado
        onPress1={onPress1}
        onPress2={onPress2}
        onPress3={onPress3}
        onPress4={onPress4}
        onPress5={onPress5}
        onPress6={onPress6}
        onPress7={onPress7}
        onPress8={onPress8}
        onPress9={onPress9}
        onPress0={onPress0}
        onPressComma={onPressComma}
        onBackspace={onBackspace}
      />
    </div>
  );
}

function Btn({ isActive, onClick, isLoading, insufficientFunds, onInsufficientFundsClick }: { isActive: boolean; onClick?: () => void; isLoading?: boolean; insufficientFunds?: boolean; onInsufficientFundsClick?: () => void }) {
  // Button is active when: (isActive AND not insufficient) OR (insufficient funds - to allow deposit navigation)
  const isButtonActive = (isActive && !insufficientFunds) || insufficientFunds;
  const opacityClass = isButtonActive ? '' : 'opacity-[0.32]';

  if (isLoading) {
    return (
      <div className="h-[48px] relative shrink-0 w-full" data-name="btn">
        <BtnLoading />
      </div>
    );
  }

  const buttonText = insufficientFunds ? 'Saldo insuficiente - Deposite' : 'Comprar';
  const textSize = insufficientFunds ? 'text-[14px]' : 'text-[16px]';

  const handleClick = () => {
    if (insufficientFunds && onInsufficientFundsClick) {
      onInsufficientFundsClick();
    } else if (isActive && !insufficientFunds && onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`bg-[#19954F] ${opacityClass} h-[48px] relative rounded-[1000px] shrink-0 w-full transition-all ${isButtonActive ? 'cursor-pointer hover:bg-[#158243]' : 'cursor-not-allowed'}`} 
      data-name="btn"
      onClick={isButtonActive ? handleClick : undefined}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className={`font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 ${textSize} text-nowrap text-white whitespace-pre`} style={{ fontWeight: 'bold' }}>{buttonText}</p>
        </div>
      </div>
    </div>
  );
}

function BaseFooter({ 
  valor, isActive, isYes, activeTab, outcome, onBuy, isLoading,
  sellValue, isSellActive, sellCotas, sellReturn, onSell, hasSellPosition, currentChance, shouldShowSellForm, insufficientFunds, onInsufficientFundsClick
}: { 
  valor: number; isActive: boolean; isYes: boolean; activeTab: 'comprar' | 'vender'; outcome: OutcomeData; onBuy: () => void; isLoading?: boolean;
  sellValue: number; isSellActive: boolean; sellCotas: number; sellReturn: number; onSell?: () => void; hasSellPosition: boolean; currentChance: number; shouldShowSellForm?: boolean; insufficientFunds?: boolean; onInsufficientFundsClick?: () => void;
}) {
  
  // Se for tab Vender
  if (activeTab === 'vender') {
    if (!shouldShowSellForm) return null;

    return (
      <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="baseFooter">
        <div aria-hidden="true" className="absolute border-[#242424] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-[20px] relative w-full">
            {isYes ? (
              <BtnSell 
                cotas={sellCotas} 
                valor={sellReturn} 
                chanceAtual={currentChance} 
                isActive={isSellActive} 
                onClick={onSell || (() => {})} 
                isLoading={isLoading} 
              />
            ) : (
              <BtnSellNo 
                valor={sellReturn} 
                cotas={sellCotas}
                chanceAtual={currentChance}
                isActive={isSellActive} 
                onClick={onSell || (() => {})} 
                isLoading={isLoading} 
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Se for tab Comprar, mostra botão de comprar
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="baseFooter">
      <div aria-hidden="true" className="absolute border-[#242424] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[20px] relative w-full">
          <Btn isActive={isActive} onClick={onBuy} isLoading={isLoading} insufficientFunds={insufficientFunds} onInsufficientFundsClick={onInsufficientFundsClick} />
        </div>
      </div>
    </div>
  );
}

export default function OrderBottomSheetFuncional({ outcome, onClose, onBuy, onSell, onTaxaClick }: { outcome: OutcomeData; onClose: () => void; onBuy: (amount: number, isYes: boolean) => void; onSell?: (amount: number, isYes: boolean) => void; onTaxaClick?: () => void }) {
  const navigate = useNavigate();
  const [valueString, setValueString] = useState('0');
  const [sellValueString, setSellValueString] = useState('0');
  const maxSaldo = 240.90;
  const availableCotas = outcome.cotas ?? 0;
  
  const [isYes, setIsYes] = useState(outcome.isYes);
  
  // Bad Bunny (SIM) e Taylor Swift (NÃO) podem vender mesmo sem posições
  const isBadBunny = outcome.nome === "Bad Bunny" && outcome.isYes === true;
  const isTaylorSwift = outcome.nome === "Taylor Swift" && outcome.isYes === false;
  // Se for Bad Bunny (SIM) ou Taylor Swift (NÃO) sem posições, usa 111.1 como limite máximo
  // Para outros sem posições, permite digitar até 99999 para simulação
  const maxCotas = (availableCotas > 0) ? availableCotas : ((isBadBunny || isTaylorSwift) ? 111.1 : 99999);
  const [activeTab, setActiveTab] = useState<'comprar' | 'vender'>(outcome.initialTab || 'comprar');
  const [isLoading, setIsLoading] = useState(false);

  const displayedOutcome = {
    ...outcome,
    volume: outcome.volume
  };
  const hasSellPosition = availableCotas > 0;
  // Sempre mostra o formulário de venda para permitir simulação
  const shouldShowSellForm = true;
  // Pode vender apenas se tem posições reais ou é Bad Bunny (SIM) / Taylor Swift (NÃO)
  const canSell = hasSellPosition || isBadBunny || isTaylorSwift;
  // Para Bad Bunny (SIM) ou Taylor Swift (NÃO) sem posições, mostra 111.1 cotas no header
  // Para outros sem posições, mostra 0
  const displayedCotas = (availableCotas > 0) ? availableCotas : ((isBadBunny || isTaylorSwift) ? 111.1 : 0);

  const parseValue = (str: string): number => {
    const cleaned = str.replace(/\./g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
  };

  const formatDisplay = (str: string): string => {
    if (str === '0') return '0';
    const [intPart, decPart] = str.split(',');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return decPart !== undefined ? `${formattedInt},${decPart}` : formattedInt;
  };

  // Buy Logic
  const getCurrentValue = (): number => parseValue(valueString);
  const handleNumberPress = (num: string) => {
    if (activeTab === 'vender') return handleSellNumberPress(num);
    let newStr = valueString;
    if (newStr === '0') newStr = num;
    else {
      const [intPart, decPart] = newStr.split(',');
      if (decPart !== undefined) {
        if (decPart.length < 2) newStr = `${intPart},${decPart}${num}`;
        else return;
      } else {
        newStr = `${intPart}${num}`;
      }
    }
    setValueString(newStr);
  };
  const handleCommaPress = () => {
    if (activeTab === 'vender') return handleSellCommaPress();
    if (valueString.includes(',')) return;
    if (valueString === '0') setValueString('0,');
    else setValueString(valueString + ',');
  };
  const handleBackspace = () => {
    if (activeTab === 'vender') return handleSellBackspace();
    if (valueString.length > 1) setValueString(valueString.slice(0, -1));
    else setValueString('0');
  };
  const handleAdd10 = () => {
    const val = getCurrentValue() + 10;
    setValueString(val.toString().replace('.', ','));
  };
  const handleAdd50 = () => {
    const val = getCurrentValue() + 50;
    setValueString(val.toString().replace('.', ','));
  };
  const handleAdd100 = () => {
    const val = getCurrentValue() + 100;
    setValueString(val.toString().replace('.', ','));
  };
  const handleSetMax = () => setValueString(maxSaldo.toFixed(2).replace('.', ','));

  // Sell Logic
  const getCurrentSellValue = (): number => parseValue(sellValueString);
  const handleSellNumberPress = (num: string) => {
    let newStr = sellValueString;
    if (newStr === '0') newStr = num;
    else {
      const [intPart, decPart] = newStr.split(',');
      if (decPart !== undefined) {
        if (decPart.length < 2) newStr = `${intPart},${decPart}${num}`;
        else return;
      } else {
        newStr = `${intPart}${num}`;
      }
    }
    const numValue = parseValue(newStr);
    if (numValue <= maxCotas) setSellValueString(newStr);
  };
  const handleSellCommaPress = () => {
    if (sellValueString.includes(',')) return;
    if (sellValueString === '0') setSellValueString('0,');
    else setSellValueString(sellValueString + ',');
  };
  const handleSellBackspace = () => {
    if (sellValueString.length > 1) setSellValueString(sellValueString.slice(0, -1));
    else setSellValueString('0');
  };
  
  // Sell Percentage Buttons
  const handleSellPct25 = () => setSellValueString((maxCotas * 0.25).toLocaleString('pt-BR', { maximumFractionDigits: 2 }));
  const handleSellPct50 = () => setSellValueString((maxCotas * 0.50).toLocaleString('pt-BR', { maximumFractionDigits: 2 }));
  const handleSellPct75 = () => setSellValueString((maxCotas * 0.75).toLocaleString('pt-BR', { maximumFractionDigits: 2 }));
  const handleSellMax = () => setSellValueString(maxCotas.toLocaleString('pt-BR', { maximumFractionDigits: 2 }));

  const displayValue = formatDisplay(valueString);
  const numericValue = getCurrentValue();
  const isActive = numericValue > 0;

  const displaySellValue = formatDisplay(sellValueString);
  const numericSellValue = getCurrentSellValue();
  // Botão ativo apenas se tem valor E pode vender (tem posições ou é Bad Bunny/Taylor)
  const isSellActive = numericSellValue > 0 && canSell;

  const selectedPercentage = isYes ? (outcome.porcentagemSim / 100) : (outcome.porcentagemNao / 100);
  const valorSimulado = numericValue > 0 ? numericValue : 100;
  const taxaValue = valorSimulado * 0.02; // Taxa de 2% sobre o valor investido
  const cotasBrutas = selectedPercentage > 0 ? valorSimulado / selectedPercentage : 0; // Cotas brutas = valor investido / preço da cota
  const potentialReturn = cotasBrutas - taxaValue; // Cotas líquidas e retorno potencial = (cotas brutas × R$1) - taxa
  
  // Para o box de compra: chance anterior (atual) e chance após compra (ligeiramente maior)
  const buyChanceAnterior = selectedPercentage * 100; // Chance atual em %
  const buyChanceAtual = Math.min(buyChanceAnterior + 1, 99); // Simula aumento de 1% após compra
  
  // Calculate return for sell
  // Taylor Swift (NÃO): chance 85% -> 90%
  // Bad Bunny (SIM) e outros: usa chance do outcome
  const currentChance = isTaylorSwift ? 90 : (isYes ? outcome.porcentagemSim : outcome.porcentagemNao);
  const sellReturn = numericSellValue * (currentChance / 100);
  // Para o box de vender: preço médio é a chance atual do mercado (mesmo da compra)
  // Bad Bunny: 90 → 85 (comprou a 90, agora vale 85)
  // Taylor Swift: 85 → 90 (comprou a 85, agora vale 90)
  const chanceAnterior = isBadBunny ? 90 : (isTaylorSwift ? 85 : buyChanceAnterior);
  const chanceAtual = isBadBunny ? 85 : (isTaylorSwift ? 90 : currentChance);
  const isDecreasing = chanceAtual < chanceAnterior;
  const sellTaxa = sellReturn * 0.02; // Taxa de 2% sobre o retorno

  const handleBuy = () => {
    if (isActive && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        onBuy(numericValue, isYes);
      }, 2000);
    }
  };

  const handleSell = () => {
    if (isSellActive && !isLoading && onSell) {
      setIsLoading(true);
      setTimeout(() => {
        onSell(numericSellValue, isYes);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[90vh] w-full" data-name="orderBS-opc02">
      {/* Header + Tabs fixos no topo */}
      <div className="flex-none">
        <BaseHeader onClose={onClose} outcome={displayedOutcome} />
        <BaseTab activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Conteúdo scrollável no meio */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {activeTab === 'vender' ? (
          shouldShowSellForm ? (
            isYes ? (
              <BaseContentVenderSim 
                outcome={displayedOutcome}
                valor={displaySellValue}
                cotasDisponiveis={displayedCotas}
                onPct25={handleSellPct25}
                onPct50={handleSellPct50}
                onPct75={handleSellPct75}
                onMax={handleSellMax}
                onPress1={() => handleNumberPress('1')}
                onPress2={() => handleNumberPress('2')}
                onPress3={() => handleNumberPress('3')}
                onPress4={() => handleNumberPress('4')}
                onPress5={() => handleNumberPress('5')}
                onPress6={() => handleNumberPress('6')}
                onPress7={() => handleNumberPress('7')}
                onPress8={() => handleNumberPress('8')}
                onPress9={() => handleNumberPress('9')}
                onPress0={() => handleNumberPress('0')}
                onPressComma={handleCommaPress}
                onBackspace={handleBackspace}
                chanceAnterior={chanceAnterior}
                chanceAtual={chanceAtual}
                retorno={sellReturn}
                taxa={sellTaxa}
                isDecreasing={isDecreasing}
                isSimulation={!canSell}
                onTaxaClick={onTaxaClick}
                showPriceChange={isBadBunny}
              />
            ) : (
              <BaseContentVenderNaoTaylor 
                outcome={displayedOutcome}
                valor={displaySellValue}
                cotasDisponiveis={displayedCotas}
                onPct25={handleSellPct25}
                onPct50={handleSellPct50}
                onPct75={handleSellPct75}
                onMax={handleSellMax}
                onPress1={() => handleNumberPress('1')}
                onPress2={() => handleNumberPress('2')}
                onPress3={() => handleNumberPress('3')}
                onPress4={() => handleNumberPress('4')}
                onPress5={() => handleNumberPress('5')}
                onPress6={() => handleNumberPress('6')}
                onPress7={() => handleNumberPress('7')}
                onPress8={() => handleNumberPress('8')}
                onPress9={() => handleNumberPress('9')}
                onPress0={() => handleNumberPress('0')}
                onPressComma={handleCommaPress}
                onBackspace={handleBackspace}
                chanceAnterior={chanceAnterior}
                chanceAtual={chanceAtual}
                retorno={sellReturn}
                taxa={sellTaxa}
                isDecreasing={isDecreasing}
                isSimulation={!canSell}
                onTaxaClick={onTaxaClick}
                showPriceChange={isTaylorSwift}
              />
            )
          ) : (
            <BaseContentVender isYes={isYes} outcome={displayedOutcome} />
          )
        ) : (
          <BaseContent 
            valor={displayValue}
            onAdd10={handleAdd10}
            onAdd50={handleAdd50}
            onAdd100={handleAdd100}
            onMax={handleSetMax}
            onPress1={() => handleNumberPress('1')}
            onPress2={() => handleNumberPress('2')}
            onPress3={() => handleNumberPress('3')}
            onPress4={() => handleNumberPress('4')}
            onPress5={() => handleNumberPress('5')}
            onPress6={() => handleNumberPress('6')}
            onPress7={() => handleNumberPress('7')}
            onPress8={() => handleNumberPress('8')}
            onPress9={() => handleNumberPress('9')}
            onPress0={() => handleNumberPress('0')}
            onPressComma={handleCommaPress}
            onBackspace={handleBackspace}
            retorno={potentialReturn}
            taxa={taxaValue}
            isYes={isYes}
            outcome={displayedOutcome}
            chanceAnterior={buyChanceAnterior}
            chanceAtual={buyChanceAtual}
            cotas={potentialReturn}
          />
        )}
      </div>
      
      {/* Footer fixo na base */}
      <div className="flex-none">
        <BaseFooter 
          valor={numericValue} 
          isActive={isActive} 
          isYes={isYes} 
          activeTab={activeTab} 
          outcome={displayedOutcome} 
          onBuy={handleBuy}
          isLoading={isLoading}
          sellValue={numericSellValue}
          isSellActive={isSellActive}
          sellCotas={numericSellValue}
          sellReturn={sellReturn}
          onSell={handleSell}
          hasSellPosition={hasSellPosition}
          currentChance={currentChance}
          shouldShowSellForm={shouldShowSellForm}
          insufficientFunds={numericValue > maxSaldo}
          onInsufficientFundsClick={() => {
            onClose();
            navigate('/central');
          }}
        />
      </div>
    </div>
  );
}
