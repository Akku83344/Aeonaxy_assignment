import { useEffect, useState } from "react";
import CardLong from "../CardLong";

const cardData = [
  {
    img: "/student.svg",
    title: "Learing Specific skills to advance my career",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Exploring new topics I'm interested in",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Refreshing my math foundations",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Exercising my math foundations to stay sharp",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Something else",
    desc: "",
  },
];

const FormStep2 = ({ setFormData, formData }) => {
  const [currentSelected, setCurrentSelected] = useState(formData[2]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      [2]: currentSelected,
    }));
  }, [currentSelected]);

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="formHeading">Which are you most interested in?</h1>
        <h3 className="formSubheading">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </h3>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        {cardData.map((item) => {
          return (
            <CardLong
              key={item.title}
              data={item}
              selected={currentSelected === item.title}
              setCurrentSelected={setCurrentSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FormStep2;
