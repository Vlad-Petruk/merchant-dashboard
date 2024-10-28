import { FormContainer } from "./shared/FormContainer";
import { ProgressIndicator } from "./shared/ProgressIndicator";
import { ChadIconContainer } from "./shared/ChadIconContainer";
import { useRegistration } from "../../../hooks/RegistrationContext";
import { useState } from "react";
import styles from '../Registration.module.css'
import cardStyles from './ConnectGmail.module.css';

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

function ConnectGmailCard({onConnect, onResponse}) {
    return(
        <div className={cardStyles.card}>
            <ChadIconContainer />
            <h2>Connect your customer support email</h2>
            <p className={cardStyles.smallText}>Allows Chad to send automated responses on your behalf from your usual support mailbox</p>

            <div className={cardStyles.checklist}>
                <ListItem childHeader={'Contextual responces'} childText={'Custom responses to any support situation from “where’s my stuff?” to “I want a refund”'}/>

                <ListItem childHeader={'Reply from anywhere'} childText={'Respond to your customers via email or Chad chat—it’s all saved in the same thread'}/>

                <ListItem childHeader={'Categorical inbox tags'} childText={'Tags your emails by category so you know what to expect before even opening an email'}/> 
            </div>
            
            <button type="button" className={cardStyles.create} onClick={onConnect}>Connect Gmail account</button>
            <p className={cardStyles.login} onClick={onResponse}>{"I don't use Gmail"}</p>
        </div>
    )
}

function GmailAbsentCard ({onResponse, onConnect}) {
    return(
        <div className={cardStyles.absentCard}>
            <ChadIconContainer />
            <h2>{"Don't use Gmail?"}</h2>
            <p className={cardStyles.smallText}>Chad Beta is currently only available on Gmail. We’ll send you an email when Chad becomes available on your platform.</p>

            <form>
                <label htmlFor="platform">Platform</label>
                <select name="platform" className={cardStyles.platformSelect}>
                    <option value="Select platform">Select Platform</option>
                </select>
            </form>
            
            <button type="button" className={cardStyles.create} onClick={onResponse}>Submit</button>
            <p className={cardStyles.login}>Actualy use Gmail?  <span onClick={onConnect} className={cardStyles.redirect}>Connect</span></p>
        </div>
    )
}

function ResponceForAbsentGmailCard({nextStep}) {
    return (
        <div className={cardStyles.responceCard}>
            <img src="/done.gif" alt="racoon" className={cardStyles.imgDone}/>
            <h2 className={cardStyles.centered}>Responce received</h2>
            <p className={cardStyles.smallText}>{"Thank you for your interest in Chad! We’ll be hard at work building integrations to support your email client."}</p>
            <button type="button" className={cardStyles.continueBtn} onClick={nextStep}>Done</button>
        </div>
    )
}

function ConnectGmail() {
    const{ currentStep, handleBack, handleNext,  } = useRegistration()
    const [gmailConnectionState, setGmailConnectionState] = useState("initialStep");

    const handleAction = (nextState) => {
        setGmailConnectionState(nextState);
    };
    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4||gmailConnectionState === "initialStep"}>Next &gt;</button>
            </ProgressIndicator>
            <FormContainer>
                {gmailConnectionState === "initialStep" && <ConnectGmailCard onResponse={() => handleAction("noGmail")} onConnect={handleNext}/>}
                {gmailConnectionState === "noGmail" && <GmailAbsentCard onResponse={() => handleAction("responseReceived")} onConnect={()=>handleAction('initialStep')}  />}
                {gmailConnectionState === "responseReceived" && <ResponceForAbsentGmailCard nextStep={()=>handleNext()}/>}
                
            </FormContainer>
            
        </div>
    )
}

export { ConnectGmail }