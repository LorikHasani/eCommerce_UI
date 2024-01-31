function DetailCard({ icon, title, desc, className }) {
  return (
    <div
      className={`${className} flex items-center gap-2 bg-[#F4F4F4] rounded-xl `}
    >
      <div>{icon}</div>
      <div className="flex flex-col  text-[14px] leading-4">
        <span className="text-[#A7A7A7]">{title}</span>
        <span className="font-bold text-[#4E4E4E]">{desc}</span>
      </div>
    </div>
  );
}

export default DetailCard;
