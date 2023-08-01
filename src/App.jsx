import React, { useState } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Page404 from './Pages/Page404';
import NavigationBar from './Components/NavigationBar';
import CategoryPage from './Pages/CategoryPage';
import ProductsPage from './Pages/ProductsPage';
import Footer from './Components/Footer';

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <NavigationBar />
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/category/:categoryName" element={<CategoryPage />} />

          <Route path="/products/:productsID" element={<ProductsPage />} />


          <Route path="/products/category/:categoryName" element={<CategoryPage />} />

          <Route path="/*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={ <Navigate to="/Login" replace={true} />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}
