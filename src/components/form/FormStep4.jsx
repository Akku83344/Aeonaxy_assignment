import { useEffect, useState } from "react";
import CardShort from "../CardShort";

const cardData = [
  {
    img: "/student.svg",
    title: "Arthmetic",
    desc: "Introductory",
  },
  {
    img: "/student.svg",
    title: "Basic Algebra",
    desc: "Foundational",
  },
  {
    img: "/student.svg",
    title: "Intermediate Algebra",
    desc: "Intermediate",
  },
  {
    img: "/student.svg",
    title: "Calculus",
    desc: "Advanced",
  },
];

const FormStep4 = ({ setFormData, formData }) => {
  const [currentSelected, setCurrentSelected] = useState(formData[4]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      [4]: currentSelected,
    }));
  }, [currentSelected]);

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="formHeading">What is your math comfort level?</h1>
        <h3 className="formSubheading">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit.
        </h3>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        {cardData.map((item) => {
          return (
            <CardShort
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

export default FormStep4;
