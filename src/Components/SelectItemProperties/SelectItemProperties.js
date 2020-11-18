import React from "react";
import "./selectItemProperties.css";
export const SelectItemProperties = ({ data, handleChange, ...otherProps }) => {
  return (
    <div className="selector">
      <select
        className="dataSelector"
        multiple
        onChange={handleChange}
        {...otherProps}
      >
        <option value="default" disabled selected hidden></option>
        {data.map((props, index) => (
          <option key={index}>{props}</option>
        ))}
      </select>
    </div>
  );
};
