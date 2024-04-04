import { useEffect, useState } from "react";
import CardLong from "../CardLong";

const cardData = [
  {
    img: "/student.svg",
    title: "Student",
    desc: "or soon to be enrolled",
  },
  {
    img: "/student.svg",
    title: "Professional",
    desc: "pursuing a career",
  },
  {
    img: "/student.svg",
    title: "Parent",
    desc: "of a school-age child",
  },
  {
    img: "/student.svg",
    title: "LifeLong Learner",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Teacher",
    desc: "",
  },
  {
    img: "/student.svg",
    title: "Other",
    desc: "",
  },
];

const FormStep1 = ({ setFormData, formData }) => {
  const [currentSelected, setCurrentSelected] = useState(formData[1]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      [1]: currentSelected,
    }));
  }, [currentSelected]);

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="formHeading">Which describes you the best?</h1>
        <h3 className="formSubheading">
          This will help us personalize your experience
        </h3>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        {cardData.map((item) => (
          <CardLong
            key={item.title}
            data={item}
            selected={currentSelected === item.title}
            setCurrentSelected={setCurrentSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default FormStep1;
