import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const TypeDate = ({ selectedDate, setSelectedDate, placeholder = "Select Date", name = "date" }) => {
  const [localDate, setLocalDate] = useState(selectedDate ? new Date(selectedDate) : null);

  useEffect(() => {
    setLocalDate(selectedDate ? new Date(selectedDate) : null);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setLocalDate(date);
      setSelectedDate({ target: { name, value: date.toISOString() } });
    }
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={name.toLowerCase()}
        className="w-full bg-controller border border-secondary/25 px-4 py-3 rounded-[3px] flex items-center justify-between cursor-pointer focus-within:border-primary transition-all duration-300"
      >
        <DatePicker
          id={name.toLowerCase()}
          name={name}
          selected={localDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText={placeholder}
          className="w-full bg-transparent border-none outline-none text-black"
          popperClassName="react-datepicker-popper"
          aria-label={placeholder}
        />
        <FaCalendarAlt className="text-gray-500" />
      </label>
    </div>
  );
};

export default TypeDate;
