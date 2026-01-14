import { useState } from "react";
import svgPaths from "./svg-vp0gs89ibx";
import svgPathsEsconder from "./svg-py3wa1pfwb";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "../components/ui/drawer";
import ModalBs from "./ModalBs";
import ModalSaldoBs from "./ModalSaldoBs";
import ModalBonusBs from "./ModalBonusBs";
import iconDuvidas from "../assets/iconDuvidas.png";

function IconMostrarEsconder({ isHidden }: { isHidden: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="iconMostrarEsconder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="iconMostrarEsconder">
          {isHidden ? (
            <>
              <path d={svgPathsEsconder.p102e7900} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsEsconder.p169a2580} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsEsconder.p18fe5000} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPathsEsconder.p7bafdc0} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </>
          ) : (
            <>
              <path d={svgPaths.p2bf7c580} id="iconMostrarEsconder_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p23abe000} fillRule="evenodd" id="iconMostrarEsconder_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

function BtnEsconder({ onClick, isHidden }: { onClick: () => void; isHidden: boolean }) {
  return (
    <div 
      className="relative shrink-0 w-full cursor-pointer" 
      data-name="btnEsconder"
      onClick={onClick}
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[20px] py-0 relative w-full">
          <IconMostrarEsconder isHidden={isHidden} />
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
            <p className="leading-none whitespace-pre">{isHidden ? "Mostrar todos os valores" : "Esconder todos os valores"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00333" cy="8.00333" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p128ba400} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e110a00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pe63e600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group />
    </div>
  );
}

function Title({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="title"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Sua Carteira</p>
      </div>
      <Icon />
    </div>
  );
}

function Txt({ isHidden }: { isHidden: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center not-italic relative shrink-0 text-nowrap text-white w-full" data-name="txt">
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] whitespace-pre">R$</p>
      <p className="[white-space-collapse:collapse] basis-0 font-['DM_Sans:Bold',sans-serif] grow leading-[28px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] font-bold">
        {isHidden ? "*****" : "3.400,00"}
      </p>
    </div>
  );
}

function Patrimonio({ isHidden, onTitleClick }: { isHidden: boolean; onTitleClick: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="patrimonio">
      <Title onClick={onTitleClick} />
      <Txt isHidden={isHidden} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <circle cx="8.00333" cy="8.00333" id="Oval" r="6.0025" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p128ba400} id="Path" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e110a00} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pe63e600} id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_4"></g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="opacity-[0.56] relative shrink-0 size-[16px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Title1({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="title"
      onClick={onClick}
    >
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-none whitespace-pre">Seu Saldo</p>
      </div>
      <Icon1 />
    </div>
  );
}

function Txt1({ isHidden }: { isHidden: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center not-italic relative shrink-0 text-nowrap text-white whitespace-pre" data-name="txt">
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px]">R$</p>
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[28px] relative shrink-0 text-[24px] font-bold">
        {isHidden ? "*****" : "240,90"}
      </p>
    </div>
  );
}

function Patrimonio1({ isHidden, onTitleClick }: { isHidden: boolean; onTitleClick: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="patrimonio">
      <Title1 onClick={onTitleClick} />
      <Txt1 isHidden={isHidden} />
    </div>
  );
}

function BaseCarteira({ 
  isHidden, 
  onPortfolioClick, 
  onSaldoClick,
  onBonusClick
}: { 
  isHidden: boolean; 
  onPortfolioClick: () => void; 
  onSaldoClick: () => void;
  onBonusClick: () => void;
}) {
  const formatarReal = (valor: number) => {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="relative shrink-0 w-full" data-name="baseCarteira">
      <div className="size-full">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
          {/* Primeira linha: Sua Carteira e Seu Saldo */}
          <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
            <Patrimonio isHidden={isHidden} onTitleClick={onPortfolioClick} />
            <Patrimonio1 isHidden={isHidden} onTitleClick={onSaldoClick} />
          </div>
          
          {/* Segunda linha: Bônus disponível */}
          <button 
            onClick={onBonusClick}
            style={{ 
              display: 'flex', 
              gap: '4px', 
              alignItems: 'center', 
              width: '100%', 
              cursor: 'pointer', 
              background: 'none', 
              border: 'none', 
              padding: 0 
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'white', opacity: 0.56, lineHeight: 1 }}>Bônus disponível:</span>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '12px', color: 'white', lineHeight: 1 }}>
                {isHidden ? '••••••' : formatarReal(125.00)}
              </span>
              <img src={iconDuvidas} alt="" style={{ width: '16px', height: '16px', opacity: 0.56 }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#19954f] h-[40px] relative rounded-[1000px] shrink-0 w-full" data-name="btn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[24px] py-0 relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="leading-[1.2] whitespace-pre font-bold">Fazer um depósito</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn1() {
  return (
    <div className="h-[40px] relative rounded-[1000px] shrink-0 w-full" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#19954f] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[24px] py-0 relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
            <p className="leading-[1.2] whitespace-pre font-bold">Efetuar um saque</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaseBotoes() {
  return (
    <div className="relative shrink-0 w-full" data-name="baseBotoes">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
          <Btn />
          <Btn1 />
        </div>
      </div>
    </div>
  );
}

interface ContentProps {
  isHidden: boolean;
  onToggleHidden: () => void;
}

export default function Content({ isHidden, onToggleHidden }: ContentProps) {
  const [isPortfolioDrawerOpen, setIsPortfolioDrawerOpen] = useState(false);
  const [isSaldoDrawerOpen, setIsSaldoDrawerOpen] = useState(false);
  const [isBonusDrawerOpen, setIsBonusDrawerOpen] = useState(false);

  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-0 py-[28px] relative size-full" data-name="content">
      {/* Portfolio Drawer */}
      <Drawer open={isPortfolioDrawerOpen} onOpenChange={setIsPortfolioDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Sua Carteira</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o cálculo do portfólio</DrawerDescription>
          </div>
          <ModalBs onClose={() => setIsPortfolioDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      {/* Saldo Drawer */}
      <Drawer open={isSaldoDrawerOpen} onOpenChange={setIsSaldoDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Seu Saldo</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o cálculo do saldo</DrawerDescription>
          </div>
          <ModalSaldoBs onClose={() => setIsSaldoDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      {/* Bonus Drawer */}
      <Drawer open={isBonusDrawerOpen} onOpenChange={setIsBonusDrawerOpen}>
        <DrawerContent className="p-0 bg-transparent border-none shadow-none">
          <div className="sr-only">
            <DrawerTitle>Bônus disponível</DrawerTitle>
            <DrawerDescription>Explicação detalhada sobre o bônus</DrawerDescription>
          </div>
          <ModalBonusBs onClose={() => setIsBonusDrawerOpen(false)} />
        </DrawerContent>
      </Drawer>

      <BtnEsconder onClick={onToggleHidden} isHidden={isHidden} />
      <BaseCarteira 
        isHidden={isHidden} 
        onPortfolioClick={() => setIsPortfolioDrawerOpen(true)}
        onSaldoClick={() => setIsSaldoDrawerOpen(true)}
        onBonusClick={() => setIsBonusDrawerOpen(true)}
      />
      <BaseBotoes />
    </div>
  );
}
