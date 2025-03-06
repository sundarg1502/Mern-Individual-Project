import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, List } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <ShoppingBag size={24} />
          <span>ShopEase</span>
        </Link>
        
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="navbar-link">
              <List size={18} />
              Products
            </Link>
          </li>
          <li>
            <Link to="/add-product" className="navbar-link navbar-add-btn">
              <Plus size={18} />
              Add Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;