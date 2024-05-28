import React from 'react';
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import './DateFilter.css'; // Import custom styles for DateFilter component

// DateFilter component to select and filter by date range
const DateFilter = ({ startDate, endDate, setStartDate, setEndDate, handleFilter, handleReset }) => {
  return (
    <div className="date-filter">
      <div className="date-inputs">
        <div className="date-input">
          <label>Start Date</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> {/* Start Date Picker */}
        </div>
        <div className="date-input">
          <label>End Date</label>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /> {/* End Date Picker */}
        </div>
      </div>
      <div className="date-buttons">
        <button onClick={handleFilter}>Filter</button> {/* Apply date filter */}
        <button onClick={handleReset}>Reset</button> {/* Reset date filter */}
      </div>
    </div>
  );
};

export default DateFilter; // Export DateFilter component
