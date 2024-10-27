import { ProgressIndicator } from "./shared/ProgressIndicator";
import { useRegistration } from "../../../hooks/RegistrationContext";
import styles from '../Registration.module.css'

function ConnectShopify() {
    const{ currentStep, handleBack, handleNext } = useRegistration()

    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4}>Next &gt;</button>
            </ProgressIndicator>
            <>Shopify</>
        </div>
        
    )
}

export { ConnectShopify }