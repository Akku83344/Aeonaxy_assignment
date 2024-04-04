import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import FormStep1 from "../components/form/FormStep1";
import FormStep2 from "../components/form/FormStep2";
import FormStep3 from "../components/form/FormStep3";
import FormStep4 from "../components/form/FormStep4";
import FormStep5 from "../components/form/FormStep5";
import CardLearningPath from "../components/CardLearingPath";

const TOTAL_STEPS = 5;

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    1: null,
    2: null,
    3: "dummy", // no data is taken on this step
    4: null,
    5: "dummy", // no data is taken on this step
  });

  useEffect(() => {
    if (currentStep > TOTAL_STEPS) {
      submitForm();
    }
  }, [currentStep]);

  const submitForm = () => {
    setFormSubmitting(true);
    // Mocking an API call
    setTimeout(() => {
      setFormSubmitting(false);
    }, 2000);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 setFormData={setFormData} formData={formData} />;
      case 2:
        return <FormStep2 setFormData={setFormData} formData={formData} />;
      case 3:
        return <FormStep3 setFormData={setFormData} formData={formData} />;
      case 4:
        return <FormStep4 setFormData={setFormData} formData={formData} />;
      case 5:
        return <FormStep5 setFormData={setFormData} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex justify-center py-10 px-4 min-h-screen">
      {currentStep <= TOTAL_STEPS ? (
        <div className="flex flex-col items-center w-full">
          <div className="w-full flex justify-center items-center gap-2">
            <ChevronLeft
              className={`size-8 cursor-pointer ${
                currentStep === 1 ? "pointer-events-none" : ""
              }`}
              onClick={() => setCurrentStep((prev) => prev - 1)}
            />
            <div className="w-[75%] relative h-[4px] bg-gray-200 rounded-full">
              <div
                className="absolute h-[4px] rounded-full left-0 top-0 bg-green-400 z-10 transition-all"
                style={{
                  width: `${(currentStep / TOTAL_STEPS) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-10">
            {renderCurrentStep()}
          </div>
          <div className="mt-10">
            <button
              disabled={!formData[currentStep] || currentStep > TOTAL_STEPS}
              className="cta"
              onClick={() => setCurrentStep((prev) => prev + 1)}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full min-h-[70vh]">
          {formSubmitting ? (
            <div className="flex flex-col gap-4 items-center">
              <img src="/spinner.svg" alt="" className="size-20" />
              <p className="text-2xl font-semibold w-full lg:w-[80%] text-center">
                Finding learning path recommendations for you based on your
                responses
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col items-center gap-4">
                <h1 className="formHeading">
                  Learning paths based on your answers
                </h1>
                <h3 className="formSubheading">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h3>
              </div>
              <div className="w-full flex flex-wrap justify-center items-center gap-5 mt-5">
                <CardLearningPath isPopular />
                <CardLearningPath />
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default MultistepForm;
