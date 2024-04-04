const CardShort = ({ selected, data, setCurrentSelected }) => {
  return (
    <div
      className={`w-full max-w-[12rem] flex flex-col items-center gap-5 border px-2 lg:px-4 py-4 lg:py-6 rounded-md cursor-pointer ${
        selected ? "border-yellow-400 shadow-md" : ""
      }`}
      onClick={() => setCurrentSelected(data.title)}
    >
      <img src={data.img} alt="" className="size-10" />
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-sm">{data.title}</h3>
        <p className="text-secondary">{data.desc}</p>
      </div>
    </div>
  );
};

export default CardShort;
