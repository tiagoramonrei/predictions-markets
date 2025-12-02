import React, { useState, useEffect, useRef } from 'react';
import svgPaths from "./svg-jxfdhcxrjc";
import imgImagem from "figma:asset/b8557be30a11c35e72c3a4ac1a0fb0eb28f9c419.png";
import imgImagem1 from "figma:asset/562cec5dc1dde5641c98cbf9e6b84b136f03e611.png";
import imgImagem2 from "figma:asset/b1bfe46866217abae562b18e0aa0645e8b00233b.png";
import imgImagem3 from "figma:asset/0b9c208b4d2c849e91bf8f4c2475b4cdb7bdd8b6.png";
import imgImagem4 from "figma:asset/7359dd6558f66541e46562e3009c906879073d12.png";
import TagCompras from "./TagCompras";
import Tag from "./Tag";
import type { OutcomeData } from "../components/InternaMercado";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.4]">Faça sua escolha</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Bad Bunny</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 234.345 montante negociado</p>
      </div>
    </div>
  );
}

function Subiu() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="subiu">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#19954f] text-[8px] text-nowrap" style={{ fontWeight: 'bold' }}>
        <p className="leading-none whitespace-pre">3%</p>
      </div>
      <div className="h-[6px] relative shrink-0 w-[7px]" data-name="subiu">
        <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(25, 149, 79, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3615f2f0} fill="var(--fill-0, #19954F)" id="subiu" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Porcentagem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <Subiu />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] whitespace-pre">85%</p>
      </div>
    </div>
  );
}

function HeaderOutcome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem} width="48" />
      </div>
      <Text />
      <Porcentagem />
    </div>
  );
}

function Txt() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">85%</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt />
        </div>
      </div>
    </div>
  );
}

function IconSeta() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 117</p>
      </div>
    </div>
  );
}

function Btn({ onClick, tag }: { onClick?: () => void; tag?: React.ReactNode }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      {tag}
      <Button onClick={onClick} />
      <Retorno />
    </div>
  );
}

function Txt1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">15%</p>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt1 />
        </div>
      </div>
    </div>
  );
}

function IconSeta1() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta1 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 666</p>
      </div>
    </div>
  );
}

function Btn1({ onClick, tag }: { onClick?: () => void; tag?: React.ReactNode }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      {tag}
      <Button1 onClick={onClick} />
      <Retorno1 />
    </div>
  );
}

function Botoes({ onSelectYes, onSelectNo, tagSim, tagNao, visible = true }: { onSelectYes: () => void; onSelectNo: () => void; tagSim?: React.ReactNode; tagNao?: React.ReactNode; visible?: boolean }) {
  const hasTag = !!tagSim || !!tagNao;
  const show = visible && hasTag;

  const renderTag = (tag: React.ReactNode) => (
    <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${show ? 'h-[16px] opacity-100 mb-0' : 'h-0 opacity-0 -mb-[8px]'}`}>
      {tag || (hasTag ? <div className="h-[16px] w-full" /> : null)}
    </div>
  );

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn onClick={onSelectYes} tag={renderTag(tagSim)} />
      <Btn1 onClick={onSelectNo} tag={renderTag(tagNao)} />
    </div>
  );
}

function Box({ onSelect, collapsed = false }: { onSelect?: (outcome: OutcomeData) => void; collapsed?: boolean }) {
  const handleSelectYes = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bad Bunny',
        imagem: imgImagem,
        volume: 'R$ 234.345 montante negociado',
        porcentagemSim: 85,
        porcentagemNao: 15,
        isYes: true,
        isMultipleChoice: true
      });
    }
  };

  const handleSelectNo = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bad Bunny',
        imagem: imgImagem,
        volume: 'R$ 234.345 montante negociado',
        porcentagemSim: 85,
        porcentagemNao: 15,
        isYes: false,
        isMultipleChoice: true
      });
    }
  };

  const handleSellSim = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bad Bunny',
        imagem: imgImagem,
        volume: 'R$ 234.345 montante negociado',
        porcentagemSim: 85,
        porcentagemNao: 15,
        isYes: true,
        isMultipleChoice: true,
        initialTab: 'vender'
      });
    }
  };

  const handleSellNao = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bad Bunny',
        imagem: imgImagem,
        volume: 'R$ 234.345 montante negociado',
        porcentagemSim: 85,
        porcentagemNao: 15,
        isYes: false,
        isMultipleChoice: true,
        initialTab: 'vender'
      });
    }
  };

  const tagSim = <TagCompras onClick={handleSellSim} cotas="111,1 cotas" />;

  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] rounded-[8px] shrink-0 w-full" data-name="box" style={{ outline: '4px solid #171717' }}>
      <div className="mb-[12px] w-full">
        <HeaderOutcome />
      </div>
      <Botoes onSelectYes={handleSelectYes} onSelectNo={handleSelectNo} tagSim={tagSim} tagNao={null} visible={!collapsed} />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Taylor Swift</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 21.124 montante negociado</p>
      </div>
    </div>
  );
}

function Subiu1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="subiu">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#c00a28] text-[8px] text-nowrap" style={{ fontWeight: 'bold' }}>
        <p className="leading-none whitespace-pre">2%</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[6px] relative w-[7px]" data-name="subiu">
            <div className="absolute bottom-0 left-[8.45%] right-[8.45%] top-[13.13%]" style={{ "--fill-0": "rgba(192, 10, 40, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d={svgPaths.p3615f2f0} fill="var(--fill-0, #C00A28)" id="subiu" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Porcentagem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="porcentagem">
      <Subiu1 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] whitespace-pre">10%</p>
      </div>
    </div>
  );
}

function HeaderOutcome1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem1} width="48" />
      </div>
      <Text1 />
      <Porcentagem1 />
    </div>
  );
}

function Txt2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">10%</p>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt2 />
        </div>
      </div>
    </div>
  );
}

function IconSeta2() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta2 />
        </div>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 1.000</p>
      </div>
    </div>
  );
}

function Btn2({ onClick, tag }: { onClick?: () => void; tag?: React.ReactNode }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      {tag}
      <Button2 onClick={onClick} />
      <Retorno2 />
    </div>
  );
}

function Txt3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">90%</p>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt3 />
        </div>
      </div>
    </div>
  );
}

function IconSeta3() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta3 />
        </div>
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 111</p>
      </div>
    </div>
  );
}

function Btn3({ onClick, tag }: { onClick?: () => void; tag?: React.ReactNode }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      {tag}
      <Button3 onClick={onClick} />
      <Retorno3 />
    </div>
  );
}

function Botoes1({ onSelectYes, onSelectNo, tagSim, tagNao, visible = true }: { onSelectYes: () => void; onSelectNo: () => void; tagSim?: React.ReactNode; tagNao?: React.ReactNode; visible?: boolean }) {
  const hasTag = !!tagSim || !!tagNao;
  const show = visible && hasTag;

  const renderTag = (tag: React.ReactNode) => (
    <div className={`w-full transition-all duration-300 ease-in-out overflow-hidden ${show ? 'h-[16px] opacity-100 mb-0' : 'h-0 opacity-0 -mb-[8px]'}`}>
      {tag || (hasTag ? <div className="h-[16px] w-full" /> : null)}
    </div>
  );

  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn2 onClick={onSelectYes} tag={renderTag(tagSim)} />
      <Btn3 onClick={onSelectNo} tag={renderTag(tagNao)} />
    </div>
  );
}

function Box1({ onSelect, collapsed = false }: { onSelect?: (outcome: OutcomeData) => void; collapsed?: boolean }) {
  const handleSelectYes = () => {
    if (onSelect) {
      onSelect({
        nome: 'Taylor Swift',
        imagem: imgImagem1,
        volume: 'R$ 21.124 montante negociado',
        porcentagemSim: 10,
        porcentagemNao: 90,
        isYes: true,
        isMultipleChoice: true
      });
    }
  };

  const handleSelectNo = () => {
    if (onSelect) {
      onSelect({
        nome: 'Taylor Swift',
        imagem: imgImagem1,
        volume: 'R$ 21.124 montante negociado',
        porcentagemSim: 10,
        porcentagemNao: 90,
        isYes: false,
        isMultipleChoice: true
      });
    }
  };

  const handleSellNao = () => {
    if (onSelect) {
      onSelect({
        nome: 'Taylor Swift',
        imagem: imgImagem1,
        volume: 'R$ 21.124 montante negociado',
        porcentagemSim: 10,
        porcentagemNao: 90,
        isYes: false,
        isMultipleChoice: true,
        initialTab: 'vender'
      });
    }
  };

  const tagNao = <Tag onClick={handleSellNao} cotas="111,1 cotas" />;

  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-center p-[16px] rounded-[8px] shrink-0 w-full" data-name="box" style={{ outline: '4px solid #171717' }}>
      <div className="mb-[12px] w-full">
        <HeaderOutcome1 />
      </div>
      <Botoes1 onSelectYes={handleSelectYes} onSelectNo={handleSelectNo} tagNao={tagNao} visible={!collapsed} />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Bruno Mars</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 12.438 montante negociado</p>
      </div>
    </div>
  );
}

function HeaderOutcome2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem2} width="48" />
      </div>
      <Text2 />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] whitespace-pre">5%</p>
      </div>
    </div>
  );
}

function Txt4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">5%</p>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt4 />
        </div>
      </div>
    </div>
  );
}

function IconSeta4() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta4 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 2.000</p>
      </div>
    </div>
  );
}

function Btn4({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button4 onClick={onClick} />
      <Retorno4 />
    </div>
  );
}

function Txt5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">NÃO</p>
      <p className="relative shrink-0 text-[#d92341] text-[16px]">95%</p>
    </div>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt5 />
        </div>
      </div>
    </div>
  );
}

function IconSeta5() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta5 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 105</p>
      </div>
    </div>
  );
}

function Btn5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button5 onClick={onClick} />
      <Retorno5 />
    </div>
  );
}

function Botoes2({ onSelectYes, onSelectNo }: { onSelectYes: () => void; onSelectNo: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn4 onClick={onSelectYes} />
      <Btn5 onClick={onSelectNo} />
    </div>
  );
}

function Box2({ onSelect }: { onSelect?: (outcome: OutcomeData) => void }) {
  const handleSelectYes = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bruno Mars',
        imagem: imgImagem2,
        volume: 'R$ 12.438 montante negociado',
        porcentagemSim: 5,
        porcentagemNao: 95,
        isYes: true,
        isMultipleChoice: true
      });
    }
  };

  const handleSelectNo = () => {
    if (onSelect) {
      onSelect({
        nome: 'Bruno Mars',
        imagem: imgImagem2,
        volume: 'R$ 12.438 montante negociado',
        porcentagemSim: 5,
        porcentagemNao: 95,
        isYes: false,
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] rounded-[8px] shrink-0 w-full" data-name="box" style={{ outline: '4px solid #171717' }}>
      <HeaderOutcome2 />
      <Botoes2 onSelectYes={handleSelectYes} onSelectNo={handleSelectNo} />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Ariana Grande</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 5.312 montante negociado</p>
      </div>
    </div>
  );
}

function HeaderOutcome3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem3} width="48" />
      </div>
      <Text3 />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic opacity-[0.32] relative shrink-0 text-[#e3e3e3] text-[20px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`<1%`}</p>
      </div>
    </div>
  );
}

function Txt6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">1%</p>
    </div>
  );
}

function Button6({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt6 />
        </div>
      </div>
    </div>
  );
}

function IconSeta6() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta6 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 10.000</p>
      </div>
    </div>
  );
}

function Btn6({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button6 onClick={onClick} />
      <Retorno6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p1b5a55e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 11.6667V14.1667" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa6fc5f0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialLock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Lock">
      <Group />
    </div>
  );
}

function Txt7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="txt">
      <p className="leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>NÃO</p>
      <InterfaceEssentialLock />
    </div>
  );
}

function Button7({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] opacity-[0.32] relative rounded-[10px] shrink-0 w-full cursor-not-allowed" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt7 />
        </div>
      </div>
    </div>
  );
}

function Btn7({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button7 />
    </div>
  );
}

function Botoes3({ onSelectYes }: { onSelectYes: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn6 onClick={onSelectYes} />
      <Btn7 />
    </div>
  );
}

function Box3({ onSelect }: { onSelect?: (outcome: OutcomeData) => void }) {
  const handleSelectYes = () => {
    if (onSelect) {
      onSelect({
        nome: 'Ariana Grande',
        imagem: imgImagem3,
        volume: 'R$ 5.312 montante negociado',
        porcentagemSim: 1,
        porcentagemNao: 99,
        isYes: true,
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] rounded-[8px] shrink-0 w-full" data-name="box" style={{ outline: '4px solid #171717' }}>
      <HeaderOutcome3 />
      <Botoes3 onSelectYes={handleSelectYes} />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="text">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Drake</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#e3e3e3] text-[10px]">
        <p className="leading-none text-nowrap whitespace-pre">R$ 3.134 montante negociado</p>
      </div>
    </div>
  );
}

function HeaderOutcome4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="headerOutcome">
      <div className="relative shrink-0 size-[48px]" data-name="imagem">
        <img alt="" className="block max-w-none size-full" height="48" src={imgImagem4} width="48" />
      </div>
      <Text4 />
      <div className="flex flex-col justify-center leading-[0] not-italic opacity-[0.32] relative shrink-0 text-[#e3e3e3] text-[20px] text-nowrap" style={{ fontWeight: 'bold' }}>
        <p className="leading-[1.2] whitespace-pre">{`<1%`}</p>
      </div>
    </div>
  );
}

function Txt8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between leading-none min-h-px min-w-px not-italic relative shrink-0 text-center text-nowrap whitespace-pre" data-name="txt" style={{ fontWeight: 'bold' }}>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-white">SIM</p>
      <p className="relative shrink-0 text-[#32a866] text-[16px]">1%</p>
    </div>
  );
}

function Button8({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] relative rounded-[10px] shrink-0 w-full cursor-pointer active:bg-[#2a2a2a] transition-colors" data-name="Button" onClick={onClick}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt8 />
        </div>
      </div>
    </div>
  );
}

function IconSeta7() {
  return (
    <div className="h-[6.667px] relative w-[9.333px]" data-name="iconSeta">
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <g id="iconSeta">
            <path d="M9.83333 3.83333H0.5" id="Path" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 7.16667L9.83333 3.83333" id="Path_2" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 0.5L9.83333 3.83333" id="Path_3" stroke="var(--stroke-0, #E3E3E3)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-[0.56] relative shrink-0 w-[117px]" data-name="retorno">
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">{`R$100 `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta7 />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3e3e3] text-[10px] text-nowrap">
        <p className="leading-none whitespace-pre">R$ 10.000</p>
      </div>
    </div>
  );
}

function Btn8({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button8 onClick={onClick} />
      <Retorno7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <g id="Path"></g>
          <path d={svgPaths.p1b5a55e0} id="Path_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10 11.6667V14.1667" id="Path_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path clipRule="evenodd" d={svgPaths.pa6fc5f0} fillRule="evenodd" id="Path_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceEssentialLock1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Interface, Essential/Lock">
      <Group1 />
    </div>
  );
}

function Txt9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="txt">
      <p className="leading-none not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[10px] text-center text-nowrap text-white whitespace-pre" style={{ fontWeight: 'bold' }}>NÃO</p>
      <InterfaceEssentialLock1 />
    </div>
  );
}

function Button9({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#242424] h-[40px] opacity-[0.32] relative rounded-[10px] shrink-0 w-full cursor-not-allowed" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[20px] py-0 relative w-full">
          <Txt9 />
        </div>
      </div>
    </div>
  );
}

function Btn9({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="btn">
      <Button9 />
    </div>
  );
}

function Botoes4({ onSelectYes }: { onSelectYes: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="botoes">
      <Btn8 onClick={onSelectYes} />
      <Btn9 />
    </div>
  );
}

function Box4({ onSelect }: { onSelect?: (outcome: OutcomeData) => void }) {
  const handleSelectYes = () => {
    if (onSelect) {
      onSelect({
        nome: 'Drake',
        imagem: imgImagem4,
        volume: 'R$ 3.134 montante negociado',
        porcentagemSim: 1,
        porcentagemNao: 99,
        isYes: true,
        isMultipleChoice: true
      });
    }
  };

  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[16px] rounded-[8px] shrink-0 w-full" data-name="box" style={{ outline: '4px solid #171717' }}>
      <HeaderOutcome4 />
      <Botoes4 onSelectYes={handleSelectYes} />
    </div>
  );
}

function BaseCards({ stickyTop, onSelect }: { stickyTop: number; onSelect?: (outcome: OutcomeData) => void }) {
  const [collapsed, setCollapsed] = useState([false, false]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newCollapsed = [...collapsed];
      let changed = false;
      
      // Threshold para esconder a tag: quando o próximo card estiver a menos de X pixels do stickyTop
      // X deve ser suficiente para cobrir a tag parcialmente.
      // Altura aproximada do card sem tag = 120px?
      // Header (48) + Botoes (40+18) + Gaps + Padding = 16 + 48 + 12 + 58 + 16 = 150px
      // Tag está no meio.
      // Vamos usar um threshold de 130px do stickyTop.
      const threshold = stickyTop + 130;

      // Check Card 0 vs Card 1
      if (refs.current[1]) {
        const nextCardTop = refs.current[1].getBoundingClientRect().top;
        const shouldCollapse = nextCardTop <= threshold;
        if (newCollapsed[0] !== shouldCollapse) {
          newCollapsed[0] = shouldCollapse;
          changed = true;
        }
      }

      // Check Card 1 vs Card 2
      if (refs.current[2]) {
        const nextCardTop = refs.current[2].getBoundingClientRect().top;
        const shouldCollapse = nextCardTop <= threshold;
        if (newCollapsed[1] !== shouldCollapse) {
          newCollapsed[1] = shouldCollapse;
          changed = true;
        }
      }

      if (changed) setCollapsed(newCollapsed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyTop, collapsed]);

  return (
    <div className="content-stretch flex flex-col items-start shrink-0 w-full" data-name="baseCards">
      <div 
        ref={el => refs.current[0] = el}
        className="mb-[12px] w-full sticky z-[6]" 
        style={{ top: `${stickyTop + 16}px` }}
      >
        <Box onSelect={onSelect} collapsed={collapsed[0]} />
      </div>
      <div 
        ref={el => refs.current[1] = el}
        className="mb-[12px] w-full sticky z-[7]" 
        style={{ top: `${stickyTop + 16}px` }}
      >
        <Box1 onSelect={onSelect} collapsed={collapsed[1]} />
      </div>
      <div 
        ref={el => refs.current[2] = el}
        className="mb-[12px] w-full sticky z-[8]" 
        style={{ top: `${stickyTop + 16}px` }}
      >
        <Box2 onSelect={onSelect} />
      </div>
      <div 
        ref={el => refs.current[3] = el}
        className="mb-[12px] w-full sticky z-[9]" 
        style={{ top: `${stickyTop + 16}px` }}
      >
        <Box3 onSelect={onSelect} />
      </div>
      <div 
        ref={el => refs.current[4] = el}
        className="w-full sticky z-[10]" 
        style={{ top: `${stickyTop + 16}px` }}
      >
        <Box4 onSelect={onSelect} />
      </div>
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

function BtnMostrarMais() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center pb-[12px] pt-0 px-0 relative shrink-0 w-full" data-name="btn_mostrar_mais">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#32a866] text-[10px] text-nowrap" style={{ fontWeight: 'bold' }}>
        <p className="leading-none whitespace-pre" style={{ fontWeight: 'bold' }}>Mostrar mais (6)</p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "16", "--transform-inner-height": "16" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Cards({ stickyTop, onSelect }: { stickyTop: number; onSelect?: (outcome: OutcomeData) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="cards">
      <BaseCards stickyTop={stickyTop} onSelect={onSelect} />
      <BtnMostrarMais />
    </div>
  );
}

export default function Outcomes({ stickyTop = 200, onSelect }: { stickyTop?: number; onSelect?: (outcome: OutcomeData) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full" data-name="outcomes">
      <Titulo />
      <Cards stickyTop={stickyTop} onSelect={onSelect} />
    </div>
  );
}
