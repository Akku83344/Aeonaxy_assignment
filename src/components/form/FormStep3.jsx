const FormStep3 = ({ setFormData, fromData }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col md:flex-row w-full max-w-[50rem] justify-center items-center gap-x-32">
        <img src="/student.svg" alt="" className="size-60" />
        <div className="flex flex-col gap-4">
          <h1 className="formHeading">You're in the right place</h1>
          <p className="text-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            natus consectetur provident eaque excepturi architecto libero
            dolorum reprehenderit rem minus, quos
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormStep3;
