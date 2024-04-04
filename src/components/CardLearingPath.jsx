const CardLearingPath = ({ isPopular = false }) => {
  return (
    <div
      className={`w-full max-w-[20rem] flex items-center gap-5 border px-5 py-7 rounded-md cursor-pointer relative`}
      onClick={() => setCurrentSelected(data.title)}
    >
      {isPopular ? (
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#f4b135] text-xs font-semibold rounded-full px-2 py-1">
          MOST POPULAR
        </div>
      ) : null}

      <div className="flex flex-col gap-2 items-center text-sm">
        <p className="text-secondary">
          <span className="text-black font-medium">Mathematical build</span>{" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <img src="/student.svg" alt="" className="size-10" />
    </div>
  );
};

export default CardLearingPath;
