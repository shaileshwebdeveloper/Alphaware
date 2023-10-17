import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { About } from "./About";
import { Cart } from "./Cart";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
