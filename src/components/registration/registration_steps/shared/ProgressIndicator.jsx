import styles from './ProgressIndicator.module.css'
import { useRegistration } from '../../../../hooks/RegistrationContext'

function ProgressIndicator({ children }) {
    const { currentStep, steps } = useRegistration();

    return(
        <div className={styles.stepsAndButtons}>
            <div className={styles.steps}>
            {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div className={`${styles.circle} ${index < currentStep ? styles.completed : ''}`}></div>
          {index < steps.length - 1 && (
            <div className={`${styles.line} ${index < currentStep - 1 ? styles.completed : ''}`}></div>
          )}
          <span className={`${styles.label} ${index < currentStep ? styles.completed : ''}`}>
            {step}
          </span>
        </div>
      ))}
            </div>
            <div className={styles.buttons}>
                {children}
            </div>

        </div>
    )
}

export { ProgressIndicator }