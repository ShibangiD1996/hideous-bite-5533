import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import ProductDetails from "./Pages/ProductDetails";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
           
              <ProductPage />
           
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};
//Append the productpage in privateRoute