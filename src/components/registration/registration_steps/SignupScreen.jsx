import { ProgressIndicator } from "./shared/ProgressIndicator"
import { FormContainer } from "./shared/FormContainer"
import styles from '../Registration.module.css'
function SignupScreen() {

    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator/>
            <FormContainer>Card</FormContainer>
        </div>
    )
}

export { SignupScreen }