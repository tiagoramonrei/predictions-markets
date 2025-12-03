import { useEffect } from "react";
import svgPaths from "./svg-rcuq5snn6p";
import checkIcon from "figma:asset/b3bbc693277a9aa294d8064e57ec0fba359bb9f8.png";

export interface OrderSuccessProps {
  artistName: string;
  isYes: boolean;
  question: string;
  amount: number;
  returnAmount: number;
  onClose?: () => void;
  isSell?: boolean;
}

function IconOk() {
  return (
    <div
      className="relative shrink-0 size-[28px]"
      data-name="iconOk"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(255, 255, 255, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 28"
        >
          <g id="iconOk">
            <rect
              fill="var(--fill-0, white)"
              height="28"
              rx="14"
              width="28"
            />
            <image
              href={checkIcon}
              x="8"
              y="9.5"
              width="12"
              height="9"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Escolha({ artistName }: { artistName: string }) {
  return (
    <div
      className="box-border content-stretch flex gap-[8px] items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0"
      data-name="escolha"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre font-bold">
          {artistName}
        </p>
      </div>
    </div>
  );
}

function SimNao({ isYes }: { isYes: boolean }) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
      data-name="sim/nao"
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre font-bold">
          {isYes ? "Sim" : "Não"}
        </p>
      </div>
    </div>
  );
}

function Titulo({
  artistName,
  isYes,
  question,
}: {
  artistName: string;
  isYes: boolean;
  question: string;
}) {
  // Lógica para determinar se deve exibir o nome (Escolha) + Sim/Não
  // Se a pergunta já contiver o nome (implica pergunta binária de Sim/Não sobre o sujeito), 
  // não exibimos o componente Escolha, apenas Sim/Não.
  // Se a pergunta for genérica ("Quem será...", "Qual empresa..."), exibimos a Escolha + Sim/Não.
  
  // Uma forma simples de verificar isso é ver se o artistName está contido na pergunta
  // OU se a pergunta é exatamente igual ao artistName (caso de dados mockados as vezes)
  const isBinaryQuestion = question.includes(artistName) || question === artistName;

  return (
    <div
      className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0"
      data-name="titulo"
    >
      <IconOk />
      {!isBinaryQuestion && <Escolha artistName={artistName} />}
      <SimNao isYes={isYes} />
    </div>
  );
}

function IconFechar({ onClose }: { onClose?: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[20px] cursor-pointer"
      data-name="iconFechar"
      onClick={onClose}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="iconFechar">
          <g id="Path"></g>
          <path
            d={svgPaths.p14beaa80}
            id="Path_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p35d38c80}
            id="Path_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Header({
  artistName,
  isYes,
  question,
  onClose,
}: {
  artistName: string;
  isYes: boolean;
  question: string;
  onClose?: () => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="header"
    >
      <Titulo artistName={artistName} isYes={isYes} question={question} />
      <IconFechar onClose={onClose} />
    </div>
  );
}

function Pergunta({ question }: { question: string }) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full"
      data-name="pergunta"
    >
      <div className="-webkit-box basis-0 flex-col font-['DM_Sans:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-white">
        <p className="leading-[1.2]">{question}</p>
      </div>
    </div>
  );
}

function IconSeta() {
  return (
    <div
      className="h-[10px] relative w-[14px]"
      data-name="iconSeta"
    >
      <div className="absolute inset-[-7.5%_-5.36%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 12"
        >
          <g id="iconSeta">
            <path
              d="M14.75 5.75H0.75"
              id="iconSeta_2"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M9.75 10.7502L14.75 5.75024"
              id="iconSeta_3"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M9.75 0.75L14.75 5.75"
              id="iconSeta_4"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Retorno({
  amount,
  returnAmount,
  isSell,
}: {
  amount: number;
  returnAmount: number;
  isSell?: boolean;
}) {
  const formatMoney = (val: number) =>
    `R$ ${val.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  const formatCotas = (val: number) =>
    `${val.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} cotas`;

  return (
    <div
      className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0"
      data-name="retorno"
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre font-bold">
          {isSell ? formatCotas(amount) : formatMoney(amount)}
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <IconSeta />
        </div>
      </div>
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre font-bold">
          {isSell ? formatMoney(returnAmount) : formatCotas(returnAmount)}
        </p>
      </div>
    </div>
  );
}

function Footer({
  amount,
  returnAmount,
  isSell,
}: {
  amount: number;
  returnAmount: number;
  isSell?: boolean;
}) {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="footer"
    >
      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.4] whitespace-pre font-bold">{isSell ? "Vendeu" : "Comprou"}</p>
      </div>
      <Retorno amount={amount} returnAmount={returnAmount} isSell={isSell} />
    </div>
  );
}

export default function OrderSucess({
  artistName,
  isYes,
  question,
  amount,
  returnAmount,
  onClose,
  isSell,
}: OrderSuccessProps) {
  useEffect(() => {
    if (onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose]);

  return (
    <div
      className="bg-[#19954f] relative rounded-[8px] size-full shadow-lg"
      data-name="orderSucess"
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[20px] py-[12px] relative size-full">
          <Header
            artistName={artistName}
            isYes={isYes}
            question={question}
            onClose={onClose}
          />
          <Pergunta question={question} />
          <Footer amount={amount} returnAmount={returnAmount} isSell={isSell} />
        </div>
      </div>
    </div>
  );
}