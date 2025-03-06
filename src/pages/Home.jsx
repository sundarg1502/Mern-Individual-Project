import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ShopEase</h1>
          <p className="hero-subtitle">Your one-stop shop for amazing products</p>
          <Link to="/products" className="hero-button">
            Browse Products
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Shopping" 
          />
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title text-center">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <ShoppingBag size={40} />
            </div>
            <h3 className="feature-title">Easy Shopping</h3>
            <p className="feature-description">
              Browse through our wide range of products with an intuitive interface.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Package size={40} />
            </div>
            <h3 className="feature-title">Quality Products</h3>
            <p className="feature-description">
              We ensure all our products meet the highest quality standards.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={40} />
            </div>
            <h3 className="feature-title">Best Prices</h3>
            <p className="feature-description">
              Get the best deals and prices on all your favorite items.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Selling?</h2>
          <p className="cta-description">
            Add your products to our platform and reach thousands of customers.
          </p>
          <Link to="/add-product" className="cta-button">
            Add Your Product
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;