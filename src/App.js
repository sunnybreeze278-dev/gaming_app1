import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Library from "./pages/Library";
import Wallet from "./pages/Wallet";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Agreement from "./pages/Agreement";
import Trade from "./pages/Trade";
import Share from "./pages/Share";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="logo-link">
            <div className="logo">
              <h2><span className="highlight">Gaming</span> App</h2>
            </div>
          </Link>
          <ul className="nav-user">
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <nav className="navbar-bottom">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/wallet">Wallet</Link></li>
            <li><Link to="/share">Share</Link></li>
            <li><Link to="/trade">Trade</Link></li>
          </ul>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/library" element={<Library />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
