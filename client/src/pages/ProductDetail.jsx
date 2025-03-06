import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch product details. Please try again later.');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        navigate('/products');
      } catch (err) {
        setError('Failed to delete product. Please try again.');
        console.error('Error deleting product:', err);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-link">
        <ArrowLeft size={20} />
        Back to Products
      </Link>
      
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img 
            src={product.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'} 
            alt={product.name} 
          />
        </div>
        
        <div className="product-detail-info">
          <div className="product-detail-header">
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-detail-actions">
              <Link to={`/edit-product/${id}`} className="btn-edit-detail">
                <Edit size={18} />
                Edit
              </Link>
              <button onClick={handleDelete} className="btn-delete-detail">
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>
          
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          
          <div className="product-detail-category">
            Category: <span>{product.category}</span>
          </div>
          
          <div className="product-detail-stock">
            In Stock: <span>{product.countInStock}</span>
          </div>
          
          <div className="product-detail-description">
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;