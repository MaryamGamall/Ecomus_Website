import React, { Fragment } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Product from "./Components/Product/Product.jsx";
import About from "./Components/About/About.jsx";
import Layout from "./Pages/Layout.jsx";
import Thankyou from "./Components/Thankyou/Thankyou.jsx";
import ContactUs from "./Components/Contact Us/ContactUs.jsx";
import SinglePage from "./Components/SinglePage/SinglePage.jsx";
import { CartProvider } from "./Components/CartContext/CartContext.jsx"; // تأكد من صحة المسار
import Checkout from "./Components/Checkout/Checkout.jsx";
import Cart from "./Components/Cart/Cart.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<Thankyou />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="product/:id" element={<SinglePage />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
