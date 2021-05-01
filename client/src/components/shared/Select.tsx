import React from "react";

function Select({ items, placeholder, onChange, value, name, required }) {
  return (
    <div className="h-10 mt-2 rounded-md border border-gray-300 overflow-hidden">
      <select
        className="w-full h-full bg-transparent  text-gray-500 border-none outline-none"
        onChange={onChange}
        value={value}
        name={name}
      >
        <option value="">---{placeholder}----</option>
        {items?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
