import { ProgressIndicator } from "./shared/ProgressIndicator";
import { FormContainer } from "./shared/FormContainer";
import { useRegistration } from "../../../hooks/RegistrationContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../Registration.module.css'
import cardStyles from './ConnectShopify.module.css'

function CompleteCard({nextStep}) {
    return (
        <div className={cardStyles.responceCard}>
            <img src="/done.gif" alt="Done gif" className={cardStyles.imgDone}/>
            <h2 className={cardStyles.centered}>Registration complete</h2>
            <p className={cardStyles.smallText}>{"Thank you for your interest in Chad! Welcome to the platform"}</p>
            <button type="button" className={cardStyles.continueBtn} onClick={nextStep}>Done</button>
        </div>
    )
}

function RegistrationComplete() {
    const{ currentStep, handleBack, handleNext } = useRegistration()
    const [shopifyConnectionState, setShopifyConnectionState] = useState("initial");
    const navigate = useNavigate()


    const handleAction = () => {
        navigate('/greeting')
    };


    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4}>Next &gt;</button>
            </ProgressIndicator>
            <FormContainer>
                <CompleteCard nextStep={handleAction}/>
            </FormContainer>
            
        </div>
        
    )
}

export { RegistrationComplete }