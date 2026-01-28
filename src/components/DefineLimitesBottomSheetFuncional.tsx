import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

// Imagens de alta resolução (mesmas do OrderBottomSheetFuncional)
import imgBitcoinGold from "figma:asset/a45e169be48c8271438e628b2b414ffbc170e022.png";
import imgNenhum from "figma:asset/49700c649bca78f49561401caa7e05e89a96668c.png";
import imgMaduro from "figma:asset/065ca6711a3eca5fd95f4ec7f173ed5f1a9e85b4.png";
import imgDorival from "figma:asset/50882ac1ab781e7116eedf88af570ea8311d0c1e.png";
import imgVojvoda from "figma:asset/b56641d75ea5dc11d6fbc5730e830d740cd1329a.png";
import imgBadBunny from "figma:asset/b8557be30a11c35e72c3a4ac1a0fb0eb28f9c419.png";
import imgTaylorSwift from "../assets/562cec5dc1dde5641c98cbf9e6b84b136f03e611.png";

// Função para obter imagem de alta resolução baseada no nome da escolha
function getHighResImage(escolha: string, question: string, fallbackImg: string): string {
  const name = escolha?.toLowerCase() || "";
  const questionLower = question?.toLowerCase() || "";
  
  if (name.includes("bad bunny")) return imgBadBunny;
  if (name.includes("bitcoin") || questionLower.includes("bitcoin")) return imgBitcoinGold;
  if (name.includes("maduro") || questionLower.includes("maduro")) return imgMaduro;
  if (name.includes("nenhum") || questionLower.includes("nenhum")) return imgNenhum;
  if (name.includes("dorival") || questionLower.includes("dorival")) return imgDorival;
  if (name.includes("vojvoda") || questionLower.includes("vojvoda")) return imgVojvoda;
  if (name.includes("taylor") || questionLower.includes("taylor")) return imgTaylorSwift;
  
  return fallbackImg;
}

interface DefineLimitesData {
  question: string;
  escolha: string;
  imgSrc: string;
  isYes: boolean;
  precoAtual: number; // Chance atual (porcentagem)
  cotas?: number; // Quantidade de cotas do usuário
}

interface DefineLimitesBottomSheetFuncionalProps {
  data: DefineLimitesData | null;
  onClose: () => void;
  onSave?: (limitePerda: number | null, limiteGanho: number | null) => void;
  savedLimitePerda?: number | null;
  savedLimiteGanho?: number | null;
}

// Componente de Título (igual ao OrderBottomSheetFuncional)
function Titulo({ text }: { text: string }) {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="titulo">
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-white">
        <p className="leading-none">{text}</p>
      </div>
    </div>
  );
}

// Ícone X para fechar (igual ao OrderBottomSheetFuncional)
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

// Header (igual ao OrderBottomSheetFuncional)
function Header({ onClose, text }: { onClose: () => void; text: string }) {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="header">
      <Titulo text={text} />
      <Icon onClose={onClose} />
    </div>
  );
}

function BaseHeader({ onClose, text }: { onClose: () => void; text: string }) {
  return (
    <div className="bg-[#1e1e1e] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="baseHeader">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center pl-[20px] pr-[12px] py-[12px] relative w-full">
          <Header onClose={onClose} text={text} />
        </div>
      </div>
    </div>
  );
}

// Seletor de valor com + e -
function ValueSelector({ 
  value, 
  onChange, 
  minValue, 
  maxValue,
  step = 0.01
}: { 
  value: number; 
  onChange: (val: number) => void; 
  minValue: number; 
  maxValue: number;
  step?: number;
}) {
  const handleDecrease = () => {
    const newValue = Math.max(minValue, value - step);
    onChange(Math.round(newValue * 100) / 100);
  };

  const handleIncrease = () => {
    const newValue = Math.min(maxValue, value + step);
    onChange(Math.round(newValue * 100) / 100);
  };

  const canDecrease = value > minValue;
  const canIncrease = value < maxValue;

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      border: '1px solid #373737',
      borderRadius: '4px 4px 0 0',
      padding: '8px 12px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Botão - */}
      <button
        onClick={handleDecrease}
        disabled={!canDecrease}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#373737',
          border: 'none',
          cursor: canDecrease ? 'pointer' : 'not-allowed',
          opacity: canDecrease ? 1 : 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          flexShrink: 0
        }}
      >
        −
      </button>

      {/* Valor */}
      <span style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#32a866'
      }}>
        {value.toFixed(2).replace('.', ',')}
      </span>

      {/* Botão + */}
      <button
        onClick={handleIncrease}
        disabled={!canIncrease}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: '#373737',
          border: 'none',
          cursor: canIncrease ? 'pointer' : 'not-allowed',
          opacity: canIncrease ? 1 : 0.32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '16px',
          fontWeight: 'bold',
          flexShrink: 0
        }}
      >
        +
      </button>
    </div>
  );
}

// Informações de cotas, taxa e retorno
function InfoRetorno({ cotas, taxa, retornoPotencial }: { cotas: number; taxa: number; retornoPotencial: number }) {
  const formatMoney = (val: number) => `R$${val.toFixed(2).replace('.', ',')}`;
  const formatCotas = (val: number) => val.toFixed(2).replace('.', ',');

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'flex-start',
      width: '100%',
      border: '1px solid #373737',
      borderTop: 'none',
      borderRadius: '0 0 4px 4px',
      padding: '8px 12px',
      boxSizing: 'border-box'
    }}>
      {/* Lado esquerdo - Cotas e Taxa */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(227, 227, 227, 0.56)', lineHeight: 1 }}>
            Qtde de Cotas:
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'white', fontWeight: 'bold', lineHeight: 1 }}>
            {formatCotas(cotas)}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(227, 227, 227, 0.56)', lineHeight: 1 }}>
            Taxa:
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'white', fontWeight: 'bold', lineHeight: 1 }}>
            {formatMoney(taxa)}
          </span>
        </div>
      </div>

      {/* Lado direito - Retorno Potencial */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0 }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(227, 227, 227, 0.56)', lineHeight: 1 }}>
          Retorno Potencial
        </span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#32a866', fontWeight: 'bold', lineHeight: 1.4 }}>
          {formatMoney(retornoPotencial)}
        </span>
      </div>
    </div>
  );
}

// Toggle com conteúdo expandido
function ToggleLimiteExpandido({ 
  checked, 
  onCheckedChange, 
  label,
  helperText,
  value,
  onValueChange,
  minValue,
  maxValue,
  cotas,
  precoAtual
}: { 
  checked: boolean; 
  onCheckedChange: (checked: boolean) => void; 
  label: string;
  helperText: string;
  value: number;
  onValueChange: (val: number) => void;
  minValue: number;
  maxValue: number;
  cotas: number;
  precoAtual: number;
}) {
  // Calcula valores
  const taxa = cotas * value * 0.02; // 2% de taxa
  const retornoBruto = cotas * value;
  const retornoPotencial = retornoBruto - taxa;

  return (
    <div 
      style={{ 
        backgroundColor: checked ? '#242424' : 'transparent',
        border: '1px solid #242424',
        borderRadius: '8px',
        padding: '12px 16px',
        width: '100%',
        transition: 'background-color 0.2s ease'
      }}
    >
      {/* Toggle Header */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        alignItems: 'center',
        height: '24px'
      }}>
        {/* Switch */}
        <div style={{ height: '24px', position: 'relative', width: '40px', flexShrink: 0 }}>
          <button
            onClick={() => onCheckedChange(!checked)}
            style={{
              position: 'relative',
              width: '40px',
              height: '24px',
              borderRadius: '9999px',
              backgroundColor: checked ? '#19954f' : '#373737',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            role="switch"
            aria-checked={checked}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'white',
                transform: checked ? 'translateX(16px)' : 'translateX(0)',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>
        </div>
        {/* Texto */}
        <span style={{ 
          fontFamily: 'DM Sans, sans-serif', 
          fontSize: '12px', 
          color: 'white', 
          lineHeight: 1,
          whiteSpace: 'nowrap'
        }}>
          {label}
        </span>
      </div>

      {/* Conteúdo expandido quando ativo - com animação de accordion */}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden', marginTop: '16px' }}
          >
            {/* Texto helper */}
            <p style={{ 
              fontFamily: 'DM Sans, sans-serif', 
              fontSize: '10px', 
              color: 'white', 
              marginBottom: '12px',
              lineHeight: 1.4
            }}>
              {helperText}
            </p>

            {/* Seletor de valor */}
            <ValueSelector
              value={value}
              onChange={onValueChange}
              minValue={minValue}
              maxValue={maxValue}
            />

            {/* Informações de retorno */}
            <InfoRetorno
              cotas={cotas}
              taxa={taxa}
              retornoPotencial={retornoPotencial}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Escolha com imagem e preço atual (igual ao OrderBottomSheetFuncional)
function EscolhaCard({ data }: { data: DefineLimitesData }) {
  // Converte porcentagem para centavos (ex: 95% = R$0,95)
  const precoEmReais = (data.precoAtual / 100).toFixed(2).replace('.', ',');
  
  // Obtém imagem de alta resolução
  const highResImg = getHighResImage(data.escolha, data.question, data.imgSrc);
  
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="baseEscolha">
      {/* Imagem - 48x48px */}
      <div className="relative rounded-[100px] shrink-0 size-[48px]" data-name="imgPergunta">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" 
          src={highResImg}
        />
      </div>
      
      {/* Texto com escolha */}
      <div className="basis-0 flex flex-col gap-[2px] grow items-start justify-center min-w-0 relative shrink-0" data-name="text">
        <div className="w-full font-['DM_Sans:Bold',sans-serif] text-[16px] text-white">
          <p className="leading-[1.2] truncate font-bold">
            {data.escolha}
          </p>
        </div>
        <div className="font-['DM_Sans:Regular',sans-serif] text-[#e3e3e3] text-[10px]">
          <p className={`leading-none whitespace-nowrap font-['DM_Sans:Bold',sans-serif] text-[12px] ${data.isYes ? 'text-[#32a866]' : 'text-[#d92341]'}`} style={{ fontWeight: 'bold' }}>
            {data.isYes ? 'SIM' : 'NÃO'}
          </p>
        </div>
      </div>
      
      {/* Preço Atual - invertido com valor em reais */}
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontWeight: 'bold' }}>
          <div className="flex flex-col gap-[2px] items-end justify-center leading-[0] not-italic relative shrink-0">
            <p className="leading-none whitespace-pre font-['DM_Sans:Bold',sans-serif] font-bold text-[16px]">R${precoEmReais}</p>
            <p className="font-['DM_Sans:Regular',sans-serif] text-[#e3e3e3] text-[12px] leading-none opacity-60">Preço atual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer com botão (igual ao BaseFooter do OrderBottomSheetFuncional)
function BaseFooter({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="baseFooter">
      <div aria-hidden="true" className="absolute border-[#242424] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[20px] relative w-full">
          <div 
            className="bg-[#19954f] relative rounded-[1000px] h-[48px] w-full cursor-pointer hover:bg-[#157a42] transition-colors" 
            data-name="btn" 
            onClick={onClick}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[24px] py-0 relative size-full">
                <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>
                  Salvar Limites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DefineLimitesBottomSheetFuncional({ 
  data, 
  onClose, 
  onSave,
  savedLimitePerda,
  savedLimiteGanho
}: DefineLimitesBottomSheetFuncionalProps) {
  // Preço atual em formato decimal (ex: 95% = 0.95)
  const precoAtualDecimal = data ? data.precoAtual / 100 : 0;
  
  // Inicializa com valores salvos se existirem
  const [limitePerdaAtivo, setLimitePerdaAtivo] = useState(savedLimitePerda !== null && savedLimitePerda !== undefined);
  const [limiteGanhoAtivo, setLimiteGanhoAtivo] = useState(savedLimiteGanho !== null && savedLimiteGanho !== undefined);
  
  // Valores iniciais: usa valores salvos ou calcula a partir do preço atual
  const [valorPerda, setValorPerda] = useState(
    savedLimitePerda !== null && savedLimitePerda !== undefined 
      ? savedLimitePerda 
      : Math.max(0.01, precoAtualDecimal - 0.01)
  );
  const [valorGanho, setValorGanho] = useState(
    savedLimiteGanho !== null && savedLimiteGanho !== undefined 
      ? savedLimiteGanho 
      : Math.min(0.99, precoAtualDecimal + 0.01)
  );

  // Quantidade de cotas (mock ou vindo do data)
  const cotas = data?.cotas || 444.44;

  if (!data) return null;

  const handleSave = () => {
    if (onSave) {
      onSave(
        limitePerdaAtivo ? valorPerda : null,
        limiteGanhoAtivo ? valorGanho : null
      );
    }
    // Nota: não chamar onClose() aqui pois o DefineLimitesBottomSheet.handleSave já cuida de fechar com animação
  };

  return (
    <div 
      className="bg-[#1e1e1e] flex flex-col rounded-tl-[8px] rounded-tr-[8px] overflow-hidden"
      style={{ maxHeight: 'calc(100vh - 80px)' }}
    >
      {/* Header fixo - com texto "Defina limites..." */}
      <div className="flex-shrink-0">
        <BaseHeader onClose={onClose} text="Defina limites para reduzir perdas ou garantir ganhos automaticamente." />
      </div>

      {/* Body scrollável */}
      <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
        <div className="box-border content-stretch flex flex-col items-start p-[20px] relative w-full" data-name="baseBody">
          
          {/* Pergunta - 10px */}
          <p className="font-['DM_Sans:Regular',sans-serif] text-[10px] text-white leading-[1.4]">
            {data.question}
          </p>

          {/* Card com escolha e preço atual - gap 16px */}
          <div style={{ marginTop: '16px', width: '100%' }}>
            <EscolhaCard data={data} />
          </div>

          {/* Toggles - gap 28px do card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', marginTop: '28px' }}>
            {/* Toggle Limite de Perda */}
            <ToggleLimiteExpandido
              checked={limitePerdaAtivo}
              onCheckedChange={setLimitePerdaAtivo}
              label="Definir Limite de Perda"
              helperText="Defina um preço menor do que o preço atual:"
              value={valorPerda}
              onValueChange={setValorPerda}
              minValue={0.01}
              maxValue={precoAtualDecimal - 0.01}
              cotas={cotas}
              precoAtual={precoAtualDecimal}
            />

            {/* Toggle Limite de Ganho */}
            <ToggleLimiteExpandido
              checked={limiteGanhoAtivo}
              onCheckedChange={setLimiteGanhoAtivo}
              label="Definir Limite de Ganho"
              helperText="Defina um preço maior do que o preço atual e que dê lucro:"
              value={valorGanho}
              onValueChange={setValorGanho}
              minValue={precoAtualDecimal + 0.01}
              maxValue={0.99}
              cotas={cotas}
              precoAtual={precoAtualDecimal}
            />
          </div>

          {/* Texto de restrição - gap 16px */}
          <p 
            className="font-['DM_Sans:Regular',sans-serif] text-[10px] leading-[1.4]"
            style={{ color: 'rgba(227, 227, 227, 0.56)', marginTop: '16px' }}
          >
            Quando o preço definido for atingido, a venda é acionada automaticamente, conforme as condições do mercado no momento da execução. O valor recebido pode variar de acordo com a quantidade de cotas e a liquidez disponível. Atenção: o limite não garante um preço exato, e sim a tentativa automática de saída da posição.
          </p>
        </div>
      </div>

      {/* Footer fixo com botão - separado com linha */}
      <div className="flex-shrink-0">
        <BaseFooter onClick={handleSave} />
      </div>
    </div>
  );
}
