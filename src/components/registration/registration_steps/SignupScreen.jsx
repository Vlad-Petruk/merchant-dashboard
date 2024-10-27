import { ProgressIndicator } from "./shared/ProgressIndicator"
import { FormContainer } from "./shared/FormContainer"
import styles from '../Registration.module.css'
import cardStyles from './SignupScreen.module.css'
function SignupScreen() {

    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator/>
            <FormContainer>
                <div className={cardStyles.card}>
                    <div className="">

                    </div>
                </div>
            </FormContainer>
        </div>
    )
}

export { SignupScreen }