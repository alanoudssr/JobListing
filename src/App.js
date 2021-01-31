import { BrowserRouter as Router } from "react-router-dom";
import './shared/general.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
