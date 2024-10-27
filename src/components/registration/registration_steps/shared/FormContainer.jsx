import styles from './FormContainer.module.css'
function FormContainer({children}) {

    return(
        <div className={styles.formContainer}>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    )
}

export { FormContainer }