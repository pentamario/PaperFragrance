import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DateFilter from './DateFilter';
import './Dashboard.css';

// Dashboard component
const Dashboard = () => {
  // State variables to hold data, filtered data, start date, and end date
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    axios.get('/mockData.json')
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to filter data based on the selected date range
  const handleFilter = () => {
    const filtered = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
    setFilteredData(filtered); // Update filtered data
  };

  // Function to reset the date filters and show all data
  const handleReset = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setFilteredData(data); // Reset filtered data to original data
  };

  // Calculate total products sold from the filtered data
  const totalProductsSold = filteredData.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total revenue from the filtered data
  const totalRevenue = filteredData.reduce((sum, item) => sum + item.revenue, 0);

  // Find the most popular product from the filtered data
  const mostPopularProduct = filteredData.reduce((acc, item) => {
    if (!acc[item.product]) {
      acc[item.product] = 0;
    }
    acc[item.product] += item.quantity;
    return acc;
  }, {});
  const popularProduct = Object.keys(mostPopularProduct).reduce((a, b) => 
    mostPopularProduct[a] > mostPopularProduct[b] ? a : b, '');

  return (
    <div className="dashboard">
      {/* DateFilter component for selecting date range */}
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        handleFilter={handleFilter}
        handleReset={handleReset}
      />
      <div className="dashboard-summary">
        {/* Display total products sold */}
        <div className="summary-item">
          <h3>Total Products Sold</h3>
          <p>{totalProductsSold}</p>
        </div>
        {/* Display the most popular product */}
        <div className="summary-item">
          <h3>Most Popular Product</h3>
          <p>{popularProduct}</p>
        </div>
      </div>
      <div className="dashboard-summary">
        {/* Display total revenue */}
        <div className="summary-item total-revenue">
          <h3>Total Revenue</h3>
          <p>${totalRevenue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
