import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Employees from "./components/employee";
import Sidebar from "./commonpages/Sidebar";

function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/employee" element={<Employees/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
