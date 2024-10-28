import { ProgressIndicator } from "./shared/ProgressIndicator";
import { FormContainer } from "./shared/FormContainer";
import { ChadIconContainer } from "./shared/ChadIconContainer";
import { useRegistration } from "../../../hooks/RegistrationContext";
import { useState } from "react";
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

function ConnectShopifyCard({onConnect, onResponse}) {
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
            
            <button type="button" className={cardStyles.create} onClick={onConnect}>Connect Store</button>
            <p className={cardStyles.login} onClick={onResponse}>{"I don't use Shopify"}</p>
        </div>
    )
}

function SuccessfulShopifyConnection ({onNext, onConnect, nextStep}) {
    function handleAction () {
        onNext()
        nextStep()
    }
    return(
        <div className={cardStyles.racoonCard}>
            <img src="/racoon.png" alt="racoon" />
            <h2>Store connected</h2>
            <p className={cardStyles.smallText}>Chad is now able to manage customer support requests for [STORE-NAME].</p>
            <button type="button" className={cardStyles.continueBtn} onClick={handleAction}>Continue</button>
            <p className={cardStyles.login}>Wrong store?<span onClick={onConnect} className={cardStyles.redirect}>Connect another one</span></p>
        </div>
    )
}

function ShopifyAlreadyConnected ({onNext, onConnect}) {
    return(
        <div className={cardStyles.racoonCard}>
            <img src="/racoon.png" alt="racoon" />
            <h2 className={cardStyles.centered}>[STORE-NAME] already connected</h2>
            <button type="button" className={cardStyles.continueBtn} onClick={onNext}>Continue</button>
            <p className={cardStyles.login}>Not your store?<span onClick={onConnect} className={cardStyles.redirect}>Connect another one</span></p>
        </div>
    )
}

function ShopifyAbsentCard ({onResponse, onConnect}) {
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
            
            <button type="button" className={cardStyles.create} onClick={onResponse}>Submit</button>
            <p className={cardStyles.login}>Actualy use Shopify? <span onClick={onConnect} className={cardStyles.redirect}>Connect</span></p>
        </div>
    )
}

function ResponceForAbsentShopifyCard({nextStep}) {
    return (
        <div className={cardStyles.responceCard}>
            <img src="/done.gif" alt="racoon" className={cardStyles.imgDone}/>
            <h2 className={cardStyles.centered}>Responce received</h2>
            <p className={cardStyles.smallText}>{"Thank you for your interest in Chad! We'll be hard at work building integrations to support your platform."}</p>
            <button type="button" className={cardStyles.continueBtn} onClick={nextStep}>Done</button>
        </div>
    )
}

function ConnectShopify() {
    const{ currentStep, handleBack, handleNext, shopifyConnectionState, setShopifyConnectionState } = useRegistration()

    const handleAction = (nextState) => {
        setShopifyConnectionState(nextState);
    };


    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4||shopifyConnectionState === "initial"}>Next &gt;</button>
            </ProgressIndicator>
            <FormContainer>
                {shopifyConnectionState === "initial" && <ConnectShopifyCard onResponse={() => handleAction("noShopify")} onConnect={() => handleAction("successfulConnection")} />}
                {shopifyConnectionState === "successfulConnection" && <SuccessfulShopifyConnection onNext={() => handleAction("alreadyConnected")} nextStep={()=>handleNext()} onConnect={() =>handleAction('initial')} />}
                {shopifyConnectionState === "alreadyConnected" && <ShopifyAlreadyConnected onNext={() => handleNext()} onConnect={() =>handleAction('initial')} />}
                {shopifyConnectionState === "noShopify" && <ShopifyAbsentCard onResponse={() => handleAction("responseReceived")} onConnect={() =>handleAction('initial')}  />}
                {shopifyConnectionState === "responseReceived" && <ResponceForAbsentShopifyCard nextStep={()=>handleNext()}/>}
                
            </FormContainer>
            
        </div>
        
    )
}

export { ConnectShopify }