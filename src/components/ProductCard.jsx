import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2 } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'} 
          alt={product.name} 
          className="product-image" 
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-category">{product.category}</p>
      </div>
      <div className="product-actions">
        <Link to={`/products/${product._id}`} className="btn-view">
          View Details
        </Link>
        <div className="product-admin-actions">
          <Link to={`/edit-product/${product._id}`} className="btn-edit">
            <Edit size={16} />
          </Link>
          <button onClick={() => onDelete(product._id)} className="btn-delete">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;