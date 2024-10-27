import { ProgressIndicator } from "./shared/ProgressIndicator";
import { FormContainer } from "./shared/FormContainer";
import { ChadIconContainer } from "./shared/ChadIconContainer";
import { useRegistration } from "../../../hooks/RegistrationContext";
import styles from '../Registration.module.css'
import cardStyles from './ConnectShopify.module.css'





// Outlet????


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

function ConnectShopifyCard() {
    return(
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
    )
}

function SuccesfullShopifyConnection () {
    return(
        <div className={cardStyles.racoonCard}>
            <img src="/racoon.png" alt="racoon" />
            <h2>Store connected</h2>
            <p className={cardStyles.smallText}>Chad is now able to manage customer support requests for [STORE-NAME].</p>
            <button type="button" className={cardStyles.continueBtn}>Continue</button>
            <p className={cardStyles.login}>Wrong store?<a href="">Connect another one</a></p>
        </div>
    )
}

function ShopifyAlreadyConnected () {
    return(
        <div className={cardStyles.racoonCard}>
            <img src="/racoon.png" alt="racoon" />
            <h2 className={cardStyles.centered}>[STORE-NAME] already connected</h2>
            <button type="button" className={cardStyles.continueBtn}>Continue</button>
            <p className={cardStyles.login}>Not your store?<a href="">Connect another one</a></p>
        </div>
    )
}

function ShopifyAbsentCard () {
    return(
        <div className={cardStyles.absentCard}>
            <ChadIconContainer />
            <h2>{"Don't use Shopify?"}</h2>
            <p className={cardStyles.smallText}>Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform.</p>

            <form>
                <label htmlFor="platform">Platform</label>
                <select name="platform" className={cardStyles.platformSelect}>
                    <option value="Select platform">Select Platform</option>
                </select>
            </form>
            
            <button type="button" className={cardStyles.create}>Submit</button>
            <p className={cardStyles.login}>Actualy use Shopify? <a href="">Connect</a></p>
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
                {/* <ConnectShopifyCard/> */}
                {/* <SuccesfullShopifyConnection /> */}
                {/* <ShopifyAlreadyConnected /> */}
                <ShopifyAbsentCard />
            </FormContainer>
            
        </div>
        
    )
}

export { ConnectShopify }