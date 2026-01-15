import React, { useState, useEffect } from 'react';

interface BonusCampanha {
  id: string;
  nome: string;
  creditosDisponiveis: number;
  creditosTotal: number;
  expiraEm: string;
  expiracaoTimestamp?: number; // timestamp para countdown
  creditosUtilizados?: number; // para bônus encerrados
  expirouEm?: string; // data/hora de expiração para bônus encerrados
}

// Dados mockados de bônus disponíveis
const bonusDisponiveisMock: BonusCampanha[] = [
  {
    id: '1',
    nome: 'Nome da campanha',
    creditosDisponiveis: 25,
    creditosTotal: 50,
    expiraEm: '1h:26m:42s',
    expiracaoTimestamp: Date.now() + (1 * 60 * 60 * 1000) + (26 * 60 * 1000) + (42 * 1000) // 1h26m42s
  },
  {
    id: '2',
    nome: 'Nome da campanha',
    creditosDisponiveis: 50,
    creditosTotal: 50,
    expiraEm: '2 dias'
  },
  {
    id: '3',
    nome: 'Nome da campanha',
    creditosDisponiveis: 50,
    creditosTotal: 50,
    expiraEm: '3dias'
  }
];

// Dados mockados de bônus encerrados (usando os dois primeiros de disponíveis)
const bonusEncerradosMock: BonusCampanha[] = [
  {
    id: '1',
    nome: 'Nome da campanha',
    creditosDisponiveis: 25,
    creditosTotal: 50,
    creditosUtilizados: 25,
    expiraEm: 'Expirado',
    expirouEm: '13/01/26 - 10h40'
  },
  {
    id: '2',
    nome: 'Nome da campanha',
    creditosDisponiveis: 50,
    creditosTotal: 50,
    creditosUtilizados: 50,
    expiraEm: 'Expirado',
    expirouEm: '10/01/26 - 18h22'
  }
];

// Componente para countdown
function useCountdown(targetTimestamp?: number) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (!targetTimestamp) return;

    const updateTime = () => {
      const now = Date.now();
      const diff = targetTimestamp - now;

      if (diff <= 0) {
        setTimeLeft('Expirado');
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h:${minutes.toString().padStart(2, '0')}m:${seconds.toString().padStart(2, '0')}s`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return timeLeft;
}

// Card de bônus encerrado
function BonusCardEncerrado({ bonus }: { bonus: BonusCampanha }) {
  const creditosUtilizados = bonus.creditosUtilizados || 0;
  const progressPercent = (creditosUtilizados / bonus.creditosTotal) * 100;
  const isPartial = creditosUtilizados < bonus.creditosTotal && creditosUtilizados > 0;

  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box-bonus">
      {/* Header */}
      <div className="content-stretch flex gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="header">
        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-white">
          <p className="leading-[1.4] whitespace-pre-wrap font-bold">{bonus.nome}</p>
        </div>
        <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="titulo">
          <p className="font-['DM_Sans:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap text-right">
            <span>Expirou em: </span>
            <span className="font-['DM_Sans:Bold',sans-serif] font-bold">{bonus.expirouEm || 'Expirado'}</span>
          </p>
        </div>
      </div>

      {/* Progresso */}
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="progresso">
        <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full" data-name="progresso">
          <div className="content-stretch flex flex-col items-start justify-center min-h-px min-w-px relative" data-name="header">
            <p className="font-['DM_Sans:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-white whitespace-pre-wrap">
              Créditos utilizado:
            </p>
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="header">
            <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[#32a866] whitespace-nowrap text-right font-bold">
              {creditosUtilizados} de {bonus.creditosTotal}
            </p>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="relative w-full">
          <div 
            className="h-[6px] rounded-[100px] shrink-0 w-full overflow-hidden" 
            style={{ backgroundColor: '#242424' }}
            data-name="barra"
          >
            {isPartial ? (
              <>
                {/* Parte verde substituída por #242424 (disponível) */}
                <div 
                  className="h-[6px] rounded-[100px] absolute right-0 top-0"
                  style={{ 
                    width: `${100 - progressPercent}%`,
                    backgroundColor: '#242424'
                  }}
                  data-name="barras"
                />
                {/* Parte cinza (utilizada) */}
                <div 
                  className="h-[6px] rounded-[100px] absolute left-0 top-0"
                  style={{ 
                    width: `${progressPercent}%`,
                    backgroundColor: '#373737'
                  }}
                  data-name="barras"
                />
              </>
            ) : (
              // Quando 100% usado, toda a barra é cinza
              <div 
                className="h-[6px] rounded-[100px] absolute left-0 top-0"
                style={{ 
                  width: '100%',
                  backgroundColor: '#373737'
                }}
                data-name="barras"
              />
            )}
          </div>
          {/* Círculo indicador - flutuando sobre a barra */}
          <div 
            className={`absolute size-[12px] top-1/2 translate-y-[-50%] ${isPartial ? 'translate-x-[-50%]' : 'translate-x-[50%]'}`}
            style={isPartial ? { left: `${progressPercent}%` } : { right: '0' }}
            data-name="circulo"
          >
            <div 
              className="rounded-full"
              style={{ 
                width: '12px',
                height: '12px',
                backgroundColor: '#373737',
                outline: '2px solid #1E1E1E',
                outlineOffset: '0px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Card de bônus individual
function BonusCard({ bonus }: { bonus: BonusCampanha }) {
  const countdownTime = useCountdown(bonus.expiracaoTimestamp);
  const displayTime = bonus.expiracaoTimestamp ? countdownTime : bonus.expiraEm;
  
  const progressPercent = (bonus.creditosDisponiveis / bonus.creditosTotal) * 100;
  const isPartial = bonus.creditosDisponiveis < bonus.creditosTotal && bonus.creditosDisponiveis > 0;

  return (
    <div className="bg-[#1e1e1e] content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="box-bonus">
      {/* Header */}
      <div className="content-stretch flex gap-[16px] items-center justify-between relative shrink-0 w-full" data-name="header">
        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-white">
          <p className="leading-[1.4] whitespace-pre-wrap font-bold">{bonus.nome}</p>
        </div>
        <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="titulo">
          <p className="font-['DM_Sans:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap text-right">
            <span className="opacity-60">Expira em: </span>
            <span className="font-['DM_Sans:Bold',sans-serif] font-bold">{displayTime}</span>
          </p>
        </div>
      </div>

      {/* Progresso */}
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="progresso">
        <div className="content-stretch flex gap-[4px] items-center justify-between relative shrink-0 w-full" data-name="progresso">
          <div className="content-stretch flex flex-col items-start justify-center min-h-px min-w-px relative" data-name="header">
            <p className="font-['DM_Sans:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[10px] text-white whitespace-pre-wrap">
              Créditos disponível:
            </p>
          </div>
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="header">
            <p className="font-['DM_Sans:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-[#32a866] whitespace-nowrap text-right font-bold">
              {bonus.creditosDisponiveis} de {bonus.creditosTotal}
            </p>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="relative w-full">
          <div 
            className="h-[6px] rounded-[100px] shrink-0 w-full overflow-hidden" 
            style={{ backgroundColor: '#32a866' }}
            data-name="barra"
          >
            {isPartial && (
              <>
                {/* Parte cinza (não usada) */}
                <div 
                  className="h-[6px] rounded-[100px] absolute left-0 top-0"
                  style={{ 
                    width: `${100 - progressPercent}%`,
                    backgroundColor: '#373737'
                  }}
                  data-name="barras"
                />
              </>
            )}
          </div>
          {/* Círculo indicador - flutuando sobre a barra */}
          <div 
            className="absolute size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            style={{ left: isPartial ? `${progressPercent}%` : '1.2%' }}
            data-name="circulo"
          >
            <div 
              className="rounded-full"
              style={{ 
                width: '12px',
                height: '12px',
                backgroundColor: '#373737',
                outline: '2px solid #1E1E1E',
                outlineOffset: '0px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Título com total de bônus
function TotalBonus({ total }: { total: number }) {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="box-bonus">
      <div className="content-stretch flex font-['DM_Sans:Bold',sans-serif] gap-[8px] items-center not-italic relative shrink-0 w-full" data-name="titulo">
        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white">
          <p className="leading-[1.4] whitespace-pre-wrap font-bold">Total de bônus disponível</p>
        </div>
        <p className="leading-[1.2] relative shrink-0 text-[20px] text-[#32a866] whitespace-pre font-bold">
          {total.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

interface BonusContentProps {
  activeTab?: 'disponiveis' | 'encerrados';
}

export default function BonusContent({ activeTab = 'disponiveis' }: BonusContentProps) {
  const bonusList = activeTab === 'disponiveis' ? bonusDisponiveisMock : bonusEncerradosMock;
  
  // Calcula total de bônus disponível
  const totalBonus = bonusDisponiveisMock.reduce((acc, bonus) => acc + bonus.creditosDisponiveis, 0);

  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 pt-[28px] pb-0 relative size-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-full" data-name="boxPosicao">
        {activeTab === 'disponiveis' && <TotalBonus total={totalBonus} />}
        
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="baseCardsBonus">
          {bonusList.map((bonus) => (
            activeTab === 'disponiveis' ? (
              <BonusCard key={bonus.id} bonus={bonus} />
            ) : (
              <BonusCardEncerrado key={bonus.id} bonus={bonus} />
            )
          ))}
        </div>

        {bonusList.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full py-[40px]">
            <p className="font-['DM_Sans:Regular',sans-serif] text-[14px] text-white opacity-60 text-center">
              {activeTab === 'disponiveis' 
                ? 'Nenhum bônus disponível no momento' 
                : 'Nenhum bônus encerrado'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
