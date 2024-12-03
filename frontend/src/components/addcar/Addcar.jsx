import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addcar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    mileage: '',   
    condition: 'used',  // default value
    pictures: [''],  // array to store picture URLs
    postedBy: '',    // You will need to set this based on the logged-in user
    createdAt: new Date().toISOString().slice(0, 10), // Default to today's date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'pictures') {
      const updatedPictures = value.split(','); // splitting multiple URLs by comma
      setFormData({
        ...formData,
        [name]: updatedPictures,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve existing cars from local storage
    const existingCars = JSON.parse(localStorage.getItem('formData')) || [];
  
    // Append the new car data
    const updatedCars = [...existingCars, formData];
  
    // Save the updated array back to local storage
    localStorage.setItem('formData', JSON.stringify(updatedCars));
  
    // Clear the form for the next entry
    setFormData({
      make: '',
      model: '',
      year: '',
      price: '',
      description: '',
      mileage: '',
      condition: 'used', // default value
      pictures: [''], // array to store picture URLs
      postedBy: '',
      createdAt: new Date().toISOString().slice(0, 10),
    });
  
   
   alert("Data has been saved to local storage");

   navigate('/allcars');
  };
  
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2em', marginBottom: '20px' }}>Car Listing Form</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="make" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Make</label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="model" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="year" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="price" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="description" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%', height: '120px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="mileage" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Mileage</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="condition" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Condition</label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          >
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="pictures" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Pictures (URL, separated by commas)</label>
          <input
            type="text"
            id="pictures"
            name="pictures"
            value={formData.pictures.join(',')} // Join the array into a single string for input
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="postedBy" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Posted By (User ID)</label>
          <input
            type="text"
            id="postedBy"
            name="postedBy"
            value={formData.postedBy}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="createdAt" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Created At</label>
          <input
            type="date"
            id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
            style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em', width: '100%' }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 20px',
            fontSize: '1.1em',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
            gridColumn: 'span 2',  // Make the button span both columns
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addcar;
