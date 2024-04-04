const FormStep5 = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col md:flex-row w-full max-w-[50rem] justify-center items-center gap-x-32">
        <img src="/student.svg" alt="" className="size-60" />
        <div className="flex flex-col gap-4">
          <h1 className="formHeading">You're on the way</h1>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <img src="/star.svg" key={i} alt="" className="size-8" />
            ))}
          </div>
          <p className="text-sm italic">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            natus consectetur provident eaque excepturi architecto libero
            dolorum reprehenderit rem minus, quos Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore harum ducimus alias ut nam
            beatae."
            <br />
            <br />
            <span>- Jacob S.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormStep5;
