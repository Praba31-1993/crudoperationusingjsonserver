import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./components/employee";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
