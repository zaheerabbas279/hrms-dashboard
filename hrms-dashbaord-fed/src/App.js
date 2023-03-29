import logo from "./logo.svg";
import "./App.css";
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
