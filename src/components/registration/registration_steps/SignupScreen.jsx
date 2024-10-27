import { ProgressIndicator } from "./shared/ProgressIndicator"
import { FormContainer } from "./shared/FormContainer"
import { ChadIconContainer } from "./shared/ChadIconContainer"
import styles from '../Registration.module.css'
import cardStyles from './SignupScreen.module.css'
function SignupScreen() {

    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator/>
            <FormContainer>
                <div className={cardStyles.card}>
                    <ChadIconContainer />
                    <h2>Welcome to Chad</h2>
                    <p className={cardStyles.smallText}>Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.</p>
                    <form >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className={cardStyles.email} placeholder="megachad@trychad.com"/>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name" className={cardStyles.name} placeholder="Mega Chad"/>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" className={cardStyles.password} placeholder="Enter password"/>
                    <button type="button">Create account</button>
                    <p className={cardStyles.login}>Already have an account? <a href="">Login</a></p>
                </form>
                </div>
                
            </FormContainer>
        </div>
    )
}

export { SignupScreen }