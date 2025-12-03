import { useState } from "react";
import Header from "../imports/Header-2015-203";
import SubheaderDuvidas from "../imports/SubheaderDuvidas";
import BaseNavBar from "../imports/BaseNavBar";
import Footer from "../imports/Footer";
import iconAccordion from "../assets/iconAccordion.png";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "O que é um Prediction Market?",
    answer: "Prediction Markets são mercados onde você compra e vende pitacos sobre eventos futuros. Cada mercado tem uma pergunta (ex.: \"Neymar continuará no Santos?\") com escolhas Sim e Não, e o preço dessas escolhas representa a probabilidade de acontecer."
  },
  {
    question: "Como posso participar?",
    answer: (
      <>
        <p className="mb-0">Você escolhe um mercado, seleciona Sim ou Não, define quanto quer aportar e confirma a compra. Se a sua previsão estiver correta quando o evento for resolvido, você recebe o valor total das suas cotas.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Mas você não precisa esperar até o final: também pode vender suas cotas a qualquer momento, aproveitando a valorização se o preço subir antes da resolução.</p>
      </>
    )
  },
  {
    question: "O que significa \"Sim\" e \"Não\"?",
    answer: (
      <>
        <p className="leading-[1.4] mb-0">Cada mercado tem duas opções:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[18px]">
            <span className="leading-[1.4]">Sim → você acredita que o evento vai acontecer.</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[1.4]">Não → você acredita que o evento não vai acontecer.</span>
          </li>
        </ul>
        <p className="leading-[1.4] mb-0">&nbsp;</p>
        <p className="leading-[1.4]">O valor de cada uma varia conforme as movimentações do mercado.</p>
      </>
    )
  },
  {
    question: "O que é \"chance\"?",
    answer: (
      <>
        <p className="mb-0">É a probabilidade atual de a previsão acontecer — também chamada de preço.</p>
        <p className="mb-0">Essa chance não é definida pela plataforma: ela muda de forma dinâmica conforme as compras e vendas dos usuários.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Exemplo: se a chance está em 75%, significa que uma cota custa R$0,75 porque o mercado, através das negociações, estimou essa probabilidade.</p>
      </>
    )
  },
  {
    question: "O que são \"cotas adquiridas\"?",
    answer: (
      <>
        <p className="leading-[1.4] mb-0">É a quantidade de cotas que você recebe ao aportar em uma previsão.</p>
        <p className="leading-[1.4] mb-0">O número de cotas depende do preço no momento da compra.</p>
        <p className="leading-[1.4] mb-0">&nbsp;</p>
        <p className="leading-[1.4] mb-0">Exemplo:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[18px]">
            <span className="leading-[1.4]">R$100 aportados a 80% → 125 cotas (cada uma custando R$0,80).</span>
          </li>
          <li className="ms-[18px]">
            <span className="leading-[1.4]">Se sua escolha vencer, cada cota vale R$1. Se perder, vale R$0.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    question: "O que é \"preço médio\"?",
    answer: "É o valor médio que você pagou por cada cota em uma compra."
  },
  {
    question: "O que significa \"comprar\"?",
    answer: (
      <>
        <p className="mb-0">Comprar é aportar em uma previsão.</p>
        <p>Você paga um valor e recebe cotas da escolha Sim ou Não.</p>
      </>
    )
  },
  {
    question: "O que significa \"vender\"?",
    answer: (
      <>
        <p className="mb-0">Vender é transformar suas cotas em dinheiro antes do evento ser resolvido.</p>
        <p>Você recebe o valor baseado na chance atual, que pode gerar lucro ou perda.</p>
      </>
    )
  },
  {
    question: "O que é \"montante negociado\"?",
    answer: (
      <>
        <p className="mb-0">É o volume total de dinheiro movimentado em um mercado.</p>
        <p>Ele mostra o quanto aquele evento está sendo negociado pelos usuários.</p>
      </>
    )
  },
  {
    question: "O que é a taxa?",
    answer: (
      <>
        <p className="mb-0">Cobramos uma taxa de 2% sobre cada compra e venda.</p>
        <p>O valor final exibido já considera esse desconto.</p>
      </>
    )
  },
  {
    question: "O que acontece quando eu ganho?",
    answer: (
      <>
        <p className="mb-0">Se sua previsão estiver correta quando o mercado for resolvido, você recebe R$ 1 por cota.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Exemplo: 120 cotas → R$ 120 de retorno.</p>
      </>
    )
  },
  {
    question: "O que acontece quando eu perco?",
    answer: "Se sua previsão estiver errada quando o resultado oficial sair, suas cotas passam a valer R$ 0, e você perde o valor investido."
  },
  {
    question: "Quando posso sacar meu dinheiro?",
    answer: "Você pode sacar sempre que tiver saldo disponível na sua carteira, inclusive após vender posições ou ganhar mercados."
  },
  {
    question: "Posso vender antes do mercado terminar?",
    answer: (
      <>
        <p className="mb-0">Sim. Você pode vender suas cotas a qualquer momento, dependendo da chance atual.</p>
        <p>Isso permite lucrar antes do evento ser resolvido ou reduzir perdas.</p>
      </>
    )
  },
  {
    question: "O que define se um mercado é \"resolvido\"?",
    answer: (
      <>
        <p className="mb-0">Quando a fonte oficial do mercado publica o resultado.</p>
        <p>Ao resolver, o valor das cotas de uma das escolhas vira R$ 1, e da outra vira R$ 0.</p>
      </>
    )
  },
  {
    question: "O que é \"valor atual\"?",
    answer: (
      <>
        <p className="mb-0">É quanto suas cotas valem agora, baseado na chance atual.</p>
        <p>Esse valor muda o tempo todo conforme o mercado se movimenta.</p>
      </>
    )
  },
  {
    question: "O que é \"retorno potencial\"?",
    answer: "É quanto você poderia ganhar se a sua escolha vencer, considerando o número de cotas que você possui."
  },
  {
    question: "Quem define os resultados dos mercados?",
    answer: (
      <>
        <p className="mb-0">Cada mercado tem uma fonte oficial (como Spotify, CBF, TSE, imprensa esportiva, etc.).</p>
        <p>A resolução só acontece quando a fonte oficial publica o resultado.</p>
      </>
    )
  },
  {
    question: "Por que o preço muda?",
    answer: (
      <>
        <p className="mb-0">O preço muda conforme as pessoas compram e vendem.</p>
        <p className="mb-0">Quando mais gente compra uma opção, a chance dela aumenta; quando mais gente vende, a chance diminui.</p>
        <p>É um mercado vivo que se ajusta em tempo real.</p>
      </>
    )
  },
  {
    question: "Por que duas pessoas compram e vendem em valores diferentes?",
    answer: (
      <>
        <p className="mb-0">Porque o preço nunca é fixo.</p>
        <p className="mb-0">Ele se adapta automaticamente a cada transação.</p>
        <p>Se você compra em um momento e outra pessoa compra segundos depois, o preço pode ter mudado entre uma ação e outra.</p>
      </>
    )
  },
  {
    question: "Posso perder dinheiro ao participar?",
    answer: (
      <>
        <p className="mb-0">Sim. Prediction Markets envolvem risco financeiro.</p>
        <p className="mb-0">Se a sua previsão estiver incorreta quando o mercado for resolvido, suas cotas passam a valer R$ 0, e você perde integralmente o valor investido.</p>
        <p>Além disso, caso você venda suas cotas antes da resolução, pode receber menos do que aportou, dependendo da variação da chance.</p>
      </>
    )
  }
];

function AccordionIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <img 
        src={iconAccordion} 
        alt="" 
        style={{ 
          width: '16px', 
          height: '16px',
          transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
          filter: isOpen ? 'brightness(0) saturate(100%) invert(52%) sepia(52%) saturate(522%) hue-rotate(100deg) brightness(95%) contrast(87%)' : 'none',
        }} 
      />
    </div>
  );
}

function FAQAccordion({ item, isOpen, onToggle, isFirst, isLast }: { item: FAQItem; isOpen: boolean; onToggle: () => void; isFirst?: boolean; isLast?: boolean }) {
  return (
    <div className="w-full" style={{ paddingBottom: '16px', borderBottom: isLast ? 'none' : '1px solid #242424' }}>
      <button 
        onClick={onToggle}
        className="flex items-start justify-between gap-[8px] w-full cursor-pointer bg-transparent border-none"
        style={{ paddingTop: isFirst ? '0' : '16px' }}
      >
        <p className={`font-['DM_Sans:Bold',sans-serif] text-[12px] font-bold leading-none flex-1 ${isOpen ? 'text-[#32a866]' : 'text-white'}`} style={{ textAlign: 'left', transition: 'color 0.3s ease-in-out' }}>
          {item.question}
        </p>
        <AccordionIcon isOpen={isOpen} />
      </button>
      <div 
        style={{ 
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease-in-out',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div className="font-['DM_Sans:Regular',sans-serif] text-[12px] text-white leading-[1.4] text-left" style={{ paddingTop: '16px' }}>
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DuvidasFrequentes() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const handleToggle = (index: number) => {
    setOpenIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#171717] flex flex-col">
      <Header />
      <div className="sticky top-0 z-40 bg-[#171717]">
        <div className="w-full h-auto shrink-0">
          <SubheaderDuvidas />
        </div>
      </div>
      <div className="flex-1 flex flex-col text-white pb-[56px]">
        <div className="px-[20px] pt-[28px] pb-0 flex flex-col">
          {faqItems.map((item, index) => (
            <FAQAccordion 
              key={index} 
              item={item} 
              isOpen={openIndexes.has(index)}
              onToggle={() => handleToggle(index)}
              isFirst={index === 0}
              isLast={index === faqItems.length - 1}
            />
          ))}
        </div>
        <div className="h-[40px] shrink-0" />
        <Footer />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[56px]">
        <BaseNavBar />
      </div>
    </div>
  );
}
