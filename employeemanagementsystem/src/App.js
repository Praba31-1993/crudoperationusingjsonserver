import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
