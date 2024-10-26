import { Registration } from './components/registration/Registration'
import { RegistrationProvider } from './hooks/RegistrationContext';
import './App.css'

const App = () => {
  return (
    <RegistrationProvider>
      <Registration />
    </RegistrationProvider>
  );
};

export default App
