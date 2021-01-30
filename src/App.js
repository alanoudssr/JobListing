import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap"

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
