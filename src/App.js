import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { ProductDetails } from "./ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products">
          <Route path="" element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route
          path="/*"
          element={
            <div>
              <h1>404</h1>
              <div>Page not found!!!!</div>
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
