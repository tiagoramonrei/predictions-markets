import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";
import imgBola from "figma:asset/7c28871785388d62e0d7ebaf98856f5fd1c3a26d.png";
import imgCasemiro from "figma:asset/6e54cd49a4f3209629c83b96507b530a3f8c0f66.png";
import imgImgPergunta from "figma:asset/2126e3c73b7fa6bc05bb9e72e086bd9c8b9cbfc4.png";
import imgImgPergunta1 from "figma:asset/d98c89ceb679b9aeac34122cf7978f4a88d05779.png";
import imgImgPergunta2 from "figma:asset/cdf9b412cdf3d8138c519e86a2010ebd3a95d676.png";

function Titulo() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="titulo">
      <div className="bg-[#1e1e1e] shrink-0 size-[20px]" data-name="icon" />
      <div className="basis-0 flex flex-col font-['DM_Sans:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="leading-[1.4]">As pessoas também estão gostando</p>
      </div>
    </div>
  );
}

function Card({ title, volume }: { title: string; volume: string }) {
  return (
    <div className="bg-[#1e1e1e] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic p-[20px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[16px] text-white w-[min-content] line-clamp-2">
            <p className="leading-[1.2] line-clamp-2">{title}</p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[#e3e3e3] text-[12px] text-nowrap">
            <p className="leading-none whitespace-pre">{volume}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardHeader({ imgSrc, title, volume, imgStyle }: { 
  imgSrc: string; 
  title: string; 
  volume: string;
  imgStyle?: 'cover' | 'positioned';
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[304px] select-none" data-name="cardHeader">
      <div className="h-[56px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="imgPergunta">
        {imgStyle === 'cover' ? (
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgSrc} />
        ) : imgStyle === 'positioned' ? (
          <img alt="" className="absolute inset-0 max-w-none object-cover object-[center_35%] pointer-events-none rounded-tl-[8px] rounded-tr-[8px] size-full" src={imgSrc} />
        ) : (
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[8px] rounded-tr-[8px]">
            <img alt="" className="absolute h-[305.14%] left-0 max-w-none top-[-156.14%] w-full" src={imgSrc} />
          </div>
        )}
      </div>
      <Card title={title} volume={volume} />
    </div>
  );
}

export default function EstaoGostando({ variant = 'default' }: { variant?: 'default' | 'neymar' }) {
  const cardsDefault = [
    {
      imgSrc: imgImgPergunta,
      title: "Qual música alcançará 1 bilhão de reproduções no Spotify este ano?",
      volume: "R$ 1.324.134 volume",
      imgStyle: "cover" as const,
    },
    {
      imgSrc: imgImgPergunta1,
      title: "Quantas semanas Taylor Swift permanecerá em 1º lugar na Billboard Hot 100 durante o ano de 2025??",
      volume: "R$ 342.673 volume",
      imgStyle: "cover" as const,
    },
    {
      imgSrc: imgImgPergunta2,
      title: "Quem lançará uma música nova este ano?",
      volume: "R$ 945.989 volume",
      imgStyle: "cover" as const,
    },
  ];

  const cardsNeymar = [
    {
      imgSrc: imgBola,
      title: "Quem será o próximo técnico demitido na Série A?",
      volume: "R$ 45.900 volume",
      imgStyle: "cover" as const,
    },
    {
      imgSrc: imgCasemiro,
      title: "Casimiro estreará programa semanal fixo em TV aberta até 2026?",
      volume: "R$ 245.600 volume",
      imgStyle: "positioned" as const,
    },
  ];

  const cards = variant === 'neymar' ? cardsNeymar : cardsDefault;

  return (
    <Carousel 
      className="w-full"
      opts={{
        align: "start",
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="ml-[20px]">
        {cards.map((card, index) => (
          <CarouselItem key={index} className="basis-auto pl-[8px] first:pl-0 last:pr-[20px]">
            <CardHeader
              imgSrc={card.imgSrc}
              title={card.title}
              volume={card.volume}
              imgStyle={card.imgStyle}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}