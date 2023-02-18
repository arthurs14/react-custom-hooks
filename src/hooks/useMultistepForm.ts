import { ReactElement, useState } from 'react';

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const next = () => {
    setCurrentStepIndex((prevState) =>
      prevState >= steps.length - 1 ? prevState : prevState + 1
    );
  };

  const back = () => {
    setCurrentStepIndex((prevState) =>
      prevState <= 0 ? prevState : prevState - 1
    );
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;
