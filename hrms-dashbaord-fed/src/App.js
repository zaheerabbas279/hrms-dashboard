import { useState } from "react";
import "./App.css";
import DashboardRoutes from "./routes/dashboardRoutes";
import RouteCheck from './routes/RouteCheck'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <RouteCheck />
    </div>
  );
}

export default App;
