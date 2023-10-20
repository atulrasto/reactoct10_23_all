import Home from "./components/Home";
import ProductSearch from "./components/ProductSearch";
import ProductDetails from "./components/ProductDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-search" element={<ProductSearch />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
