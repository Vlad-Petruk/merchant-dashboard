import React from 'react';
import { useRegistration } from '../../hooks/RegistrationContext';
import { SignupScreen } from './registration_steps/SignupScreen';
import { ConnectShopify } from './registration_steps/ConnectShopify';
import { ConnectGmail } from './registration_steps/ConnectGmail';
import { RegistrationComplete } from './registration_steps/RegistrationComplete';

const Registration = () => {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <SignupScreen />;
      case 2:
        return <ConnectShopify />;
      case 3:
        return <ConnectGmail />;
      case 4:
        return <RegistrationComplete/>;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export { Registration };
