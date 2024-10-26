import React, { createContext, useContext, useState } from 'react';


const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
    const steps = ["Welcome", "Connect your Shopify store", "Connect your customer support email", "Done"];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <RegistrationContext.Provider value={{ currentStep, steps, handleNext, handleBack }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  return useContext(RegistrationContext);
};
