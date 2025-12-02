function Destaques() {
  return <div className="h-[294px] shrink-0 w-[375px]" data-name="destaques" />;
}

export default function Base() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[28px] pt-0 px-0 relative size-full" data-name="base" style={{ backgroundImage: "linear-gradient(-3.07684e-06deg, rgba(18, 59, 36, 0.6) 0%, rgba(22, 76, 46, 0.6) 54%, rgba(22, 76, 46, 0.6) 100%), linear-gradient(90deg, rgb(22, 76, 46) 0%, rgb(22, 76, 46) 100%)" }}>
      <Destaques />
    </div>
  );
}