// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import StaffDashboard from './pages/StaffDashboard';
import AddProduct from './pages/AddProduct';
import ManageProducts from './pages/ManageProducts';
import AddStock from './pages/AddStock';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import { UserContext } from './UserContext';

function App() {
    const { user, loggedIn } = useContext(UserContext);

    return (
        <Router basename="/DB_Design_Final">
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterUser />} />
                        {loggedIn && user.role === 'staff' && (
                            <>
                                <Route path="/staff" element={<StaffDashboard />} />
                                <Route path="/staff/add-product" element={<AddProduct />} />
                                <Route path="/staff/manage-products" element={<ManageProducts />} />
                                <Route path="/staff/add-stock" element={<AddStock />} />
                            </>
                        )}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
