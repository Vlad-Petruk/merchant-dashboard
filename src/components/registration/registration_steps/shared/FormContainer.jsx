import styles from './FormContainer.module.css'
function FormContainer({children}) {

    return(
        <div className={styles.mainContainer}>
         {children}
        </div>
    )
}

export { FormContainer }