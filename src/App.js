import { BrowserRouter as Router } from "react-router-dom";
import './shared/general.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </Router>
  );
}

export default App;
