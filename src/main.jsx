import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./Component/Pages/About.jsx";
import Home from "./Component/Pages/Home.jsx";
import Shop from "./Component/Pages/Shop.jsx";
import Blog from "./Component/Pages/Blog.jsx";
import Contact from "./Component/Pages/Contact.jsx";
import SingleBlog from "./Component/Pages/SingleBlog.jsx";
import ProductDetail from "./Component/Pages/ProductDetail.jsx";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
