import { ProgressIndicator } from "./shared/ProgressIndicator"
import { FormContainer } from "./shared/FormContainer"
import { ChadIconContainer } from "./shared/ChadIconContainer"
import { useRegistration } from "../../../hooks/RegistrationContext"
import { Loading } from "./shared/Loading"
import { useState } from "react"
import styles from '../Registration.module.css'
import cardStyles from './SignupScreen.module.css'


function SignupScreen() {
    const{ currentStep, handleBack, handleNext,email, setEmail, name, setName, password, setPassword } = useRegistration()

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (email && name && password) {
            handleNext();
        }
    };
    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator/>
            <FormContainer>
                <div className={cardStyles.card}>
                    <ChadIconContainer />
                    <h2>Welcome to Chad</h2>
                    <p className={cardStyles.smallText}>
                        Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className={cardStyles.email}
                            placeholder="megachad@trychad.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            name="name"
                            className={cardStyles.name}
                            placeholder="Mega Chad"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={cardStyles.password}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className={cardStyles.create}>Create account</button>
                        <p className={cardStyles.login}>Already have an account? <span onClick={()=>handleBack()} className={cardStyles.redirect}>Login</span></p>
                    </form>
                </div>
            </FormContainer>
        </div>
    )
}

export { SignupScreen }