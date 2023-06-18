import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:productId" Component={Product} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
