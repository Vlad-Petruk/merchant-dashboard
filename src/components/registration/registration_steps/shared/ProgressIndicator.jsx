import styles from './ProgressIndicator.module.css'
import { useRegistration } from '../../../../hooks/RegistrationContext'

function ProgressIndicator({ children }) {
    const { currentStep, steps } = useRegistration();
    const progressWidth = (currentStep / steps.length) * 100;

    const getCircleClassName = (index) => {
      let className = styles.circle;
  
      if (index < currentStep-1) {
          className += ` ${styles.completed}`; 
      }
      if (index <currentStep) {
          className += ` ${styles.active}`; 
      }
  
      return className;
  };

    return (
        <div className={styles.mainContainer}>
            <p className={styles.stepIndicator}>Step {currentStep} of {steps.length}</p>
            <div className={styles.stepsAndButtons}>
            <div className={styles.progressBar}> 
                <div className={styles.progress}
                 style={{ width: `${progressWidth}%` }}></div>
             </div>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.circleLineContainer}>
                                <div className={`${getCircleClassName(index)}`}></div>
                                {index < steps.length - 1 && (
                                    <div className={`${styles.line} ${index < currentStep - 1 ? styles.completed : ''}`}></div>
                                )}
                            </div>
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
            <div className={styles.textAndDots}>
              <div className={styles.text}>
                  <span className={styles.boldText}>5X</span>
                  <p className={styles.description}>
                      Acquiring a new customer is 5x more costly than making an unhappy customer happy
                  </p>
              </div>
              <div className={styles.dots}>
                  {steps.map((_, index) => (
                      <span
                          key={index}
                          className={`${styles.dot} ${index < currentStep ? styles.activeDot : ''}`}
                      ></span>
                  ))}
              </div>
            </div>
        </div>
    );
}

export { ProgressIndicator };
