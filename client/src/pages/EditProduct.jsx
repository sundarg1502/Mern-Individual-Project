import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import './ProductForm.css';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    countInStock: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        const product = response.data;
        
        setFormData({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          countInStock: product.countInStock,
          image: product.image || ''
        });
        
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'countInStock' ? parseFloat(value) || '' : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmitting(true);
      setError(null);
      
      await axios.put(`http://localhost:5000/api/products/${id}`, formData);
      navigate(`/products/${id}`);
    } catch (err) {
      setError('Failed to update product. Please try again.');
      console.error('Error updating product:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Beauty', 'Sports'];

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  return (
    <div className="product-form-page">
      <div className="product-form-header">
        <h1 className="section-title">Edit Product</h1>
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
      
      {error && <div className="form-error">{error}</div>}
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="form-control"
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="countInStock">Stock Quantity</label>
            <input
              type="number"
              id="countInStock"
              name="countInStock"
              value={formData.countInStock}
              onChange={handleChange}
              className="form-control"
              min="0"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
            placeholder="https://example.com/image.jpg"
          />
          <small className="form-text">Leave empty to use a default image</small>
        </div>
        
        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate(`/products/${id}`)} 
            className="btn-cancel"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn-submit" 
            disabled={submitting}
          >
            {submitting ? 'Updating...' : 'Update Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;