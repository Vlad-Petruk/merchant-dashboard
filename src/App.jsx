import { Registration } from './components/registration/Registration'
import { RegistrationProvider } from './hooks/RegistrationContext';
import {Greeting} from './components/greeting/Greeting'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  return ( 
    <RegistrationProvider>
      <Router>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/greeting" element={<Greeting />} />
            </Routes>
        </Router>
    </RegistrationProvider>
  );
};

export default App
