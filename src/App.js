import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import LoginPage from './Pages/LoginPage/login';
import RegisterPage from './Pages/RegisterPage/register';
import HomePage from "./Pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
