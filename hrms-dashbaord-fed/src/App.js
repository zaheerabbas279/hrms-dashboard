import logo from "./logo.svg";
import "./App.css";
import DashboardRoutes from "./routes/dashboardRoutes";
import RouteCheck from "./routes/RouteCheck";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <RouteCheck />
    </div>
  );
}

export default App;
