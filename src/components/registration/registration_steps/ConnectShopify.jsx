import { ProgressIndicator } from "./shared/ProgressIndicator";
import { FormContainer } from "./shared/FormContainer";
import { ChadIconContainer } from "./shared/ChadIconContainer";
import { useRegistration } from "../../../hooks/RegistrationContext";
import styles from '../Registration.module.css'
import cardStyles from './ConnectShopify.module.css'

function ListItem ({childHeader, childText}) {
    return(
        <div className={cardStyles.listItem}>
            <img src="/green-check.png" alt="check" />
            <div className={cardStyles.list}>
                <p className={cardStyles.header}>{childHeader}</p>
                <p className={cardStyles.text}>{childText}</p>
            </div>
        </div>
    )
}

function ConnectShopify() {
    const{ currentStep, handleBack, handleNext } = useRegistration()

    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4}>Next &gt;</button>
            </ProgressIndicator>
            <FormContainer>
                <div className={cardStyles.card}>
                    <ChadIconContainer />
                    <h2>Connect your Shopify store</h2>
                    <p className={cardStyles.smallText}>Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.</p>

                    <div className={cardStyles.checklist}>
                        <ListItem childHeader={'Track orders and shipping'} childText={'Global coverage with 600+ couriers supported'}/>

                        <ListItem childHeader={'Manage orders'} childText={'Allow customers to track, return, exchange, or report problems with their orders'}/>

                        <ListItem childHeader={'Process returns and exchanges'} childText={'Automatically checks your store policy and existing inventory before resolving or escalating each request'}/>
                        
                        
                    </div>
                    
                    <button type="button" className={cardStyles.create}>Connect Store</button>
                    <p className={cardStyles.login}>{"I don't use Shopify"}</p>
                </div>
            </FormContainer>
            
        </div>
        
    )
}

export { ConnectShopify }