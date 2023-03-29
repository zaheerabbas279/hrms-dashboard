import { useState } from "react";
import "./App.css";
import RouteCheck from "./routes/RouteCheck";
import { Header } from "./components/Header/Header";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <Header />
      <RouteCheck />
    </div>
  );
}

export default App;
