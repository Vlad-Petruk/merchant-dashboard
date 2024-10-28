import React, { createContext, useContext, useState } from 'react';


const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const steps = ["Welcome", "Connect your Shopify store", "Connect your customer support email", "Done"];
  const [shopifyConnectionState, setShopifyConnectionState] = useState("initial");
  const [signupConnectionState, setSignupConnectionState] = useState("initial");
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <RegistrationContext.Provider value={{ currentStep, steps, handleNext, handleBack, shopifyConnectionState, setShopifyConnectionState, signupConnectionState, setSignupConnectionState, email, setEmail, name, setName, password, setPassword }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  return useContext(RegistrationContext);
};
