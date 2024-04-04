const CardLong = ({ selected, setCurrentSelected, data }) => {
  return (
    <div
      className={`w-full max-w-[35rem] flex items-center gap-5 border px-4 py-3 rounded-md cursor-pointer ${
        selected ? "border-yellow-400 shadow-md" : ""
      }`}
      onClick={() => setCurrentSelected(data.title)}
    >
      <img src={data.img} alt="" className="size-10" />
      <p className="text-secondary text-sm lg:text-base">
        <span className="text-black">{data.title}</span> {data.desc}
      </p>
    </div>
  );
};

export default CardLong;
