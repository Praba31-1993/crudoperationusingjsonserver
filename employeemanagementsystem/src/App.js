import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Employees from "./pages/Employees";

function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employees/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
