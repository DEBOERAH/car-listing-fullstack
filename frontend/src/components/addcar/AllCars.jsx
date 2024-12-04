import { useState, useEffect } from 'react';
import "./Allcars.css"

const AllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    
    const apiUrl = import.meta.env.VITE_API_URL
    const fetchCars = async () => {
      try {
        // Fetch cars from the backend API
        const response = await fetch(`${apiUrl}/api/cars`);
        const fetchedData = await response.json();
  
        // Retrieve all cars from local storage
        const localCars = JSON.parse(localStorage.getItem('formData')) || [];
  
        // Combine backend and local storage cars
        const combinedCars = [...localCars, ...fetchedData];
  
        // Update state
        setCars(combinedCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
  
        // Fallback: Use only local storage cars if backend fetch fails
        const localCars = JSON.parse(localStorage.getItem('formData')) || [];
        setCars(localCars);
      }
    };
  
    fetchCars();
  }, []);
  
  
  return (
    <div className="cars-container">
      <h1>All Cars</h1>
      <div className="cars-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            {/* Image */}
            {car.pictures && <img src={car.pictures} alt={`Car ${car.id}`} className="car-image" />}
            
            <div className="car-details">
              <h2>Car Name: {car.make}</h2>
              <p>Model: {car.model}</p>
              <p>Price: {car.price}</p>
              <p>Year: {car.year}</p>
              <p>Condition: {car.condition}</p>
              <p>{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
