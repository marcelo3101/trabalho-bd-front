import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import LoginPage from './Pages/LoginPage/login';
import RegisterPage from './Pages/RegisterPage/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
