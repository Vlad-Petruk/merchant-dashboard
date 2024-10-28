import { ProgressIndicator } from "./shared/ProgressIndicator"
import { FormContainer } from "./shared/FormContainer"
import { ChadIconContainer } from "./shared/ChadIconContainer"
import { useRegistration } from "../../../hooks/RegistrationContext"
import styles from '../Registration.module.css'
import cardStyles from './SignupScreen.module.css';

function LoginCard ({email, setEmail, password, setPassword, handleSubmit, handleAction }) {
    return(
      <div className={cardStyles.cardLogin}>
          <ChadIconContainer />
          <h2>Welcome to Chad</h2>
          <p className={cardStyles.smallText}>
          Feeling ready to take on the day? Chad is too!
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
              <button type="submit" className={cardStyles.create} >Login</button>
              <p className={cardStyles.login}>Do not have an account? <span onClick={()=>handleAction()} className={cardStyles.redirect}>Join the waitlist</span></p>
          </form>
      </div>
    )
  }

function SignupCard ({email, setEmail, name, setName, password, setPassword, handleSubmit, handleAction }) {
  return(
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
            <p className={cardStyles.login}>Already have an account? <span onClick={()=>handleAction()} className={cardStyles.redirect}>Login</span></p>
        </form>
    </div>
  )
}


function SignupScreen() {
  const{ currentStep, handleBack, handleNext, signupConnectionState, setSignupConnectionState, email, setEmail, name, setName, password, setPassword } = useRegistration()

    const handleSubmit = () => { 

        if (signupConnectionState === "initial") {
            if (email && password) {
                handleNext();
                handleAction('connected')

            }
        } else if (signupConnectionState === "login") {
            if (email && name && password) {
                handleNext();
                handleAction('connected')
            }
        }
    };

    const handleAction = (nextState) => {
        setSignupConnectionState(nextState);
    };
    return(
        <div className={styles.stepScreen}>
            <ProgressIndicator>
                <button onClick={handleBack} disabled={currentStep === 1}>&lt; Back</button>
                <button onClick={handleNext} disabled={currentStep === 4||signupConnectionState === "initial"||signupConnectionState === "login"}>Next &gt;</button>
            </ProgressIndicator>
            <FormContainer>
                {signupConnectionState === "initial"&& <LoginCard email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleAction={()=>handleAction('login')} handleSubmit={()=>handleSubmit()}/>}
                {signupConnectionState === "login"&& <SignupCard email={email} setEmail={setEmail} name={name} setName={setName} password={password} setPassword={setPassword} handleAction={()=>handleAction('initial')} handleSubmit={()=>handleSubmit()}/>}
                {signupConnectionState === "connected"&& <LoginCard email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleAction={()=>handleAction('login')} handleSubmit={()=>handleSubmit()}/>}
                
            </FormContainer>
        </div>
    )
}

export { SignupScreen }