import svgPaths from "./svg-osh2nowq03";
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import imgVojvoda from "figma:asset/b56641d75ea5dc11d6fbc5730e830d740cd1329a.png";
import imgMaisa from "figma:asset/53fc2d8d53b9d30b0de06b7ac771683fec312c28.png";
import imgBadBunny from "figma:asset/ace2b2254084b0d52658c208affa2d3af8c88f48.png";
import imgRussiaUcrania from "figma:asset/ab8290588cf8c18de0e913b8ba0905bd490c62f4.png";
import imgCasimiro from "figma:asset/85684de1d898b684366e28e3f7d1e7c73e0d6f56.png";
import imgDeposito from "figma:asset/1d9bb60a878166e3d93f32f6f0df7b463bd492dd.png";
import imgNeymar from "figma:asset/507d98dfcdfe754b3dcec99e575f68c14c734318.png";
import imgIconBonus1 from "figma:asset/98dcb13e337d143c0ce1c7482337d8f4e5e35474.png";
import imgIconSaque1 from "figma:asset/cb321f2a755691e6c880119a4759326c4a04f271.png";
import imgIconSetaIrMercado from "figma:asset/e49bc6748ca1004de584dd1aac26aa2efb00e9ed.png";

const imgIconSetaAccordion = "https://images.unsplash.com/photo-1758354286358-015ba26eb5ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnJvdyUyMGRvd24lMjBpY29uJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NDI2NzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImagem = "https://images.unsplash.com/photo-1637559508411-e6d65573efff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjb2FjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDI2NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImgPergunta = "https://images.unsplash.com/photo-1711182673833-7e11dffa0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0diUyMHByZXNlbnRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDI2NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImagem1 = "https://images.unsplash.com/photo-1609211285982-52e85c322f16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBwb3J0cmFpdCUyMGJhZCUyMGJ1bm55fGVufDF8fHx8MTc2NDI2NzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImgPergunta1 = "https://images.unsplash.com/photo-1645520899209-3dedf1205cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXIlMjBwZWFjZSUyMGFncmVlbWVudCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjQyNjcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImgPergunta2 = "https://images.unsplash.com/photo-1645520899209-3dedf1205cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXIlMjBwZWFjZSUyMGFncmVlbWVudCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjQyNjcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImgPergunta3 = "https://images.unsplash.com/photo-1650913406613-f919a0dd24ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbWlybyUyMHN0cmVhbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjY3MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface ChipProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function ChipBase({ isActive, onClick, label }: ChipProps) {
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

function ChipsPitaco({ currentFilter, onFilterChange }: { currentFilter: string, onFilterChange: (filter: string) => void }) {
  const filters = [
    "Todos",
    "Compras",
    "Vendas",
    "Fechamento",
    "Cancelamento"
  ];

  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-[20px] py-0 relative shrink-0 overflow-x-auto no-scrollbar w-full" data-name="chipsPitaco">
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

function ChipsFinanceiro({ currentFilter, onFilterChange }: { currentFilter: string, onFilterChange: (filter: string) => void }) {
  const filters = [
    "Todos",
    "Depósito",
    "Saque",
    "Bônus"
  ];

  return (
    <div className="box-border content-stretch flex gap-[8px] items-start px-[20px] py-0 relative shrink-0 overflow-x-auto no-scrollbar w-full" data-name="chipsFinanceiro">
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

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[1.2]">Quem será o próximo técnico demitido na Série A?</p>
      </div>
    </div>
  );
}

function IconSetaAccordion({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text />
      <IconSetaAccordion isOpen={isOpen} />
    </div>
  );
}

function Escolha() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="escolha">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Vojvoda - Santos</p>
      </div>
    </div>
  );
}

function SimNao() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Sim</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <Escolha />
      <SimNao />
    </div>
  );
}

function BaseEscolha() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text1 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Comprou</p>
      </div>
    </div>
  );
}

function BaseValor() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">-R$400</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgVojvoda} width="24" />
      </div>
      <BaseEscolha />
      <BaseValor />
    </div>
  );
}

function ValorVojvoda() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">444,44</p>
      </div>
    </div>
  );
}

function ValorVojvoda1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">90%</p>
      </div>
    </div>
  );
}

function ValorVojvoda2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno Potencial</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">R$444,44</p>
      </div>
    </div>
  );
}

function TabelaVojvoda() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="tabela">
      <ValorVojvoda />
      <ValorVojvoda1 />
      <ValorVojvoda2 />
      <></>
    </div>
  );
}

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <TabelaVojvoda />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-nowrap text-white w-full">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden">Maisa Silva será anunciada como apresentadora em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function IconSetaAccordion1({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header1({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text2 />
      <IconSetaAccordion1 isOpen={isOpen} />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="img">
      <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgMaisa} width="24" />
    </div>
  );
}

function SimNao1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Sim</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <SimNao1 />
    </div>
  );
}

function BaseEscolha1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text3 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Cancelado</p>
      </div>
    </div>
  );
}

function BaseValor1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$150</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <Img />
      <BaseEscolha1 />
      <BaseValor1 />
    </div>
  );
}

function Valor() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">250</p>
      </div>
    </div>
  );
}

function Valor1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[200px]" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-right w-full">
        <p className="leading-none">As regras de liquidação não puderam ser aplicadas e o valor foi reembolsado</p>
      </div>
    </div>
  );
}

function Tabela() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="tabela">
      <Valor />
      <Valor1 />
    </div>
  );
}

function Card1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header1 isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome1 />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <Tabela />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[1.2]">Quem será o artista mais popular no Spotify este ano?</p>
      </div>
    </div>
  );
}

function IconSetaAccordion2({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header2({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text4 />
      <IconSetaAccordion2 isOpen={isOpen} />
    </div>
  );
}

function Escolha1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="escolha">
      <div aria-hidden="true" className="absolute border-[#242424] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Bad Bunny</p>
      </div>
    </div>
  );
}

function SimNao2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Sim</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <Escolha1 />
      <SimNao2 />
    </div>
  );
}

function BaseEscolha2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text5 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Comprou</p>
      </div>
    </div>
  );
}

function BaseValor2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] h-[17px] justify-center relative shrink-0 text-[14px] text-white w-[53px]">
        <p className="leading-[1.1] font-bold whitespace-nowrap">-R$200</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgBadBunny} width="24" />
      </div>
      <BaseEscolha2 />
      <BaseValor2 />
    </div>
  );
}

function ValorSpotify1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">235,3</p>
      </div>
    </div>
  );
}

function ValorSpotify2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">90%</p>
      </div>
    </div>
  );
}

function ValorSpotify3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno Potencial</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">R$235</p>
      </div>
    </div>
  );
}

function IconVerMercado({ link }: { link?: string }) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (link) {
      e.stopPropagation();
      navigate(link);
    }
  };

  return (
    <></>
  );
}

function TabelaSpotify() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="tabela">
      <ValorSpotify1 />
      <ValorSpotify2 />
      <ValorSpotify3 />
      <></>
    </div>
  );
}

function Card2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header2 isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome2 />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <TabelaSpotify />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[1.2]">Vai ter cessar-fogo entre Rússia e Ucrânia em 2025?</p>
      </div>
    </div>
  );
}

function ValorRussia1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">235,3</p>
      </div>
    </div>
  );
}

function ValorRussia2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold','Noto_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">85 →90%</p>
      </div>
    </div>
  );
}

function ValorRussia3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[12px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">+R$11,77</p>
      </div>
    </div>
  );
}

function TabelaRussia() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="tabela">
      <ValorRussia1 />
      <ValorRussia2 />
      <ValorRussia3 />
      <></>
    </div>
  );
}

function IconSetaAccordion3({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header3({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text6 />
      <IconSetaAccordion3 isOpen={isOpen} />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="img">
      <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgRussiaUcrania} width="24" />
    </div>
  );
}

function SimNao3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Sim</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <SimNao3 />
    </div>
  );
}

function BaseEscolha3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text7 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Vendeu</p>
      </div>
    </div>
  );
}

function BaseValor3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$211,77</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <Img1 />
      <BaseEscolha3 />
      <BaseValor3 />
    </div>
  );
}

function Card3() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header3 isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome3 />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <TabelaRussia />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[303px]">
        <p className="leading-[1.2]">Movimentação financeira</p>
      </div>
    </div>
  );
}

function IconDeposito() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconDeposito">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconDeposito">
          <g id="iconDeposito_2"></g>
          <path d="M9.99159 7.4791V6.66673" id="iconDeposito_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.99159 12.5V13.3333" id="iconDeposito_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1e67f220} id="iconDeposito_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1c55fe00} id="iconDeposito_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p11433b60} id="iconDeposito_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.6667 13L14.6667 17.1667" id="iconDeposito_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconDeposito1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconDeposito">
      <img alt="" className="block size-full object-cover" src={imgDeposito} />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Depositou</p>
      </div>
    </div>
  );
}

function BaseEscolha4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text8 />
    </div>
  );
}

function BaseValor4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$2.000</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <IconDeposito1 />
      <BaseEscolha4 />
      <BaseValor4 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <Header4 />
      <HeaderOutcome4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-full">
        <p className="leading-[1.2]">Neymar vai continuar jogando no Santos em 2026?</p>
      </div>
    </div>
  );
}

function ValorNeymar1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">750</p>
      </div>
    </div>
  );
}

function ValorNeymar2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">90%</p>
      </div>
    </div>
  );
}

function ValorNeymar3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[12px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">+R$75</p>
      </div>
    </div>
  );
}

function TabelaNeymar() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="tabela">
      <ValorNeymar1 />
      <ValorNeymar2 />
      <ValorNeymar3 />
      <></>
    </div>
  );
}

function IconSetaAccordion4({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header5({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text9 />
      <IconSetaAccordion4 isOpen={isOpen} />
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="img">
      <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgNeymar} width="24" />
    </div>
  );
}

function SimNao4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d92341] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Não</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <SimNao4 />
    </div>
  );
}

function BaseEscolha5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text10 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Fechamento - Ganhou</p>
      </div>
    </div>
  );
}

function BaseValor5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$750</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <Img2 />
      <BaseEscolha5 />
      <BaseValor5 />
    </div>
  );
}

function Card5() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header5 isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome5 />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <TabelaNeymar />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[12px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-nowrap text-white w-full">
        <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden">Casimiro estreará programa semanal fixo em TV aberta até 2026?</p>
      </div>
    </div>
  );
}

function ValorCasimiro1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Cotas</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">235,3</p>
      </div>
    </div>
  );
}

function ValorCasimiro2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Chance</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">90%</p>
      </div>
    </div>
  );
}

function ValorCasimiro3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="valor">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">Retorno</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[12px] text-white">
        <p className="leading-[1.2] text-nowrap whitespace-pre font-bold">0</p>
      </div>
    </div>
  );
}

function TabelaCasimiro() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="tabela">
      <ValorCasimiro1 />
      <ValorCasimiro2 />
      <ValorCasimiro3 />
      <></>
    </div>
  );
}

function IconSetaAccordion5({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`${isOpen ? 'bg-[#373737]' : 'bg-[#242424]'} content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[20px]`} data-name="iconSetaAccordion">
      <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown className="text-white" size={12} strokeWidth={3} />
      </div>
    </div>
  );
}

function Header6({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div onClick={toggle} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer" data-name="header">
      <Text11 />
      <IconSetaAccordion5 isOpen={isOpen} />
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="img">
      <img alt="" className="block max-w-none size-full rounded-full object-cover" height="24" src={imgCasimiro} width="24" />
    </div>
  );
}

function SimNao5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="sim/nao">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[14px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre text-[rgb(255,255,255)] font-bold">Sim</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <SimNao5 />
    </div>
  );
}

function BaseEscolha6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <Text12 />
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Fechamento - Perdeu</p>
      </div>
    </div>
  );
}

function BaseValor6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">-R$211,77</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcome6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <Img3 />
      <BaseEscolha6 />
      <BaseValor6 />
    </div>
  );
}

function Card6() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div className="mb-[12px] w-full">
        <Header6 isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
      <HeaderOutcome6 />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full overflow-hidden"
          >
            <TabelaCasimiro />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p80fedc0} id="Path" stroke="var(--stroke-0, #32A866)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Path_2"></g>
        </g>
      </svg>
    </div>
  );
}

function HeaderBonus() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[303px]">
        <p className="leading-[1.2]">Movimentação financeira</p>
      </div>
    </div>
  );
}

function TextBonus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Bônus</p>
      </div>
    </div>
  );
}

function BaseEscolhaBonus() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <TextBonus />
    </div>
  );
}

function BaseValorBonus() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$10</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcomeBonus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="iconBonus 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconBonus1} />
      </div>
      <BaseEscolhaBonus />
      <BaseValorBonus />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative size-full">
          <HeaderBonus />
          <HeaderOutcomeBonus />
        </div>
      </div>
    </div>
  );
}

function HeaderSaque() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[303px]">
        <p className="leading-[1.2]">Movimentação financeira</p>
      </div>
    </div>
  );
}

function TextSaque() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Sacou</p>
      </div>
    </div>
  );
}

function BaseEscolhaSaque() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <TextSaque />
    </div>
  );
}

function BaseValorSaque() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">-R$3.000</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcomeSaque() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="iconSaque 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconSaque1} />
      </div>
      <BaseEscolhaSaque />
      <BaseValorSaque />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative size-full">
          <HeaderSaque />
          <HeaderOutcomeSaque />
        </div>
      </div>
    </div>
  );
}

function HeaderDeposito() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white w-[303px]">
        <p className="leading-[1.2]">Movimentação financeira</p>
      </div>
    </div>
  );
}

function TextDeposito() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="text">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre font-bold">Depositou</p>
      </div>
    </div>
  );
}

function BaseEscolhaDeposito() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[35px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="baseEscolha">
      <TextDeposito />
    </div>
  );
}

function BaseValorDeposito() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[35px] items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="baseValor">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center relative shrink-0 text-[#32a866] text-[14px]">
        <p className="leading-[1.1] text-nowrap whitespace-pre font-bold">+R$5.000</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center opacity-[0.56] relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">22/11/2025</p>
      </div>
    </div>
  );
}

function HeaderOutcomeDeposito() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[24px]" data-name="iconDeposito 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDeposito} />
      </div>
      <BaseEscolhaDeposito />
      <BaseValorDeposito />
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[8px] size-full" data-name="card">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] relative size-full">
          <HeaderDeposito />
          <HeaderOutcomeDeposito />
        </div>
      </div>
    </div>
  );
}

function BtnMostrarMais({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full cursor-pointer" data-name="btn_mostrar_mais">
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">Carregar mais</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function BoxPosicao({ currentFilter, activeTab }: { currentFilter: string, activeTab: 'pitaco' | 'financeiro' }) {
  const [showMore, setShowMore] = useState(false);

  // Cards de Pitaco (Compras, Vendas, Fechamento, Cancelamento)
  const pitacoCards = [
    { component: <Card key="card" />, category: "Compras" },
    { component: <Card1 key="card1" />, category: "Cancelamento" },
    { component: <Card2 key="card2" />, category: "Compras" },
    { component: <Card3 key="card3" />, category: "Vendas" },
    { component: <Card5 key="card5" />, category: "Fechamento" },
    { component: <Card6 key="card6" />, category: "Fechamento" },
  ];

  // Cards de Financeiro (Depósito, Saque, Bônus)
  const financeiroCards = [
    { component: <Card4 key="card4" />, category: "Depósito" },
    { component: <Card7 key="card7" />, category: "Bônus" },
    { component: <Card8 key="card8" />, category: "Saque" },
    { component: <Card9 key="card9" />, category: "Depósito" },
  ];

  const allCards = activeTab === 'pitaco' ? pitacoCards : financeiroCards;

  const filteredCards = currentFilter === "Todos" 
    ? allCards 
    : allCards.filter(card => card.category === currentFilter);

  const visibleCards = showMore ? filteredCards : filteredCards.slice(0, 7);
  const hasMore = filteredCards.length > 7 && !showMore;

  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-0 relative shrink-0 w-full" data-name="boxPosicao">
      {visibleCards.map(item => item.component)}
      {hasMore && <BtnMostrarMais onClick={() => setShowMore(true)} />}
    </div>
  );
}

export default function HistoricoContent({ activeTab = 'pitaco' }: { activeTab?: 'pitaco' | 'financeiro' }) {
  const [currentFilter, setCurrentFilter] = useState("Todos");

  // Reset filter when tab changes
  React.useEffect(() => {
    setCurrentFilter("Todos");
  }, [activeTab]);

  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[28px] relative size-full pt-[28px] pr-[0px] pb-[0px] pl-[0px]" data-name="content">
      {activeTab === 'pitaco' ? (
        <ChipsPitaco currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      ) : (
        <ChipsFinanceiro currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      )}
      <BoxPosicao currentFilter={currentFilter} activeTab={activeTab} />
    </div>
  );
}
